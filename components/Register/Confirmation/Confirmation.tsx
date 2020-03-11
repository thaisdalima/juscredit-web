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

const Confirmation = ({ onSubmit, profile, confirmationChoice, loading = false }) => {
    const { cardTitle } = stringMap.get(profile)
    const [confirmation, setConfirmation] = useState('')
    return (
        <div className="card">
            <label>Confirmar dados > Confirmar identidade > Inserir código</label>
            <h1 className="card-title">{cardTitle}</h1>
            <h2 className="form-title">Enviamos um código de 6 digitos para o seu {choiceLabel.get(confirmationChoice)}</h2>
            <div className="confirmation-container">
                <div className="form-group">
                    <label>Por favor, insira o código abaixo:</label>
                    <StyledInput mask="999999" value={confirmation} onChange={(e)=>setConfirmation(e.target.value)}/>

                </div>
                <Button loading={loading} color="primary" onClick={onSubmit} disabled={confirmation.length !== 6 || confirmation.includes('_')}>Continuar</Button>

            </div>
            <div className="not-received">
                <span>
                    Não recebeu o código?
                </span>
                <a>Clique aqui para enviar novamente ></a>
            </div>
        </div>)
}

export default Confirmation