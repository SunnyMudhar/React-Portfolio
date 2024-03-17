import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card project-card">
      <div className="img-container">
        <img className="project-img" src={`./src/assets/images/${props.img}`} alt={props.title} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Repo:</strong> <a href={props.repo}>GitHub</a>
          </li>
          <li>
            <strong>Deployment:</strong> <a href={props.deployed}>Deployment Link</a> 
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;