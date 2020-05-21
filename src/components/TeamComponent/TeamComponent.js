import React from 'react';
import './TeamComponent.scss';
import playersData from '../../helpers/data/playersData';
import authData from '../../helpers/data/authData';
import PlayerCards from '../PlayerCards/PlayerCards';

class TeamComponent extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    playersData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('could not get players', err));
  }

  render() {
    const makePlayers = this.state.players.map((player) => (
      <PlayerCards key={player.id} player={player}/>
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
