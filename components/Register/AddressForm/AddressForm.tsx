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


const AddressForm = ({ values, loading, onSubmit, profile, producer = null }) => {
    const { cardTitle } = stringMap.get(profile)

    const handleCepChange = async (e, setValues, currentValues) => {
        const cep: string = e.target.value;
        if (cep && !cep.includes('_')) {

            const res = await fetch(`https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json/`);
            const data = await res.json();
            setValues({
                ...currentValues,
                zipcode: cep,
                address: data.logradouro,
                city: data.localidade,
                state: data.uf
            })
        }
    }
    return (
        <div className="card">
            <div className="title-container">
                <h1 className="card-title">{cardTitle}</h1>
            </div>
            <div className="card-content">
                <label>Confirmar dados <span> &gt; </span> Endereço comercial</label>

                <Formik
                    initialValues={{
                        address: '',
                        zipcode: '',
                        number: '',
                        complement: '',
                        city: '',
                        state: ''
                    }}
                    validate={validate}
                    onSubmit={onSubmit}
                >
                    {({ errors, values, handleChange, setValues, setTouched }) => {
                        return (
                            <Form className="form-container">
                                <h2 className="form-title">Para finalizar, basta atualizar os dados do seu endereço comercial.</h2>
                                <div className="row">
                                    <div className="form-group">
                                        <label>CEP</label>
                                        <Field
                                            name="zipcode"
                                            mask="99999-999"
                                            placeholder="CEP"
                                            onChange={(e) => {
                                                handleCepChange(e, setValues, values)
                                                handleChange('zipcode')(e)
                                            }}
                                            component={StyledInput}
                                        />
                                        <ErrorMessage name="zipcode" component="span" />

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
                                        color="secundary"
                                        type="submit"
                                        tabIndex={1}
                                        loading={loading.toString()}
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
        </div>

    )
}
export default AddressForm