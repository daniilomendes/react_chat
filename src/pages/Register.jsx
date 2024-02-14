import React from 'react'

const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Chat Online</span>
            <span className="title">Registre-se</span>
            <form>
                <input type="text" placeholder='Nome' />
                <input type="email" placeholder='E-mail' />
                <input type="password" placeholder='Senha' />
                <input style={{display: 'none'}} type="file" id='file' />
                <label htmlFor="file">
                  <img src="/addAvatar.png" alt="add avatar" />
                  <span>Adicionar Foto</span>
                </label>
                <button>Cadastrar</button>
            </form>
            <p>Você já possuí conta? Login</p>
        </div>
    </div>
  )
}

export default Register