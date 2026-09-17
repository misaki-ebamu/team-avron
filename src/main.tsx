import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Research from './pages/Research';
import Progress from './pages/Progress';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import Resources from './pages/Resources';
import Updates from './pages/Updates';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="research" element={<Research />} />
          <Route path="progress" element={<Progress />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="team" element={<Team />} />
          <Route path="resources" element={<Resources />} />
          <Route path="updates" element={<Updates />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
);
