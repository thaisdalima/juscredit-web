import './styles.scss';
import Button from '../components/Button/Button';
import { Fragment, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Link from 'next/link';
import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import API from './../api';

<meta name="viewport" content="::-webkit=device-width"></meta>
const Index = (props) => {
  const [state, setState] = React.useState({
    checkedModalAntecipe: false,
    checkedModalInvestirQualificado: false,
    checkedModalInvestirConcordo: false,
  });
  const [formValues, setFormValue] = React.useState({
  });
  const [modalIndicarState, setIndicarOpen] = React.useState(false);
  const [modalAnteciparState, setAnteciparOpen] = React.useState(false);
  const [modalInvestirState, setInvestirOpen] = React.useState(false);
  const [profile, setProfile] = React.useState("cliente");
  const [selectProfile, setSelectProfile] = React.useState('');
  const [originPath, setOriginPath] = React.useState('');

  const axios = require('axios');

  const tipoPessoaArr = [
    {
      value: 'f',
      label: 'CPF',
    },
    {
      value: 'j',
      label: 'CNPJ',
    }
  ];

  const handleModalIndicar = () => {
    setIndicarOpen(true);
    setFormValue({});
  };

  const handleModalAntecipar = () => {
    setAnteciparOpen(true);
    setFormValue({});
    setFormValue({ ...formValues, account_type: 'c' });
  };

  const handleModalInvestir = () => {
    setInvestirOpen(true);
    setFormValue({});
    setFormValue({ ...formValues, account_type: 'i' });
  };

  const handleClose = () => {
    setIndicarOpen(false);
    setAnteciparOpen(false);
    setInvestirOpen(false);
  };

  const handleProfile = (_profile) => {
    setProfile(_profile);
  }

  const handleChangeSelect = (event) => {
    setSelectProfile(event.target.value);
  };

  const handleChangeCheckbox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const atualizaFormValues = (event, formItem) => {
    setFormValue({ ...formValues, [formItem]: event });
  }

  useEffect(() => {
    setOriginPath(window.location.origin);
  });

  const handleSubmit = (reqURL, reqBody) => {

    axios.post(reqURL, reqBody)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Fragment>
      <Head>
        <title>JusCredit - Home</title>
      </Head>
      <main className="main-page-wrapper">
        <div className="map-container">
          <div className="map">
          </div>
          <div className="map-texts">
            <h1>Antecipe seu <br />crédito trabalhista</h1>
            <h2>Têm um processo ganho? Receba agora</h2>
            <div className="buttons-container">
              <Button onClick={() => handleModalAntecipar()} color="primary">Quero antecipar</Button>
              <Button onClick={() => handleModalInvestir()} color="secondary">Quero investir</Button>
            </div>
            <div className="link cursor-container">
              <Link href="#conheca-vantagens" >
                <a>
                  <img src="/chevron-down.svg" />
                  <span>Conheça as vantagens</span>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div id="conheca-vantagens" className="antecipar">
          {profile == "cliente" && (
            <div>
              <div className="flex-two-columns align-items-center justify-content-between">
                <div>
                  <h1>Mais valor para quem investe.<br />Rápido para quem antecipa.</h1>
                  <h2>Serviço de antecipação disponível para Trabalhadores e Advogados.</h2>
                </div>
                <div className="buttons-container small">
                  <Button onClick={() => handleProfile("cliente")} color={profile == "cliente" ? "primary" : "secondary"}>Cliente</Button>
                  <Button onClick={() => handleProfile("investidor")} color={profile != "cliente" ? "primary" : "secondary"}>Investidor</Button>
                </div>
              </div>
              <div className="cards-showcase-wrapper">
                <div className="card">
                  <div className="card-inner">
                    <img src="/illustration-2.svg" alt="Ilustração do Card" />
                    <h3>Praticidade</h3>
                    <ul className="list">
                      <li><p style={{ margin: 0 }}>Processo de antecipação 100% digital.</p></li>
                      <li><p style={{ margin: 0 }}>Análise rápida e sem custo.</p></li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-inner">
                    <img src="/illustration-1.svg" alt="Ilustração do Card" />
                    <h3>Agilidade</h3>
                    <ul className="list">
                      <li><p style={{ margin: 0 }}>Liquidez imediata, não espere mais para receber o seu direito.</p></li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-inner">
                    <img src="/illustration-3.svg" alt="Ilustração do Card" />
                    <h3>Liberação</h3>
                    <ul className="list">
                      <li><p style={{ margin: 0 }}>Receba diretamente em sua JusCredit.</p></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="buttons-container flex justify-content-center">
                <Button onClick={() => handleModalAntecipar()} color="sixty">Quero antecipar</Button>
              </div>
            </div>
          )}

          {profile != "cliente" && (
            <div>
              <div className="flex-two-columns align-items-center justify-content-between">
                <div>
                  <h1>Mais valor para quem investe.<br />Rápido para quem antecipa.</h1>
                  <h2>Investimentos em créditos judiciais de forma rápida e descomplicada.</h2>
                </div>
                <div className="buttons-container small">
                  <Button onClick={() => handleProfile("cliente")} color={profile == "cliente" ? "primary" : "secondary"}>Cliente</Button>
                  <Button onClick={() => handleProfile("investidor")} color={profile != "cliente" ? "primary" : "secondary"}>Investidor</Button>
                </div>
              </div>
              <div className="cards-showcase-wrapper">
                <div className="card">
                  <div className="card-inner">
                    <img src="/illustration-4.svg" alt="Ilustração do Card" />
                    <h3>Rentabilidade</h3>
                    <ul className="list">
                      <li><p style={{ margin: 0 }}>Maior retorno que investimentos tradicionais.</p></li>
                      <li><p style={{ margin: 0 }}>Baixo valor inicial de investimento.</p></li>
                      <li><p style={{ margin: 0 }}>Disponível para PF e PJ.</p></li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-inner">
                    <img src="/illustration-5.svg" alt="Ilustração do Card" />
                    <h3>Segurança</h3>
                    <ul className="list">
                      <li><p style={{ margin: 0 }}>Modelo proprietário de análise.</p></li>
                      <li><p style={{ margin: 0 }}>Empresas saudáveis, sem negativação é inclusas no banco nacional de devedores trabalhistas.</p></li>
                      <li><p style={{ margin: 0 }}>Parceiro de escritório especializado em direito do trabalho.</p></li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-inner">
                    <img src="/illustration-3.svg" alt="Ilustração do Card" />
                    <h3>Recebimento</h3>
                    <ul className="list">
                      <li><p style={{ margin: 0 }}>Receba os valores dos créditos judiciais adquiridos diretamente em sua conta JusCredit.</p></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="buttons-container flex justify-content-center">
                <Button onClick={() => handleModalInvestir()} color="sixty">Quero investir</Button>
              </div>
            </div>
          )}

          <div id="como-funciona" className="flex align-items-center justify-content-between">
            <div>
              <h1>Como funciona a plataforma?</h1>
              <h2>
                Conte com toda a segurança, agilidade e <br />
                praticidade na liberação do seu processo ganho
              </h2>
            </div>
          </div>
          <div className="cards-howto-wrapper">
            <div className="cards-row">
              <div className="card">
                <div className="card-inner">
                  <div className="flex align-items-center">
                    <div className="flex align-items-center">
                      <img style={{ maxWidth: "70px", marginRight: "10px" }} src="/illustration-6.svg" />
                      <h4>Cliente solicita</h4>
                    </div>
                    <h4 className="card-number">1</h4>
                  </div>
                  <p>
                    Cliente solicita antecipação do crédito trabalhista na plataforma.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-inner">
                  <div className="flex align-items-center">
                    <div className="flex align-items-center">
                      <img style={{ maxWidth: "70px", marginRight: "10px" }} src="/illustration-7.svg" />
                      <h4>Análise avançada</h4>
                    </div>
                    <h4 className="card-number">2</h4>
                  </div>
                  <p>
                    Análise com modelo proprietário de crédito, se aprovado é disponibilizado ao investidores.
                  </p>
                </div>
              </div>
            </div>
            <div className="cards-row">
              <div className="card">
                <div className="card-inner">
                  <div className="flex align-items-center">
                    <div className="flex align-items-center">
                      <img style={{ maxWidth: "70px", marginRight: "10px" }} src="/illustration-8.svg" />
                      <h4>Investidores</h4>
                    </div>
                    <h4 className="card-number">3</h4>
                  </div>
                  <p>
                    Os investidores escolhem quanto e em quais créditos trabalhistas querem investir.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-inner">
                  <div className="flex align-items-center">
                    <div className="flex align-items-center">
                      <img style={{ maxWidth: "70px", marginRight: "10px" }} src="/illustration-9.svg" />
                      <h4>Receba</h4>
                    </div>
                    <h4 className="card-number">4</h4>
                  </div>
                  <p>
                    O trabalhador recebe a antecipação e os investidores seus pagamentos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="parceiros-container" className="indicar-wrapper">
            <h1 className="text-center"> Seja um parceiro JusCredit</h1>
            <h2 className="text-center">Indique créditos trabalhistas elegíveis e ganhe conosco.</h2>

            <div className="flex justify-content-center">
              <Button color="primary" onClick={handleModalIndicar}>Indicar</Button>
            </div>
          </div>
        </div>
      </main>
      <Dialog open={modalIndicarState} onClose={handleClose} aria-labelledby="parceiro-dialog-title">
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
            label="Email @"
            type="email"
            variant="outlined"
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

      <Dialog open={modalAnteciparState} onClose={handleClose} aria-labelledby="antecipar-dialog-title">
        <DialogTitle id="antecipar-dialog-title">Antecipe o seu crédito</DialogTitle>
        <DialogContent>
          <form className="modal-form" noValidate autoComplete="off">
            <TextField
              id="modalFieldAntecipar-0"
              label="Nome completo"
              variant="outlined"
              onChange={e => { atualizaFormValues(e.target.value, 'full_name') }}
              fullWidth />
            <TextField
              id="modalFieldAntecipar-1"
              select
              label="Tipo de Pessoa"
              variant="outlined"
              value={selectProfile}
              onChange={e => { handleChangeSelect(e); atualizaFormValues(e.target.value, 'person_type') }}
              fullWidth
            >
              {tipoPessoaArr.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="modalFieldAntecipar-2"
              label="Número do processo"
              helperText="Exemplo: 0000020-37.2010.5.15.0118"
              variant="outlined"
              onChange={e => { atualizaFormValues(e.target.value, 'title') }}
              fullWidth />
            <TextField
              id="modalFieldAntecipar-3"
              label="Email"
              variant="outlined"
              onChange={e => { atualizaFormValues(e.target.value, 'email') }}
              fullWidth />
            <TextField
              id="modalFieldAntecipar-4"
              label="Celular"
              variant="outlined"
              onChange={e => { atualizaFormValues(e.target.value, 'phone') }}
              fullWidth />
            <div className="flex align-items-center">
              <Checkbox
                id="modalFieldAntecipar-5"
                checked={state.checkedModalAntecipe}
                onChange={e => { handleChangeCheckbox(e); atualizaFormValues(e.target.checked, 'concordo_termos') }}
                name="checkedModalAntecipe"
                color="primary"
                inputProps={{ 'aria-label': 'Checkbox Modal Antecipe' }}
              />
              <label className="modal-label" htmlFor="modalFieldAntecipar-5">Concordo com os Termos do JusCredit</label>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={e => { handleSubmit(`${API}/user`, formValues) }} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={modalInvestirState} onClose={handleClose} aria-labelledby="investir-dialog-title">
        <DialogTitle id="investir-dialog-title">Inscreva-se</DialogTitle>
        <DialogContent>
          <form className="modal-form" noValidate autoComplete="off">
            <TextField
              id="modalFieldInvestir-0"
              label="Nome completo"
              variant="outlined"
              onChange={e => { atualizaFormValues(e.target.value, 'full_name') }}
              fullWidth />
            <TextField
              id="modalFieldInvestir-1"
              label="Email"
              variant="outlined"
              onChange={e => { atualizaFormValues(e.target.value, 'email') }}
              fullWidth />
            <TextField
              id="modalFieldInvestir-2"
              label="Celular"
              variant="outlined"
              onChange={e => { atualizaFormValues(e.target.value, 'phone') }}
              fullWidth />
            <TextField
              id="modalFieldInvestir-3"
              select
              label="Tipo de Pessoa"
              variant="outlined"
              value={selectProfile}
              onChange={e => { handleChangeSelect(e); atualizaFormValues(e.target.value, 'person_type') }}
              fullWidth
            >
              {tipoPessoaArr.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div className="flex align-items-center">
              <Checkbox
                id="modalFieldInvestir-4"
                checked={state.checkedModalInvestirQualificado}
                onChange={e => { handleChangeCheckbox(e); atualizaFormValues(e.target.checked, 'investidor_qualificado') }}
                name="checkedModalInvestirQualificado"
                color="primary"
                inputProps={{ 'aria-label': 'Checkbox Modal Investir' }}
              />
              <label className="modal-label" htmlFor="modalFieldInvestir-4">Sou um investidor qualificado</label>
            </div>
            <div className="flex align-items-center">
              <Checkbox
                id="modalFieldInvestir-5"
                checked={state.checkedModalInvestirConcordo}
                onChange={e => { handleChangeCheckbox(e); atualizaFormValues(e.target.checked, 'concordo_termos') }}
                name="checkedModalInvestirConcordo"
                color="primary"
                inputProps={{ 'aria-label': 'Checkbox Modal Investir' }}
              />
              <label className="modal-label" htmlFor="modalFieldInvestir-5">Concordo com os Termos do JusCredit</label>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={e => { handleSubmit(`${API}/user`, formValues) }} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment >

  );
}
export default Index; 