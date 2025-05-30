import axios from 'axios';
import { HackerNewsStory, NormalizedArticle } from '../types';

const HN_API_BASE = 'https://hacker-news.firebaseio.com/v0';

export async function fetchHackerNewsArticles(): Promise<NormalizedArticle[]> {
  try {
    // Fetch top stories IDs
    const topStoriesResponse = await axios.get<number[]>(`${HN_API_BASE}/topstories.json`);
    const storyIds = topStoriesResponse.data.slice(0, 20);
    
    // Fetch story details in parallel
    const storyPromises = storyIds.map(id =>
      axios.get<HackerNewsStory>(`${HN_API_BASE}/item/${id}.json`)
    );
    
    const stories = await Promise.all(storyPromises);
    
    return stories.map(response => {
      const story = response.data;
      return {
        id: `hn-${story.id}`,
        title: story.title,
        url: story.url,
        published_at: new Date(story.time * 1000).toISOString(),
        source_id: 'hackernews',
        likes: story.score
      };
    });
  } catch (error) {
    console.error('Error fetching Hacker News articles:', error);
    return [];
  }
}