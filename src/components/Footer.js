import {React} from 'react'
import './css/Footer.css'

const Footer = () => {

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
    <div className='footer'>
        <div className='info'>
            <p>
            Site was made just to practice <br />
            on React. <br />
            Was thinking about use Redux and Tailwind, <br />
            but it will be later.
            </p>
        </div>
        <div className='contact'>
        <a href='https://github.com/richismyhoo'>GitHub profile</a>
        <a href='https://t.me/richismyho'>Telegram</a>
        </div>
        <div className='to-home'>
            <h1 onClick={goTop}>Home 🠕</h1>
        </div>
    </div>
    )
}

export default Footer