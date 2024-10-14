// Import components to album card
import { AlbumCover } from "./AlbumCover"
import { AlbumName } from "./AlbumName"
import { ArtistName } from "./ArtistName"

import "./AlbumCard.css"

export const AlbumCard = (props) => {
  return (
    <article className="album-card">
      <AlbumCover albumcard={props.albumcard} />

      <AlbumName albumcard={props.albumcard} />

      <ArtistName albumcard={props.albumcard} />
    </article>
  )
}