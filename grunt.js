// grunt.js for building the html combined
module.exports = function(grunt) {

    var metas = {
        en: {
            path: 'sections/en/',
            files: ['_front_matter.txt', 'general.html', 'markup.html', 'css.html', 'javascript.html', 'performance.html', 'browsers.html', 'seo.html', 'codeReviews.html', 'appendices.html', 'revisionHistory.html']
        }
    }
    function addBasePaths(basePath, fileArray){
        var output = [];
            fileArray.forEach(function(i){
                // output.push(basePath.replace('{pref}', pref) + i);
                output.push(basePath + i);
            });
        return output;
    };

    grunt.initConfig({
        concat: {
            src: ((function(){
                var files = [];

                files = addBasePaths(metas.en.path, metas.en.files);

                return files;

            })()),
           dest: 'index.html'
        }
    });

    // create default task
    grunt.registerTask('default', 'concat');
};
