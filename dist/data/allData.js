// Loading
var loading = "";
loading += "    <section id=\"hexCont\">";
loading += "        <div id=\"triforce1\">";
loading += "            <div class=\"triangle triangle1\"><\/div>";
loading += "        <\/div>";
loading += "        <div id=\"triforce2\">";
loading += "            <div class=\"triangle flipped triangle2\"><\/div>";
loading += "        <\/div>";
loading += "        <div id=\"triforce3\">";
loading += "            <div class=\"triangle triangle3\"><\/div>";
loading += "        <\/div>";
loading += "        <div id=\"triforce4\">";
loading += "            <div class=\"triangle flipped triangle4\"><\/div>";
loading += "        <\/div>";
loading += "        <div id=\"triforce5\">";
loading += "            <div class=\"triangle triangle5\"><\/div>";
loading += "        <\/div>";
loading += "        <div id=\"triforce6\">";
loading += "            <div class=\"triangle flipped triangle6\"><\/div>";
loading += "        <\/div>";
loading += "    <\/section>";

$(".hexagon-loading").append(loading);

//Footer
var footer = "Copyright © 2016 <a href=\"http://hoiio.com\" target=\"_blank\">Hoiio Pte Ltd.<\/a>";
$("#footer").append(footer);


d3.csv("/standard-wip/dist/data/menu.csv", function (error, data) {
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

        if (d.type == "section") {
            var page = $("body").data().page;
            var block = d3.select("ul#" + d.id);


            // Sample page
            if (d.link == page) {

                var li = block.append("li")
                    .attr("class", "item active")
                    .attr("data-link", d.link);

                li.append("a")
                    .text(d.title);

            } else {

                var li = block.append("li")
                    .attr("class", "item")
                    .attr("data-link", d.link);

                // Intro
                if (d.link == "home") {
                    li.append("a")
                        .attr("href", "./")
                        .text(d.title);
                } else {
                    li.append("a")
                        .attr("href", "./" + d.link)
                        .text(d.title);
                }

            }

        }


    });
});

d3.csv("/standard-wip/dist/data/content.csv", function (error, data) {

    var page = $("body").data().page;

    var contentTitle = d3.select("#content .title");
    var blockTitle = d3.select("#content .block .title");
    var blockUsage = d3.select("#content .block .description");

    data.forEach(function (d) {

        if (page == "pattern-child") {

            if (d.type == "item") {
                // Title Page
                d3.select("head > title").text(d.title + " | Hoiio Design Standards");

                // Content Title
                contentTitle
                    .append("a")
                    .attr("href", "./")
                    .text("Patterns");

                contentTitle
                    .append(span)
                    .text(d.id);


                // Block Title
                blockTitle
                    .append(span)
                    .text(d.title);

                var button = blockTitle
                    .append("button")
                    .attr("class", "ui round icon button");

                button
                    .append("i")
                    .attr("class", "icon code");

                // Block Usage
                blockUsage.text(d.usage);



            }
        }

        if (page == "pattern") {
            var content = d3.select("#content");
            if (d.type == "block") {
                var block = content.append("div")
                    .attr("class", "block")
                    .attr("id", d.link);
                block.append("div")
                    .attr("class", "title")
                    .attr("data-align", "center")
                    .text(d.title);
                block.append("div")
                    .attr("class", "ui doubling stackable four column grid")
                    .attr("data-align", "left");
            }

            if (d.type == "item") {
                var grid = d3.select("#" + d.id + " .grid");
                var column = grid.append("div").attr("class", "column");
                var item = column.append("a").attr("class", "item").attr("href", "./" + d.parent + "/" + d.id + "/" + d.link);

                item.append("div").attr("class", "title").text(d.title);
                var thumbnail = item.append("div").attr("class", "thumbnail");
                thumbnail.append("img").attr("class", "ui image").attr("src", "dist/img/pattern/" + d.id + "/" + d.img);

                item.append("p").attr("class", "description").html(d.description);

            }

        }

        if (d.type == "block") {
            var block = d3.select("ul#" + d.id);
            var li = block.append("li")
                .attr("class", "item")
                .attr("data-link", d.link);
            var ul = li.append("ul")
                .attr("id", d.link);
            ul.append("li")
                .attr("class", "item header")
                .text(d.title);
        }

        if (d.type == "item") {
            var block = d3.select("ul#" + d.id);
            var li = block.append("li")
                .attr("class", "item")
                .attr("data-pattern", d.link);
            li.append("a")
                .attr("href", "./" + d.parent + "/" + d.id + "/" + d.link)
                .text(d.title);
        }

    });
});
