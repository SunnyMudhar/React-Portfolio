import projects from '../../utils/projects.json';
import ProjectCard from '../ProjectCard';
import Container from '../Container';
import Row from '../Row';

const ProjectsGallery = () => {
    return (
        <Container>
            <Row>
                {projects.map((project, id) => (
                    <div key={ id } className='col-lg-4 col-md-6 col-sm-12'>
                        <ProjectCard
                            title={project.title}
                            img={project.img}
                            repo={project.repo}
                            deployed={project.deployed}
                        />
                    </div>
                ))}
            </Row>
        </Container>
    );
}

export default ProjectsGallery;