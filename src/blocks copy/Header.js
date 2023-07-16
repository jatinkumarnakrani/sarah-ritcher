import logo from '../assets/img/sarah.png';
import NavigationBar from  './NavigationBar';
function Header() {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <a href="index.html" className="logo me-auto">
          <img src={logo} alt="" className="img-fluid" />
        </a>
        <NavigationBar />
      </div>
    </header>
  );
}

export default Header;
