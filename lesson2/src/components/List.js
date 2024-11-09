import React from 'react';

function List({ tasks }) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <span>{task.title}</span>
                    <span>{task.completed ? 'Completed' : 'Not completed'}</span>
                </li>
            ))}
        </ul>
    );
}

export default List;