$("new-cat").on("submit", function(event){
  event.preventDefault();
  makeResults();

var catList = $('#cats');

var ajax = $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
  .done(function(data) {
    console.log(data)
    var catsTwo = JSON.parse(data);
    var catList = document.getElementById('cats');
    console.log(catsTwo);
    for(i = 0; i < catsTwo.length; i++) {
      var catNames = document.createElement('li');
      catNames.innerHTML = catsTwo[i].name + " - " + catsTwo[i].note;
      console.log(catNames);
      catList.append(catNames);   
    }
    
});

    var newList = document.CreateElement('li');
    var catname = ('cat' + 'name').val();
    var catnote = ('The GOAT').val();
    newList.append(catname + "-" + catnote);
    $('results').append('newList');

     $.ajax ({
      url:'https://ga-cat-rescue.herokuapp.com/api/cats',
      data: postData,
      type: "POST",
      dataType: 'application/json',
        success: function(data){
        console.log(data);
        catList.append(data);
    }
});