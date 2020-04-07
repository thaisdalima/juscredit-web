import './styles.scss'
import Button from '../components/Button/Button';
import { Fragment } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import StyledInput from '../components/Input/Input';

const Index = () => {

    return (
        <Fragment>
            <Head>
                <title>JusCredit - Home</title>
            </Head>
            <main>
                <p>
                <div className="map-container"> 
                    <div className="map" />
                     <h1>Antecipe seu </h1>
                         <h1>crédito trabalhista</h1><h2>Têm um processo ganho? Receba agora</h2>       
                    <div className="buttons-container">
                    <Button onClick={()=> Router.push('/signup/user')} color="primary">Quero antecipar</Button> 
                   <Button onClick={()=> Router.push('/signup/producer')} color="secondary">Quero investir</Button>
    
                <div className="cursor-container">
                 <Button onClick={()=> Router.push('/be-part')} color="third" ><img src="/cursor.svg"/>Conheça as vantagens</Button>
                        </div>
                </div>
                </div>
                <div className="antecipar">
               <div className="products-bg" /> 
                    <div> <h1>Mais valor para quem vende<br/>
                              Simples para quem investe</h1> 
               <h2>
                   Vantagens para quem vende:
               </h2>
                            <img src="/agilidade.svg"/>
                            <h2>
                   Vantagens para quem investe:
               </h2>
                            <img src="/rentabilidade.svg"/>
                                      
               </div>
                     
                    <div className="funciona-container">
                    <div className="poligono-container"/>
                        <h1>Como funciona a plataforma?</h1>
                        <h2>Conte com toda a segurança, agilidade <br/>
                           e praticidade na liberação do seu processo ganho
                        </h2>  
                        <img src="/trabalhador.svg"/>  
                        </div>
                <div className="duvidas-container">   
                    <h1>Têm dúvidas ?</h1>
                     <h2>Queremos te ajudar a resolvê-las</h2>
                    <div className="buttons-container"> 
                    <Button onClick={()=> Router.push('/be-part')} color="secondary">Quero antecipar</Button>
</div>              <img src="/duvidas.svg"/>
                    
                    </div> 

                    <div className= "parceiros-container">
                        <h1> Seja um parceiro JusCredit</h1>
                        <h2>Indique créditos trabalhistas elegíveis e ganhe conosco.</h2>
                        <StyledInput mask={null} placeholder="   Insira aqui seu e-mail" tabIndex={-1}/>
<Button color="fourth" tabIndex={-1}>Enviar</Button>
</div> 
           </div>
                <br/>
                </p>
            </main>
        </Fragment >

    );
}

export default Index;