import Button from "../../Button/Button"
import Router from "next/router"

const RegisterSuccess = () => {
    return (
        <div className="card success">
            <h1 className="card-title success">Cadastro finalizado</h1>
            <h1 className="form-title success">
                Parabéns, seu cadastro foi finalizado!
            </h1>
            <h2 className="community-info">Você agora faz parte da maior comunidade de produtores orgânicos do Brasil.</h2>
            <h3 className="contact-info">
                Iremos entrar em contato com você para confirmar suas informações.
           </h3>
            <div className="finish-container">
                <Button color="primary" onClick={() => Router.push('/')}>Finalizar e voltar para home</Button>
            </div>
        </div>
    )
}
export default RegisterSuccess