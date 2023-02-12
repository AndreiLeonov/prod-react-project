import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
    // порядок лоадеров может иметь значение!!! поэтому лучше выносить их в переменные
    // и подключать в том порядке, в каком это необходимо
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')), // т.е. используем модули только для name.modules.scss
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                    },
                }
            },
            'sass-loader',
        ]
    }
    // тк в Реакт используется jsx, необходимо подключить специальный лоадер
    // для работы с jsx, НО тк мы используем typescript нам достаточно этого лоадера
    // тк он умеет обрабатывать jsx. Если бы мы писали на нативном js, нам потребовался бы babel (транспилятор)
    // чтоб транспилировать код в более старый, чтобы он работал во всех браузерах
    // также babel умеет работать и с jsx, но в данном случае нам это не нужно тк
    // наш лоадер это умеет
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/, // исключаем node_modules, т.е. говорим, что это обрабатывать в текущем лоадере не нужно
    }
    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                "plugins": [
                    [
                        "i18next-extract",
                        {
                            locales: ['ru','en'],
                            keyAsDefaultValue: true,
                        }
                    ],
                ]
            }
        }
    }
    return [
        svgLoader,
        fileLoader,
        babelLoader,
        typescriptLoader,
        cssLoader
    ]
}