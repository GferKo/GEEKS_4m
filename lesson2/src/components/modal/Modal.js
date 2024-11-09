import React from 'react';
import classes from './Modal.module.scss';
import Input from '../input/Input';
import Button from '../Button';


const Modal = ({children, handleShow, name, handleInput}) => {
    return (
        <div>
            <div className={classes.wrapper}/>
            <div className={classes.content}>
                <Button name={'Закрыть'} action={()=>handleShow(name)}/>
                <Input placeholder={'введите текст'} action={handleInput}/>
                {children}
            </div>
        </div>
    );
};

export default Modal;