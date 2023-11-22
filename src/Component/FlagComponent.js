import FilterByRegion from "./FilterByRegion.js"
import FilterBySearch from "./FilterBySearch.js";
import Flags from "./Flags.js"
import { useState } from "react";

const FlagComponent = () => {
    const [cData, setCData] = useState([])
    return (
        <>
        <FilterBySearch setCData={setCData} />
        <FilterByRegion setCData={setCData} />
        <Flags cData={cData} setCData={setCData} />
        </>
    )
}

export default FlagComponent