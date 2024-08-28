import React, { useState } from 'react'
import Bgvedio from './background-vedio.mp4'
import './App.css';
import { useNavigate } from 'react-router-dom';

const loginData =
{
  name: "aarti",
  password: "aarti@123"
}

const App = () => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)
  const [nameError1, setNameError1] = useState(false)

  const [pswrd, setPswrd] = useState('')
  const [pswrdError, setPswrdError] = useState(false)
  const [pswrdError1, setPswrdError1] = useState(false)


  const navigate = useNavigate();

  function loginFun() {

    if (name == '') {
      setNameError(true)
    } else {
      setNameError(false)
    }
    if (pswrd == '') {
      setPswrdError(true)
    } else {
      setPswrdError(false)
    }

    if(name !== '' && pswrd !== '') {
      if (name == loginData.name) {
        setNameError1(false);
      } else {
        setNameError1(true);
      }
  
      if (pswrd == loginData.password) {
        setPswrdError1(false);
      } else {
        setPswrdError1(true);
      }
    }
    

    if (name == loginData.name && pswrd == loginData.password) {
      navigate('/dashed');
    }
  }
  return (
    <div>
      <div className="container">
        <video autoPlay muted loop >
          <source src={Bgvedio} type="video/mp4" />
        </video>
        <div className="form">
          <h1>Login</h1>
          <input type="text" placeholder='Username' onChange={(e) => setName(e.target.value)} />
          {
            nameError ? <p>Required field!</p> : <p></p>
          }
          {
            nameError1 ? <p>Your Username doesn't found!</p> : <p></p>
          }

          <input type="text" placeholder='Password' onChange={(e) => setPswrd(e.target.value)} />
          {
            pswrdError ? <p>Required field!</p> : <p></p>
          }
          {
            pswrdError1 ? <p>Your password is incorrect!</p> : <p></p>
          }

          <button onClick={loginFun}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default App
