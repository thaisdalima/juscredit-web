import './Button.scss'


const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement> & { color: string, loading?: boolean | string }) => {
    const { color, loading } = props;
    return (<button className={`button ${color}`} {...props} >{loading === 'true' ? (<img height="32" width="32" src="/loading.svg" />) : props.children}</button>)
}

export default Button