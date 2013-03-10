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
	}
	$$("#sponsors") { 
    move_to('..', 'bottom');
	}
}

