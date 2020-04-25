export interface Task {
    id: string;
    title: string;
	episode_id: number;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: Date;
    characters: [];
    planets: [];
    starships: [];
    vehicles: [];
    species: [];
    created: Date;
	edited: Date;
	url: string;
}
