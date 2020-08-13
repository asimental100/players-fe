/* eslint-disable */
import React from 'react';
import { fetchPlayers } from './players-api.js';
import './App.css';

export class App extends React.Component {
  state = {
    players: [] 
  }

  componentDidMount = async () => {
    const data = await fetchPlayers()
    
    this.setState({
      players: data.body
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Soccer Players:</h2>
          {
            this.state.players.map((player) => {
              return <div style={{ margin: 10, padding: 10, border: 'solid 5px pink'}}>
                {player.name} : {player.age} : {player.injured} : {player.position}
              </div>
            })
          }
        </header>
        </div>
    )
}
}
