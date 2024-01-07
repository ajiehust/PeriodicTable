let   elements = null;

let tooltipContentTemplate = `
<div class="ele-details">
    <h1 class="ele-name">{ele-name}</h1>
    <p class="ele-name-origin">{ele-name-origin}</p>
    <p class="ele-desc">{ele-desc}</p>
    <ul class="ele-addtional-infos">
        <li class="ele-addtional-info">
            <span class="ele-btn">{ele-year}</span>
        </li>
        <li class="ele-addtional-info">
            <sapn class="ele-btn">{ele-loc}</sapn>
        </li>
    </ul>
</div>`;

let tooltipInstance = null;

$("#query").on("keyup", function () {
  var q = $(this).val().trim().toLowerCase();
  $(".ele:not(.empty)").each(function () {
    var _this = $(this);
    if (
      _this.text().trim().toLowerCase().indexOf(q) == -1 &&
      _this.data("keywords").trim().toLowerCase().indexOf(q) == -1
    )
      _this.addClass("ele-fade");
    else _this.removeClass("ele-fade");
  });
});
$(".legend")
  .on("mouseover", function () {
    $(".ele:not(.empty)").tooltipster("close");
    var category = $(this).data("hover");
    $(".ele:not(.empty):not('." + category + "')").addClass("ele-fade");
    $(".ele." + category).removeClass("ele-fade");
  })
  .on("mouseout", function () {
    $(".ele").removeClass("ele-fade");
    $("#query").trigger("keyup");
  });
function generateTooltip(instance, helper) {
  let ele = $(helper.origin);
  if (ele.hasClass("ele-selected")) {
    ele.removeClass("ele-selected");
    return false;
  }
  if (ele.hasClass("ele-fade")) {
    return false;
  }
  $(".ele").removeClass("ele-selected");
  ele.addClass("ele-selected");
  let eleName = ele.text().trim();
  let element = elements[eleName];
  if (!element) {
    element = {
      atomic_number: "",
      name_origin: "",
      description: "",
      atomic_weight: "",
      discovery_location: "",
      discovery_year: ""
    }
  };
  let tooltipContent = tooltipContentTemplate
    .replace("{ele-name}", eleName)
    .replace("{ele-name-origin}", element.name_origin)
    .replace("{ele-desc}", element.description)
    .replace("{ele-year}", element.discovery_year)
    .replace("{ele-loc}", element.discovery_location);
  instance.content(tooltipContent);
  instance.on("close", () => {
    ele.removeClass("ele-selected");
  });
}


$(document).ready(function() {
    elements = {
        "H": {
          "atomic_number": 1,
          "name_origin": "Greek: hydro (water) and genes (generate)",
          "description": "Colourless, odourless gaseous chemical element. Lightest and most abundant element in the universe. Present in water and in all organic compounds. Chemically reacts with most elements. Discovered by Henry Cavendish in 1776.",
          "atomic_weight": 1.008,
          "discovery_location": "England",
          "discovery_year": 1766
        },
        "He": {
          "atomic_number": 2,
          "name_origin": "Greek: hêlios (sun).",
          "description": "Colourless, odourless gaseous nonmetallic element. Belongs to group 18 of the periodic table. Lowest boiling point of all elements and can only be solidified under pressure. Chemically inert, no known compounds. Discovered in the solar spectrum in 1868 by Lockyer.",
          "atomic_weight": 4.002602,
          "discovery_location": "Scotland/Sweden",
          "discovery_year": 1895
        },
        "Li": {
          "atomic_number": 3,
          "name_origin": "Greek: lithos (stone).",
          "description": "Socket silvery metal. First member of group 1 of the periodic table. Lithium salts are used in psychomedicine.",
          "atomic_weight": 6.94,
          "discovery_location": "Sweden",
          "discovery_year": 1817
        },
        "Be": {
          "atomic_number": 4,
          "name_origin": "Greek: beryllos, \"beryl\" (a mineral).",
          "description": "Grey metallic element of group 2 of the periodic table. Is toxic and can cause severe lung diseases and dermatitis. Shows high covalent character. It was isolated independently by F. Wohler and A.A. Bussy in 1828.",
          "atomic_weight": 9.0121831,
          "discovery_location": "Germany/France",
          "discovery_year": 1798
        },
        "B": {
          "atomic_number": 5,
          "name_origin": "From Arabic and Persian words for borax.",
          "description": "An element of group 13 of the periodic table. There are two allotropes, amorphous boron is a brown power, but metallic boron is black. The metallic form is hard (9.3 on Mohs' scale) and a bad conductor in room temperatures. It is never found free in nature. Boron-10 is used in nuclear reactor control rods and shields. It was discovered in 1808 by Sir Humphry Davy and by J.L. Gay-Lussac and L.J. Thenard.",
          "atomic_weight": 10.81,
          "discovery_location": "England/France",
          "discovery_year": 1808
        },
        "C": {
          "atomic_number": 6,
          "name_origin": "Latin: carbo, (charcoal).",
          "description": "Carbon is a member of group 14 of the periodic table. It has three allotropic forms of it, diamonds, graphite and fullerite. Carbon-14 is commonly used in radioactive dating. Carbon occurs in all organic life and is the basis of organic chemistry. Carbon has the interesting chemical property of being able to bond with itself, and a wide variety of other elements.",
          "atomic_weight": 12.011,
          "discovery_location": "",
          "discovery_year": ""
        },
        "N": {
          "atomic_number": 7,
          "name_origin": "Greek: nitron and genes, (soda forming).",
          "description": "Colourless, gaseous element which belongs to group 15 of the periodic table. Constitutes ~78% of the atmosphere and is an essential part of the ecosystem. Nitrogen for industrial purposes is acquired by the fractional distillation of liquid air. Chemically inactive, reactive generally only at high temperatures or in electrical discharges. It was discovered in 1772 by D. Rutherford.",
          "atomic_weight": 14.007,
          "discovery_location": "Scotland",
          "discovery_year": 1772
        },
        "O": {
          "atomic_number": 8,
          "name_origin": "Greek: oxys and genes, (acid former).",
          "description": "A colourless, odourless gaseous element belonging to group 16 of the periodic table. It is the most abundant element present in the earth's crust. It also makes up 20.8% of the Earth's atmosphere. For industrial purposes, it is separated from liquid air by fractional distillation. It is used in high temperature welding, and in breathing. It commonly comes in the form of Oxygen, but is found as Ozone in the upper atmosphere. It was discovered by Priestley in 1774.",
          "atomic_weight": 15.999,
          "discovery_location": "England/Sweden",
          "discovery_year": 1774
        },
        "F": {
          "atomic_number": 9,
          "name_origin": "Latin: fluere (flow).",
          "description": "A poisonous pale yellow gaseous element belonging to group 17 of the periodic table (The halogens). It is the most chemically reactive and electronegative element. It is highly dangerous, causing severe chemical burns on contact with flesh. Fluorine was identified by Scheele in 1771 and first isolated by Moissan in 1886.",
          "atomic_weight": 18.998403163,
          "discovery_location": "France",
          "discovery_year": 1886
        },
        "Ne": {
          "atomic_number": 10,
          "name_origin": "Greek: neos (new).",
          "description": "Colourless gaseous element of group 18 on the periodic table (noble gases). Neon occurs in the atmosphere, and comprises 0.0018% of the volume of the atmosphere. It has a distinct reddish glow when used in discharge tubes and neon based lamps. It forms almost no chemical compounds. Neon was discovered in 1898 by Sir William Ramsey and M.W. Travers.",
          "atomic_weight": 20.1797,
          "discovery_location": "England",
          "discovery_year": 1898
        },
        "Na": {
          "atomic_number": 11,
          "name_origin": "Medieval Latin: sodanum, (headache remedy); symbol from Latin natrium, (sodium carbonate).",
          "description": "Soft silvery reactive element belonging to group 1 of the periodic table (alkali metals). It is highly reactive, oxidizing in air and reacting violently with water, forcing it to be kept under oil. It was first isolated by Humphrey Davy in 1807.",
          "atomic_weight": 22.98976928,
          "discovery_location": "England",
          "discovery_year": 1807
        },
        "Mg": {
          "atomic_number": 12,
          "name_origin": "From Magnesia ancient city in district of Thessaly, Greece.",
          "description": "Silvery metallic element belonging to group 2 of the periodic table (alkaline-earth metals). It is essential for living organisms, and is used in a number of light alloys. Chemically very reactive, it forms a protective oxide coating when exposed to air and burns with an intense white flame. It also reacts with sulphur, nitrogen and the halogens. First isolated by Bussy in 1828.",
          "atomic_weight": 24.305,
          "discovery_location": "England",
          "discovery_year": 1808
        },
        "Al": {
          "atomic_number": 13,
          "name_origin": "Latin: alumen, aluminis, (alum).",
          "description": "Silvery-white lustrous metallic element of group 3 of the periodic table. Highly reactive but protected by a thin transparent layer of the oxide which quickly forms in air. There are many alloys of aluminum, as well as a good number of industrial uses. Makes up 8.1% of the Earth's crust, by weight. Isolated in 1825 by H.C. Oersted.",
          "atomic_weight": 26.9815385,
          "discovery_location": "Denmark",
          "discovery_year": 1825
        },
        "Si": {
          "atomic_number": 14,
          "name_origin": "Latin: silex, silicus, (flint).",
          "description": "Metalloid element belonging to group 14 of the periodic table. It is the second most abundant element in the Earth's crust, making up 25.7% of it by weight. Chemically less reactive than carbon. First identified by Lavoisier in 1787 and first isolated in 1823 by Berzelius.",
          "atomic_weight": 28.085,
          "discovery_location": "Sweden",
          "discovery_year": 1824
        },
        "P": {
          "atomic_number": 15,
          "name_origin": "Greek: phosphoros, (bringer of light).",
          "description": "Non-metallic element belonging to group 15 of the periodic table. Has a multiple allotropic forms. Essential element for living organisms. It was discovered by Brandt in 1669.",
          "atomic_weight": 30.973761998,
          "discovery_location": "Germany",
          "discovery_year": 1669
        },
        "S": {
          "atomic_number": 16,
          "name_origin": "Latin: sulphur (brimstone).",
          "description": "Yellow, nonmetallic element belonging to group 16 of the periodic table. It is an essential element in living organisms, needed in the amino acids cysteine and methionine, and hence in many proteins. Absorbed by plants from the soil as sulphate ion.",
          "atomic_weight": 32.06,
          "discovery_location": "",
          "discovery_year": ""
        },
        "Cl": {
          "atomic_number": 17,
          "name_origin": "Greek: chlôros (greenish yellow).",
          "description": "Halogen element. Poisonous greenish-yellow gas. Occurs widely in nature as sodium chloride in seawater. Reacts directly with many elements and compounds, strong oxidizing agent. Discovered by Karl Scheele in 1774. Humphrey David confirmed it as an element in 1810.",
          "atomic_weight": 35.45,
          "discovery_location": "Sweden",
          "discovery_year": 1774
        },
        "Ar": {
          "atomic_number": 18,
          "name_origin": "Greek: argos (inactive).",
          "description": "Monatomic noble gas. Makes up 0.93% of the air. Colourless, odorless. Is inert and has no true compounds. Lord Rayleigh and Sir william Ramsey identified argon in 1894.",
          "atomic_weight": 39.948,
          "discovery_location": "Scotland",
          "discovery_year": 1894
        },
        "K": {
          "atomic_number": 19,
          "name_origin": "English: pot ash; symbol from Latin: kalium, (alkali).",
          "description": "Soft silvery metallic element belonging to group 1 of the periodic table (alkali metals). Occurs naturally in seawater and a many minerals. Highly reactive, chemically, it resembles sodium in its behavior and compounds. Discovered by Sir Humphry Davy in 1807.",
          "atomic_weight": 39.0983,
          "discovery_location": "England",
          "discovery_year": 1807
        },
        "Ca": {
          "atomic_number": 20,
          "name_origin": "Latin: calx, calcis (lime).",
          "description": "Soft grey metallic element belonging to group 2 of the periodic table. Used a reducing agent in the extraction of thorium, zirconium and uranium. Essential element for living organisms.",
          "atomic_weight": 40.078,
          "discovery_location": "England",
          "discovery_year": 1808
        },
        "Sc": {
          "atomic_number": 21,
          "name_origin": "Latin: Scandia, Scandinavia.",
          "description": "Rare soft silvery metallic element belonging to group 3 of the periodic table. There are ten isotopes, nine of which are radioactive and have short half-lives. Predicted in 1869 by Mendeleev, isolated by Nilson in 1879.",
          "atomic_weight": 44.955908,
          "discovery_location": "Sweden",
          "discovery_year": 1879
        },
        "Ti": {
          "atomic_number": 22,
          "name_origin": "Greek: titanos (Titans).",
          "description": "White metallic transition element. Occurs in numerous minerals. Used in strong, light corrosion-resistant alloys. Forms a passive oxide coating when exposed to air. First discovered by Gregor in 1789.",
          "atomic_weight": 47.867,
          "discovery_location": "England",
          "discovery_year": 1791
        },
        "V": {
          "atomic_number": 23,
          "name_origin": "From Scandinavian goddess, Vanadis.",
          "description": "Soft and ductile, bright white metal. Good resistance to corrosion by alkalis, sulphuric and hydrochloric acid. It oxidizes readily about 933K. There are two naturally occurring isotopes of vanadium, and 5 radioisotopes, V-49 having the longest half-life at 337 days. Vanadium has nuclear applications, the foil is used in cladding titanium to steel, and vanadium-gallium tape is used to produce a superconductive magnet. Originally discovered by Andres Manuel del Rio of Mexico City in 1801. His discovery went unheeded, however, and in 1820, Nils Gabriel Sefstron of Sweden rediscovered it. Metallic vanadium was isolated by Henry Enfield Roscoe in 1867. The name vanadium comes from Vanadis, a goddess of Scandinavian mythology. Silvery-white metallic transition element. Vanadium is essential to Ascidians. Rats and chickens are also known to require it. Metal powder is a fire hazard, and vanadium compounds should be considered highly toxic. May cause lung cancer if inhaled.",
          "atomic_weight": 50.9415,
          "discovery_location": "Sweden",
          "discovery_year": 1830
        },
        "Cr": {
          "atomic_number": 24,
          "name_origin": "Greek: chrôma (color).",
          "description": "Hard silvery transition element. Used in decorative electroplating. Discovered in 1797 by Vauquelin.",
          "atomic_weight": 51.9961,
          "discovery_location": "France",
          "discovery_year": 1797
        },
        "Mn": {
          "atomic_number": 25,
          "name_origin": "Latin: magnes (magnet); Italian: manganese.",
          "description": "Grey brittle metallic transition element. Rather electropositive, combines with some non-metals when heated. Discovered in 1774 by Scheele.",
          "atomic_weight": 54.938044,
          "discovery_location": "Sweden",
          "discovery_year": 1774
        },
        "Fe": {
          "atomic_number": 26,
          "name_origin": "Anglo-Saxon: iron; symbol from Latin: ferrum (iron).",
          "description": "Silvery malleable and ductile metallic transition element. Has nine isotopes and is the fourth most abundant element in the earth's crust. Required by living organisms as a trace element (used in hemoglobin in humans.) Quite reactive, oxidizes in moist air, displaces hydrogen from dilute acids and combines with nonmetallic elements.",
          "atomic_weight": 55.845,
          "discovery_location": "",
          "discovery_year": ""
        },
        "Co": {
          "atomic_number": 27,
          "name_origin": "German: kobold (goblin).",
          "description": "Light grey transition element. Some meteorites contain small amounts of metallic cobalt. Generally alloyed for use. Mammals require small amounts of cobalt salts. Cobalt-60, an artificially produced radioactive isotope of Cobalt is an important radioactive tracer and cancer-treatment agent. Discovered by G. Brandt in 1737.",
          "atomic_weight": 58.933194,
          "discovery_location": "Sweden",
          "discovery_year": 1739
        },
        "Ni": {
          "atomic_number": 28,
          "name_origin": "German: kupfernickel (false copper).",
          "description": "Malleable ductile silvery metallic transition element. Discovered by A.F. Cronstedt in 1751.",
          "atomic_weight": 58.6934,
          "discovery_location": "Sweden",
          "discovery_year": 1751
        },
        "Cu": {
          "atomic_number": 29,
          "name_origin": "Symbol from Latin: cuprum (island of Cyprus famed for its copper mines).",
          "description": "Red-brown transition element. Known by the Romans as 'cuprum.' Extracted and used for thousands of years. Malleable, ductile and an excellent conductor of heat and electricity. When in moist conditions, a greenish layer forms on the outside.",
          "atomic_weight": 63.546,
          "discovery_location": "",
          "discovery_year": ""
        },
        "Zn": {
          "atomic_number": 30,
          "name_origin": "German: zink (German for tin).",
          "description": "Blue-white metallic element. Occurs in multiple compounds naturally. Five stable isotopes are six radioactive isotopes have been found. Chemically a reactive metal, combines with oxygen and other non-metals, reacts with dilute acids to release hydrogen.",
          "atomic_weight": 65.38,
          "discovery_location": "",
          "discovery_year": ""
        },
        "Ga": {
          "atomic_number": 31,
          "name_origin": "Latin: Gallia (France).",
          "description": "Soft silvery metallic element, belongs to group 13 of the periodic table. The two stable isotopes are Ga-69 and Ga-71. Eight radioactive isotopes are known, all having short half-lives. Gallium Arsenide is used as a semiconductor. Corrodes most other metals by diffusing into their lattice. First identified by Francois Lecoq de Boisbaudran in 1875.",
          "atomic_weight": 69.723,
          "discovery_location": "France",
          "discovery_year": 1875
        },
        "Ge": {
          "atomic_number": 32,
          "name_origin": "Latin: Germania (Germany).",
          "description": "Lustrous hard metalloid element, belongs to group 14 of the periodic table. Forms a large number of organometallic compounds. Predicted by Mendeleev in 1871, it was actually found in 1886 by Winkler.",
          "atomic_weight": 72.63,
          "discovery_location": "Germany",
          "discovery_year": 1886
        },
        "As": {
          "atomic_number": 33,
          "name_origin": "Greek: arsenikon; Latin: arsenicum, (both names for yellow pigment).",
          "description": "Metalloid element of group 15. There are three allotropes, yellow, black, and grey. Reacts with halogens, concentrated oxidizing acids and hot alkalis. Albertus Magnus is believed to have been the first to isolate the element in 1250.",
          "atomic_weight": 74.921595,
          "discovery_location": "",
          "discovery_year": ""
        },
        "Se": {
          "atomic_number": 34,
          "name_origin": "Greek: selênê (moon).",
          "description": "Metalloid element, belongs to group 16 of the periodic table. Multiple allotropic forms exist. Chemically resembles sulphur. Discovered in 1817 by Jons J. Berzelius.",
          "atomic_weight": 78.971,
          "discovery_location": "Sweden",
          "discovery_year": 1818
        },
        "Br": {
          "atomic_number": 35,
          "name_origin": "Greek: brômos (stench).",
          "description": "Halogen element. Red volatile liquid at room temperature. Its reactivity is somewhere between chlorine and iodine. Harmful to human tissue in a liquid state, the vapour irritates eyes and throat. Discovered in 1826 by Antoine Balard.",
          "atomic_weight": 79.904,
          "discovery_location": "France",
          "discovery_year": 1826
        },
        "Kr": {
          "atomic_number": 36,
          "name_origin": "Greek: kryptos (hidden).",
          "description": "Colorless gaseous element, belongs to the noble gases. Occurs in the air, 0.0001% by volume. It can be extracted from liquid air by fractional distillation. Generally not isolated, but used with other inert gases in fluorescent lamps. Five natural isotopes, and five radioactive isotopes. Kr-85, the most stable radioactive isotope, has a half-life of 10.76 years and is produced in fission reactors. Practically inert, though known to form compounds with Fluorine.",
          "atomic_weight": 83.798,
          "discovery_location": "Great Britain",
          "discovery_year": 1898
        },
        "Rb": {
          "atomic_number": 37,
          "name_origin": "Latin: rubidus (deep red); the color its salts impart to flames.",
          "description": "Soft silvery metallic element, belongs to group 1 of the periodic table. Rb-97, the naturally occurring isotope, is radioactive. It is highly reactive, with properties similar to other elements in group 1, like igniting spontaneously in air. Discovered spectroscopically in 1861 by W. Bunsen and G.R. Kirchoff.",
          "atomic_weight": 85.4678,
          "discovery_location": "Germany",
          "discovery_year": 1861
        },
        "Sr": {
          "atomic_number": 38,
          "name_origin": "From the Scottish town, Strontian.",
          "description": "Soft yellowish metallic element, belongs to group 2 of the periodic table. Highly reactive chemically. Sr-90 is present in radioactive fallout and has a half-life of 28 years. Discovered in 1798 by Klaproth and Hope, isolated in 1808 by Humphry Davy.",
          "atomic_weight": 87.62,
          "discovery_location": "Scotland",
          "discovery_year": 1790
        },
        "Y": {
          "atomic_number": 39,
          "name_origin": "From the Swedish village, Ytterby, where one of its minerals was first found.",
          "description": "Silvery-grey metallic element of group 3 on the periodic table. Found in uranium ores. The only natural isotope is Y-89, there are 14 other artificial isotopes. Chemically resembles the lanthanoids. Stable in the air below 400 degrees, celsius. Discovered in 1828 by Friedrich Wohler.",
          "atomic_weight": 88.90584,
          "discovery_location": "Finland",
          "discovery_year": 1789
        },
        "Zr": {
          "atomic_number": 40,
          "name_origin": "From the mineral, zircon.",
          "description": "Grey-white metallic transition element. Five natural isotopes and six radioactive isotopes are known. Used in nuclear reactors for a Neutron absorber. Discovered in 1789 by Martin Klaproth, isolated in 1824 by Berzelius.",
          "atomic_weight": 91.224,
          "discovery_location": "Germany",
          "discovery_year": 1789
        },
        "Nb": {
          "atomic_number": 41,
          "name_origin": "From Niobe; daughter of the mythical Greek king Tantalus.",
          "description": "Soft, ductile grey-blue metallic transition element. Used in special steels and in welded joints to increase strength. Combines with halogens and oxidizes in air at 200 degrees celsius. Discovered by Charles Hatchett in 1801 and isolated by Blomstrand in 1864. Called Columbium originally.",
          "atomic_weight": 92.90637,
          "discovery_location": "England",
          "discovery_year": 1801
        },
        "Mo": {
          "atomic_number": 42,
          "name_origin": "Greek: molybdos (lead).",
          "description": "Silvery-white, hard metallic transition element. It is chemically unreactive and is not affected by most acids. It oxidizes at high temperatures. There are seven natural isotopes, and four radioisotopes, Mo-93 being the most stable with a half-life of 3500 years. Molybdenum is used in almost all high-strength steels, it has nuclear applications, and is a catalyst in petroleum refining. Discovered in 1778 by Carl Welhelm Scheele of Sweden. Impure metal was prepared in 1782 by Peter Jacob Hjelm. The name comes from the Greek word molybdos which means lead. Trace amounts of molybdenum are required for all known forms of life. All molybdenum compounds should be considered highly toxic, and will also cause severe birth defects.",
          "atomic_weight": 95.95,
          "discovery_location": "Sweden",
          "discovery_year": 1778
        },
        "Tc": {
          "atomic_number": 43,
          "name_origin": "Greek: technêtos (artificial).",
          "description": "Radioactive metallic transition element. Can be detected in some stars and the fission products of uranium. First made by Perrier and Segre by bombarding molybdenum with deutrons, giving them Tc-97. Tc-99 is the most stable isotope with a half-life of 2.6*10^6 years. Sixteen isotopes are known. Organic technetium compounds are used in bone imaging. Chemical properties are intermediate between rhenium and manganese.",
          "atomic_weight": 97.90721,
          "discovery_location": "Italy",
          "discovery_year": 1937
        },
        "Ru": {
          "atomic_number": 44,
          "name_origin": "Latin: Ruthenia (Russia).",
          "description": "Hard white metallic transition element. Found with platinum, used as a catalyst in some platinum alloys. Dissolves in fused alkalis, and is not attacked by acids. Reacts with halogens and oxygen at high temperatures. Isolated in 1844 by K.K. Klaus.",
          "atomic_weight": 101.07,
          "discovery_location": "Russia",
          "discovery_year": 1844
        },
        "Rh": {
          "atomic_number": 45,
          "name_origin": "Greek: rhodon (rose). Its salts give a rosy solution.",
          "description": "Silvery white metallic transition element. Found with platinum and used in some platinum alloys. Not attacked by acids, dissolves only in aqua regia. Discovered in 1803 by W.H. Wollaston.",
          "atomic_weight": 102.9055,
          "discovery_location": "England",
          "discovery_year": 1803
        },
        "Pd": {
          "atomic_number": 46,
          "name_origin": "Named after the asteroid, Pallas, discovered in 1803.",
          "description": "Soft white ductile transition element. Found with some copper and nickel ores. Does not react with oxygen at normal temperatures. Dissolves slowly in hydrochloric acid. Discovered in 1803 by W.H. Wollaston.",
          "atomic_weight": 106.42,
          "discovery_location": "England",
          "discovery_year": 1803
        },
        "Ag": {
          "atomic_number": 47,
          "name_origin": "Anglo-Saxon: siolful, (silver); symbol from Latin: argentium.",
          "description": "White lustrous soft metallic transition element. Found in both its elemental form and in minerals. Used in jewellery, tableware and so on. Less reactive than silver, chemically.",
          "atomic_weight": 107.8682,
          "discovery_location": "",
          "discovery_year": ""
        },
        "Cd": {
          "atomic_number": 48,
          "name_origin": "Greek: kadmeia (ancient name for calamine (zinc oxide)).",
          "description": "Soft bluish metal belonging to group 12 of the periodic table. Extremely toxic even in low concentrations. Chemically similar to zinc, but lends itself to more complex compounds. Discovered in 1817 by F. Stromeyer.",
          "atomic_weight": 112.414,
          "discovery_location": "Germany",
          "discovery_year": 1817
        },
        "In": {
          "atomic_number": 49,
          "name_origin": "Latin: indicum (color indigo), the color it shows in a spectroscope.",
          "description": "Soft silvery element belonging to group 13 of the periodic table. The most common natural isotope is In-115, which has a half-life of 6*10^4 years. Five other radioisotopes exist. Discovered in 1863 by Reich and Richter.",
          "atomic_weight": 114.818,
          "discovery_location": "Germany",
          "discovery_year": 1863
        },
        "Sn": {
          "atomic_number": 50,
          "name_origin": "Named after Etruscan god, Tinia; symbol from Latin: stannum (tin).",
          "description": "Silvery malleable metallic element belonging to group 14 of the periodic table. Twenty-six isotopes are known, five of which are radioactive. Chemically reactive. Combines directly with chlorine and oxygen and displaces hydrogen from dilute acids.",
          "atomic_weight": 118.71,
          "discovery_location": "",
          "discovery_year": ""
        },
        "Sb": {
          "atomic_number": 51,
          "name_origin": "Greek: anti and monos (not alone); symbol from mineral stibnite.",
          "description": "Element of group 15. Multiple allotropic forms. The stable form of antimony is a blue-white metal. Yellow and black antimony are unstable non-metals. Used in flame-proofing, paints, ceramics, enamels, and rubber. Attacked by oxidizing acids and halogens. First reported by Tholden in 1450.",
          "atomic_weight": 121.76,
          "discovery_location": "",
          "discovery_year": ""
        },
        "Te": {
          "atomic_number": 52,
          "name_origin": "Latin: tellus (earth).",
          "description": "Silvery metalloid element of group 16. Eight natural isotopes, nine radioactive isotopes. Used in semiconductors and to a degree in some steels. Chemistry is similar to Sulphur. Discovered in 1782 by Franz Miller.",
          "atomic_weight": 127.6,
          "discovery_location": "Romania",
          "discovery_year": 1782
        },
        "I": {
          "atomic_number": 53,
          "name_origin": "Greek: iôeides (violet colored).",
          "description": "Dark violet nonmetallic element, belongs to group 17 of the periodic table. Insoluble in water. Required as a trace element for living organisms. One stable isotope, I-127 exists, in addition to fourteen radioactive isotopes. Chemically the least reactive of the halogens, and the most electropositive metallic halogen. Discovered in 1812 by Courtois.",
          "atomic_weight": 126.90447,
          "discovery_location": "France",
          "discovery_year": 1811
        },
        "Xe": {
          "atomic_number": 54,
          "name_origin": "Greek: xenos (strange).",
          "description": "Colourless, odourless gas belonging to group 18 on the periodic table (the noble gases.) Nine natural isotopes and seven radioactive isotopes are known. Xenon was part of the first noble-gas compound synthesized. Several others involving Xenon have been found since then. Xenon was discovered by Ramsey and Travers in 1898.",
          "atomic_weight": 131.293,
          "discovery_location": "England",
          "discovery_year": 1898
        },
        "Cs": {
          "atomic_number": 55,
          "name_origin": "Latin: coesius (sky blue); for the blue lines of its spectrum.",
          "description": "Soft silvery-white metallic element belonging to group 1 of the periodic table. One of the three metals which are liquid at room temperature. Cs-133 is the natural, and only stable, isotope. Fifteen other radioisotopes exist. Caesium reacts explosively with cold water, and ice at temperatures above 157K. Caesium hydroxide is the strongest base known. Caesium is the most electropositive, most alkaline and has the least ionization potential of all the elements. Known uses include the basis of atomic clocks, catalyst for the hydrogenation of some organic compounds, and in photoelectric cells. Caesium was discovered by Gustav Kirchoff and Robert Bunsen in Germany in 1860 spectroscopically. Its identification was based upon the bright blue lines in its spectrum. The name comes from the latin word caesius, which means sky blue. Caesium should be considered highly toxic. Some of the radioisotopes are even more toxic.",
          "atomic_weight": 132.90545196,
          "discovery_location": "Germany",
          "discovery_year": 1860
        },
        "Ba": {
          "atomic_number": 56,
          "name_origin": "Greek: barys (heavy or dense).",
          "description": "Silvery-white reactive element, belonging to group 2 of the periodic table. Soluble barium compounds are extremely poisonous. Identified in 1774 by Karl Scheele and extracted in 1808 by Humphry Davy.",
          "atomic_weight": 137.327,
          "discovery_location": "England",
          "discovery_year": 1808
        },
        "La": {
          "atomic_number": 57,
          "name_origin": "Greek: lanthanein (to be hidden).",
          "description": "(From the Greek word lanthanein, to line hidden) Silvery metallic element belonging to group 3 of the periodic table and oft considered to be one of the lanthanoids. Found in some rare-earth minerals. Twenty-five natural isotopes exist. La-139 which is stable, and La-138 which has a half-life of 10^10 to 10^15 years. The other twenty-three isotopes are radioactive. It resembles the lanthanoids chemically. Lanthanum has a low to moderate level of toxicity, and should be handled with care. Discovered in 1839 by C.G. Mosander.",
          "atomic_weight": 138.90547,
          "discovery_location": "Sweden",
          "discovery_year": 1839
        },
        "Ce": {
          "atomic_number": 58,
          "name_origin": "Named after the asteroid, Ceres, discovered two years before the element.",
          "description": "Silvery metallic element, belongs to the lanthanoids. Four natural isotopes exist, and fifteen radioactive isotopes have been identified. Used in some rare-earth alloys. The oxidized form is used in the glass industry. Discovered by Martin .H. Klaproth in 1803.",
          "atomic_weight": 140.116,
          "discovery_location": "Sweden/Germany",
          "discovery_year": 1803
        },
        "Pr": {
          "atomic_number": 59,
          "name_origin": "Greek: prasios and didymos (green twin); from its green salts.",
          "description": "Soft silvery metallic element, belongs to the lanthanoids. Only natural isotope is Pr-141 which is not radioactive. Fourteen radioactive isotopes have been artificially produced. Used in rare-earth alloys. Discovered in 1885 by C.A. von Welsbach.",
          "atomic_weight": 140.90766,
          "discovery_location": "Austria",
          "discovery_year": 1885
        },
        "Nd": {
          "atomic_number": 60,
          "name_origin": "Greek: neos and didymos (new twin).",
          "description": "Soft bright silvery metallic element, belongs to the lanthanoids. Seven natural isotopes, Nd-144 being the only radioactive one with a half-life of 10^10 to 10^15 years. Six artificial radioisotopes have been produced. The metal is used in glass works to color class a shade of violet-purple and make it dichroic. One of the more reactive rare-earth metals, quickly reacts with air. Used in some rare-earth alloys. Neodymium is used to color the glass used in welder's glasses. Neodymium is also used in very powerful, permanent magnets (Nd2Fe14B). Discovered by Carl F. Auer von Welsbach in Austria in 1885 by separating didymium into its elemental components Praseodymium and neodymium. The name comes from the Greek words 'neos didymos' which means 'new twin'. Neodymium should be considered highly toxic, however evidence would seem to show that it acts as little more than a skin and eye irritant. The dust however, presents a fire and explosion hazard.",
          "atomic_weight": 144.242,
          "discovery_location": "Austria",
          "discovery_year": 1925
        },
        "Pm": {
          "atomic_number": 61,
          "name_origin": "Named for the Greek god, Prometheus.",
          "description": "Soft silvery metallic element, belongs to the lanthanoids. Pm-147, the only natural isotope, is radioactive and has a half-life of 252 years. Eighteen radioisotopes have been produced, but all have very short half-lives. Found only in nuclear decay waste. Pm-147 is of interest as a beta-decay source, however Pm-146 and Pm-148 have to be removed from it first, as they generate gamma radiation. Discovered by J.A. Marinsky, L.E. Glendenin and C.D. Coryell in 1947.",
          "atomic_weight": 144.91276,
          "discovery_location": "United States",
          "discovery_year": 1945
        },
        "Sm": {
          "atomic_number": 62,
          "name_origin": "Named after the mineral samarskite.",
          "description": "Soft silvery metallic element, belongs to the lanthanoids. Seven natural isotopes, Sm-147 is the only radioisotope, and has a half-life of 2.5*10^11 years. Used for making special alloys needed in the production of nuclear reactors. Also used as a neutron absorber. Small quantities of samarium oxide is used in special optical glasses. The largest use of the element is its ferromagnetic alloy which produces permanent magnets that are five times stronger than magnets produced by any other material. Discovered by Francois Lecoq de Boisbaudran in 1879.",
          "atomic_weight": 150.36,
          "discovery_location": "France",
          "discovery_year": 1879
        },
        "Eu": {
          "atomic_number": 63,
          "name_origin": "Named for the continent of Europe.",
          "description": "Soft silvery metallic element belonging to the lanthanoids. Eu-151 and Eu-153 are the only two stable isotopes, both of which are Neutron absorbers. Discovered in 1889 by Sir William Crookes.",
          "atomic_weight": 151.964,
          "discovery_location": "France",
          "discovery_year": 1901
        },
        "Gd": {
          "atomic_number": 64,
          "name_origin": "Named after the mineral gadolinite.",
          "description": "Soft silvery metallic element belonging to the lanthanoids. Seven natural, stable isotopes are known in addition to eleven artificial isotopes. Gd-155 and Gd-157 and the best neutron absorbers of all elements. Gadolinium compounds are used in electronics. Discovered by J.C.G Marignac in 1880.",
          "atomic_weight": 157.25,
          "discovery_location": "Switzerland",
          "discovery_year": 1880
        },
        "Tb": {
          "atomic_number": 65,
          "name_origin": "Named after Ytterby, a village in Sweden.",
          "description": "Silvery metallic element belonging to the lanthanoids. Tb-159 is the only stable isotope, there are seventeen artificial isotopes. Discovered by G.G. Mosander in 1843.",
          "atomic_weight": 158.92535,
          "discovery_location": "Sweden",
          "discovery_year": 1843
        },
        "Dy": {
          "atomic_number": 66,
          "name_origin": "Greek: dysprositos (hard to get at).",
          "description": "Metallic with a bright silvery-white lustre. Dysprosium belongs to the lanthanoids. It is relatively stable in air at room temperatures, it will however dissolve in mineral acids, evolving hydrogen. It is found in from rare-earth minerals. There are seven natural isotopes of dysprosium, and eight radioisotopes, Dy-154 being the most stable with a half-life of 3*10^6 years. Dysprosium is used as a neutron absorber in nuclear fission reactions, and in compact disks. It was discovered by Paul Emile Lecoq de Boisbaudran in 1886 in France. Its name comes from the Greek word dysprositos, which means hard to obtain.",
          "atomic_weight": 162.5,
          "discovery_location": "France",
          "discovery_year": 1886
        },
        "Ho": {
          "atomic_number": 67,
          "name_origin": "From Holmia, the Latinized name for Stockholm, Sweden.",
          "description": "Relatively soft and malleable silvery-white metallic element, which is stable in dry air at room temperature. It oxidizes in moist air and at high temperatures. It belongs to the lanthanoids. A rare-earth metal, it is found in the minerals monazite and gadolinite. It possesses unusual magnetic properties. One natural isotope, Ho-165 exists, six radioisotopes exist, the most stable being Ho-163 with a half-life of 4570 years. Holmium is used in some metal alloys, it is also said to stimulate the metabolism. Discovered by Per Theodor Cleve and J.L. Soret in Switzerland in 1879. The name homium comes from the Greek word Holmia which means Sweden. While all holmium compounds should be considered highly toxic, initial evidence seems to indicate that they do not pose much danger. The metal's dust however, is a fire hazard.",
          "atomic_weight": 164.93033,
          "discovery_location": "Switzerland",
          "discovery_year": 1878
        },
        "Er": {
          "atomic_number": 68,
          "name_origin": "Named after the Swedish town, Ytterby.",
          "description": "Soft silvery metallic element which belongs to the lanthanoids. Six natural isotopes that are stable. Twelve artificial isotopes are known. Used in nuclear technology as a neutron absorber. It is being investigated for other possible uses. Discovered by Carl G. Mosander in 1843.",
          "atomic_weight": 167.259,
          "discovery_location": "Sweden",
          "discovery_year": 1843
        },
        "Tm": {
          "atomic_number": 69,
          "name_origin": "From Thule ancient name of Scandinavia.",
          "description": "Soft grey metallic element that belongs to the lanthanoids. One natural isotope exists, Tm-169, and seventeen artificial isotopes have been produced. No known uses for the element. Discovered in 1879 by Per Theodor Cleve.",
          "atomic_weight": 168.93422,
          "discovery_location": "Sweden",
          "discovery_year": 1879
        },
        "Yb": {
          "atomic_number": 70,
          "name_origin": "Named for the Swedish village of Ytterby.",
          "description": "Silvery metallic element of the lanthanoids. Seven natural isotopes and ten artificial isotopes are known. Used in certain steels. Discovered by J.D.G. Marignac in 1878.",
          "atomic_weight": 173.045,
          "discovery_location": "Switzerland",
          "discovery_year": 1878
        },
        "Lu": {
          "atomic_number": 71,
          "name_origin": "Named for the ancient name of Paris, Lutecia.",
          "description": "Silvery-white rare-earth metal which is relatively stable in air. It happens to be the most expensive rare-earth metal. Its found with almost all rare-earth metals, but is very difficult to separate from other elements. Least abundant of all natural elements. Used in metal alloys, and as a catalyst in various processes. There are two natural, stable isotopes, and seven radioisotopes, the most stable being Lu-174 with a half-life of 3.3 years. The separation of lutetium from Ytterbium was described by Georges Urbain in 1907. It was discovered at approximately the same time by Carl Auer von Welsbach. The name comes from the Greek word lutetia which means Paris.",
          "atomic_weight": 174.9668,
          "discovery_location": "France",
          "discovery_year": 1907
        },
        "Hf": {
          "atomic_number": 72,
          "name_origin": "From Hafnia, the Latin name of Copenhagen.",
          "description": "Silvery lustrous metallic transition element. Used in tungsten alloys in filaments and electrodes, also acts as a neutron absorber. First reported by Urbain in 1911, existence was finally established in 1923 by D. Coster, G.C. de Hevesy in 1923.",
          "atomic_weight": 178.49,
          "discovery_location": "Denmark",
          "discovery_year": 1923
        },
        "Ta": {
          "atomic_number": 73,
          "name_origin": "From king Tantalus of Greek mythology, father of Niobe.",
          "description": "Heavy blue-grey metallic transition element. Ta-181 is a stable isotope, and Ta-180 is a radioactive isotope, with a half-life in excess of 10^7 years. Used in surgery as it is unreactive. Forms a passive oxide layer in air. Identified in 1802 by Ekeberg and isolated in 1820 by Jons J. Berzelius.",
          "atomic_weight": 180.94788,
          "discovery_location": "Sweden",
          "discovery_year": 1802
        },
        "W": {
          "atomic_number": 74,
          "name_origin": "Swedish: tung sten (heavy stone): symbol from its German name wolfram.",
          "description": "White or grey metallic transition element,formerly called Wolfram. Forms a protective oxide in air and can be oxidized at high temperature. First isolated by Jose and Fausto de Elhuyer in 1783.",
          "atomic_weight": 183.84,
          "discovery_location": "Spain",
          "discovery_year": 1783
        },
        "Re": {
          "atomic_number": 75,
          "name_origin": "Latin: Rhenus, the Rhine River.",
          "description": "Silvery-white metallic transition element. Obtained as a by-product of molybdenum refinement. Rhenium-molybdenum alloys are superconducting.",
          "atomic_weight": 186.207,
          "discovery_location": "Germany",
          "discovery_year": 1925
        },
        "Os": {
          "atomic_number": 76,
          "name_origin": "Greek: osmê (odor).",
          "description": "Hard blue-white metallic transition element. Found with platinum and used in some alloys with platinum and iridium.",
          "atomic_weight": 190.23,
          "discovery_location": "England",
          "discovery_year": 1804
        },
        "Ir": {
          "atomic_number": 77,
          "name_origin": "Latin: iris (rainbow).",
          "description": "Very hard and brittle, silvery metallic transition element. It has a yellowish cast to it. Salts of iridium are highly colored. It is the most corrosion resistant metal known, not attacked by any acid, but is attacked by molten salts. There are two natural isotopes of iridium, and 4 radioisotopes, the most stable being Ir-192 with a half-life of 73.83 days. Ir-192 decays into Platinum, while the other radioisotopes decay into Osmium. Iridium is used in high temperature apparatus, electrical contacts, and as a hardening agent for platinumpy. Discovered in 1803 by Smithson Tennant in England. The name comes from the Greek word iris, which means rainbow. Iridium metal is generally non-toxic due to its relative unreactivity, but iridium compounds should be considered highly toxic.",
          "atomic_weight": 192.217,
          "discovery_location": "England/France",
          "discovery_year": 1804
        },
        "Pt": {
          "atomic_number": 78,
          "name_origin": "Spanish: platina (little silver).",
          "description": "Attractive greyish-white metal. When pure, it is malleable and ductile. Does not oxidize in air, insoluble in hydrochloric and nitric acid. Corroded by halogens, cyandies, sulphur and alkalis. Hydrogen and Oxygen react explosively in the presence of platinumpy. There are six stable isotopes and three radioisotopes, the most stable being Pt-193 with a half-life of 60 years. Platinum is used in jewelry, laboratory equipment, electrical contacts, dentistry, and anti-pollution devices in cars. PtCl2(NH3)2 is used to treat some forms of cancer. Platinum-Cobalt alloys have magnetic properties. It is also used in the definition of the Standard Hydrogen Electrode. Discovered by Antonio de Ulloa in South America in 1735. The name comes from the Spanish word platina which means silver. Platinum metal is generally not a health concern due to its unreactivity, however platinum compounds should be considered highly toxic.",
          "atomic_weight": 195.084,
          "discovery_location": "Italy",
          "discovery_year": 1735
        },
        "Au": {
          "atomic_number": 79,
          "name_origin": "Anglo-Saxon: geolo (yellow); symbol from Latin: aurum (shining dawn).",
          "description": "Gold is gold colored. It is the most malleable and ductile metal known. There is only one stable isotope of gold, and five radioisotopes of gold, Au-195 being the most stable with a half-life of 186 days. Gold is used as a monetary standard, in jewelry, dentistry, electronics. Au-198 is used in treating cancer and some other medical conditions. Gold has been known to exist as far back as 2600 BC. Gold comes from the Anglo-Saxon word gold. Its symbol, Au, comes from the Latin word aurum, which means gold. Gold is not particularly toxic, however it is known to cause damage to the liver and kidneys in some.",
          "atomic_weight": 196.966569,
          "discovery_location": "",
          "discovery_year": ""
        },
        "Hg": {
          "atomic_number": 80,
          "name_origin": "From the Roman god Mercury; symbol from Latin: hydrargyrus (liquid silver).",
          "description": "Heavy silvery liquid metallic element, belongs to the zinc group. Used in thermometers, barometers and other scientific apparatus. Less reactive than zinc and cadmium, does not displace hydrogen from acids. Forms a number of complexes and organomercury compounds.",
          "atomic_weight": 200.592,
          "discovery_location": "",
          "discovery_year": ""
        },
        "Tl": {
          "atomic_number": 81,
          "name_origin": "Greek: thallos (green twig), for a bright green line in its spectrum.",
          "description": "Pure, unreacted thallium appears silvery-white and exhibits a metallic lustre. Upon reacting with air, it begins to turn bluish-grey and looks like lead. It is very malleable, and can be cut with a knife. There are two stable isotopes, and four radioisotopes, Tl-204 being the most stable with a half-life of 3.78 years. Thallium sulphate was used as a rodenticide. Thallium sulphine's conductivity changes with exposure to infrared light, this gives it a use in infrared detectors. Discovered by Sir William Crookes via spectroscopy. Its name comes from the Greek word thallos, which means green twig. Thallium and its compounds are toxic and can cause cancer.",
          "atomic_weight": 204.38,
          "discovery_location": "England",
          "discovery_year": 1861
        },
        "Pb": {
          "atomic_number": 82,
          "name_origin": "Anglo-Saxon: lead; symbol from Latin: plumbum.",
          "description": "Heavy dull grey ductile metallic element, belongs to group 14. Used in building construction, lead-place accumulators, bullets and shot, and is part of solder, pewter, bearing metals, type metals and fusible alloys.",
          "atomic_weight": 207.2,
          "discovery_location": "",
          "discovery_year": ""
        },
        "Bi": {
          "atomic_number": 83,
          "name_origin": "German: bisemutum, (white mass), Now spelled wismut.",
          "description": "White crystalline metal with a pink tinge, belongs to group 15. Most diamagnetic of all metals and has the lowest thermal conductivity of all the elements except mercury. Lead-free bismuth compounds are used in cosmetics and medical procedures. Burns in the air and produces a blue flame. In 1753, C.G. Junine first demonstrated that it was different from lead.",
          "atomic_weight": 208.9804,
          "discovery_location": "",
          "discovery_year": ""
        },
        "Po": {
          "atomic_number": 84,
          "name_origin": "Named for Poland, native country of Marie Curie.",
          "description": "Rare radioactive metallic element, belongs to group 16 of the periodic table. Over 30 known isotopes exist, the most of all elements. Po-209 has a half-life of 103 years. Possible uses in heating spacecraft. Discovered by Marie Curie in 1898 in a sample of pitchblende.",
          "atomic_weight": 209.0,
          "discovery_location": "France",
          "discovery_year": 1898
        },
        "At": {
          "atomic_number": 85,
          "name_origin": "Greek: astatos (unstable).",
          "description": "Radioactive halogen element. Occurs naturally from uranium and thorium decay. At least 20 known isotopes. At-210, the most stable, has a half-life of 8.3 hours. Synthesized by nuclear bombardment in 1940 by D.R. Corson, K.R. MacKenzie and E. Segre at the University of California.",
          "atomic_weight": 210.0,
          "discovery_location": "United States",
          "discovery_year": 1940
        },
        "Rn": {
          "atomic_number": 86,
          "name_origin": "Variation of the name of another element, radium.",
          "description": "Colorless radioactive gaseous element, belongs to the noble gases. Of the twenty known isotopes, the most stable is Rn-222 with a half-life of 3.8 days. Formed by the radioactive decay of Radium-226. Radon itself decays into Polonium. Used in radiotherapy. As a noble gas, it is effectively inert, though radon fluoride has been synthesized. First isolated in 1908 by Ramsey and Gray.",
          "atomic_weight": 222.0,
          "discovery_location": "Germany",
          "discovery_year": 1898
        },
        "Fr": {
          "atomic_number": 87,
          "name_origin": "Named for France, the nation of its discovery.",
          "description": "Radioactive element, belongs to group 1 of the periodic table. Found in uranium and thorium ores. The 22 known isotopes are all radioactive, with the most stable being Fr-223. Its existence was confirmed in 1939 by Marguerite Perey.",
          "atomic_weight": 223.0,
          "discovery_location": "France",
          "discovery_year": 1939
        },
        "Ra": {
          "atomic_number": 88,
          "name_origin": "Latin: radius (ray).",
          "description": "Radioactive metallic transuranic element, belongs to group 2 of the periodic table. Most stable isotope, Ra-226 has a half-life of 1602 years, which decays into radon. Isolated from pitchblende in 1898 Marie and Pierre Curie.",
          "atomic_weight": 226.0,
          "discovery_location": "France",
          "discovery_year": 1898
        },
        "Ac": {
          "atomic_number": 89,
          "name_origin": "Greek: akis, aktinos (ray).",
          "description": "Silvery radioactive metallic element, belongs to group 3 of the periodic table. The most stable isotope, Ac-227, has a half-life of 217 years. Ac-228 (half-life of 6.13 hours) also occurs in nature. There are 22 other artificial isotopes, all radioactive and having very short half-lives. Chemistry similar to lanthanumpy. Used as a source of alpha particles. Discovered by A. Debierne in 1899.",
          "atomic_weight": 227.0,
          "discovery_location": "France",
          "discovery_year": 1899
        },
        "Th": {
          "atomic_number": 90,
          "name_origin": "Named for Thor, Norse god of thunder.",
          "description": "Grey radioactive metallic element. Belongs to actinoids. Found in monazite sand in Brazil, India and the US. Thorium-232 has a half-life of 1.39x10^10 years. Can be used as a nuclear fuel for breeder reactors. Thorium-232 captures slow Neutrons and breeds uranium-233. Discovered by Jons J. Berzelius in 1829.",
          "atomic_weight": 232.0377,
          "discovery_location": "Sweden",
          "discovery_year": 1828
        },
        "Pa": {
          "atomic_number": 91,
          "name_origin": "Greek: proto and actinium (parent of actinium); it forms actinium when it radioactively decays.",
          "description": "Radioactive metallic element, belongs to the actinoids. The most stable isotope, Pa-231 has a half-life of 2.43*10^4 years. At least 10 other radioactive isotopes are known. No practical applications are known. Discovered in 1917 by Lise Meitner and Otto Hahn.",
          "atomic_weight": 231.03588,
          "discovery_location": "England/France",
          "discovery_year": 1917
        },
        "U": {
          "atomic_number": 92,
          "name_origin": "Named for the planet Uranus.",
          "description": "White radioactive metallic element belonging to the actinoids. Three natural isotopes, U-238, U-235 and U-234. Uranium-235 is used as the fuel for nuclear reactors and weapons. Discovered by Martin H. Klaproth in 1789.",
          "atomic_weight": 238.02891,
          "discovery_location": "Germany",
          "discovery_year": 1789
        },
        "Np": {
          "atomic_number": 93,
          "name_origin": "Named for the planet Neptune.",
          "description": "Radioactive metallic transuranic element, belongs to the actinoids. Np-237, the most stable isotope, has a half-life of 2.2*10^6 years and is a by product of nuclear reactors. The other known isotopes have mass numbers 229 through 236, and 238 through 241. Np-236 has a half-life of 5*10^3 years. First produced by Edwin M. McMillan and P.H. Abelson in 1940.",
          "atomic_weight": 237.0,
          "discovery_location": "United States",
          "discovery_year": 1940
        },
        "Pu": {
          "atomic_number": 94,
          "name_origin": "Named for the planet Pluto.",
          "description": "Dense silvery radioactive metallic transuranic element, belongs to the actinoids. Pu-244 is the most stable isotope with a half-life of 7.6*10^7 years. Thirteen isotopes are known. Pu-239 is the most important, it undergoes nuclear fission with slow neutrons and is hence important to nuclear weapons and reactors. Plutonium production is monitored down to the gram to prevent military misuse. First produced by Gleen T. Seaborg, Edwin M. McMillan, J.W. Kennedy and A.C. Wahl in 1940.",
          "atomic_weight": 244.0,
          "discovery_location": "United States",
          "discovery_year": 1940
        },
        "Am": {
          "atomic_number": 95,
          "name_origin": "Named for the American continent, by analogy with europium.",
          "description": "Radioactive metallic transuranic element, belongs to the actinoids. Ten known isotopes. Am-243 is the most stable isotope, with a half-life of 7.95*10^3 years. Discovered by Glenn T. Seaborg and associates in 1945, it was obtained by bombarding Uranium-238 with alpha particles.",
          "atomic_weight": 243.0,
          "discovery_location": "United States",
          "discovery_year": 1945
        },
        "Cm": {
          "atomic_number": 96,
          "name_origin": "Named in honor of Pierre and Marie Curie.",
          "description": "Radioactive metallic transuranic element. Belongs to actinoid series. Nine known isotopes, Cm-247 has a half-life of 1.64*10^7 years. First identified by Glenn T. Seaborg and associates in 1944, first produced by L.B. Werner and I. Perlman in 1947 by bombarding americium-241 with Neutrons. Named for Marie Curie.",
          "atomic_weight": 247.0,
          "discovery_location": "United States",
          "discovery_year": 1944
        },
        "Bk": {
          "atomic_number": 97,
          "name_origin": "Named after Berkeley, California the city of its discovery.",
          "description": "Radioactive metallic transuranic element. Belongs to actinoid series. Eight known isotopes, the most common Bk-247, has a half-life of 1.4*10^3 years. First produced by Glenn T. Seaborg and associates in 1949 by bombarding americium-241 with alpha particles.",
          "atomic_weight": 247.0,
          "discovery_location": "United States",
          "discovery_year": 1949
        },
        "Cf": {
          "atomic_number": 98,
          "name_origin": "Named after the state and University of California.",
          "description": "Radioactive metallic transuranic element. Belongs to actinoid series. Cf-251 has a half life of about 700 years. Nine isotopes are known. Cf-252 is an intense Neutron source, which makes it an intense Neutron source and gives it a use in Neutron activation analysis and a possible use as a radiation source in medicine. First produced by Glenn T. Seaborg and associates in 1950.",
          "atomic_weight": 251.0,
          "discovery_location": "United States",
          "discovery_year": 1950
        },
        "Es": {
          "atomic_number": 99,
          "name_origin": "Named in honor of the scientist Albert Einstein.",
          "description": "Appearance is unknown, however it is most probably metallic and silver or gray in color. Radioactive metallic transuranic element belonging to the actinoids. Es-254 has the longest half-life of the eleven known isotopes at 270 days. First identified by Albert Ghiorso and associates in the debris of the 1952 hydrogen bomb explosion. In 1961 the first microgram quantities of Es-232 were separated. While einsteinium never exists naturally, if a sufficient amount was assembled, it would pose a radiation hazard.",
          "atomic_weight": 252.0,
          "discovery_location": "United States",
          "discovery_year": 1952
        },
        "Fm": {
          "atomic_number": 100,
          "name_origin": "Named in honor of the scientist Enrico Fermi.",
          "description": "Radioactive metallic transuranic element, belongs to the actinoids. Ten known isotopes, most stable is Fm-257 with a half-life of 10 days. First identified by Albert Ghiorso and associates in the debris of the first hydrogen-bomb explosion in 1952.",
          "atomic_weight": 257.0,
          "discovery_location": "United States",
          "discovery_year": 1953
        },
        "Md": {
          "atomic_number": 101,
          "name_origin": "Named in honor of the scientist Dmitri Ivanovitch Mendeleyev, who devised the periodic table.",
          "description": "Radioactive metallic transuranic element. Belongs to the actinoid series. Only known isotope, Md-256 has a half-life of 1.3 hours. First identified by Glenn T. Seaborg, Albert Ghiorso and associates in 1955. Alternative name Unnilunium has been proposed. Named after the 'inventor' of the periodic table, Dmitri Mendeleev.",
          "atomic_weight": 258.0,
          "discovery_location": "United States",
          "discovery_year": 1955
        },
        "No": {
          "atomic_number": 102,
          "name_origin": "Named in honor of Alfred Nobel, who invented dynamite and founded Nobel prize.",
          "description": "Radioactive metallic transuranic element, belongs to the actinoids. Seven known isotopes exist, the most stable being No-254 with a half-life of 255 seconds. First identified with certainty by Albert Ghiorso and Glenn T. Seaborg in 1966. Unnilbium has been proposed as an alternative name.",
          "atomic_weight": 259.0,
          "discovery_location": "Sweden",
          "discovery_year": 1957
        },
        "Lr": {
          "atomic_number": 103,
          "name_origin": "Named in honor of Ernest O. Lawrence, inventor of the cyclotron.",
          "description": "Appearance unknown, however it is most likely silvery-white or grey and metallic. Lawrencium is a synthetic rare-earth metal. There are eight known radioisotopes, the most stable being Lr-262 with a half-life of 3.6 hours. Due to the short half-life of lawrencium, and its radioactivity, there are no known uses for it. Identified by Albert Ghiorso in 1961 at Berkeley. It was produced by bombarding californium with boron ions. The name is temporary IUPAC nomenclature, the origin of the name comes from Ernest O. Lawrence, the inventor of the cyclotron. If sufficient amounts of lawrencium were produced, it would pose a radiation hazard.",
          "atomic_weight": 262.0,
          "discovery_location": "United States",
          "discovery_year": 1961
        },
        "Rf": {
          "atomic_number": 104,
          "name_origin": "Named in honor of Ernest Rutherford",
          "description": "Radioactive transactinide element. Expected to have similar chemical properties to those displayed by hafnium. Rf-260 was discovered by the Joint Nuclear Research Institute at Dubna (U.S.S.R.) in 1964. Researchers at Berkeley discovered Unq-257 and Unq-258 in 1964.",
          "atomic_weight": 267.0,
          "discovery_location": "United States",
          "discovery_year": 1969
        },
        "Db": {
          "atomic_number": 105,
          "name_origin": "Named after the city of Dubna, the site of the JINR.",
          "description": "Also known as Hahnium, Ha. Radioactive transactinide element. Half-life of 1.6s. Discovered in 1970 by Berkeley researchers. So far, seven isotopes have been discovered.",
          "atomic_weight": 268.0,
          "discovery_location": "United States",
          "discovery_year": 1970
        },
        "Sg": {
          "atomic_number": 106,
          "name_origin": "Named in honor of Glenn Seaborg, American physical chemist known for research on transuranium elements.",
          "description": "Half-life of 0.9 +/- 0.2 s. Discovered by the Joint Institute for Nuclear Research at Dubna (U.S.S.R.) in June of 1974. Its existence was confirmed by the Lawrence Berkeley Laboratory and Livermore National Laboratory in September of 1974.",
          "atomic_weight": 271.0,
          "discovery_location": "USSR/United States",
          "discovery_year": 1974
        },
        "Bh": {
          "atomic_number": 107,
          "name_origin": "Named in honor of Niels Bohr",
          "description": "Radioactive transition metal. Half-life of approximately 1/500 s. Discovered by the Joint Institute for Nuclear Research at Dubna (U.S.S.R.) in 1976. Confirmed by West German physicists at the Heavy Ion Research Laboratory at Darmstadt.",
          "atomic_weight": 274.0,
          "discovery_location": "Germany",
          "discovery_year": 1976
        },
        "Hs": {
          "atomic_number": 108,
          "name_origin": "Named in honor of Henri Hess, Swiss born Russian chemist known for work in thermodydamics.",
          "description": "Radioactive transition metal first synthesized in 1984 by a German research team led by Peter Armbruster and Gottfried Muenzenberg at the Institute for Heavy Ion Research at Darmstadt.",
          "atomic_weight": 269.0,
          "discovery_location": "Germany",
          "discovery_year": 1984
        },
        "Mt": {
          "atomic_number": 109,
          "name_origin": "Named in honor of Lise Mietner",
          "description": "Half-life of approximately 5 ms. The creation of this element demonstrated that fusion techniques could indeed be used to make new, heavy nuclei. Made and identified by physicists of the Heavy Ion Research Laboratory, Darmstadt, West Germany in 1982. Named in honor of Lise Meitner, the Austrian physicist.",
          "atomic_weight": 276.0,
          "discovery_location": "Germany",
          "discovery_year": 1982
        },
        "Ds": {
          "atomic_number": 110,
          "name_origin": "Named after the city of Darmstadt, Germany where  GSI Helmholtz Centre for Heavy Ion Research is located.",
          "description": "",
          "atomic_weight": 281.0,
          "discovery_location": "Germany",
          "discovery_year": 1994
        },
        "Rg": {
          "atomic_number": 111,
          "name_origin": "Named in honor of the physicist Wilhelm Roentgen.",
          "description": "",
          "atomic_weight": 281.0,
          "discovery_location": "Germany",
          "discovery_year": 1994
        },
        "Cn": {
          "atomic_number": 112,
          "name_origin": "Named in honor of the astronomer Nicolaus Copernicus.",
          "description": "",
          "atomic_weight": 285.0,
          "discovery_location": "Germany",
          "discovery_year": 1996
        },
        "Nh": {
          "atomic_number": 113,
          "name_origin": "Named after the country of Japan.",
          "description": "",
          "atomic_weight": 286.0,
          "discovery_location": "Japan",
          "discovery_year": 2015
        },
        "Fl": {
          "atomic_number": 114,
          "name_origin": "Named after the Flerov Laboratory of Nuclear Reactions of the Joint Institute for Nuclear Research in Dubna, Russia.",
          "description": "",
          "atomic_weight": 289.0,
          "discovery_location": "Russia",
          "discovery_year": 1998
        },
        "Mc": {
          "atomic_number": 115,
          "name_origin": "Named after the city of Moscov.",
          "description": "",
          "atomic_weight": 288.0,
          "discovery_location": "Russia",
          "discovery_year": 2003
        },
        "Lv": {
          "atomic_number": 116,
          "name_origin": "Named after the Lawrence Livermore National Laboratory in the United States.",
          "description": "",
          "atomic_weight": 293.0,
          "discovery_location": "United States",
          "discovery_year": 2000
        },
        "Ts": {
          "atomic_number": 117,
          "name_origin": "Named after the state of Tennessee in United States.",
          "description": "",
          "atomic_weight": 294.0,
          "discovery_location": "Russia/United States",
          "discovery_year": 2010
        },
        "Og": {
          "atomic_number": 118,
          "name_origin": "Named in honor of the scientist Yuri Oganessian.",
          "description": "",
          "atomic_weight": 294.0,
          "discovery_location": "Russia",
          "discovery_year": 2002
        }
    };
      
    $('.ele:not(.empty)').tooltipster({
        animation: 'fade',
        delay: 500,
        trigger: 'click',
        distance: 30,
        functionBefore: generateTooltip,
        contentAsHTML: true,
        side: 'bottom',
        theme: 'tooltipster-shadow',
        interactive: true
    });
});
