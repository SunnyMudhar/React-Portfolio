import "./style.css";

function ContactCard(props) {
  return (
    <div className="card contact-card">
      <div className="content">
        <img className="contact-img" src={`/src/assets/images/${props.img}`} alt={props.title} />
        <p>
          {props.title}
        </p>
        <p>
          <a href={props.link}>{props.link}</a>
        </p>
      </div>
    </div>
  );
}

export default ContactCard;