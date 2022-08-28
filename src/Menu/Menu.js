import './Menu.css'

const Menu = () => {
  const menuOnMouseOverHandle = () => {
    document.getElementsByClassName('menu')[0].style.width = "20vw"
  }
  const menuOnMouseOutHandle = () => {
    document.getElementsByClassName('menu')[0].style.width = "4vw"
  }

  return (
    <div className="menu" onMouseOver={menuOnMouseOverHandle} onMouseOut={menuOnMouseOutHandle}>
      <div className="menuBg">
        <div className="menuBgLeft" />
        <div className="menuBgRight" />
        <div className="menuBgTop" />
        <div className="menuBgBottom" />
      </div>
    </div>
  )
}

export default Menu