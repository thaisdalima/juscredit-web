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

const ConfirmationChoice = ({ values, onSubmit, profile, choice }) => {
    const { cardTitle } = stringMap.get(profile)
    const { email, phone } = values;
    return (
        <div className="card">
            <div className="title-container">
                <h1 className="card-title">{cardTitle}</h1>
            </div>
            <div className="card-content">

                <label>Confirmar dados > Confirmar identidade</label>
                <h2 className="form-title">Como prefere confirmar sua identidade?</h2>
                <div className="choice-container">
                    <div className="choice-label">
                        <span>Email:   <strong> {email}</strong></span>
                    </div>
                    <Button onClick={() => onSubmit('email')} loading={choice === 'email' && "true"} color="primary">Confirmar por email</Button>
                </div>
                <div className="choice-container">
                    <div className="choice-label">
                        <span>Telefone: <strong>{phone}</strong></span>
                    </div>
                    <Button onClick={() => onSubmit('sms')} loading={choice === "sms" && "true"} color="primary">Confirmar por SMS</Button>
                </div>
            </div>
        </div>)
}

export default ConfirmationChoice