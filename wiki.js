$(document).ready(function() {



    $("#submit").click(function(event) {
        event.preventDefault();
        var searchString = document.getElementById("inputValue").value;
        var apiEndpoint = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchString + "&format=json&utf8=1"


        $.ajax({
            url: apiEndpoint,
            data: searchString,
            dataType: 'json',
            type: 'POST',
            // headers: { 'Api-User-Agent': 'Example/1.0' },
            success: function(data) {
                $('#divTitle')
                var dataStr = JSON.stringify(data);
                var response = data.query.search;
                if (dataStr.includes(searchString)) {
                    for (var i = 0; i <= response.length - 1; i++) {
                        var html = '<div class="well"><a href="https://en.wikipedia.org/wiki/' + data.query.search[i].title + '"target="_blank"><h3>' + data.query.search[i].title + '</h3></a><p>' + data.query.search[i].snippet + '</p></div>';
                        $('#articles').append(html);
                    }
                }
                //document.getElementById('unList').appendChild("<li>" + data.query.search[0].title + "</li>");
            }
        });
    });
});
