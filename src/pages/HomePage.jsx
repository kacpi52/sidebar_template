import React from 'react'
import Menu from '../Components/SidebarMenu/Menu';
import TopList from '../Components/TopList/TopList';


const HomePage = () => {
    return (
        <div>
            <Menu />
            <h1>Home Page</h1>
            <p>Main page of this website.</p>
            <TopList />
        </div>
    )
}

export default HomePage;
