import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails} = props
  const {imageUrl, imageAltText} = thumbnailDetails

  return (
    <li className="list-item">
      <img src={imageUrl} className="image" alt={imageAltText} />
    </li>
  )
}

export default ThumbnailItem
