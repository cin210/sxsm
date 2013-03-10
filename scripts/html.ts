# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()


  add_assets()

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts
	
	
	
	$$("#main"){
    move_to('../..', 'top');

		inject_top('<div id="navi">
		  <a href="#main" class="nav_button">Top</a>
		  <a href="#sponsors" class="nav_button">Bot</a>
			</div>');
	}
	
	$$(".primary-links"){
	  move_to('../..', 'top');
	}
	$$(".notice"){
	  move_to('../../../../..', 'top')
	}

	$$("#top"){
	  move_to('../..', 'top');
	}
	
	$$(".shortcuts"){
	  remove()
	}
	$$("#sponsors") { 
    move_to('..', 'bottom');
	}
	$$("a.logo"){
	  move_to("../../..", "top")
 	}
	$$('#search'){

	inject_after('<div id="moovweb_plug">Transformed in real time by <a href="http://www.moovweb.com">Moovweb</a></div>');
	}
}

