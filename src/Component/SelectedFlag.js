import { useEffect, useState } from "react"
const SelectedFlag = ({ toggle, selected, setSelected }) => {
    const [sCData, setSCData] = useState([])
    useEffect(() => {
        if(selected !== ""){
        const filterSelected = async () => {
            const response = await fetch(selected.length <= 3 ? `https://restcountries.com/v3.1/alpha?codes=${selected},${selected},${selected}` : `https://restcountries.com/v3.1/name/${selected}`)
            const data = await response.json()
            setSCData(data)
        }
        filterSelected()
        }
        else{
        }
    },[selected])

    const renderSelectedData = () => {
        return (
        sCData.map((country) => {
            return (
                <div key={country.name.common} className={toggle === false ? "countryselect lightmode-bg" : "countryselect darkmode-bg"}>
                    <div className="imgdivselected">
                        <img src={country.flags.svg} alt=""></img>
                    </div>
                    <div className="contentdivselected">
                    <div className="content">
                    <div>
                    <h1>{country.name.common}</h1>
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
                   {Object.keys(country.name.nativeName)[0] === "ell" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.ell.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "bul" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.bul.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "ukr" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.ukr.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "fin" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.fin.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "pol" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.pol.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "slk" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.slk.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "mkd" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.mkd.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "deu" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.deu.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "hun" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.hun.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "slv" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.slv.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "bos" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.bos.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "ron" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.ron.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "lav" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.lav.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "nld" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.nld.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "cat" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.cat.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "ita" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.ita.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "srp" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.srp.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "ces" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.ces.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "cnr" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.cnr.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "swe" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.swe.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "isl" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.isl.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "est" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.est.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "sqi" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.sqi.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "hrv" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.hrv.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "bar" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.bar.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "lit" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.lit.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "nno" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.nno.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "dan" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.dan.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "bel" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.bel.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "nor" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.nor.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "cha" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.cha.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "cal" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.cal.official}</p> : null }
                   {Object.keys(country.name.nativeName)[0] === "bis" ? <p><strong className="bold">Native Name:</strong> {country.name.nativeName.bis.official}</p> : null }
                    <p><strong className="bold">Population:</strong> {country.population}</p>
                    <p><strong className="bold">Region:</strong> {country.region}</p>
                    <p><strong className="bold">Sub Region:</strong> {country.subregion}</p>
                    <p><strong className="bold">Capital:</strong> {country.capital}</p>
                    </div>
                    <br></br>
                    <div>
                    <p><strong className="bold">Top Level Domain:</strong> {country.tld}</p>
                    <p><strong className="bold">Currencies:</strong> {Object.keys(country.currencies)}</p>
                    <p><strong className="bold">Languages:</strong> {Object.values(country.languages) + ""}</p>
                    </div>
                    </div>
                    <br></br>
                    <div className="borderarea">
                    <h1>Border Countries:</h1>
                    {country.borders.map((name) => {
                        return (<>
                            <button className={toggle === false ? "borderbutton lightmode-element" : "borderbutton darkmode-element"} key={name} onClick={(e) => {setSelected(name.toLowerCase())}}>{name}</button>
                            </> )
                    })}
                    </div>
                    </div>
                    </div>
            )
        })
    )}

    return (<>
        {renderSelectedData()}
    </> )
}

export default SelectedFlag