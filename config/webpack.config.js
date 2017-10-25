/** Stolen from Create-React-App Config **/
const path = require( 'path' );
const fs = require( 'fs' );
const url = require( 'url' );

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync( process.cwd() );
const resolveApp = relativePath => path.resolve( appDirectory, relativePath );

/** /Stolen from Create-React-App Config **/

module.exports = env => {
	const sourcemap = ( 'dev' === env ) ? 'cheap-module-source-map' : 'none';
	return {
		devtool: sourcemap,
		entry: [
			resolveApp( 'config/polyfill.js' ),
			resolveApp( 'src/index.js' )
		],
		output: {
			path: resolveApp( 'build' ),
			filename: 'index.js',
			libraryTarget: 'window',
			devtoolModuleFilenameTemplate: info =>
			path.resolve( info.absoluteResourcePath )
		},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}

	};
};
