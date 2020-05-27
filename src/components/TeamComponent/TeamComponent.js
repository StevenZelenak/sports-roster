import React from 'react';
import './TeamComponent.scss';
import playersData from '../../helpers/data/playersData';
import authData from '../../helpers/data/authData';
import PlayerCards from '../PlayerCards/PlayerCards';
import PlayerForm from '../PlayerForm/PlayerForm';

class TeamComponent extends React.Component {
  state = {
    players: [],
    playerform: false,
  }

  getAllPlayers = () => {
    playersData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('could not get players', err));
  }

  componentDidMount() {
    this.getAllPlayers();
  }

  removePlayer = (playerId) => {
    playersData.deletePlayer(playerId)
      .then(() => this.getAllPlayers())
      .catch((err) => console.error('could not delete player: ', err));
  }

  saveNewPlayer = (newPlayer) => {
    // taking the player object pulled from the form, passing it into the save player function from data which post to firebase
    playersData.savePlayer(newPlayer)
      .then(() => {
        // if the data goes through I am reposting all the player
        this.getAllPlayers();
        // I am then setting the state of the form to false to remove it
        this.setState({ playerform: false });
      })
      .catch((err) => console.error('unable to save player: ', err));
  }

  render() {
    const makePlayers = this.state.players.map((player) => (
      <PlayerCards key={player.id} player={player} removePlayer={this.removePlayer}/>
    ));

    return (
      <div className="TeamComponent">
        <h1>Team SoloMid</h1>
        {/* When I click the button I set the state to playerform to true */}
        <button className="btn btn-success" onClick={() => this.setState({ playerform: true })}>Add Player</button>
        <div className="d-flex flex-wrap">
          {makePlayers}
        </div>
        <div>
          {/* if playerform is true print PlayerForm and pass the saveNewPlayer function to the PlayerForm Component */}
        { this.state.playerform ? <PlayerForm saveNewPlayer={this.saveNewPlayer}/> : ''}
        </div>
      </div>
    );
  }
}

export default TeamComponent;
