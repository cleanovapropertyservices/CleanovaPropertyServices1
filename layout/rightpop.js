export default function PopRight({ show }) {
  return (
    <div className={`popright ${show ? 'show' : 'hide'}`}>
      <a>
        <img src="/img/WhatAppGif.gif" />
      </a>
      <a>
        <img src="/img/MessengerGif.gif" />
      </a>
    </div>
  )
}