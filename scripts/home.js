//Animates the header to fade in and expand/shrink
$("#titleHeader").css("opacity", 0);
$.when($("#titleHeader").fadeTo(1000, 1))
  .done(function () {
    $("#titleHeader").addClass("animate__pulse");
  });

  //Hide Navbar Links on click
  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

//displays user choices list on button click
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

//Generates choices list based on which button was pressed
function propogateChoices(id) {
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
      var li = $("<li>").text("I am the family member of a migrant seeking a family-based visa").attr("data-id", 5).addClass("item i01");
      var li2 = $("<li>").text("I am a migrant crossing the border with members of my family").attr("data-id", 6).addClass("item i02");
      var li3 = $("<li>").text("I am a parent who has been detained and separated from my child").attr("data-id", 3).addClass("item i03");
      var li4 = $("<li>").text("I am a child who has been separated from my parent").attr("data-id", 4).addClass("item i04");
      $("#textChoices").append(li, li2, li3, li4);
      fadeInList();
      // $("#textChoices").fadeTo( "fast", 1 );
      window.location.href = "#textChoices";
      break;

    case "3":
      var li = $("<li>").text("I am a government official who has recovered unidentified human remains at the border").attr("data-id", 9).addClass("item i01");
      var li2 = $("<li>").text("I am a government official ....").attr("data-id", 2).addClass("item i02");
      var li3 = $("<li>").text("I am a government official ....").attr("data-id", 3).addClass("item i03");
      var li4 = $("<li>").text("I am a government official ....").attr("data-id", 4).addClass("item i04");
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

//Sends user to proper wayfinder page depending on their list selection
function redirectUser(id) {
  switch (id) {
    case "1":
      // localStorage.setItem("tree", "treeData2.json");
      window.location.href = 'migrantVisa.html';
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
      case "5":
      // localStorage.setItem("tree", "treeData2.json");
      window.location.href = 'familyVisa.html';
      break;
      case "6":
        // localStorage.setItem("tree", "treeData2.json");
        window.location.href = 'familyBorder.html';
        break;
      case "9":
      window.location.href = 'recovered.html';
      break;
    default:
      alert("something went wrong");
      break;
  }
}

//animation to fade in list items sequentially
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