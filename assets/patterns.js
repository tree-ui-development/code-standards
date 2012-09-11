var hmm=".ours";if(!(location.protocol=="file:"||location.hostname=="repo.molecular.com")){jQuery("<style>"+hmm+"{display:none}</style>").appendTo(document.body);jQuery(function(){$(hmm).remove()})};

function init_toc() {
	var toc = document.getElementById('toc');
	var content = document.getElementById('content');
	var hx = content.getElementsByTagName('*');
	var hx_len = hx.length;
	var anchor, tag, the_text;

	for (var i = 0, j = hx_len; i < j; i++) {
		tag = hx[i].tagName.toLowerCase();

		if (tag === 'h1' || tag === 'h2' || tag === 'h3' || tag === 'h4' || tag === 'h5') {
			the_text = $.trim(hx[i].innerHTML);
			anchor = '_' + the_text.replace(/\s+|\-/g, '_').replace(/[^A-Z0-9_]/gi, '').replace(/_+/g, '_').toLowerCase();

			hx[i].id = anchor;
			hx[i].innerHTML += '<a href="#' + anchor + '" class="anchor_link" title="Permalink"></a>';
			toc.innerHTML += '<li class="' + tag + '"><a href="#' + anchor + '">' + the_text + '</a></li>';
		}
		
		if (tag === 'h1') {
			hx[i].innerHTML += '<a href="#" class="backAnchor" title="back to top">Back to top</a>';
		}
	}

	toc.style.display = 'block';
}

function init_show_more() {
	if (!$('a.show_more').length) {
		return;
	}

	$('a.show_more').click(function() {
		var div = $(this).parents('table:first').next('div');

		if (div.is(':hidden')) {
			div.slideDown('fast');
			$(this).text('Hide example');
		}
		else {
			div.slideUp('fast');
			$(this).text('View example');
		}

		this.blur();
		return false;
	});
}

function init_patterns() {
	init_toc();
	init_show_more();
	
	
	$('a.backAnchor').live('click',function(){
		//window.scrollTo(0,0);
		//return false;
	})
	
	
	$.ajax({ 
	    url: 'http://repo.molecular.com/svn/xddev/Starting_Template/index.html', 
        dataType : 'text', 
        success : function(d,stat,xhr){ 
            $('<textarea>').addClass('brush:html').insertAfter('h6:contains(Template)').text(d);
            
            SyntaxHighlighter.highlight('textarea')
        }
    });
 	
	
	
}