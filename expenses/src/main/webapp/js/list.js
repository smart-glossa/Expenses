function addExpense(){
	var html="";
	html += "<center>";
	html += "<table>";
	html += "<tr>";
	html += "<td>Category<span>*<\/span>:<\/td>";
	html += "<td><input type=\"text\" id=\"category\" placeholder=\"Ex:Salary\"><\/td>";
	html += "<\/tr>";
	html += "<tr>";
	html += "<td>Amount<span>*<\/span>:<\/td>";
	html += "<td><input type=\"text\" id=\"amt\" placehloder=\"Ex:100\"><\/td>";
	html += "<\/tr>";
	html += "<tr>";
	html += "<td>Date<span>*<\/span>:<\/td>";
	html += "<td><input placeholder=\"Date\" class=\"textbox\" type=\"text\" onfocus=\"(this.type='date')\"  id=\"date\"><\/td>";
	html += "<\/tr>";
	html += "<tr>";
	html += "<td><\/td>";
	html += "<td><input type=\"submit\" value=\"Save\" id=\"add\"><\/td><\/tr>";
	html += "<\/table>";
	html += "<\/center>";
	$('.Exp')[0].innerHTML = html;
}