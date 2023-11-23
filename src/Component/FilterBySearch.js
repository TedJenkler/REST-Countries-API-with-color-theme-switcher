import { useEffect, useState } from "react"
import searchiconlightmode from "../Img/magnifying-glass-solid-lightmode.png"

const FilterBySearch = ( { setCData }) => {
    const [search, setSearch] = useState("")
    console.log(search)
    useEffect(() => {
        if(search !== ""){
        const filterSearch = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${search}`)
            const data = await response.json()
            console.log(data)
            setCData(data)
        }
        filterSearch()
        }
        else{
        }
    },[search])
    return (
        <>
        <label htmlFor="search" className="searchlabel lightmode-element">
            <img className="lightmode-input" id="searchicon" src={searchiconlightmode} />
            <input id="search" className="search-input lightmode-input" type="text" onChange={(e) => {setSearch(e.target.value)}} placeholder="Search for a country..." value={search}></input>
        </label>
        </>
    )
}

export default FilterBySearch