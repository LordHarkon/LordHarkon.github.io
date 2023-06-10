export const deals: Deal[] = [
  {
    index: 1,
    name: "Swap",
    image: "deals/swap.png",
    description: "Trade 3 powers for any one of your choice.",
    incompatible: [3],
  },
  {
    index: 2,
    name: "Life Plan",
    image: "deals/lifeplan.png",
    description:
      "Do not give up any powers but you gain 1 every on the anniversary of this day instead of all at once.",
    incompatible: [3],
  },
  {
    index: 3,
    name: "Glass Cannon",
    image: "deals/glasscannon.jpeg",
    description:
      "Cannot be taken with any other deal. Gain all the powers on the list but you will die after 24 hours and nothing can stop this.",
    incompatible: [1, 2],
  },
];

export const powers: Power[] = [
  {
    index: 1,
    name: "Super strength",
    description: "You can lift up to 500 tonnes and can jump 100 meters from standing.",
  },
  {
    index: 2,
    name: "Super speed",
    description:
      "You can run at 400 mph, your reflex’s increase to deal with the increase of speed. You can run on water.",
  },
  {
    index: 3,
    name: "Super durability",
    description:
      "You can withstand bullets, walk away from falls off of sky scrapers and can survive a the impact from speeding train.",
  },
  { index: 4, name: "Super senses", description: "See in the dark, hear a pin drop, track a scent like a dog." },
  {
    index: 5,
    name: "Super charger",
    description:
      "Your touch can double the strength of another’s ability, their physical strength and speed. You can boost your own powers tenfold. Powers that require contact will always require contact. Those super charged will have jets of red electricity lancing across their body. If you super charge yourself, your hair will rise upwards like it is underwater and glow iridescent red, your eyes will spark with red electricity.",
  },
  {
    index: 6,
    name: "Curse",
    description:
      "You can cause someone to suffer horrific bad luck to 12 hours, while they will not die, nothing they do will go right. You can lay a new curse every 24 hours. You can modify the exact nature of the curse (e.g. caching syphilis from a door) by reducing the time the person will be affected by it.",
  },
  {
    index: 7,
    name: "Bless",
    description:
      "You can bestow good luck someone. For 3 hours everything they do will go smoothly. If they ever become aware that they are blessed or try to use this good luck for their own direct gain the blessing will disappear. You can bless a new person every 24 hours. You cannot bless yourself.",
  },
  {
    index: 8,
    name: "Drunken master",
    description:
      "The drunker you are, the stronger and more durable you become, being a little tipsy will grant you the strength of ten men, being totally smashed grants near invulnerability and the strength to rip oil rigs from the sea bed and throw them clean out of the sea. You no longer suffer from hangovers, alcohol poisoning or any physical downsides from drinking alcohol of any kind.",
  },
  {
    index: 9,
    name: "Fear empowerment",
    description:
      "The more scared people are of you, the more physically strong you become, you also come to the know the nature of their fear.",
  },
  {
    index: 10,
    name: "Pain empowerment",
    description:
      "The more physical or psychological pain you inflict on others or suffer yourself, the more physically strong you become.",
  },
  {
    index: 11,
    name: "Hate empowerment",
    description:
      "You are empowered by hate, becoming stronger the more you loathe the thing you are fighting or working against.",
  },
  {
    index: 12,
    name: "Night empowerment",
    description:
      "You become twice as strong and fast during the night but you are only half as strong as normal during the day, you can sustain yourself on lunar light allowing you to go without food or rest while the sun is set.",
  },
  {
    index: 13,
    name: "Day empowerment",
    description:
      "You become twice as strong and fast during the day but you are only half as strong as normal at night, you can sustain yourself on solar energy while the sun is in the sky allowing you to go without food or sleep.",
  },
  {
    index: 14,
    name: "Love empowerment",
    description:
      "You become stronger if you are fighting for something/someone you love, fighting someone you love will weaken you.",
  },
  {
    index: 15,
    name: "Courage empowerment",
    description: "You become stronger the braver you are, feeling scared will weaken you.",
  },
  { index: 16, name: "Hope empowerment", description: "The more people believe in you the stronger you get." },
  {
    index: 17,
    name: "Threads",
    description:
      "You can take hold of invisible, normally intangible, threads that connect to peoples bodies, allowing you to control them like a puppet, the more people you control with this power the more crude the control becomes.",
  },
  { index: 18, name: "Lie detector", description: "You can tell when someone is telling a lie." },
  {
    index: 19,
    name: "Safety net",
    description:
      "If you sustain serious bodily damage you will instantly teleport to the nearest ‘safe zone’ where you can get medical attention and general help, there you will be safe for 72 hours, you will receive money, food, possibly even weapons and transportation appropriate to your situation.",
  },
  {
    index: 20,
    name: "Wrath",
    description:
      "You can see the easiest way to break something or someone, physically or physiologically, you can also sense weak spots in structures. Should you break an Empowered you gain one of their powers.",
  },
  {
    index: 21,
    name: "Envy",
    description:
      "You can over time develop a weaker version of a single other power if you spend enough time watching the user. This new power grows in strength until you have mastery over it upon which point the person you copied it from will lose the power and you are free to copy a new one.",
  },
  {
    index: 22,
    name: "Gluttony",
    description:
      "Your mouth can now open until it is 2 and a half feet across and you can bite with the force of a salt water crocodile, eating a human heart will halt your ageing for 1 year and totally heals you, it also grants you the memories of the person you took the heart from. Your teeth and jaw are indestructible. Eating the heart of an Empowered grants one of their powers.",
  },
  {
    index: 23,
    name: "Lust",
    description:
      "You can make a large group of people incredibly attracted to you and want to help you or you can focus this power onto a single person to make them totally fall for you. You are seen as incredibly attractive by the opposite sex, regardless and you can make people addicted to having you near to them. Should an Empowered person fall for you naturally without you tricking them, you will gain one of their powers.",
  },
  {
    index: 24,
    name: "Greed",
    description:
      "You can make £200 (or equivalent in your preferred currency, adjusted for inflation) appear out of thin-air every 24 hours. You can also materialize this wealth in the form of any sort of food or gold.",
  },
  {
    index: 25,
    name: "Sloth",
    description:
      "When you rest, you heal faster and will always wake well rested. Also if you give a task that, you are supposed to do to someone else, they will be able to do a better than you would have done, however they must willingly take that task. You can set how long you sleep for and your ageing stops while you sleep.",
  },
  {
    index: 26,
    name: "Pride",
    description:
      "You give off the impression of being bigger and better than everyone else around you, if any one submits to you (verbally acknowledges you are better than them) you gain a copy of all their skills, abilities and powers. If an Empowered person submits to you, you gain all of their powers.",
  },
  {
    index: 27,
    name: "Roar",
    description:
      "You can shout loud enough to shatter human ear drums and knock people off their feet, you can no longer be deafened.",
  },
  {
    index: 28,
    name: "Blinking",
    description:
      "You can teleport yourself and anything you are carrying (+a single person holding your hand) up to 10 meters in any direction along your line of sight. You can do this as many times as you like, as quickly as you like. Momentum is not cancelled during these jumps, you cannot teleport through opaque objects but you can jump through transparent objects. You can teleport to the other side of a glass wall not a brick one.",
  },
  {
    index: 29,
    name: "Jumper",
    description:
      "You can instantly teleport yourself, anything on your person or you are carrying/anybody you are holding on to, to anyplace you have ever been before. You can teleport once every minute. Momentum is cancelled during these jumps. You will not teleport into solid objects and will appear as close to where you want to as possible if something is occupying the place you want to go.",
  },
  {
    index: 30,
    name: "Parasite",
    description:
      "When you touch someone you sap their life energy. Your ageing reverses and you heal quickly while they age twice as fast. Has no effect on those who do not age. You also absorb any powers and skills they have and maintain them for twice the time you held on to them.",
  },
  {
    index: 31,
    name: "Survivor",
    description:
      "Every time you are in an accident or get hurt just ask yourself “Would this kill the star of an action movie?” if the answer is no, you can get up and walk away. You can also perform actions straight out of an action movie.",
  },
  {
    index: 32,
    name: "Pow!",
    description:
      "When you make a finger gun and shout pow anything you are pointing at will feel like they have been struck by an invisible 50. calibre round.",
  },
  {
    index: 33,
    name: "Phase",
    description:
      "You can pass through solid objects, as can any item on your person, that you are carrying or people holding on to you.",
  },
  {
    index: 34,
    name: "Power thief",
    description:
      "You gain the ability to steal other people’s powers with a touch. You will gain that power permanently while they will lose it permanently. You can only take one power once a week. If you are holding onto another person when making the steal you will transfer that power to them. With each power you take your hunger for more grows, from a slight nudging in the back of the mind to an ever present drive fore more.",
  },
  {
    index: 35,
    name: "Doppelganger",
    description:
      "You can create multiple clones of yourself they will have lesser versions of the powers and abilities that you have but will be sentient in their own right. Each one will represent a different part of your personality, becoming more extreme with each clone you produce. If killed the clones will simply vanish and can be created again.",
  },
  {
    index: 36,
    name: "Mind reader",
    description:
      "You can hear the thoughts of people by focusing on them. Over time you will develop the ability to read and search for every thought a person has ever had. Tin foil hats blocks this power.",
  },
  {
    index: 37,
    name: "Flight",
    description:
      "You can fly like superman up to speeds of Mach 2, you are unaffected by wind chill or the effects of great speed on the body while flying, the faster you go, the slower the world around you seems to go. You can use this power to move in 3 dimensions, you able to change direction instantly at top speed without suffering bodily harm and you can hover in mid-air. You don’t have to look where you’re going. Just remember any one you’re carrying will be affected by speed and such.",
  },
  {
    index: 38,
    name: "Angelic",
    description:
      "You can grow huge white feathered wings from your back allowing you to fly at 350mph, you look very impressive with your wings out and can absorb them into your back at will. This process takes about three seconds.",
  },
  {
    index: 39,
    name: "Copycat",
    description: "You can replicate any physical movement you see another human perform and mimic them perfectly.",
  },
  {
    index: 40,
    name: "Wavelength",
    description:
      "You can hear radio waves and, by focusing, can intercept and alter them. You can also hijack any number of TV’s; smart phones or any internet or radio connected devises and play any image or sound you want.",
  },
  {
    index: 41,
    name: "Midas",
    description:
      "You can turn up to 100kg’s worth of any metal into gold when you touch it. You can turn water into wine and sand into silver.",
  },
  {
    index: 42,
    name: "X-ray",
    description:
      "You can see through opaque solids, liquids and gasses as though they were transparent, however there is still an outline. This power is limited to things within 1 mile.",
  },
  {
    index: 43,
    name: "Instinct",
    description:
      "You can sense danger and attacks against yourself and those related to you through blood before they happen, you can also sense traps and ambushes, pregnancies, approaching storms and bad events. While you can detect the approaching danger you cannot tell the exact nature of it.",
  },
  {
    index: 44,
    name: "Waste disposal",
    description:
      "You no longer have to go to urinate or defecate again regardless of what you eat or drink, all toxins instantly disappear.",
  },
  {
    index: 45,
    name: "Sustenance",
    description:
      "You no longer have to sleep, eat, drink or breathe to survive, you don’t have to rest and will never become tired. You can still process food and oxygen, you just don’t have to.",
  },
  {
    index: 46,
    name: "Regeneration",
    description:
      "Heal from any wound or sickness in seconds, regrow limbs in minutes, dislocated joints automatically snap back into place, bullets and the like are forced out. If you are killed you will regrow your body from the most complete part of yourself (takes 24 hours). Things such as asthma or diabetes are cured, but mental conditions are not. Over time your body will no longer go into shock and you will stop feeling pain all together. Only the simulations destruction over every single cell of your body can kill you before then. Extreme cold can slow down your healing. You will live for exactly 100 years, upon reaching this age you will crumble to dust. You cannot get drunk or high again.",
  },
  {
    index: 47,
    name: "Undying",
    description:
      "You stop ageing, remaining the way you are now forever, your mind and body will not deteriorate and you will gain a perfect memory. You can still improve your body, getting fitter etc. but it will never degrade. You can still be killed, but you will not die of old age, you are immune to all diseases and infections and other maladies associated with ageing.",
  },
  {
    index: 48,
    name: "Power intuition",
    description:
      "If you see another person who has powers you will instantly know what powers they have, the capabilities of their powers and how good they are at using them. You will be able to identify people who have disguised themselves using a power.",
  },
  {
    index: 49,
    name: "Respawn",
    description:
      "If you are killed you will appeared in a safe location, fully healed with all your powers (even if they were taken from you) but with no clothes or items. You can Respawn 9 times. You will not Respawn if you die of old age.",
  },
  {
    index: 50,
    name: "Shaman",
    description:
      "You can communicate with and can control animals. They will always understand the instructions given to them, but may not be able to carry out complex tasks. You can suppress their feelings and animalist nature to accomplish greater feats.",
  },
  {
    index: 51,
    name: "Master musician",
    description:
      "You instantly become the greatest artist of a single musical instrument of your choice. You are able to compose pieces of breath taking beauty and can learn a piece of music for that instrument just by looking at it or hearing it. You learn other instruments at the normal human rate.",
  },
  {
    index: 52,
    name: "Master technician",
    description:
      "You excel at using any form of technology and can instantly tell how any form of mechanism or system works just from a glance, you can replicate any machine you have previously seen.",
  },
  {
    index: 53,
    name: "Master dancer",
    description:
      "You are instantly a master dancer and acrobat. You are also a gifted contortionist and escapologist. You can learn a dance just by seeing it. You can serve any one in a dance off.",
  },
  {
    index: 54,
    name: "Master intellect",
    description:
      "You gain a colossal IQ boost, you process information insanely fast and you are an excellent logical thinker. You gain photographic memory and learn 100 times faster than a normal human.",
  },
  {
    index: 55,
    name: "Master soldier",
    description:
      "You instantly a master at using any weapon you touch and have a hundred life times worth of combat experience. You will always be able to find a weapon when needed.",
  },
  {
    index: 56,
    name: "Master athlete",
    description:
      "Your body reaches the peak of human fitness overnight, all physical ailments are healed (just this once) and you will live a long and healthy life. You become adept at all sports/physical activities. Choose one sport to become the undisputed of all time master at.",
  },
  {
    index: 57,
    name: "Power detection",
    description:
      "You can detect any one with powers in a 10,000 mile area when they use their power and can home in on them,",
  },
  {
    index: 58,
    name: "Touché",
    description:
      "You always have a devastating come back or fitting quip for any situation, you gain an awesome catch phrase.",
  },
  {
    index: 59,
    name: "Telepath",
    description:
      "You can communicate mentally across any distance, allowing you to speak inside the mind of any one on earth; you can link to as many minds as you want. Tin foil hats block this power and strong willed people can force you out.",
  },
  {
    index: 60,
    name: "Telekinesis",
    description:
      "You can move things with your mind, though you can only affect things you can perceive with your senses, you cannot manipulate objects through a camera. You can exert up to 300 tonnes of force with pin point precision. You can use your hands to guide your influence or just will the affects you wish to happen. With practise you will not need use your hands, or even see exactly what you are manipulating, just knowing is enough. You can wrap yourself in telekinetic energy to shield yourself from damage.",
  },
  {
    index: 61,
    name: "Pyro",
    description:
      "You can control fire, are able to create it, manipulate it and absorb it, you can no longer be burnt, able breathe fire and melt steel with your flames. With time you will be able to create fire in airless environments and under water.",
  },
  {
    index: 62,
    name: "Hydro",
    description:
      "You can control water and other fluids. You are able to draw water from the air and deep underground. Cannot manipulate bodily fluids except for urine. You can focus the pressure of the water to slice stone and metal.",
  },
  {
    index: 63,
    name: "Geo",
    description:
      "You can control earth and can manipulate it, this includes; sand, lava, mud and gem stones. You cannot manipulate metal.",
  },
  {
    index: 64,
    name: "Aether",
    description:
      "You can control air and manipulate it. Also grants control over smoke and other gasses, you can create vacuums. You can create a cocoon of air around you to provide oxygen for yourself and others in airless environments.",
  },
  {
    index: 65,
    name: "Electrical",
    description:
      "You can control electricity, create it and absorb it, you are immune to damage done by electrical energy. You can charge electrical devices just by holding them in your hand, jump start cars and restart hearts with a touch or just Taser people with short sharp bursts. You can remotely turn on and off electrical systems in your vicinity at will.",
  },
  {
    index: 66,
    name: "Cryo",
    description:
      "You can control ice, create it and absorb cold; you can reduce your own body heat at will, even freeze and preserve yourself indefinably.",
  },
  {
    index: 67,
    name: "Gyro",
    description:
      "You can alter the effect of gravity on specific targets in a 35 meter area around you. You can pin people to the ground, instantly pulp their bones or just reverse gravity around you and watch as they fly into the sky. The affect stops either when you will it or when they leave the area of effect.",
  },
  {
    index: 68,
    name: "Photo",
    description:
      "You can control light, create any form of colour light and focus it into scorching laser beams, your eyes can no longer be blinded by bright light.",
  },
  {
    index: 69,
    name: "Obvious joke",
    description: "You become a master at sex able to give any one an earth shattering orgasm with a touch.",
  },
  { index: 70, name: "Nature", description: "You can command plants to grow rapidly in the way you want." },
  {
    index: 71,
    name: "Sonic",
    description: "You can control sound and create shockwaves, you can recreate any sound or voice you have heard.",
  },
  {
    index: 72,
    name: "Nuke",
    description:
      "You can emit Gamma, Alpha and Beta wave radiation in short but intense bursts , you are immune to the effects of adverse radiation.",
  },
  {
    index: 73,
    name: "Shielding",
    description:
      "You are can create a bubble shield around you; anything that touches this shield is reflected away from it. It is impenetrable as long as your concentration holds and it is both air tight and sound proof. You can also create smaller shields around different parts of your body that require less concentration and allow you to strike at full force without fear of hurting yourself. You can deploy shields a short distance away from you.",
  },
  {
    index: 74,
    name: "Inertia control",
    description:
      "You can control your own inertia, becoming unmovable or unstoppable for a few seconds at a time. When you do so you become totally indestructible.",
  },
  {
    index: 75,
    name: "Body control",
    description:
      "You are always in full control of your body, mind and emotions. Mind, body or emotion controlling effects and illusions have no effect you.",
  },
  {
    index: 76,
    name: "Illusions",
    description:
      "You can create optical illusions and cause people to hallucinate anything you want, good or bad. Your illusions cannot touch or hurt any one, only the blind are immune to this power.",
  },
  {
    index: 77,
    name: "Heat vision",
    description:
      "You can project blasts of heat from your eyes that can burn through stone almost instantly, you can still see when you do this, though everything has a red glaze.",
  },
  {
    index: 78,
    name: "Polyglot",
    description:
      "You become instantly fluent in all languages, written and spoken, that you come across, you can instantly break any form of code or cypher you come across.",
  },
  {
    index: 79,
    name: "Rend",
    description:
      "You can instantly cause massive lacerations in any one close to you, splitting them open from shoulder to hip. You can also cut arteries and veins with a thought. You can manipulate blood as a weapon and a tool. When you touch blood you get glimpses of why it was shed. Drinking blood or absorbing it through your skin heals you.",
  },
  {
    index: 80,
    name: "Astral projection",
    description:
      "You can leave your body behind and project your mind as an invisible, intangible ghost able to fly through solid objects and instantly travel to any place within a 1,000 mile radius from the body, you are unable to interact with the physical world while projecting, only watch. You will be yanked back to your body if it is harmed. Other people with this power can see and interact with other astral projections, people without cannot.",
  },
  {
    index: 81,
    name: "Medium",
    description:
      "You can see spirits of the dead talk to them; they can impart advice, spy and collect information for you, all for the price of you helping them move onto the afterlife. You can also see astral projections and interact with them.",
  },
  {
    index: 82,
    name: "Animate",
    description: "You can bring statues to life for a few hours and command them as your soldiers.",
  },
  {
    index: 83,
    name: "Mirror",
    description:
      "You can copy the powers of others provided they are within 25meters of you, if they go outside this range, you will be unable to copy their powers.",
  },
  {
    index: 84,
    name: "Summoner",
    description: "By focusing on a single person or type of animal you can instantly teleport them or it to your side.",
  },
  {
    index: 85,
    name: "Constructs",
    description:
      "You can turn your arms into shining indestructible metal blades or curve the ends into hooks for climbing and grappling, you can cover areas of skin in living steel to protect yourself.",
  },
  {
    index: 86,
    name: "Not so self-harm",
    description:
      "If you inflict bodily harm upon yourself while holding an item of importance to another person that person will suffer the damage not you",
  },
  {
    index: 87,
    name: "Seer",
    description:
      "You will see glimpses of the future when you come across something or someone of great importance, you can see an objects or places past by touching it and focusing on the date or time you wish to see.",
  },
  {
    index: 88,
    name: "Mind bullets",
    description:
      "You can kill someone just by thinking about them and focusing on them. You must have a name to do this, alter egos do not count. For example if you focus on Batman it would have no effect, but if you focused on Bruce Wayne then that would work. You can only kill one person a day and people with regeneration can bounce back from the Mind Bullets.",
  },
  {
    index: 89,
    name: "Portal",
    description:
      "You can create a pair of linked circular portals 2 meters across anywhere you want. Stepping through one will instantly transport you out of the other. If you close the portals while something is half way through it will be cut, cleanly in half.",
  },
  {
    index: 90,
    name: "Polymorphing",
    description:
      "You can instantly alter your own appearance and body by concentrating on the result you want. You can also alter others by making physical contact with them. Can change gender, height, weight, hair colour any physical attribute of yourself and others so long as it is within human limits, helps if you have a picture to work from. If you are touching someone you can turn into them or copy their exact look onto someone else. You can give yourself fake scars and bruises etc. Babies, very young children and animals will be able to tell that you are not who you look like.",
  },
  {
    index: 91,
    name: "Shapeshifting",
    description:
      "You can transform into any living animal you have seen. If you are killed or fatally wounded as that animal you will revert to human for, healed but unable to become that animal ever again.",
  },
  {
    index: 92,
    name: "Invisibility",
    description:
      "You can turn yourself totally invisible to the naked eye though you still show up on thermal cameras.",
  },
  {
    index: 93,
    name: "Locator",
    description:
      "You instantly know the exact location of any one or anything just by thinking about it, you have to know the name of the thing you are searching for.",
  },
  {
    index: 94,
    name: "Life giver",
    description:
      "You can rapidly heal others by touching them, you can heal any affliction or wound or sickness in a few seconds, you can bring a single recently deceased person back to life if you give your life in exchange.",
  },
  {
    index: 95,
    name: "Hypnosis",
    description:
      "When using this power your eyes turn totally black. Any one who looks into your eyes will be transfixed and will want to carry out your commands; the longer you maintain eye contact the harder it is to resist. They will still act normally as they think they are acting under their own free will, they will only have a hazy recollection of what you made them do. If you spent enough time making eye contact then you can totally control someone and only a glance is needed. Your death instantly stops all of your hypnotic effect.",
  },
  {
    index: 96,
    name: "Block",
    description:
      "You can block all powers in a 25 meter radius around you, though doing so also block all of your other powers as well.",
  },
  {
    index: 97,
    name: "Combat form",
    description:
      "You can transform into a 15 meter tall, humanoid draconic form, complete with wings granting 120mph flight, near impenetrable scales, fire breath and unmatched strength, for 1 hour. Requires a 24 recharge time.",
  },
  {
    index: 98,
    name: "Life maker",
    description:
      "You can bring people back from the dead with a touch, as flesh eating zombies. They will have peak human strength and speed and will hunt relentlessly until they are totally destroyed. Any organic creature that dies to a zombie bite will rise again to consume the living. These zombies will ignore you and will attack other zombies made by others with this power.",
  },
  { index: 99, name: "Time step", description: "You can rewind time by 13 seconds, once every minute, at any time." },
  {
    index: 100,
    name: "What doesn’t kill you",
    description:
      "You become more resistant to any injury that does not kill you, for example; none lethal bullet wounds do less damage each time you are shot, allowing you to build up immunities to different things.",
  },
  {
    index: 101,
    name: "Everyman",
    description:
      "If you want to go unnoticed, people will forget you if you need them to and simply telling them ‘oh, don’t worry about me, I’m no one’ will cause them to forget that you where every there. You can edit yourself in and out people’s memories and records as you see fit. You cannot change your role in the memory or record, only the fact you where there.",
  },
  {
    index: 102,
    name: "Things that go bump",
    description:
      "You can manipulate the dreams of others, give them a blissful dream or horrific nightmares. You can trap the person in sleep for as long as you like provided you maintain concentration. You must know their name to use this power on them. You can make people fall into a deep sleep with a touch.",
  },
  {
    index: 103,
    name: "Enhanced occasional dress sense",
    description:
      "You always have the right clothes for any situation. You will always have or be able to find the right clothes and hat at the right time.",
  },
  {
    index: 104,
    name: "Bullet time",
    description:
      "You can slow down time to greatly while you still move at normal speed. Everything you do looks cooler because it’s in slow motion.",
  },
  {
    index: 105,
    name: "Adapt",
    description:
      "By touching different materials you can take on properties from them at will. You can only have one material quality at any one time.",
  },
  {
    index: 106,
    name: "Rush",
    description:
      "You can output a colossal amount of energy almost instantly, obliterating everything around you in a 10 mile radius, except for your own body, in what can only be described as a Doom Blast. This can only be done once a month.",
  },
  {
    index: 107,
    name: "Acid",
    description:
      "You can generate a clear acid from your skin at will; you can also spit this acid. The acid will eat through steel and flesh in seconds. Your body becomes impervious to acid.",
  },
  {
    index: 108,
    name: "Hyper piss",
    description:
      "You can urinate with enough force to cut through steel, you will not be hurt by the force of this piss.",
  },
  {
    index: 109,
    name: "Mind",
    description:
      "You can erase, modify and copy any memory from any person you touch; you can also erase any of your own and render someone unconscious for 24 hours. Lost memories can be regained only through massive amounts of effort and will power. You can also transfer memories from one person to another or to yourself by having a hand on each person’s head.",
  },
  {
    index: 110,
    name: "Reflections",
    description:
      "You can step through mirrors and exit through any mirror or reflective surface in a 1 mile radius around you. You can also see out of mirrors and reflective surfaces you have stepped through. The surface must be big enough to fit your body through. If a mirror is broken with no others large enough for you to fit through, near enough to you, you will be trapped on the other side.",
  },
  {
    index: 111,
    name: "Detective sense",
    description:
      "Objects and people of relevance will have a slight shimmer to them like a heat wave when you are looking for them. Finger prints, trails of foot prints, even drops of blood and other such clues and traces will show up if you look for them.",
  },
  {
    index: 112,
    name: "Size shifter",
    description: "You can grow and shrink your body to a factor of 100, speed and strength scale to size.",
  },
  {
    index: 113,
    name: "Umbra",
    description:
      "You can control shadows, suck the light out of a room and shroud yourself in inky blackness allowing you to effortlessly hide in darkness. You can even focus the shadows in concussive bursts and smothering waves.",
  },
  {
    index: 114,
    name: "Ferrous",
    description:
      "You can manipulate metals, easily shape and manipulate them. You can sense metals in the area around you. You also understand the properties of metals and how best to use them.",
  },
  {
    index: 115,
    name: "Emo",
    description:
      "You can control the emotions, inducing any emotion you want in any one close to you. You can also block any of your own emotions and unblock them later. If you block all your emotions you will be able to see a situation clearly, unclouded by emotional bias.",
  },
  {
    index: 116,
    name: "Plague",
    description:
      "You can instantly make any one you touch come down with any form of none lethal symptoms you like. A second touch is required for lethal symptoms or to lift the symptoms you previously bestowed. The symptoms you induce can be cured and treated if possible.",
  },
  {
    index: 117,
    name: "Siren song",
    description:
      "You gain a hypnotic voice and can make people more inclined to do as you say just by singing or talking. With a few minutes or so of continued listening to your voice can bring someone totally under control. Then all you have to say is a key phrase and they will be instantly ready to do whatever you say. The only way to free them from this is to kill you. You gain a peerless singing voice if you did not already have once.",
  },
  {
    index: 118,
    name: "Hat master",
    description:
      "You instantly gain skills based on what hat you are wearing. Cooking expertise from a chef’s hat, combat skills from a beret, piracy from a pirate hat, cold resistance from an ushanka and so on. These skills are lost the moment the hat is removed but you can stack hats for multiple skills.",
  },
  {
    index: 119,
    name: "Master chef",
    description:
      "You have the skills of a master chef, you instantly know how to perfectly prepare any meal, none will be able to stand against you in a cook/bake off.",
  },
  {
    index: 120,
    name: "Seventh sense",
    description:
      "You can predict the actions of any one you can see with your own eyes a few seconds before they do so.",
  },
  {
    index: 121,
    name: "Sight sharing",
    description:
      "You can see through the eyes of anybody or anything that has organic eyes, not only that but you gain access to all sense that the person or animal has. You make experience some nausea when hijacking the sensors of some animals.",
  },
  {
    index: 122,
    name: "Hell storm",
    description:
      "When you look into the eyes of someone you can inflict damaged based on what sins they have committed. For example a murder would die; rapist would have their genitals mutilated and so on. You can instantly identify a criminal and you instantly know what they must do to redeem themselves.",
  },
  {
    index: 123,
    name: "Random power",
    description: "Every 24 hours this power will be replaced by a different power from this list.",
  },
  {
    index: 124,
    name: "Spider",
    description:
      "You can climb across any surface, cling to any wall with just a hand, you do not get tired when climbing.",
  },
  {
    index: 125,
    name: "Fix",
    description:
      "You can restore any object to its original state of being with a touch, you can make cracks and scrapes disappear, provided you have all the pieces. You can’t fix people.",
  },
  {
    index: 126,
    name: "Portals 2",
    description:
      "You can open portals to parallel worlds and pull alternate versions of yourself through to help you, the price being that you must help them out when they need you. Ninja you, gender swapped you, super sexy porn star version of you, they can all come, provided they are a still all human with no super powers of their own.",
  },
  {
    index: 127,
    name: "Scrying",
    description: "By looking into any reflective surface you can see any location or person you want.",
  },
  {
    index: 128,
    name: "Reset",
    description:
      "At any point you can set a check point where you currently are. Then, at will, you can instantly go back in time to that checkpoint. Everything will reset to the state it was in when you made this checkpoint including you but you will keep any memories you had leading up to the reset. You can only have one checkpoint at once but can change it as many times as you like. If you are killed you will have the option to die for real or go back to your check point. After each reset you must reset the checkpoint. You can only make a total of 100 checkpoints.",
  },
  {
    index: 129,
    name: "Slippery git",
    description:
      "You can transform into a gas cloud form, granting flight, intangibility and invulnerability for as long as you remain a gas. In this form you can be trapped in a jar or other such container capable of storing a gas. You can transform back but only in a place that would allow your human form.",
  },
  {
    index: 130,
    name: "Effort Increase",
    description:
      "You can enhance your own skills and personality traits, such as leadership, charisma, persuasion etc. at will. You can only increase one trait at once.",
  },
  {
    index: 131,
    name: "Machine spirit",
    description:
      "You can possess machines and can work their moving parts as you see fit. While you can only control one at once but you can instantly jump from machine to machine. While possessing your body enters a deep, dreamless, sleep. You can summon really cools motorbikes by whistling.",
  },
  {
    index: 132,
    name: "Stereotype empowerment",
    description:
      "You become stronger and more durable by indulging the stereotype of the group that you belong to, becoming stronger and more durable the more you do so. For example a British person would become stronger by drinking tea.",
  },
  {
    index: 133,
    name: "A bone to pick",
    description:
      "You can summon a squad of seven spooky skeletons to help you out. They can repair themselves with the bones of others and can ride glorious wheels to travel quickly. They are led by one Mr Skeletal a wise cracking undead, distinguished only by the fact he wears a suit and smokes heavily, be sure to thank him for his help. Should any skeleton fall you can summon it back after 2 hours. The skeleton squad have an effective but odd way of solving problems, often involving whistling and forming stacks. They are rather strong for just bones.",
  },
  {
    index: 134,
    name: "Super hero sense",
    description:
      "You can sense crimes and problems up to 10,000 miles around you, one minute before they commence. You know the exact nature and location of the crime once the one minute countdown commences. This sense can be turned on and off at will. This sense prioritises the worse crimes in your radius over the more petty ones. You can also sense problems you can help with.",
  },
  {
    index: 135,
    name: "Hijack",
    description:
      "You can jump into the body of another person, anywhere on earth, instantly taking control of their body. Their consciousness will be shunted to the back of their mind but it will try and break your control. You will be able to make their body do anything you want for as long as you can maintain control which gets harder the longer you are in their body.",
  },
  {
    index: 136,
    name: "Spatial reversal",
    description:
      "You can create a 5 meter bubble around you, any one or anything that enters it (apart from you) will move in the opposite direction.",
  },
  {
    index: 137,
    name: "Claws",
    description:
      "You can grow long claws from your fingers that can slice flesh; the skin on your arms becomes tough and leathery. You can lift and throw three tonnes.",
  },
  {
    index: 138,
    name: "Weather control ",
    description:
      "You can control the weather, bringing rain or shine with just a thought, inducing heavy snow and fierce winds. Extremes of weather like tornados and tsunamis take a little longer to bring about. However once set in motion you cannot control it.",
  },
  {
    index: 139,
    name: "Hands on",
    description:
      "You can create up to 2 extra pairs of arms from your shoulders. They are as strong as your normal arms.",
  },
  {
    index: 140,
    name: "Lord",
    description:
      "You can create up to 10kg of any form of pure narcotic substance you want, every 24 hours. You can induce any form of hallucinogenic or physcodellic affect in any one you touch.",
  },
  {
    index: 141,
    name: "King/Queen of Wi-Fi",
    description:
      "You can create infinite free Wi-Fi that radiates from your body, you can control who gets on it with pass codes or by selectively sending the signal to separate devices. The signal is traceable however.",
  },
  {
    index: 142,
    name: "Unique",
    description:
      "Every month, at the full moon, you can bestow 1 power of your choice on any person by making physical contact with them and focusing of the corresponding number. You can store charges if you don’t use up your allowance to a maximum of 4. Every power you give carries a 25% chance that you will kill the person who you give it to. You cannot give powers to yourself nor can any powers you create be transferred to you.",
  },
  {
    index: 143,
    name: "Switch",
    description:
      "You can reach into people’s mind and flick the metaphorical switch that makes them a person, rendering them a gibbering wreck. However to do so requires intense concentration and requires you to be able to see the person in question. You will also have to escape the persons mind as it collapses or else you will go insane too.",
  },
  {
    index: 144,
    name: "Wild Horses",
    description:
      "You have access to the combined wisdom and memories of all you dead ancestors and relatives. You can access this knowledge at any time.",
  },
  {
    index: 145,
    name: "Watcher",
    description:
      "You have your own guardian though you’ll never really see it. Should you be knocked unconscious, be attack while you sleep or if you cannot defend yourself you’re assailants will come under attack from and outside force, be it.",
  },
  {
    index: 146,
    name: "Life Force",
    description:
      "All your other powers become tied to your will to live. The more you want to live, survive and keep fighting the more powerful you become, however should you ever wish to die your powers will fail and not come back until you find your will to live again.",
  },
  {
    index: 147,
    name: "Portals 3",
    description:
      "You can open portals in time to the distant past and pull ancient creatures through. You cannot send anything through from our time back through the portal.",
  },
  {
    index: 148,
    name: "Louder",
    description:
      "You can issue one word commands to groups of people and they will automatically follow it. However the interpretation of the command may differ.",
  },
  {
    index: 149,
    name: "Rebirth",
    description:
      "Upon your death you can choose to reborn as a baby somewhere on earth, you will regain your memories over the course of you growing up, but you will have a different appearance. You will not have any powers of your previous life.",
  },
  {
    index: 150,
    name: "Monkey Finger",
    description:
      "When you use this power the index finger on your preferred hand will vibrate slightly. Should you poke a living being they will vanish from existence as will your finger. Your will later find your finger lying next to you when you next wake up. You require an index finger to use this power.",
  },
];

export const tasks: Task[] = [
  {
    index: 1,
    name: "Ramses",
    description: "You must give up your first born child.",
  },
  {
    index: 2,
    name: "Give and take",
    description: "You must repay all your debts. You have 1 year to accomplish this task.",
  },
  {
    index: 3,
    name: "Mentor",
    description:
      "You will be transported to the youngest Empowered and you must teach them to control their powers so they will not abuse them. You have 5 years to accomplish this task.",
  },
  {
    index: 4,
    name: "Take",
    description: "You must take a human life. You have 10 hours to accomplish this task.",
  },
  {
    index: 5,
    name: "Assassin",
    description: "You must kill the leader of a 1st world country. You have 1 year to accomplish this task.",
  },
  {
    index: 6,
    name: "Judge",
    description: "You must police the other Empowered and make sure they do not abuse their power.",
  },
  {
    index: 7,
    name: "Archangel",
    description:
      "Find every Empowered with a deadly sin power (Wrath, Envy etc.) and end their life. You have 5 year to accomplish this task.",
  },
  {
    index: 8,
    name: "Lopsided",
    description:
      "You must give up a limb; it will not grow back even if you have a power that would allow limb regeneration. You have 5 hours to complete this task.",
  },
  {
    index: 9,
    name: "Slayer",
    description: "You must find and kill another Empowered. You have 12 days to accomplish this task.",
  },
  {
    index: 10,
    name: "King",
    description:
      "You must amass at least 1000 followers who will execute your orders without question. You have 10 year to accomplish this task.",
  },
];

export const combinations: Combination[] = [
  {
    index: 1,
    name: "Celestial Empowerment",
    description: "You are granted the boost from both Night and Day Empowerment without the drawbacks.",
    powers: [12, 13],
  },
  {
    index: 2,
    name: "Shapeshifter",
    description:
      "By combining Polymorphing and Shapeshifting you can hybridise yourself with working animal body parts e.g. scorpion tail, cat’s ears etc. all scaled to fit your body. You can also give other people animal body parts",
    powers: [90, 91],
  },
  {
    index: 3,
    name: "Immortal Sinner",
    description: "By having all the seven sins powers you gain Undying for free.",
    powers: [20, 21, 22, 23, 24, 25, 26],
  },
  {
    index: 4,
    name: "Superman",
    description:
      "By combining Flight with Shielding, and Sustenance or Aether, you gain the ability to fly in space as if you were on earth. Nuke and Photo are recommended but not required.",
    powers: [37, 73, 45, 64],
  },
  {
    index: 5,
    name: "Drunken Regenerator",
    description: "Having Drunken Master the drawback/boon of not being able to get drunk is removed from Regeneration.",
    powers: [8, 46],
  },
  {
    index: 6,
    name: "The Master",
    description:
      "Like any true master, you decide when someone linked to you can use their powers. By using Block and Telepath you can now selectively suppress the powers of anyone linked.",
    powers: [96, 59],
  },
  {
    index: 7,
    name: "The Voyour",
    description: "By combining Sight Sharing and Shaman you can now remotely control animals.",
    powers: [121, 50],
  },
  {
    index: 8,
    name: "Interner Celebrity",
    description: "By having Unique and King/Queen of Wi-Fi You can now grant powers to people over the internet.",
    powers: [142, 141],
  },
  {
    index: 9,
    name: "The Immortal",
    description:
      "Having both Undying and Regeneration grants you immortality. The only way to die or to be killed is to have 100% of your body destroyed.",
    powers: [47, 46],
  },
];
