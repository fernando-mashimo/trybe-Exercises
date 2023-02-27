import React from 'react';
import { emails } from '../data/emails';
import { useState, useEffect } from 'react';
import Emails from './Emails';
import './readControl.css';
import { READ, UNREAD } from '../constants';
import readIcon from '../icons/read.svg';
import unreadIcon from '../icons/unread.svg';

export default function ReadControl() {
  const [emailsList, setEmailsList] = useState(emails);

  const setMessageStatus = (emailID, newStatus) => {
    const updatedEmailsList = emailsList
      .map((email) => {
      if (email.id === emailID) {
        return { ...email, status: newStatus };
      }
      return email;
      });

    setEmailsList(updatedEmailsList);
  };

  const markAllRead = () => {
    const allMarkedRead = emailsList.map((email) => ({ ...email, status: READ }));

    setEmailsList(allMarkedRead);
  };

  const markAllUnread = () => {
    const allMarkedUnread = emailsList.map((email) => ({ ...email, status: UNREAD }));

    setEmailsList(allMarkedUnread);
  };

  useEffect(() => {
    const allEmailRead = emailsList.every((email) => email.status === READ);

    if (allEmailRead) alert('Parabéns! Você leu todas suas mensagens!');
  }, [emailsList]);

  return (
    <div className="container">
      <div className="buttonContainer">
        <button
          type="button"
          onClick={ markAllRead }
        >
          Marcar todas como lidas
          <img src={ readIcon } alt=""/>
        </button>
        <button
          type="button"
          onClick={ markAllUnread }
        >
          Marcar todas como não lidas
          <img src={ unreadIcon } alt=""/>
        </button>
      </div>

      <div className="entriesContainer">
        <Emails
          emailsList={ emailsList }
          setMessageStatus={ setMessageStatus }
        />
      </div>

    </div>
  )
}
