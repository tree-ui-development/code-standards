# Roundarch Isobar Github Standards Page

This repo contains the published Roundarch Isobar Front End Coding Standard's and Guidelines page.

## Please Update Your Bookmarks

It is important that anyone who follows these standards note that as of mid-September 2012, the [old link](http://na.isobar.com/standards) has been retired in favor of these new Github-hosted version of the documents. 

> **New Link:** [Roundarch Isobar Front End Code Standards & Guidelines](http://isobar-idev.github.com/code-standards)

The Roundarch Isobar Front End Code Standards & Guidelines document is a living document that has many changes on the way. We're also going to be making some subtle changes to the Github repo structure so please keep your eyes open.

### Building this Page (GH-Pages branch) ###

> *last update: September 20, 2012*

The Standards Doc is currently published via Github pages, which executes a "live" [Jekyll](http://jekyllrb.com/) build. The content is however in transition, so the files don't live where Jekyll expects to find them. We currently are working on restructuring the whole document, so the content still lives where it used to:

    ~/sections/en/*

We execute a `grunt.js` process which concatenates the files together into `index.html`, which is then processed and wrapped by Jekyll from the template in `_layouts/main.html`.

## Our Own Medicine

> A note about performance optimization: Currently we're not minifying or concatenating our CSS and JS on the live version of these pages. This will change in the near future.

