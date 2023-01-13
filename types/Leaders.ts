export interface City {
    name: string;
    title: string;
    country_code: string;
}
export interface User {
    display_name: string;
    is_hireable: boolean;
    photo: string;
    city: City
}

export interface Ranking {
    human_readable_daily_average: string;
    human_readable_total: string;
    languages_html: string;
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

export interface StoreState {
    leaders: Leader[];
    filters: Filter;

}
