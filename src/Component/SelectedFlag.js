import { useEffect, useState } from "react"
const SelectedFlag = ({ toggle, selected, setSelected }) => {
    const [sCData, setSCData] = useState([])
    useEffect(() => {
        if(selected !== ""){
        const filterSelected = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${selected}`)
            const data = await response.json()
            console.log(data)
            setSCData(data)
        }
        filterSelected()
        }
        else{
        }
    },[selected])

    return (<>
        {sCData.map((country) => {
            return (
                <div className={toggle === false ? "card lightmode-element" : "card darkmode-element"}>
                    <img src={country.flags.svg} alt=""></img>
                    <h1>{country.name.official}</h1>
                   {Object.keys(country.name.nativeName)[0] === "fra" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.fra.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "eng" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.eng.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "ara" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.ara.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "por" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.por.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "afr" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.afr.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "amh" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.amh.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "bwg" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.bwg.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "ber" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.ber.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "afr" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.afr.official}</p> : null }
                   {console.log(Object.keys(country.name.nativeName)[0])}
                    <p><strong className="bold">Population:</strong> {country.population}</p>
                    <p><strong className="bold">Region:</strong> {country.region}</p>
                    <p><strong className="bold">Capital:</strong> {country.capital}</p>
                </div>
            )
        })
    }
    </> )
}

export default SelectedFlag