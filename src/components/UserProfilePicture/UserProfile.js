import React from 'react';
import './UserProfile.css';

function IconWithOnline({ userId, userData }) {
  const numIcons = 10;
  const randomImageIds = Array.from({ length: numIcons }, () => Math.floor(Math.random() * 10) + 1);

  return (
    <div className='mainDivIcon'>
      <div className='circularImg'>
        <img
          className="randomIcon"
          src={`https://source.unsplash.com/50x50/?portrait/${randomImageIds}`}
          alt=""
        />
      </div>
      {userData?.map(item => {
        if (item.id === userId) {
          if (item.available === false) {
            return <div className='actively1' style={{ backgroundColor: 'grey' }} />;
          } else {
            return <div className='actively2' style={{ backgroundColor: 'green' }} />;
          }
        }
        return null;
      })}
    </div>
  );
}

export default IconWithOnline;
