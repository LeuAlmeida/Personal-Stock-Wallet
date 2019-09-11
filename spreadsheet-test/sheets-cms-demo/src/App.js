import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabletop from 'tabletop';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1L-ywhumD0TnbJVxhMK_zZ9hnPsSKA86xPen1XCqNuG8',
      orderby: 'employee',
      reverse: true,
      wanted: ['Controle de Ativos'],

      callback: googleData => {
        this.setState({
          data: googleData,
        })
        // console.log('google sheet data --->', googleData)

      },
      simpleSheet: true
    })
  }

  render() {
    const { data } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React + Google Sheets Demo</h1>
        </header>
        <div id="employee-details">
          {
            data.map(obj => {
              return (
                <div key={obj.Ticker}>
                  <p>{obj.Nome}</p>
                  <h1>{obj.Ticker}</h1>
                  <h2>{obj.Preço}</h2>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;