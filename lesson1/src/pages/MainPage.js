import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import DZ1 from "../components/DZ1";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <div className='btn'>MainPage</div>
            <Button name={'Open'} color={'primary'}/>
            <Button name={'Close'} color={'error'}/>
            <Button name={'Save'} color={'secondary'}/>
            <Footer/>
            <DZ1/>
        </div>
    );
};

export default MainPage;