const Google_API_KEY = 'AIzaSyC9O9BEnIrf-806yPx5JoPYNa4g7eNjnbs';

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEO_API =
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${Google_API_KEY}`;

export const YOUTUBE_SEARCH_API =
    "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SINGLE_VIDEO_API
    = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=AIzaSyC9O9BEnIrf-806yPx5JoPYNa4g7eNjnbs&id=";