import React from 'react'

const Filter = ({filter, onFilterChange}) => {
    return (
      <p>
        Filter shown with <input value={filter} onChange={onFilterChange}/>
      </p>
    )
  }

export default Filter