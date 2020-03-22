import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const API_KEY = '7961c1d2'

export default class Detail extends Component {
    static propTypes = {
        id: PropTypes.string
    }
    state = { movie: {} }

    _fetchMovie = (id) => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => this.setState({ movie }))
            .catch(err => console.log(err))
    }

    componentDidMount = () => this._fetchMovie(this.props.match.params.id)



    render() {
        console.log(this.state.movie)

        const { Title, Released, Runtime, Genre, Director, Actors, Plot, Poster, imdbRating, Type } = this.state.movie

        return (
            <Container>
                <h1 style={{ padding: '20px', textDecoration: 'underline' }} className='text-center'>{Title}</h1>
                <Row style={{ padding: '30px' }}>
                    <Col md={5} sm={12} className='text-center'>
                        <img className='align-self-center' style={{ width: '70%', borderRadius: '10px', height: '70vh' }} src={Poster} alt={Title} />
                    </Col>
                    <Col md={7} sm={12}>
                        <div style={{ backgroundColor: 'rgba(222, 222, 222, 0.59)', marginTop: '30px', padding: '20px', width: '100%' }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <p><span style={{ margin: '0 10px' }} className="badge badge-secondary">{Genre}</span></p>
                                <p><span style={{ margin: '0 10px' }} className="badge badge-secondary">{Released}</span></p>
                                <p><span style={{ margin: '0 10px' }} className="badge badge-secondary">{Type}</span></p>
                                <p className='text-right'><strong></strong> <span className="badge badge-warning"><FontAwesomeIcon icon={faStar} color='black' /> {imdbRating}</span></p>
                            </div>
                            <h4>Director</h4>

                            <p>{Director}</p>
                            <h4>Duration</h4>
                            <p> {Runtime}</p>
                            <p> {Actors}</p>
                            <p >{Plot}</p>
                            <div className="text-center">
                                <Link to='/'><Button variant='info' className='text-center'>Back to search</Button></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    }
}