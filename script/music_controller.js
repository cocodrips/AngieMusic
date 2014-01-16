(function() {
    var change_data;

    $(function(){
        $("#send-text").on('click', function(e){
            var contents = $("#contents").val();
            change_data(contents);
        });

    });

    change_data = function(contents){
        new Analyze(contents);
    };
}).call(this);