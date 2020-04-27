import RegisterForm from "../../../components/Register/RegisterForm";
import { useState } from "react";
import ConfirmationChoice from "../../../components/Register/ConfirmationChoice/ConfirmationChoice";
import Confirmation from "../../../components/Register/Confirmation/Confirmation";
import AddressForm from "../../../components/Register/AddressForm/AddressForm";
import RegisterSuccess from "../../../components/Register/RegisterSuccess/RegisterSuccess";
import fetch from 'isomorphic-unfetch'
import ProducerFound from "../../../components/Register/ProducerFound/ProducerFound";

const UpdateProducer = ({ data }) => {
    const { id: producerId } = data;
    const [step, setStep] = useState(-1)
    const [userValues, setUserValues] = useState(null)
    const [confirmationChoice, setConfirmationChoice] = useState(null);
    const [invalidCode, setInvalid] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleUserSubmit = (values) => {
        setUserValues(values)
        setStep(1)
    }

    const handleConfimationChoice = async (choice) => {
        setConfirmationChoice(choice)
        try {
            setLoading(true)
            await sendConfirmation(choice)
            setLoading(false)
            setStep(2)
        } catch (e) {
            setLoading(false)

        }
    }

    const handleConfimation = async (value) => {
        const { email, phone } = userValues;
        setLoading(true)
        try {
            const res = await fetch(`${process.env.API_URL}/api/confirmation/verify`,
                {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            target: confirmationChoice === 'email' ? email : `+55${phone.replace(/\D/g, '')}`,
                            code: value
                        }),
                    headers: {
                        'Content-Type': 'application/json'
                    }

                })
            setLoading(false);
            if (res.status === 200) {
                setStep(3)
            } else {
                setInvalid(true);
            }

        } catch (e) {

            setLoading(false);

            console.log(e)
        }
    }

    const sendConfirmation = async (choice) => {
        const { email, phone } = userValues
        try {
            const res = await fetch(`${process.env.API_URL}/api/confirmation/send-${choice}`,
                {
                    method: 'POST',
                    body: JSON.stringify(
                        choice === 'email' ? {
                            email
                        } : {
                                phone: `+55${phone.replace(/\D/g, '')}`
                            }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            if (res.status !== 200) {
                throw res;
            }
        } catch (e) {
            throw e
        }
    }
    const handleAddressSubmit = async (values) => {
        setLoading(true)
        const addressString = `${values.address}, ${values.number}, ${values.city}, ${values.state}`
        const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressString}&key=AIzaSyD9birqocIzncUHjXSWIrx67UAT865gp84`)
        const data = await res.json();
        const { lat, lng } = data.results[0].geometry.location
        if (res.status === 200) {
            await updateProducer({
                zipcode: values.zipcode,
                address: `${values.address}, ${values.number}`,
                city: values.city,
                state: values.state,
                country: 'BR',
                ...userValues,
                latitude: lat,
                longitude: lng
            })
            document.cookie = `lead=${true}; path=/`;
            setStep(4)
        } else {
            setInvalid(true);
        }
    }

    const updateProducer = async (body) => {
        try {
            const res = await fetch(
                `${process.env.API_URL}/api/produtores/${producerId}`,
                {
                    method: 'PUT',
                    body: JSON.stringify(body),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            const data = await res.json();
            return data;
        }
        catch (e) {
            console.error(e)
        }
    }
    switch (step) {
        case -1:
            return <ProducerFound producer={data} onSubmit={() => setStep(0)} />
        case 0:
            return <RegisterForm profile="update-producer" onSubmit={handleUserSubmit} producer={data} />
        case 1:
            return <ConfirmationChoice choice={confirmationChoice} profile="producer" values={userValues} onSubmit={handleConfimationChoice} />
        case 2:
            return <Confirmation onSendAgain={() => sendConfirmation(confirmationChoice)} profile="producer" invalid={invalidCode} confirmationChoice={confirmationChoice} onSubmit={handleConfimation} />
        case 3:
            return <AddressForm profile="producer" loading={loading.toString()} values={userValues} producer={data} onSubmit={handleAddressSubmit} />
        case 4:
            return <RegisterSuccess />
    }




}

UpdateProducer.getInitialProps = async ({ query }) => {
    const { id } = query
    const res = await fetch(`${process.env.API_URL}/api/produtores/${id}`)
    const data = await res.json();
    return { data }
}
export default UpdateProducer