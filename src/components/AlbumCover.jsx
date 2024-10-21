import PropTypes from 'prop-types';
import { AlbumCoverButtons } from "./AlbumCoverButtons";
import "./AlbumCover.css";

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
  );
};

// PropTypes validation
AlbumCover.propTypes = {
  albumcard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  }).isRequired
};
