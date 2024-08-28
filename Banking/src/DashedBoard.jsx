import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './Header'
import { globaldata } from './data.jsx';

const DashedBoard = () => {
  const [mainData, setMainData] = useState(globaldata)
  const [data, setData] = useState([])
  const [show, setshow] = useState(false)

  useEffect(() => {

    setData(mainData);

    if (globaldata.length == 0) {
      setshow(true)
    } else {
      setshow(false)
    }
  }, [])

  let filterdata = (e) => {
    let res = mainData.filter((item) => {
      if (item.accType.includes(e.target.value)) {
        return item;
      }
    })
    setData(res);
  }


  return (
    <div>
      <div className="dash-container">
        <Header />
        <div className="dash-box">
          <div className="left-aside">
            <button value='Current Account' onClick={filterdata}>Current Account</button>
            <button value='Saving Account' onClick={filterdata}>Saving Account</button>
            <button value='Fixed Account' onClick={filterdata}>Fixed Account</button>
          </div>
          <div className="right-aside">
            {
              show ? <h1>No Account Found</h1> : <h1>Account</h1>
            }
            <div className='box'>
              {data.map((item, index) => {
                console.log(item, 'item');  // Check if item.name exists
                return (
                  <div key={index} className="wrapper">
                    <h2>{item.accType}</h2>
                    <h3>Name: {item.name}</h3>
                    <h3>Acc no.: {item.accNum}</h3>
                    <h3>Amount: {item.openAmount}</h3>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashedBoard

