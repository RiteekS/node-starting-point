$(document).ready(function(){
	$(document).on('click', '.submit', function () { 
		var temp = this.id;
		$.ajax({
			url : 'http://localhost:3001/calculator',
			type: 'GET',
			data: { operation: $('#operation'+temp).val(),
					num1: $('#value'+temp).val(),
					id  : temp
				  },
			datatype: 'json',
			success : function(data){
				$('#result'+temp).val(data.ans);
			}
		});
	});
	
	$('#create_cal').click(function(){
		$.ajax({
			url : 'http://localhost:3001/create',
			type: 'POST',
			data: {},
			datatype: 'json',
			success : function(data){
				var id_no = data.id;
				var i= data.id;
				$("body").append('<div class="row"> <div class="col-xs-2"> <input type="text" class="form-control" placeholder="0" name="value1" id="value'+i+'"> </div><div class="col-xs-1"> </div><div class="col-xs-2"> <select class="form-control" name = "operation" id="operation'+i+'"> <option selected="selected" value="sum">+</option> <option value="subtract">-</option> <option value="multiply">*</option> <option value="divide">/</option> </select> </div> <div class="col-xs-1"> </div><div class="col-xs-1" style="text-align: center;"><button id="'+i+'" class="submit btn btn-info" value="Submit">Submit </button></div> </div><br><div class="row"> </div> <div class="col-xs-3"> </div> <div class="col-xs-2"> <input type="text" class="form-control" placeholder = "0" id="result'+i+'"> </div><br><br><br><br>');
			},
			error: function(err){
			},
		});	
  });
});
