import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import WhatWeDo from './pages/WhatWeDo';
import Resources from './pages/Resources';
import Programs from './pages/Programs';
import Activities from './pages/Activities';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Partnership from './pages/Partnership';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import NewsBlog from './pages/NewsBlog';
import BlogPost from './pages/BlogPost';
import Stories from './pages/Stories';
import ImpactStories from './pages/ImpactStories';
import Gender from './pages/Gender';
import Menstrual from './pages/Menstrual';
import Sexual from './pages/Sexual';
import Scholarship from './pages/Scholarship';
import Building from './pages/Building';
import NotFound from './pages/NotFound';

// Helper component: scroll window to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Modern Clean Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/what" element={<WhatWeDo />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news-blog" element={<NewsBlog />} />
        <Route path="/blog-post" element={<BlogPost />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/impact-stories" element={<ImpactStories />} />
        <Route path="/gender" element={<Gender />} />
        <Route path="/menstrual" element={<Menstrual />} />
        <Route path="/sexual" element={<Sexual />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/building" element={<Building />} />

        {/* Exact Legacy Paths matching old HTML site */}
        <Route path="/index.html" element={<Home />} />
        <Route path="/pages/about.html" element={<About />} />
        <Route path="/pages/what.html" element={<WhatWeDo />} />
        <Route path="/pages/ResearchResource.html" element={<Resources />} />
        <Route path="/pages/programs.html" element={<Programs />} />
        <Route path="/pages/activities.html" element={<Activities />} />
        <Route path="/pages/getinvolve.html" element={<GetInvolved />} />
        <Route path="/pages/contact.html" element={<Contact />} />
        <Route path="/pages/donate.html" element={<Donate />} />
        <Route path="/pages/partnership.html" element={<Partnership />} />
        <Route path="/pages/events.html" element={<Events />} />
        <Route path="/pages/gallery.html" element={<Gallery />} />
        <Route path="/pages/newsblog.html" element={<NewsBlog />} />
        <Route path="/pages/blogpost.html" element={<BlogPost />} />
        <Route path="/pages/stories.html" element={<Stories />} />
        <Route path="/pages/impactstories.html" element={<ImpactStories />} />
        <Route path="/pages/gender.html" element={<Gender />} />
        <Route path="/pages/menstrual.html" element={<Menstrual />} />
        <Route path="/pages/sexual.html" element={<Sexual />} />
        <Route path="/pages/scholarship.html" element={<Scholarship />} />
        <Route path="/pages/building.html" element={<Building />} />

        {/* 404 Not Found Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

