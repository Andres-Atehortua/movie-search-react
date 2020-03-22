import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
    <div className='text-center' style={{ marginTop: '100px' }} >
        <h1>404!</h1>
        <h2>This page doesn't exist</h2>
        <Link to='/'>Go back to search</Link>
    </div>
)

export default NotFound