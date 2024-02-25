import { Fragment, useEffect, useState } from "react";
import CategoryComponent from "~/components/goth/Category";
import SEO from "~/components/SEO";
import { SelectedItemOption, SelectedOption, useGOTHStore } from "~/store";

export type Category = {
  id: string;
  title: string;
  description: string;
  require?: string[];
  itemLimit: number;
  items: CategoryItem[];
};

export type CategoryItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  max?: number;
  limit?: number;
  options?: CategoryItemOption[];
  incompatible?: string[];
  multiselect?: boolean;
  multioption?: boolean;
  addMoreCategory?: string;
  addMoreCount?: number;
  unselect?: string[];
};

export type CategoryItemOption = {
  id: string;
  description: string;
};

const categories: Category[] = [
  {
    id: "portal",
    title: "Portal",
    description: "Choose how you will enter and exit your domain.",
    itemLimit: 1,
    items: [
      {
        id: "locket",
        name: "Locket",
        description:
          "The locket cannot be lost, stolen, or traded. If removed, it will appear around your neck the next time you reach for it. Opening the locket creates a portal the size of an average front door on the nearest wall. You can bring people with you into your dimension, but when you leave, they are also ejected. Once the door is closed, it vanishes. Anyone can leave, appearing where the door was originally created, but no one else may enter while you are inside.",
        image: "/GOTH/item-images/locket.png",
      },
      {
        id: "key",
        name: "Key",
        description:
          "The key can be lost, stolen, or sold, so keep track of it, and be careful about who you tell about your dimension. Insert this key into any door with a lock, and it will open a similarly sized door into your dimension. Get deliveries and allow people to come and go as they please. It is possible for unwanted visitors to enter, and guests are not forced to leave when you do.",
        image: "/GOTH/item-images/key.png",
      },
      {
        id: "willpower",
        name: "Willpower",
        description:
          "No physical object is required. You can teleport into your pocket dimension at any time and from any place, but you can only bring a maximum of two people at a time. When you leave your dimension, they are also ejected.",
        image: "/GOTH/item-images/willpower.png",
      },
    ],
  },
  {
    id: "timeSettings",
    title: "Time Settings",
    description: "Choose how time in your domain will relate to time in the real world.",
    itemLimit: 1,
    items: [
      {
        id: "timeStops",
        name: "Time Stops",
        description:
          "Time stops as soon as the door to your dimension is closed and resumes when the door opens. If you use Willpower, it stops as soon as you enter your dimension. The internet is a perfect snapshot of the moment you left, but no communication is possible. For example, you can visit websites, but there will be no new content, and you can't play online games with people outside of your pocket dimension.",
        image: "/GOTH/item-images/timeStops.png",
      },
      {
        id: "timeSlows",
        name: "Time Slows",
        description:
          "Time is slowed down to 1/10 of the normal rate when the door is closed. New content will slowly appear on the internet, but the lag will make multiplayer games impossible. If you have the key, deliveries can still occur, but be prepared to wait awhile.",
        image: "/GOTH/item-images/timeSlows.png",
      },
      {
        id: "timeContinues",
        name: "Time Continues",
        description:
          "Time continues as normal outside of the sanctuary regardless of if the door is open or closed. All forms of communication function normally.",
        image: "/GOTH/item-images/timeContinues.png",
      },
    ],
  },
  {
    id: "dimensionalEdge",
    title: "Dimensional Edge",
    description: "Choose what you will find when you reach the limits of your domain.",
    itemLimit: 1,
    items: [
      {
        id: "sphere",
        name: "Sphere",
        description:
          "The dimension now has the shape of a sphere. When you get to the edge, you'll find yourself heading back the way you came. Can cause vertigo on smaller parcels of land. Gravity functions normally, and there are no environmental impacts.",
        image: "/GOTH/item-images/sphere.png",
      },
      {
        id: "invisibleWall",
        name: "Invisibile Wall",
        description:
          "Your dimension ends in an invisible wall with a projected view of your choice, and you are able to choose the view at will. Have a view of the Statue of Liberty or the Grand Canyon or a unique alien landscape.",
        image: "/GOTH/item-images/invisibleWall.png",
      },
      {
        id: "nothingness",
        name: "Nothingness",
        description:
          "The world appears to end with a vast void of darkness and starlight beyond. If you fall off of the edge, you are transported back into your home. As an added bonus, you can break your environment into individual floating islands.",
        image: "/GOTH/item-images/nothingness.png",
      },
    ],
  },
  {
    id: "environment",
    title: "Environment",
    description:
      "Choose %LIMIT% environment(s) that appears outside of your home.\nYou will start with 1000 acres of outdoor space.",
    itemLimit: 1,
    items: [
      {
        id: "forest",
        name: "Forest",
        description:
          "A dense forest surrounds your home. The terrain is mostly flat with some small slopes and clearings. Comes with the option of selecting a river, anything from a babbling brook to white water rapids.",
        image: "/GOTH/item-images/forest.png",
      },
      {
        id: "mountainLake",
        name: "Mountain Lake",
        description:
          "A mountain lake surrounded by dense forrest. Comes with the option of setting the temperature without melting the snow. Have snowball fights while wearing a T-Shirt.",
        image: "/GOTH/item-images/mountainLake.png",
      },
      {
        id: "desertOasis",
        name: "Desert Oasis",
        description:
          "Sun scorched, shifting desert sands with an oasis of refreshing blue water. Comes with the option of a rugged canyon complete with waterfalls.",
        image: "/GOTH/item-images/desertOasis.png",
      },
      {
        id: "beach",
        name: "Beach",
        description: "For maximum vacation potential with white sand, palm trees, and the option of a coral reef.",
        image: "/GOTH/item-images/beach.png",
      },
      {
        id: "hills",
        name: "Hills",
        description: "Rolling hills with long grass swaying in the breeze. Comes with the option of wildflowers.",
        image: "/GOTH/item-images/hills.png",
      },
      {
        id: "lowlandLake",
        name: "Lowland Lake",
        description:
          "A freshwater lake surrounded by lightly treed plains. Comes with the option of a small dock and diving board.",
        image: "/GOTH/item-images/lowlandLake.png",
      },
      {
        id: "subterranean",
        name: "Subterranean",
        description:
          "Stalagmites and stalactites as far as the eye can see. Comes with the option of precious stones and crystals growing on the walls.",
        image: "/GOTH/item-images/subterranean.png",
      },
      {
        id: "farmland",
        name: "Farmland",
        description:
          "Flat, fertile farmland with crops ready for harvest. Harvesting these crops will cause them to regrow the next day. Comes with the option of selecting the crops.",
        image: "/GOTH/item-images/farmland.png",
      },
      {
        id: "void",
        name: "Void",
        description:
          "If you would prefer not to have any outdoor space, then I'll have enough strength left for one additional room in your home. None of the doors or windows in your home will open out, though.",
        image: "/GOTH/item-images/void.png",
        incompatible: ["additionalEnvironments"],
        addMoreCategory: "rooms",
        addMoreCount: 1,
      },
    ],
  },
  {
    id: "environmentalExtras",
    title: "Environmental Extras",
    description: "Choose %LIMIT%.\nNone can be chosen if you have selected Void.",
    itemLimit: 6,
    items: [
      {
        id: "moreSpace",
        name: "More Space",
        description:
          "Upgrade from 1,000 acres to 10,000 acres. Can be chosen multiple times. Each additional choice multiplies the acreage by 10.\n\nSecond choice: 100,000 acres.\nThird choice: 1,000,000 acres.\netc...",
        image: "/GOTH/item-images/moreSpace.png",
        multiselect: true,
        incompatible: ["void"],
      },
      {
        id: "additionalEnvironments",
        name: "Additional Environments",
        description: "Add an additional environment. Can be chosen multiple times.\n\nCannot choose Void.",
        image: "/GOTH/item-images/additionalEnvironments.png",
        multiselect: true,
        incompatible: ["void"],
        addMoreCategory: "environment",
        addMoreCount: 1,
      },
      {
        id: "portals",
        name: "Portals",
        description:
          "A useful feature for larger domains, portals allow you to travel to distant parts of you pocket dimension instantly. Once per week, you can set a portal to anywhere in the real world.",
        image: "/GOTH/item-images/portals.png",
        incompatible: ["void"],
      },
      {
        id: "cottage",
        name: "Cottage",
        description:
          "Do you want a place to sleep but don't want to purchase a bedroom below? This three bedroom/bath cottage has no upgrades, but it has all the normal features for a house.",
        image: "/GOTH/item-images/cottage.png",
        incompatible: ["void"],
      },
      {
        id: "gazebo",
        name: "Gazebo",
        description:
          "A large gazebo for real indoor-outdoor living. Comes with a grill, TV, tables, and plenty of seating. It has a fridge full of snacks and an A.I. chef to cook up food on the grill.",
        image: "/GOTH/item-images/gazebo.png",
        incompatible: ["void"],
      },
      {
        id: "village",
        name: "Village",
        description:
          "A village that can either be left empty or which is filled with A.I. inhabitants. They can maintain farms and ranches, or act as general servants. See the village supplement at the end.",
        image: "/GOTH/item-images/village.png",
        incompatible: ["void"],
        unselect: ["inhabitants", "technology", "magic", "specialties"],
      },
      {
        id: "setTime",
        name: "Set Time",
        description:
          "Time is normally set to a standard 24 hour cycle whether or not time is passing in the real world. Now you can set the time of day at whim. Want to go stargazing without waiting for nightfall? Now you can.",
        image: "/GOTH/item-images/setTime.png",
        incompatible: ["void"],
      },
      {
        id: "setWeather",
        name: "Set Weather",
        description:
          "Standard weather is sunny with light clouds, but this allows you to change the weather whenever you feel like it. Want to have rain, fog, or snow? Now you can.",
        image: "/GOTH/item-images/setWeather.png",
        incompatible: ["void"],
      },
      {
        id: "phenomenon",
        name: "Phenomenon",
        description:
          "Consistency is dull, but with this, random phenomenon like shooting stars and double rainbows will occur every once in a while. Phenomenon can also be manually set, so you can have a super moon every night.",
        image: "/GOTH/item-images/phenomenon.png",
        incompatible: ["void"],
      },
      {
        id: "extraordinaryFlora",
        name: "Extraordinary Flora",
        description:
          "The nature in this dimension is set to mimic the real world, but with this, you can add fantastical, mythical, and fictional plants like giant mushrooms and glowing flowers. Effects from consuming these plants only apply in the sanctuary.",
        image: "/GOTH/item-images/extraordinaryFlora.png",
        incompatible: ["void"],
      },
      {
        id: "wildFauna",
        name: "Wild Fauna",
        description:
          "Wild Fauna introduces animals of your choice into your dimension, but none will ever harm or inconvenience you. Listen to birdsong in the morning and see deer prancing in your back yard. Go fishing if you have a lake.",
        image: "/GOTH/item-images/wildFauna.png",
        incompatible: ["void"],
      },
      {
        id: "setRelativeTime",
        name: "Set Relative Time",
        description:
          "Some days you want time to keep going, but some days you want to turn an evening into a week long vacation. Set Relative Time allows you to switch between the relative time settings at will.",
        image: "/GOTH/item-images/setRelativeTime.png",
        incompatible: ["void"],
      },
    ],
  },
  {
    id: "rooms",
    title: "Rooms",
    description: "Choose %LIMIT% rooms furnished in a style of your choice.\nEach room can hold three options.",
    itemLimit: 8,
    items: [
      {
        id: "bedroom",
        name: "Bedroom",
        description:
          "A large, sound-proof bedroom furnished in your style with a king-sized bed, dresser, end tables, fireplace, and a TV.",
        image: "/GOTH/item-images/bedroom.png",
        multioption: true,
        max: 3,
        options: [
          {
            id: "bedroomBed",
            description: "Add a bed that allows you to fall asleep instantly with no tossing and turning.",
          },
          {
            id: "bedroomLucid",
            description: "While sleeping, experience lucid dreams.",
          },
          {
            id: "bedroomSize",
            description: "Upgrade bedroom size to huge and add a sitting area with tables and chairs.",
          },
          {
            id: "bedroomExtra",
            description: "Add two extra bedrooms.",
          },
          {
            id: "bedroomWindows",
            description:
              "Floor to ceiling windows that can show either your dimension or a projected view of your choice.",
          },
        ],
      },
      {
        id: "bathroom",
        name: "Bathroom",
        description:
          "A standard bathroom with a toilet, shower/tub combo, sink and cabinet. You get one bathroom plus a bathroom for each bedroom.",
        image: "/GOTH/item-images/bathroom.png",
        multioption: true,
        max: 3,
        options: [
          {
            id: "bathroomSize",
            description: "Upgrade bathroom size to huge which adds a double sink, a Jacuzzi tub and a walk in shower.",
          },
          {
            id: "bathroomSmell",
            description: "Bathing or showering in this room will leave you looking and smelling fresh for a week.",
          },
          {
            id: "bedroomBeauty",
            description:
              "Add magical toiletries that enhance beauty (toothpaste that whitens teeth, face cream that removes acne, etc.)",
          },
          {
            id: "bathroomLuxury",
            description: "Upgrade the finishes to luxury with heated floors, and marble tile.",
          },
          {
            id: "bathroomStylist",
            description: "A.I. stylist which can cut/style/shave your hair, apply makeup, etc.",
          },
        ],
      },
      {
        id: "dressingRoom",
        name: "Dressing Room",
        description:
          "A walk-in closet filled with a modest assortment of clothing in your style. You get one dressing room plus one per bedroom.",
        image: "/GOTH/item-images/dressingRoom.png",
        multioption: true,
        max: 3,
        options: [
          {
            id: "dressingSize",
            description: "Upgrade the size to huge and have a full range of clothing for any event.",
          },
          {
            id: "dressingDesigner",
            description: "Add an A.I. designer to create new outfits from your imagination.",
          },
          {
            id: "dressingMirror",
            description:
              "Add a mirror that allows you to subtly alter your appearance once per week, (things like re-growing hair in bald spots or losing 1 lb of fat). If you have more than one dressing room, each mirror can be used once per week.",
          },
          {
            id: "dressingAccessories",
            description: "Add accessories like hats, watches, and jewelry.",
          },
          {
            id: "dressingShoes",
            description: "Add an infinite shoe closet.",
          },
        ],
      },
      {
        id: "livingRoom",
        name: "Living Room",
        description: "A large living room with couches, tables, a fireplace, and a TV.",
        image: "/GOTH/item-images/livingRoom.png",
        multioption: true,
        max: 3,
        options: [
          {
            id: "livingStreaming",
            description: "Add a streaming service with every movie and TV show ever made.",
          },
          {
            id: "livingSongs",
            description: "Add a complete library of songs and a surround sound stereo.",
          },
          {
            id: "livingCommercials",
            description: "Add TV ad-block. Automatically skip commercials when watching TV.",
          },
          {
            id: "livingTheater",
            description: "Movie theater add-on with stadium seating, and a popcorn machine.",
          },
          {
            id: "livingWindows",
            description:
              "Floor to ceiling windows that can show either your dimension or a projected view of your choice.",
          },
        ],
      },
      {
        id: "kitchen",
        name: "Kitchen",
        description:
          "A moderately sized kitchen with stainless steel appliances, cabinets, an island, and a well-stocked, self-replenishing pantry.",
        image: "/GOTH/item-images/kitchen.png",
        multioption: true,
        max: 3,
        options: [
          {
            id: "kitchenSize",
            description:
              "Upgrade size to huge with industrial appliances. Your pantry has the size and selection of a grocery store.",
          },
          {
            id: "kitchenChef",
            description:
              "Add an A.I. chef that can create any food you can think of and will always know exactly what you want to eat even if you don't.",
          },
          {
            id: "kitchenNutrients",
            description:
              "All food created in this kitchen will have the same nutrients as a perfectly balanced diet. Live on chocolate cake with no nutrient deficiencies.",
          },
          {
            id: "kitchenDining",
            description: "Add a dining room with seating for 12 people.",
          },
          {
            id: "kitchenAlcohol",
            description: "Add a bar with every spirit ever made right on tap.",
          },
        ],
      },
      {
        id: "spa",
        name: "Spa",
        description: "A small spa with a massage table, candles, incense, and an A.I. masseuse.",
        image: "/GOTH/item-images/spa.png",
        multioption: true,
        max: 3,
        options: [
          {
            id: "spaMud",
            description: "Add a mud bath that you can bathe in once per week. This reduces your age by two weeks.",
          },
          {
            id: "spaOils",
            description:
              "Add essential oils that remove diseases and heal injuries. Small things like the flu heal after one treatment, large things like regrowing limbs can take days of treatments.",
          },
          {
            id: "spaWorry",
            description:
              "Spending an hour in the spa causes all of your worries seem to disappear. Your inner peace and contentment will last a week.",
          },
          {
            id: "spaCream",
            description: "Add a bottle of skin cream that gives you a healthy, vibrant appearance.",
          },
          {
            id: "spaSize",
            description: "Upgrade the size to huge and double to features and options.",
          },
        ],
      },
      {
        id: "study",
        name: "Study",
        description: "AA small study with a large desk and a comfortable chair.",
        image: "/GOTH/item-images/study.png",
        multioption: true,
        max: 3,
        options: [
          {
            id: "studyRate",
            description: "Learn things at double the rate while in this room.",
          },
          {
            id: "studyTutor",
            description: "Add an A.I. tutor.",
          },
          {
            id: "studyIQ",
            description:
              "Double your IQ and creativity while working on problems in this room, enabling you to see solutions and come up with new ideas.",
          },
          {
            id: "studyFocus",
            description:
              "Gain the ability of absolute focus so that you can complete whatever task you set your mind to with no procrastination.",
          },
          {
            id: "studyBooks",
            description: "Add a bookshelf that always contains relevant information for the problem you're working on.",
          },
        ],
      },
      {
        id: "gym",
        name: "Gym",
        description: "A large workout room with every exercise machines you could need and a full weight set.",
        image: "/GOTH/item-images/gym.png",
        multioption: true,
        max: 3,
        options: [
          {
            id: "gymStamina",
            description: "Have limitless stamina while playing your sport.",
          },
          {
            id: "gymTrainer",
            description: "Add an A.I. coach/personal trainer.",
          },
          {
            id: "gymArena",
            description:
              "Add up to 3 indoor arenas for your chosen sports (tennis court, swimming pool, football field, etc.)",
          },
          {
            id: "gymTeam",
            description:
              "Add an android team to play with and compete against. They can take on the appearance, skills, and personalities of your favorite athletes.",
          },
          {
            id: "gymRate",
            description: "Build muscle and burn fat at double the normal rate while working out.",
          },
        ],
      },
      {
        id: "garage",
        name: "Garage",
        description:
          "A two car garage that comes with a car of your choice (can change once per week). Dropping off the road/crashing will teleport you back into the garage. Includes a one mile race track inside your pocket dimension.",
        image: "/GOTH/item-images/garage.png",
        multioption: true,
        max: 3,
        options: [
          {
            id: "garageSize",
            description: "Upgrade your garage to huge and select up to twenty different vehicles.",
          },
          {
            id: "garageRace",
            description:
              "Add unlimited additional race tracks. Can include fictional race tracks like the rainbow road.",
          },
          {
            id: "garageTools",
            description: "Add a workshop containing any tools or equipment you could need.",
          },
          {
            id: "garageReal",
            description:
              "The cars can be taken into the real world, however, they will rapidly disintegrate if they don't return to the garage at least once every three days.",
          },
          {
            id: "garageBoat",
            description: "Add a boathouse with a watercraft of your choice.",
          },
        ],
      },
      {
        id: "library",
        name: "Library",
        description:
          "A large library containing 1000 books you are guaranteed to enjoy. Includes comfy couches, chairs, and tables.",
        image: "/GOTH/item-images/library.png",
        multioption: true,
        max: 3,
        options: [
          {
            id: "libraryTablet",
            description:
              "Add a tablet containing every book ever written with the ability to sort by how much you will enjoy reading the book. If you want a physical copy of the book, it will appear on one of the tables.",
          },
          {
            id: "libraryNew",
            description: "Add books that have never been written, which exist only as ideas in someone's mind.",
          },
          {
            id: "librarySleep",
            description:
              "Add the ability to fall asleep while reading a book and experience a lucid dream as a character of your choice or as a phantom observer.",
          },
          {
            id: "libraryTV",
            description:
              "Add a TV which will create a movie based on any book, with your choice of director and producer, and staring your choice of cast.",
          },
          {
            id: "libraryLanguage",
            description: "Add the ability to read in any language, even codes, while in the library.",
          },
        ],
      },
      {
        id: "gameRoom",
        name: "Game Room",
        description:
          "A game room containing your favorite console, 100 video games you are guaranteed to enjoy, comfortable chairs, and a large TV.",
        image: "/GOTH/item-images/gameRoom.png",
        multioption: true,
        max: 3,
        options: [
          {
            id: "gameRoomComputoor",
            description: "Add a super-console/computer, which can play every game ever created with no lag.",
          },
          {
            id: "gameRoomLibrary",
            description:
              "Add a digital library containing every video game, computer game, and board game ever created.",
          },
          {
            id: "gameRoomMultiplayer",
            description: "Add an A.I. to play multi-player.",
          },
          {
            id: "gameRoomVR",
            description:
              "Add a virtual reality headset that allows you to experience the game as the main character with all 5 senses. Touch/pain can be dulled or turned off.",
          },
          {
            id: "gameRoomCreator",
            description: "Add a game-creator which builds video games straight from your imagination.",
          },
        ],
      },
      {
        id: "hobbyRoom",
        name: "Hobby Room",
        description:
          "A 500 sq ft room filled with the basic equipment for a hobby of your choice (painting, music, jewelry, etc).",
        image: "/GOTH/item-images/hobbyRoom.png",
        multioption: true,
        max: 3,
        options: [
          {
            id: "hobbyRoomSize",
            description: "Double the size of the hobby room.",
          },
          {
            id: "hobbyRoomMore",
            description: "Add two more hobby rooms.",
          },
          {
            id: "hobbyRoomUpgrade",
            description: "Upgrade the hobby equipment to the best that money can buy.",
          },
          {
            id: "hobbyRoomTeacher",
            description: "Add an A.I. teacher.",
          },
          {
            id: "hobbyRoomDisplay",
            description: "Add a 1000 sq ft storage room/gallery to display anything you create.",
          },
        ],
      },
      {
        id: "conservatory",
        name: "Conservatory",
        description:
          "A large glass room with an assortment of plants. Perfect for homes in less hospitable environments.",
        image: "/GOTH/item-images/conservatory.png",
        multioption: true,
        max: 3,
        options: [
          {
            id: "conservatorySize",
            description: "Upgrade the size to huge, creating a greenhouse that covers one acre.",
          },
          {
            id: "conservatoryFictional",
            description:
              "Add mythical, fictional, and fantastical plants. Effects from eating these plants only apply within the sanctuary.",
          },
          {
            id: "conservatorySmall",
            description: "Add small animals including birds and insects.",
          },
          {
            id: "conservatoryZoo",
            description:
              "Add a zoo with tame, exotic/mythical animals. If you ever wanted to hug a tiger or ride a dragon without getting mauled, this will allow you to do that.",
          },
          {
            id: "conservatoryGardner",
            description:
              "Add an A.I. gardener to care for your plants and harvest anything edible when it's ripe. Will also care for any animals.",
          },
        ],
      },
      {
        id: "extraEnvironmentalExtras",
        name: "Extra Environmental Extras",
        description:
          "If you would prefer more outdoor space, then I suppose I could trade one of your rooms for four Environmental Extras.\n\nCannot select if you have chosen Void.",
        image: "/GOTH/item-images/extraEnvironmentalExtras.png",
        incompatible: ["void", "spareRooms"],
        addMoreCategory: "environmentalExtras",
        addMoreCount: 4,
      },
      {
        id: "spareRooms",
        name: "Spare Rooms",
        description:
          "Sometimes you just need extra space. Want a fourth bedroom, a second living room? Selecting this will allow you to add up to 3 additional rooms that you have already selected. If you select a room that has additional rooms (such as selecting a bedroom with the two more bedrooms option) you get three extra bedrooms per room selected. Other selected options, like lucid dreaming, are also included.\n\nSpare rooms can also be left empty if you'd like to furnish them yourself.\n\nCannot select Extra Environmental Extras.",
        image: "/GOTH/item-images/spareRooms.png",
        incompatible: ["extraEnvironmentalExtras"],
      },
    ],
  },
  {
    id: "villageSuplement",
    title: "Village Suplement",
    description:
      "If you choose to select a village and wish to have it populated by A.I., then I can help you design your perfect village.\n\nThe village size will be approximately 10% of your total area, so if you have 1,000 acres, the village will be 100 acres in size and your total acreage becomes 1,100 acres. The village has whatever aesthetics you wish. For example, you can have a Roman Coliseum beside a Shinto temple. The village can also be divided into multiple villages totaling the same area, and villages can each have their own unique customs/traditions/aesthetics.\n\nIn cases where the village and the house offer similar choices, the house will always be superior and tailored to your tastes while the village provides more generalized features.\n\nSelecting Village multiple times will allow you to select more options. So if the first purchase allows you to select six options, the second will allow twelve and the third will allow eighteen.",
    itemLimit: 0,
    items: [],
  },
  {
    id: "inhabitants",
    title: "Inhabitants",
    description:
      "Choose the type of inhabitants that live in your village. The inhabitants of the village cannot leave your dimension.",
    itemLimit: 1,
    require: ["village"],
    items: [
      {
        id: "humans",
        name: "Humans",
        description: "Human inhabitants can be of any ages, genders, and races that you choose.",
        image: "/GOTH/item-images/humans.png",
      },
      {
        id: "androids",
        name: "Androids",
        description:
          "Android inhabitants have a default mechanical and genderless appearance, but that can be updated by swapping out body parts.",
        image: "/GOTH/item-images/androids.png",
      },
      {
        id: "mythicalRaces",
        name: "Mythical Races",
        description:
          "Fantasy Races can include anything from elves to dwarves to orcs to werewolves. Alien races can also fit under this category.",
        image: "/GOTH/item-images/mythicalRaces.png",
      },
    ],
  },
  {
    id: "technology",
    title: "Technology",
    description: "Choose the level of technology in your village.",
    itemLimit: 1,
    require: ["village"],
    items: [
      {
        id: "ancient",
        name: "Ancient",
        description:
          "Ancient technology might be found in ancient Rome, Medieval Europe or non-industrial civilizations.",
        image: "/GOTH/item-images/ancient.png",
      },
      {
        id: "modern",
        name: "Modern",
        description: "Modern technology includes such things as smart phones, computers, and the internet.",
        image: "/GOTH/item-images/modern.png",
      },
      {
        id: "futuristic",
        name: "Futuristic",
        description: "Futuristic technology includes things like space travel, flying cars, and anti-gravity devices.",
        image: "/GOTH/item-images/futuristic.png",
      },
    ],
  },
  {
    id: "magic",
    title: "Magic",
    description: "Choose the level of magic in your village.",
    itemLimit: 1,
    require: ["village"],
    items: [
      {
        id: "noMagic",
        name: "No Magic",
        description:
          "There is no magic in your village or any people who practice it. There may be things like card tricks and stage magic, but they all have a scientific explanation.",
        image: "/GOTH/item-images/noMagic.png",
      },
      {
        id: "subtleMagic",
        name: "Subtle Magic",
        description:
          "Magic is a subtle art used mostly for mundane things like medicine and household chores. Some inhabitants may not have any magic at all.",
        image: "/GOTH/item-images/subtleMagic.png",
      },
      {
        id: "highMagic",
        name: "High Magic",
        description:
          "High magic is truly powerful, allowing gifted practitioners to perform impressive reality-bending feats, though never anything that will truly damage your dimension.",
        image: "/GOTH/item-images/highMagic.png",
      },
    ],
  },
  {
    id: "specialties",
    title: "Specialties",
    description:
      "Choose %LIMIT%.\nYour village comes with a variety of different shops and professions, but here you can select areas where your inhabitants truly excel. Some specialties pair well with others such as theater and music to make musicals. It's not required to purchase both, but if you have both, the final product will be that much more amazing.",
    itemLimit: 6,
    require: ["village"],
    items: [
      {
        id: "art",
        name: "Art",
        description:
          "Artists are inspired to create great works in mediums like painting, ink, and sculpture. Your village and realm will be filled with many visually stunning pieces of art as well as art galleries.",
        image: "/GOTH/item-images/art.png",
      },
      {
        id: "music",
        name: "Music",
        description:
          "Musicians here can perform and produce any style of music, and they're masters of every instrument ever created along with a few they've invented themselves. There will always be live performances somewhere.",
        image: "/GOTH/item-images/music.png",
      },
      {
        id: "literature",
        name: "Literature",
        description:
          "Vast libraries and talented authors will be added to the village. They love to write on varying subjects and there will be no shortage of book clubs and live readings.",
        image: "/GOTH/item-images/literature.png",
      },
      {
        id: "filmTheater",
        name: "Film/Theater",
        description:
          "Film studios and theaters for both movies and plays will be scattered around your village with talented actors ready to fill various roles. They can recreate existing works like performing Shakespeare or create original scripts.",
        image: "/GOTH/item-images/filmTheater.png",
      },
      {
        id: "fashion",
        name: "Fashion",
        description:
          "Whether its clothes, accessories, makeup, or shoes, your inhabitants will be very well dressed. There will be plenty of clothing and beauty stores to be found. As a side-effect, this makes your inhabitants almost supernaturally good-looking.",
        image: "/GOTH/item-images/fashion.png",
      },
      {
        id: "visualNovels",
        name: "Visual Novels",
        description:
          "Visual novels include everything from cartoons to comic books to manga to anime. This will add a comic book shop to the village, and the village will regularly host comic conventions with panels and cosplayers dressing up as their favorite characters.",
        image: "/GOTH/item-images/visualNovels.png",
      },
      {
        id: "games",
        name: "Games",
        description:
          "There will always be plenty of people ready and eager to play various games from role playing to videogames to LARP to board games. There will be regular meet ups and varying skill levels. If you find a new game to try, you'll always have a partner.",
        image: "/GOTH/item-images/games.png",
      },
      {
        id: "festivals",
        name: "Festivals",
        description:
          "When it comes to partying, they won't go half-way. Expect fantastic festivals on a weekly basis including everything from carnivals to conventions to holidays. It's enough to lift the spirits of anyone participating, and there's always something worth celebrating.",
        image: "/GOTH/item-images/festivals.png",
      },
      {
        id: "foodDrink",
        name: "Food/Drink",
        description:
          "Various restaurants will be added to the village along with plenty of talented chefs. You're guaranteed to find excellent food around every corner, and the menus change regularly so you can always try something new.",
        image: "/GOTH/item-images/foodDrink.png",
      },
      {
        id: "education",
        name: "Education",
        description:
          "A university will be added to the village containing teachers and tutors for any subject you can imagine. Want to know more about cooking or magic or science? This is the place to go. It also acts as a booster for other specialties, allowing you to learn from the best.",
        image: "/GOTH/item-images/education.png",
      },
      {
        id: "nature",
        name: "Nature",
        description:
          "The village will include beautiful and exotic botanical gardens with dedicated gardeners. There will always be people ready to go on hiking and camping trips and the entire village always appears like a perfectly manicured park.",
        image: "/GOTH/item-images/nature.png",
      },
      {
        id: "temples",
        name: "Temples",
        description:
          "Beautiful temples will be added to your village. The appearance of the temples will depend on who they are dedicated to. For example, my temples were public hearths with eternal flames.",
        image: "/GOTH/item-images/temples.png",
      },
      {
        id: "military",
        name: "Military",
        description:
          "Military can include anything from a police station to fortresses. Although all inhabitants will be law-abiding citizens, the military can assist with any outsiders who enter your dimension. The military will be 100% loyal to you.",
        image: "/GOTH/item-images/military.png",
      },
      {
        id: "sports",
        name: "Sports",
        description:
          "Various gyms and sporting arenas will be added to the village. There will be regular tournaments for everything from football to martial arts, and most of the village will turn out to cheer the competitors.",
        image: "/GOTH/item-images/sports.png",
      },
      {
        id: "machinery",
        name: "Machinery",
        description:
          "Hardware stores and garages will be added to the village with mechanics able to work on any type of motor vehicle. As an added bonus, they are able to construct just about everything from roads to airplanes.",
        image: "/GOTH/item-images/machinery.png",
      },
      {
        id: "exploration",
        name: "Exploration",
        description:
          "Perfect for larger dimensions, this will add an Explorer's Guild to your village and shops selling whatever supplies a daring adventurer might need. If you're looking for people with a thirst for the unknown, here is the place to find them.",
        image: "/GOTH/item-images/exploration.png",
      },
      {
        id: "history",
        name: "History",
        description:
          "Various ruins and tombs will be added to the dimension, the remains of long-lost civilizations. Sometimes they are simply monuments to times gone by, but sometimes they can contain valuable and fantastical treasures.",
        image: "/GOTH/item-images/history.png",
      },
      {
        id: "custom",
        name: "Custom",
        description:
          "If there's a specialty you're interested in that I haven't listed here, I can make a custom one just for you. What would you like your inhabitants to enjoy?",
        image: "/GOTH/item-images/custom.png",
      },
    ],
  },
];

function formatString(camelCaseString: string): string {
  return camelCaseString.replace(/([a-z])([A-Z])/g, "$1 $2");
}

function formatChosen(selected: SelectedOption[], options: SelectedItemOption[]) {
  const temp = {} as Record<string, Array<Partial<SelectedOption>>>;
  const temp2 = [] as any[];
  selected.forEach((sel) => {
    const opt = options?.filter((o) => o.item === sel.id);
    const obj = {
      id: sel.id,
      count: sel?.count,
      options: {} as Record<string, string[]>,
    };

    opt?.forEach((o) => {
      const description = categories
        .filter((cat) => cat.id === sel.category)[0]
        .items.filter((it) => it.id === sel.id)[0]
        .options?.filter((opt) => opt.id === o.id)[0].description;
      if (obj.options[o.item]) {
        obj.options[o.item].push(description as string);
      } else {
        obj.options[o.item] = [description as string];
      }
    });

    if (temp[sel.category]) {
      temp[sel.category].push(obj);
    } else {
      temp[sel.category] = [obj];
    }
  });
  categories.forEach((cat) => {
    if (temp[cat.id])
      temp2.push({
        items: [...temp[cat.id]],
        category: cat.id,
      });
  });
  return temp2;
}

const GoddessHearthPage = () => {
  const [exportArray, setExportArray] = useState<any[]>([]);
  const exportList: string[] = [];

  const selectedOptions = useGOTHStore((state) => state.selectedOptions);
  const setSelectedOptions = useGOTHStore((state) => state.setSelectedOptions);

  const selectedItemOptions = useGOTHStore((state) => state.selectedItemOptions);
  const setSelectedItemOptions = useGOTHStore((state) => state.setSelectedItemOptions);

  const getSelectionLimit = useGOTHStore((state) => state.getSelectionLimit);
  const setSelectionLimitByOne = useGOTHStore((state) => state.setSelectionLimitByOne);

  useEffect(() => {
    categories.forEach((cat) => {
      if (!getSelectionLimit(cat.id, 0)) {
        setSelectionLimitByOne(cat.id, cat.itemLimit);
      }
      cat.items.forEach((item) => {
        if (item?.max) {
          if (!getSelectionLimit(item.id, 0)) {
            setSelectionLimitByOne(item.id, item.max as number);
          }
        }
      });
    });
  }, []);

  useEffect(() => {
    setExportArray(formatChosen(selectedOptions, selectedItemOptions));
  }, [selectedOptions, selectedItemOptions, setExportArray]);

  return (
    <div className="ubuntu min-h-screen bg-[url('/cream.jpg')]">
      <SEO
        title="Goddess of the Hearth by Kathiana | Hooshu's Static Interactive CYOAs"
        description="Hooshu's personal website for static non-modular CYOAs. Credits to Kathiana for this CYOA."
      />
      <div className="mx-auto min-h-screen max-w-[1024px] py-8">
        {/* Introduction */}
        <div className="flex w-full flex-col justify-center lg:flex-row">
          <span className="satisfy block text-center text-6xl font-bold lg:hidden">Goddess of the Hearth</span>
          {/* Image */}
          <div className="flex aspect-[12/13] h-[600px] flex-col object-cover object-center px-5 lg:h-[450px]">
            <img
              src="/GOTH/thumbnail.png"
              alt="Thumbnail"
              className="m-0.5 mx-auto h-full w-min border border-white/30"
            />
            <span className="text-center font-semibold max-lg:hidden">
              Credits
              <br />
              Kathiana — creating the static version
              <br />
              Hooshu — creating the interactive version
              <br />
              Various artists — the images used
            </span>
          </div>
          {/* Text */}
          <div className="flex flex-col p-1">
            {/* Title */}
            <span className="satisfy hidden text-center text-6xl font-bold lg:block">Goddess of the Hearth</span>
            {/* Description */}
            <span className="p-2 pt-4 text-xl font-semibold max-lg:px-8 max-lg:text-center">
              Do not be frighetend. I am Hestia, the Goddess of the Home, the Flame, and the Hearth. I have seen your
              soul, and it feels lost. It cries out for a place to call home. Though I have only a small fraction of my
              former power; I would offer you my help. I can create create a small pocket dimension for you. All who
              enter will have any sickness or pain fade away. No harm can come to anyone while inside, and all will
              remain forever young and strong within this sanctuary. The house is self cleaning and self repairing, but
              it is smart enough to know when you've made deliberate modifications. I can even give you such modern
              conveniences as utilities, wifi, and cable television free of charge.
              <span className="mt-4 block">Would you like to help me design your new home?</span>
            </span>
            <span className="mb-4 text-center text-xl font-semibold lg:hidden">
              Credits
              <br />
              Kathiana — creating the static version
              <br />
              Hooshu — creating the interactive version
              <br />
              Various artists — the images used
            </span>
          </div>
        </div>
        {/* Categories */}
        <div className="mt-14">
          {categories.map((category, index) => (
            <CategoryComponent {...category} key={"category-" + category.id + "-" + category.itemLimit + "-" + index} />
          ))}
        </div>

        {/* Export */}
        <div className="mt-2 flex flex-col px-4">
          <h1 className="text-center text-4xl font-semibold">Build</h1>
          <span className="mt-2 text-center text-xl font-semibold">
            Here you can see and export your current build. You can also reset the build.
          </span>
          <ul className="ml-5 list-disc pr-4">
            {exportArray.map(
              (cat: {
                category: string;
                items: Array<{
                  count?: number;
                  id: string;
                  options: Partial<Record<string, string[]>>;
                }>;
              }) => {
                function capitalizeWords(inputString: string) {
                  return inputString.replace(/\b\w/g, function (char) {
                    return char.toUpperCase();
                  });
                }
                exportList.push(`- **${capitalizeWords(formatString(cat.category))}**`);
                return (
                  <Fragment key={"export-" + cat.category}>
                    <li className="font-semibold capitalize">{formatString(cat.category)}</li>
                    <ul className="ml-5 list-disc">
                      {cat.items.map((item) => {
                        exportList.push(
                          `  - **${capitalizeWords(formatString(item.id))}**${item.count ? ` x${item.count}` : ""}`,
                        );
                        return (
                          <Fragment key={"export-" + cat.category + "-" + item.id}>
                            <li className="font-semibold capitalize">
                              {formatString(item.id)}
                              {item.count && <span className="normal-case"> x{item.count}</span>}
                            </li>
                            {Object.keys(item.options).length > 0 && (
                              <ul className="ml-5 list-disc">
                                {item.options[item.id]?.map((i) => {
                                  exportList.push(`    - ${i}`);
                                  return (
                                    <li
                                      className=""
                                      key={"export-" + cat.category + "-" + item.id + "-" + i.replaceAll(" ", "")}
                                    >
                                      {i}
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </Fragment>
                        );
                      })}
                    </ul>
                  </Fragment>
                );
              },
            )}
          </ul>
          <button
            className="mx-auto my-1 w-max rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-600 active:bg-blue-400"
            onClick={() => {
              navigator.clipboard.writeText(exportList.join("\n"));
            }}
          >
            Copy Markdown Format
          </button>
          <button
            className="mx-auto my-1 w-max rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-600 active:bg-blue-400"
            onClick={() => {
              navigator.clipboard.writeText(exportList.join("\n").replaceAll("**", ""));
            }}
          >
            Copy Markdown Format - No Bold
          </button>
          <button
            className="mx-auto my-1 w-max rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-600 active:bg-blue-400"
            onClick={() => {
              setSelectedOptions([]);
              setSelectedItemOptions([]);
            }}
          >
            Reset Build
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoddessHearthPage;
