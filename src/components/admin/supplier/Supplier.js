import React from 'react'

function Supplier(data) {
    const {name, pdf, address, website} = data.supplier



  return (
    <>
    {console.log(data)}
        <div className='text-white'>
            <p>Nombre: {name}</p>
            <p>Direccion: {address}</p>
            <p>Web: {website}</p>
            <span>PDF?:</span><a href={pdf}>{pdf}</a>
            <br></br>
            <br></br>
        </div>
    </>
  )
}

export default Supplier