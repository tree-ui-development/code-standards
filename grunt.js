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
                output.push(basePath + i);
            });
            
        return output;
    };

    grunt.initConfig({
        concat: {
            dist : {
                src: ((function(){
                    var files = [];
          
                    files = addBasePaths(metas.en.path, metas.en.files);

                    return files;

                })()),
               dest: 'index.html'
            }
        }/*,
        template: {
            dist : {
                src : '_test/file.hogan',
                dest: '_test/out/file.html',
                variables : {
                    content : 'testing output that goes here!!'
                }
            }
        }*/
        /*,
        replace : {
            dist : {
                src : ['_test/test.html'],
                dest : '_test/out/',
                variables : {
                    testing : 'can this be a string?'
                }
            }
        }*/
    });

    // grunt.loadNpmTasks('grunt-replace');
    // grunt.loadNpmTasks('grunt-templater');

    // create default task
    grunt.registerTask('default', 'concat');
    // grunt.registerTask('replaceTest', 'replace');
    //grunt.registerTask('templateRunner', 'template');
};
