import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #161624;
  color: white;
  height: 100vh;
  background-size: cover;
  padding: 20px;
  justify-content: flex-start;
`

export const CountriesListContainer = styled.div`
  overflow-y: auto;
  height: 40vh;
`

export const CountriesList = styled.ul`
  list-style: none;
`

export const VisitCountriesListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`
export const NoListContainer = styled.div`
  display: flex;
  justify-content: center;
`
