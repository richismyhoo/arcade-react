import {Link} from 'react-router-dom'
import './TicTacToe.css'
import React from 'react'
import Navigate from '../components/Navigate.js'
import Modal from '../components/EndScreen.js'

class Home extends React.Component{
    constructor() {
        super()
        this.state = {
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
            6: '',
            7: '',
            8: '',
            9: '',
            counter: 0,
        }
        this.handleClick = this.handleClick.bind(this)
        this.startAgain = this.startAgain.bind(this)
    }

    startAgain() {
        window.location.reload(true)
    }

    handleClick(event) {
        let num
this.state.counter++
let random_start = 1; // От какого генерировать
let random_end = 9; // До какого генерировать

let allСycles = 9;

let array= []

for(let i=random_start;i<=random_end;i++){
   array.push(i)
}

for(let countCycles=1;countCycles<=allСycles;countCycles++){
    num = array.splice(Math.random()*array.length,1)[0]
}

        let memory = event.target.id

        this.setState({
            [event.target.id]: 'x'.toUpperCase()
        })

        event.target.id = String(num)
        setTimeout(() => this.setState( {[event.target.id]: 'o'.toUpperCase()}), 100)
        this.state.counter++
    


        
    }
    

    render() {
        let win = false
        let lose = false
        const checkWin = () => {
            if (this.state.counter > 5) {
            if (
                this.state[1] === this.state[2] && this.state[2] === this.state[3] && this.state[1] === 'X' && this.state[2] === 'X' && this.state[3] === 'X' ||
                this.state[1] === this.state[5] && this.state[5] === this.state[9] && this.state[1] === 'X' && this.state[5] === 'X' && this.state[9] === 'X' ||
                this.state[1] === this.state[4] && this.state[4] === this.state[7] && this.state[1] === 'X' && this.state[4] === 'X' && this.state[7] === 'X' ||
                this.state[2] === this.state[5] && this.state[5] === this.state[8] && this.state[2] === 'X' && this.state[5] === 'X' && this.state[8] === 'X' ||
                this.state[3] === this.state[6] && this.state[6] === this.state[9] && this.state[3] === 'X' && this.state[6] === 'X' && this.state[9] === 'X' ||
                this.state[4] === this.state[5] && this.state[5] === this.state[6] && this.state[4] === 'X' && this.state[5] === 'X' && this.state[6] === 'X' ||
                this.state[7] === this.state[8] && this.state[8] === this.state[9] && this.state[7] === 'X' && this.state[8] === 'X' && this.state[9] === 'X' ||
                this.state[3] === this.state[5] && this.state[5] === this.state[7] && this.state[3] === 'X' && this.state[5] === 'X' && this.state[7] === 'X'
            ) {
                return win = true
            } 
            else if (
                this.state[1] === this.state[2] && this.state[2] === this.state[3] && this.state[1] === 'O' && this.state[2] === 'O' && this.state[3] === 'O' ||
                this.state[1] === this.state[5] && this.state[5] === this.state[9] && this.state[1] === 'O' && this.state[5] === 'O' && this.state[9] === 'O' ||
                this.state[1] === this.state[4] && this.state[4] === this.state[7] && this.state[1] === 'O' && this.state[4] === 'O' && this.state[7] === 'O' ||
                this.state[2] === this.state[5] && this.state[5] === this.state[8] && this.state[2] === 'O' && this.state[5] === 'O' && this.state[8] === 'O' ||
                this.state[3] === this.state[6] && this.state[6] === this.state[9] && this.state[3] === 'O' && this.state[6] === 'O' && this.state[9] === 'O' ||
                this.state[4] === this.state[5] && this.state[5] === this.state[6] && this.state[4] === 'O' && this.state[5] === 'O' && this.state[6] === 'O' ||
                this.state[7] === this.state[8] && this.state[8] === this.state[9] && this.state[7] === 'O' && this.state[8] === 'O' && this.state[9] === 'O' ||
                this.state[3] === this.state[5] && this.state[5] === this.state[7] && this.state[3] === 'O' && this.state[5] === 'O' && this.state[7] === 'O'
            ) {
                return lose = true
            } 
        }
        }

        const inputStyle = {
            height: '100vh',
            width: '100%',
            opacity: '1',
        }

        const again = {
            height: '1vh',
            width: '1%',
            opacity: '0',
        }

        checkWin()
        let show = false
        let result = ''

        if (win) {
            console.log('win')
            result = 'You won'
            show = true
        } else if (lose) {
            console.log('lose')
            result = 'You lost'
            show = true
        }


    return (
        <div className='homepage'>
            <Navigate />
            <div className='game-name-inlist'>Wrong Tic Tac Toe</div>
            <div className='tic-tac-toe'>
                <div className='1row'>
                    <div id='1' className='grid' onClick={this.handleClick}>{this.state[1]}</div>
                    <div id='2' className='grid' onClick={this.handleClick}>{this.state[2]}</div>
                    <div id='3' className='grid' onClick={this.handleClick}>{this.state[3]}</div>
                </div>
                <div className='2row'>
                    <div id='4' className='grid' onClick={this.handleClick}>{this.state[4]}</div>
                    <div id='5' className='grid' onClick={this.handleClick}>{this.state[5]}</div>
                    <div id='6' className='grid' onClick={this.handleClick}>{this.state[6]}</div>
                </div>
                <div className='3row'>
                    <div id='7' className='grid' onClick={this.handleClick}>{this.state[7]}</div>
                    <div id='8' className='grid' onClick={this.handleClick}>{this.state[8]}</div>
                    <div id='9' className='grid' onClick={this.handleClick}>{this.state[9]}</div>
                </div>

            </div>

            <Modal active={show} setActive = {this.state.setActive} result={result}/>

            <div className='hint'>You can overwrite opponent's figure. <br />So just click on already clicked cell</div>
        </div>
    )
}
}

export default Home