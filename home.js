// $(".dropdown-menu p").on("click",function(){
//   console.log("Value: ",$(this).attr("data-value"));
//   var selText = $(this).text();
//   $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
// });

$("#titleHeader").css("opacity", 0);
// $("#titleHeader").fadeTo( 2000, 1 );
$.when($("#titleHeader").fadeTo(1000, 1))
  .done(function () {
    $("#titleHeader").addClass("animate__pulse");
  });

$(".data-button").click(function () {
  $("#textChoices").empty();
  $("#textChoicesDiv").removeClass("hidden");
  $(".data-button").removeClass("active");
  $(this).addClass("active");
  var choiceID = $(this).attr("data-id");
  // console.log(choiceID);
  propogateChoices(choiceID);
});

$("#textChoices").bind("click", function (e) {
  console.log(e.target.getAttribute("data-id"));
  redirectUser(e.target.getAttribute("data-id"));
});

function propogateChoices(id) {
  // console.log(id);
  // $("#textChoices").css( "opacity", 0 );

  switch (id) {
    case "1":
      var li = $("<li>").text("I am a migrant seeking a family-based visa").attr("data-id", 1).addClass("item i01");
      var li2 = $("<li>").text("I am a migrant seeking asylum").attr("data-id", 2).addClass("item i02");
      var li3 = $("<li>").text("I am a migrant who has entered the country without inspection").attr("data-id", 3).addClass("item i03");
      var li4 = $("<li>").text("I am a migrant who is seeking a temporary work visa").attr("data-id", 4).addClass("item i04");
      // $("#textChoices").fadeTo( "fast", 1 );
      $("#textChoices").append(li, li2, li3, li4);
      fadeInList();

      window.location.href = "#textChoices";
      break;

    case "2":
      var li = $("<li>").text("I have a family member who was arrested but not detained").attr("data-id", 1).addClass("item i01");
      var li2 = $("<li>").text("I have a family member was arrested but set free").attr("data-id", 2).addClass("item i02");
      var li3 = $("<li>").text("I have a family member who was apprehended by the law but not arrested").attr("data-id", 3).addClass("item i03");
      var li4 = $("<li>").text("I have a family member who was not apprehended by the law").attr("data-id", 4).addClass("item i04");
      $("#textChoices").append(li, li2, li3, li4);
      fadeInList();
      // $("#textChoices").fadeTo( "fast", 1 );
      window.location.href = "#textChoices";
      break;

    case "3":
      var li = $("<li>").text("I have a child who was born in the United States").attr("data-id", 1).addClass("item i01");
      var li2 = $("<li>").text("I have a child who was not born in the United States but has lived here for 5 years").attr("data-id", 2).addClass("item i02");
      var li3 = $("<li>").text("I have a child who was detained at the border").attr("data-id", 3).addClass("item i03");
      var li4 = $("<li>").text("I have a child who was taken into custody").attr("data-id", 4).addClass("item i04");
      $("#textChoices").append(li, li2, li3, li4);
      // $("#textChoices").fadeTo( "fast", 1 );
      fadeInList();
      window.location.href = "#textChoices";
      break;

    case "4":
      var li = $("<li>").text("I have a spouse who was born in the United States").attr("data-id", 1).addClass("item i01");
      var li2 = $("<li>").text("I have a spouse who was not born in the United States but has lived here for 5 years").attr("data-id", 2).addClass("item i02");
      var li3 = $("<li>").text("I have a spouse who was detained at the border").attr("data-id", 3).addClass("item i03");
      var li4 = $("<li>").text("I have a spouse who was taken into custody").attr("data-id", 4).addClass("item i04");
      $("#textChoices").append(li, li2, li3, li4);
      // $("#textChoices").fadeTo( "fast", 1 );
      // fadeInList();
      window.location.href = "#textChoices";
      break;

    default:
      alert("something went wrong");
      break;
  }
}


function redirectUser(id) {
  switch (id) {
    case "1":
      // localStorage.setItem("tree", "treeData2.json");
      window.location.href = 'tree1.html';
      break;
    case "2":
      // localStorage.setItem("tree", "treeData3.json");
      window.location.href = 'tree2.html';
      break;
    case "3":
      // localStorage.setItem("tree", "treeData3.json");
      window.location.href = 'tree2.html';
      break;
    case "4":
      // localStorage.setItem("tree", "treeData4.json");
      window.location.href = 'tree4.html';
      break;
    default:
      alert("something went wrong");
      break;
  }
}

function fadeInList() {
  var eT = 0;
  $('.list-item').each(function () {
    $(this).delay(eT).fadeIn(300);
    eT += 100;
  });
  $('.list-item').click(function () {
    $('.list-item').stop(true, true).fadeIn();
  });
}