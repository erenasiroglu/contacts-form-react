import {useState} from 'react'

function Form({addContact, contacts}) {
  const [form, setForm] = useState({ fullName: '', phoneNumber: ''})

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if ( form.fullName === '' || form.phoneNumber === ''){
      return false
    }
    addContact([...contacts, form])
    setForm ({fullName:'', phoneNumber:''})
  }
  return (
    <form onSubmit={onSubmit}>
      <div>
      <input name="fullName" placeholder='Name' type="email" value={form.fullName} onChange={onChangeInput}></input> 
      </div>
      <div>
      <input name="phoneNumber" placeholder='Phone Number' value={form.phoneNumber} type="password" onChange={onChangeInput}></input>
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  )
}

export default Form
