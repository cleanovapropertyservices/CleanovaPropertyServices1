export default function PopRight({ show }) {
  return (
    <div className="popright-container">
      <span>Message us here:</span>
      <div className={`popright ${show ? "show" : "hide"}`}>
        <a href="https://wa.me/+64220455048 ">
          <img className="" src="/img/WhatAppGif.gif" />
        </a>
        <a href="https://m.me/ram.alz.3958">
          <img className="" src="/img/MessengerGif.gif" />
        </a>
      </div>
    </div>
  );
}
