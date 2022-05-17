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

    function addCharInfo() {
        $("#daegon").data("info", {
            name: "Dae Gon",
            title: "Wyvern of the West",
            desc: " Dae Gon is the second in command in the powerful ghost organization known as The Decade. He has great ambition, looking to overthrow the minor deity at the head of the organization by reviving the power of the old dragons and eventually ascending into godhood.",
            flavor: "\"<i>By my hand will the strength of dieties turn paltry...</i>\""
        });
        $("#klous").data("info", {
            name: "Klous",
            title: "Grand Researcher",
            desc: "Klous has an unhealthy obsession with knowledge. Though he isn’t particularly without morals, he has vowed to let his pursuit for knowledge guide his every action. He is convinced that it is the only way to guarantee progress for humanity overall.",
            flavor: "\"<i>Curious, though this specific peculiarity fails to pertain to the discussion at hand.</i>\""
        });
        $("#mystery").data("info", {
            name: "???",
            title: "??????",
            desc: "An odd enitity that not many has seen until recently. It bears an uncanny resemblance to one specific sarcastic, masked Demilord.",
            flavor: "\"<i>AAaa---aeiiii cccce plee s hhheellp</i>\""
        });
        $("#riadne").data("info", {
            name: "Riadne",
            title: "The Bounty Hunter",
            desc: "A bashful deserter of the Gunrunners, Riadne took on every odd job that came her way. Not many knows what she does with all her bounty, but her wallet always seems to be empty...",
            flavor: "\"<i>Umm... I'll take it all. Please. Thanks... Oh! Could I have my payment in advance?</i>\""
        });
        $("#yesnila").data("info", {
            name: "Yesnila",
            title: "Divine Constra",
            desc: "Yesnila was born with a devastating bloodline mutation, accelerating the growth of her strength beyond what her body could handle. Thus, the repalcements began, part by part...",
            flavor: "\"<i>While I may walk every realm, I will survive in none of them.</i>\""
        });
        $("#asthia").data("info", {
            name: "Asthia",
            title: "Patron of Flames",
            desc: "Former Principle Grand Magus of Flame Magic, Asthia abandoned her prior life in pursuit of becoming an Angekok and finding the secrets of immortality.",
            flavor: "\"<i>Oh sweetheart, perhaps you ought to -- Ah... well... perhaps a more hands-on lesson then? </i>\""
        });
    }

    function addAbilInfo() {
        $("#bloom").data("info", {
            name: "Rising Bloom",
            rarity: "uncommon",
            cost: "3",
            desc: "Perform a 4 hit spin that pulls in enemies hit. Hits one extra time on perfect strikes.",
            flavor: "There are few who can liberate themselves from the raging cyclones of the Fan of Typh."
        });
        $("#crown").data("info", {
            name: "Crown of Impurity",
            rarity: "epic",
            cost: "4",
            desc: "Spawn 5 projectiles. Aim them  while paused, then they fire sequentially in the aimed direction, dealing damage to the first enemy hit.",
            flavor: "\"<i>The Weeping Emperor knelt, facing his end... Above him, 5 sinister infusions of impure Mana orbited...</i>\" <br>- The Tales of Vevenia"
        });
        $("#exec").data("info", {
            name: "Galeforce Execution",
            rarity: "common",
            cost: "3",
            desc: "Perform a dash slash forward that damages and knocks up all enemies hit.",
            flavor: "\"<i>Be gone with the fleeting dust...</i>\" <br>- Unknown"
        });
        $("#rage").data("info", {
            name: "Titan's Rage",
            rarity: "epic",
            cost: "4",
            desc: "Slam down with a giant club, dealing significant damage to all enemies hit and knocking up enemies around the area hit.",
            flavor: "An advanced technique involving infusing the user with the essence of ancient Titans."
        });
    }

    function positionCarouselItems(carouselEl) {
        let items = $(carouselEl.find(".carouselItem"));
        let desc = $($(carouselEl).siblings(".carouselInfo"));
        let centerVert = carouselEl.data("centerVert");
        let numItems = items.length;
        items.removeClass('selected');
        items.each(function( index ) {
            if (index === 0) {
                let bottom = 0;
                if (centerVert) {
                    // Subtract half height to center vertically
                    bottom += $(this).height() * -2;
                }
                // Position selected element
                $(this).css({
                    bottom: bottom + "px",
                    'z-index': -index,
                    'transform': 'scale(400%)',
                    'filter': 'drop-shadow(0px 1px 1px rgba(200, 200, 200, 0.2)) drop-shadow(0px -1px 1px rgba(200, 200, 200, 0.2)) drop-shadow(1px 0px 1px rgba(200, 200, 200, 0.2)) drop-shadow(-1px 0px 1px rgba(200, 200, 200, 0.2))',
                    right: 180 - $(this).width() * 2 + "px", // Lots of math here to "center" the bottom right origin image
                });

                $(this).addClass('selected');
                // Update info
                let info = $(this).data("info");
                if(info !== undefined) {
                    desc.find(".carouselTitle").html(info.name);
                    desc.find(".carouselDesc").html(info.desc);
                    desc.find(".carouselFlavor").html(info.flavor);
                    if ('cost' in info) {
                        desc.find(".costText").html(info.cost);
                    }
                    if ('title' in info) {
                        desc.find(".subtitleText").html(info.title);
                    }
                    if ('durability' in info) {
                        desc.find(".durabilityText").html(info.durability);
                    }
                    if ('rarity' in info) {
                        let rarityText = desc.find(".rarityText");
                        rarityText.removeClass("common uncommon rare epic legendary").addClass(info.rarity);
                        rarityText.html(info.rarity);
                    }
                }

                // Change to active animation
                if (carouselEl.data("hasActive")) {
                    let originalSrc = $(this).attr("src");
                    let newSrc = originalSrc.split('.')[0] + "_active.gif";
                    $(this).attr("src", newSrc);
                }
            } else {
                let bottom = 20 + index * 20;
                let scale = (200 - index * 15);
                let baseRightOffset = (index * 540/numItems)  + 200;
                if (centerVert) {
                    // Subtract half height to center vertically
                    bottom += $(this).height() * (scale/-200);
                }

                // Position idle element
                $(this).css({
                    bottom: bottom + "px",
                    'z-index': -index,
                    'transform': 'scale(' + scale + '%)',
                    'filter': 'blur(' + index +
                        'px) brightness(' + (100 - 5 * index) +
                        '%) saturate(' + (100 - 5 * index) +
                        '%) contrast('+ (100 - 5 * index) +
                        '%) opacity('+ (100 - 5 * index) +
                        '%)',
                    right: baseRightOffset - ($(this).width() * (scale/200)) + "px" // Lots of math here to "center" the bottom right origin image
                });

                // Change out of active animation
                if (carouselEl.data("hasActive")) {
                    let originalSrc = $(this).attr("src");
                    let newSrc = originalSrc.replaceAll('_active', '');
                    $(this).attr("src", newSrc);
                }
            }

        });
    }

    function fadeOnScroll() {
        // Fade content toward top starting from 20% down
        let startPos = 0.2;
        // Cache window object
        let $w = $(window);
        // Go through each element and check its relative position within the viewport
        $('.fadeScroll').each(function() {
            // Get current relative position in viewport, based on 5/8th the way down the element
            let pos = ($(this).offset().top + $(this).height() * 5/8) - $w.scrollTop();
            // Get viewport height
            let vh = $w.height();
            if (pos < vh * startPos) {
            // If element has past the starting threshold, we fade it
                $(this).css('opacity', pos / (vh * startPos));
            } else {
                // Fade content toward top starting from 80% down
                let startPos = 0.8;
                // Get current relative position in viewport, based on 1/4th the way down the element
                let pos = ($(this).offset().top + $(this).height() * 1/4) - $w.scrollTop();
                // Get viewport height
                if (pos > vh * startPos) {
                    // If element has past the bottom threshold, we fade it
                    $(this).css('opacity',  1 - (pos - (vh * startPos))/(vh - (vh * startPos)));
                } else {
                    $(this).css('opacity', 1);
                }
            }
        });
    }

    function hookNavEvents() {
        $('#toAbil').click(function() {
            $('.abilitiesBlock')[0].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        });
        $('#toChar').click(function() {
            $('.charactersBlock')[0].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        });
        $('#toEnem').click(function() {
            $('.enemiesBlock')[0].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        });
        $('#toPower').click(function() {
            $('.powerupsBlock')[0].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        });
        $('#toMove').click(function() {
            $('.movementBlock')[0].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        });
        $('#toMedia').click(function() {
            $('.trailerBlock')[0].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        });
    }

    $( document ).ready(function() {
        $('.mobileWrapper').scroll(function () {
            fadeOnScroll();
            $('.eclo1').css({
                'margin-bottom' : -20 +($(this).scrollTop()/50) + "%",
                'margin-right' : -4 - ($(this).scrollTop()/40) + "%"
             });

             $('.logo').css({
                 'bottom' : 100 + ($(this).scrollTop()/3) + "px",
                 'left' : -($(this).scrollTop()/3) + "px"
             });
        });
        $('.mobileWrapper').trigger('scroll');
        addEnemyInfo();
        addAbilInfo();
        addCharInfo();
        hookNavEvents();
        // Carousel
        $(".nextButton").click(function() {
            let carouselEl = $($(this).parent()).siblings(".carouselList");
            let firstEl = $($(carouselEl).find(".carouselItem")).first();
            $(firstEl).detach();
            $(carouselEl).append(firstEl);
            positionCarouselItems(carouselEl);
        });
        $(".prevButton").click(function() {
            let carouselEl = $($(this).parent()).siblings(".carouselList");
            let lastEl = $($(carouselEl).find(".carouselItem")).last();
            $(lastEl).detach();
            $(carouselEl).prepend(lastEl);
            positionCarouselItems(carouselEl);
        });
        $(".abilityCarousel").find((".carouselList")).data("centerVert", true);
        $(".abilityCarousel").find((".carouselList")).data("hasActive", true);
        $(".enemyCarousel").find((".carouselList")).data("centerVert", false);
        $(".enemyCarousel").find((".carouselList")).data("hasActive", true);
        $(".characterCarousel").find((".carouselList")).data("centerVert", false);
        $(".characterCarousel").find((".carouselList")).data("hasActive", false);
        positionCarouselItems($(".abilityCarousel").find((".carouselList")), true);
        positionCarouselItems($(".characterCarousel").find((".carouselList")), false);
        positionCarouselItems($(".enemyCarousel").find((".carouselList")), false);
    });
})();