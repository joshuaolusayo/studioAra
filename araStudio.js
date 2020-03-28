var image = document.getElementById("img1");
var imageArray = [ "images/img6.jpg", "images/img5.jpg", "images/img9.jpg", "images/guitr.jpg" ];

function changeImg() {
	currentPic = image.getAttribute( "src" );
	currentPicIndex = imageArray.indexOf( currentPic );
	currentPicIndex++;
	if ( currentPicIndex >= imageArray.length ) {
		currentPicIndex = 0;
	}
	image.setAttribute( "src", imageArray[ currentPicIndex ] );
}

function leftArrow() {
	currentPic = image.getAttribute( "src" );
	currentPicIndex = imageArray.indexOf( currentPic );
	if ( currentPicIndex <= 0) {
		currentPicIndex = imageArray.length - 1;
	}else{
		currentPicIndex--;
	}
	image.setAttribute( "src", imageArray[ currentPicIndex ] );
}

function rightArrow() {
	currentPic = image.getAttribute( "src" );
	currentPicIndex = imageArray.indexOf( currentPic );
	currentPicIndex++;
	if ( currentPicIndex >= imageArray.length ) {
		currentPicIndex = 0;
	}
	image.setAttribute( "src", imageArray[ currentPicIndex ] );
}
setInterval( changeImg, 5000 );

function subscribe4m() {
	document.getElementById("subscribe4m").onsubmit = function() {
		if (document.getElementById("email").value == "") {
			alert( "Please, enter your email address" );
			return false;
		}
	}
}

window.onload = function() {
	subscribe4m();
}