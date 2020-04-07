import RegisterForm from "../../components/Register/RegisterForm";
import { useState, useEffect } from "react";
import ConfirmationChoice from "../../components/Register/ConfirmationChoice/ConfirmationChoice";
import Confirmation from "../../components/Register/Confirmation/Confirmation";
import AddressForm from "../../components/Register/AddressForm/AddressForm";
import RegisterSuccess from "../../components/Register/RegisterSuccess/RegisterSuccess";
import { useRouter } from "next/router";
import ProducerNotFound from "../../components/Register/ProducerNotFound/ProducerNotFound";

const SignupProducer = () => {
    const [step, setStep] = useState(0)
    const [userValues, setUserValues] = useState(null)
    const [confirmationChoice, setConfirmationChoice] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleUserSubmit = (values) => {
        setUserValues(values)
        setStep(1)
    }

    const handleConfimationChoice = (choice) => {
        setConfirmationChoice(choice)
        setStep(2)
    }

    const handleConfimation = (value) => {
        setStep(3)
    }

    const handleAddressSubmit = async (values) => {
        setLoading(true)
        const addressString = `${values.address}, ${values.number}, ${values.city}, ${values.state}`
        const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressString}&key=AIzaSyD9birqocIzncUHjXSWIrx67UAT865gp84`)
        const data = await res.json();
        const { lat, lng } = data.results[0].geometry.location

        await createProducer({
            address: `${values.address}, ${values.number}`,
            city: values.city,
            state: values.state,
            ...userValues,
            latitude: lat,
            longitude: lng
        })
        setStep(4)
    }

    const createProducer = async (body) => {
        try {
            const res = await fetch('https://api.organis8.com.br/api/produtores', { method: 'POST', body: JSON.stringify(body) })
            const data = await res.json();
            return data;
        } 
        catch(e) {
            console.error(e)
        }   
    }
    switch (step) {

        case 0:
            return <RegisterForm profile="producer" onSubmit={handleUserSubmit} />
        case 1:
            return <ConfirmationChoice profile="producer" values={userValues} onSubmit={handleConfimationChoice} />
        case 2:
            return <Confirmation profile="producer" confirmationChoice={confirmationChoice} onSubmit={handleConfimation} />
        case 3:
            return <AddressForm profile="producer" loading={loading} values={userValues} onSubmit={handleAddressSubmit} />
        case 4:
            return <RegisterSuccess />
    }




}
export default SignupProducer