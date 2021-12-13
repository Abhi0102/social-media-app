import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearAuthState, editUser } from '../actions/auth';

class Profile extends Component {
  constructor(props) {
    super(props);
    const { user } = this.props.auth;
    this.state = {
      name: user.name,
      password: '',
      confirmPassword: '',
      editMode: false,
    };
  }

  //   componentDidMount() {
  //     const { user } = this.props.auth;
  //     this.setState({
  //       name: user.name,
  //       password: '',
  //       confirmPassword: '',
  //       editMode: false,
  //     });
  //   }

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleChange = (fieldName, value) => {
    this.setState({
      [fieldName]: value,
    });
    if (fieldName === 'editMode') {
      this.props.dispatch(clearAuthState());
    }
  };

  handleSave = () => {
    const { name, password, confirmPassword } = this.state;
    const { user } = this.props.auth;
    this.props.dispatch(editUser(name, password, confirmPassword, user._id));
  };

  render() {
    const { user, error } = this.props.auth;
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
              onChange={(e) => this.handleChange('name', e.target.value)}
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
              onChange={(e) => this.handleChange('password', e.target.value)}
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
                this.handleChange('confirmPassword', e.target.value)
              }
              value={this.state.confirmPassword}
            />
          </div>
        )}

        {error && <div>{error}</div>}
        {error === false && <div>Success Change</div>}
        <div>
          {editMode ? (
            <button className="btn-save" onClick={this.handleSave}>
              Save
            </button>
          ) : (
            <button
              className="btn-edit"
              onClick={(e) => this.handleChange('editMode', true)}
            >
              Edit Profile
            </button>
          )}
          {editMode && (
            <button
              className="btn-back"
              onClick={(e) => this.handleChange('editMode', false)}
            >
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
