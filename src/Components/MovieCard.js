import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

export default class MovieCard extends Component {
    static propTypes = {
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string
    }



    render() {
        const { id, title, year, poster } = this.props
        return (
            <Col lg={3} md={4} sm={6}  >
                <Link to={`${process.env.PUBLIC_URL}/detail/${id}`}>
                    <Card style={{ marginTop: '50px' }} >
                        <Card.Img style={{ width: '100%' }} variant="top" src={poster} alt={title} />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '1em' }}>{title}</Card.Title>
                            <Card.Text>
                                {year}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        )
    }
}

