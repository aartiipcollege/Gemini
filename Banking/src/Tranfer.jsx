import React, { useState,useEffect } from 'react';
import './App.css';
import Header from './Header';
import { transferCash, globaldata } from './data';
import { useNavigate } from 'react-router-dom';

const Transfer = () => {
  const [acc1, setAcc1] = useState('');
  const [acc1Error, setAcc1Error] = useState(false);
  const [acc2, setAcc2] = useState('');
  const [acc2Error, setAcc2Error] = useState(false);
  const [transfer, setTransfer] = useState('');
  const [transferError, setTransferError] = useState(false);
  const [dis,setDis] = useState(true)
  const Navigate = useNavigate();

  useEffect(() => {
    if (acc1 != '' && acc2 != '' &&  transfer != '') {
      setDis(false)
    }else{
      setDis(true)
    }
  }, [acc1, acc2, transfer]);

  function transferFun() {
    const acc1Exists = globaldata.some(item => item.accNum === acc1);
    const acc2Exists = globaldata.some(item => item.accNum === acc2);

    if (!acc1Exists) {
      setAcc1Error(true);
    } else {
      setAcc1Error(false);
    }
    if (!acc2Exists) {
      setAcc2Error(true);
    } else {
      setAcc2Error(false);
    }

    if (acc1Exists && acc2Exists) {
      let account = globaldata.find((item) => item.accNum === acc1);
      console.log(account)
      if (Number(transfer) <= Number(account.openAmount)) {
        transferCash(acc1, acc2, transfer);
        Navigate('/dashed');
      } else {
        setTransferError(true);
      }
    }

  }

return (
  <div>
    <div className="withdraw-container">
      <Header />
      <div className="box">
        <h1>Cash Transfer</h1>
        <div>
          <label>Your Account no.</label>
          <input type="text" onChange={(e) => setAcc1(e.target.value)} />
        </div>
        <div>
          <label>Transfer to Account no.</label>
          <input type="text" onChange={(e) => setAcc2(e.target.value)} />
        </div>
        <div>
          <label>Transfer Amount</label>
          <input type="text" onChange={(e) => setTransfer(e.target.value)} />
        </div>
        {acc1Error && <p>Your account number does not exist</p>}
        {acc2Error && <p>Transfer account number does not exist</p>}
        {transferError && <p>Your account does not have sufficient balance</p>}
        <button onClick={transferFun}  disabled={dis} >Transfer</button>
      </div>
    </div>
  </div>
);
};

export default Transfer;
