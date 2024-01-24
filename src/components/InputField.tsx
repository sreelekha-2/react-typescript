import React from 'react';

interface props {
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void,
    todo:string
}

const InputField: React.FC<props> = ({ setTodo, handleAdd,todo }) => {

    return (

        <form onSubmit={e => {
            handleAdd(e)
        }}>
            <input className='input' type='text' value={todo} onChange={e => setTodo(e.target.value)} />
            <button type='submit' className='submit-btn'>Add</button>
        </form>

    )
}

export default InputField
