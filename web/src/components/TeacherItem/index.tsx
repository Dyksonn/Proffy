import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/44515719?s=460&u=a1f723d87fd02ce964cabcdb6e2fac899a699f0d&v=4" alt="Dykson Santos" />
        <div>
          <strong>Dykson Santos</strong>
          <span>Programação React Native</span>
        </div>
      </header>

      <p>
        Programação orientada a objetos, basico em javascript
            <br /><br />
            Apaixonado por tecnlogia desde de pequenininho e cada vez mais agora trabalhando na área apaixonado pela tecnologia
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem;