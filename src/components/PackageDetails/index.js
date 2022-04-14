import './index.css'

const PackageDetails = props => {
  const {itemDetails} = props
  const {name, imageUrl, description} = itemDetails

  return (
    <li className="package-item">
      <img src={imageUrl} alt={name} className="logo" />
      <h1 className="name">{name}</h1>
      <p className="des">{description}</p>
    </li>
  )
}

export default PackageDetails
