import './App.css'
import Layout from './Layout';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import HomePage from './pages/HomePage'
import {
  createBrowserRouter, 
  RouterProvider,
} from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage';

const routes = 
  [{
    path: '/', 
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [{
      path: '/',
      element: <HomePage />
    }, 
    {
      path: '/about',
      element: <AboutPage />
    }, 
    {
      path: '/articles',
      element: <ArticlesListPage />
    }, 
    {
      path: '/articles/:name',
      element: <ArticlePage />
    }]
  }]
  

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
