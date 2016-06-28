import $ from 'jquery';

var baseURL = "https://randomuser.me/api/"

function companyTmpl(data) {
  var template = `
		<div class="company-grid">
			<div class="picture">
				<img src="${data.picture.large}"
			</div>
			<div class="name">
				<h2>${data.name.first.toUpperCase()} ${data.name.last.toUpperCase()}</h2>
			</div>
			<p class="email">${data.email.toUpperCase()}</p>
			<p class="address">${data.location.street}<br>
			${data.location.city}, ${data.location.state} ${data.location.postcode}</p>
			<div id="social" class="blurry-text" class="social">${data.id.value}</div>
		</div>
	`
  $('.container').append(template)
}

$.ajax({
  url: `${baseURL}`,
  dataType: 'json',
  data: {
    results: "12",
    inc: "name, location, email, phone, id, picture",
    nat: "US"
  }
}).then(function(response) {
  console.log(response);
  response.results.forEach(function(item) {
    companyTmpl(item)
  })
});