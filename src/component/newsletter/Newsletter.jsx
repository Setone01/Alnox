import React from 'react'
import styled from 'styled-components'

const Newsletter = () => {
  return (
    <Section>
        <div className="newsContainer Container">
          <h2>Newsletter</h2>
          <p></p>
          <input
          placeholder='example@email.com'
          >
          </input>
        </div>
    </Section>
  )
}

const Section = styled.section`
width: 100%;
height: 100%;
background-color: #bbc9c9;

.newsContainer{
    display: flex;
    justify-items: center;
    align-items: center;
}

`

export default Newsletter