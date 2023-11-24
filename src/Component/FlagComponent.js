import FilterByRegion from "./FilterByRegion.js"
import FilterBySearch from "./FilterBySearch.js";
import Flags from "./Flags.js"
import { useState } from "react";
import SelectedFlag from "./SelectedFlag.js";

const FlagComponent = ( { toggle }) => {
    const [cData, setCData] = useState([])
    const [search, setSearch] = useState("")
    const [selected, setSelected] = useState("")
    return (
        <>
        <FilterBySearch setCData={setCData} toggle={toggle} search={search} setSearch={setSearch} />
        <FilterByRegion setCData={setCData} toggle={toggle} />
        {selected === "" ? <Flags cData={cData} setCData={setCData} toggle={toggle} search={search} setSearch={setSearch} selected={selected} setSelected={setSelected} /> : <SelectedFlag toggle={toggle} selected={selected} setSelected={setSelected} />}
        </>
    )
}

export default FlagComponent