import './App.css'
import Layout from './Layout';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesList from './pages/ArticlesList';
import HomePage from './pages/HomePage'
import {
  createBrowserRouter, 
  RouterProvider,
} from 'react-router-dom'

const routes = 
  [{
    path: '/', 
    element: <Layout />,
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
      element: <ArticlesList />
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
