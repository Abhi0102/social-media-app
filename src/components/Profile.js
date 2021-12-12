import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  constructor(props) {
    super(props);
    const { user } = props.auth;
    console.log(props.auth);
    this.state = {
      name: user.name,
      password: '',
      confirmPassword: '',
      editMode: false,
    };
  }

  handleEditClick = () => {
    this.setState({
      ...this.state,
      editMode: true,
    });
  };

  handleBackClick = () => {
    this.setState({
      ...this.state,
      editMode: false,
    });
  };

  render() {
    const { user } = this.props.auth;
    const { editMode } = this.state;
    return (
      <div className="profile-container">
        <div>
          <img src="" alt="profile-img"></img>
        </div>
        <div className="field">
          <div>Email</div>
          <div>{user.email}</div>
        </div>
        <div className="field">
          <div>Name</div>
          {editMode ? (
            <input
              type="text"
              onChange={(e) => this.handleInputChange('name', e.target.value)}
              value={this.state.name}
            />
          ) : (
            <div>{user.name}</div>
          )}
        </div>

        {editMode && (
          <div className="field">
            <div>New Password</div>
            <input
              type="password"
              onChange={(e) =>
                this.handleInputChange('password', e.target.value)
              }
              value={this.state.password}
            />
          </div>
        )}

        {editMode && (
          <div className="field">
            <div>Confirm New Password</div>
            <input
              type="password"
              onChange={(e) =>
                this.handleInputChange('confirmPassword', e.target.value)
              }
              value={this.state.confirmPassword}
            />
          </div>
        )}

        <div>
          {editMode ? (
            <button className="btn-save">Save</button>
          ) : (
            <button class="btn-edit" onClick={this.handleEditClick}>
              Edit Profile
            </button>
          )}
          {editMode && (
            <button className="btn-back" onClick={this.handleBackClick}>
              Back
            </button>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Profile);
