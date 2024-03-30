import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'
export default function GamePlay() {
  const [score,setScore]=useState(0)
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice,setCurrentDice]=useState(1)
  const [error,setError]=useState("")
  const [showRules,setShowRules]=useState(false)
  const generateRandomNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min)
  }

  const roleDice=()=>{
    if(!selectedNumber) {
      setError(" you have not selected any numbers")
      return
    }
    setError("")
    const randomNumber=generateRandomNumber(1,7)
    setCurrentDice((prev)=>randomNumber)

    
    if(selectedNumber===randomNumber){
      setScore((prev)=>prev+randomNumber)
    }else{
      setScore((prev)=>prev-0.5)
    }
    setSelectedNumber(undefined)
  }

  const resetScore=()=>{
    setScore(0)
  }

  return (
    <MainContainer>
     <div className="top_section">
     <TotalScore score={score}/>
      <NumberSelector
      setError={setError}
       error={error}
       selectedNumber={selectedNumber}
      setSelectedNumber={setSelectedNumber}/>
     </div>
     <RoleDice currentDice={currentDice} roleDice={roleDice}/>
     <div className="btns">
      <OutlineButton onClick={resetScore}>Reset</OutlineButton>
      <Button onClick={()=>setShowRules((prev)=>!(prev))}>{showRules?"Hide":"show"} Rules</Button>
     </div>
    {showRules&& <Rules />}
    </MainContainer>
  )
}
const MainContainer=styled.main`
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-top: 20px;
    }
`