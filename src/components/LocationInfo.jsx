import React from 'react'

const LocationInfo = ({ location }) => {
  return (
    <article className='location'>
      <h2 className='location__h'>{location?.name}</h2>
      <ul className='location__list'>
        <li className='location__type'><span className='span__edit'>Type </span><span>{location?.type}</span></li>
        <li className='location__type'><span className='span__edit'>Dimension </span><span>{location?.dimension === '' ? 'unknown' : location?.dimension}</span></li>
        <li className='location__type'><span className='span__edit'>Population </span>{location?.residents.length}<span></span></li>
      </ul>
    </article>
  )
}

export default LocationInfo