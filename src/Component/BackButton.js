import arrow from "../Img/arrow-left-long-solid.svg"

const BackButton = ({ setSelected, toggle }) => {
    return (
        <div className={toggle === false ? "backbuttonarea lightmode-bg" : "backbuttonarea darkmode-bg"}>
            <button className={toggle === false ? "backbutton lightmode-element" : "backbutton darkmode-element"} onClick={(e) => {setSelected("")}}><img src={arrow} alt="arrow" />Back</button>
        </div>
    )
}

export default BackButton