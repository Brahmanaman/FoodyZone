import React from 'react'
import styled from "styled-components"

const App = () => {
  return (
    <>
      <MainContainer>
        <TopContainer>
          <div className='logo'>
            {/* <img src="" alt="logo" /> */}
          </div>
          <div className='search'>
            <input type="text" placeholder='Search Food' />
          </div>
        </TopContainer>
      </MainContainer>
    </>
  )
}

export default App

const MainContainer = styled.div`
  background-color: #2a2a2a;
`
const TopContainer = styled.section``

