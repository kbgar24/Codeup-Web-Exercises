$(document).ready(function(){	
	console.log("document loaded :)");
	
	$("#btn-new-item").click(function(event){
		event.preventDefault();
		var content = $("#content").val();
		var priority = $("#priority").val();
		var dueDate = $("#due_date").val();
		var data = {
			"content": content,
			"priority": priority,
			"due_date": dueDate
		};
		$.post("todo-json.php", data, function(item){
			console.log(item);
		});
		$("#content").val("");
		$("#priority").val("");
		$("#due_date").val("");
	});

	function getRequest(){
		$("#insertProducts").text("");
		$.get("todo-json.php",function(items){
		  	items.forEach(function(element, index){
               	var status; 
               	var statusImg
               	if (element.completed) {
               		status = "Yes";
               		statusImg = "/img/checkmark_green.png";
               	}
               	else {
               		status = "No";
               		statusImg = "/img/attention_red.png"; 
               	}
               	var elementID = element.id;
               	var buttonID = "button" + elementID;
       	   		var createDate = element.created_at;
               	console.log(createDate);
               	createDate = moment(element.created_at).format('MMMM Do YYYY');
               	console.log(createDate);
           	   	var dueDate = element.due_date;
           	   	console.log(dueDate);
               	dueDate = moment(element.due_date).format('MMMM Do YYYY');
               	console.log(dueDate);
               	$("#insertProducts").append(  
                    $('<tr>', {
                    	class: "spacer"
                    }),
		            $('<td>').text(element.content),
		         	$('<td>').text(createDate),
		            $('<td>').text(element.priority),
		            $('<td>').text(dueDate),
		         	$('<td>').text(element.id).addClass("idClass"), 
		         	$('<td>').html($('<img>',{
		         		src: statusImg,
		         		height: "15px"
	         		})),
		         	$('<td>').html($('<button>',{
	         			class: "btn btn-danger deleteBtn",
	         			text: "Delete",
	         			value: element.id

		         	})),
		         	$('<td>').html($('<button>',{
	         			class: "btn btn-success completeButton",
	         			text: "Completed",
	         			value: element.id
		         	}))
                );
                $('#mainTable').addClass("table-hover");
            });
		});
	};

	$("#btn-show-items").click(function(event){
		event.preventDefault();
		getRequest();
	});

	$("body").on("click", ".deleteBtn",function(){
		event.preventDefault();
		var idValue = $(this)[0].value;
		console.log(idValue);
		var postRequest = "/todo-json.php?id=" + idValue + "&action=delete";
		$.post(postRequest)
		var row = this.closest("tr"); //Clostest will grab the closest row to the button we press.  What a time saver!
		$(row).fadeOut();

        		
			
	});


	$("body").on("click", ".completeButton",function(){
		event.preventDefault();
		var idValue = $(this)[0].value;
		console.log($(this));
		console.log(idValue);
		var postRequest = "/todo-json.php?id=" + idValue + "&action=complete";
		$.post(postRequest)
            .done(function(items){
        		getRequest();
           	})
	});

	
	$("#contentHead").click(function(event){
		event.preventDefault();
		$("#insertProducts").text("");
 		$.get("/todo-json.php?order by=content&direction=up")
            .done(function(data){
           		data.forEach(function(element){
           			var status; 
	               	var statusImg
	               	if (element.completed) {
	               		status = "Yes";
	               		statusImg = "/img/checkmark_green.png";
	               	}
	               	else {
	               		status = "No";
	               		statusImg = "/img/attention_red.png"; 
	               	}
	               	var elementID = element.id;
	               	var buttonID = "button" + elementID;
	               	var createDate = moment(element.created_at).format('MMMM Do YYYY');
	           	   	var dueDate = moment(element.due_date).format('MMMM Do YYYY');
	       
	               	$("#insertProducts").append(  
	                    $('<tr>', {
	                    	class: "spacer"
	                    }),
			            $('<td>').text(element.content),
			         	$('<td>').text(createDate),
			            $('<td>').text(element.priority),
			            $('<td>').text(dueDate),
			         	$('<td>').text(element.id).addClass("idClass"), 
			         	$('<td>').html($('<img>',{
			         		src: statusImg,
			         		height: "15px"
		         		})),
			         	$('<td>').html($('<button>',{
		         			class: "btn btn-danger deleteBtn",
		         			text: "Delete",
		         			value: element.id
			         	})),
			         	$('<td>').html($('<button>',{
		         			class: "btn btn-success completeButton",
		         			text: "Completed",
		         			value: element.id
			         	}))
	                );
	                $('#mainTable').addClass("table-hover");
            	});
			})
            .fail(function(){
                console.log("AJAX request failed");
            })
	});

	$("#createdHead").click(function(event){
		event.preventDefault();
		$("#insertProducts").text("");
 		$.get("/todo-json.php?order by=created_at&direction=up")
            .done(function(data){
           		data.forEach(function(element){
           			var status; 
	               	var statusImg
	               	if (element.completed) {
	               		status = "Yes";
	               		statusImg = "/img/checkmark_green.png";
	               	}
	               	else {
	               		status = "No";
	               		statusImg = "/img/attention_red.png"; 
	               	}
	            	var elementID = element.id;
	               	var buttonID = "button" + elementID;
	               	var createDate = moment(element.created_at).format('MMMM Do YYYY');
	           	   	var dueDate = moment(element.due_date).format('MMMM Do YYYY');
	               	$("#insertProducts").append(  
	                    $('<tr>', {
	                    	class: "spacer"
	                    }),
			            $('<td>').text(element.content),
			         	$('<td>').text(createDate),
			            $('<td>').text(element.priority),
			            $('<td>').text(dueDate),
			         	$('<td>').text(element.id).addClass("idClass"), 
			         	$('<td>').html($('<img>',{
			         		src: statusImg,
			         		height: "15px"
		         		})),
			         	$('<td>').html($('<button>',{
		         			class: "btn btn-danger deleteBtn",
		         			text: "Delete",
		         			value: element.id

			         	})),
			         	$('<td>').html($('<button>',{
		         			class: "btn btn-success completeButton",
		         			text: "Completed",
		         			value: element.id
		         		}))
                	);
            		$('#mainTable').addClass("table-hover");
            	});
			})
            .fail(function(){
                console.log("AJAX request failed");
            })
	});

	$("#priorityHead").click(function(event){
		event.preventDefault();
		$("#insertProducts").text("");
 		$.get("/todo-json.php?order by=priority&direction=up")
            .done(function(data){
           		data.forEach(function(element){
           			var status; 
	               	var statusImg
	               	if (element.completed) {
	               		status = "Yes";
	               		statusImg = "/img/checkmark_green.png";
	               	}
	               	else {
	               		status = "No";
	               		statusImg = "/img/attention_red.png"; 
	               	}
	               	var elementID = element.id;
	               	var buttonID = "button" + elementID;
	               	var createDate = moment(element.created_at).format('MMMM Do YYYY');
	           	   	var dueDate = moment(element.due_date).format('MMMM Do YYYY');
	               	$("#insertProducts").append(  
	                    $('<tr>', {
	                    	class: "spacer"
	                    }),
			            $('<td>').text(element.content),
			         	$('<td>').text(createDate),
			            $('<td>').text(element.priority),
			            $('<td>').text(date),
			         	$('<td>').text(dueDate).addClass("idClass"), 
			         	$('<td>').html($('<img>',{
			         		src: statusImg,
			         		height: "15px"
		         		})),
			         	$('<td>').html($('<button>',{
		         			class: "btn btn-danger deleteBtn",
		         			text: "Delete",
		         			value: element.id

			         	})),
			         	$('<td>').html($('<button>',{
		         			class: "btn btn-success completeButton",
		         			text: "Completed",
		         			value: element.id
			         	}))
	                );
	                $('#mainTable').addClass("table-hover");
            	});
			})
            .fail(function(){
                console.log("AJAX request failed");
            })
	});

	$("#dueHead").click(function(event){
		event.preventDefault();
		$("#insertProducts").text("");
 		$.get("/todo-json.php?order by=due_date&direction=up")
            .done(function(data){
           		data.forEach(function(element){
           			var status; 
	               	var statusImg
	               	if (element.completed) {
	               		status = "Yes";
	               		statusImg = "/img/checkmark_green.png";
	               	}
	               	else {
	               		status = "No";
	               		statusImg = "/img/attention_red.png"; 
	               	}
                  	var elementID = element.id;
	               	var buttonID = "button" + elementID;
	               	var createDate = moment(element.created_at).format('MMMM Do YYYY');
	           	   	var dueDate = moment(element.due_date).format('MMMM Do YYYY');
	               	$("#insertProducts").append(  
	                    $('<tr>', {
	                    	class: "spacer"
	                    }),
			            $('<td>').text(element.content),
			         	$('<td>').text(createDate),
			            $('<td>').text(element.priority),
			            $('<td>').text(dueDate),
			         	$('<td>').text(element.id).addClass("idClass"), 
			         	$('<td>').html($('<img>',{
			         		src: statusImg,
			         		height: "15px"
		         		})),
			         	$('<td>').html($('<button>',{
		         			class: "btn btn-danger deleteBtn",
		         			text: "Delete",
		         			value: element.id

			         	})),
			         	$('<td>').html($('<button>',{
		         			class: "btn btn-success completeButton",
		         			text: "Completed",
		         			value: element.id
			         	}))
	                );
	                $('#mainTable').addClass("table-hover");
            	});
			})
            .fail(function(){
                console.log("AJAX request failed");
            })
	});

	$("#idHead").click(function(event){
		event.preventDefault();
		$("#insertProducts").text("");
			$.get("/todo-json.php?order by=id&direction=up")
		    	.done(function(data){
			    	data.forEach(function(element){
		       			var status; 
		               	var statusImg
		               	if (element.completed) {
		               		status = "Yes";
		               		statusImg = "/img/checkmark_green.png";
		               	}
		               	else {
		               		status = "No";
		               		statusImg = "/img/attention_red.png"; 
		               	}
	                  	var elementID = element.id;
	               		var buttonID = "button" + elementID;
	               		var createDate = moment(element.created_at).format('MMMM Do YYYY');
	           	   		var dueDate = moment(element.due_date).format('MMMM Do YYYY');
		               	$("#insertProducts").append(  
		                    $('<tr>', {
		                    	class: "spacer"
		                    }),
				            $('<td>').text(element.content),
				         	$('<td>').text(createDate),
				            $('<td>').text(element.priority),
				            $('<td>').text(dueDate),
				         	$('<td>').text(element.id).addClass("idClass"), 
				         	$('<td>').html($('<img>',{
				         		src: statusImg,
				         		height: "15px"
			         		})),
				         	$('<td>').html($('<button>',{
			         			class: "btn btn-danger deleteBtn",
			         			text: "Delete",
			         			value: element.id

				         	})),
				         	$('<td>').html($('<button>',{
			         			class: "btn btn-success completeButton",
			         			text: "Completed",
			         			value: element.id
				         	}))
	                	);
	                });
	                $('#mainTable').addClass("table-hover");
            	});
	});

	$("#btn-comp-items").click(function(event){
		event.preventDefault();
		$("#insertProducts").text("");
 		$.get("/todo-json.php?complete=true")
            .done(function(data){
            	data.forEach(function(element){
	       			var status; 
	               	var statusImg
	               	if (element.completed) {
	               		status = "Yes";
	               		statusImg = "/img/checkmark_green.png";
	               	}
	               	else {
	               		status = "No";
	               		statusImg = "/img/attention_red.png"; 
	               	}
               	   	var elementID = element.id;
	               	var buttonID = "button" + elementID;
	               	var createDate = moment(element.created_at).format('MMMM Do YYYY');
	           	   	var dueDate = moment(element.due_date).format('MMMM Do YYYY');
	               	$("#insertProducts").append(  
	                    $('<tr>', {
	                    	class: "spacer"
	                    }),
			            $('<td>').text(element.content),
			         	$('<td>').text(createDate),
			            $('<td>').text(element.priority),
			            $('<td>').text(dueDate),
			         	$('<td>').text(element.id).addClass("idClass"), 
			         	$('<td>').html($('<img>',{
			         		src: statusImg,
			         		height: "15px"
		         		})),
			         	$('<td>').html($('<button>',{
		         			class: "btn btn-danger deleteBtn",
		         			text: "Delete",
		         			value: element.id

			         	})),
			         	$('<td>').html($('<button>',{
		         			class: "btn btn-success completeButton",
		         			text: "Completed",
		         			value: element.id
			         	}))
                	);
                });
            })
            .fail(function(){
                console.log("AJAX request failed");
            })
   	});

	$("#btn-uncomp-items").click(function(event){
		event.preventDefault();
		$("#insertProducts").fadeOut();
		$("#insertProducts").text("");

 		$.get("/todo-json.php?complete=false")
            .done(function(data){
       			data.forEach(function(element){
	       			var status; 
	               	var statusImg
	               	if (element.completed) {
	               		status = "Yes";
	               		statusImg = "/img/checkmark_green.png";
	               	}
	               	else {
	               		status = "No";
	               		statusImg = "/img/attention_red.png"; 
	               	}
               	   	var elementID = element.id;
	               	var buttonID = "button" + elementID;
	               	var createDate = moment(element.created_at).format('MMMM Do YYYY');
	           	   	var dueDate = moment(element.due_date).format('MMMM Do YYYY');
	               	$("#insertProducts").append(  
	                    $('<tr>', {
	                    	class: "spacer"
	                    }),
			            $('<td>').text(element.content),
			         	$('<td>').text(createDate),
			            $('<td>').text(element.priority),
			            $('<td>').text(dueDate),
			         	$('<td>').text(element.id).addClass("idClass"), 
			         	$('<td>').html($('<img>',{
			         		src: statusImg,
			         		height: "15px"
		         		})),
			         	$('<td>').html($('<button>',{
		         			class: "btn btn-danger deleteBtn",
		         			text: "Delete",
		         			value: element.id

			         	})),
			         	$('<td>').html($('<button>',{
		         			class: "btn btn-success completeButton",
		         			text: "Completed",
		         			value: element.id
			         	}))
                	);
                });
            	$("#insertProducts").fadeIn();
            })
            .fail(function(){
                console.log("AJAX request failed");
        	})
    });

});