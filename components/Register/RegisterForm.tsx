import './RegisterForm.scss'
import StyledInput from '../Input/Input'
import Button from '../Button/Button'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useState, ChangeEvent } from 'react'
import { Masks } from '../../utils/mask'
import { useRouter } from 'next/router'
import { Validators } from '../../utils/validators'

const stringMap = new Map([
    ['user', {
        cardTitle: 'Cadastrando meus dados',
        formTitle: 'Informe seus contatos antes de receber acesso gratuito a nossa plataforma.'
    }],
    ['producer', {
        cardTitle: 'Cadastrando meus dados',
        formTitle: 'Informe seus contatos antes de receber acesso gratuito a nossa plataforma.'
    }],
    ['update-producer', {
        cardTitle: 'Atualizando os meus dados',
        formTitle: 'Confirme seus contatos antes de atualizar seus dados:'
    }]
])

const MAIL_REGEX = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
const PHONE_REGEX = new RegExp(/^\([1-9]{2}\) [0-9]{5}\-[0-9]{4}$/i);
const ONLY_NUMBERS_REGEX = new RegExp(/^\d+$/);
const validate = (values) => {
    let errors: any = {}
    if (!values.email) {
        errors.email = 'Campo obrigatório'
    } else if (!MAIL_REGEX.test(values.email)) {
        errors.email = 'Email inválido'
    }

    if (!values.confirmEmail) {
        errors.confirmEmail = 'Campo obrigatório'
    } else if (values.confirmEmail !== values.email) {
        errors.confirmEmail = 'Email não coincide'
    }
    if (!values.phone) {
        errors.phone = 'Campo obrigatório'
    } else if (!PHONE_REGEX.test(values.phone) && !ONLY_NUMBERS_REGEX.test(values.phone)) {

        errors.phone = 'Celular inválido'
    }

    if (!values.contactDocument) {
        errors.contactDocument = 'Campo obrigatório'
    } else if (!Validators.cpf(values.contactDocument)) {
        errors.contactDocument = 'CPF inválido'
    }

    if (values.companyDocument && !Validators.cnpj(values.companyDocument)) {
        errors.companyDocument = 'CNPJ inválido'
    }

    if(!values.termsOfUse){
        errors.termsOfUse =  "É necessário concordar com os termos de uso e com a política de privacidade"
    }
    return errors
}


const RegisterForm = ({ profile, onSubmit, producer = null }) => {
    const { cardTitle, formTitle } = stringMap.get(profile)

    return (
        <div className="card">

            <div className="title-container">
                <h1 className="card-title">{cardTitle}</h1>
            </div>
            <div className="card-content">
                <label>Confirmar dados</label>
                <Formik
                    initialValues={{
                        contactName: '',
                        contactDocument: '',
                        email: '',
                        confirmEmail: '',
                        phone: '',
                        companyName: '',
                        companyDocument: '',
                        termsOfUse: false
                    }}
                    validate={validate}
                    onSubmit={(
                        { email, phone, contactDocument, contactName, companyName, companyDocument }
                    ) => onSubmit({ email, phone, contactName, contactDocument, companyName, companyDocument })}
                >
                    {({ errors, touched, handleChange, values, setValues, setTouched }) => {
                        if (producer && (!values.contactName && !values.companyName)) {
                            setValues({
                                ...producer,
                                confirmEmail: producer.email
                            })
                            setTouched(values)
                        }
                        return (
                            <Form className="form-container">
                                <h2 className="form-title">{formTitle}</h2>
                                <div className="row">
                                    <div className="form-group">
                                        <label>Nome completo</label>
                                        <Field
                                            name="contactName"
                                            mask={null}

                                            placeholder="Nome completo"
                                            onChange={handleChange('contactName')}
                                            component={StyledInput}

                                        />
                                        <ErrorMessage name="contactName" component="span" />

                                    </div>
                                    <div className="form-group">
                                        <label>CPF</label>
                                        <Field
                                            name="contactDocument"
                                            mask={Masks.CPF}
                                            placeholder="CPF"
                                            onChange={handleChange('contactDocument')}
                                            component={StyledInput}
                                        />
                                        <ErrorMessage name="contactDocument" component="span" />

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group">
                                        <label>Nome da empresa (opcional)</label>
                                        <Field
                                            name="companyName"
                                            mask={null}
                                            placeholder="Nome da empresa"
                                            component={StyledInput}

                                        />
                                        <ErrorMessage name="companyName" component="span" />

                                    </div>
                                    <div className="form-group">
                                        <label>CNPJ (opcional)</label>
                                        <Field
                                            name="companyDocument"
                                            mask={Masks.CNPJ}
                                            placeholder="CNPJ"
                                            component={StyledInput}

                                        />
                                        <ErrorMessage name="companyDocument" component="span" />

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <Field
                                            name="email"
                                            mask={null}
                                            placeholder="Email"
                                            component={StyledInput}
                                            disabled={profile === 'update-producer'}
                                        />
                                        <ErrorMessage name="email" component="span" />

                                    </div>
                                    <div className="form-group">
                                        <label>Confirme seu email</label>
                                        <Field
                                            name="confirmEmail"
                                            mask={null}
                                            placeholder="Confirme seu email"
                                            component={StyledInput}

                                        />
                                        <ErrorMessage name="confirmEmail" component="span" />

                                    </div>

                                </div>
                                <div className="row">

                                    <div className="form-group">
                                        <label>Celular com DDD</label>
                                        <Field
                                            name="phone"
                                            mask="(99) 99999-9999"
                                            placeholder="Celular com DDD"
                                            component={StyledInput}
                                        />
                                        <ErrorMessage name="phone" component="span" />

                                    </div>

                                </div>
                                <div className="row">
                                    <div className="form-group checkbox">
                                        <Field
                                            name="termsOfUse"
                                            type="checkbox"
                                            component="input"
                                            checked={values.termsOfUse}
                                        />
                                        <label>Li e concordo com os <a>termos de uso</a> e com a <a>política de privacidade</a>.</label>
                                    </div>
                                </div>


                                <div className="button-container">

                                    <Button color="primary" type="submit" tabIndex={1} disabled={(Object.keys(touched).length < 2) || Object.keys(errors).length > 0} >Avançar</Button>
                                    {profile === 'update-producer' && <span>Caso você tenha sido encontrado em nossa base e queira atualizar o seu email e/ou telefone entre em contato conosco em <a href="mailto:contato@organis8.com.br">contato@organis8.com.br</a></span>}
                                </div>
                            </Form>
                        )
                    }
                    }

                </Formik>
            </div>
        </div>

    )
}
export default RegisterForm