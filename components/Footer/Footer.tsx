import './Footer.scss'
import Button from '../Button/Button'
import StyledInput from '../Input/Input';

const Footer = () => (
    <footer className="footer-container">
        <div className="menu">
            <h3>Como Funciona</h3>
            <a>Antecipar</a>
            <a>Dúvidas</a>
            <a>Parceiros</a>
            <a>Entrar</a>
        </div>
        <div className="contact">
            <h3>Contato</h3>
            <p>Indique créditos trabalhistas e ganhe conosco! <strong>contato@juscredit.com.br</strong></p>
          </div>

          <div className="contact">
            <h3>Estamos online</h3>
            <p><img src="/Grupo de máscara -6@2x.png" className="footer-logo" />Facebook </p>
            <p> <img src="/Grupo de máscara -7@2x.png" className="footer-logo" />Instagram </p>
            <p><img src="/Grupo de máscara -19@2x.png" className="footer-logo" />LinkedIn </p>
            <p> <img src="/Grupo de máscara -9@2x.png" className="footer-logo" />oi@juscredit.com.br</p>
          </div>
    
    </footer>
)
export default Footer;