import './Footer.scss';
import Link from 'next/link';


const Footer = () => (

    <footer className="footer-container">
        <div>
            <div className="menu">
                <h3>Institucional</h3>
                <Link href="/JusCredit_-_Politica_de_Privacidade.pdf">
                    <a target="_blank">Política de privacidade</a>
                </Link>
                <Link href="/JusCredit_-_Temos_de_Uso_do_Cliente.pdf">
                    <a target="_blank">Termos de uso Cliente</a>
                </Link>
                <Link href="/JusCredit_-_Temos_de_Uso_do_Investidor.pdf">
                    <a target="_blank">Termos de uso Investidor</a>
                </Link>
            </div>

            <div className="ajuda-container">
                <h3>Ajuda e Atendimento</h3>
                <Link href="#como-funciona">
                    <a>Como Funciona</a>
                </Link>
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
                    <span>juscredit</span>
                </a>
                <a className="flex align-items-center" href="https://www.instagram.com/jus.credit/">
                    <img src="/ic-instagram.svg" className="footer-logo" style={{ marginRight: '8px' }} />
                    <span>jus.credit</span>
                </a>
                <a className="flex align-items-center" href="https://www.linkedin.com/company/juscredit">
                    <img src="/ic-linkedin.svg" className="footer-logo" style={{ marginRight: '8px' }} />
                    <span>juscredit</span>
                </a>
            </div>
        </div>
        <div>
            <div className="abfintech">
                <img src="/ABFintechs.svg" />
            </div>
            <div className="direitos-container">
                <span>2020 &copy; JusCredit - Todos os direitos reservados</span>
            </div>
        </div>
        <div style={{ paddingTop: '0' }}>
            <p className="disclaimer">
                A JusCredit Tecnologia e Serviços LTDA. “JusCredit”, pessoa jurídica de direito privado, inscrita no Cadastro Nacional de Pessoas Jurídicas do Ministério da Fazenda “CNPJ/MF” sob o nº 35.604.390/0001-93, com sede à Rua Marcos Lopes 272, Vila Nova Conceição, na cidade de São Paulo, Estado de São Paulo, CEP 04513-080, não é uma instituição financeira e não realiza operações de financiamento, investimentos ou quaisquer outras operações privativas de instituições financeiras. Tampouco solicitamos o pagamento de valores prévios para a análise de antecipação de direitos creditórios judiciais. Em caso de dúvidas, por favor, entre em contato conosco por meio do e-mail <span>oi@juscredit.com.br</span> .
            </p>
        </div>
    </footer>

)
export default Footer;