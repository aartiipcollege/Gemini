import React, { useState } from 'react'
import './App.css'
import { globaldata } from './data.jsx'
import { useNavigate } from 'react-router-dom'


const CreatAcc = () => {
  const [name, setName] = useState('')
  const [accNum, setAccNum] = useState('')
  const [openAmount, setOpenAmount] = useState('')
  const [accType, setAccType] = useState('')
  const [error, setError] = useState(false)
  const [accError, setAccError] = useState(false)
  const Navigate = useNavigate();

  function createAccFun() {
    let check = globaldata.some((item) => item.accNum == accNum);
    const newAccount = {
      name: name,
      accNum: accNum,
      openAmount: openAmount,
      accType: accType,
    };

    if (name == '' && accNum == '' && openAmount == '' && accType == '') {
      setError(true)
    } else {
      setError(false)
      if (check) {
        setAccError(true)
      } else {
        setAccError(false)
        globaldata.push(newAccount);
        Navigate('/dashed')
      }


    }
  }

  return (
    <div>
      <div className="container-account" id='container-account' >
        <div className="bar">
          <h1>Create Account</h1>
        </div>
        <div className="createAcc-box">
          <div className="createAcc-lines">

          </div>
          <div className="account-wrapper">
            <div className="lable-box">
              <label >Name</label>
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="lable-box">
              <label >Account No.</label>
              <input type="number" onChange={(e) => setAccNum(e.target.value)} />
            </div>
            <div className="lable-box">
              <label >Opening Amount</label>
              <input type="number" onChange={(e) => setOpenAmount(e.target.value)} />
            </div>
            <div className="lable-box">
              <label >Account Type</label>
              <select onChange={(e) => setAccType(e.target.value)}>
                <option value="Saving Account">Saving Account</option>
                <option value="Current Account">Current Account</option>
                <option value="Fixed Account">Fixed Account</option>
              </select>
            </div>
            {
              error && <p>Please! fill all the feilds</p>
            }
            {
              accError && <p>This account has already exist</p>
            }
            <button onClick={createAccFun}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatAcc
