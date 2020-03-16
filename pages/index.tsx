import './styles.scss'
import Button from '../components/Button/Button';
import { Fragment } from 'react';
import Associates from '../containers/Home/Associates';
import Media from '../containers/Home/Media';
import Head from 'next/head';
import Router from 'next/router';
import StyledInput from '../components/Input/Input';


const Index = () => {

    return (
        <Fragment>
            <Head>
                <title>Juscredit - Home</title>
            </Head>
            <main>

            <div className="differentials-container">
                    <img src="/differentials/antecipe.svg"/>
                    </div>
                <div className="map-container">
                    <div className="map" />

                      <h1>Antecipe seu crédito trabalhista</h1>
                     <h2>Têm um processo ganho? Receba agora</h2>
                    
                    <div className="buttons-container">
                    <Button onClick={()=> Router.push('/signup/user')} color="primary">Quero participar</Button> 
                   <Button onClick={()=> Router.push('/be-part')} color="secondary">Quero investir</Button>

                <div className="cursor-container">
                <img className="cursor-container" src="/cursor.svg"/>
                <Button onClick={()=> Router.push('/be-part')} color="third" >Conheça as vantagens</Button>
                        </div>
                </div>
                </div>
                <br/>
        <br/>        
        <br/>
        <br/>
        <br/>
        <br/>
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
               <Button onClick={()=> Router.push('/signup/user')} color="primary">Trabalhador</Button> <br/>
                        <Button onClick={()=> Router.push('/be-part')} color="secondary" >Investidor</Button>
                   </h2>
               </div>
                            <img src="/agilidade.svg"/>
                            <Button onClick={()=> Router.push('/be-part')} color="secondary">Quero participar</Button>

                     
                    <div className="certified-container">
                        <div className="certificates">
                        </div>
                        <h1>Como funciona a plataforma?</h1>
                        <p>Conte com toda a segurança, agilidade 
                            praticidade na liberação do seu processo ganho
                        </p>
                        <Button onClick={()=> Router.push('/be-part')} color="secondary">Quero participar</Button>
                    </div>
                    <img src="/trabalhador.svg"/> 
                    <div className= "poligono-container">  
                        <img src="/poligono.svg"/> 
                        </div>     
                </div>

                <div className="mission-container">
                    <h1>Têm dúvidas ?  </h1>
                    <p>Está na hora de saná-las.</p>
                    <br/> <p>Queremos te ajudar a resolvê-las</p> 
                    <Button onClick={()=> Router.push('/be-part')} color="secondary">Quero participar</Button>
                    
                    <div className="traits-container">
                        <div className="trait">
                            
                            <span><h1>O que estão dizendo sobre nós</h1></span>
                            <h2>Investidores e tomadores falando sobre suas experiências com a Juscredit                            </h2>
                        </div>
                        
                    </div>

                
                    <div className="lead-container">
            <h3>Seja parceiro Juscredit </h3>
            <h4> indique processos trabalhistas elegíveis</h4>
            <StyledInput mask={null} placeholder="Insira aqui seu e-mail" tabIndex={-1}/>
            <Button color="fourth" tabIndex={-1}>Enviar</Button>

                </div>
                </div> 
                <Associates />
                <Media />
            </main>
        </Fragment >

    );
}



export default Index;