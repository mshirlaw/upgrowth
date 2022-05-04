import { createApi } from "unsplash-js";
import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { Photos } from "unsplash-js/dist/methods/search/types/response";
import { mockResponse } from "./mockDataService";
import { API_KEY } from "../constants/constants";

const unsplash = createApi({
  accessKey: API_KEY
});

/**
 * Search the unsplash API for a given query string
 *
 * @param query {@link string} the query string
 * @return {@link Promise} the photos response
 */
export const searchUnsplash = (query: string): Promise<ApiResponse<Photos>> => {
  return API_KEY === "DEV"
    ? Promise.resolve(mockResponse)
    : unsplash.search.getPhotos({
        query: query,
        orientation: "landscape"
      });
};
