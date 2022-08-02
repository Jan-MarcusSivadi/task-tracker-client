import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {/* <table class="table">
                <thead class="task-thead">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="task noselect">
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr class="task noselect">
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr class="task noselect">
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table> */}

            {/* <table class="table">
                <thead className='task-thead noselect'>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Text</th>
                        <th scope="col">Day</th>
                        <th scope="col">Reminder</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr>
                            <div className={`task noselect ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
                                <th scope="row">{task.id}</th>
                                <td>{task.text}</td>
                                <td>{task.day}</td>
                                <td>{task.reminder ? 'yes' : 'no'}</td>
                            </div>
                            <Task
                                key={task.id}
                                task={task}
                                onDelete={onDelete}
                                onToggle={onToggle}
                            />
                        </tr>
                    ))}
                </tbody>
            </table> */}
            {/* <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Text</th>
                    <th scope="col">Day</th>
                    <th scope="col">Reminder</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                ))}
            </tbody>
        </table> */}


            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}

        </>
    )
}

export default Tasks