import './Home.css';
import UncontrolledExample from '../../components/Carousel/Carousel';

function Home() {

    return(
        <div className='home-page'>
            {/* <h1>Home</h1>
            <p>¡Esta será la página del E-commerce de alimentos gourmet para animales mitológicos!</p> */}
            <UncontrolledExample />
            <h2>Categorías</h2>
        </div>
    )
}

export default Home;
