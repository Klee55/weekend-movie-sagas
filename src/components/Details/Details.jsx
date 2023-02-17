import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Details = () => {

    const oneMovie = useSelector(store => store.oneMovie);
    const genres = useSelector(store => store.genres);
    const history = useHistory();


    const handleClick = () => {
        history.push('/');
    }

    return (
        <div >
            <button onClick={() => handleClick()}>Back</button>
            <h3>{oneMovie.title}</h3>
            <section>
                <h4>Genres:</h4>
                {genres.map(genre => {
                    return (
                        <ul key={genre.id}>
                            <li key={genre.id}>
                                {genre.name}
                            </li>
                        </ul>
                    );
                })}
            </section>
            <h5>{oneMovie.description}</h5>
            <img src={oneMovie.poster} alt={oneMovie.title} />
        </div>
    );

}





export default Details;