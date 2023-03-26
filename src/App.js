import './App.css';
import { Routes, Route } from "react-router-dom"
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { DungeonsAndDragonsOverhaul } from './pages/DungeonsAndDragonsOverhaul';
import { VideoGamePrototypes } from './pages/VideoGamePrototypes';
import { DesignExercises } from './pages/DesignExercises';
import { MapGenerator } from './pages/MapGenerator';
import { Resume } from './pages/Resume';
import { AboutMe } from './pages/AboutMe';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DungeonsAndDragonsContent } from './pages/DungeonsAndDragonsContent';
import { ContactMe } from './pages/ContactMe';

const theme = createTheme({   palette: {     primary: {main: '#666666'},   }, });

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/PublishedDnDContent" element={<DungeonsAndDragonsContent />} />
          <Route path="/SWWLevelingOverhaul" element={<DungeonsAndDragonsOverhaul />} />
          <Route path="/MapGenerator" element={<MapGenerator />} />
          <Route path="/VideoGamePrototypes" element={<VideoGamePrototypes />} />
          <Route path="/DesignExercises" element={<DesignExercises />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
        </ThemeProvider>
    </div>
  );
}

export default App;
