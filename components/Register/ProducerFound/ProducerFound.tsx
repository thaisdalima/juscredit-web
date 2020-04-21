import '../RegisterForm.scss'
import Button from '../../Button/Button'
import { useRouter } from 'next/router'

const ProducerFound = ({ producer, onSubmit }) => {

    const router = useRouter()
    return (
        <div className="card">
            <div className="title-container">  <h1 className="card-title ">Meus dados</h1></div>

            <div className="card-content">

                <h1 className="form-title success">
                    Parabéns você está cadastrado no MAPA!
            </h1>
                <div className="map-svg-container">
                    <div className="info-container">
                        <p>{producer.companyName || producer.contactName || 'PRODUTOR SEM NOME'}</p>
                        <p>{`${producer.address}, ${producer.city} - ${producer.state}`}</p>
                        <p>CEP {producer.zipcode}</p>
                    </div>
                    <img src="/brazil.svg" />
                </div>


                <p>Mas para sua validação, precisamos que você confirme os dados acima.</p>
                <div className="button-container">
                    <Button color="primary" onClick={onSubmit}>Atualizar dados</Button>
                    <Button color="secondary" onClick={()=>router.push('/find-partners')}>Os dados estão corretos</Button>
                </div>
            </div>

        </div>)
}
export default ProducerFound