import '../RegisterForm.scss'
import Button from '../../Button/Button'

const ProducerNotFound = ({ onSubmit }) => {

    return (
        <div className="card">
            <div className="title-container">  <h1 className="card-title ">Iniciar Cadastro</h1></div>

            <div className="card-content">
                <h1 className="form-title success">
                   Obrigado
            </h1>
                <p>Cadastre-se para começar a usufruir gratuitamente da plataforma</p>
                <div className="button-container">
                    <Button color="primary" onClick={onSubmit}>Iniciar cadastro</Button>
                </div>
            </div>
            <div className="background-container">
            </div>
      
        </div>)

}

export default ProducerNotFound;