import { useState } from 'react'
import './styles.css'

function List({ contacts}) {
  const [filterText, setFilterText] = useState('')

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLocaleLowerCase())
    )
  })

  return (
    <div>
      <input className="input-container" placeholder='Filter Contact' value={filterText} 
      onChange={(e) => 
        setFilterText(e.target.value)} />
      <ul>
        { filtered.map((contact, i) => (
        <li key={i}>{contact.fullName}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
