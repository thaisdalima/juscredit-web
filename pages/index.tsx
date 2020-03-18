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
                    
                <div className="map-container"> 
                    <div className="map" />
                     <h1>Antecipe seu crédito trabalhista</h1>
                     <h2>Têm um processo ganho? Receba agora</h2>                    
                    <div className="buttons-container">
                    <Button onClick={()=> Router.push('/signup/user')} color="primary">Quero participar</Button> 
                   <Button onClick={()=> Router.push('/be-part')} color="secondary">Quero investir</Button>

                <div className="cursor-container">
                 <Button onClick={()=> Router.push('/be-part')} color="third" ><img src="/cursor.svg"/>Conheça as vantagens</Button>
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
                <div className="who-we-are">
               <div className="products-bg" /> 
                    <div> <h1>Mais valor para quem vende.</h1> 
               <h2>Rápido para quem antecipa  <Button onClick={()=> Router.push('/signup/user')} color="primary">Trabalhador</Button>
               <Button onClick={()=> Router.push('/be-part')} color="secondary">Investidor</Button></h2>
               </div>
                            <img src="/agilidade.svg"/>
                            <Button onClick={()=> Router.push('/be-part')} color="secondary">Quero participar</Button>

                     
                    <div className="certified-container">
                        <div className="certificates">
                        </div>
                        <h1>Como funciona a plataforma?</h1>
                        <h2>Conte com toda a segurança, agilidade 
                            praticidade na liberação do seu processo ganho
                        </h2>
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
                            
                            <h1>Seja um parceiro Juscredit</h1>
                            <h2>Indique créditos trabalhistas elegíveis e ganhe conosco.</h2>
                            <StyledInput mask={null} placeholder="Insira aqui seu e-mail" tabIndex={-1} />
            <Button color="fourth" tabIndex={-1}>Enviar</Button>
                        </div>
                        
                    </div>
        
                </div> 

            </main>
        </Fragment >

    );
}



export default Index;