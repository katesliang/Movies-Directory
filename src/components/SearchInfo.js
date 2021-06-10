import React, { useState } from 'react';
import './SearchInfo.css';
import Movies from './Movies';
import Pages from './Pagination';
import Details from './Details.js';

function SearchInfo() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(0);
    const [showMovies, setShowMovies] = useState(false);
    const [showPagination, setShowPagination] = useState(false);
    const [details, setDetails] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [showBack, setShowBack] = useState(false);

    function handleBack(){
        setShowDetails(false);
        setShowPagination(true);
        setShowMovies(true);
        setShowBack(false);
    }

    function handleClick(e, movieID) {
        e.preventDefault()
        async function fetchMyAPI() {
            const searchParam = encodeURIComponent(movieID);
            const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${searchParam}&r=json`;
            console.log(apiUrl);
            let response = await fetch(apiUrl);
            response = await response.json();
            console.log([response]);
            setDetails([response]);
        }
        fetchMyAPI();
        setShowMovies(false);
        setShowDetails(true);
        setShowBack(true);
        setShowPagination(false);
    }

    function handleSubmit(e, pageNum) {
        e.preventDefault();
        async function fetchMyAPI() {
            const searchParam = encodeURIComponent(query);
            const pageParam = encodeURIComponent(pageNum);
            const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&type=movie&s=${searchParam}&page=${pageParam}&r=json`;
            console.log(apiUrl);
            let response = await fetch(apiUrl);
            response = await response.json(); 
            console.log(response.Search);
            setMovies(response.Search);
        }
        if(pageNum === 0 && query !== ''){
            pageNum = 1;
        }
        if(query !== ''){
            fetchMyAPI();
            setShowMovies(true);
            setPage(pageNum);
            setShowDetails(false);
            setShowPagination(true);
        }
    }

    return (
        <div className="searchInfo">
            <form id="search" onSubmit={(e) => (handleSubmit(e, page))}>
                <label htmlFor="queryInput">Search Movie Name:</label>
                <input
                    id="queryInput"
                    value={query}
                    type="text"
                    onChange={e => setQuery(e.target.value)} />
                <button className="search">Submit</button>
            </form>
            {showMovies ? <p id="instructions"> Click a movie to view more details!</p> : <></>}
            {showPagination ? <Pages page={page} response={movies} handleSubmit={handleSubmit}></Pages> : <></>}
            {showMovies ? <Movies movies={movies} handleClick={handleClick}></Movies> : <></>}
            {showBack ? <button onClick ={handleBack}>Back to Results</button> :<></>} 
            {showDetails ? <Details details={details}></Details> : <></>}
            {showPagination ? <Pages page={page} response={movies} handleSubmit={handleSubmit}></Pages> : <></>}
        </div>
    )
}

export default SearchInfo;