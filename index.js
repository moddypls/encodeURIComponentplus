/*

This work is covered by the following license: GPLv3

*/

function fullURIencode(user_input)
{
    const uri = str => encodeURIComponent(str).replace(/./g,c=>'%'+c.charCodeAt(0).toString(16));

    let encoded = decodeURIComponent(uri(user_input));

    const grouper = /(?:%[a-f0-9][a-f0-9])*([^%]*)/gi;

    let clear_array = [...encoded.matchAll(grouper)]
        .map(el=>el[1])
            .filter(el=>el!=="");

    clear_array.forEach(el=>encoded=encoded.replace(new RegExp(rgxCleaner(el),"i"),uri(el)));

    return encoded;
}

//The following code is a transformed version of a work (found here: https://github.com/sindresorhus/escape-string-regexp), which is using the MIT license.

const unsafe_chars = /[|\\{}()[\]^$+*?.-]/g;

function rgxCleaner(regex_str)
{
	if(typeof regex_str!=="string") throw new TypeError("Input for rgxCleaner has to be a string");

	return regex_str.replace(unsafe_chars, "\\$&");
}
