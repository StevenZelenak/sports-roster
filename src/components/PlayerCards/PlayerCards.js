import React from 'react';
import PropTypes from 'prop-types';
import playerShape from '../../helpers/propz/playerShape';

import './PlayerCards.scss';

class PlayerCards extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    removePlayer: PropTypes.func.isRequired,
    editAPlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, removePlayer } = this.props;
    removePlayer(player.id);
  }

  editPlayerEvent = (e) => {
    e.preventDefault();
    const { player, editAPlayer } = this.props;
    editAPlayer(player);
  }

  render() {
    const { player } = this.props;
    return (
      <div className=" PlayerCards col-3 my-2">
      <div id={player.id} className="card">
        <img className="card-img-top img-responsive" src={player.imageUrl} alt="Mushroom Card"/>
          <div className="card-body">
            <h5 className="card-title">{player.name}</h5>
            <p className="card-text">{player.position}</p>
            <button className="btn btn-danger" onClick={this.deletePlayerEvent}>X</button>
            <button className="btn btn-primary" onClick={this.editPlayerEvent} >Update Player</button>
          </div>
      </div>
    </div>

    );
  }
}

export default PlayerCards;
