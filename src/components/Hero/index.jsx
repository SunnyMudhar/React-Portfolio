import Container from '../Container';
import Row from '../Row';
import './style.css';

const Hero = (props) => {
    return (
        <header className="hero">
            <Container id="jumbotron">
                <Row>
                    {props.children}
                </Row>
            </Container>
        </header>
    );
}

export default Hero;