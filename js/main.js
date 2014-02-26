/**
 * main.js
 *
 * Copyright (c) 2013-2014 amphisbe. All rights reserved.
 *
 *
 */
$(function($) {

	$('#box-range-slider').slider('enable');
	$('#box-range-slider').slider({
		width: 400,
		showTip: true,
		rule: [0,'|',25,'|',50,'|',75,'|',100],
		onChange: function(n, o){
			// alert(n);
		}
	});
	// alert(1);
});


