import React from 'react'
import SearchShow from './SearchShow'

function SearchList({searchImageData}) {
    const renderedSearchData = searchImageData.map((image)=>{
        return <SearchShow image={image} key={image.id} />
    })

  return (
    <div className="images-results-display">
      {renderedSearchData}
    </div>
  )
}

export default SearchList
