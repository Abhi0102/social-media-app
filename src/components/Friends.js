import React from 'react';
import { Link } from 'react-router-dom';

function Friends(props) {
  return (
    <div>
      <div className="friends-heading">
        <h3>Friends</h3>
      </div>
      <div>
        <Link to="/user/61b457926938bd457a869ad4">userd</Link>
      </div>
    </div>
  );
}

export default Friends;
