import Hero from '../components/Hero'

//have a counter for the number of times the page is visited

const Home = () => {
    return (
        <div className="">
            <Hero></Hero>
            <h2>ABOUT ME</h2>
            <p>
                Hi, I'm Suniel, aka Sunny. A FrontEnd web developer in the making. Abit about me, I'm 26, from Birmingham and I enjoy all things tech.
                I have an MEng in Chemical Engineering, a subject that I found very interesting but not something I would like to do as a long term career.
                Coding on the other hand, is something I do see myself doing long term. Currently I know a few languages, such as Java, C#, HTML and CSS.
            </p>
        </div>
    )
}

export default Home;