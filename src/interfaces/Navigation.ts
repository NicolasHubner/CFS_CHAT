export interface IParams {
    name?: string;
    isGroup?: boolean;
    screen?: string;
}

export interface INavigation {
    [x: string]: any;
    reset(): unknown;
    goBack(): void;
    canGoBack(): boolean;
    navigate: (pathd: string, params?: IParams) => void;
}
