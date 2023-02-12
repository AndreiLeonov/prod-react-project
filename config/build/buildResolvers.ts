import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    // позволяет не писать расширения при импорте у указанных типов
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true, // абсолютные пути в приоритете
        modules: [
            options.paths.src,
            'node_modules',
        ],
        mainFiles: ['index'], // главный файл (для каждого модуля)
        alias: {},
    };
}
