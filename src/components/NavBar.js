const NavBar = () =>{
  return (
    <nav className="Nav">
        <b className="Logo">CoffeTime</b>
        <ul className="Ul">
            <li><a href="">Ameria Latina</a></li>
            <li><a href="">Norte America</a></li>
            <li><a href="">Europa</a></li>            
            <li><a href="">Africa</a></li>
        </ul>
        <p className="Carrito">Carrito</p>
    </nav>
  );
}

export default NavBar;