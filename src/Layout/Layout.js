import React from "react";
import Toolbar from "./Toolbar/Toolbar";
import Sidebar from "./Sidebar/Sidebar";

export default ({children})=>{
    <div className="Layout">
        <Toolbar />
        <Sidebar />
        {children}
    </div>
};