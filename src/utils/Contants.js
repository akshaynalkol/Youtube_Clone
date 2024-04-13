const Google_API_KEY = 'AIzaSyAGr445Tqocn-DGDqs0-2ZvF-IWhUaK9TQ';

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEO_API =
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${Google_API_KEY}`;

export const YOUTUBE_SINGLE_VIDEO_API
    = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&type=video&key=${Google_API_KEY}&id=`;

export const YOUTUBE_CHANNEL_API =
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${Google_API_KEY}&id=`;

export const YOUTUBE_SEARCH_API =
    "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_VIDEO_API =
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&regionCode=IN&key=${Google_API_KEY}&q=`;