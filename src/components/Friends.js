import React from 'react';
import { Link } from 'react-router-dom';
// import {  } from '../helpers/favpng_avatar-user-profile-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

function Friends(props) {
  return (
    //`user/${props.friend._id}`}
    <Link to={`/user/${props.friend._id}`} className="friends-profile">
      <div className="friend-container">
        {/* <FontAwesomeIcon icon={faUserTie} /> &nbsp; */}
        <div className="img-continer">
          <img
            src="/favpng_avatar-user-profile-icon.png"
            alt="avatar"
            className="avatar-img"
          />
        </div>
        {/* <button onClick={() => console.log(props)}></button> */}
        {props.friend.name}
        {/* <h3>Friends</h3>
      </div>
      <div>
        <Link to="/user/61b457926938bd457a869ad4">userd</Link>
      </div> */}
      </div>
    </Link>
  );
}

export default Friends;
