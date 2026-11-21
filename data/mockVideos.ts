export type Video = {
  id: string;
  seriesId: string;
  seriesTitle: string;
  episode: number;
  videoUrl: string;
  posterUrl: string;
  likes: number;
};

// Les épisodes 1 à 3 sont gratuits, à partir du 4e le paywall s'affiche.
export const FREE_EPISODES_LIMIT = 3;

export const MOCK_VIDEOS: Video[] = [
  {
    id: 'v1',
    seriesId: 's1',
    seriesTitle: 'Le Dernier Appel',
    episode: 1,
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    posterUrl: 'https://picsum.photos/seed/ohreel-s1/400/600',
    likes: 1240,
  },
  {
    id: 'v2',
    seriesId: 's1',
    seriesTitle: 'Le Dernier Appel',
    episode: 2,
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    posterUrl: 'https://picsum.photos/seed/ohreel-s1/400/600',
    likes: 980,
  },
  {
    id: 'v3',
    seriesId: 's1',
    seriesTitle: 'Le Dernier Appel',
    episode: 3,
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    posterUrl: 'https://picsum.photos/seed/ohreel-s1/400/600',
    likes: 2310,
  },
  {
    id: 'v4',
    seriesId: 's1',
    seriesTitle: 'Le Dernier Appel',
    episode: 4,
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    posterUrl: 'https://picsum.photos/seed/ohreel-s1/400/600',
    likes: 760,
  },
  {
    id: 'v5',
    seriesId: 's2',
    seriesTitle: 'Sang Bleu',
    episode: 1,
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    posterUrl: 'https://picsum.photos/seed/ohreel-s2/400/600',
    likes: 1575,
  },
];
