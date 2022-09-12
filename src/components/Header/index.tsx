import rocket from '../../assets/rocket.svg'
import styles from './header.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState('')
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    onAddTask(title)
    setTitle('')
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  return (
    <header className={styles.header}>
      <img className='logo' src={rocket} />
      <h1 className='logo'>toDo</h1>
      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          placeholder='Adicione uma nova tarefa' onChange={onChangeTitle} value={title}/>
        <button>Criar<AiOutlinePlusCircle size={22}/></button>
      </form>
    </header>
  )
}