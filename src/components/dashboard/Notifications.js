import React from 'react';
import dayjs from 'dayjs';

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {
              notifications && notifications.map((n)=>{
                return (
                  <li key={n.id}>
                    <span className="pink-text">{n.user} </span>
                    <span>{n.content}</span>
                    <div className="grey-text note-date">
                      {dayjs(n.time.toDate()).format('DD/MM/YYYY')}
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications;