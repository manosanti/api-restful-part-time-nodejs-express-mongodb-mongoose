import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Cards from './Components/Cards'
import styled from 'styled-components'

function App() {

  return (
    <>
      <Navbar />
      <CardsGrid>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </CardsGrid>
      
    </>
    )
}

export default App

const CardsGrid = styled.div`

    @media (max-width: 700px) {
      padding-top: calc(100vh - 90vh);
      margin: 0 auto;
      grid-template-columns: repeat(1, 50%);
    }

    justify-content: center;
    display: grid;
    grid-template-columns: repeat(3, 20%);
    grid-column-gap: 0px;
    grid-row-gap: 100px;
`
