import { AlbumCoverButtons } from './AlbumCoverButtons'


export const AlbumCover = (props) => {
  return (
    <div className="album-cover-box">
      <figure className="album-cover">
        <img src={props.albumcard.images[0].url} alt={props.albumcard.name} />
      </figure>

      <div className="album-cover-buttons">
        <AlbumCoverButtons />
      </div>
    </div>
  )
}