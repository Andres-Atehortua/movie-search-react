import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MovieCard from './MovieCard'


export default class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array
    }


    render() {
        const { movies } = this.props
        return (
            movies.map(elm => <MovieCard key={elm.imdbID} title={elm.Title} year={elm.Year} poster={elm.Poster} id={elm.imdbID} />)

        )
    }

}