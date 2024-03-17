import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card project-card">
      <div className="img-container">
        <img className="project-img" src={`../assets/images/${props.img}`} alt={props.title} />
      </div>
      <div className="content">
        <ul>
          <p>
            <strong>Title:</strong> {props.title}
          </p>
          <p>
            <strong>Repo:</strong> <a href={props.repo}>GitHub</a>
          </p>
          <p>
            <strong>Deployment:</strong> <a href={props.deployed}>Deployment Link</a> 
          </p>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;