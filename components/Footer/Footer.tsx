import './Footer.scss'
import StyledInput from '../Input/Input';

const Footer = () => (
  
    <footer className="footer-container">
        <div className="menu">
            <h3>Institucional</h3>
            <a>Política de privacidade</a>
            <a>Termos de uso Trabalhador</a>
            <a>Termos de uso Investidor</a>
            <div className="abfintech"> 
            <img src="/ABFintechs.svg"/> 
            </div>

           </div>
        <div className="lead-container">
            <h3>Ajuda e Atendimento</h3>
            <a>Dúvidas</a>
            <a>Como Funciona</a>
          </div>

          <div className="contact">
            <h3>Estamos online</h3>
            <p><img src="/Grupo de máscara -6@2x.png"  className="footer-logo" /> Facebook </p>
            <p> <img src="/Grupo de máscara -7@2x.png" className="footer-logo" /> Instagram </p>
            <p><img src="/Grupo de máscara -19@2x.png" className="footer-logo" /> LinkedIn </p>
            <p> <img src="/Grupo de máscara -9@2x.png" className="footer-logo" />  oi@juscredit.com.br</p>
            <img src="/direitos.svg"/>
          
           </div> 
           
    </footer>

)
export default Footer;