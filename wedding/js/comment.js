function postReply(commentId) {
                $('#commentId').val(commentId);
                $("#name").focus();
            }

            $("#submitButton").click(function () {
                var str = $("#frm-comment").serialize();
				
				if($('#name').val() == ''){
					alert('Sila isikan nama!');
					$("#name").focus();
					return false;
				}

				if (!$.trim($("#comment").val())) {
					alert('Sila isikan ucapan anda!');
					$("#comment").focus();
					return false;
				}

                $.ajax({
                    url: "comment-add.php",
                    data: str,
                    type: 'post',
                    success: function (response) {
                        var result = eval('(' + response + ')');
                        if (response){
                        	alert("Komen telah dihantar !");
                            $("#name").val("");
                            $("#comment").val("");
                            $("#commentId").val("");
                     	   listComment();
                        } else {
                            alert("Failed to add comments !");
                            return false;
                        }
                    }
                });
            });
            
            $(document).ready(function () {
				listComment();
            });

            function listComment() {
                $.post("comment-list.php",
				function (data) {
					var data = JSON.parse(data);
					
					var comments = "";
					var replies = "";
					var item = "";
					var parent = -1;
					var results = new Array();

					var list = $("<ul class='outer-comment'>");
					var item = $("<li>").html(comments);

					for (var i = 0; (i < data.length); i++) {
						var commentId = data[i]['ied_id'];
						parent = data[i]['ied_parent_id'];

						if (parent == "0"){
							comments = "<table width='100%' class='text-left'>"+
							"<tr><td style='font-size: 12px;'><span style='font-style: italic;'>from</span><span style='color: #007bff; font-weight:bold;'> " + data[i]['ied_sender_name'] + "</span><span style='font-style: italic;'>at</span> <span style='color: #007bff; font-weight:bold;'>" + data[i]['ied_date'] + "</span></td></tr>"+
							"<tr><td>" + data[i]['ied_comment'] + "</td></tr>"+
							"<tr><td><span style='float: right; color: #007bff;'><a class='btn-reply' style='cursor:pointer;' onClick='postReply(" + commentId + ")'>Reply</a></span></td></tr><tr><td><hr /></td></tr>"+
							"</table>";

							var item = $("<li>").html(comments);
							list.append(item);
							var reply_list = $('<ul>');
							item.append(reply_list);
							listReplies(commentId, data, reply_list);
						}
					}
					$("#output").html(list);
				});
            }

            function listReplies(commentId, data, list) {
                for (var i = 0; (i < data.length); i++){
                    if (commentId == data[i].ied_parent_id){
                        var comments = "<table width='100%' class='text-left'>"+
                        "<tr><td style='font-size: 12px;'><span style='font-style: italic;'>from</span><span style='color: #007bff; font-weight:bold;'> " + data[i]['ied_sender_name'] + "</span><span style='font-style: italic;'>at</span> <span style='color: #007bff; font-weight:bold;'>" + data[i]['ied_date'] + "</span></td></tr>"+
                        "<tr><td>" + data[i]['ied_comment'] + "</td></tr>"+
                        "<tr><td><span style='float: right; color: #007bff;'><a class='btn-reply' style='cursor:pointer;' onClick='postReply(" + commentId + ")'>Reply</a></span></td></tr><tr><td><hr /></td></tr>"+
						"</table>";
					   
                        var item = $("<li>").html(comments);
                        var reply_list = $('<ul>');
                        list.append(item);
                        item.append(reply_list);
                        listReplies(data[i].ied_id, data, reply_list);
                    }
                }
            }