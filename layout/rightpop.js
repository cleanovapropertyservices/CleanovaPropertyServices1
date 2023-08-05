import { Messanger, Whatsapp } from "../public/svg/social/IconSocial";

export default function PopRight({ show }) {
  return (
    <div className={`popright ${show ? 'show' : 'hide'}`}>
      <a>
        <Whatsapp />
      </a>
      <a>
        <Messanger />
      </a>
    </div>
  )
}