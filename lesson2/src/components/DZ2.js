import React, { useState } from 'react';
import List from './List';
import Button from './Button';

const DZ2 = () => {
    const [tasks] = useState([
        { id: 1, title: 'Saadi', completed: false },
        { id: 2, title: 'Usenkanov', completed: false },
        { id: 3, title: 'Sleep', completed: false },
    ]);

    const [showList, setShowList] = useState(true);

    const handleShow = () => {
        setShowList(prevState => !prevState);
    };

    return (
        <div>
            <Button
                name={showList ? 'ЗАКРЫТЬ' : 'ОТКРЫТЬ'}
                color="blue"
                handleClick={handleShow}
            />

            {showList && <List tasks={tasks} />}
        </div>
    );
};

export default DZ2;
