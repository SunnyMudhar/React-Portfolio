import skills from '../../utils/skills.json';
import Container from '../Container';
import Row from '../Row';
import './style.css';

const Skills = () => {
    return (
        <>
        <h2 className = 'title'>SKILLS</h2>
        <Container>
            <Row>
            {skills.map((skill, id) => {
                return <div key={ id } className = 'col-lg-4 col-md-6 col-sm-12 skill-container'>
                    <div>
                        <img className = 'skill-img' src = { skill.img } alt = { skill.title } />
                    </div>
                    <p className='skill-title'>{ skill.title }</p>
                </div>
            })}
            </Row>
        </Container>
        </>
    );
}

export default Skills;