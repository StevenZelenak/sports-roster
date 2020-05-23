import React from 'react';
import './TeamComponent.scss';
import playersData from '../../helpers/data/playersData';
import authData from '../../helpers/data/authData';
import PlayerCards from '../PlayerCards/PlayerCards';

class TeamComponent extends React.Component {
  state = {
    players: [],
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

  render() {
    const makePlayers = this.state.players.map((player) => (
      <PlayerCards key={player.id} player={player} removePlayer={this.removePlayer}/>
    ));

    return (
      <div className="TeamComponent">
        <h1>Team SoloMid</h1>
        <div className="d-flex flex-wrap">
          {makePlayers}
        </div>
      </div>
    );
  }
}

export default TeamComponent;
