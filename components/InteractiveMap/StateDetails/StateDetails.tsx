import './StateDetails.scss'
import Button from '../../Button/Button'


const StateDetails = ({ stateDetail, onGoBack }: { stateDetail: any, onGoBack: any }) => {

    return (
        <div className="state-detail-container">
            <a onClick={onGoBack} className="go-back">{'< Voltar'}</a>
            <h1>São Paulo</h1>
            <p className="rank">3º maior estado em produtores orgânicos</p>

            <span><a className="big-number">3.157</a> produtores orgânicos</span>
            <span><a className="big-number"> 1.243 </a>certificados</span>
            <span><a className="big-number"> 253</a> feiras orgânicas</span>

            <p className="statistics">58% de aumento de produtores nos últimos 2 anos</p>

            <strong> Categorias de produtos:</strong>
            <p>Alimentos, Bebidas e Têxtil</p>
            <strong>Escopo de produção:</strong>
            <p>EXT, PPA, OV, PIA</p>
            <Button color="primary">Ver lista completa de produtores</Button>
        </div>)
}
export default StateDetails