console.log(screen.width);

var container = document.getElementById("treeContainer");
var canvas = d3.select(container).append("svg")
  .attr("width", 500)
  .attr("height", 500)
  .append("g")
    .attr("transform", "translate(50, 50) ");

  // var diagonal = d3.svg.diagonal()
  //   .source({x: 10, y:10})
  //   .target({x:300, y:300});

  // canvas.append("path")
  //   .attr("fill", "none")
  //   .attr("stroke", "green")
  //   .attr("d", diagonal);

  var tree = d3.layout.tree()
    .size([400, 400]);

  d3.json("new.json", function(data) {
    var nodes = tree.nodes(data);
    var links = tree.links(nodes);
    var node = canvas.selectAll("node")
      .data(nodes)
      .enter()
      .append("g")
        .attr("class", "node")
        .attr("transform", function(d){ return "translate(" + d.x + "," + d.y + ") ";})

    node.append("circle")
      .attr("r", 5)
      .attr("fill", "blue");

      node.append("text")
        .text(function (d) { return d.name;});

    var diagonal = d3.svg.diagonal();
    // .source({x: 10, y:10})
    // .target({x:300, y:300});

      canvas.selectAll(".link")
        .data(links)
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("fill", "none")
        .attr("stroke", "#ADADAD")
        .attr("d", diagonal);
  });