import React from 'react';
import './App.css';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import BurstModeIcon from '@mui/icons-material/BurstMode';
import InfoIcon from '@mui/icons-material/Info';
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './Dashborad';
import Docs from './Docs';
import ImageClassification from './ImageClassification';

function App() {

  const { collapseSidebar } = useProSidebar();
  return (

    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app" >
        <Menu>
          <MenuItem className="menu1" icon={<MenuRoundedIcon
            onClick={() => {
              collapseSidebar();
            }}
          />}>
          </MenuItem>
          <MenuItem component={<Link to="dashboard" className="link" />} icon={<GridViewRoundedIcon />}> Dashboard </MenuItem>
          <MenuItem component={<Link to="imageClassification" className="link" />} icon={<BurstModeIcon />}> ImageClassification </MenuItem>
          <MenuItem component={<Link to="docs" className="link" />} icon={<InfoIcon />}> Docs </MenuItem>
        </Menu>
      </Sidebar>
      <section>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="imageClassification" element={<ImageClassification />} />
          <Route path="docs" element={<Docs />} />

        </Routes>
      </section>
    </div >

  );
}

export default App;
