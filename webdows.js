  $(function() {
    $( ".webdow" ).draggable();


    $( ".closeBtn").click(function() {
    	$(this).parent().parent().parent().hide(500);
    });

    $( ".minimizeBtn").click(function() {
    	$(this).parent().parent().parent().find("#content").hide(400);
    	$(this).parent().parent().parent().height(65);

    })

    $( ".maximizeBtn").click(function() {
    	$(this).parent().parent().parent().find("#content").show(400);
    	$(this).parent().parent().parent().height(310);

    })


  });