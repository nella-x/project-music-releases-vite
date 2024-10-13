export const AlbumName = (props) => {
  return (
    <div className="album-name">
      <a href={props.albumcard.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer">
        <h2>{props.albumcard.name}</h2>
      </a>
    </div>
  )
}