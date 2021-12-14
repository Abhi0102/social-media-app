import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserById } from '../actions/profile';
function UserProfile(props) {
  const params = useParams();
  const { user } = props.profile;
  console.log(user);
  useEffect(() => {
    if (params.userId) {
      props.dispatch(getUserById(params.userId));
    }
  }, []);

  if (props.profile.inProgress) {
    return <h1>Loading..!!</h1>;
  } else {
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
          <div>{user.name}</div>
        </div>

        {/* {error && <div>Errr</div>} */}
        {/* {error === false && <div>Success Change</div>} */}
        <div>
          {false ? (
            <button className="btn-save">Save</button>
          ) : (
            <button
              className="btn-edit"
              //   onClick={(e) => this.handleChange('editMode', true)}
            >
              Add Friend
            </button>
          )}
          {false && (
            <button
              className="btn-back"
              //   onClick={(e) => this.handleChange('editMode', false)}
            >
              Back
            </button>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ profile }) {
  return {
    profile,
  };
}
export default connect(mapStateToProps)(UserProfile);
