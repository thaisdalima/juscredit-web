import './Header.scss'
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Button from '../Button/Button';
import { Link } from "react-scroll";




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
                <a className="navbar-brand" href="/"> <img src="/logo.svg" className="header-logo" />
</a>      
               
                <div className="link-container">
                <Link to="funciona-container" > 
                        <a className="link">Como Funciona</a>
                        </Link>
                        
                    <Link to="antecipar" > 
                        <a className="link">Antecipar</a>
                        </Link>
                    
                    
                    <Link to="duvidas-container">
                    <a className="link">Dúvidas</a>
                        </Link>

                    <Link to="parceiros-container">
                        <a className="link">Parceiros</a>
                    </Link>
                    <Button className="entrar" color="seven" onClick={()=> window.open('https://front-dot-juscredit-273101.ue.r.appspot.com/')}> 
                    Entrar</Button>
                </div>
                <div className="menu-button" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill={themeClass === 'white-navbar' ? 'white' : '#395E66'} d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                    </svg>
                </div>
            </nav>
            {openedMenu && (
                <div className={"mobile-link-container " + themeClass}>
                    <Link to="antecipar" > 
                        <a className="link">Antecipar</a>
                        </Link>
                        <br/>
                    <Link >
                        <a className="link" href="/contact">Contato</a>
                    </Link>
                    <br/>
                    <Link to="parceiros-container">
                        <a className="link"> Parceiros </a>
                    </Link>
                    <br/>
                    <Link to="nav">
                        <a className="entrar">Entrar </a>
                    </Link>
                   
                </div>
            )
            }
        </>

    )
}
export default Header;