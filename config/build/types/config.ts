import webpack from "webpack";

// export type BuildMode = 'production' | 'development';
export type BuildMode = webpack.Configuration['mode']

export interface BuildPaths {
    entry: string; // путь до энтри поинта
    build: string; // путь до папки с билдом
    html: string // путь до файла index.html
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}