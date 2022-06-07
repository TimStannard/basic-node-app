console.log("script connected");

// get celebs

let url;

$.ajax({
  url: 'js/config.json',
  type: 'GET',
  crossDomain: true,
  dataType: 'json',
  success:function(configData){
    // console.log(configData.SERVER_URL,configData.SERVER_PORT );
    url = `${configData.server_url}:${configData.server_port}`;
    console.log(url);
  },
  error:function(error){
    console.log("Could not get data!");
    console.log(error);
  }
})

const result = document.getElementById("result");

$('#test').click(function(){
  // pull all data from mongo
  $.ajax({
      url: `http://${url}/allCelebs`,
      type: "GET",
      dataType: "json",
      success: function(celebData) {
        // console.log(celebrities);
        showAllCelebs(celebData);
      },
      error: function() {
      console.log("Unable to get celebs");
      }
  }); // end of all products from DB ajax
})//test button click

showAllCelebs = (celebData) => {
  celebData.forEach(function renderCeleb(item, index) {
    result.innerHTML += `<div class="celeb"><strong>${index}</strong> ${item.name}</div>`
  });
}
