import styles from './task.module.css'
import { TbTrash, TbEdit } from 'react-icons/tb'
import { ITask } from '../../App'
import { BsFillCheckCircleFill } from 'react-icons/bs'

interface Props {
  task: ITask;
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function Task({task, onDelete, onComplete}: Props) {

  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {task.completed ? <BsFillCheckCircleFill/> : <div />}
      </button>
      <p className={task.completed ? styles.textCompleted : ""}>
        {task.title}
      </p>
      <button className={styles.delete}>
        <TbEdit size={20} />
      </button>
      <button className={styles.delete} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}

