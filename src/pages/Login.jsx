import React from 'react'

const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Chat Online</span>
            <span className="title">Entrar</span>
            <form>
                <input type="email" placeholder='E-mail' />
                <input type="password" placeholder='Senha' />
                <button>Entrar</button>
            </form>
            <p>Você não possuí uma conta? Cadastre-se</p>
        </div>
    </div>
  )
}

export default Login