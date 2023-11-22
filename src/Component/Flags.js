import { useState } from "react";

const Flags = () => {

    const [cName, setCName] = useState("")
    const [cPopulation, setCPopulation] = useState("")
    const [cRegion, setCRegion] = useState("")
    const [cCapital, setCCapital] = useState("")
    const [cFlag, setCFlag] = useState("")

    fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0].flags.svg)
            setCName(data[0].name.official)
            setCPopulation(data[0].population)
            setCRegion(data[0].region)
            setCCapital(data[0].capital[0])
            setCFlag(data[0].flags.svg)
          });
    return (
        <div className="card">
            <img src={cFlag} alt={cName}></img>
            <h1>{cName}</h1>
            <p>Population: {cPopulation}</p>
            <p>Region: {cRegion}</p>
            <p>Capital: {cCapital}</p>
        </div>
    )
}

export default Flags