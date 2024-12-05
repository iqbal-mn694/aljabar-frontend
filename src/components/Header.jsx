import logo from '../assets/nada.png';

function Header() {
  return ( 
    <>
      <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" onClick={() => showTab("home")} />
        </div>
        <ul>
          <li>
            <a href="/" onClick={() => showTab("home")}>
              Beranda
            </a>
          </li>
          <li>
            <a href="/concept">
              Konsep
            </a>
          </li>
          <li>
            <a href="/about" onClick={() => showTab("team")}>
              Tentang Kami
            </a>
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header;