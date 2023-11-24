import { useEffect} from "react";

const Flags = ({ cData, setCData, toggle, setSelected }) => {
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('https://restcountries.com/v3.1/all')
          const data = await response.json()
          setCData(data)
        }

        fetchData()
      }, [])

      function renderFlag(){
        return(
        cData.map((country) => {
            return (
                <div onClick={(e) => {setSelected(country.name.official)}} key={country.name.official} className={toggle === false ? "card lightmode-element" : "card darkmode-element"}>
                    <img src={country.flags.svg} alt={country.name.common}></img>
                    <h1>{country.name.common}</h1>
                    <p><strong className="bold">Population:</strong> {country.population}</p>
                    <p><strong className="bold">Region:</strong> {country.region}</p>
                    <p><strong className="bold">Capital:</strong> {country.capital}</p>
                </div>
            )
            })
    )
      }

    return (<>
        {renderFlag()}
    </> )
}

export default Flags