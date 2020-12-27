import axios from "axios";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const storyTypeUrl = type => `${baseUrl + type}stories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStoryIds = async storyType => {
    return (await axios.get(storyTypeUrl(storyType))).data;
};

export const getStory = async storyId => {
    return selectFields((await axios.get(`${storyUrl + storyId}.json`)).data);
};

const selectFields = ({id, by, url, time, type, score, title, descendants}) => ({
    id,
    by,
    url,
    time,
    type,
    score,
    title,
    descendants
});
