import * as path from 'path';
import {ReactI18nPlugin} from "@shopify/react-i18n-webpack-plugin";

const configuration = {
    mode: "production",
    devtool: false,
    // @ts-ignore
    entry: path.resolve(__dirname, 'src', 'App.tsx'),
    output: {
        filename: "./bundle.js",
        // @ts-ignore
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            // @ts-ignore
                            cacheDirectory: process.env.CACHE ? path.resolve(__dirname, '.cache') : null,
                            plugins: [
                                '@babel/plugin-syntax-dynamic-import',
                                // '@shopify/react-i18n/babel',
                            ]
                        }
                    },
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new ReactI18nPlugin(),
    ],
    optimization: {
        namedModules: true,
        namedChunks: true,
        moduleIds: 'named',
        minimize: false
    }
};

export default configuration;
