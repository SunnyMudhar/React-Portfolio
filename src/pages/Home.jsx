import Avatar from '../assets/images/avatar.png';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

//have a counter for the number of times the page is visited

const Home = () => {
    return (
        <div>
            <Hero>
                <div className="col-lg-12">
                    <img src= {Avatar} alt="avatar" />
                    <h1>HI! I'M SUNNY!</h1>
                    <h4>Welcome to my Frontend Portfolio</h4>
                </div>
            </Hero>
            <About />
            <Skills />
            <Footer />
        </div>
    )
}

export default Home;