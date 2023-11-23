import FilterByRegion from "./FilterByRegion.js"
import FilterBySearch from "./FilterBySearch.js";
import Flags from "./Flags.js"
import { useState } from "react";

const FlagComponent = ( { toggle }) => {
    const [cData, setCData] = useState([])
    return (
        <>
        <FilterBySearch setCData={setCData} toggle={toggle} />
        <FilterByRegion setCData={setCData} toggle={toggle} />
        <Flags cData={cData} setCData={setCData} toggle={toggle} />
        </>
    )
}

export default FlagComponent