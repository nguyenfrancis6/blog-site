import React from 'react'
import articles from '../article-content'
import ArticleList from '../ArticlesList'

const ArticlesListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesList articles={articles} />
    </>
  )
}

export default ArticlesListPage