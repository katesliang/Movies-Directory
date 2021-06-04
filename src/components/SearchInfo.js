import React, { useState } from 'react';
import './SearchInfo.css';
import Movies from './Movies';
import MPagination from './Pagination';
import Details from './Details.js';

function SearchInfo() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [showMovies, setShowMovies] = useState(false);
    const [showPagination, setShowPagination] = useState(false);
    const [details, setDetails] = useState([]);
    const [showDetails, setShowDetails] = useState(false);

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
        fetchMyAPI();
        setShowMovies(true);
        setPage(pageNum);
        setShowDetails(false);
        setShowPagination(true);
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
            {showPagination ? <MPagination page={page} handleSubmit={handleSubmit}></MPagination> : <></>}
            {showMovies ? <Movies movies={movies} handleClick={handleClick}></Movies> : <></>}
            {showDetails ? <Details details={details}></Details> : <></>}
            {showPagination ? <MPagination page={page} handleSubmit={handleSubmit}></MPagination> : <></>}
        </div>
    )
}

export default SearchInfo;