import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import MovieCard from './Moviecard';

//6f489984

const apiurl = 'http://www.omdbapi.com?apikey=6f489984';

const App = () => {

    const [movies, setmovies] = useState([]);
    const [search,setsearch]= useState('');

    const searchmovies = async (title) => {
        const response = await fetch(`${apiurl}&s=${title}`);
        const data = await response.json();

        setmovies(data.Search);
    }


    useEffect(() => {
        searchmovies('Batman');
    }, []);




    return (
        <div className="app">
            <h1 className="top">MovieBar</h1>


            <div className="search">
                <input placeholder="Search for Movies" value={search} onChange={(e) => setsearch(e.target.value)}>

                </input>

                <button className="btn" onClick={()=>searchmovies(search)}><span style={{fontFamily:"cursive"}}>Search</span></button>


</div>
                {  
                    movies?.length > 0 ? (

                        <div className="container">


                            {movies.map((movie) =>
                            (
                                <MovieCard movie={movie} />
                            ))}



                        </div>

                    ) :
                        (
                            <div className="empty">
                                <h2>No Movies Found!</h2>
                            </div>
                        )

                }

            </div>

        
    );
};

export default App;
