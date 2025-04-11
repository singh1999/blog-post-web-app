import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { BlogPostListPage } from './pages/blogPostListPage';
import { BlogPostPage } from './pages/blogPostPage';
import { Header } from './components/header';
import { Container } from './components/container';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<BlogPostListPage />} />
          <Route path='/blogPost/:id' element={<BlogPostPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
