//based on https://bl.ocks.org/d3noob/43a860bc0024792f8803bba8ca0d5ecd by d3noob


// console.log(tree);
var stateSelect = "";
let translate = 0;
let expanded = false;
//show default view
if (tree) { redraw(tree) }

// ****************** Color ***************************
var colorScale = d3.scaleOrdinal("schemeSet2");

// Set the dimensions and margins of the diagram
var margin = { top: 0, right: 90, bottom: 30, left: 90 },
textbox_w = 240, //was 336
  textbox_h = 90; //heuristic: minimal 88 is needed for title + 2 laws
  // width = 2200 - margin.left - margin.right,
  width = (textbox_w + 20) * levels + margin.left + margin.right,
  height = treeHeight - margin.top - margin.bottom;

var container = document.getElementById("treeContainer");

var svg = d3
  .select(container)
  .append("svg")
  .attr("width", width)
  .attr("height", height + margin.top + margin.bottom)
  .call(d3.zoom().on("zoom", function () {
    svg.attr("transform", d3.event.transform)
  }))
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var i = 0,
  duration = 500,
  root;

// declares a tree layout and assigns the size
var treemap = d3.tree().size([height, width]);

function collapse(d) {
  if (d.children) {

    d._children = d.children;
    d._children.forEach(collapse);
    d.children = null;
  }
}

function redraw(data) {
  d3.json(data, function (error, treeData0) {
    if(stateSelect == "California") {
      treeData = treeData0[0].children[0];
    }
    else if(stateSelect == "Arizona") {
      treeData = treeData0[0].children[1];
    }
    else if(stateSelect == "NewMexico") {
      treeData = treeData0[0].children[2];
    }
    else if(stateSelect == "Texas") {
      treeData = treeData0[0].children[3];
    }
    else if(stateSelect == "Other") {
      treeData = treeData0[0].children[4];
    }
    else {
      treeData = treeData0[0];
    }

    root = d3.hierarchy(treeData, function (d) {
      return d.children;
    });
    root.x0 = height / 2;
    root.y0 = 0;
    root.children.forEach(collapse);

    update(root);
  });
}

// ****************** data ***************************

function update(source) {
  // Assigns the x and y position for the nodes
  var treeData = treemap(root);
  // Compute the new tree layout.
  var nodes = treeData.descendants(),
    links = treeData.descendants().slice(1);
  // Normalize for fixed-depth for arcs - leave space for text.
  nodes.forEach(function (d) {
    d.y = d.depth * (textbox_w + 30);
  });

  // ****************** Nodes section ***************************

  // Update the nodes...
  var node = svg.selectAll("g.node").data(nodes, function (d) {
    return d.id || (d.id = ++i);
  });

  // ****************** Tooltip ***************************
  // Define 'div' for tooltips

  var div = d3
    .select(container)
    .append("div") // declare the tooltip div
    .attr("class", "tooltip") // apply the 'tooltip' class
    .style("opacity", 0);

  // Enter any new modes at the parent's previous position.
  var nodeEnter = node
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", function (d) {
      let widthDiff = width - window.innerWidth;
      // let levels = 6;
      let screenShift = (widthDiff / levels) + 10;
      let depth = d.depth + 1;
      if (depth > 2) {
        scrollScreen(depth * screenShift);
      }
      
      return "translate(" + source.y0 + "," + source.x0 + ")";
    })
    .on("click", delayClick);

  // ****************** Nodes section ***************************
  //add rect as node
  // nodeEnter
  //   .append("rect")
  //   .attr("class", "node")
  //   .attr("width", 1e-6)
  //   .attr("height", 1e-6)
  //   .attr("padding", 8)
  //   .style("fill", function (d) {
  //     return d._children ? "lightsteelblue" : "#fff";
  //   });

  // ****************** Symbol section ***************************
  // var customSqr = d3.symbol().type(d3.symbolWye).size(50);
  nodeEnter
    .append("foreignObject")
    .attr("class", "txt")
    
    .attr("width", textbox_w - 10)
    .attr("height", (d) => (d.data.type === "law" ? textbox_h + 100 : 120)) //adjust this to ensure all text shown
    .style("transform", (d) =>
      d.data.clauses === 3
        ? "translateX(10px) translateY(-" + (textbox_h / 2 - 26) + "px)"
        : d.data.yadjust === "down"
          ? "translateX(0px) translateY(-" + (textbox_h / 2 - 12) + "px)"
          : d.data.yadjust === "up"
            ? "translateX(10px) translateY(" + (textbox_h / 2 - 20) + "px)"
            : d.data.type === "law"
              ? "translateX(10px) translateY(-" + (textbox_h / 2 - 10) + "px)"
              : "translateX(-5px) translateY(-20px)"
    )
    .append("xhtml:div")
    .style("fill", "black")
    .html(function (d) {
      // if(d.data.nid == "wham")
      return d.data.name;
    })
    .style("opacity", 0)
    .transition().duration(800)
    .style("opacity", 1);

  // UPDATE
  var nodeUpdate = nodeEnter.merge(node);

  // Transition to the proper position for the node
  nodeUpdate
  .transition()
  .delay(100)
  .duration(duration * .7)
    .attr("transform", function (d) {
      return "translate(" + d.y / 1.0 + "," + d.x / 1.0 + ")";
    });

  nodeUpdate
    .select("rect.node")
    .attr("class", "node-style")
    .attr("width", (d) => (d.data.type === "law" ? textbox_w : 26))
    .attr("height", (d) => 25)
    // .style("transform", (d) =>
    //   d.data.clauses === 3
    //     ? "translateY(-" + (textbox_h / 2 - 16) + "px)"
    //     // : d.data.yadjust === "down"
    //     //   ? "translateY(-" + (textbox_h / 2 - 12) + "px)"
    //       : d.data.type === "law"
    //         ? "translateY(-" + textbox_h / 2 + "px)"
    //         : "translateY(0px)"
    // )
    .attr("rx", 12)
    .attr("ry", 12)
    .style(
      "fill",
      (d) =>
        d.data.name.match(/Law/) || d.data.name.match(/Regulation/)
          ? "#abdcfa" //blue
          : d.data.name.match(/DNA test/)
            ? "#FFC312" //yellow∂
            : d.data.outcome === "pos"
              ? "#cfd700" //lightgreen
              : d.data.outcome === "neg"
                ? "#D091bb" //lightpink
                : "#abdcfa" //blue
    )
    .style("stroke", (d) =>
      d.children || d._children ? "#FBFBF8" : "#333"
    )
    .attr("cursor", "pointer");

  // Remove any exiting nodes
  var nodeExit = node
    .exit()
    .transition()
    .delay(00)
    .duration(duration * .7)
    
    .attr("transform", function (d) {
      //Scrolls screen to left 200px
      // scrollScreen(d.depth * 300 - 600);
      let widthDiff = width - screen.width;
      let levels = 6;
      let screenShift = widthDiff / levels;
      let depth = d.depth;
      if (depth > 2) {
        scrollScreen((depth * screenShift) - (screenShift));
      }
      else {
        scrollScreen(0);
      }
      return "translate(" + source.y + "," + source.x + ")";
    })
    .remove();

  // On exit reduce the node circles size to 0

  // nodeExit.select("txt").attr("width", 1e-6).attr("height", 1e-6);

  // On exit reduce the opacity of text labels
  // nodeExit.select(".txt").style("fill-opacity", 0);
  // nodeExit.select("foreignObject").attr("width", 1e-6).attr("height", 1e-6);

  // On exit reduce the opacity of text labels
  nodeExit.select("foreignObject").delay(100).style("opacity", .0);

  // ****************** links section ***************************

  // Update the links...
  var link = svg.selectAll("path.link").data(links, function (d) {
    // d3.selectAll("g").remove();
    return d.id;
  });

  // Enter any new links at the parent's previous position.
  var linkEnter = link
    .enter()
    .insert("path", "g")
    .attr("class", function(d) {
      buildRecap(d);

      if(d.data.linkId == "green"){
        return "link green-link"
      }
      else if(d.data.linkId == "red"){
        return "link red-link"
      }
      else if(d.data.linkId == "solid"){
        return "link solid-link"
      }
      return "link";
    })



    .attr("d", function (d) {
      var o = { x: source.x0, y: source.y0 };
      return diagonal(o, o);
    });

  // UPDATE
  var linkUpdate = linkEnter.merge(link);

  // Transition back to the parent element position
  linkUpdate
    .transition()
    .delay(100)
    .duration(duration * .7)
    .attr("d", function (d) {
      return diagonal(d, d.parent);
    });

  // Remove any exiting links
  var linkExit = link
    .exit()
    .transition()
    .delay(100)
    .duration(duration * .5)
    
    .attr("d", function (d) {
      var o = { x: source.x, y: source.y };
      return diagonal(o, o);
    })
    .remove();

  // Store the old positions for transition.
  nodes.forEach(function (d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });

  // Creates a curved (diagonal) path from parent to the child nodes
  function diagonal(s, d) {
    path = `M ${s.y} ${s.x}
      C ${(s.y + d.y) / 2} ${s.x},
        ${(s.y + d.y) / 2} ${d.x},
        ${d.y} ${d.x}`;

    return path;
  }

  function delayClick(d) {
    setTimeout(function () { click(d); }, 10);
  }

  // Toggle children on click.
  function click(d) {
   
    // d.data.nid = "show";
    // console.log(d.data.nid);
    // d3.select("#hidden1").remove();
    if (expanded === true) {
      return expanded = false;
    }
    if (d.children) {
      d._children = d.children;
      d._children2 = d.children[0].children;
      d.children = null;
    } else {
      // translate -= 200;
      // container.style.transform = "translateX(" + translate + "px" + ")";
      d.children = d._children;
      d._children = null;
    }
    update(d);
  }

  function scrollScreen(pos) {
    container.scrollTo({
      top: 0,
      left: pos,
      behavior: 'smooth'
    });
  }
}


//******   Event Listeners   *********
//Redirect to home page on back button click
$("#homeBtn").on("click", function () {
  window.location.href = "index.html";
});

//Change from right arrow to left arrow on click
$(document).on("click", ".txt", function(e) {
  console.log($(e.target).attr('class'));
if(expanded == false) {
    $(this).find("i").toggleClass("hidden").fadeOut(1).fadeIn(700);
}
});

//Expands Modal window on link click
$(document).on("click", ".popup", function () {
  expanded = true;
  fillModal($(this).attr("id"));
  $(".modal").addClass("animate__zoomIn");
  $(".modal").removeClass("animate__zoomOut");
  $("#exampleModal").modal();
  // $("#tree-page-content, #treeContainer").removeClass("fade-in");
  $("#tree-page-content").addClass("fade-out");
  $("#treeContainer").addClass("fade-out");
  $(".my-nav").removeClass("dark-nav bg-dark");
  $(".my-nav").addClass("navbar-light");
  $("#sticky-footer").css("background-color", "#12113a");
});

//Prevent next node from expanding on link click
$(document).on("click", ".node-text a", function () {
  expanded = true;
});

//fade background back in when exiting modal
$(document).on("click", ".modal button", function () {
  exitModal();
});

//Exit Modal window if user clicks outside of it
$(document).mouseup(function (e) {
  var container = $(".modal-content");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    exitModal();
  }
});

//Exit Modal window if user presses 'Escape' key
document.addEventListener('keyup', function (e) {
  if (e.key == "Escape") {
    exitModal();
  }
});

//Function to animate the Modal closing and fade the background back in
function exitModal(){
  $(".modal").removeClass("animate__zoomIn");
  $(".modal").addClass("animate__zoomOut");
  $("#tree-page-content, #treeContainer").removeClass("fade-out");
  // $("#tree-page-content, #treeContainer").addClass("fade-in");
  $(".my-nav").addClass("dark-nav bg-dark");
  $(".my-nav").removeClass("navbar-light");
  $("#sticky-footer").css("background-color", "rgba(40, 40, 40, .95)");
}

//goes through the box that was opened and saves all it's children's text to an array for recap
function buildRecap(d) {
  recapArray = [];
  var newParent = d;
  recapArray.unshift(d.data.text);
  while(newParent.parent) {
  recapArray.unshift(newParent.parent.data.text);
  newParent = newParent.parent;
  }
  // console.log(recapArray);
  recap = "<p class = 'summary'>";
  for(let i=0; i<recapArray.length -1; i++) {
    recap += recapArray[i] + "<i class='fas fa-arrow-right summary-arrow'></i>";
  }
  recap += recapArray[recapArray.length - 1] + "</p>";
  // console.log(recap);
}

