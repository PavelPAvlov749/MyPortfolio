const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


//BABEL 

// Check if dev mode active
const isDevMode = process.env.NODE_ENV === "development"

const optimization = () => {
    const config = {
        splitChunks : {
            chunks : "async"
        }
    }
    if(!isDevMode){
        config.minimizer = [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    }
    return config
}


module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "production",
    entry: ["./index.jsx",],
    optimization : optimization(),
    resolve : {
        extensions : ['.ts,','.js','.tsx','.jsx']
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: !isDevMode
            }
        }),
        new MiniCssExtractPlugin({
            chunkFilename : "[name].[contenthash].css"
        }),
        new TerserPlugin(),
        new CopyPlugin({
            patterns : [
                {
                    from : path.resolve(__dirname,"./src/Assets/Icons"),
                    to : path.resolve(__dirname,"build")
                },
                {
                    from : path.resolve(__dirname,"./src/Assets"),
                    to : path.resolve(__dirname,"build")
                }
            ]
        })
      
    ],
    devtool : "inline-source-map",
    output : {
        filename : "bundle.js",
        path : path.resolve(__dirname,"build")
    },
    devServer : {
        port : 8080,
        hot : true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use : [{
                    loader : MiniCssExtractPlugin.loader,
                },'css-loader']
            },
            {
                test: /\.less$/i,
                use : [{
                    loader : MiniCssExtractPlugin.loader,
                },'css-loader','less-loader']
            },
            {
                test : /\.(jpg|png|gif|svg|jpeg)$/i,
                type : "asset/resource"
            },
            {
                test : /\.(jsx|js)$/i,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader",
                    options : {
                        presets : ["@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader'
            },
            {
                test : /\.(gltf|glt|bin|glb)$/,
                type : "asset/resource"
                
            }
    ]
    }
    

}