$(document).ready(function() {
//need to pass in url, the header IDs, to be able to parse
// 	$.ajax({
//     type: 'GET',
//     url: "https://api.parse.com/1/classes/NewsItem",
//     headers: {
//         "X-Parse-Application-Id": "1k8fmz6SrGQsGWnDL7jW7dANuxFZaZ2etBPGiPZg",
//         "X-Parse-REST-API-Key":"yyqodBmipT6PzfaqDqlkkIXKk7qjdyu4mdOKs5xz"
//     }

// }).done(function(data) { 
//     $("body").append(data.title);
// });
// });

// 	$.get("https://api.parse.com/1/classes/NewsItem", function( data ) {
//   $( "body" )
//     .append( "Name: " + data.name ) // John
//     .append( "Time: " + data.time ); //  2pm
// }, "json" );
$.ajax('https://api.parse.com/1/classes/NewsItem', 
  {
    beforeSend: function(request) {
      request.setRequestHeader('X-Parse-Application-Id', '1k8fmz6SrGQsGWnDL7jW7dANuxFZaZ2etBPGiPZg');
            request.setRequestHeader('X-Parse-REST-API-Key', 'yyqodBmipT6PzfaqDqlkkIXKk7qjdyu4mdOKs5xz');
        }
    }
).done(function(data) {
	console.log(data.results);
    console.log(data.results.length);
    var stuff = data.results.length;

    for (i = 0; i < stuff; i++) {
	$('.newsfeed').append('<h1>' + data.results[i].title + '</h1>');
	$('.newsfeed').append('<div>' + data.results[i].body + '</div>');
}
});
});

// angular.module('apper').controller('FriendController',
//  function($scope, friendService){
// 	//Everything happens here:
// 	$scope.test = "Hello World";
// 	$scope.scender = false;
// 	$scope.sorter = 'name';
// 	// $.getJSON('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json', function(myJsonDataFromServer){
// 	// 	$scope.friends = myJsonDataFromServer.results;
// 	// 	$scope.$apply(function(){
// 	// 		$scope.friends = my.results;
// 	// 	});
// 	// });
// friendService.getFriends()
// 		.success(function(data){
// 			$scope.friends = data.results;
// 			$scope.friendName = friends.name;
// 		});

// });