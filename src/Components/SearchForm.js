import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const API_KEY = '7961c1d2'

export default class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.inputMovie}`)
            .then(res => res.json())
            .then(data => this.props.setResults(data.Search))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Form style={{ display: 'flex', justifyContent: 'center' }} onSubmit={this.handleSubmit}>
                <Form.Control style={{ width: '35%' }} name='inputMovie' type="text" placeholder="Try something..." value={this.state.inputMovie} onChange={this._handleChange} />
                <Button type='submit' variant="light"><FontAwesomeIcon icon={faSearch} color='blue' /></Button>

            </Form>

        )
    }
}

