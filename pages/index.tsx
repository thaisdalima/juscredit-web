import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';
import Button from '../components/Button/Button';
import { Fragment, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Link from 'next/link';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';

import API from './../api';

<meta name="viewport" content="::-webkit=device-width"></meta>
const Index = (props) => {
  const INITIAL_FORM = {
    full_name: '',
    account_type: '',
    person_type: '',
    number_proccess: '',
    email: '',
    phone: '',
    concordo_termos: false,
    investidor_qualificado: null
  };

  const INITIAL_FORM_PARCEIRO = {
    full_name: '',
    email: '',
    assunto: '',
  };
  const [state, setState] = React.useState({
    modalEnviadoMsg: '',
    modalErroMsg: ''
  });
  // checkedModalAntecipe: false,
  //   checkedModalInvestirQualificado: false,
  //   checkedModalInvestirConcordo: false,
  const [checkedModalAntecipe, setCheckMdlAntecipe] = React.useState(false);
  const [checkedModalInvestirQualificado, setCheckMdlInvestirQualificado] = React.useState(false);
  const [checkedModalInvestirConcordo, setCheckMdlInvestirConcordo] = React.useState(false);
  const [formValues, setFormValue] = React.useState(INITIAL_FORM);
  const [parceiroValues, setParceiroValue] = React.useState(INITIAL_FORM_PARCEIRO);
  const [modalIndicarState, setIndicarOpen] = React.useState(false);
  const [modalAnteciparState, setAnteciparOpen] = React.useState(false);
  const [modalInvestirState, setInvestirOpen] = React.useState(false);
  const [modalEnviado, setFeedbackEnviado] = React.useState(false);
  const [modalErro, setFeedbackErro] = React.useState(false);
  const [profile, setProfile] = React.useState("cliente");
  const [selectProfile, setSelectProfile] = React.useState('');
  const [originPath, setOriginPath] = React.useState('');
  const [isLoadingImgs, setLoadingImgs] = React.useState(true);

  const axios = require('axios');

  const tipoPessoaArr = [
    {
      value: 'f',
      label: 'Pessoa Física',
    },
    {
      value: 'j',
      label: 'Pessoa Jurídica',
    }
  ];

  const handleModalIndicar = () => {
    setIndicarOpen(true);
  };

  const handleModalAntecipar = () => {
    setFormValue({ ...formValues, account_type: 'c' });
    setAnteciparOpen(true);
  };

  const handleModalInvestir = () => {
    setFormValue({ ...formValues, account_type: 'i' });
    setInvestirOpen(true);
  };

  const handleClose = () => {
    setCheckMdlAntecipe(false);
    setCheckMdlInvestirQualificado(false);
    setCheckMdlInvestirConcordo(false);
    setIndicarOpen(false);
    setAnteciparOpen(false);
    setInvestirOpen(false);
    setFeedbackEnviado(false);
    setFeedbackErro(false);
    setFormValue({
      ...formValues,
      full_name: '',
      account_type: '',
      person_type: '',
      number_proccess: '',
      email: '',
      phone: '',
      concordo_termos: false,
      investidor_qualificado: false
    });
  }

  const handleProfile = (_profile) => {
    setProfile(_profile);
  }

  const handleChangeSelect = (event) => {
    setSelectProfile(event.target.value);
  };

  const handleChangeCheckbox = (event) => {
    if (event.target.id === 'modalFieldAntecipar-5') {
      setCheckMdlAntecipe(event.target.checked);
    }
    if (event.target.id === 'modalFieldInvestir-4') {
      setCheckMdlInvestirQualificado(event.target.checked);
    }
    if (event.target.id === 'modalFieldInvestir-5') {
      setCheckMdlInvestirConcordo(event.target.checked);
    }
  };

  const atualizaFormValues = (event) => {
    if (event.target.type == "checkbox") {
      setFormValue({ ...formValues, [event.target.name]: event.target.checked });
    } else {
      setFormValue({ ...formValues, [event.target.name]: event.target.value });
    }
    console.log(formValues);
  }

  const getParceiroValue = (event, formItem) => {
    setParceiroValue({ ...parceiroValues, [formItem]: event });
  }

  const isEnabled = () => {
    for (var key in formValues) {
      if (formValues["account_type"] !== "i") {
        formValues["investidor_qualificado"] = null
      }
      if (formValues["account_type"] !== "c") {
        formValues["number_proccess"] = null
      }
      if (formValues[key] != "") {
      } else {
        return true;
      }
    }
  }

  const isEnabledParceiro = () => {
    for (var key in parceiroValues) {
      if (parceiroValues[key] != "") {
      } else {
        return true;
      }
    }
  }

  const handleSubmit = (reqURL, reqBody) => {
    axios.post(reqURL, reqBody)
      .then(function (response) {
        setState({ ...state, modalEnviadoMsg: "Seu cadastro foi iniciado, verique seu e-mail para continuar (se não achar olhe a pasta de Spam)." });
        handleClose();
        setFeedbackEnviado(true);
      })
      .catch(function (error) {
        setState({ ...state, modalErroMsg: "Houve um problema, tente novamente mais tarde." });
        handleClose();
        setFeedbackErro(true);
      });
  }

  const handleSubmitParceiro = (reqURL, reqBody) => {
    axios.post(reqURL, reqBody)
      .then(function (response) {
        setState({ ...state, modalEnviadoMsg: "Obrigado por se interessar em ser nosso parceiro! Entraremos em contato em breve" });
        handleClose();
        setFeedbackEnviado(true);
      })
      .catch(function (error) {
        setState({ ...state, modalEnviadoMsg: "Houve um problema, tente novamente mais tarde." });
        handleClose();
        setFeedbackErro(true);
      });
  }

  const cacheImages = srcArray => {
    var body = document.querySelector('body');
    body.classList.add('no-scroll');
    srcArray.forEach(src => {
      new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = src;
        img.onload = function () {
          resolve();
        }
        img.onerror = function () {
          reject();
        }
      });
    });

    setTimeout(() => {
      body.classList.remove('no-scroll');
      setLoadingImgs(false);
    }, 2500);
  }

  useEffect(() => {
    setOriginPath(window.location.origin);

    const imgs = [
      '/lawyer.jpg',
      '/img-abre-site.svg',
      '/Logo.png',
      '/logo.svg',
      '/android-chrome-192x192.png',
      '/android-chrome-512x512.png',
      '/loading.svg',
      '/loading2.svg',
      '/card-img-1.svg',
      '/card-img-2.svg',
      '/card-img-3.svg',
      '/card-img-4.svg',
      '/card-img-5.svg',
      '/card-img-6.svg',
      '/card-img-7.svg',
      '/card-img-8.svg',
      '/card-img-9.svg',
      '/facebook_icon.png',
      '/anteceba.svg',
      '/ic-carta.svg',
      '/ic-facebook.svg',
      '/ic-instagram.svg',
      '/ic-linkedin.svg'
    ];

    cacheImages(imgs);
  });

  return (
    <Fragment>
      <Head>
        <title>JusCredit</title>
      </Head>
      <main className="main-page-wrapper">
        <div className="map-container">
          <div className="map">
          </div>
          <div className="map-texts">
            <h1>Antecipe seu <br />crédito trabalhista</h1>
            <h2>Têm um processo ganho? Receba agora!</h2>
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
                <div className="buttons-container">
                  <Button onClick={() => handleProfile("cliente")} color={profile == "cliente" ? "primary" : "secondary"}>Cliente</Button>
                  <Button onClick={() => handleProfile("investidor")} color={profile != "cliente" ? "primary" : "secondary"}>Investidor</Button>
                </div>
              </div>
              <div className="cards-showcase-wrapper">
                <div className="card">
                  <div className="card-inner">
                    <img src="/card-img-2.svg" alt="Ilustração do Card" style={{ maxHeight: '105px' }} />
                    <h3>Praticidade</h3>
                    <ul className="list">
                      <li><p style={{ margin: 0 }}>Processo de antecipação 100% digital.</p></li>
                      <li><p style={{ margin: 0 }}>Análise rápida e sem custo.</p></li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-inner">
                    <img src="/card-img-1.svg" alt="Ilustração do Card" style={{ maxHeight: '105px' }} />
                    <h3>Agilidade</h3>
                    <ul className="list">
                      <li><p style={{ margin: 0 }}>Liquidez imediata, não espere mais para receber o seu direito.</p></li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-inner">
                    <img src="/card-img-3.svg" alt="Ilustração do Card" style={{ maxHeight: '105px' }} />
                    <h3>Liberação</h3>
                    <ul className="list">
                      <li><p style={{ margin: 0 }}>Receba diretamente em sua conta JusCredit.</p></li>
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
                <div className="buttons-container">
                  <Button onClick={() => handleProfile("cliente")} color={profile == "cliente" ? "primary" : "secondary"}>Cliente</Button>
                  <Button onClick={() => handleProfile("investidor")} color={profile != "cliente" ? "primary" : "secondary"}>Investidor</Button>
                </div>
              </div>
              <div className="cards-showcase-wrapper">
                <div className="card">
                  <div className="card-inner">
                    <img src="/card-img-4.svg" alt="Ilustração do Card" style={{ maxHeight: '105px' }} />
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
                    <img src="/card-img-5.svg" alt="Ilustração do Card" style={{ maxHeight: '105px' }} />
                    <h3>Segurança</h3>
                    <ul className="list">
                      <li><p style={{ margin: 0 }}>Modelo proprietário de análise.</p></li>
                      <li><p style={{ margin: 0 }}>Empresas saudáveis, sem negativação e inclusas no banco nacional de devedores trabalhistas.</p></li>
                      <li><p style={{ margin: 0 }}>Parceiro de escritório especializado em direito do trabalho.</p></li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-inner">
                    <img src="/card-img-3.svg" alt="Ilustração do Card" style={{ maxHeight: '105px' }} />
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
                Análise com modelo proprietário de crédito, <br />
              se aprovado é disponibilizado aos investidores.
              </h2>
            </div>
          </div>
          <div className="cards-howto-wrapper">
            <div className="cards-row">
              <div className="card">
                <div className="card-inner">
                  <div className="flex align-items-center">
                    <div className="flex align-items-center">
                      <img style={{ maxWidth: "70px", marginRight: "10px" }} src="/card-img-6.svg" />
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
                      <img style={{ maxWidth: "70px", marginRight: "10px" }} src="/card-img-7.svg" />
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
                      <img style={{ maxWidth: "70px", marginRight: "10px" }} src="/card-img-8.svg" />
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
                      <img style={{ maxWidth: "70px", marginRight: "10px" }} src="/card-img-9.svg" />
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

      <div className={`backdrop-loading ${isLoadingImgs ? '' : 'hidden'}`}>
        <div className="backdrop-wrapper">
          <img src="/logo.svg" className="header-logo" />
          <img height="32" width="32" src="/loading2.svg" />
          <h4 className="backdrop-title">
            Carregando...
          </h4>
        </div>
      </div>

      <Dialog open={modalIndicarState} onClose={handleClose} aria-labelledby="parceiro-dialog-title">
        <DialogTitle id="parceiro-dialog-title">Seja parceiro!</DialogTitle>
        <DialogContent>
          <form className="modal-form" noValidate autoComplete="off">
            <TextField
              autoFocus
              id="modalFieldAntecipar-0"
              label="Nome completo"
              variant="outlined"
              name="full_name"
              onChange={e => { getParceiroValue(e.target.value, 'full_name') }}
              fullWidth />
            <TextField
              id="modalFieldIndicar-1"
              label="Assunto"
              variant="outlined"
              name="assunto"
              onChange={e => { getParceiroValue(e.target.value, 'assunto') }}
              fullWidth />
            <TextField
              id="modalFieldIndicar-2"
              label="Email"
              type="mail"
              variant="outlined"
              onChange={e => { getParceiroValue(e.target.value, 'email') }}
              fullWidth />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary small">
            Cancelar
          </Button>
          <Button disabled={isEnabledParceiro()} onClick={e => { handleSubmitParceiro(`https://api-dot-juscredit-hml.ue.r.appspot.com/api/v1/sendmailpartner`, parceiroValues) }} color="primary small">
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
              name="full_name"
              onChange={e => { atualizaFormValues(e) }}
              fullWidth />
            <TextField
              id="modalFieldAntecipar-1"
              select
              label="Tipo de Pessoa"
              variant="outlined"
              value={selectProfile}
              name="person_type"
              onChange={e => { handleChangeSelect(e); atualizaFormValues(e) }}
              fullWidth
            >
              {tipoPessoaArr.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <InputMask
              onChange={e => { atualizaFormValues(e) }}
              mask="9999999-99.9999.9.99.9999"
              value={props.value}>
              <TextField
                id="modalFieldAntecipar-2"
                label="Número do processo"
                helperText="Exemplo: 0000020-37.2010.5.15.0118"
                variant="outlined"
                name="number_proccess"
                fullWidth />
            </InputMask>
            <TextField
              id="modalFieldAntecipar-3"
              label="Email"
              variant="outlined"
              name="email"
              onChange={e => { atualizaFormValues(e) }}
              fullWidth />
            <InputMask
              onChange={e => { atualizaFormValues(e) }}
              mask="(99) 99999-9999"
              value={props.value}>
              <TextField
                id="modalFieldAntecipar-4"
                label="Celular"
                variant="outlined"
                name="phone"
                fullWidth />
            </InputMask>
            <div className="flex align-items-center">
              <Checkbox
                id="modalFieldAntecipar-5"
                checked={checkedModalAntecipe}
                onChange={e => { handleChangeCheckbox(e); atualizaFormValues(e) }}
                name="concordo_termos"
                color="primary"
                inputProps={{ 'aria-label': 'checkedModalAntecipe' }}
              />
              <label className="modal-label" htmlFor="modalFieldAntecipar-5">Concordo com os Termos da JusCredit,</label>
              <Link href="/JusCredit_-_Temos_de_Uso_do_Cliente.pdf">
                <a className="modal-label" target="_blank" style={{ marginLeft: "6px" }}>
                  Clique para ler
                </a>
              </Link>
            </div>

          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary small">
            Cancelar
          </Button>
          <Button disabled={isEnabled()} onClick={e => { handleSubmit(`${API}user`, formValues) }} color="primary small">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={modalInvestirState} onClose={handleClose} aria-labelledby="investir-dialog-title">
        <DialogTitle id="investir-dialog-title">Invista em créditos trabalhistas</DialogTitle>
        <DialogContent>
          <form className="modal-form" noValidate autoComplete="off">
            <TextField
              id="modalFieldInvestir-0"
              label="Nome completo"
              variant="outlined"
              name="full_name"
              onChange={e => { atualizaFormValues(e) }}
              fullWidth />
            <TextField
              id="modalFieldInvestir-1"
              label="Email"
              variant="outlined"
              name="email"
              onChange={e => { atualizaFormValues(e) }}
              fullWidth />
            <InputMask
              onChange={e => { atualizaFormValues(e) }}
              mask="(99) 99999-9999"
              value={props.value}>
              <TextField
                id="modalFieldInvestir-2"
                label="Celular"
                variant="outlined"
                name='phone'
                fullWidth />
            </InputMask>
            <TextField
              id="modalFieldInvestir-3"
              select
              label="Tipo de Pessoa"
              variant="outlined"
              value={selectProfile}
              name="person_type"
              onChange={e => { handleChangeSelect(e); atualizaFormValues(e) }}
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
                checked={checkedModalInvestirQualificado}
                onChange={e => { handleChangeCheckbox(e); atualizaFormValues(e) }}
                name="investidor_qualificado"
                color="primary"
                inputProps={{
                  'aria-label': 'checkedModalInvestirQualificado'
                }}
              />
              <label className="modal-label" htmlFor="modalFieldInvestir-4">Sou um investidor qualificado</label>
            </div>
            <div className="flex align-items-center">
              <Checkbox
                id="modalFieldInvestir-5"
                checked={checkedModalInvestirConcordo}
                onChange={e => { handleChangeCheckbox(e); atualizaFormValues(e) }}
                name="concordo_termos"
                color="primary"
                inputProps={{
                  'aria-label': 'checkedModalInvestirConcordo',
                }}
              />
              <label className="modal-label" htmlFor="modalFieldInvestir-5">Concordo com os Termos da JusCredit,</label>
              <Link href="/JusCredit_-_Temos_de_Uso_do_Investidor.pdf">
                <a className="modal-label" target="_blank" style={{ marginLeft: "6px" }}>
                  Clique para ler
                </a>
              </Link>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary small">
            Cancelar
          </Button>
          <Button disabled={isEnabled()} onClick={e => { handleSubmit(`${API}user`, formValues) }} color="primary small">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={modalEnviado} onClose={handleClose} aria-labelledby="investir-dialog-title">
        <DialogContent className="remove-padding">
          <Alert severity="success">
            {state.modalEnviadoMsg}
          </Alert>
        </DialogContent>
      </Dialog>

      <Dialog open={modalErro} onClose={handleClose} aria-labelledby="investir-dialog-title">
        <DialogContent className="remove-padding">
          <Alert severity="error">
            {state.modalErroMsg}
          </Alert>
        </DialogContent>
      </Dialog>
    </Fragment >

  );
}
export default Index; 