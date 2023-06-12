import './navbar.css'
import Logo from '../../assets/logo.png'
import data from './data'

import { MdInvertColors as ThemeIcon } from 'react-icons/md'

const Navbar = () => {
  return (
    <>
        <nav className="navbar">
          <div className='container'>
            <div className="navbar__container">
              <a href="index.html" className="navbar__logo">
                <img src={Logo} alt="Logo image" />
              </a>
              <ul className='navbar__menu'>
                {
                  data.map((item, index) => <li key={index}><a href={item.link}>{item.title}</a></li>)
                }
              </ul>
              <button id='theme__icon'>
                <ThemeIcon />
              </button>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar