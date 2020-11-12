import React from 'react';
import { Fade } from 'react-bootstrap';

import './styles.css';

const Profile = (props) => {
  return (
    <>
      <Fade appear={true} in={true} timeout={600}>
        <article className="profile">
          <div className="mb-3" style={{ maxWidth: '100%' }}>
            <div className="text-center">
              <img src={`${process.env.PUBLIC_URL}/teachers/${props.profile}`} alt={props.name} />
            </div>
          </div>
        </article>
      </Fade>
    </>
  );
};

export default Profile;
