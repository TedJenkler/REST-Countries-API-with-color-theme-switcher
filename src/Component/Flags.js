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
                <div className="card">
                    <img src={country.flags.svg} alt=""></img>
                    <h1>{country.name.official}</h1>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                </div>
            )
        })
    }
    </> )
}

export default Flags