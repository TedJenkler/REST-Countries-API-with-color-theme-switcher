import lightmoon from "../Img/moon-regular.svg"


const ColorSwitcher = ({ toggle, setToggle }) => {
    console.log(toggle)
    return (
        <div className="colorswitcharea lightmode-element">
            <h1 className="header">Where in the world?</h1>
            <span className="buttonarea"><img src={lightmoon} alt="moon" /><button onClick={(e) => {toggle === false ? setToggle(true) : setToggle(false)}} className="colorswitch lightmode-element">Dark Mode</button></span>
        </div>
    )
}

export default ColorSwitcher