import React from "react";
import "./list.scss";

import SideBar from "../../components/sideBar/sideBar";
import NavBar from "../../components/navBar/navBar";
import ListTable from '../../components/table/listTable';


const List = ({columns}) => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <NavBar />
        <ListTable columns={columns}/>
      </div>
    </div>
  );
};

export default List;
