import {React, useState, useEffect} from 'react';
import Navigate from '../components/Navigate'
import './RPS.css'
import RPSmodal from '../components/RPSmodal'

const RPS = () => {
    const variants = {
        scissors: '✌',
        rock: '✊',
        paper: '✋',
        1: '✌',
        2: '✊',
        3: '✋',

    }

    let show = false;
    let gameResult = ''

    useEffect(() => {
        handleHP()
        console.log(OPhp)
        console.log(Uhp)
    })

    const [choice, setChoice] = useState()
    const [AIchoice, setAIchoice] = useState()
    const [Uhp, setUhp] = useState(3)
    const [OPhp, setOPhp] = useState(3)
    const [canChangeHp, setCanChangeHp] = useState(false)


    function handleChoice(event) {
        let rand = Math.floor(Math.random() * (3 - 1) + 1);
        setChoice(event.target.innerHTML)
        setAIchoice(variants[rand]);
        setCanChangeHp(true)
    }


    const handleHP = () => {
    if (canChangeHp) {
        if (choice === variants.scissors && AIchoice === variants.rock) {
            setUhp(Uhp - 1)
        } else if (choice === variants.rock && AIchoice === variants.paper) {
            setUhp(Uhp - 1)
        } else if (choice === variants.paper && AIchoice === variants.scissors) {
            setUhp(Uhp - 1)
        } else if (choice === variants.scissors && AIchoice === variants.paper) {
            setOPhp(OPhp - 1)
        } else if (choice === variants.rock && AIchoice === variants.scissors) {
            setOPhp(OPhp - 1)
        } else if (choice === variants.paper && AIchoice === variants.rock) {
            setOPhp(OPhp - 1)
        } 
        setCanChangeHp(false)
    }
}
       
        if (Uhp === 0) {
            show = true
            gameResult = 'You lost!'
        } else if (OPhp === 0) {
            show = true
            gameResult = 'You won!'
        }

    return (
    <>
    <div className='play-field-container'>
        <Navigate />
        <div className='play-field'>
        <div className='choices'>
            <div className='your-choise'>
            <div className='your-choise-icon'>{choice}</div>
            <h1>Your choise</h1>
            <div className='health'>
            <p className={Uhp >= 1 ? 'hp' : 'hp lose'}>❤</p><p className={Uhp >= 2 ? 'hp' : 'hp lose'}>❤</p><p className={Uhp >= 3 ? 'hp' : 'hp lose'}>❤</p>
            </div>
            </div>
            <h1 id='vs'>VS</h1>
            <div className='opponent-choise'>
            <div className='opponent-choise-icon'>{AIchoice}</div>
            <h1>AI choise</h1>
            <div className='health'>
                <p className={OPhp >= 1 ? 'hp' : 'hp lose'}>❤</p><p className={OPhp >= 2 ? 'hp' : 'hp lose'}>❤</p><p className={OPhp >= 3 ? 'hp' : 'hp lose'}>❤</p>
            </div>
            </div>
        </div>
            <div className='selector'>
                <div className='sign' id='scissors' onClick={handleChoice}>{variants[1]}</div>
                <div className='sign' id='rock' onClick={handleChoice}>{variants[2]}</div>
                <div className='sign' id='paper' onClick={handleChoice}>{variants[3]}</div>
            </div>
        </div>
    </div>
    <RPSmodal active={show} result={gameResult}/>
    </>
    )
}

export default RPS