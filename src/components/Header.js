import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

  
export default function Header() {
  return (
      <AppBar position="static" className="title">
        <Toolbar>
          <div><h1>Matthew Carlson</h1></div>
        </Toolbar>
      </AppBar>
  );
}