import './Header.scss'
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";



const Header = () => {
    const [openedMenu, setOpenedMenu] = useState(false)
    const router = useRouter()
    let themeClass = ''
    if (router && router.pathname !== '/') {
        themeClass = 'white-navbar'
    }
    useEffect(()=>{
        setOpenedMenu(false)
    },[router.pathname])
    const toggleMenu = () => {
        setOpenedMenu(!openedMenu)
    }

    
    return (
        <>
            <nav className={"nav" + themeClass}>
                 <img src="/logo.svg" className="header-logo"/>
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
                    <Link href="/"> 
                        <a className="link"> <button id="entrar" className="entrar">Entrar</button>
</a>
                    </Link>
                   
                </div>
                <div className="menu-button" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill={themeClass === 'white-navbar' ? 'black' : 'white'} d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                    </svg>
                </div>
            </nav>
            {openedMenu && (
                <div className={"mobile-link-container " + themeClass}>
                  
                    <Link href="#">
                        <a className="link">Antecipar</a>
                    </Link>
                    <Link href="#">
                        <a className="link">Investir</a>
                    </Link>
                    <Link href="#">
                        <a className="link"> Parceiros </a>
                    </Link>
                    <Link href="#">
                        <a className="link">Entrar </a>
                    </Link>
                   
                </div>
            )
            }
        </>

    )
}
export default Header;