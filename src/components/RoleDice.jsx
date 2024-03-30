
import styled from 'styled-components';

export default function RoleDice({roleDice,currentDice}) {
  
 
  return (
    <DiceContainer>
      <div className='dice' onClick={roleDice}>
        <img src={`allDices/dice${currentDice}.jpg`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center vertically as well */
  margin-top: 48px;

  .dice{
    cursor: pointer;
  }
  p{
    font-size: 24px;
  }
`;
