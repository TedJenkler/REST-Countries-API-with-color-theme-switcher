import lightmoon from "../Img/moon-regular.svg"
import darkmoon from "../Img/moon-darkmode.png"


const ColorSwitcher = ({ toggle, setToggle }) => {
    return (
        <div className={toggle === false ? "colorswitcharea lightmode-element" : "colorswitcharea darkmode-element"}>
            <h1 className={toggle === false ? "header lightmode-element" : "header darkmode-element"}>Where in the world?</h1>
            <span className="buttonarea"><img src={toggle === false ? lightmoon : darkmoon} alt="moon" /><button onClick={(e) => {toggle === false ? setToggle(true) : setToggle(false)}} className={toggle === false ? "colorswitch lightmode-element" : "colorswitch darkmode-element"}>Dark Mode</button></span>
        </div>
    )
}

export default ColorSwitcher