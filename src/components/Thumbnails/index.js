import './index.css'

const Thumbnails = props => {
  const {thumbnailsDetails, updateId} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailsDetails
  const onClickItem = () => {
    updateId(id)
  }
  return (
    <li className="small-items">
      <img
        src={thumbnailUrl}
        className="thumbnail-image"
        alt={thumbnailAltText}
        onClick={onClickItem}
      />
    </li>
  )
}

export default Thumbnails
