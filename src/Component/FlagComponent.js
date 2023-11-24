import FilterByRegion from "./FilterByRegion.js"
import FilterBySearch from "./FilterBySearch.js";
import Flags from "./Flags.js"
import { useState } from "react";
import SelectedFlag from "./SelectedFlag.js";
import BackButton from "./BackButton.js";

const FlagComponent = ({ toggle }) => {
    const [cData, setCData] = useState([])
    const [search, setSearch] = useState("")
    const [selected, setSelected] = useState("")
    return (
        <>
        {selected !== "" ? <BackButton setSelected={setSelected} toggle={toggle} /> : null}
        <div className="responsive1">
            {selected === "" ? <FilterBySearch setCData={setCData} toggle={toggle} search={search} setSearch={setSearch} /> : null}
            {selected === "" ? <FilterByRegion setCData={setCData} toggle={toggle} /> : null}
        </div>
        {selected === "" ? <Flags cData={cData} setCData={setCData} toggle={toggle} search={search} setSearch={setSearch} selected={selected} setSelected={setSelected} /> : <SelectedFlag toggle={toggle} selected={selected} setSelected={setSelected} />}
        </>
    )
}

export default FlagComponent