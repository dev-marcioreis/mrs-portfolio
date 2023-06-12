import './header.css'
import HeaderImg from '../../assets/header.png'
import { BiMap } from 'react-icons/bi'
import data from './data'

const Header = () => {
  return (
    <>
        <header className="header" id="header">
          <div className="container header__container">
            <div className="header__profile">
              <img src={HeaderImg} alt="Header image" />
            </div>
              <h3>márcio reis</h3>
              <h4>desenvolvedor front-end</h4>
              <span><i><BiMap /></i> são paulo, brasil</span>
              <p>Tenho paixão por tecnologia, e ela me faz ter vontade de trabalhar e estudar cada vez mais para solucionar os mais variados tipos de problemas na área de desenvolviment</p>
            <div className="header__cta">
              <a href="#contact" className='btn'>Fale comigo</a>
              <a href="#portfolio" className='btn'>Meus projetos</a>
            </div>
            <div className="header__socials">
              {
                data.map((item, index) => <a key={index} href={item.link} target='_blank'>{item.icon}</a>)
              }
            </div>
          </div>
        </header>
    </>
  )
}

export default Header