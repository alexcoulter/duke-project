//based on https://bl.ocks.org/d3noob/43a860bc0024792f8803bba8ca0d5ecd by d3noob


// var tree = localStorage.getItem("tree") || "";
console.log(tree);
let translate = 0;
let expanded = false;
//show default view
if (tree) { redraw(tree) }


//******Click Button Events*********
//Redirect to home page on back button click
$("#homeBtn").on("click", function () {
  window.location.href = "index.html";
});


// ****************** Color ***************************
var colorScale = d3.scaleOrdinal("schemeSet2");

// Set the dimensions and margins of the diagram
var margin = { top: 0, right: 90, bottom: 30, left: 90 },
  width = 2200 - margin.left - margin.right,
  height = 700 - margin.top - margin.bottom;

var textbox_w = 270, //was 336
  textbox_h = 90; //heuristic: minimal 88 is needed for title + 2 laws
var container = document.getElementById("treeContainer");

var svg = d3
  .select(container)
  .append("svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height + margin.top + margin.bottom)
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
    treeData = treeData0[0];
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
      let widthDiff = width - screen.width;
      let levels = 6;
      let screenShift = widthDiff / levels;
      // console.log(d.depth);
      let depth = d.depth + 1;
      if (depth > 2) {
        scrollScreen(depth * screenShift);
      }
      return "translate(" + source.y0 + "," + source.x0 + ")";
    })
    .on("click", delayClick);

  // ****************** Nodes section ***************************
  //add rect as node
  nodeEnter
    .append("rect")
    .attr("class", "node")
    .attr("width", 1e-6)
    .attr("height", 1e-6)
    .attr("padding", 8)
    .style("fill", function (d) {
      return d._children ? "lightsteelblue" : "#fff";
    });

  // ****************** Symbol section ***************************
  var customSqr = d3.symbol().type(d3.symbolWye).size(50);
  nodeEnter
    .append("foreignObject")
    .attr("class", "txt")
    .attr("width", textbox_w - 10)
    .attr("height", (d) => (d.data.type === "law" ? textbox_h + 100 : 100)) //adjust this to ensure all text shown
    .style("transform", (d) =>
      d.data.clauses === 3
        ? "translateX(10px) translateY(-" + (textbox_h / 2 - 26) + "px)"
        : d.data.yadjust === "down"
          ? "translateX(10px) translateY(-" + (textbox_h / 2 - 20) + "px)"
          : d.data.yadjust === "up"
          ? "translateX(10px) translateY(" + (textbox_h / 2 - 20) + "px)"
          : d.data.type === "law"
            ? "translateX(10px) translateY(-" + (textbox_h / 2 - 10) + "px)"
            : "translateX(28px) translateY(-8px)"
    )
    .append("xhtml:div")
    .style("fill", "black")
    .html(function (d) {
      return d.data.name;
    });

  // UPDATE
  var nodeUpdate = nodeEnter.merge(node);

  // Transition to the proper position for the node
  nodeUpdate
    .transition()
    .duration(duration)
    .attr("transform", function (d) {
      return "translate(" + d.y / 0.99 + "," + d.x / 1.03 + ")";
    });

  nodeUpdate
    .select("rect.node")
    .attr("width", (d) => (d.data.type === "law" ? textbox_w : 26))
    .attr("height", (d) =>
      d.data.clauses === 3
        ? textbox_h + 70
        : d.data.clauses === 2
          ? textbox_h + 30
          : d.data.type === "law"
            ? textbox_h
            : 24
    )
    .style("transform", (d) =>
      d.data.clauses === 3
        ? "translateY(-" + (textbox_h / 2 - 16) + "px)"
        : d.data.yadjust === "down"
          ? "translateY(-" + (textbox_h / 2 - 12) + "px)"
          : d.data.type === "law"
            ? "translateY(-" + textbox_h / 2 + "px)"
            : "translateY(0px)"
    )
    .attr("rx", 12)
    .attr("ry", 12)
    .style(
      "fill",
      (d) =>
        d.data.name.match(/Law/) || d.data.name.match(/Regulation/)
          ? "#EBECF0" //grey
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

  nodeExit.select("rectangle").attr("width", 1e-6).attr("height", 1e-6);

  // On exit reduce the opacity of text labels
  nodeExit.select("text").style("fill-opacity", 1e-6);

  // ****************** links section ***************************

  // Update the links...
  var link = svg.selectAll("path.link").data(links, function (d) {
    return d.id;
  });

  // Enter any new links at the parent's previous position.
  var linkEnter = link
    .enter()
    .insert("path", "g")
    .attr("class", "link")
    .attr("d", function (d) {
      var o = { x: source.x0, y: source.y0 };
      return diagonal(o, o);
    });

  // UPDATE
  var linkUpdate = linkEnter.merge(link);

  // Transition back to the parent element position
  linkUpdate
    .transition()
    .duration(duration)
    .attr("d", function (d) {
      return diagonal(d, d.parent);
    });

  // Remove any exiting links
  var linkExit = link
    .exit()
    .transition()
    .duration(duration)
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

//Modal Click Event
// $(".popup").on("click", function() {
//   exp3 = true;
// })
$(document).on("click", ".popup", function () {
  expanded = true;
  fillModal($(this).attr("id"));
  $("#exampleModal").modal();

});