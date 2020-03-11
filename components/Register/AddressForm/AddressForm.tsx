import '../RegisterForm.scss'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import StyledInput from '../../Input/Input';
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


const validate = (values) => {
    let errors: any = {}

    return errors
}


const AddressForm = ({ values, loading, onSubmit, profile }) => {
    const { cardTitle } = stringMap.get(profile)

    const handleCepChange = async (e, setValues) => {
        const cep: string = e.target.value;
        if (cep && !cep.includes('_')) {

            const res = await fetch(`https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json/`);
            const data = await res.json();
            setValues({
                address: data.logradouro,
                city: data.localidade,
                state: data.uf
            })
        }
    }
    return (
        <div className="card">
            <label>Confirmar dados > Endereço comercial</label>
            <h1 className="card-title">{cardTitle}</h1>
            <Formik
                initialValues={{
                    address: '',
                    cep: '',
                    number: '',
                    complement: '',
                    city: '',
                    state: ''
                }}
                validate={validate}
                onSubmit={onSubmit}
            >
                {({ errors, values, handleChange, setValues }) => {
                    return (
                        <Form className="form-container">
                            <h2 className="form-title">Para finalizar, basta atualizar os dados do seu endereço comercial.</h2>
                            <div className="row">
                                <div className="form-group">
                                    <label>CEP</label>
                                    <Field
                                        name="cep"
                                        mask="99999-999"
                                        placeholder="CEP"
                                        onChange={(e) => {
                                            handleCepChange(e, setValues)
                                            handleChange('cep')(e)
                                        }}
                                        component={StyledInput}
                                    />
                                    <ErrorMessage name="cep" component="span" />

                                </div>


                            </div>
                            <div className="row">
                                <div className="form-group">
                                    <label>Endereço</label>
                                    <Field
                                        name="address"
                                        mask={null}
                                        placeholder="Endereço"
                                        component={StyledInput}
                                        disabled
                                    />
                                    <ErrorMessage name="address" component="span" />

                                </div>
                                <div className="form-group">
                                    <label>Número</label>
                                    <Field
                                        name="number"
                                        placeholder="Número"
                                        component={StyledInput}
                                    />
                                    <ErrorMessage name="number" component="span" />

                                </div>
                            </div>
                            <div className="row">

                                <div className="form-group">
                                    <label>Complemento</label>
                                    <Field
                                        name="complement"
                                        placeholder="Complemento"
                                        component={StyledInput}
                                    />
                                    <ErrorMessage name="complement" component="span" />

                                </div>
                                <div className="form-group">
                                    <label>Cidade</label>
                                    <Field
                                        name="city"
                                        mask={null}
                                        placeholder="Cidade"
                                        component={StyledInput}
                                        disabled
                                    />
                                    <ErrorMessage name="city" component="span" />

                                </div>
                            </div>
                            <div className="form-group">
                                <label>Estado</label>
                                <Field
                                    name="state"
                                    mask={null}
                                    placeholder="Estado"
                                    component={StyledInput}
                                    disabled
                                />
                                <ErrorMessage name="state" component="span" />

                            </div>

                            <div className="button-container">

                                <Button
                                    color="primary"
                                    type="submit"
                                    tabIndex={1}
                                    loading={loading}
                                    disabled={
                                        Object.keys(errors).length > 0}
                                >Avançar</Button>
                            </div>
                        </Form>
                    )
                }
                }

            </Formik>
        </div>

    )
}
export default AddressForm