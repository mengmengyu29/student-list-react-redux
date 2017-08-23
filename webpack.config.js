// https://doc.webpack-china.org/configuration/

const path = require('path');

module.exports = {
 	entry	: "./app/main.js" ,
 	output	: {
		path 		: path.resolve(__dirname, "./dist"),
		filename	: "bundle.js",
	},
	module : {
		rules : [
			{
				test : /\.js$/ ,
				include: [
					path.resolve(__dirname, "app")
				],
				exclude: [
					path.resolve(__dirname, "node_modules")
				],
				loader: "babel-loader" ,
				options: {
					presets: ["es2015" , "react"] ,
					plugins : ["babel-plugin-transform-object-rest-spread"]
				}
			}
		]
	},
	watch : true
};