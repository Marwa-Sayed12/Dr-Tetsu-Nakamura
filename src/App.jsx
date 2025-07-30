import React from 'react'
// import Navbar from './component/Navbar';
import Hero from './component/hero';
import SectionNav from './component/SectionNav';
import Timeline from './component/TimeLine';
import Life from './component/Life';
import Impact from './component/impact';
import Projects from './component/Projects';
import Honors from './component/Honors';
import Quotes from './component/quotes';
import Videos from './component/Videos';
import Gallery from './component/Gallery';
import Footer from './component/Footer';

import './index.css';


function App() {
 
  return (
  <>
      < Hero/>
      <SectionNav />

      <div id="timeline"><Timeline /></div>      <div id="life"><Life /></div>
      <div id="impact" ><Impact/></div>
      <div id="gallery" ><Gallery/></div>
      <div id="projects" ><Projects/></div>
      <div id="honors" ><Honors/></div>
      <div id="quotes"><Quotes/></div>
      <div id="videos" ><Videos/></div>
      <div id="footer" ><Footer/></div>
</>      
  )
}

export default App