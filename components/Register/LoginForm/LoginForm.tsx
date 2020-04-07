import '../RegisterForm.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Router from 'next/router'
import StyledInput from '../../Input/Input'
import Button from '../../Button/Button'


const LoginForm = () => {
    const handleSubmit = async (values) => {
        try {
            const res = await fetch(`${process.env.API_URL}/api/signup`, {
                method: 'POST',
                headers: {
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

    return (
        <div className="login-card-container">
            <div className="card login-card">
                <div className="title-container">  <h1 className="card-title ">Login</h1></div>

                <div className="card-content">
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',

                        }}
                        onSubmit={handleSubmit}
                        render={({ handleChange, submitForm }) => {
                            return <Form className="form-container">
                                <h2>Faça seu login abaixo:</h2>
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

                                <div className="button-container">
                                    <Button color="primary" onClick={() => submitForm()}>Entrar</Button>
                                </div>
                            </Form>
                        }}
                    />
                </div>
            </div>
        </div>)
}
export default LoginForm;