<?php
/*
Plugin Name: Jorbin's Plugin
Description: A Boilerplate
Author: Aaron Jorbin
*/

namespace Jorbin\Plugin;

require( 'version.php' );

add_action( 'wp_enqueue_scripts', function(){
	wp_enqueue_script( 'jorbin_plugin', plugins_url( 'build/index.js', __FILE__ ), array( 'jquery' ), constant( __NAMESPACE__ . '\\VERSION' ) );
});
