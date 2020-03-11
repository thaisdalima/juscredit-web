import InteractiveMap from "../components/InteractiveMap/InteractiveMap";
import fetch from 'isomorphic-unfetch'
import { useState } from "react";
function FindPartners({ data }) {
    const allPartners: any[] = data;
    const [partners, setPartners] = useState(allPartners);

    const handleFilter = (filters) => {

        const filterKeys = Object.keys(filters).filter((key) => Boolean(filters[key]))
        if (filterKeys.length) {
            setPartners(allPartners.filter((partner) => {

                return filterKeys.every(key => filters[key] === partner[key])
            }))
        } else {
            setPartners(allPartners)
        }
    }

    return (
        <>
            <InteractiveMap data={partners} onFilterChange={handleFilter} />
        </>
    )
}

FindPartners.getInitialProps = async ctx => {
    const res = await fetch('https://api.organis8.com.br/api/produtores/items');
    const data = await res.json()
    return { data }
}
export default FindPartners