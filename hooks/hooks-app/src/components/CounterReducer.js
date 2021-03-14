import React, { useReducer } from 'react'

// 1. 初期値設定
const initial = 0;
// 2. reducer関数作成(stateをactionを渡し、新しいstateを返すように実装)
const reducer = (state, action) => {
    switch (action) {
        case 'incriment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initial
        default:
            return state
    }
}

function CounterReducer() {
    // 3.作成したreducerをuseReducerに渡す
    const [count, dispatch] = useReducer(reducer, initial);
    return (
        <div>
            <div>{count}</div>
            {/* 4. incrimentがアクションに当たる */}
            <button onClick={() => dispatch('incriment')}>+ボタン</button>
            <button onClick={() => dispatch('decrement')}>-ボタン</button>
            <button onClick={() => dispatch('reset')}>resetボタン</button>
        </div>
    )
}

export default CounterReducer
