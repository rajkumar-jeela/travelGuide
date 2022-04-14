import {Component} from 'react'

import Loader from 'react-loader-spinner'

import PackageDetails from './components/PackageDetails'

import './App.css'

class App extends Component {
  state = {isLoading: true, data: []}

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    this.setState({isLoading: true})
    const url = 'https://apis.ccbp.in/tg/packages'

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.packages.map(eachPackage => ({
        id: eachPackage.id,
        name: eachPackage.name,
        imageUrl: eachPackage.image_url,
        description: eachPackage.description,
      }))
      this.setState({data: updatedData, isLoading: false})
    }
  }

  renderLoadingView = () => (
    <div testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderSuccessView = () => {
    const {data} = this.state
    return (
      <div className="container">
        <h1 className="heading">Travel Guide</h1>
        <hr className="line" />
        <ul className="packages-list">
          {data.map(eachItem => (
            <PackageDetails key={eachItem.id} itemDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? this.renderLoadingView() : this.renderSuccessView()}
      </div>
    )
  }
}

export default App
