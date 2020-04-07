import './BePart.scss'
import Button from '../../components/Button/Button'
import StyledInput from '../../components/Input/Input';
import { useState, ChangeEvent } from 'react';
import { Masks } from '../../utils/mask';
import Link from 'next/link';
import Router from 'next/router';

const BePart = () => {
    const [documentInput, setDocument] = useState('')
    const [loading, setLoading] = useState(false)
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

    const validateDocument = async () => {
        setLoading(true);
        const res = await fetch(`${process.env.API_URL}/api/produtores/items?document=${documentInput}`)

        const data = await res.json();
        setLoading(false)
        if (data.length) {
            const producer = data[0]

            if (producer) {
                setUserNotFound(false)
                Router.push('/signup/update-producer/[id]', `/signup/update-producer/${producer.id}`)
            }
        } else {
            setUserNotFound(true)
            Router.push(`/signup/producer?notFound=true&document=${documentInput}`)
        }
    }
    return (
        <main className="be-part-container">
           
            <div>
                <h1>Insira seu CPF ou CNPJ abaixo</h1>
                <label>
                Seja um parceiro JusCredit, Indique créditos trabalhistas elegíveis e ganhe conosco.
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
                <Button color="primary" onClick={validateDocument} disabled={!documentInput.length} loading={loading.toString()} >Validar cadastro </Button>
                <Link href="/signup/producer"><a>Não estou cadastrado ></a></Link>
            </div>
            
        </main>
    );

}
export default BePart;    