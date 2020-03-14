import React, { Component } from 'react'

class Calculator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visor: '',
      temp: '',
      breadcrumbs: '',
      operator: '',
      eraseVisor: false
    }
  }

  eraseVisor () {
    const state = this.state
    state.visor = ''
    state.eraseVisor = false
    this.setState(state)
  }

  handleNumber (e) {
    const state = this.state
    const value = e.target.value
    if (state.eraseVisor) {
      this.eraseVisor()
    }
    state.visor += value
    state.breadcrumbs = this.incrementBreadcrumbs(state.breadcrumbs, value)
    this.setState(state)
  }

  incrementBreadcrumbs (breadcrumbs, value) {
    // if (breadcrumbs.length >= 18) {
    if (breadcrumbs.length % 18 === 0 && breadcrumbs.length !== 0) {
      breadcrumbs += '\n'
    }
    return breadcrumbs + value
  }

  handleOperator (e) {
    const state = this.state
    const newOperator = e.target.value
    state.breadcrumbs = this.incrementBreadcrumbs(state.breadcrumbs, newOperator)
    const visorNum = Number(state.visor)
    const tempNum = Number(state.temp)

    switch (state.operator) {
      case 'AC':
        state.visor = ''
        state.temp = ''
        state.breadcrumbs = ''
        state.eraseVisor = false
        break
      case '+':
        state.visor = (tempNum + visorNum).toString()
        state.temp = state.visor
        state.eraseVisor = true
        state.operator = newOperator
        break
      case '-':
        state.visor = (tempNum - visorNum).toString()
        state.temp = state.visor
        state.eraseVisor = true
        state.operator = newOperator
        break
      case '/':
        state.visor = (tempNum / visorNum).toString()
        state.temp = state.visor
        state.eraseVisor = true
        state.operator = newOperator
        break
      case '*':
        state.visor = (tempNum * visorNum).toString()
        state.temp = state.visor
        state.eraseVisor = true
        state.operator = newOperator
        break
      default:
        break
    }
    // if (newOperator === '=') {
    //   state.operator = ''
    //   state.temp = '' // state.visor
    //   state.breadcrumbs = '' // state.visor
    // //   state.visor = ''
    // } else {
    //   state.operator = newOperator
    // }
    this.setState(state)
  }

  UNSAFE_componentWillUpdate () {
    console.log(this.state)
  }

  render () {
    return (
      <div className='w3-container w3-theme w3-card' style={{ width: 205 }}>
        <div className='w3-row'>
          <div className='w3-col' style={{ textAlign: 'right', minHeight: 52 }}>
            <p>{this.state.breadcrumbs}</p>
          </div>
        </div>
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
