	function update(value){
		document.getElementById("textbox").value += value;
	}
	
	function calculate(){
		document.getElementById("textbox").value = eval(document.getElementById("textbox").value);
	}
	
	function reset(){
		document.getElementById("textbox").value = '';
	}