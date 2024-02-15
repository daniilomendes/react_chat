import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chat Online</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/19539378/pexels-photo-19539378/free-photo-of-bolsa-sacola-alforje-valise.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>Danilo</span>
        <button>Sair</button>
      </div>
    </div>
  )
}

export default Navbar