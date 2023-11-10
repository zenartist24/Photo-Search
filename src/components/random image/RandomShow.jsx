import React from 'react'

function RandomShow({image}) {
    let content = <img src={image.urls.small} />

  return (
    <div>
      {content}
    </div>
  )
}

export default RandomShow
