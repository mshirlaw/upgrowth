import "./SearchHeader.css";

import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

/**
 * Props for the {@link SearchHeader} component
 */
export declare interface SearchHeaderProps {
  onSearch(search: string): void;
}

/**
 * Renders a simple Search header
 *
 * @param onSearch callback function
 */
export const SearchHeader = ({ onSearch }: SearchHeaderProps): JSX.Element => {
  return (
    <div className="search">
      <div>
        <h1>Image Search</h1>
      </div>
      <div>
        <TextField
          id="search-input"
          size="small"
          placeholder="Search for images"
          className="search-input"
          fullWidth
          onChange={(event): void => onSearch(event.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </div>
    </div>
  );
};
