// import {Component} from 'react'

const DestinationItem = props => {
  const {eachList} = props
  const {imgUrl, name} = eachList
  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
