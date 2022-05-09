import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';

import './Style/InfiniteScroll.css';

const InfiniteScrollComponent = () => {
  const [itemsToRender, setItemsToRender] = useState({
    items: Array.from({length: 10}),
    hasMore: true,
  });

  const fetchMoreData = () => {
    if (itemsToRender.length >= 500) {
      setItemsToRender({hasMore: false});
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      setItemsToRender({
        items: itemsToRender.items.concat(Array.from({length: 10})),
      });
    }, 500);
  };

  return (
    <div className='infinite-scroll-container'>
      <InfiniteScroll
        dataLength={itemsToRender.items.length}
        next={fetchMoreData}
        hasMore={itemsToRender.hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p className='infinite-scroll-end-message'>No more event to display</p>
        }
      >
        {itemsToRender.items.map((i, index) => (
          <div key={index} className='infinite-scroll-item'>
            EventCard -{index}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  )
}

export default InfiniteScrollComponent;
