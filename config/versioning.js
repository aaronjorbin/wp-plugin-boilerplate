const fs = require( 'fs' );
const packagejson = JSON.parse( fs.readFileSync( 'package.json', 'utf8' ) );
const namespace = packagejson.namespace.join( '\\' );
let version = 0;
if ( fs.existsSync( './version.php' ) ) {
	const currentFile  = fs.readFileSync( './version.php', 'utf8' );
	version = parseInt( currentFile.match( /\/\/ (\d+)/g )[0].split( ' ' )[1]);
	version++;
} else {
	version = 1;
}

console.log( `Updating version from ${version - 1} to ${version}` );

const template = `<?php // ${version}

namespace ${namespace};

if ( DEFINED( 'WP_DEBUG' ) && WP_DEBUG ) {
	define( __NAMESPACE__ . '\\VERSION', time() );
} else {
	define( __NAMESPACE__ . '\\VERSION', '${version}' );
}
`;

fs.writeFileSync( './version.php', template, 'utf8' );
