import React from 'react';
import './Page.css';
import { RiArrowLeftFill } from 'react-icons/ri';
import { APP } from '../Constants'


export default function PrivacyPage ({ goToPage }) {
  return (
    <div className="Page">
      <h1 className="title">Privacy policy</h1>
      <p>We don't track personal data, use cookies or user profiles.</p>
      <p>We collect some analytics events (eg: selected language, selected theme...) to help us analyze the use of Fintab.</p>
      <p>We save the user preferences eg (preferred languages, theme...) locally using "LocalStorage".</p>
      <p>You can reach out to us at: {APP.contactEmail}</p>
      <button onClick={() => goToPage('home')}><RiArrowLeftFill className="buttonIcon" /> Go Home</button>
    </div>

  )
}