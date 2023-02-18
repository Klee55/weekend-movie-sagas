import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Details.css';

const Details = () => {

    const oneMovie = useSelector(store => store.oneMovie);
    const genres = useSelector(store => store.genres);
    const history = useHistory();


    const handleClick = () => {
        history.push('/');
    }

    return (
        <main>
            <button onClick={() => handleClick()}>Back</button>
            <section className="details">
                <h3>{oneMovie.title}</h3>
                {/* <section className="genres"> */}
                    <h4>Genres:</h4>
                    {genres.map(genre => {
                        return (
                            <ul key={genre.name}>
                                <li>
                                    {genre.name}
                                </li>
                            </ul>
                        );
                    })}
                {/* </section> */}
                <img src={oneMovie.poster} alt={oneMovie.title} />
                <h5>{oneMovie.description}</h5>
            </section>
        </main>
    );

}





export default Details;