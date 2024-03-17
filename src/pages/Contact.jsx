import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ContactDetails from '../components/ContactDetails';

const Contact = () => {
    return (
        <>
            <Hero>
                <div className="col-lg-12">
                    <h1>CONTACT ME</h1>
                    <h4>Please feel free to contact me using the following!</h4>
                </div>
            </Hero>
                <div className='contact-details'>
                <ContactDetails />
            </div>
            <Footer />
        </>
    )
}

export default Contact;