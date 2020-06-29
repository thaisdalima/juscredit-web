import '../RegisterForm.scss'
import { FastField } from 'formik';
import StyledInput from '../../Input/Input';
import Button from '../../Button/Button';
import { useState } from 'react';
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

const choiceLabel = new Map([
    ['email', 'email'],
    ['sms', 'celular']
])

const Confirmation = ({ onSubmit, profile, confirmationChoice, loading = 'false', onSendAgain, invalid }) => {
    const { cardTitle } = stringMap.get(profile)
    const [confirmation, setConfirmation] = useState('')
    return (
        <div className="card">
            <div className="title-container">
                <h1 className="card-title">{cardTitle}</h1>
            </div>
            <div className="card-content">

                <label>Confirmar dados <span> &gt; </span> Confirmar identidade</label>

                <h2 className="form-title">Enviamos um código de 6 digitos para o seu {choiceLabel.get(confirmationChoice)}</h2>
                <div className="confirmation-container">
                    <div className="form-group">
                        <label>Por favor, insira o código abaixo:</label>
                        <StyledInput mask="999999" value={confirmation} onChange={(e) => setConfirmation(e.target.value)} />

                    </div>
                    <Button loading={loading.toString()} color="primary" onClick={() => onSubmit(confirmation)} disabled={confirmation.length !== 6 || confirmation.includes('_')}>Continuar</Button>

                </div>
                {invalid && <p className='error-message'>Código inválido</p>}
                <div className="not-received">
                    <span>
                        Não recebeu o código?
                </span>
                    <a onClick={() => onSendAgain()}>Clique aqui para enviar novamente </a>
                </div>
            </div>
        </div>)
}

export default Confirmation