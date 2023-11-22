import { useEffect, useState } from "react"

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
            <input type="text" onChange={(e) => {setSearch(e.target.value)}} value={search}></input>
        </>
    )
}

export default FilterBySearch