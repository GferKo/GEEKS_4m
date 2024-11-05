import React from 'react';

const List = ({ tasks }) => {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <span>{task.title}</span>
                    <span>{task.completed ? 'Completed' : 'Pending'}</span>
                </li>
            ))}
        </ul>
    );
};

export default List;
