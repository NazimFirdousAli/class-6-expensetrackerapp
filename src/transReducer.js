import React from 'react';

const transactionReducer = (state,action) => {
    switch(action.type){
        case 'ADD TRANSACTION':{
            return [action.payload, ...state]
        }
        default:
            return state;
    }
}

export default transactionReducer;