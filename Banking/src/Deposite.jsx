import React, { useState,useEffect } from 'react';
import './App.css';
import Header from './Header';
import { deposite,globaldata} from './data';
import { useNavigate } from 'react-router-dom';

const Deposite = () => {
  const [acc, setAcc] = useState('');
  const [accError, setAccError] = useState(false);
  const [amm, setAmm] = useState('');
  const [dis,setDis] = useState(true)
  const Navigate = useNavigate();
   
  useEffect(() => {
    if (acc != '' && amm != '') {
      setDis(false)
    }else{
      setDis(true)
    }
  }, [acc, amm]);

  function depositeFun() {
    let data = globaldata.some((item)=> item.accNum == acc)
    if(data){
      deposite(acc, amm);
      Navigate('/dashed');
    }else{
      setAccError(true)
    }
  }


  return (
    <div>
      <div className="withdraw-container">
        <Header />
        <div className="box">
          <h1>Cash Deposite</h1>
          <div>
            <label>Account no.</label>
            <input type="text" onChange={(e) => setAcc(e.target.value)} />
          </div>
          <div>
            <label>Deposite Amount</label>
            <input type="text" onChange={(e) => setAmm(e.target.value)} />
          </div>
          {accError && <p>Your Account Number is Incorrect</p>}
          <button onClick={depositeFun}  disabled={dis}>Deposite</button>
        </div>
      </div>
    </div>
  );
};

export default Deposite;
