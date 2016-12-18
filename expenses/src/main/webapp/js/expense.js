$(document).ready(function(){
	$('#submenu').hide();
})
$(document).on('click','#add',function(){
	var category = $('#category').val();
	var amount = $('#amt').val();
	var date = $('#date').val();
	if(category ===""){
		$("#category").focus().css("outline-color","red");
		return false;
	}
	if(amount ===""){
		$("#amt").focus().css("outline-color","red");
		return false;
	}
	if(date ===""){
		$("#date").focus().css("outline-color","red");
		return false;
	}
	
	var url = "http://localhost:8080/expenses/expense?operation=addExpense&category="+ category +"&amount="+ amount +"&date="+ date;
	$.ajax({
		url:url,
		type:'POST'
	})
	.done(function(result){
		//alert(result);
		var res = JSON.parse(result);
		if(res.status == "1"){
			alert("Successfully Added");
			$('#category').val("");
			$('#amt').val("");
			$('#date').val("");
		}
	})
	.fail(function(result){
		var res = JSON.parse(result);
		if(res.status == "0"){
			alert("Error while Adding");
		}
	})
	
}).on('click','#sta',function(){
	$('#submenu').toggle();
}).on('keypress','#amt',function(e){
	if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#msg").html("Numbers Only").show().fadeOut(3000);
               return false;
    }

}).on('keypress','#category',function(event){
	var inputValue = event.which;
    // allow letters and whitespaces only.
    if(!(inputValue >= 65 && inputValue <= 122) && (inputValue != 32 && inputValue != 0 && inputValue != 13)) { 
        $("#msg").html("Alphabets only").show().fadeOut(3000);
        event.preventDefault(); 
    }
})
function getExpenseByDate(){
	
}