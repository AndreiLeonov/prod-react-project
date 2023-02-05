import {ResolveOptions} from "webpack";

export function buildResolvers(): ResolveOptions {
    // позволяет не писать расширения при импорте у указанных типов
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}