//This file is autogenerated. See modules.json and autogenerator.py for details

/*
    get_iwlinks.js

    MediaWiki API Demos
    Demo of `Iwlinks` module: Get the interwiki links from a given page.

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    format: "json",
    prop: "iwlinks",
    titles: "Albert Einstein"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var pages = response.query.pages;
        for (var p in pages) {
            console.log(pages[p].iwlinks);
        }
    })
    .catch(function(error){console.log(error);});
