import './Footer.scss'
import StyledInput from '../Input/Input';
import { Link } from "react-scroll";


const Footer = () => (
  
    <footer className="footer-container">
        <div className="menu">
            <h3>Institucional</h3>
            <a>Política de privacidade</a>
            <br/>
            <a>Termos de uso Trabalhador</a>
            <br/>
            <a>Termos de uso Investidor</a>
            <div className="abfintech"> 
            <img src="/ABFintechs.svg"/> 
            </div>  
            </div>

        <div className="ajuda-container">
        <Link to="funciona-container">
            <h3>Ajuda e Atendimento</h3>
            <a className="link"></a>Como Funciona</Link>
            <br/>
            <Link to="duvidas-container">
            <a className="link"></a>Dúvidas </Link>
            <br/>
        
          </div>

          <div>
          <h3>Fale conosco</h3>
          <p> 
          <a href="/contact"> 
          <img src="/Grupo de máscara -9@2x.png" className="footer-logo"/></a>  oi@juscredit.com.br</p>
          </div>

          <div className="contact">
            <h3>Estamos online</h3>
            <p>
                <a href="https://www.facebook.com/juscredit">
                <img src="/Grupo de máscara -6@2x.png" className="footer-logo"/>
                </a>  Facebook</p>
                <p>
                <a href="https://www.instagram.com/juscredit">
                <img src="/Grupo de máscara -7@2x.png" className="footer-logo"/>
                </a> Instagram </p>
                <p>
                <a href="https://www.linkedin.com/company/juscredit">
                <img src="/Grupo de máscara -19@2x.png" className="footer-logo"/>
               </a>  LinkedIn </p>
                
                <div className="direitos-container"> 
                 <img src="/direitos.svg"/>    
            </div>
            </div>           
    </footer>

)
export default Footer;