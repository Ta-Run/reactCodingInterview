import React, { useState } from 'react'

function Todo() {
  const [inputValue, setInputValue] = useState('')
  const [data, setData] = useState([])

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, inputValue]);
    setInputValue('');
  }
  const handleEdit = (todos) => {
    setInputValue(todos);
    const updatedData = data.filter((item) => item !== todos);
    setData(updatedData);
  };
  const handleDelete = (todos) => {
    const deleteValue = data.filter((item) => {
      return item !== todos
    })
    setData(deleteValue)
  }

  return (
    <div >
      Todo
      <form onSubmit={(e) =>
        handleSubmit(e)
      }>
        <input type='text'
        value={inputValue}
        onChange={(e) =>
          handleInputValue(e)
        } />
        < input type='submit' />
        <ul>
          {data &&
            data.map((todos, index) => {
              return (
                <li key={index}>
                  {todos}
                  <button onClick={()=>handleDelete(todos)}> Delete </button>
                  <button onClick={()=>handleEdit(todos)}>Edit</button>
                </li>
              )
            })
          }
        </ul>
      </form>
    </div>
  )
}

export default Todo