import React from 'react'

import '../../css/style.scss'
import '../../css/header/header.scss'

function header() {
  return (
    <div>
      <div className="container">
        <div className="header_one">
            <div className="contact">
                <p><img src="img/local.png" alt="" /><a href="https://maps.app.goo.gl/yZtsMqB1mRewJQFr5">Чита ул. Дивизионная 3</a></p>
                <p><img src="img/phone.svg" alt="" /><a href="tel:+79998889999">+7 999 888 99-99</a></p>
            </div>
            <div className="register">
                <a className='signIN' href="#">Войти</a>
                <a className='signUP' href="#">Зарегистрироваться</a>
            </div>
        </div>
        <div className="header_two"></div>
        <div className="header_three"></div>
      </div>
    </div>
  )
}

export default header;
