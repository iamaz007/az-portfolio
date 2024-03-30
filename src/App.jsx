import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/Pages/HomePage';
import ProjectPage from './components/Pages/ProjectPage';
import ProjectDetailsPage from './components/Pages/ProjectDetailsPage';


function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Layout darkMode />}>
        <Route index element={<HomePage darkMode />} />
        <Route path="projects" element={<ProjectPage darkMode />} />
        <Route path="project/:slug" element={<ProjectDetailsPage darkMode />} />

        {/* <Route path="about" element={<AboutPage darkMode />} />
        <Route path="service" element={<ServicePage />} />
        <Route
          path="service/:serviceDetailsId"
          element={<ServiceDetailsPage />}
        />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog-list" element={<BlogListPage />} />
        <Route path="blog/:blogDetailsId" element={<BlogDetailsPage />} /> */}
        {/* <Route path="portfolio" element={<PortfolioPage />} />
        <Route
          path="portfolio/:portfolioDetailsId"
          element={<PortfolioDetailsPage />}
        /> */}
        {/* <Route path="case-study-details" element={<CaseStudyDetailsPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="team/:teamDetailsId" element={<TeamDetailsPage />} />
        <Route path="contact" element={<ContactPage />} /> */}
      </Route>
      {/* <Route path="/" element={<Layout2 darkMode />}>
        <Route element={<Home />} />
        <Route path="tech-startup" element={<TechStartupPage />} />
      </Route>
      <Route path="/" element={<Layout3 darkMode />}>
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:productId" element={<ProductDetails />} />
        <Route path="shop/cart" element={<Cart />} />
        <Route path="shop/checkout" element={<Checkout />} />
        <Route path="shop/success" element={<Success />} />
        <Route path="shop/wishlist" element={<Wishlist />} />
      </Route> */}
    </Routes>
  );
}

export default App;
