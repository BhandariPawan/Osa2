import React from 'react'

const Number = ({person, onDelete}) => (
    <li>{person.name} {person.number} <button onClick={() => onDelete(person)}>delete</button></li>
  )

const Persons = ({persons, filter, onDelete}) => {
    const caseinsensitiveFilter = (person) => (
      person.name.toUpperCase().includes(
        filter.toUpperCase()
      )
    )
    return (
      <ul>
        {persons
          .filter(caseinsensitiveFilter)
          .map(person => <Number key={person.name} person={person} onDelete={onDelete}/>)}
      </ul>
    )
  }

export default Persons