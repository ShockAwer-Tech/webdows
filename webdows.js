  $(function() {
    $( ".webdow" ).draggable();


    $( ".closeBtn").click(function() {
    	$(this).parent().parent().parent().hide(500);
    })


  });