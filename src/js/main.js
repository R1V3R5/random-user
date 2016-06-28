import $ from 'jquery';

var baseURL = "https://randomuser.me/api/"

function getUsers() {
  $.ajax({
    url: `${baseURL}`,
    dataType: 'json',
    data: {
      results: "12",
      inc: "name, location, email, phone, id, picture"
    }
  }).then(function(data) {
    console.log(data);
  })
};

getUsers();