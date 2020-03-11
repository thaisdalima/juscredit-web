import './BePart.scss'
import Button from '../../components/Button/Button'
import StyledInput from '../../components/Input/Input';
import { useState, ChangeEvent } from 'react';
import { Masks } from '../../utils/mask';
import Link from 'next/link';

const BePart = ({ producers }: { producers: any[] }) => {
    const [documentInput, setDocument] = useState('')
    const [mask, setMask] = useState(Masks.CPF)
    const [shouldUpdateMask, setShouldUpdateMask] = useState(false)
    const [userNotFound, setUserNotFound] = useState(false)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (shouldUpdateMask) {
            setMask(Masks.CNPJ)
            setShouldUpdateMask(false)
        }
        setDocument(e.target.value)
    }
    const beforeMaskedValueChange = (values: any) => {
        if (values.selection) {
            const { end } = values.selection;
            if (end === 14) {
                setShouldUpdateMask(true)
            }
            if (mask === Masks.CNPJ && end === 13) {
                setMask(Masks.CPF)
            }
        }
        return {
            ...values
        }
    }

    const validateDocument = () => {
        if (producers) { 
            const producer = producers.find(({document})=> document === documentInput)

            if(producer){
            } else {
                setUserNotFound(true)
            }
        }
    }
    return (
        <main className="be-part-container">
            <img className="bg-left" src="/colored-products-left.svg" />
            <img className="bg-right" src="/be-part/bg.svg" />
            <div>
                <h1>Insira seu CPF ou CNPJ abaixo</h1>
                <label>
                    Se você é produtor e conhece o cadastro oficial do Ministério (MAPA) e acha que já faz parte, por favor, insira seu CPF ou CNPJ:
                </label>
                <StyledInput
                    mask={mask}
                    beforeMaskedValueChange={beforeMaskedValueChange}
                    placeholder="Ex: 111.111.111-11..."
                    value={documentInput}
                    onChange={handleChange}
                    className={userNotFound && 'not-found'}
                />
                {userNotFound && <span className="user-not-found">Cadastro não encontrado</span>}
                <Button color="primary" onClick={validateDocument} >Validar cadastro </Button>
                <Link href="/signup/producer"><a>Não estou cadastrado ></a></Link>
            </div>
            <img className="producer" src="/be-part/producer.svg" />
        </main>
    );

}
export default BePart;    