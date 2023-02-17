import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Details = () => {

    const oneMovie = useSelector(store => store.oneMovie);
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    return (
        <div >
            <button onClick={() => handleClick()}>Back</button>
            <h3>{oneMovie.title}</h3>
            <h2>{oneMovie.description}</h2>
            <img src={oneMovie.poster} alt={oneMovie.title} />
        </div>
    );

}





export default Details;