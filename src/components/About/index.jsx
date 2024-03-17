import Container from '../Container';
import Row from '../Row'
import './style.css'

const About = () => {
    return (
        <>
        <Container>
            <Row>
                <h2 className="title">ABOUT ME</h2>
                <p className="col-lg-12">
                    Hi, I'm Suniel, aka Sunny. A FrontEnd web developer in the making. Abit about me, I'm 26, from Birmingham and I enjoy all things tech.
                    I have an MEng in Chemical Engineering, a subject that I found very interesting but not something I would like to do as a long term career.
                    Coding on the other hand, is something I do see myself doing long term. Currently I know a few languages, such as Java, C#, HTML and CSS.
                </p>
                <div className='download'>
                    <p className='cv-text'>
                        Want to know more about my professional work history? Take a look at my CV.
                    </p>
                    <a href="/assets/documents/SunielMudhar_CV.pdf" download="SunielMudhar_CV.pdf"><button type="button" class="btn btn-primary btn-download">Download CV</button></a>
                </div>
            </Row>
        </Container>
        </>
    );
}

export default About;