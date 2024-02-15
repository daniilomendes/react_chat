import React from 'react'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Diga algo...' />
      <div className="send">
        <img src="/attach.png" alt="" />
        <input type="file" style={{display: 'none'}} id='file' />
        <label htmlFor="file">
          <img src="img.png" alt="" />
        </label>
        <button>Enviar</button>
      </div>
    </div>
  )
}

export default Input