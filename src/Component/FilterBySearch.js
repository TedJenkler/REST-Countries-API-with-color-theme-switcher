import { useEffect } from "react"
import searchiconlightmode from "../Img/magnifying-glass-solid-lightmode.png"
import searchicondarkmode from "../Img/darkmode.png"

const FilterBySearch = ({ setCData, toggle, search, setSearch }) => {
    useEffect(() => {
        if(search !== ""){
        const filterSearch = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${search}`)
            const data = await response.json()
            setCData(data)
        }
        filterSearch()
        }else {

        }
    },[search])
    return (
        <>
        <label htmlFor="search" className={toggle === false ? "searchlabel lightmode-element" : "searchlabel darkmode-element"}>
            <img className="lightmode-input" id="searchicon" src={toggle === false ? searchiconlightmode : searchicondarkmode} />
            <input id="search" className={toggle === false ? "search-input lightmode-element" : "search-input darkmode-element"} type="text" onChange={(e) => {setSearch(e.target.value)}} placeholder="Search for a country..." value={search}></input>
        </label>
        </>
    )
}

export default FilterBySearch