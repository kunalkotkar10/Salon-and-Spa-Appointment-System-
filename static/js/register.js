var x1 = document.getElementById("prime1");
	var x2 = document.getElementById("prime2");
	var y1 = document.getElementById("regular1");
	var y2 = document.getElementById("regular2");
	var z = document.getElementById("btn");

	function regular() {
		x1.style.left = "-800px";
		x2.style.left = "-400px"
		y1.style.left = "50px";
		y2.style.left = "450px"
		z.style.left = "110px";
	}

	function prime() {
		x1.style.left = "50px";
		x2.style.left = "450px";
		y1.style.left = "950px";
		y2.style.left = "1350px";
		z.style.left = "0px";
	}