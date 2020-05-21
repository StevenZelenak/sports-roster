import React from 'react';
import './PlayerCards.scss';

class PlayerCards extends React.Component {
  render() {
    const { player } = this.props;
    return (
      <div className=" PlayerCards col-3 my-2">
      <div id={player.id} className="card">
        <img className="card-img-top img-responsive" src={player.imageUrl} alt="Mushroom Card"/>
          <div className="card-body">
            <h5 className="card-title">{player.name}</h5>
            <p className="card-text">{player.position}</p>
          </div>
      </div>
    </div>

    );
  }
}

export default PlayerCards;
