import '../RegisterForm.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import StyledInput from '../../Input/Input'
import Button from '../../Button/Button'
import Router from 'next/router'
const PasswordForm = ({ user, token }) => {

    const handleSubmit = async (values) => {
        try {
            const res = await fetch(`${process.env.API_URL}/api/signup`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    password: values.password
                })
            })
            if (res.status === 200) {
                const { token } = await res.json();
                document.cookie = `lead=${true}; path=/`;
                document.cookie = `auth_token=${token}; path=/`
                Router.push('/find-partners')
            }
        } catch (e) {
            console.error(e)
        }
    }
    return (<div className="card">
        <div className="title-container">  <h1 className="card-title ">Criar senha</h1></div>

        <div className="card-content">
            <Formik
                initialValues={{
                    email: user.email,
                    password: '',
                    confirmPassword: ''
                }}
                onSubmit={handleSubmit}
                render={({ handleChange, submitForm }) => {
                    return <Form className="form-container">
                        <h2>Olá {user.name}, para acessar o seu perfil basta criar uma senha.</h2>
                        <div className="row">
                            <div className="form-group">
                                <label>Email</label>
                                <Field
                                    name="email"
                                    disabled="true"
                                    placeholder="Email"
                                    onChange={handleChange('email')}
                                    component={StyledInput}
                                />
                                <ErrorMessage name="email" component="span" />

                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <label>Senha</label>
                                <Field
                                    name="password"
                                    placeholder="Senha"
                                    onChange={handleChange('password')}
                                    type="password"
                                    component={StyledInput}
                                />
                                <ErrorMessage name="password" component="span" />

                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <label>Confirmar senha</label>
                                <Field
                                    name="confirmPassword"
                                    placeholder="Confirmar senha"
                                    onChange={handleChange('confirmPassword')}
                                    type="password"
                                    component={StyledInput}
                                />
                                <ErrorMessage name="confirmPassword" component="span" />

                            </div>
                        </div>
                        <div className="button-container">
                            <Button color="primary" onClick={() => submitForm()}>Finalizar cadastro</Button>
                        </div>
                    </Form>
                }}
            />
        </div>
    </div>)
}

export default PasswordForm