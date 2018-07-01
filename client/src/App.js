import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptos: []
    };
  }
  componentDidMount() {
    axios.get('https://api.coinmarketcap.com/v2/listings/', {})
      .then(res => {
        const data = res.data;
        console.log(data)
        for (var key in data) {
          if (key == 'data') {
            for(var item in data[key]) {
              console.log(data[key][item]) 
              /* data[key][item] looks like this:         
                {
                    "id": 1, 
                    "name": "Bitcoin", 
                    "symbol": "BTC", 
                    "website_slug": "bitcoin"
                }, 
              */
            }
          }
        }
        /* create a list of cryptos and set the list to this.setState to update UI*/
        // const cryptos = []
        // for (var key in data) {
        //   cryptos.push(data[key])
        // }
        // this.setState({cryptos: cryptos});
      })
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.cryptos.map(function(ticker) {
            return <li>{ticker.symbol} : {ticker.timestamp} : {ticker.last}</li>; 
          })}
        </ul>
      </div>
    );
  }
}

export default App;
