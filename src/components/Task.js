import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
    const [task_onHover, task_setOnHover] = useState(false);
    const [exit_onHover, exit_setOnHover] = useState(false);

    const task_onMouseIn = () => {
        task_setOnHover(true);
    }
    const task_onMouseOut = () => {
        task_setOnHover(false);
    }

    const exit_onMouseIn = () => {
        exit_setOnHover(true);
    }
    const exit_onMouseOut = () => {
        exit_setOnHover(false);
    }

    const task_getReminder = (reminder) => {
        if (reminder) {
            return 'reminder'
        }
        return '';
    }
    const exit_getHover = (reminder) => {
        if (task_onHover) {
            if (exit_onHover) {
                return 'hover'
            }
            return 'task-hover'
        }
        if (reminder) {
            return 'reminder'
        }
        return ''
    }

    return (
        <>
            <div className={`task noselect ${task_getReminder(task.reminder)}`} onMouseOver={task_onMouseIn} onMouseOut={task_onMouseOut} onDoubleClick={() => onToggle(task.id)}>
                <h3 title={task.text}>
                    {task.text}
                </h3>
                <p className={task.day ? 'day show' : 'day hide'}>{task.day ? `${task.day}` : 'None'}</p>
                <h3><FaTimes title='Remove' className={`btn-close ${exit_getHover(task.reminder)}`}
                    onMouseOver={exit_onMouseIn}
                    onMouseOut={exit_onMouseOut} style={{

                        // position: 'absolute', right: '20px', bottom: '40px',
                        // fontSize: '1.2rem', cursor: 'pointer', verticalAlign: 'center',
                    }} onClick={() => onDelete(task.id)} />
                </h3>
            </div>


            {/* <div className={`task noselect ${task_getReminder(task.reminder)}`} onMouseOver={task_onMouseIn} onMouseOut={task_onMouseOut} onDoubleClick={() => onToggle(task.id)}>
                <h3 title={task.text}>
                    {task.text}

                </h3>
                <p>{task.day}</p>

                <FaTimes title='Remove' className={`btn-close ${exit_getHover(task.reminder)}`}
                    onMouseOver={exit_onMouseIn}
                    onMouseOut={exit_onMouseOut} style={{
                        display: 'absolute',
                        right: '100px',
                        left: '200px',
                        // position: 'absolute', right: '20px', bottom: '40px',
                        // fontSize: '1.2rem', cursor: 'pointer', verticalAlign: 'center',
                    }} onClick={() => onDelete(task.id)} />
            </div > */}
        </>
        // <div className={`task noselect ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>

        //     <th scope="row">{task.id}</th>
        //     <td>{task.text}</td>
        //     <td>{task.day}</td>
        //     <td>{task.reminder ? 'yes' : 'no'}</td>
        // </div>

        // <tr className={`task noselect ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        //     <th scope="row" className='tbl-row' >{task.id}</th>
        //     <td>{task.text}</td>
        //     <td>{task.day}</td>
        //     <td>{task.reminder ? 'yes' : 'no'}</td>
        //     <a onClick={() => onDelete(task.id)}><FaTimes style={{
        //         color: 'red', cursor: 'pointer'
        //     }} /></a>
        //     {/* <FaTimes style={{
        //         color: 'red', cursor: 'pointer'
        //     }} onClick={() => onDelete(task.id)} /> */}
        // </tr>
    )
}

export default Task