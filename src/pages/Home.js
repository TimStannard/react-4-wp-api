import heroImage from '../assets/hero.jpeg';

const Home = () => {
    return (
        <div id="home-container" className="page-container">
            <div className="section">
                <h2>Welcome to Dinosaur Central!</h2>
                <img id="dino-image" src={heroImage} alt="dinosaurs painting" />
            </div>
        </div>
    )
}

export default Home