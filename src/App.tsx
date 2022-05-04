import "./styles.css";

import { useEffect, useState } from "react";
import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { Photos } from "unsplash-js/dist/methods/search/types/response";
import { searchUnsplash } from "./services/unsplashApi";
import { Basic } from "unsplash-js/dist/methods/photos/types";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { SearchHeader } from "./components/SearchHeader/SearchHeader";
import { ImageFooter } from "./components/ImageFooter/ImageFooter";

/**
 * Micro image search application
 */
export const App = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [photos, setPhotos] = useState<Basic[] | undefined>([]);

  useEffect(() => {
    searchUnsplash(search).then(({ response }: ApiResponse<Photos>) =>
      setPhotos(response?.results)
    );
  }, [search]);

  return (
    <div className="container">
      <SearchHeader onSearch={(term: string) => setSearch(term)} />
      <ImageList sx={{ width: "100%" }} cols={3}>
        {(photos || []).map((item) => (
          <ImageListItem key={item.id}>
            <img
              className="img"
              src={`${item.urls.raw}?w=164&h=164&fit=crop&auto=format`}
              alt={item.alt_description || ""}
              loading="lazy"
            />
            <ImageListItemBar
              title={
                <ImageFooter likes={item.likes} username={item.user.username} />
              }
              subtitle={<span></span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};
