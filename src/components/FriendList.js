// import React, { useEffect, useState } from 'react';
import { Friends } from '.';
// import { connect } from 'react-redux';
// import { fetchUserFriends } from '../actions/friends';

function FriendList(props) {
  //   const friends = props.dispatch(fetchUserFriends());
  //   console.log('In Friend List', friends);
  return (
    <div>
      <div className="friends-heading">
        <h3>Friends</h3>
      </div>

      {props.friends && props.friends.length === 0 && (
        <div>No Friends Found !</div>
      )}

      {props.friends &&
        props.friends.map((friend) => {
          return <Friends friend={friend.to_user} key={friend._id} />;
        })}
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     friends: state.friends,
//   };
// }

export default FriendList;
