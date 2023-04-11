import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Bilbo from './Components/Bilbo'
import Cards from './Components/Cards'
import styled from 'styled-components'

function App() {

  return (
    <>
      <Navbar />
      <Bilbo>
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
      </Bilbo>
    </>
    )
}

export default App

const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 100px;
`
