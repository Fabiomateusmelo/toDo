import styles from './task.module.css'
import { TbTrash, TbEdit } from 'react-icons/tb'
import { ITask } from '../../App'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { EditText, EditTextarea } from 'react-edit-text';
import { Tasks } from '../Tasks';

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
      <EditText
              defaultValue={(task.title)}
              style={{fontSize: '16px', backgroundColor: "#262626", color:'#f2f2f2', border:'0', borderRadius:'0.2rem', minWidth:'300px'}}
            />
      </p>
      <button className={styles.delete} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}

