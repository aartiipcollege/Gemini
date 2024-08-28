import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './Header'
import { withdraw, globaldata } from './data';
import { useNavigate } from 'react-router-dom';

const Withdraw = () => {
  const [acc, setAcc] = useState('');
  const [amount, setAmount] = useState('');
  const [accError, setAccError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [dis,setDis] = useState(true)
  const Navigate = useNavigate();


  useEffect(() => {
    if (acc != '' && amount != '') {
      setDis(false)
    }else{
      setDis(true)
    }
  }, [acc, amount]);

    function withdrawFun() {
    let data = globaldata.some((item) => item.accNum == acc)
    

    if (data) {
      let account = globaldata.find((item) => item.accNum === acc);
      console.log(account)
      if (Number(amount) <= Number(account.openAmount)) {
        withdraw(acc, amount);
        Navigate('/dashed');
      } else {
        setAmountError(true);
      }
    } else {
      setAccError(true);
    }
  }


  return (
    <div>
      <div className="withdraw-container">
        <Header />
        <div className="box">
          <h1>Cash Withdraw</h1>
          <div>
            <label>Account no.</label>
            <input type="number" onChange={(e) => setAcc(e.target.value)} />
          </div>
          <div>
            <label>Withdrawing Amount</label>
            <input type="number" onChange={(e) => setAmount(e.target.value)} />
          </div>
          {accError && <p>Your Account Number is Incorrect</p>}
          {amountError && <p>Your Account doesn't have Sufficient Balance</p>}

          <button onClick={withdrawFun} disabled={dis}>Withdraw</button>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;


