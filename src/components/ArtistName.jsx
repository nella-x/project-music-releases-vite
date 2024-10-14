import "./ArtistName.css"

export const ArtistName = (props) => {
  return (
    <div className="artist-name">
      {props.albumcard.artists.map((artist, index) => {
        const isLastArtist = index === props.albumcard.artists.length - 1
        return (
          <span key={artist.id}>
            <a href={artist.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer">
              {artist.name}
            </a>
            {isLastArtist ? '' : isLastArtist - 1 ? ' & ' : ', '}

          </span>
        )
      })}
    </div>
  )
}