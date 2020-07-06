import React from "react";
import PropTypes from 'prop-types';
import './Header.scss';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Button from '../Button/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Alert from '@material-ui/lab/Alert';
import Link from 'next/link';
import API from '../../api';

import NumberFormat from 'react-number-format';

const Header = () => {
    const INITIAL_FORM = {
        full_name: '',
        account_type: '',
        person_type: '',
        title: '',
        email: '',
        phone: '',
        concordo_termos: '',
        investidor_qualificado: ''
    };
    const [state, setState] = React.useState({
        checkedModalAntecipe: false,
        checkedModalInvestirQualificado: false,
        checkedModalInvestirConcordo: false,
    });
    const [formValues, setFormValue] = React.useState(INITIAL_FORM);
    const [modalAnteciparState, setAnteciparOpen] = React.useState(false);
    const [modalInvestirState, setInvestirOpen] = React.useState(false);
    const [modalEnviado, setFeedbackEnviado] = React.useState(false);
    const [modalErro, setFeedbackErro] = React.useState(false);
    const [profile, setProfile] = React.useState("cliente");
    const [selectProfile, setSelectProfile] = React.useState('');
    const [openedMenu, setOpenedMenu] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false);
    const [originPath, setOriginPath] = React.useState('');
    const router = useRouter();

    const axios = require('axios');

    const tipoPessoaArr = [
        {
            value: 'f',
            label: 'Pessoa Fisica',
        },
        {
            value: 'j',
            label: 'Pessoa Jurídica',
        }
    ];
    let themeClass = ''
    if (router && router.pathname !== '/') {
        themeClass = 'white-navbar'
    }
    useEffect(() => {
        if (document?.cookie) {
            if (document.cookie.includes('auth_token')) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        }
    }, [router.pathname])
    useEffect(() => {
        setOpenedMenu(false)
    }, [router.pathname])

    const toggleMenu = () => {
        setOpenedMenu(!openedMenu)
    }

    const handleModalAntecipar = () => {
        setFormValue({ ...formValues, account_type: 'c' });
        setAnteciparOpen(true);
    };

    const handleModalInvestir = () => {
        setFormValue({ ...formValues, account_type: 'i' });
        setInvestirOpen(true);
    };

    const handleClose = () => {
        setAnteciparOpen(false);
        setInvestirOpen(false);
        setOpenedMenu(false);
        setFeedbackEnviado(false);
        setFeedbackErro(false);
        setFormValue({
            ...formValues,
            full_name: '',
            account_type: '',
            person_type: '',
            title: '',
            email: '',
            phone: '',
            concordo_termos: '',
            investidor_qualificado: ''
        });
    };

    const handleChangeSelect = (event) => {
        setSelectProfile(event.target.value);
    };

    const handleChangeCheckbox = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const atualizaFormValues = (event, formItem) => {
        setFormValue({ ...formValues, [formItem]: event });
    }

    const isEnabled = () => {
        for (var key in formValues) {
            if (formValues["account_type"] !== "i") {
                formValues["investidor_qualificado"] = null
            }
            if (formValues["account_type"] !== "c") {
                formValues["title"] = null
            }
            if (formValues[key] != "") {
            } else {
                return true;
            }
        }
    }

    const handleSubmit = (reqURL, reqBody) => {
        axios.post(reqURL, reqBody)
            .then(function (response) {
                console.log(response);
                handleClose();
                setFeedbackEnviado(true);
            })
            .catch(function (error) {
                console.log(error);
                handleClose();
                setFeedbackErro(true);
            });
    }

    function ProcessoFormat(props) {
        const { inputRef, onChange, ...other } = props;

        return (
            <NumberFormat
                {...other}
                getInputRef={inputRef}
                format="#######-##.####.#.##.########"
                allowEmptyFormatting
                allowLeadingZeros
                isNumericString
            />
        );
    }

    function CelularFormat(props) {
        const { inputRef, onChange, ...other } = props;

        return (
            <NumberFormat
                {...other}
                getInputRef={inputRef}
                format="(##) #-####-####"
                allowEmptyFormatting
                isNumericString
            />
        );
    }

    ProcessoFormat.propTypes = {
        inputRef: PropTypes.func.isRequired,
    };

    useEffect(() => {
        setOriginPath(window.location.origin);
    });

    return (
        <>
            <nav className={"navbar " + themeClass}>
                <a className="navbar-brand" href="/">
                    <img src="/logo.svg" className="header-logo" />
                </a>

                <ul className="link-container">
                    <li className="link">
                        <Link href="#como-funciona">
                            <a>Como Funciona</a>
                        </Link>
                    </li>
                    <li className="link">
                        <Link href="/">
                            <a onClick={handleModalAntecipar}>Antecipar</a>
                        </Link>
                    </li>
                    <li className="link">
                        <Link href="/">
                            <a onClick={handleModalInvestir}>Investir</a>
                        </Link>
                    </li>
                    <li className="link">
                        <Link href="#parceiros-container">
                            <a>Parceiros</a>
                        </Link>
                    </li>
                    <li className="link">
                        <Button className="entrar" color="seven" onClick={() => window.open('https://app.juscredit.com.br')}>
                            Entrar</Button>
                    </li>
                </ul>
                <div className="menu-button" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill={themeClass === 'white-navbar' ? 'white' : '#395E66'} d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                    </svg>
                </div>
            </nav>
            {openedMenu && (
                <ul className={"mobile-link-container " + themeClass}>
                    <li className="link">
                        <Link href="#como-funciona">
                            <a>Como Funciona</a>
                        </Link>
                    </li>
                    <li className="link">
                        <Link href="/">
                            <a onClick={handleModalAntecipar}>Antecipar</a>
                        </Link>
                    </li>
                    <li className="link">
                        <Link href="/">
                            <a onClick={handleModalInvestir}>Investir</a>
                        </Link>
                    </li>
                    <li className="link">
                        <Link href="#parceiros-container">
                            <a>Parceiros</a>
                        </Link>
                    </li>
                    <li className="link">
                        <Button className="entrar" color="seven" onClick={() => window.open('https://app.juscredit.com.br')}>
                            Entrar</Button>
                    </li>
                </ul>
            )
            }
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
                            InputProps={{
                                inputComponent: ProcessoFormat,
                            }}
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
                            InputProps={{
                                inputComponent: CelularFormat,
                            }}
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
                            <label className="modal-label" htmlFor="modalFieldAntecipar-5">Concordo com os Termos do JusCredit,</label>
                            <Link href="/JusCredit_-_Temos_de_Uso_do_Cliente.pdf">
                                <a className="modal-label" target="_blank" style={{ marginLeft: "6px" }}>
                                    Clique para ler
                                </a>
                            </Link>
                        </div>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
          </Button>
                    <Button disabled={isEnabled()} onClick={e => { handleSubmit(`${API}user`, formValues) }} color="primary">
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
                            InputProps={{
                                inputComponent: CelularFormat,
                            }}
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
                            <label className="modal-label" htmlFor="modalFieldInvestir-4">Sou um investidor qualificado,</label>
                            {/* <Link href="/JusCredit_-_Temos_de_Uso_do_Investidor.pdf">
                                <a className="modal-label" target="_blank" style={{ marginLeft: "6px" }}>
                                    Leia os termos
                                </a>
                            </Link> */}
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
                            <label className="modal-label" htmlFor="modalFieldInvestir-5">Concordo com os Termos do JusCredit,</label>
                            <Link href="/JusCredit_-_Temos_de_Uso_do_Investidor.pdf">
                                <a className="modal-label" target="_blank" style={{ marginLeft: "6px" }}>
                                    Clique para ler
                                </a>
                            </Link>
                        </div>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
          </Button>
                    <Button disabled={isEnabled()} onClick={e => { handleSubmit(`${API}user`, formValues) }} color="primary">
                        Enviar
          </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={modalEnviado} onClose={handleClose} aria-labelledby="investir-dialog-title">
                <DialogContent className="remove-padding">
                    <Alert severity="success">
                        Seu cadastro foi iniciado, <strong>verifique seu email</strong> para conclui-lo e iniciar seus investimentos em nossa plataforma!
                    </Alert>
                </DialogContent>
            </Dialog>

            <Dialog open={modalErro} onClose={handleClose} aria-labelledby="investir-dialog-title">
                <DialogContent className="remove-padding">
                    <Alert severity="error">
                        Houve um problema, tente novamente mais tarde.
          </Alert>
                </DialogContent>
            </Dialog>
        </>

    )
}
export default Header;