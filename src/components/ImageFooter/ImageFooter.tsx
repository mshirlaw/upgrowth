import "./ImageFooter.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

/**
 * Props for the {@link ImageFooter} component
 */
declare interface ImageFooterProps {
  likes: number;
  username: string;
}

/**
 * ImageFooter component
 */
export const ImageFooter = ({
  likes = 0,
  username = ""
}: ImageFooterProps): JSX.Element => {
  return (
    <div className="caption">
      <div className="likes">
        <FavoriteIcon />
        <div className="count">{likes}</div>
      </div>
      <div className="username">{`@${username}`}</div>
    </div>
  );
};
