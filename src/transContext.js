import React,{createContext,useReducer} from 'react';
import transactionReducer from './transReducer.js';

let initialtransaction = [
    {desc:'Cash',amount:1000},
    {desc:'Dinner',amount:-900},
    {desc:'Cold Drink',amount:-1600}
]
export const TransactionContext = createContext(initialtransaction);

 export const TransactionProvider = ({children}) => {
    let [state,dispatch] = useReducer(transactionReducer,initialtransaction);

    function addTransaction(transObj){
        dispatch({
            type: "ADD TRANSACTION",
            payload: {
                desc:transObj.desc,
                amount:transObj.amount
            },
        })
    }
    return(
        <TransactionContext.Provider value = {{
            transaction: state,
            addTransaction:addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )

}

export default TransactionContext;
