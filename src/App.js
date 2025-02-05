import './App.css';
import { Routes, Route } from "react-router-dom"
import { Grid } from '@mui/material';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Dashboard } from './pages/Dashboard';
import { DungeonsAndDragonsOverhaul } from './pages/DungeonsAndDragonsOverhaul';
import { VideoGamePrototypes } from './pages/VideoGamePrototypes';
import { GameJamCrackedGlass } from './pages/GameJamCrackedGlass';
import { GameJamBlackFriday } from './pages/GameJamBlackFriday';
import { GameJamMightyMorphinMotorcat } from './pages/GameJamMightyMorphinMotorcat';
import { DesignExercises } from './pages/DesignExercises';
import { MapGenerator } from './pages/MapGenerator';
import { Resume } from './pages/Resume';
import { AboutMe } from './pages/AboutMe';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DungeonsAndDragonsContent } from './pages/DungeonsAndDragonsContent';
import { ContactMe } from './pages/ContactMe';
import { DungeonsAndDragonsOverhaulTutorial } from './pages/DungeonsAndDragonsOverhaulTutorial';
import { BackgroundVideo } from './components/BackgroundVideo';

const theme = createTheme({
  palette: {
    primary: { main: '#ffffff' },
    secondary: { main: '#0099ff' }
  },
});

function App() {
  return (
    <div className="App">
      <BackgroundVideo />
      <ThemeProvider theme={theme}>
        <Header />
        <Grid container spacing={0} id='TopOfApp'>
          <Grid item md={0.5} sm={0} xs={0} />
          <Grid item md={11} sm={11} className='PrimaryContentBody'>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/PublishedDnDContent" element={<DungeonsAndDragonsContent />} />
              <Route path="/SWWLevelingOverhaul" element={<DungeonsAndDragonsOverhaul />} />
              <Route path="/SWWLevelingOverhaulTutorial" element={<DungeonsAndDragonsOverhaulTutorial />} />
              <Route path="/MapGenerator" element={<MapGenerator />} />
              <Route path="/VideoGamePrototypes" element={<VideoGamePrototypes />} />
              <Route path="/CrackedGlass" element={<GameJamCrackedGlass />} />
              <Route path="/BlackFriday" element={<GameJamBlackFriday />} />
              <Route path="/MMM" element={<GameJamMightyMorphinMotorcat />} />
              <Route path="/DesignExercises" element={<DesignExercises />} />
              <Route path="/Resume" element={<Resume />} />
              <Route path="/AboutMe" element={<AboutMe />} />
              <Route path="/ContactMe" element={<ContactMe />} />
            </Routes>
            <Footer />
          </Grid>
          <Grid item md={0.5} sm={0} xs={0} />
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
