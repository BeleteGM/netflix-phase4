API_KEY= process.env.React_API_key;
const Request={
    fetchTrending: `/trending/movie/day?api_key=${API_KEY}&language=en-US`,
     NowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
     popular :`/movie/popular?api_key=${API_KEY}language=en-US&page=1`,
     TOPrated: `/movie/top_rated?api_key=${API_KEY}language=en-US&page=1`,
     upcoming: `/movie/upcoming?api_key=${API_KEY}language=en-US&page=1`
}
export default Request;
