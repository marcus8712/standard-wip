d3.csv("/standard-wip/dist/data/data.csv", function (error, data) {
    var mobileNavWrapper = d3.select("#menu").append("div")
        .attr("id", "mobileNavWrapper")
        .attr("class", "nav-wrapper");

    var mobileNav = mobileNavWrapper.append("nav")
        .attr("id", "mobileNavigation");

    var grid = mobileNav.append("div").attr("class", "ui four column doubling stackable grid");

    data.forEach(function (d) {

        if (d.type == "category") {
            var column = grid.append("div")
                .attr("class", "column");

            var block = column.append("ul")
                .attr("id", d.id);
            block.append("li")
                .attr("class", "item header")
                .text(d.title);
        }

        if (d.type == "page") {
            var page = $("body").data().page;
            var block = d3.select("ul#" + d.id);


            // Sample page
            if (d.link == page) {


                var li = block.append("li")
                    .attr("class", "item active")
                    .attr("data-link", d.link);

                li.append("a")
                    .text(d.title);

                // Pattern
                if (d.id == "pattern" && d.id != d.link) {
                    li.append("ul").attr("class", "pattern");
                }

            } else {

                var li = block.append("li")
                    .attr("class", "item")
                    .attr("data-link", d.link);

                // Intro
                if (d.link == "intro") {
                    li.append("a")
                        .attr("href", "./")
                        .text(d.title);
                } else {
                    li.append("a")
                        .attr("href", "./" + d.link)
                        .text(d.title);
                }

                // Pattern
                if (d.id == "pattern" && d.id != d.link) {
                    li.append("ul").attr("class", "pattern");
                }
            }





        }

        if (d.type == "pattern") {
            var pattern = d3.select("[data-link=" + d.id + "] ul");
            var item = pattern.append("li").attr("class", "item");
            item.append("a")
                .attr("href", "./pattern/" + d.id + "/" + d.link)
                .text(d.title);
        }

    });
})
