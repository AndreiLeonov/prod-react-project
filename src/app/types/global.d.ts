declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
    import React from 'react';
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

// объявляем переменную глобально, чтобы с помощью
// new webpack.DefinePlugin({__IS_DEV__: JSON.stringify(isDev)})
// объявить ее глобально и использовать в файле i18n.ts
declare const __IS_DEV__: boolean