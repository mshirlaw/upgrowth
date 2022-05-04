## Image Search

By default the application will use a mock set of images. If you wish to use the real unsplash API then you can copy your API key into the variable called API_KEY in:

```
src/constants/constants.ts
```

This was done to avoid having to store an API key in code sandbox

## Assumptions:

- I used Material UI components since I only had 30 minutes
- I've only written tests for SearchHeaher and ImageFooter for the sake of sticking to 30 mins
- Haven't debounced the API request
- Haven't done any error handling
- Haven't done any loading or empty states
- The search is not functional in dev mode
