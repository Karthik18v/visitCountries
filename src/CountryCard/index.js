import {
  CountryContainer,
  CountryName,
  Button,
  VisitedText,
} from './styledComponents'

const CountryCard = props => {
  const {eachCountryDetails, addCountry} = props
  const {id, name, isVisited} = eachCountryDetails
  console.log(isVisited)

  const onClickVisitButton = () => {
    addCountry(id)
  }

  return (
    <CountryContainer>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <VisitedText>Visited</VisitedText>
      ) : (
        <Button type="button" onClick={onClickVisitButton}>
          visit
        </Button>
      )}
    </CountryContainer>
  )
}

export default CountryCard
