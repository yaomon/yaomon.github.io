(function () {
    let touchstartX = 0;
    let touchendX = 0;

    function preloadImage(url) {
        var img = new Image();
        img.src = url;
    }

    function addEnemyInfo() {
        $("#acolyte").data("info", {
            name: "Solunar Acolyte",
            desc: "The Solunar path focuses on spells that gain special properties depending on the time of day. Their acolytes utilize powerful magics in flames, nature, and shadow.",
            flavor: '"<i>The turbulent intensity of the sun, matched only by the frigid stillness of the shadows...We shall have it all...</i>" <br>- Solunar Magus Slanovon',
        });
        $("#endalus").data("info", {
            name: "Endalus",
            desc: "Endalai are ancient technology. Many argue whether they are fully alive, but their fighting prowess cannot be debated.",
            flavor: '"<i>There they litter the battlefield like newly sown seeds, waiting to wake for the next bloodbath...</i>" <br>- Unknown Scylian Scribe',
        });
        $("#herald").data("info", {
            name: "Sledgeruin Disciple",
            desc: "Destruction is beauty as described by the core philosophy of the Sledgeruin path. Thus, it's important for all their followers to be able to smash any annoying half-deities with a big hammer!",
            flavor: '"<i>Ahh... the fresh smell of debris in the morning...</i>" <br>- Seldgeruin Master Laffa',
        });
        $("#sniper").data("info", {
            name: "Priestess of Mal",
            desc: "Being able to hit almost anything within their line of sight, the Preistesses of Mal are well trained to be one of the most formidable lines of defense.",
            flavor: '"<i>Not all higher powers are from this realm... Those who choose the unholy path of the Others exchange their waning sanity for an unusual power...</i><br>- Recount of Religion Vol II.',
        });
        $("#whirleant").data("info", {
            name: "Whirleant",
            desc: "These hostile remnants are thought to be spiritual children of the great guardian of the Deadwoods, Malcychlo. They attack and drive out anything in the forest they deem to be too powerful.",
            flavor: '"<i>From the corpses according come copius crops coursing, all along the forest floor.<br>Never another wilting willow ever more...</i>" <br>- Scylian Poet Yarchilov',
        });
        $("#zerkape").data("info", {
            name: "Zerkape",
            desc: "Prolonged exposure to the spiritual energy in the Deadwoods can drive animals mad, even beserk. The Zerkape was a common primate species, now reduced to a fierce, primal form.",
            flavor: '"<i>Their behavior is off... aggressive. I think- they see me... help! HELP! AH-- </i>" <br>- Recording from Biological Research Constra 708 AW',
        });
    }

    function addCharInfo() {
        $("#daegon").data("info", {
            name: "Dae-gon",
            title: "Wyvern of the West",
            desc: " Dae-gon is the second in command in the powerful ghost organization known as The Decade. He has great ambition, looking to overthrow the minor deity at the head of the organization by reviving the power of the old dragons and eventually ascending into godhood.",
            flavor: '"<i>The strength of dieties will turn paltry by my hand...</i>"',
        });
        $("#klous").data("info", {
            name: "Klous",
            title: "Grand Researcher",
            desc: "Klous has an unhealthy obsession with knowledge. Though he isn’t particularly without ethics, he has vowed to let his pursuit for knowledge guide his every action. He is convinced that this is the necessary creen to further the progress of humanity.",
            flavor: '"<i>Books are to a mind as a whetstone to a sword; though while a sword can slay hundreds, a mind can influence thousands.</i>"',
        });
        $("#mystery").data("info", {
            name: "???",
            title: "??????",
            desc: "An odd enitity that not many has seen until recently. It bears an uncanny resemblance to one specific sarcastic, masked Demilord.",
            flavor: '"<i>AAaa---aeiiii cccce plee s hhheellp</i>"',
        });
        $("#riadne").data("info", {
            name: "Riadne",
            title: "The Bounty Hunter",
            desc: "A blunt deserter of the Gunrunners, Riadne took on every odd job that came her way. Not many knows what she does with all her bounty, but her wallet always seems to be empty...",
            flavor: '"<i>I\'ll take it all... Thanks...</i>"',
        });
        $("#yesnila").data("info", {
            name: "Yesnila",
            title: "Divine Constra",
            desc: "Yesnila was born with a devastating bloodline mutation, accelerating the growth of her strength beyond what her body could handle. Thus, the repalcements began, part by part...",
            flavor: '"<i>While I may walk every realm, I will survive in none of them.</i>"',
        });
        $("#asthia").data("info", {
            name: "Asthia",
            title: "Patron of Flames",
            desc: "Former Principle Grand Magus of Flame Magic, Asthia abandoned her prior life in pursuit of becoming an Angekok and finding the secrets of immortality.",
            flavor: '"<i>Oh sweetheart, perhaps you ought to -- Ah... well... perhaps a more hands-on lesson then? </i>"',
        });
    }

    function addAbilInfo() {
        $("#bloom").data("info", {
            name: "Rising Bloom",
            rarity: "uncommon",
            cost: "3",
            desc: "Perform a 4 hit spin that pulls in enemies hit. Hits one extra time on Perfect Strike.",
            flavor: "There are few who can liberate themselves from the raging cyclones of the Fan of Typh.",
        });
        $("#crown").data("info", {
            name: "Crown of Impurity",
            rarity: "epic",
            cost: "4",
            desc: "Spawn 5 projectiles. Aim them  while paused, then they fire sequentially in the aimed direction, dealing damage to the first enemy hit.",
            flavor: '"<i>The Weeping Emperor knelt, facing his end... Above him, 5 sinister infusions of impure Mana orbited...</i>" <br>- The Tales of Vevenia',
        });
        $("#exec").data("info", {
            name: "Galeforce Execution",
            rarity: "common",
            cost: "3",
            desc: "Perform a dash slash forward that damages and knocks up all enemies hit.",
            flavor: '"<i>Be gone with the fleeting dust...</i>" <br>- Unknown',
        });
        $("#rage").data("info", {
            name: "Titan's Rage",
            rarity: "epic",
            cost: "4",
            desc: "Slam down with a giant club, dealing significant damage to all enemies hit and knocking up enemies around the area hit.",
            flavor: "An advanced technique involving infusing the user with the essence of ancient Titans.",
        });
    }

    function addItemsInfo() {
        $("#blade_dmg").data("info", {
            name: "Scroll of Seisin",
            rarity: "rare",
            desc: "Gain a Spirit Blade. Your Blades deal 1 more damage.",
            flavor: '"<i>Nothing is more infuriating than a well-made blade in the hands of a poorly-made wielder.</i>" - Silver Flash Seisin',
        });
        $("#blade_slash").data("info", {
            name: "Ring of the Bladecaller",
            rarity: "epic",
            desc: "Gain a Spirit Blade. Your Blades now slash at the end of a strike.",
            flavor: "A high tier relic of the School of Blades, used by masters to increase their will and push the limits of their blade control.",
        });
        $("#catalyst").data("info", {
            name: "Catalyst of the Apocalypse",
            rarity: "unique",
            durability: "1",
            desc: "Summon a barrage of meteors from above that does moderate damage to enemies hit.",
            flavor: "A stone imbued by a master sorcerer of unfathomable power who has long since passed. A worthy attempt at combating the deities.",
        });
        $("#cyclos").data("info", {
            name: "Blessing of the Se Ka",
            rarity: "common",
            desc: "Increase horizontal movement when charging attacks and abilities on the ground.",
            flavor: "Se Ka warriors are known for their nimble footing, being able to glide on dirt as if it were ice.",
        });
        $("#daemon").data("info", {
            name: "Daemonic Gaze",
            rarity: "unique",
            durability: "1",
            desc: "Block attacks in front while used. Deal damage to blocked enemies and drop self. When colliding with enemies, deal damage to them and drop self.",
            flavor: '"<i>It feels like... someone... something... is watching...</i>" - Unknown Scylian Soldier',
        });
        $("#demon_heart").data("info", {
            name: "Heart of Nahas",
            rarity: "unique",
            durability: "1",
            desc: "While held, make your next hit a Perfect Strike that restores a bit of health and mana. Drops self upon hitting enemy with Perfect Strike.",
            flavor: '"<i>The heartbeats... the pounding... please... MAKE IT STOP!!!!!</i>"',
        });
        $("#eye").data("info", {
            name: "Eye of Dae-gon",
            rarity: "unique",
            durability: "50",
            desc: "Spew out a stream of intense fire in front while being used.",
            flavor: "A personal artifact of the Wyvern of the West, Dae-gon. It holds a scrap of the power of one of the strongest Dragons of Scylia, Daegeon.",
        });
        $("#flames").data("info", {
            name: "Heart of the Embermaiden",
            rarity: "common",
            desc: "Increase your maximum health by 20.",
            flavor: "A solidified heart of a legendary remnant spirit, it is said to bring warmth and health to those around it.",
        });
        $("#jump").data("info", {
            name: "Stormward Wings",
            rarity: "common",
            desc: "Increase jump strength.",
            flavor: "Constra wings made from the remains of a powerful spirit remnant.",
        });
    }

    function addLevelsInfo() {
        $("#lv1").data("info", {
            desc: "Believe it or not, the bustling <b>Deadwoods</b> was once a barren field. Ages ago, there was a great war, the <b>War of Ages</b>. Battles raged across the field, and <b>corpses would fertilize the soil for years to come</b>. Nutrients soaked deep into            the land, and from this great travesty came a <b>forest brimming with life</b>.            <br><br>            However, those who died did not rest easy. The pure concentration of mortal mana causes            <b> odd mutations in the life that grows</b>. Rumors claim that there is a <b>great guardian of the Deadwoods</b>.            The fabled guardian <b>drives out any powerful entities in the forest</b>, assuming that any <b>being of significant strength</b> would be the <b>catalyst of another great war</b>.",
        });
    }

    function positionCarouselItems(carouselEl) {
        let items = $(carouselEl.find(".carouselItem"));
        let desc = $($(carouselEl).siblings(".carouselInfo"));
        let centerVert = carouselEl.data("centerVert");
        let numItems = items.length;
        items.each(function (index) {
            if (index === 0) {
                let bottom = 0;
                if (centerVert) {
                    // Subtract half height to center vertically
                    bottom += $(this).height() * -2;
                }
                // Position selected element
                $(this).css({
                    bottom: bottom + "px",
                    "z-index": -index,
                    transform: "scale(400%)",
                    filter: "drop-shadow(0px 1px 1px rgba(200, 200, 200, 0.2)) drop-shadow(0px -1px 1px rgba(200, 200, 200, 0.2)) drop-shadow(1px 0px 1px rgba(200, 200, 200, 0.2)) drop-shadow(-1px 0px 1px rgba(200, 200, 200, 0.2))",
                    right: 180 - $(this).width() * 2 + "px", // Lots of math here to "center" the bottom right origin image
                });
                // Update info
                let info = $(this).data("info");
                if (info !== undefined) {
                    desc.find(".carouselTitle").html(info.name);
                    desc.find(".carouselDesc").html(info.desc);
                    desc.find(".carouselFlavor").html(info.flavor);
                    if ("cost" in info) {
                        desc.find(".costText").html(info.cost);
                        desc.find(".cost").show();
                    } else {
                        desc.find(".cost").hide();
                    }
                    if ("title" in info) {
                        desc.find(".subtitleText").html(info.title);
                        desc.find(".title").show();
                    } else {
                        desc.find(".title").hide();
                    }
                    if ("durability" in info) {
                        desc.find(".durabilityText").html(info.durability);
                        desc.find(".durability").show();
                    } else {
                        desc.find(".durability").hide();
                    }
                    if ("rarity" in info) {
                        let rarityText = desc.find(".rarityText");
                        rarityText
                            .removeClass(
                                "common uncommon rare epic legendary unique"
                            )
                            .addClass(info.rarity);
                        rarityText.html(info.rarity);
                        desc.find(".rarity").show();
                    } else {
                        desc.find(".rarity").hide();
                    }
                } else {
                    desc.find(".rarity").hide();
                    desc.find(".durability").hide();
                    desc.find(".title").hide();
                    desc.find(".cost").hide();
                }

                // Change to active animation
                if (carouselEl.data("hasActive")) {
                    let originalSrc = $(this).attr("src");
                    let newSrc = originalSrc.split(".")[0] + "_active.gif";
                    $(this).attr("src", newSrc);
                }
            } else {
                let bottom = 20 + index * 20;
                let scale = 200 - index * 15;
                let baseRightOffset = (index * 540) / numItems + 200;
                if (centerVert) {
                    // Subtract half height to center vertically
                    bottom += $(this).height() * (scale / -200);
                }

                // Position idle element
                $(this).css({
                    bottom: bottom + "px",
                    "z-index": -index,
                    transform: "scale(" + scale + "%)",
                    filter:
                        "blur(" +
                        index +
                        "px) brightness(" +
                        (100 - 5 * index) +
                        "%) saturate(" +
                        (100 - 5 * index) +
                        "%) contrast(" +
                        (100 - 5 * index) +
                        "%) opacity(" +
                        (100 - 5 * index) +
                        "%)",
                    right:
                        baseRightOffset -
                        $(this).width() * (scale / 200) +
                        "px", // Lots of math here to "center" the bottom right origin image
                });

                // Change out of active animation
                if (carouselEl.data("hasActive")) {
                    let originalSrc = $(this).attr("src");
                    let newSrc = originalSrc.replaceAll("_active", "");
                    $(this).attr("src", newSrc);
                }
            }
        });
    }

    function positionCenterCarouselItems(carouselEl) {
        let items = $(carouselEl.find(".carouselItem"));
        let desc = $($(carouselEl).siblings(".carouselInfo"));
        items.each(function (index) {
            if (index === 0) {
                $(this).show();
                // Update info
                let info = $(this).data("info");
                if (info !== undefined) {
                    desc.find(".carouselTitle").html(info.name);
                    desc.find(".carouselDesc").html(info.desc);
                    desc.find(".carouselFlavor").html(info.flavor);
                    if ("cost" in info) {
                        desc.find(".costText").html(info.cost);
                        desc.find(".cost").show();
                    } else {
                        desc.find(".cost").hide();
                    }
                    if ("title" in info) {
                        desc.find(".subtitleText").html(info.title);
                        desc.find(".title").show();
                    } else {
                        desc.find(".title").hide();
                    }
                    if ("durability" in info) {
                        desc.find(".durabilityText").html(info.durability);
                        desc.find(".durability").show();
                    } else {
                        desc.find(".durability").hide();
                    }
                    if ("rarity" in info) {
                        let rarityText = desc.find(".rarityText");
                        rarityText
                            .removeClass(
                                "common uncommon rare epic legendary unique"
                            )
                            .addClass(info.rarity);
                        rarityText.html(info.rarity);
                        desc.find(".rarity").show();
                    } else {
                        desc.find(".rarity").hide();
                    }
                } else {
                    desc.find(".rarity").hide();
                    desc.find(".durability").hide();
                    desc.find(".title").hide();
                    desc.find(".cost").hide();
                }
            } else {
                $(this).hide();
            }
        });
    }

    function hookNavEvents() {
        $("#toAbil").click(function () {
            $(".abilitiesBlock")[0].scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
            });
        });
        $("#toChar").click(function () {
            $(".charactersBlock")[0].scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
            });
        });
        $("#toEnem").click(function () {
            $(".enemiesBlock")[0].scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
            });
        });
        $("#toPower").click(function () {
            $(".powerupsBlock")[0].scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
            });
        });
        $("#toMove").click(function () {
            $(".levelBlock")[0].scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
            });
        });
        /* $("#toMedia").click(function () {
            $(".trailerBlock")[0].scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
            });
        });*/
    }

    function fadeOnScroll() {
        // Fade content toward top starting from 20% down
        let startPos = 0.2;
        // Cache window object
        let $w = $(window);
        // Go through each element and check its relative position within the viewport
        $(".fadeScroll").each(function () {
            // Get current relative position in viewport, based on 5/8th the way down the element
            let pos =
                $(this).offset().top +
                ($(this).height() * 5) / 8 -
                $w.scrollTop();
            // Get viewport height
            let vh = $w.height();
            if (pos < vh * startPos) {
                // If element has past the starting threshold, we fade it
                $(this).css("opacity", pos / (vh * startPos));
            } else {
                // Fade content toward top starting from 80% down
                let startPos = 0.8;
                // Get current relative position in viewport, based on 1/4th the way down the element
                let pos =
                    $(this).offset().top +
                    ($(this).height() * 1) / 4 -
                    $w.scrollTop();
                // Get viewport height
                if (pos > vh * startPos) {
                    // If element has past the bottom threshold, we fade it
                    $(this).css(
                        "opacity",
                        1 - (pos - vh * startPos) / (vh - vh * startPos)
                    );
                } else {
                    $(this).css("opacity", 1);
                }
            }
        });
    }

    function preloadBanners() {
        $(".banner").each(function () {
            let sourceFront = "images/banner/" + $(this).data("source");
            for (var i = 1; i <= 29; i++) {
                let newSrc = sourceFront + i + ".png";
                preloadImage(newSrc);
            }
        });
    }

    $(document).ready(function () {
        $(".mobileWrapper").scroll(function () {
            fadeOnScroll();
            let currTop = $(this).scrollTop();
            let vh = $(this).height();

            $(".eclo1").css({
                "margin-bottom": -20 + currTop / 50 + "%",
                "margin-right": -4 - currTop / 40 + "%",
            });

            $(".logo").css({
                bottom: 100 + currTop / 3 + "px",
                left: -(currTop / 3) + "px",
            });

            $(".banner").each(function () {
                let sourceFront = "images/banner/" + $(this).data("source");
                let topOffset = 300;
                let elTop = $(this).offset().top + topOffset;
                let index = 1;

                if (elTop < vh) {
                    let scrolledAmt = 1 - elTop / vh; // From 0 to 1
                    index += Math.round(scrolledAmt * 29);
                    index = Math.min(index, 29);

                    // Fade text
                    let text = $(this).find(".bannerText");
                    let basePerc = scrolledAmt * 100;
                    let fadeWidth = 20;

                    // Invert if needed
                    if ($(this).hasClass("rtl")) {
                        basePerc = 100 - basePerc;
                    }
                    basePerc = Math.max(
                        Math.min(basePerc, 100 - fadeWidth),
                        fadeWidth
                    ); // Clamp between fadeWidth so we dont' go over 0% and 100%;
                    let grad =
                        "-webkit-linear-gradient( 0deg, transparent 0%, transparent " +
                        (basePerc - fadeWidth) +
                        "%, rgb(255, 200, 255) " +
                        basePerc +
                        "%, transparent " +
                        (basePerc + fadeWidth) +
                        "%, transparent 100%)";

                    text.css({
                        background: grad,
                        "-webkit-background-clip": "text",
                    });
                }
                let newSrc = sourceFront + index + ".png";
                $(this).find(".char img").attr("src", newSrc);
            });
        });

        addEnemyInfo();
        addAbilInfo();
        addCharInfo();
        addItemsInfo();
        addLevelsInfo();
        hookNavEvents();

        // Carousel
        $(".nextButton").click(function () {
            let carouselEl = $($(this).parent()).siblings(".carouselList");
            let firstEl = $($(carouselEl).find(".carouselItem")).first();
            $(firstEl).detach();
            $(carouselEl).append(firstEl);
            if (carouselEl.hasClass("wide")) {
                positionCenterCarouselItems(carouselEl);
            } else {
                positionCarouselItems(carouselEl);
            }
        });
        $(".prevButton").click(function () {
            let carouselEl = $($(this).parent()).siblings(".carouselList");
            let lastEl = $($(carouselEl).find(".carouselItem")).last();
            $(lastEl).detach();
            $(carouselEl).prepend(lastEl);
            if (carouselEl.hasClass("wide")) {
                positionCenterCarouselItems(carouselEl);
            } else {
                positionCarouselItems(carouselEl);
            }
        });

        $(".carousel").each(function () {
            // Change on scroll
            /*$(this).on("wheel", (event) => {
                event.originalEvent.preventDefault();
                let scrollDist = Math.abs(event.originalEvent.deltaY);
                console.log(scrollDist);
                if (event.originalEvent.deltaY > 0) {
                    let buttonEl = $(this).find(".nextButton");
                    buttonEl.click();
                } else {
                    let buttonEl = $(this).find(".prevButton");
                    buttonEl.click();
                }
            });*/

            // Change on swipe
            $(this).on("touchstart", (event) => {
                touchstartX = event.changedTouches[0].screenX;
            });

            $(this).on("touchend", (event) => {
                touchendX = event.changedTouches[0].screenX;
                diff = Math.abs(touchendX - touchstartX);
                if (diff < 80) {
                    return;
                }
                if (touchendX < touchstartX) {
                    let buttonEl = $(this).find(".nextButton");
                    buttonEl.click();
                }
                if (touchendX > touchstartX) {
                    let buttonEl = $(this).find(".prevButton");
                    buttonEl.click();
                }
            });
        });

        // Set up banners
        $("#acolyteBanner").data("source", "banner_char1/banner_char");
        $("#movementBanner").data("source", "banner_char2/banner_char");

        preloadBanners();
        // Set up carousel
        $(".abilityCarousel").find(".carouselList").data("centerVert", true);
        $(".abilityCarousel").find(".carouselList").data("hasActive", true);
        $(".enemyCarousel").find(".carouselList").data("centerVert", false);
        $(".enemyCarousel").find(".carouselList").data("hasActive", true);
        $(".characterCarousel").find(".carouselList").data("centerVert", false);
        $(".characterCarousel").find(".carouselList").data("hasActive", false);
        $(".powerupCarousel").find(".carouselList").data("centerVert", true);
        $(".powerupCarousel").find(".carouselList").data("hasActive", false);

        $(".nextButton").click();
        $(".prevButton").click();
        $(".mobileWrapper").trigger("scroll");
    });
})();
