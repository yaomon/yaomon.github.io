(function() {
    function addEnemyInfo() {
        $("#acolyte").data("info", {
            name: "Solunar Acolyte",
            desc: "The Solunar path focuses on spells that gain special properties depending on the time of day. Their acolytes utilize powerful magics in flames, nature, and shadow.",
            flavor: "\"<i>The turbulent intensity of the sun, matched only by the frigid stillness of the shadows...We shall have it all...</i>\" <br>- Solunar Magus Slanovon"
        });
        $("#endalus").data("info", {
            name: "Endalus",
            desc: "Endalai are ancient technology. Many argue whether they are fully alive, but their fighting prowess cannot be debated.",
            flavor: "\"<i>There they litter the battlefield like newly sown seeds, waiting to wake for the next bloodbath...</i>\" <br>- Unknown Scylian Scribe"
        });
        $("#herald").data("info", {
            name: "Sledgeruin Disciple",
            desc: "Destruction is beauty as described by the core philosophy of the Sledgeruin path. Thus, it's important for all their followers to be able to smash any annoying half-deities with a big hammer!",
            flavor: "\"<i>Ahh... the fresh smell of debris in the morning...</i>\" <br>- Seldgeruin Master Laffa"
        });
        $("#sniper").data("info", {
            name: "Priestess of Mal",
            desc: "Being able to hit almost anything within their line of sight, the Preistesses of Mal are well trained to be one of the most formidable lines of defense.",
            flavor: "\"<i>Not all higher powers are from this realm... Those who choose the unholy path of the Others exchange their waning sanity for an unusual power...</i><br>- Recount of Religion Vol II."
        });
        $("#whirleant").data("info", {
            name: "Whirleant",
            desc: "These hostile remnants are thought to be spiritual children of the great guardian of the Deadwoods, Malcychlo. They attack and drive out anything in the forest they deem to be too powerful.",
            flavor: "\"<i>From the corpses according come copius crops coursing, all along the forest floor.<br>Never another wilting willow ever more...</i>\" <br>- Scylian Poet Yarchilov"
        });
        $("#zerkape").data("info", {
            name: "Zerkape",
            desc: "Prolonged exposure to the spiritual energy in the Deadwoods can drive animals mad, even beserk. The Zerkape was a common primate species, now reduced to a fierce, primal form.",
            flavor: "\"<i>Their behavior is off... aggressive. I think- they see me... help! HELP! AH-- </i>\" <br>- Recording from Biological Research Constra 708 AW"
        });
    }

    function positionCarouselItems(carouselEl) {
        let items = $(carouselEl.find(".carouselItem"));
        let desc = $($(carouselEl).siblings(".carouselInfo"));
        items.removeClass('selected');
        items.each(function( index ) {
            if (index === 0) {
                $(this).css({
                    bottom: "0px",
                    'z-index': 10 - index,
                    'transform': 'scale(400%)',
                    'filter': 'drop-shadow(0px 1px 1px rgba(200, 200, 200, 0.2)) drop-shadow(0px -1px 1px rgba(200, 200, 200, 0.2)) drop-shadow(1px 0px 1px rgba(200, 200, 200, 0.2)) drop-shadow(-1px 0px 1px rgba(200, 200, 200, 0.2))'
                });
                $(this).css({
                    right: 100 - $(this).width() * 1.5 + "px",
                });
                $(this).addClass('selected');
                let info = $(this).data("info");
                desc.find(".carouselTitle").html(info.name);
                desc.find(".carouselDesc").html(info.desc);
                desc.find(".carouselFlavor").html(info.flavor);
                let originalSrc = $(this).attr("src");
                let newSrc = originalSrc.split('.')[0] + "_active.gif";
                $(this).attr("src", newSrc);
            } else {
                $(this).css({
                    bottom: index * 10 + 50 + "px",
                    'z-index': -index,
                    'transform': 'scale(' + (200 - index * 15) + '%)',
                    'filter': 'blur(' + index/2 + 'px) brightness(' + (100 - 5 * index) + '%)'
                });

                $(this).css({
                    right: index * 80  + 200 - $(this).width()/2 + "px"
                });
                let originalSrc = $(this).attr("src");
                let newSrc = originalSrc.replaceAll('_active', '');
                $(this).attr("src", newSrc);
            }

        });
    }

    $( document ).ready(function() {
        $('.mobileWrapper').scroll(function () {

            $('.eclo1').css({
               'top' : -($(this).scrollTop()) + "px",
               'right' : -3 - ($(this).scrollTop()/50) + "%"
            });

            $('.logo').css({
                'margin-top' : -($(this).scrollTop()) + "px",
                'margin-left' : -($(this).scrollTop()/3) + "px"
            });

            // Fade trailer in on scroll
            let offsetBottom = $('.trailerVid').offset().top + $('.trailerVid').outerHeight(true);
            let scrollBottom = $(window).scrollTop() + $(window).height();
            let offsetDiff = offsetBottom - scrollBottom;
            let opacityFactor = 50/(Math.max(offsetDiff, 1));
            let scaledOpacityFactor = opacityFactor * 0.9 + 0.1; // Always at least 0.1
            $('.trailerVid').css({
                'opacity' : Math.min(scaledOpacityFactor, 1),
            });
        });
        addEnemyInfo();

        // Carousel
        positionCarouselItems($(".enemyCarousel"));
        $(".nextButton").click(function() {
            let carouselEl = $($(this).parent()).siblings(".carouselList");
            let firstEl = $($(carouselEl).find(".carouselItem")).first();
            $(firstEl).detach();
            $(carouselEl).append(firstEl);
            positionCarouselItems(carouselEl);
        })
        $(".prevButton").click(function() {
            let carouselEl = $($(this).parent()).siblings(".carouselList");
            let lastEl = $($(carouselEl).find(".carouselItem")).last();
            $(lastEl).detach();
            $(carouselEl).prepend(lastEl);
            positionCarouselItems(carouselEl);
        })
    });
})();