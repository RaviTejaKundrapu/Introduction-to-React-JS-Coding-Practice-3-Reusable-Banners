import './index.css'

const BannerCardItem = props => {
  const {bannerCards} = props
  const {id, headerText, description, className} = bannerCards
  return (
    <li className={className}>
      <h1 className="headingStyle">{headerText}</h1>
      <p className="paragraphStyle">{description}</p>
      <button className="buttonStyle" type="button">
        Show More
      </button>
    </li>
  )
}

export default BannerCardItem
