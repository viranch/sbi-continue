/*
Author: Viranch Mehta
Email: email@viranch.me
*/

// simulate the click on the 'Continue to login' button

// Ideal would be injecting `$('a[tabindex="4"]').click()` but jquery inside chrome extn is a pain :(
var inject = '(' + function() { fnShowContent('errorCode', 'english'); } + ')();';

var script = document.createElement('script');
script.textContent = inject;
(document.head||document.documentElement).appendChild(script);
