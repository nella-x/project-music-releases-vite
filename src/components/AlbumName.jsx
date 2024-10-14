import "./AlbumName.css"

export const AlbumName = (props) => {
  return (
    <div className="album-name">
      <a href={props.albumcard.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer">
        {props.albumcard.name}
      </a>
    </div>
  )
}