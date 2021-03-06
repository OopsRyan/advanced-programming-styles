// wrap console.log for convenience
var log = console.log.bind(console)

var imageFromPath = function(path){
	var img = new Image()
	img.src = path
	return img
}

// for debug, currently pause the game
var enableDebugMode = function(enable) {
	if (!enable) {
		return 
	}

	window.paused = false
	window.addEventListener('keydown', (event) => {
		var k = event.key

		if (k == 'p') {
			// pause
			window.paused = !window.paused
		}
	})

	document.querySelector('#id-input-speed').addEventListener('input', (event) => {
		var input = event.target
		log(input.value)
		window.fps = Number(input.value)

	})
}

// detect if two rectangles intersect
// a is the object that always moves
// b is the object that always be still
var rectIntersect = function(still_object, moving_object) {
	var o = still_object
	var b = moving_object
	if ((b.y+b.height >= o.y && b.y <= o.y+o.height) && (b.x+b.width >= o.x && b.x <= o.x+o.width)) {
		return true
	} else {
		return false	
	}
}
