import React from 'react'
import RandomShow from './RandomShow'

function RandomList({randomImageData}) {
    const renderedRandomImages = randomImageData.map((image)=>{
        return <RandomShow image={image} key={image.id} />
    })

  return (
    <div className="images-results-display">
      {renderedRandomImages}
    </div>
  )
}

export default RandomList
