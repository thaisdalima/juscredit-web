import BePart from "../containers/BePart/BePart";

const BePartPage = ({ data }) => (
    <BePart producers={data}/>)

BePartPage.getInitialProps = async ctx => {
    const res = await fetch('https://api.organis8.com.br/api/produtores/items');
    const data = await res.json()
    return { data }
}
export default BePartPage
