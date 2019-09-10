import axios from "axios";

// configure axios
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "48fafd941b44fdf8a121b326ea947c33",
    language: "en-US"
  }
});
// no absolute url use relative url like this.
// api.get("tv/popular");

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  popular: () => api.get("movie/popular"),
  upcoming: () => api.get("movie/upcoming"),
  //   append_to_response is provided from movidedb api to load images or videos
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),

  // term should be uri encoded suggested by api doc.
  search: term =>
    api.get("search/movie", {
      params: { query: encodeURIComponent(term) }
    })
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  seasonDetail: (tvId, seasonNumber) =>
    api.get(`tv/${tvId}/season/${seasonNumber}`),
  search: term =>
    api.get("search/tv", {
      params: { query: encodeURIComponent(term) }
    })
};

export const collectionApi = {
  collectionDetail: id =>
    api.get(`collection/${id}`, {
      params: {
        append_to_response: "videos"
      }
    })
};
