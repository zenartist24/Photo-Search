import React from 'react'

function SearchShow({image}) {
    let content = <img src={image.urls.small} />

  return (
    <div>
      {content}
    </div>
  )
}

export default SearchShow
