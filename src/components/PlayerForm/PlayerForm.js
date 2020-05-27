import React from 'react';

import PropTypes from 'prop-types';

import './PlayerForm.scss';
import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    saveNewPlayer: PropTypes.func.isRequired,
  }

  state = {
    imageUrl: '',
    playerName: '',
    playerPosition: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ playerImage: e.target.value });
  }

  savePlayer = (e) => {
    e.preventDefault();
    // making a player object to push to firebase
    const newPlayer = {
      imageUrl: this.state.playerImage,
      position: this.state.playerPosition,
      name: this.state.playerName,
      uid: authData.getUid(),
    };
    // calling saveNewPlayer passing the player Object in
    this.props.saveNewPlayer(newPlayer);
  }

  render() {
    return (
      <div className="PlayerForm">
        <h1>New Player Form</h1>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="player-name">Name</label>
            <input
              type="text"
              className="form-control"
              id="player-name"
              placeholder="Aaron"
              value={this.state.playerName}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="player-position">Position</label>
            <input
              type="text"
              className="form-control"
              id="player-position"
              placeholder="Top Laner"
              value={this.state.playerPosition}
              onChange={this.positionChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="player-image">Image</label>
            <input
              type="text"
              className="form-control"
              id="player-image"
              placeholder="Image Url"
              value={this.state.playerImage}
              onChange={this.imageChange}
            />
          </div>
          <button className="btn btn-success" onClick={this.savePlayer}>Save Player</button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
