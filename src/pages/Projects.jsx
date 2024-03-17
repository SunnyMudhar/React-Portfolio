import Hero from '../components/Hero';
import ProjectsGallery from '../components/ProjectsGallery';
import Footer from '../components/Footer';


const Projects = () => {
    return (
        <>
        <Hero>
            <div className="col-lg-12">
                <h1>PROJECTS</h1>
                <h4>Please find below a list of my latest Projects!</h4>
            </div>
        </Hero>
        <div className='projects'>
            <ProjectsGallery />
        </div>
        <Footer />
        </>
    )
}

export default Projects;