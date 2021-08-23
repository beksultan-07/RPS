import './App.css';
import React, { Component } from 'react';
import Headers from './title/header'
import Game from './game/game';
import Popup from './popup/popup';

import Rock from './img/камень.png'
import Paper from './img/бумага.png'
import Scissors from './img/ножницы.png'
import Comp from './img/question.png'

class App extends Component{
  state = {
    choice: ['rock', 'paper', 'scissors'],
    win: 0,
    lose: 0,
    comp: Comp,
    gameState: ''
  }

  rand = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  clickToChoose = (userChoice) => {
    let randComp = this.rand(-1, 3)
    let getRand = this.state.choice[randComp]
    if (getRand === 'rock'){
      let compChoice = this.state.comp
      compChoice = Rock
      this.setState({comp: compChoice})
    }else if (getRand === 'paper'){
      let compChoice = this.state.comp
      compChoice = Paper
      this.setState({comp: compChoice})
    }else{
      let compChoice = this.state.comp
      compChoice = Scissors
      this.setState({comp: compChoice})
    }

    if (userChoice === 'rock' && getRand === 'paper' ||
        userChoice === 'paper' && getRand === 'scissors' || 
        userChoice === 'scissors' && getRand === 'rock'){
      let lose = this.state.lose
      lose++
      this.setState({lose})
      let gameState = this.state.gameState
      gameState = 'Поражение'
      this.setState({gameState})
    }else if (userChoice === getRand){
      let gameState = this.state.gameState
      gameState = 'Ничья'
      this.setState({gameState})
    }else{
      let win = this.state.win
      win++
      this.setState({win})
      let gameState = this.state.gameState
      gameState = 'Победа'
      this.setState({gameState})
    }
  }
  result = () => {
    let win = this.state.win
    let lose = this.state.lose
    win = 0
    lose = 0
    this.setState({win, lose})
  }

  render(){
    let showPopup = null
    if (this.state.win === 5 || this.state.lose === 5){
      showPopup = (
        <Popup win={this.state.win} lose={this.state.lose} Result={this.result}/>
      )
    }
    return (
      <div className="App">
        <div className='wrapper'>
            {showPopup}
            <div className="container">
              <Headers win={this.state.win} lose={this.state.lose}/>
              <Game 
                UserRock = {() => this.clickToChoose('rock')}
                UserPaper = {() => this.clickToChoose('paper')}
                UserScissors = {() => this.clickToChoose('scissors')}
                rock = {Rock}
                paper = {Paper}
                scissors = {Scissors}
                comp = {this.state.comp}
                gameState = {this.state.gameState}
              />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
