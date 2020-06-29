import './Footer.scss'
import { Link } from "react-scroll";


const Footer = () => (

    <footer className="footer-container">
        <div className="menu">
            <h3>Institucional</h3>
            <Link to="">
                Política de privacidade
            </Link>
            <Link to="">
                Termos de uso Cliente
            </Link>
            <Link to="">
                Termos de uso Investidor
            </Link>
            <div className="abfintech">
                <img src="/ABFintechs.svg" />
            </div>
        </div>

        <div className="ajuda-container">
            <h3>Ajuda e Atendimento</h3>
            <Link to="funciona-container">
                Como Funciona</Link>
            <Link to="duvidas-container">
                Dúvidas</Link>
        </div>

        <div>
            <h3>Fale conosco</h3>
            <a className="flex align-items-center" href="/contact">
                <img src="/Grupo de máscara -9@2x.png" className="footer-logo" style={{ marginRight: '8px' }} />
                <span>oi@juscredit.com.br</span>
            </a>
        </div>

        <div className="contato">
            <h3>Estamos online</h3>
            <a href="https://www.facebook.com/juscredit">
                <img src="/Grupo de máscara -6@2x.png" className="footer-logo" />
            </a>
            <a href="https://www.instagram.com/jus.credit/">
                <img src="/Grupo de máscara -7@2x.png" className="footer-logo" />
            </a>
            <a href="https://www.linkedin.com/company/juscredit">
                <img src="/Grupo de máscara -19@2x.png" className="footer-logo" />
            </a>

            <div className="direitos-container">
                <img src="/direitos.svg" />
            </div>
        </div>
    </footer>

)
export default Footer;