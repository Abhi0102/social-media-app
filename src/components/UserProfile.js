import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserById } from '../actions/profile';
import { APIUrls } from '../helpers/url';
import { getAuthToken } from '../helpers/utils';
import { addFriend, removeFriend } from '../actions/friends';

function UserProfile(props) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const params = useParams();
  const { user } = props.profile;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${getAuthToken()}`,
    },
  };
  console.log(user);
  const index = props.friends
    .map((friend) => friend.to_user._id)
    .indexOf(params.userId);

  useEffect(() => {
    if (params.userId) {
      props.dispatch(getUserById(params.userId));
    }
  }, [params.userId]);

  if (props.profile.inProgress) {
    return <h1>Loading..!!</h1>;
  } else {
    async function handleFriendShip(e) {
      let url;
      if (e.target.value === 'addFriend') {
        url = APIUrls.addFriend(params.userId);
        const response = await fetch(url, options);
        const data = await response.json();
        if (data.success) {
          setSuccess(true);
          setSuccessMsg('Added Friend Successfully');
          props.dispatch(addFriend(data.data.friendship));
        } else {
          setSuccess(false);

          setError(data.message);
        }
      } else {
        url = APIUrls.removeFriend(params.userId);
        const response = await fetch(url, options);
        const data = await response.json();
        if (data.success) {
          setSuccess(true);

          setSuccessMsg('Friend Removed Successfully');
          props.dispatch(removeFriend(params.userId));
        } else {
          setSuccess(false);
          setError(data.message);
        }
      }
    }

    return (
      <div className="profile-container">
        <div className="profile-img-container">
          <img
            src="/favpng_avatar-user-profile-icon.png"
            className="avatar-img"
            alt="profile-img"
          ></img>
        </div>
        <div className="field">
          <div>Email</div>
          <div>{user.email}</div>
        </div>
        <div className="field">
          <div>Name</div>
          <div>{user.name}</div>
        </div>

        {success && <div>{successMsg} </div>}
        {error && <div>{error}</div>}

        {index !== -1 ? (
          <button
            className="btn-edit"
            value="removeFriend"
            onClick={(e) => handleFriendShip(e)}
            //   onClick={(e) => this.handleChange('editMode', true)}
          >
            Un-Friend
          </button>
        ) : (
          <button
            className="btn-edit"
            value="addFriend"
            onClick={(e) => handleFriendShip(e)}
          >
            Add Friend
          </button>
        )}
      </div>
    );
  }
}

function mapStateToProps({ profile, friends }) {
  return {
    profile,
    friends,
  };
}
export default connect(mapStateToProps)(UserProfile);
