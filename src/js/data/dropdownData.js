import { PhNewspaper, PhUsers, PhUsersFour, PhMountains, PhForkKnife, PhMaskHappy, PhTicket, PhSoccerBall, PhPanorama, PhThumbsUp, PhAndroidLogo, PhMapPin, PhChefHat, PhCoffee, PhFarm, PhBread, PhPersonSimpleSwim, PhWindmill, PhBaby, PhTent, PhHamburger, PhLightbulb, PhMapTrifold, PhPalette, PhTrain, PhWheelchairMotion, PhPersonSimpleHike, PhPath } from "@phosphor-icons/vue";

export const dropdownPointData = {
  slotA: { label: "Gå på opdagelse" },
  slotB: { label: "Danmarks Bedste" },
  slotC: { label: "Planlæg din tur" },
};

export const dropdownContentData = {
  slotA: {
    blocks: [
      {
        heading: "Oplevelser & inspiration",
        microcopy: "Her finder du artikler med tips, guides og ideer til oplevelser",
        items: [
          {
            icon: PhNewspaper,
            heading: "Nyheder",
            subheading: "Læs om det seneste nyt",
          },
          {
            icon: PhUsers,
            heading: "Populært lige nu",
            subheading: "Det flest kigger på nu",
          },
          {
            icon: PhUsersFour,
            heading: "For hele familien",
            subheading: "Oplevelser børn og voksne kan dele",
          },
          {
            icon: PhMountains,
            heading: "Ud i naturen",
            subheading: "Kom ud under åben himmel",
          },
        ],
      },
      {
        heading: "Begivenheder",
        microcopy: "Oplev hvad der sker lige nu. Alt fra udstillinger til workshops og forestillinger",
        items: [
          {
            icon: PhForkKnife,
            heading: "Mad og drikke",
            subheading: "Smagninger, festivaler og kulinariske events",
          },
          {
            icon: PhMaskHappy,
            heading: "Teater og musik",
            subheading: "Koncerter, forestillinger og scenekunst",
          },
          {
            icon: PhTicket,
            heading: "Workshops og aktiviteter",
            subheading: "Prøv kræfter med nye ting",
          },
          {
            icon: PhSoccerBall,
            heading: "Sport",
            subheading: "Events med bevægelse og fællesskab",
          },
          {
            icon: PhPanorama,
            heading: "Udstillinger",
            subheading: "Kunst, kultur og visuelle oplevelser",
          },
        ],
      },
      {
        heading: "Vi anbefaler",
        microcopy: "Særligt udvalgte oplevelser og steder vi synes, du bør kende",
        items: [
          {
            icon: PhThumbsUp,
            heading: "Vores favoritter",
            subheading: "Anbefalede steder og profiler",
          },
          {
            icon: PhAndroidLogo,
            heading: "Dambo Troldene",
            subheading: "Find de skjulte kæmper i naturen",
          },
          {
            icon: PhMapPin,
            heading: "Dansk verdensarv",
            subheading: "Unikke steder på UNESCO-listen",
          },
          {
            icon: PhChefHat,
            heading: "Michelin restauranter",
            subheading: "Oplev mad i verdensklasse",
          },
        ],
      },
    ],
  },
  slotB: {
    blocks: [
      {
        heading: "Afstemninger",
        microcopy: "Få overblikker over årets afstemninger, nominer dine ynglinger inden afstemningen starter og stem på din favorit",
        items: [
          {
            icon: PhCoffee,
            heading: "Kaffebarer",
            subheading: "07 - 14 Maj 2025",
          },
          {
            icon: PhFarm,
            heading: "Gårdbutikker",
            subheading: "21 - 28 Maj 2025",
          },
          {
            icon: PhChefHat,
            heading: "Gourmet-restauranter",
            subheading: "11 - 18 Juni 2025",
          },
          {
            icon: PhBread,
            heading: "Smørrebrød",
            subheading: "18 - 25 Juni 2025",
          },
          {
            icon: PhPersonSimpleSwim,
            heading: "Badestrande",
            subheading: "08 Juli - 25 August 2025",
          },
          {
            icon: PhWindmill,
            heading: "Hyggeligste Ferieby",
            subheading: "14 - 28 Juli 2025",
          },
          {
            icon: PhBaby,
            heading: "Børneoplevelser",
            subheading: "14 - 28 Juli 2025",
          },
          {
            icon: PhTent,
            heading: "Campingpladser",
            subheading: "15 - 22 Juli 2025",
          },
          {
            icon: PhHamburger,
            heading: "Burger",
            subheading: "26 August - 02 September 2025",
          },
        ],
      },
    ],
  },
  slotC: {
    blocks: [
      {
        heading: "Få styr på planlægningen",
        microcopy: "Her finder du artikler med tips, guides og ideer til oplevelser",
        items: [
          {
            icon: PhLightbulb,
            heading: "Inspiration og guides",
            subheading: "Tips til dags- og weekendture og temaoplevelser",
          },
          {
            icon: PhPath,
            heading: "Din guide lige ved hånden",
            subheading: "Få det hele på mobilen: kort, tilbud og events",
          },
          {
            icon: PhPalette,
            heading: "Temaoplevelser",
            subheading: "Vælg din interrese, historiske steder, gourmetruter eller udendørs eventyr",
          },
          {
            icon: PhMapTrifold,
            heading: "Oplevelseskort",
            subheading: "Brug vores kort til at finde aktiviteter nær dig",
          },
        ],
      },
      {
        heading: "Sådan kommer du rundt",
        microcopy: "Alt om transport, cykelruter og hvordan du nemmest kommer fra A til B",
        items: [
          {
            icon: PhTrain,
            heading: "Transport og parkering",
            subheading: "Guide til tog, bus, bil og færge, kom nemt frem",
          },
          {
            icon: PhWheelchairMotion,
            heading: "Tilgængelighed og mobilitet",
            subheading: "Find parkeringspladser, ladestationer og bycykler",
          },
          {
            icon: PhPersonSimpleHike,
            heading: "Cykel og vandreruter",
            subheading: "Oplev Danmark på to hjul eller til fods med de bedste ruter",
          },
        ],
      },
    ],
  },
};