import RegisterForm from "../../components/Register/RegisterForm";
import { useState } from "react";
import ConfirmationChoice from "../../components/Register/ConfirmationChoice/ConfirmationChoice";
import Confirmation from "../../components/Register/Confirmation/Confirmation";
import RegisterSuccess from "../../components/Register/RegisterSuccess/RegisterSuccess";

const SignupUser = () => {
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

    const handleConfimation = async (value) => {
        setLoading(true)
        await createUser({
            ...userValues
        })
        setStep(3)
    }
    const createUser = async (body) => {
        try {
            const res = await fetch('', { method: 'POST', body: JSON.stringify(body) })
            const data = await res.json();
            return data;
        }
        catch (e) {
            console.error(e)
        }
    }

    switch (step) {

        case 0:
            return <RegisterForm profile="user" onSubmit={handleUserSubmit} />
        case 1:
            return <ConfirmationChoice profile="user" values={userValues} onSubmit={handleConfimationChoice} />
        case 2:
            return <Confirmation loading={loading} profile="user" confirmationChoice={confirmationChoice} onSubmit={handleConfimation} />
        case 3:
            return <RegisterSuccess />
    }

}
export default SignupUser