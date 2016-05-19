d3.csv("/standard-wip/dist/menu/menu.csv", function (error, data) {
    var mobileNavWrapper = d3.select("#menu").append("div")
        .attr("id", "mobileNavWrapper")
        .attr("class", "nav-wrapper");

    var mobileNav = mobileNavWrapper.append("nav")
        .attr("id", "mobileNavigation");

    var grid = mobileNav.append("div").attr("class", "ui four column doubling stackable grid");

    data.forEach(function (d) {

        if (d.type == "header") {
            var column = grid.append("div")
                .attr("class", "column");

            var block = column.append("ul")
                .attr("id", d.id);
            block.append("li")
                .attr("class", "item header")
                .text(d.content);
        }

        if (d.type == "section") {
            var page = $("body").data().page;
            var block = d3.select("ul#" + d.id);

            if (d.link == page) {
                var li = block.append("li")
                    .attr("class", "item active")
                    .attr("data-link", d.link);
                li.append("a")
                    .text(d.content);
            } else {
                var li = block.append("li")
                    .attr("class", "item")
                    .attr("data-link", d.link);

                if (d.link == "home") {
                    li.append("a")
                        .attr("href", "./")
                        .text(d.content);
                } else {
                    li.append("a")
                        .attr("href", "./" + d.link)
                        .text(d.content);
                }
            }



        }

    });
})
