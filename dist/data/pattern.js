d3.csv("/standard-wip/dist/pattern/pattern.csv", function (error, data) {
    var content = d3.select("#content");
    data.forEach(function (d) {

        if (d.type == "pattern") {
            var block = content.append("div")
                .attr("class", "block")
                .attr("id", d.id);
            block.append("div")
                .attr("class", "title")
                .attr("data-align", "center")
                .text(d.title);
            block.append("div")
                .attr("class", "ui doubling stackable four column grid")
                .attr("data-align", "left");
        }

        if (d.type == "child") {
            var grid = d3.select("#" + d.id + " .grid");
            var column = grid.append("div").attr("class", "column");
            var item = column.append("div").attr("class", "item");

            item.append("div").attr("class", "title").text(d.title);
            var thumbnail = item.append("div").attr("class", "thumbnail");
            thumbnail.append("img").attr("class", "ui image").attr("src", "dist/img/pattern/" + d.id + "/" + d.img);

            item.append("p").attr("class", "description").html(d.description);

        }


    });
})
