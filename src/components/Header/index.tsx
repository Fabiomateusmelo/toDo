import rocket from '../../assets/rocket.svg'
import styles from './header.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'

export function Header() {
  return (
    <header className={styles.header}>
      <img className='logo' src={rocket} />
      <h1 className='logo'>toDo</h1>
      <form className={styles.newTaskForm}>
        <input
          placeholder='Adicione uma nova tarefa'/>
        <button>Criar<AiOutlinePlusCircle size={22}/></button>
      </form>
    </header>
  )
}