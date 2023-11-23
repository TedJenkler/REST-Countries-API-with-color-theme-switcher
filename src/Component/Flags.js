import { useEffect, useState } from "react";

const Flags = ({ cData, setCData }) => {

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('https://restcountries.com/v3.1/all')
          const data = await response.json()
          setCData(data)
        }

        fetchData()
      }, [])

    return (<>
        {cData.map((country) => {
            return (
                <div key={country.name.official} className="card">
                    <img src={country.flags.svg} alt=""></img>
                    <h1>{country.name.official}</h1>
                    <p><strong className="bold">Population:</strong> {country.population}</p>
                    <p><strong className="bold">Region:</strong> {country.region}</p>
                    <p><strong className="bold">Capital:</strong> {country.capital}</p>
                </div>
            )
        })
    }
    </> )
}

export default Flags