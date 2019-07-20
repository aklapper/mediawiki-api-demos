//This file is autogenerated. See modules.json and autogenerator.py for details

/*
    get_alltransclusions.js

    MediaWiki API Demos
    Demo of `Alltransclusions` module: Get three unique pages in the main namespace which contain transclusions.

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    format: "json",
    list: "alltransclusions",
    atunique: "1",
    atnamespace: "0",
    atlimit: "3"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var transclusions = response.query.alltransclusions;
        for (var t in transclusions) {
            console.log(transclusions[t].title);
        }
    })
    .catch(function(error){console.log(error);});
