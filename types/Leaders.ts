export interface City {
    name: string;
    country: string;
    title: string;
    country_code: string;
}
export interface User {
    id: string;
    display_name: string;
    is_hireable: boolean;
    photo: string;
    is_email_public: boolean;
    email: string;
    website: string;
    city: City;
    username: string;
}

export interface Language {
    name: string;
    total_seconds: number;
    percent?: number;
}

export interface Os {
    name: string;
    total_seconds: number;
    percent?: number;
}

export interface Editors {
    name: string;
    total_seconds: number;
    percent?: number;
}

export interface Ranking {
    human_readable_daily_average: string;
    human_readable_total: string;
    languages_html: string;
    languages: Language[];
}

export interface Leader {
    user: User
    running_total: Ranking;
    rank: number;
}

export interface Range {
    end_date: string;
    end_text: string;
    name: string;
    start_date: string;
    start_text: string;
    text: string;
}

export interface Filter {
    page: number;
    total_pages: number;
    country_code?: string;
    language?: string;
    range?: Range;
}
export interface State {
    state: StoreState
}

export interface Country {
    name: string;
    region: string;
}

export interface Summary {
    human_readable_daily_average: string;
    human_readable_total: string;
    languages: Language[];
    operating_systems: Os[];
    editors: Editors[];
}

export interface StoreState {
    leaders: Leader[];
    filters: Filter;
    country?: Country;
    user?: User;
    summary?: Summary;
}
