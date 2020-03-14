import React, { Component } from 'react'

export default class Calculator extends Component {
  render () {
    return (
      <div className='w3-container w3-theme w3-card' style={{width: 200}}>
          <div className='w3-row'>
              <div className='w3-col w3-center'>
                  Visor
              </div>
          </div>
          <div className='w3-row'>
              {/* <div className='w3-col'> */}
                  <input className='w3-button' type='button' value='1' />
                  <input className='w3-button' type='button' value='1' />
                  <input className='w3-button' type='button' value='1' />
                  <input className='w3-button' type='button' value='1' />
              {/* </div> */}
          </div>
          <div className='w3-row'>
          <input className='w3-button' type='button' value='1' />
          <input className='w3-button' type='button' value='1' />
          <input className='w3-button' type='button' value='1' />
          <input className='w3-button' type='button' value='1' />

          </div>
      </div>
    )
  }
}
