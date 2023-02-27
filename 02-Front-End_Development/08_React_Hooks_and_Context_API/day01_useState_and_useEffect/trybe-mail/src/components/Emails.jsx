import React from 'react';
import { READ, UNREAD } from '../constants';
import readIcon from '../icons/read.svg';
import unreadIcon from '../icons/unread.svg';
import './readControl.css';

export default function Emails({ emailsList, setMessageStatus }) {
  return (
    <div>
      <ul>
      {
        emailsList.map((email) => {
          const messageClass = email.status === READ
          ? 'read'
          : 'unread';

          return (
            <li key={ email.id } className="email">
              <span className={ messageClass }>{ email.title }</span>
              <button
                type="button"
                className="btn-emailRead"
                onClick={ () => setMessageStatus(email.id, READ)}
              >
                Marcar como lida
                <img src={ readIcon } alt=""/>
              </button>
              <button
                type="button"
                className="btn-emailUnread"
                onClick={ () => setMessageStatus(email.id, UNREAD)}
              >
                Não Lida
                <img src={ unreadIcon } alt=""/>
              </button>
            </li>
          );
        })
      }
      </ul>
    </div>
  )
}
