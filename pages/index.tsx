import './styles.scss'
import Button from '../components/Button/Button';
import { Fragment } from 'react';
import Associates from '../containers/Home/Associates';
import Media from '../containers/Home/Media';
import Head from 'next/head';
import Router from 'next/router'
const Index = () => {



    return (
        <Fragment>
            <Head>
                <title>Juscredit - Home</title>
            </Head>
            <main>

                <div className="map-container">
                    <div className="map" />
                      <img src="/antreceba.svg"/> 
                     </div>
                     <p>
                     <h1>Antecipe seu crédito trabalhista</h1>
                     <h2>Têm um processo ganho? Receba agora</h2>
                     
                     <p>
                    <div className="buttons-container">
                        <Button onClick={()=> Router.push('/signup/user')} color="transparent linear-gradient" >Quero encontrar produtores</Button>
                        <Button onClick={()=> Router.push('/be-part')} color="transparent linear-gradient" >Sou um produtor orgânico</Button>
                <div>
                <button id= "conheca" className="button">Conheça as vantagens</button>
                        </div>
                </div>
                </p>
                     
                
                    </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
                <div className="who-we-are">
               <div className="products-bg" /> 
                    <div> <h1>Mais valor para quem vende.</h1> 
               <h2>Rápido para quem antecipa
                   <button> Trabalhador</button>
                   <button> Investidor</button>
                   </h2>
               </div>
                            <img src="/agilidade.svg"/>
                            <div> 
                   <button> Trabalhador</button>
                   </div>
                        
                    <div className="certified-container">
                        <div className="certificates">
                        </div>
                        <h1>Como funciona a plataforma?</h1>
                        <p>Conte com toda a segurança, agilidade 
                            praticidade na liberação do seu processo ganho
                        </p>
                    </div>

                    <div className="certified-container">
                        <div className="certificates">
                            <img src="/" />
                            
                            
            </div>
                        <span>Sistema participativo (OPACS)</span>
                        <p>Dolor sit amet, consectetur adipiscing elit. Pellentesque dui mauris</p>
                    </div>
                </div>
                <div className="mission-container">
                    <h1>Missão</h1>
                    <p>Nossa missão é reunir informações sobre a cadeia produtiva de produtos orgânicos e sustentáveis no Brasil e ser o centro de promoções para abrir oportunidades para desenvolvimento e comercialização de toda a cadeia de produção orgânica e sustentável, do produtor ao consumidor.</p>
                    <div className="traits-container">
                        <div className="trait">
                            <img src="/mission/connect.svg" />
                            <span>Conectar produtores</span>
                        </div>
                        <div className="trait">
                            <img src="/mission/business.svg" />
                            <span>Construir cadeias de negócios</span>
                        </div>
                        <div className="trait">
                            <img src="/mission/time.svg" />
                            <span>Otimizar seu tempo</span>
                        </div>
                        <div className="trait">
                            <img src="/mission/strength.svg" />
                            <span>Capacitar e ajudar a fortalecer o segmento</span>
                        </div>

                    </div>
                </div>
                <div className="differentials-container">
                    <h1>Diferenciais</h1>
                    <div className="differential-container">
                        <div>
                            <img src="/differentials/reputation.svg" />
                            <h1>Reputação de quem vive o marketplace dia a dia</h1>
                        </div>
                        <p>
                            Esteja junto da equipe que vem há 15 anos atuando na promoção comercial de produtos orgânicos e sustentáveis no mercado Global e no Brasil. Com Organis8 você ja entra com as melhores referências e posicionamento de uma entidade de promoção parceira que vai levar seu produto e seu serviço com a relevância que necessita na comunidade empreendedora.
                    </p>
                    </div>
                    <div className="differential-container">
                        <p>
                            Esteja sempre atualizado sobre as últimas estatísticas e dados do mercado. Pesquisas de perfil de consumidores são realizados a cada dois anos para você conhecer o dinamismo de um segmento que cresce anualmente em escala global. Conheça números de produção e perfil de produtores por Estado, por escopos de produtos, e tipos de certificação. Conheça o potencial que este mercado pode trazer para seu negócio, sua atividade empreendedora ou sua filosofia de vida. Engaje e participe.                    </p>
                        <div>
                            <img src="/differentials/brain.svg" />
                            <h1>Inteligência de mercado</h1>
                        </div>
                    </div>
                    <div className="differential-container">
                        <div>
                            <img src="/differentials/reputation.svg" />
                            <h1>Maiores chances de se posicionar</h1>
                        </div>
                        <p>
                            Chegue direto ao ponto, faça parte de uma comunidade que se conecta, se conhece e confia um no outro. Ter as informações mais atualizadas abre maiores chances para que você ocupe os melhores posicionamentos ao buscar seu espaço no mercado.                    </p>
                    </div>
                    <div className="differential-container">

                        <p>
                            Atualize seu cadastro não apenas com seus dados de contato. Atualize com dados que você queira que o mercado olhe, te encontre e que confie em sua seriedade e comprometimento com seu negócio. Crie segurança, regularidade e consistência para dados que só você decide a quem mostrar e trocar idéias.                    </p>
                        <div>
                            <img src="/differentials/thumbs-up.svg" className="thumbs-up" />
                            <h1>Quem participa, ganha</h1>
                        </div>
                    </div>
                    <div className="differential-container">
                        <div>
                            <img src="/differentials/star.svg" />
                            <h1>Voce é o mais importante para nós</h1>
                        </div>
                        <p>
                            Se você produz e se encontra no Cadastro Nacional de Produtores orgânicos do MAPA, esta plataforma é gratuita e tire o proveito de se mostrar ao mercado de forma inovadora, segura e descompromissada. Você decide o que, quando e onde o mercado irá te encontrar. Se você não esta na lista de produtores mas quer atuar no segmento de alguma forma, você também pode participar desta plataforma de forma gratuita e colaborativa. Entre e venha ser parte da comunidade.                    </p>
                    </div>
                    <div className="differential-container">

                        <p>
                            Se você tem uma idéia que possa ajudar seu negócio e possa ao mesmo tempo promover o desenvolvimento de nosso mercado, estamos abertos para estar sempre construindo e atualizando nossa plataforma. O limite de nosso trabalho será a dinâmica do desenvolvimento de todo o setor. Faça parte também.
                        </p>
                        <div>
                            <img src="/differentials/shaking-hands.svg" />
                            <h1>Queremos sempre ter novos parceiros nesta construção</h1>
                        </div>
                    </div>
                    <div className="differential-container">
                        <div>
                            <img src="/differentials/business.svg" />
                            <h1>Ganha quem faz negócios</h1>
                        </div>
                        <p>
                            Nesta plataforma, o propósito não nos preocupa gerar números de acessos, pagar e cobrar comissões ou monitorar volume de negócios. Não queremos também ser qualquer animal mitológico. Queremos que você encontre o seu próprio instinto que existe dentro de si. Nós queremos gerar informação para quem procura negócios. Nós queremos dar espaço para quem quer se mostrar ao mercado. Nós queremos que você encontre valor na nossa plataforma e propague de forma colaborativa para que todos compartilhem e ganhem.                </p>

                    </div>
                    <div className="video-container" >
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/PviZMQ5ksf0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>

                </div>
                <div className="profile-choice-container">
                    <img className="bg-left" src="/colored-products-left.svg" />
                    <img className="bg-right" src="/colored-products-right.svg" />
                    <div className="services">
                        <h2>Consultor ou Prestador de serviço</h2>
                        <p>
                            Se você é varejista, lojista, restaurante, indústria, exportador ou consumidor e tem interesse em comprar orgânicos, entre em contato conosco para saber como podemos conectá-lo com os produtores.
                    </p>
                    </div>
                    <div className="market">
                        <h2>Mercado</h2>
                        <p>
                            Se você é varejista, lojista, restaurante, indústria, exportador ou consumidor e tem interesse em comprar orgânicos, entre em contato conosco para saber como podemos conectá-lo com os produtores.
                    </p>
                    </div>


                </div>
                <Associates />
                <Media />
            </main>
        </Fragment >

    );
}

export default Index;