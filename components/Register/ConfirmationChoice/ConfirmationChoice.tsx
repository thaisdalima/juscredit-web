import '../RegisterForm.scss'
import Button from '../../Button/Button';
const stringMap = new Map([
    ['user', {
        cardTitle: 'Cadastrando meus dados',
    }],
    ['producer', {
        cardTitle: 'Cadastrando meus dados',
    }],
    ['update-producer', {
        cardTitle: 'Atualizando os meus dados',
    }]
])

const ConfirmationChoice = ({ values, onSubmit, profile }) => {
    const { cardTitle } = stringMap.get(profile)
    const { email, phone } = values;
    return (
        <div className="card">
            <label>Confirmar dados > Confirmar identidade</label>
            <h1 className="card-title">{cardTitle}</h1>
            <h2 className="form-title">Como prefere confirmar sua identidade?</h2>
            <div className="choice-container">
                <span>Email:   <strong> {email}</strong></span>
                <Button onClick={()=>onSubmit('email')} color="primary">Confirmar por email</Button>
            </div>
            <div className="choice-container">
                <span>Telefone: <strong>{phone}</strong></span>
                <Button onClick={()=>onSubmit('sms')} color="primary">Confirmar por SMS</Button>
            </div>
        </div>)
}

export default ConfirmationChoice