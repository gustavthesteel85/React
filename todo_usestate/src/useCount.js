import { useState, useEffect } from 'react';

// useXxxにするのは慣習
export default function useCount(len){
  const [isOver5, setIsOver5] = useState(false);

  // side effectsを実行する。
  useEffect(() => {
    handleStateChange(len)
  })

  // コンポーネント間で再利用したいロジック
  const handleStateChange = (len) => {
    if(len >= 5){
        setIsOver5(true)
    }
    else{
        setIsOver5(false)
    }
  }

  return isOver5;
}