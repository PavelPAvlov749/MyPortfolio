const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


//BABEL 
require("@babel/core").transformSync("code", {
    presets: ["@babel/preset-typescript"],
    filename: 'script.ts',
  });
  require("@babel/core").transformSync("code", {
    presets: ["@babel/preset-react"],
  });

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
    mode: "development",
    entry: ["./index.js","./Components/About.jsx"],
    optimization : optimization(),
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
                    to : path.resolve(__dirname,"dist")
                }
            ]
        })
      
    ],
    output : {
        filename : "bundle.js",
        path : path.resolve(__dirname,"dist")
    },
    devServer : {
        port : 8080,
        hot : isDevMode
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
                test : /\.(jpg|png|gif|svg)$/i,
                use : [
                    {
                        loader : "file-loader"
                    }
                ]
            },
            {
                test : /\.(jsx)$/i,
                use : {
                    loader : "babel-loader",
                    options : {
                        presets : ['@babel/preset-react']
                    }
                }
            }
          
        ]
    }

}