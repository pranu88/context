import React from 'react'
import Test2 from './Test2';
import { testContext } from '../App';
import { useContext } from 'react';
function Test() {
 const t = useContext(testContext)   
  return (
    <div><Test2/>
    <h1>${t}</h1>
    </div>
  )
}

export default Test