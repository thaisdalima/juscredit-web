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
            <Link to="#como-funciona">
                Como Funciona</Link>
        </div>

        <div>
            <h3>Fale conosco</h3>
            <a className="flex align-items-center" href="/contact">
                <img src="/ic-carta.svg" className="footer-logo" style={{ marginRight: '8px' }} />
                <span>oi@juscredit.com.br</span>
            </a>
        </div>

        <div className="contato">
            <h3>Estamos online</h3>
            <a className="flex align-items-center" href="https://www.facebook.com/juscredit">
                <img src="/ic-facebook.svg" className="footer-logo" style={{ marginRight: '8px' }} />
                <span>Facebook</span>
            </a>
            <a className="flex align-items-center" href="https://www.instagram.com/jus.credit/">
                <img src="/ic-instagram.svg" className="footer-logo" style={{ marginRight: '8px' }} />
                <span>Instagram</span>
            </a>
            <a className="flex align-items-center" href="https://www.linkedin.com/company/juscredit">
                <img src="/ic-linkedin.svg" className="footer-logo" style={{ marginRight: '8px' }} />
                <span>Linkedin</span>
            </a>

            <div className="direitos-container">
                <img src="/direitos.svg" />
            </div>
        </div>
    </footer>

)
export default Footer;