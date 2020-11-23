import React,{useContext,useState} from 'react';
import './App.css';
import TransactionContext from './transContext.js';


function Expensechild() {
    let {transaction,addTransaction} = useContext(TransactionContext);
    console.log(transaction);

    let[newDesc,setDesc] = useState(" ")
    let[newAmount,setAmount] = useState(0)
    
    const handleTransaction = (event) => {
        event.preventDefault();
        console.log(newDesc,newAmount)
        if(Number(newAmount)=== 0){
            alert('Write Correct amount');
        }
        else {
        addTransaction({
            desc: newDesc,
            amount: Number(newAmount)
        })
    }

    }

    const getIncome = () => {
        let income = 0;
        for( var i=0;i< transaction.length; i++){
            if(transaction[i].amount>0)
                income = income +transaction[i].amount;
            }
            return income;
    }

    const getExpense = () => {
        let expense = 0;
        for( var i=0; i<transaction.length; i++){
            if(transaction[i].amount < 0)
                expense = expense + transaction[i].amount;
        }
            return expense;
    }

    const getBalance = () => {
        let balance = 0;
        for( var i=0; i<transaction.length; i++){
            if(transaction[i].amount > 0)
                balance = getIncome()+getExpense();
        }
        return balance;
    }

    return (
      <div className="App">
    <h2>Expense Tracker By Nazim Firdous Ali</h2>

    <div className="container">
      <h4>Your Balance</h4>
      <h1 id="balance">{getBalance()}</h1>

      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">{getIncome()}</p>
        </div>
        <div>
          <h4>Expense</h4>
    <p id="money-minus" className="money minus">{getExpense()}</p>
        </div>
      </div>

      <h3>History</h3>
      <ul id="list" className="list">
        {transaction.map((transObj,ind)=> {
            return(
                // <li className="minus" key = {index}>
                <li key = {ind}>    
                    {transObj.desc}<span>{transObj.amount}</span><button className="delete-btn">x</button>
                </li>
            )
        })}
      </ul>

      <h3>Add new transaction</h3>
      <form id="form" onSubmit = {handleTransaction}>
        <div className="form-control">
          <label>Text</label>
          <input type="text" id="text" placeholder="Enter text..." required onChange = {(eve) => setDesc(eve.target.value)} />
        </div>
        <div className="form-control">
          <label>
            Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" placeholder="Enter amount..." required onChange = {(eve) => setAmount(eve.target.value)}  />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
      </div>
    );
  }
  
  export default Expensechild;
