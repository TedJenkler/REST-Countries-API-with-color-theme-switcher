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
                   {Object.keys(country.name.nativeName)[0] === "aym" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.aym.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "spa" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.spa.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "kal" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.kal.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "nld" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.nld.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "bjz" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.bjz.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "grn" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.grn.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "kaz" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.kaz.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "aze" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.aze.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "kor" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.kor.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "lao" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.lao.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "dzo" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.dzo.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "mon" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.mon.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "zho" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.zho.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "khm" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.khm.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "tha" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.tha.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "rus" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.rus.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "div" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.div.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "jpn" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.jpn.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "kat" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.kat.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "ben" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.ben.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "vie" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.vie.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "sin" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.sin.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "hye" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.hye.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "prs" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.prs.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "kir" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.kir.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "msa" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.msa.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "fas" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.fas.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "tur" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.tur.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "mya" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.mya.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "ind" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.ind.official}</p> : null }
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