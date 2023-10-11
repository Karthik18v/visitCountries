import {Component} from 'react'
import CountryCard from './CountryCard/index'
import CountryCardDetails from './CountryCardDetails'
import {
  AppContainer,
  CountriesListContainer,
  CountriesList,
  VisitCountriesListContainer,
  NoListContainer,
} from './styledComponents'
import './App.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

// Replace your code here
class App extends Component {
  state = {
    visitCountries: [],
    countryList: initialCountriesList,
  }

  componentDidMount() {
    this.getCountriesList()
  }

  getCountriesList = () => {
    const {countryList} = this.state
    const VisitCountriesList = countryList.filter(
      eachItem => eachItem.isVisited === true,
    )
    this.setState({visitCountries: VisitCountriesList})
    console.log(VisitCountriesList)
  }

  removeItem = countryId => {
    const {visitCountries, countryList} = this.state
    const updatedCountryList = visitCountries.filter(
      eachCountry => eachCountry.id !== countryId,
    )

    const updateCountryList = countryList.map(eachCountry =>
      eachCountry.id === countryId
        ? {...eachCountry, isVisited: false}
        : eachCountry,
    )

    this.setState({
      visitCountries: updatedCountryList,
      countryList: updateCountryList,
    })
  }

  addCountry = value => {
    const {visitCountries, countryList} = this.state
    const checkTheList = visitCountries.filter(
      eachCountry => eachCountry.id === value,
    )

    if (checkTheList.length === 0) {
      const getCountry = initialCountriesList.filter(
        country => country.id === value,
      )

      const updateCountry = getCountry.map(eachCountry => ({
        id: eachCountry.id,
        name: eachCountry.name,
        imageUrl: eachCountry.imageUrl,
        isVisited: true,
      }))

      const updateCountryList = countryList.map(eachCountry =>
        eachCountry.id === value
          ? {...eachCountry, isVisited: true}
          : eachCountry,
      )
      console.log(updateCountryList)

      const newList = [...visitCountries, updateCountry[0]]
      this.setState({countryList: updateCountryList, visitCountries: newList})
    }
  }

  render() {
    const {visitCountries, countryList} = this.state
    const emptyView = visitCountries.length > 0
    return (
      <AppContainer>
        <h1>Countries</h1>
        <CountriesListContainer>
          <CountriesList>
            {countryList.map(eachCountry => (
              <li key={eachCountry.id}>
                <CountryCard
                  eachCountryDetails={eachCountry}
                  addCountry={this.addCountry}
                />
              </li>
            ))}
          </CountriesList>
        </CountriesListContainer>
        <h1>Visited Countries</h1>
        {emptyView ? (
          <VisitCountriesListContainer>
            {visitCountries.map(eachCountry => (
              <li key={eachCountry.id}>
                <CountryCardDetails
                  eachCountryDetails={eachCountry}
                  removeItem={this.removeItem}
                  key={eachCountry.id}
                />
              </li>
            ))}
          </VisitCountriesListContainer>
        ) : (
          <NoListContainer>
            <p>No Countries Visited Yet</p>
          </NoListContainer>
        )}
      </AppContainer>
    )
  }
}

export default App
