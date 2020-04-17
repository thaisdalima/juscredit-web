import './Header.scss'
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Button from '../Button/Button';




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
            <a className="navbar-brand" href="/"> <img src="/logo.svg" className="header-logo" />
</a>                <div className="link-container">

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
                        <a className="link"> <Button onClick={()=> router.push('/contact')}id="entrar" className="entrar" color="seven">Entrar</Button>
</a>
                    </Link>
                   
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