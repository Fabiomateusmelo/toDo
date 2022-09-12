import { ITask } from '../../App'
import { Task } from '../Task'
import styles from './tasks.module.css'

interface Props {
  tasks: ITask[];
  onDelete: (taskId: string) => void
}

export function Tasks({ tasks, onDelete }: Props) {
  const tasksQuantidade = tasks.length;
  const tasksCompletas = tasks.filter((task) => task.completed).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantidade}</span>
        </div>

        <div>
          <p className={styles.textCor}>Concluídas</p>
          <span>{tasksCompletas} de {tasksQuantidade}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  )
}