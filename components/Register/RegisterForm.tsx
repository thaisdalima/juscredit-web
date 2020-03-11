import './RegisterForm.scss'
import StyledInput from '../Input/Input'
import Button from '../Button/Button'
import { Formik, Field, Form, ErrorMessage } from 'formik'

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
    } else if (!PHONE_REGEX.test(values.phone)) {
        errors.phone = 'Celular inválido'
    }
    return errors
}


const RegisterForm = ({ profile, onSubmit }) => {
    const { cardTitle, formTitle } = stringMap.get(profile)
    return (
        <div className="card">
            <label>Confirmar dados</label>
            <h1 className="card-title">{cardTitle}</h1>
            <Formik
                initialValues={{
                    email: '',
                    confirmEmail: '',
                    phone: ''
                }}
                validate={validate}
                onSubmit={({email, phone})=> onSubmit({email,phone})}
            >
                {({ errors, touched }) => {
                    return (
                        <Form className="form-container">
                            <h2 className="form-title">{formTitle}</h2>
                            <div className="row">
                                <div className="form-group">
                                    <label>Email</label>
                                    <Field
                                        name="email"
                                        mask={null}
                                        placeholder="Email"
                                        component={StyledInput}
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
                            <div className="button-container">

                                <Button color="primary" type="submit" tabIndex={1} disabled={(Object.keys(touched).length < 2) || Object.keys(errors).length > 0} >Avançar</Button>
                            </div>
                        </Form>
                    )
                }
                }

            </Formik>
        </div>

    )
}
export default RegisterForm