function dis(val) 
		{
			document.getElementById("result").value+=val;
		}
		function solve() 
		{
			let x = document.getElementById("result").value;
			let y = eval(x);
			if(y==undefined)
			{
				document.getElementById("result").value = "";
				alert("Enter some text before press =");
			}
			else
			{
			document.getElementById("result").value = y;}
		}
		function clr() 
		{ 
			document.getElementById("result").value = ""
		};

		var myVar;
//loader
	function myFunction() {
  		myVar = setTimeout(showPage, 3000);
	}

	function showPage() {
  		document.getElementById("loader").style.display = "none";
  		document.getElementById("myDiv").style.display = "block";
	}