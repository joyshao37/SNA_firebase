


var  storage = firebase.storage();
var  adRef = storage.ref('images/ad_jetstar.jpeg');
var  picRef = storage.ref('images/photo.php.jpeg');
var  pic2Ref = storage.ref('images/photo.php-2.jpeg');


adRef.getDownloadURL().then(function(url){
   var img = document.getElementById('ad_jetstar');
   img.src = url;
});


picRef.getDownloadURL().then(function(url){
   var img = document.getElementById('photo.php');
   img.src = url;
});


pic2Ref.getDownloadURL().then(function(url){
   var img = document.getElementById('photo.php-2');
   img.src = url;
});



function goUp() {
		

		window.scrollTo(0, 1);

	}




function mouseOver(){


	var p = document.getElementById("header").getElementsByTagName("p");
	for (var i=0; i < p.length; i++) { 
	p[i].mouseOver = function () { this.style.backgroundColor = "#ccffff";};

	}

}


function mouseOut(){


	var p = document.getElementById("header").getElementsByTagName("p");
	for (var i=0; i < p.length; i++) { 
	p[i].mouseOut = function () { this.style.backgroundColor = "#ffffff";};

	}

}


var min = 14;
var max = 20;
function increaseFontSize() {
   // 找出所有的<div>
	var p = document.getElementById("header").getElementsByTagName("p");
    
   // 開始針對找到的<div>迴圈來改變字體
   for(i=0; i<p.length; i++) {
    
      // 先確定有fontSize的屬性
      if(p[i].style.fontSize) {
         var s = parseInt(p[i].style.fontSize.replace("px",""));
      } else {
         var s = 18;
      }
    
      if(s != max) {
         s += 1;
      }
    
      p[i].style.fontSize = s+"px";
   }
}
 
function decreaseFontSize() {
	var p = document.getElementById("header").getElementsByTagName("p");
    
   for(i=0;i<p.length;i++) {
    
      if(p[i].style.fontSize) {
         var s = parseInt(p[i].style.fontSize.replace("px",""));
      } else {
         var s = 16;
      }
    
      if(s != min) {
         s -= 1;
      }
    
      p[i].style.fontSize = s+"px";
   }   
}