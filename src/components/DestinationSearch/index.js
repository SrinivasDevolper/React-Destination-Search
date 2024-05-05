import {Component} from 'react'
import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchRes: ''}

  inputSearch = event => {
    this.setState({searchRes: event.target.value})
  }

  render() {
    const {searchRes} = this.state
    const {destinationsList} = this.props
    let filterSearch
    if (searchRes === '') {
      filterSearch = destinationsList
    } else {
      filterSearch = destinationsList.filter(eachItem =>
        eachItem.name.toLowerCase().includes(searchRes.toLowerCase()),
      )
      console.log(filterSearch, 'helllo')
    }
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <div className="search-div">
          <input type="search" onChange={this.inputSearch} value={searchRes} />
          <img
            className="search-img"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            placeholder="search"
          />
        </div>
        <ul>
          {filterSearch.map(eachList => {
            const {id} = eachList
            return <DestinationItem eachList={eachList} key={id} />
          })}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
