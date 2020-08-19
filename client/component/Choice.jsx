import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import { Row, Col } from "react-bootstrap";

function Choice({ open, sessUser, sessDog, dogViews, displayDogs, getFriends, index, setIndex, dogDisplayInfo, setDogDisplayInfo }) {

  const [ dogDisplay, setDogDisplay ] = useState('');

  useEffect(() => {
    setDogDisplay(dogViews[0]);
  }, [dogViews]);

  const like = (result) => {
    // axios.post('/like', {
    //   result, // boolean true/false
    //   dogOwnerId: allDogs[index].id_user,
    //   userId: 'placeholder for current logged in User ID'
    // })
    // .then((response) => {
    //   // response should have bool if user was a match (if exists an entry in likes table that shows the dogOwnerID liked current user ID)
    // })
    setIndex(index + 1);
    if (index < dogViews.length) {
      setDogDisplay(() => dogViews[index]);
      setDogDisplayInfo(displayDogs[index]);
    } else {
      setDogDisplay(<div id='choice-box'><div id='alt'>Looks like you've made it through all the dogs in you're area. Please check back later.</div></div>);
    }
  };

  // const addFriend = () => {
  //   axios.post('/friends',  {
  //     id_dog: sessDog.id,
  //     id_friend: dogDisplayInfo.id,
  //     bool_friend: 0
  //   })
  //   .then(() => dislike())
  //   .then(() => console.log('this friend was added'))
  //   .catch((err) => console.error(err, 'we couldn\'t add this friend'));
  // };

  return (
    <div>
      <div>
        <Row>
          <button id='settings' onClick={open}>Menu</button>
        </Row>
        <Row>
          <Col>
            {dogDisplay}
          </Col>
          <Col>
            <Link to={`/dogprofile/${dogDisplayInfo.id}`} id='view' onClick={() => getFriends(dogDisplayInfo.id)}>View Profile</Link>
          </Col>
        </Row>
        <Row id='select'>
          <Col>
            <button id='no' onClick={() => like(false)}>No</button>
          </Col>
          <Col>
            <button id='yes' onClick={() => like(true)}>Yes</button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Choice;
 