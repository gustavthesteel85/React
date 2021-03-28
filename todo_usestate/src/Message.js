import React from 'react';
import useCount from './useCount';

export default function Message(props) {
  const message = useCount(props.items.length) ? 'over 5 clicks' : 'under 5 clicks'
  return (
    <>
      <h1 style={{textAlign: 'center', color: 'white'}}>{message}</h1>
    </>
  )
}