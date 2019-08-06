const ImageLink = props => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={props.url}
    alt={props.name}
  >
    <img src={props.image_url} alt={props.name} width="100" height="100" />
  </a>
)

export default ImageLink
