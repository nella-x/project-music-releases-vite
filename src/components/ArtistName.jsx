export const ArtistName = (props) => {
  return (
    <div className="artist-name">
      {props.albumcard.artists.map((artist, index) => (
        <span key={artist.id}>
          <a href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            {artist.name}

            {index < props.albumcard.artists.length - 1 ? ', ' : ''}
          </a>
        </span>
      ))}
    </div>
  )
}