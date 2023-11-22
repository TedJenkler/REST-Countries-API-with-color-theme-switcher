import Filter from "./Filter"
import Flags from "./Flags.js"
import { useState } from "react";

const FlagComponent = () => {
    const [cData, setCData] = useState([])
    return (
        <>
        <Filter cData={cData} setCData={setCData} />
        <Flags cData={cData} setCData={setCData} />
        </>
    )
}

export default FlagComponent