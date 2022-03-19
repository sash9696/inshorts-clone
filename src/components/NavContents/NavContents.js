import { Container } from '@material-ui/core';
import React from 'react';
import './NavContents.css';
import NewsCard from '../NewsCard/NewsCard'

function NavContents({newsArray, newsResults, loadmore , setLoadmore}) {
  return (
    <Container maxWidth="md">
        <div className='contents'>
          {newsArray.map((newsItem)=> (
            <NewsCard newsItem = {newsItem} key ={newsItem.name} />
          ))}
           {loadmore <= newsResults && (
          <>
            <hr />
            <button
              className="loadMore"
              onClick={() => setLoadmore(loadmore + 20)}
            >
              Load More
            </button>
          </>
        )}
        </div>
    </Container>
  )
}

export default NavContents