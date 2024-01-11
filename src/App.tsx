import './App.css';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { SsidChart } from '@mui/icons-material';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import InfoIcon from '@mui/icons-material/Info';
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './Dashborad';
import Docs from './Docs';
import ImageClassification from './ImageClassification';
import PredictionsFrom2d from './PredictionsFrom2d';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import RegressionFFNN from './RegressionFFNN';
import DocsRegression from './DocsRegression';
import WordPredictionApp from './WordPredictionApp';
import DocsWordPrediction from './DocsWordPrediction';
import TranslateIcon from '@mui/icons-material/Translate';

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
          <SubMenu icon={<BurstModeIcon />} label="Image Classification">
            <MenuItem component={<Link to="imageClassification" className="link" />} icon={<BurstModeIcon />}> ImageClassification </MenuItem>
            <MenuItem component={<Link to="docs" className="link" />} icon={<InfoIcon />}> Docs </MenuItem>
          </SubMenu>
          <SubMenu icon={<BatchPredictionIcon />} label="Regression FFNN">
            <MenuItem component={<Link to="regressionFFnn" className="link" />} icon={<LegendToggleIcon />}>EA2: Regression</MenuItem>
            <MenuItem component={<Link to="predictionsFrom2d" className="link" />} icon={<SsidChart />}>Tutorial: Making Predictions from 2d data </MenuItem>
            <MenuItem component={<Link to="docsRegression" className="link" />} icon={<InfoIcon />}> Docs </MenuItem>
          </SubMenu>
          <SubMenu icon={<TranslateIcon />} label="Word Prediction">
            <MenuItem component={<Link to="wordPrediction" className="link" />} icon={<TranslateIcon />}>EA3: WordPrediction</MenuItem>
            <MenuItem component={<Link to="docsWordPrediction" className="link" />} icon={<InfoIcon />}> Docs </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <section>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="imageClassification" element={<ImageClassification />} />
          <Route path="predictionsFrom2d" element={<PredictionsFrom2d />} />
          <Route path='regressionFFnn' element={<RegressionFFNN />} />
          <Route path="wordPrediction" element={<WordPredictionApp />} />
          <Route path="docs" element={<Docs />} />
          <Route path="docsRegression" element={<DocsRegression />} />
          <Route path="docsWordPrediction" element={<DocsWordPrediction />} />


        </Routes>
      </section>
    </div >

  );
}

export default App;
