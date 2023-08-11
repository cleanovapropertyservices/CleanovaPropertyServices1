export default function PopRight({ show }) {
  return (
    <div className="popright-container">
      <span>Chat Now!</span>
      <div className={`popright ${show ? "show" : "hide"}`}>
        <a href="https://wa.me/+64220455048 ">
          <img className="" src="/img/WhatAppGif.gif" />
        </a>
        <a href="https://m.me/cleaningco.site">
          <img className="" src="/img/MessengerGif.gif" />
        </a>
      </div>
    </div>
  );
}
