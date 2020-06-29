import './Header.scss';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Button from '../Button/Button';
import Link from 'next/link';

const Header = () => {
    const [openedMenu, setOpenedMenu] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false);
    const router = useRouter()
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
                    {/* <li className="link">
                        <Link href="#">
                            <a>Antecipar</a>
                        </Link>
                    </li>
                    <li className="link">
                        <Link href="duvidas-container">
                            <a>Dúvidas</a>
                        </Link>
                    </li> */}
                    <li className="link">
                        <Link href="#parceiros-container">
                            <a>Parceiros</a>
                        </Link>
                    </li>
                    <li className="link">
                        <Button className="entrar" color="seven" onClick={() => window.open('https://front-dot-juscredit-273101.ue.r.appspot.com/')}>
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
                    {/* <li className="link">
                        <Link href="antecipar" >
                            <a>Antecipar</a>
                        </Link>
                    </li>
                    <li className="link">
                        <Link href="duvidas-container">
                            <a>Dúvidas</a>
                        </Link>
                    </li> */}
                    <li className="link">
                        <Link href="#parceiros-container">
                            <a>Parceiros</a>
                        </Link>
                    </li>
                    <li className="link">
                        <Button className="entrar" color="seven" onClick={() => window.open('https://front-dot-juscredit-273101.ue.r.appspot.com/')}>
                            Entrar</Button>
                    </li>
                </ul>
            )
            }
        </>

    )
}
export default Header;