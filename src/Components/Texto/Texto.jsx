import React from 'react'

const Texto = ({titulo, texto, img, mediaType}) => {
  return (
    <div>
        <h1>{titulo}</h1>
        <p>{texto}</p>
        {mediaType == "image" ? <img src={img} alt="" /> : <iframe width="700px" height="450px" src={img}/>}
        

    </div>
  )
}

export default Texto