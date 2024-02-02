import React from 'react'
import Test from './Test';
import { testContext } from '../App';
import { useContext } from 'react';
function Test2() {
    const t1 = useContext(testContext) 
  return (
    <div>hello ${t1}</div>
  )
}

export default Test2