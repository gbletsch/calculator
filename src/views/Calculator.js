import React, { Component } from 'react'

class Calculator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visor: '',
      temp: '',
      operator: '',
      eraseVisor: false
    }
  }

  handleNumber (e) {
    const state = this.state
    const value = e.target.value
    if (state.eraseVisor) {
      state.eraseVisor = false
      state.visor = ''
    }
    if (state.visor.length < 8) {
      state.visor += value
      this.setState(state)
    }
  }

  handleOperator (e) {
    const state = this.state
    const newOperator = e.target.value
    const visorNum = Number(state.visor)
    const tempNum = Number(state.temp)

    if (newOperator === 'AC') {
      state.visor = ''
      state.temp = ''
      state.operator = ''
      state.eraseVisor = false
      this.setState(state)
      return
    } else if (newOperator === 'C') {
      if (state.eraseVisor) {
        state.visor = state.temp
        state.temp = ''
        state.operator = ''
        state.eraseVisor = false
      } else {
        state.visor = ''
      }
      this.setState(state)
      return
    }

    switch (state.operator) {
      case '+':
        state.visor = (tempNum + visorNum).toString()
        state.temp = state.visor
        state.operator = newOperator
        state.eraseVisor = true
        break
      case '-':
        state.visor = (tempNum - visorNum).toString()
        state.temp = state.visor
        state.operator = newOperator
        state.eraseVisor = true
        break
      case '/':
        state.visor = (tempNum / visorNum).toString()
        state.temp = state.visor
        state.operator = newOperator
        state.eraseVisor = true
        break
      case '*':
        state.visor = (tempNum * visorNum).toString()
        state.temp = state.visor
        state.operator = newOperator
        state.eraseVisor = true
        break
      default:
        state.operator = newOperator
        state.temp = state.visor
        state.eraseVisor = true
        break
    }

    if (state.operator === '=') {
      state.operator = ''
      state.temp = ''
      state.eraseVisor = true
    }
    if (state.visor.length > 8) {
      state.visor = 'ERR'
      state.temp = ''
      state.operator = ''
      state.eraseVisor = true
    }
    this.setState(state)
  }

  componentDidUpdate () {
    console.log(this.state)
  }

  render () {
    return (
      <div className='w3-container w3-theme w3-card' style={{ width: 205 }}>
        <div className='w3-row'>
          <div className='w3-col' style={{ textAlign: 'right', height: 25 }}>
            {this.state.visor}
          </div>
        </div>
        <div className='w3-row'>
          <input className='w3-button' type='button' value='C' onClick={(e) => this.handleOperator(e)} />
          <input className='w3-button' type='button' value='AC' onClick={(e) => this.handleOperator(e)} />
          <input className='w3-button' type='button' value='/' onClick={(e) => this.handleOperator(e)} />
          <input className='w3-button' type='button' value='*' onClick={(e) => this.handleOperator(e)} />
        </div>
        <div className='w3-row'>
          <input className='w3-button' type='button' value='7' onClick={(e) => this.handleNumber(e)} />
          <input className='w3-button' type='button' value='8' onClick={(e) => this.handleNumber(e)} />
          <input className='w3-button' type='button' value='9' onClick={(e) => this.handleNumber(e)} />
          <input className='w3-button' type='button' value='+' onClick={(e) => this.handleOperator(e)} />
        </div>
        <div className='w3-row'>
          <input className='w3-button' type='button' value='4' onClick={(e) => this.handleNumber(e)} />
          <input className='w3-button' type='button' value='5' onClick={(e) => this.handleNumber(e)} />
          <input className='w3-button' type='button' value='6' onClick={(e) => this.handleNumber(e)} />
          <input className='w3-button' type='button' value='-' onClick={(e) => this.handleOperator(e)} />
        </div>
        <div className='w3-row'>
          <input className='w3-button' type='button' value='1' onClick={(e) => this.handleNumber(e)} />
          <input className='w3-button' type='button' value='2' onClick={(e) => this.handleNumber(e)} />
          <input className='w3-button' type='button' value='3' onClick={(e) => this.handleNumber(e)} />
          <input className='w3-button' type='button' value='.' onClick={(e) => this.handleNumber(e)} />
        </div>
        <div className='w3-row'>
          <input className='w3-button' type='button' value='0' onClick={(e) => this.handleNumber(e)} />
          <input className='w3-button' type='button' value='=' onClick={(e) => this.handleOperator(e)} />

        </div>
      </div>
    )
  }
}

export default Calculator
