import {Image, NameButtonContainer, CountryCard} from './styledComponents'

const CountryCardDetails = props => {
  const {eachCountryDetails, removeItem} = props
  const {id, name, imageUrl} = eachCountryDetails

  const removeButton = () => {
    removeItem(id)
  }

  return (
    <CountryCard>
      <Image src={imageUrl} alt="thumbnail" />
      <NameButtonContainer>
        <p>{name}</p>
        <button type="button" onClick={() => removeButton()}>
          Remove
        </button>
      </NameButtonContainer>
    </CountryCard>
  )
}
export default CountryCardDetails
