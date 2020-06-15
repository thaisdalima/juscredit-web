import './styles.scss'
import Button from '../components/Button/Button';
import { Fragment } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { Link } from "react-scroll";
import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

<meta name="viewport" content="::-webkit=device-width"></meta>
const Index = () => {

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false); 
    };

    
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
                    <Button onClick={()=> Router.push('/signup/user')} color="primary">Quero participar</Button> 
                   <Button onClick={()=> Router.push('/be-part')} color="secondary">Quero investir</Button>
                   <div className="cursor-container">
                 <Button onClick={()=> Router.push('/')} color="third" ><img src="/cursor.svg"/>
                 <Link to="antecipar" > 
                        <a className="link">Conheça as vantagens</a>
                        </Link></Button>
                        </div>  
                </div>
                </div>
  
              
                <div className="antecipar">
               <div className="products-bg" /> 
                    <div> <h1>Mais valor para quem vende<br/>
                              Simples para quem investe</h1> 
               <h2>
                   <br/>
                   Vantagens para quem vende:
               </h2>
                            <img src="/agilidade.svg"/>
                            <h2>
                            <div className="buttons-container"> 
                         <Button  color="sixty" onClick={handleClickOpen}>
        Quero Antecipar
      </Button>
      
        
</div>
                   Vantagens para quem investe:
               </h2>
                            <img src="/rentabilidade.svg"/>
                            <div className="buttons-container"> 
                            <Button  color="sixty" onClick={handleClickOpen}>
        Quero Investir
      </Button>
    </div>

               </div>  
                    <div className="funciona-container">
                        <h1>Como funciona a plataforma?</h1>
                        <h2>Conte com toda a segurança, agilidade <br/>
                           e praticidade na liberação do seu processo ganho.
                        </h2>  
                        <img src="/trabalhador.svg"/>  
                        </div>
                
                        <div className= "parceiros-container">
                        <h1> Seja um parceiro JusCredit</h1>
                        <h2>Indique créditos trabalhistas elegíveis e ganhe conosco.</h2>
        
<div>
      <Button  color="primary" onClick={handleClickOpen}>
        Indicar
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="parceiro-dialog-title">
        <DialogTitle id="parceiro-dialog-title">Inscreva-se</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Você receberá um email para criação de senha e completar seu perfil
          Iremos entrar em contato com você para confirmar suas informações.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email @ "
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </div>
           </div>   
                <br/>
                </p>
            </main>
        </Fragment >

    );
}
export default Index; 