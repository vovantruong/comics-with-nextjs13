export interface genresProps {
    description: string,
    id: string,
    name: string
}

export interface comicsProps {
    thumbnail: string,
    title: string,
    id: string,
    is_trending: boolean,
    short_description: string,
    lastest_chapters: {
        id: number,
        name: string,
        updated_at: string
    }[],
    genres: {
        id: string,
        name: string
    }[],
    other_names: any,
    status: string,
    total_views: string,
    total_comments: string,
    followers: string,
    updated_at: string,
    authors: string,
}

export interface topComicsProps {
    page?: number
    limit?: number
    status?: 'all' | 'completed' | 'updating'
    type?: 'all' | 'daily' | 'weekly' | 'monthly' | 'chapter' | 'follow' | 'comment' | string
}