import React from "react";
import { AlertBox, Menu, TopList } from "../Components/index";

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
