import { useEffect, useState } from "react"

const FilterByRegion = ( { setCData, toggle }) => {
    const [fRegion, setFRegion] = useState(null);

    useEffect(() => {
        if(fRegion !== null){
        const filterRegion = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/region/${fRegion}`)
            const data = await response.json()
            setCData(data)
        }
        filterRegion()
        }
        else{
        }
    },[fRegion])


    return (
        <div className={toggle === false ? "selectarea lightmode-bg" : "selectarea darkmode-bg"}>
            <select className={toggle === false ? "rselect lightmode-element" : "rselect darkmode-element"} onChange={(e) => {setFRegion(e.target.value)}}>
                <option value={null}>Filter By Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    )
}

export default FilterByRegion