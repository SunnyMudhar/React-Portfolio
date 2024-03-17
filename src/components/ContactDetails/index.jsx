import contactDetails from '../../utils/contactdetails.json';
import ContactCard from '../ContactCard';
import Container from '../Container';
import Row from '../Row';
import './style.css';

const ContactDetails = () => {
    return (
        <Container>
            <Row>
                <h2 className="title">CONTACT INFORMATION</h2>
                {contactDetails.map((contact, id) => (
                    <div key={ id } className='col-lg-4 col-md-12 col-sm-12 card-container'>
                        <ContactCard
                            title={contact.title}
                            img={contact.img}
                            link={contact.link}
                        />
                    </div>
                ))}
            </Row>
        </Container>
    );
}

export default ContactDetails;