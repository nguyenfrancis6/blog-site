import React from 'react'
import articles from '../article-content'
import ArticlesList from '../ArticlesList'

const ArticlesListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesList articles={articles} />
    </>
  )
}

export default ArticlesListPage