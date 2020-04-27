import Button from "../../Button/Button"
import Router from "next/router"

const RegisterSuccess = () => {
    return (
        <div className="card success">
            <div className="title-container">
                <h1 className="card-title success">Cadastro finalizado</h1>
            </div>
            <div className="card-content">

                <h1 className="form-title success">
                    Parabéns, seu cadastro foi finalizado!
            </h1>
                <h2 className="community-info">Você agora faz parte da JusCredit!</h2>
                <h3 className="contact-info">
                    Você receberá um email para criação de senha e completar seu perfil <br/>
                    Iremos entrar em contato com você para confirmar suas informações.
           </h3>
               
            </div>
        </div>
    )
}
export default RegisterSuccess