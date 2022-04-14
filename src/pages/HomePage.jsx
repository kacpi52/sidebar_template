import React from "react";
import AlertBox from "../Components/AlertBox/AlertBox";
import Menu from "../Components/SidebarMenu/Menu";
import TopList from "../Components/TopList/TopList";

const HomePage = () => {
  return (
    <div>
      <AlertBox />
      <Menu />
      <h1>Home Page</h1>
      <p>Main page of this website.</p>
      <TopList />
    </div>
  );
};

export default HomePage;
