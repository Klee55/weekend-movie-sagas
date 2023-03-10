import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // do this when image is clicked
    const imageClicked = (movie) => {
        console.log('image clicked');
        console.log(movie);
        console.log(movie.id);
        dispatch({ type: 'CLICK_MOVIE', payload: movie});
        history.push('/details');
        dispatch({ type: 'FETCH_GENRE', payload: movie.id});
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div className="single-movie" onClick={() => imageClicked(movie)} key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;