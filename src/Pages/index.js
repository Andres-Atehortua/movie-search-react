import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import MoviesList from '../Components/MoviesList'
import Title from '../Components/Title'
import SearchForm from '../Components/SearchForm'
import Container from 'react-bootstrap/Container'

export default class Index extends Component {


    render() {
        return (
            <Container>
                <Title>Search movies</Title>
                <SearchForm setResults={this.props.setResults} />
                <p style={{ textAlign: 'center', color: 'rgb(62, 169, 191)' }}><small>You can search Movies, Series or Videogames</small></p>
                {this.props.movies ?
                    <Row>
                        <MoviesList movies={this.props.movies} />
                    </Row>
                    :
                    <p className='text-center' style={{ color: 'red' }}>
                        Sorry! Results not found
              <span role="img" aria-label="sheep">😓</span>
                    </p>}
            </Container>
        )
    }
}