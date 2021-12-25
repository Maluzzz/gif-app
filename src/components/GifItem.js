import React from 'react'
import PropTypes from 'prop-types'

export default function GifItem({ title, url }) {
    return (
        <>
            <div className="card-image animate__animated  animate__pulse">
                <img src={url} alt={title}></img>
                <p className='gif-title'>{title}</p>
            </div>
        </>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
