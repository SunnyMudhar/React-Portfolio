import Avatar from '../../assets/images/avatar.png';
import './style.css';

const Hero = () => {
    return (
        <header className="hero">
            <div className="container" id="jumbotron">
                <div className="row">
                    <div className="col-lg-12">
                        <img src= {Avatar} alt="avatar" />
                        <h1>HI! I'M SUNNY!</h1>
                        <p>Welcome to my Frontend Portfolio</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero;