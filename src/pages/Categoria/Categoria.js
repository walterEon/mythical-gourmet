import './Categoria.css';
import { useParams } from 'react-router-dom';

function Categoria() {

    const { id } = useParams();

    return(
        <div className='categoria-page'>
            <h1>{id}</h1>
        </div>
    )
}

export default Categoria;