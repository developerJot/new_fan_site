/* =====================================================================
   PRODUCTS  -  one object = one page
   Page link:  products.html?p=<slug>

   To add a new product: copy one full block { ... }, put a comma
   after the one above, and change the data. The new page works at once.

   - images : any number of images (10 images = 10 scroll steps)
   - video  : ONE video ("" = video section hidden)
   - family : products with the same family appear in each other's
              colour dropdown. Different family = separate menu item.
   - category: "fans" or "lighting"  (decides which menu it goes in)
   - match  : slugs of products for "Find your suitable match"
              (leave [] and the first 4 other products are used)
   - empty things are hidden: "" value, empty group, missing video,
     missing inspire, missing duo
   - specs  : "Group name": { "Row name": "value" }
              new group  = new block with the same design
              new row    = a new line inside a group
              "Group": "plain text"  = a text block
   All paths below are relative to products/products.html
   ===================================================================== */

const PRODUCTS = [

    /* ---------------------------------------------------------------
       1) AMJ-H001 WHITE
       --------------------------------------------------------------- */
    {
        slug: "amj-h001-white",
        family: "AMJ-H001",
        category: "fans",
        code: "AMJ-H001-White",
        name: "AMJ-H001",
        type: "Ceiling fan",
        price: 250,
        color: { name: "White", hex: "#f2f2f0" },
        desc: `A quiet ceiling fan with a slim body and smooth airflow. Easy to clean and made to run every day.`,
        catalogue: "",                                   // e.g. "../files/amj-h001.pdf"

        images: [
            "./images/AMJ-H001-White.png",
            "./images/AMJ-H001-black.png",
            "./images/AMJ-H001-black2.png",
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        // inspire: {
        //     title: "Air that moves quietly",
        //     text: "AMJ-H001 keeps a room fresh without the noise. The slim blades and steady motor give a calm, even breeze all day.",
        //     img: "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        // },

        duo: [
            {
                img: "./images/AMJ-H001-White-down-1.png",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "./images/AMJ-H001-White-down-2.png",
                cap: "A smooth finish that is easy to wipe clean."
            }
        ],

        specs: {
            "Motor": {
                "Motor size": "40W",
                "Motor type": "DC motor",
                "Speed levels": "6",
                "Noise level": ""
            },
            "Blade": {
                "Blade size": "52 inch",
                "Blade count": "3",
                "Blade material": "ABS"
            },
            "Electrical": {
                "Voltage": "220-240V",
                "Frequency": "50/60Hz",
                "Remote control": "Yes"
            },
            "Dimensions": {
                "Overall height": "",
                "Weight": "6.5 kg"
            },
            "Electrical": {
                "Voltage": "220-240V",
                "Frequency": "50/60Hz",
                "Remote control": "Yes"
            },
            "Dimensions": {
                "Overall height": "",
                "Weight": "6.5 kg"
            },
            "Warranty": "2 years on the motor, 1 year on other parts."
        },

        match: ["amj-h001-black", "amj-h001-gray", "amj-h001-purple"],
        card: ["./images/AMJ-H001-White.png", "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"]
    },





    /* ---------------------------------------------------------------
       2) AMJ-FH002-White
       --------------------------------------------------------------- */
    {
        slug: "amj-FH002-White",
        family: "AMJ-FH002-White",
        category: "fans",
        code: "AMJ-H001-black",
        name: "AMJ-H001",
        type: "Ceiling fan",
        price: 250,
        // color: { name: "Black", hex: "#1a1a1a" },
        desc: `The same quiet fan in a deep black finish. Slim body, smooth airflow, made to run every day.`,
        catalogue: "",

        images: [
            "./images/amj-fh002.png",
            "./images/amj-fh002-black.png",
            "./images/amj-fh002.png",
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        // inspire: {
        //     title: "Calm, in black",
        //     text: "A dark finish that disappears into the ceiling, with a steady motor that keeps the room fresh without the noise.",
        //     img: "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        // },

        duo: [
            {
                img: "./images/amj-fh002-down-1.png",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "./images/amj-fh002-down-2.png",
                cap: "A matte finish that is easy to wipe clean."
            }
        ],

        specs: {
            "Motor": {
                "Motor size": "40W",
                "Motor type": "DC motor",
                "Speed levels": "6"
            },
            "Blade": {
                "Blade size": "52 inch",
                "Blade count": "3",
                "Blade material": "ABS"
            },
            "Electrical": {
                "Voltage": "220-240V",
                "Frequency": "50/60Hz",
                "Remote control": "Yes"
            },
            "Dimensions": {
                "Weight": "6.5 kg"
            },
            "Warranty": "2 years on the motor, 1 year on other parts."
        },

        match: ["amj-h001-white", "amj-h001-gray", "amj-h001-purple"],
        card: ["./images/AMJ-H001-black.png", "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"]
    },






    /* ---------------------------------------------------------------
       3) AMJ-H001 Black
       --------------------------------------------------------------- */
    {
        slug: "amj-h001-black",
        family: "AMJ-H001-Black",
        category: "fans",
        code: "AMJ-H001-black",
        name: "AMJ-H001",
        type: "Ceiling fan",
        price: 35899,
        // color: { name: "Gray", hex: "#9a9a97" },
        desc: `The same quiet fan in a soft gray finish that fits almost any room.`,
        catalogue: "",

        images: [
            "./images/AMJ-H001-black.png",
            "./images/AMJ-H001-White.png",
            "./images/AMJ-H001-black2.png",
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        // inspire: {
        //     title: "Soft gray, steady air",
        //     text: "A neutral colour and a quiet motor. It keeps the air moving and stays out of the way.",
        //     img: "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        // },

        duo: [
            {
                img: "./images/fan-H001-black-down-2.png",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "./images/fan-H001-black-down-1.png",
                cap: "A smooth finish that is easy to wipe clean."
            }
        ],

        specs: {
            "Feature": {
                "Blade Material": "White",
                "Blade Material": "ABS",
                "Size": "52",
                "Rpm": "250",
                "Air Flow": "260M3/MIN"
            },
            // "Blade": {
            //     "Blade size": "52 inch",
            //     "Blade count": "3",
            //     "Blade material": "ABS"
            // },
            // "Electrical": {
            //     "Voltage": "220-240V",
            //     "Frequency": "50/60Hz",
            //     "Remote control": "Yes"
            // },
            // "Dimensions": {
            //     "Weight": "6.5 kg"
            // },
            // "Warranty": "2 years on the motor, 1 year on other parts."
        },

        match: ["amj-h001-white", "amj-h001-black", "amj-h001-purple"],
        card: ["./images/AMJ-H001-gray.png", "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"]
    },




    /* ---------------------------------------------------------------
      5) amj-fh002-Black-Wood
      --------------------------------------------------------------- */
    {
        slug: "amj-fh002-Black-Wood",
        family: "AMJ-FH002-Black-Wood",
        category: "fans",
        code: "AMJ-FH002-Black-Wood",
        name: "AMJ-FH002",
        type: "Ceiling fan",
        // price: 35899,
        // color: { name: "Gray", hex: "#9a9a97" },
        desc: `The same quiet fan in a soft gray finish that fits almost any room.`,
        catalogue: "",

        images: [
            "./images/AMJ-Fh002-black-wood-fan.png",
            "./images/amj-fh002-black.png",
            "./images/amj-fh002.png",
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        // inspire: {
        //     title: "Soft gray, steady air",
        //     text: "A neutral colour and a quiet motor. It keeps the air moving and stays out of the way.",
        //     img: "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        // },

        duo: [
            {
                img: "./images/AMJ-Fh002-black-wood-fan-down-1.png",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "./images/AMJ-Fh002-black-wood-fan-down-2.png",
                cap: "A smooth finish that is easy to wipe clean."
            }
        ],

        specs: {
            "Feature": {
                "Blade Material": "White",
                "Blade Material": "ABS",
                "Size": "52",
                "Rpm": "250",
                "Air Flow": "260M3/MIN"
            },
            // "Blade": {
            //     "Blade size": "52 inch",
            //     "Blade count": "3",
            //     "Blade material": "ABS"
            // },
            // "Electrical": {
            //     "Voltage": "220-240V",
            //     "Frequency": "50/60Hz",
            //     "Remote control": "Yes"
            // },
            // "Dimensions": {
            //     "Weight": "6.5 kg"
            // },
            // "Warranty": "2 years on the motor, 1 year on other parts."
        },

        match: ["amj-h001-white", "amj-h001-black", "amj-h001-purple"],
        card: ["./images/AMJ-H001-gray.png", "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"]
    },




    /* ---------------------------------------------------------------
    6) amj-fh002-white-Wood
    --------------------------------------------------------------- */
    {
        slug: "amj-fh002-White-Wood",
        family: "AMJ-FH002-White-Wood",
        category: "fans",
        code: "AMJ-FH002-White-Wood",
        name: "AMJ-FH002",
        type: "Ceiling fan",
        // price: 35899,
        // color: { name: "Gray", hex: "#9a9a97" },
        desc: `The same quiet fan in a soft gray finish that fits almost any room.`,
        catalogue: "",

        images: [
            "./images/amj-fh002-white-wood.png",
            "./images/AMJ-Fh002-black-wood-fan.png",
            "./images/amj-fh002-black.png",
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        // inspire: {
        //     title: "Soft gray, steady air",
        //     text: "A neutral colour and a quiet motor. It keeps the air moving and stays out of the way.",
        //     img: "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        // },

        duo: [
            {
                img: "./images/AMJ-Fh002-white-wood-fan-down-1.png",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "./images/AMJ-Fh002-white-wood-fan-down-2.png",
                cap: "A smooth finish that is easy to wipe clean."
            }
        ],

        specs: {
            "Feature": {
                "Blade Material": "White/Wood",
                "Blade Material": "ABS",
                "Size": "52 INCH",
                "Rpm": "230",
                "Air Flow": "260Ms/MIN"
            },
            // "Blade": {
            //     "Blade size": "52 inch",
            //     "Blade count": "3",
            //     "Blade material": "ABS"
            // },
            // "Electrical": {
            //     "Voltage": "220-240V",
            //     "Frequency": "50/60Hz",
            //     "Remote control": "Yes"
            // },
            // "Dimensions": {
            //     "Weight": "6.5 kg"
            // },
            // "Warranty": "2 years on the motor, 1 year on other parts."
        },

        match: ["amj-h001-white", "amj-h001-black", "amj-h001-purple"],
        card: ["./images/AMJ-H001-gray.png", "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"]
    },





    /* ---------------------------------------------------------------
  7) amj-9099
  --------------------------------------------------------------- */
    {
        slug: "amj-9099",
        family: "AMJ-9099",
        category: "fans",
        code: "AMJ-9099",
        name: "AMJ-9099",
        type: "Ceiling fan",
        // price: 35899,
        // color: { name: "Gray", hex: "#9a9a97" },
        desc: `The same quiet fan in a soft gray finish that fits almost any room.`,
        catalogue: "",

        images: [
            "./images/amj-9099.png",
            "./images/AMJ-Fh002-black-wood-fan.png",
            "./images/amj-fh002-black.png",
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        // inspire: {
        //     title: "Soft gray, steady air",
        //     text: "A neutral colour and a quiet motor. It keeps the air moving and stays out of the way.",
        //     img: "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        // },

        duo: [
            {
                img: "./images/amj-9099-down-1.png",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "./images/amj-9099-down-2.png",
                cap: "A smooth finish that is easy to wipe clean."
            }
        ],

        specs: {
            "Feature": {
                "Blade Material": "White/Wood",
                "Blade Material": "ABS",
                "Size": "52 INCH",
                "Rpm": "230",
                "Air Flow": "260Ms/MIN"
            },
            // "Blade": {
            //     "Blade size": "52 inch",
            //     "Blade count": "3",
            //     "Blade material": "ABS"
            // },
            // "Electrical": {
            //     "Voltage": "220-240V",
            //     "Frequency": "50/60Hz",
            //     "Remote control": "Yes"
            // },
            // "Dimensions": {
            //     "Weight": "6.5 kg"
            // },
            // "Warranty": "2 years on the motor, 1 year on other parts."
        },

        match: ["amj-h001-white", "amj-h001-black", "amj-h001-purple"],
        card: ["./images/AMJ-H001-gray.png", "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"]
    },



    /* ---------------------------------------------------------------
7) amj-9099-white
--------------------------------------------------------------- */
    {
        slug: "amj-9099-white",
        family: "AMJ-9099-white",
        category: "fans",
        code: "AMJ-9099-white",
        name: "AMJ-9099-white",
        type: "Ceiling fan",
        // price: 35899,
        // color: { name: "Gray", hex: "#9a9a97" },
        desc: `The same quiet fan in a soft gray finish that fits almost any room.`,
        catalogue: "",

        images: [
            "./images/amj-9099-white.png",
            "./images/amj-9099.png",
            "./images/amj-9099-white-wood-grain.png",
            // "./images/amj-fh002-black.png",
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        // inspire: {
        //     title: "Soft gray, steady air",
        //     text: "A neutral colour and a quiet motor. It keeps the air moving and stays out of the way.",
        //     img: "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        // },

        duo: [
            {
                img: "./images/amj-9099-white-down-1.png",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "./images/amj-9099-white-down-1.png",
                cap: "A smooth finish that is easy to wipe clean."
            }
        ],

        specs: {
            "Feature": {
                "Blade Material": "White/Wood",
                "Blade Material": "ABS",
                "Size": "52 INCH",
                "Rpm": "230",
                "Air Flow": "260Ms/MIN"
            },
            // "Blade": {
            //     "Blade size": "52 inch",
            //     "Blade count": "3",
            //     "Blade material": "ABS"
            // },
            // "Electrical": {
            //     "Voltage": "220-240V",
            //     "Frequency": "50/60Hz",
            //     "Remote control": "Yes"
            // },
            // "Dimensions": {
            //     "Weight": "6.5 kg"
            // },
            // "Warranty": "2 years on the motor, 1 year on other parts."
        },

        match: ["amj-h001-white", "amj-h001-black", "amj-h001-purple"],
        card: ["./images/AMJ-H001-gray.png", "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"]
    },







    /* ---------------------------------------------------------------
        7) amj - 9099 - white
    --------------------------------------------------------------- */
    {
        slug: "amj-9099-white-wood-grain",
        family: "AMJ-9099-white-Wood-Grain",
        category: "fans",
        code: "AMJ-9099-white-wood-grain",
        name: "AMJ-9099-white-wood-grain",
        type: "Ceiling fan",
        // price: 35899,
        // color: { name: "Gray", hex: "#9a9a97" },
        desc: `The same quiet fan in a soft gray finish that fits almost any room.`,
        catalogue: "",

        images: [
            "./images/amj-9099-white-wood-grain.png",
            "./images/amj-9099-white.png",
            "./images/amj-9099.png",
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        // inspire: {
        //     title: "Soft gray, steady air",
        //     text: "A neutral colour and a quiet motor. It keeps the air moving and stays out of the way.",
        //     img: "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        // },

        duo: [
            {
                img: "./images/amj-9099-white-wood-grain-down-1.png",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "./images/amj-9099-white-wood-grain-down-2.png",
                cap: "A smooth finish that is easy to wipe clean."
            }
        ],

        specs: {
            "Feature": {
                "Blade Material": "White/Wood Grain",
                "Blade Material": "ABS",
                "Size": "52 INCH",
                "Rpm": "230",
                "speed": "8 Level",
                "Air Flow": "260Ms/MIN"
            },
            // "Blade": {
            //     "Blade size": "52 inch",
            //     "Blade count": "3",
            //     "Blade material": "ABS"
            // },
            // "Electrical": {
            //     "Voltage": "220-240V",
            //     "Frequency": "50/60Hz",
            //     "Remote control": "Yes"
            // },
            // "Dimensions": {
            //     "Weight": "6.5 kg"
            // },
            // "Warranty": "2 years on the motor, 1 year on other parts."
        },

        match: ["amj-h001-white", "amj-h001-black", "amj-h001-purple"],
        card: ["./images/AMJ-H001-gray.png", "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"]
    },






    /* ---------------------------------------------------------------
       9) amj-sw146-black
   --------------------------------------------------------------- */
    {
        slug: "amj-sw146-black",
        family: "AMJ-SW1469-black",
        category: "fans",
        code: "AMJ-9099-black",
        name: "AMJ-9099-black",
        type: "Ceiling fan",
        // price: 35899,
        // color: { name: "Gray", hex: "#9a9a97" },
        desc: `The same quiet fan in a soft gray finish that fits almost any room.`,
        catalogue: "",

        images: [
            "./images/amj-sw146-black.png",
            "./images/amj-9099-white.png",
            "amj-sw146-white-wood-black.png",
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        // inspire: {
        //     title: "Soft gray, steady air",
        //     text: "A neutral colour and a quiet motor. It keeps the air moving and stays out of the way.",
        //     img: "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        // },

        duo: [
            {
                img: "./images/amj-sw-146-black-down-1.png",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "./images/amj-sw-146-black-down-2.png",
                cap: "A smooth finish that is easy to wipe clean."
            }
        ],

        specs: {
            "Feature": {
                "Blade Material": "White/Wood Grain",
                "Blade Material": "ABS",
                "Size": "52 INCH",
                "Rpm": "230",
                "speed": "8 Level",
                "Air Flow": "260Ms/MIN"
            },
            // "Blade": {
            //     "Blade size": "52 inch",
            //     "Blade count": "3",
            //     "Blade material": "ABS"
            // },
            // "Electrical": {
            //     "Voltage": "220-240V",
            //     "Frequency": "50/60Hz",
            //     "Remote control": "Yes"
            // },
            // "Dimensions": {
            //     "Weight": "6.5 kg"
            // },
            // "Warranty": "2 years on the motor, 1 year on other parts."
        },

        match: ["amj-h001-white", "amj-h001-black", "amj-h001-purple"],
        card: ["./images/AMJ-H001-gray.png", "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"]
    },





    /* ---------------------------------------------------------------
      10) amj-sw146-white
  --------------------------------------------------------------- */
    {
        slug: "amj-sw146-white",
        family: "AMJ-SW1469-white",
        category: "fans",
        code: "AMJ-9099-white",
        name: "AMJ-9099-white",
        type: "Ceiling fan",
        // price: 35899,
        // color: { name: "Gray", hex: "#9a9a97" },
        desc: `A statement piece crafted for contemporary luxury interiors,
this
designer fan blends reﬁned aesthetics with precision engineering. Its
sleek aerodynamic form, integrated illumination, and smooth
performance create a perfect balance of elegance, comfort, and modern
sophistication.
CRAFTED FOR LUXURY
₹ 31,000/-`,
        catalogue: "",

        images: [
            "./images/amj-sw146-white.png",
            "./images/amj-sw146-black.png",
            "./images/amj-sw146-white.png",
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        // inspire: {
        //     title: "Soft gray, steady air",
        //     text: "A neutral colour and a quiet motor. It keeps the air moving and stays out of the way.",
        //     img: "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        // },

        duo: [
            {
                img: "./images/amj-sw146-white-down-1.png",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "./images/amj-sw146-white-down-2.png",
                cap: "A smooth finish that is easy to wipe clean."
            }
        ],

        specs: {
            "Feature": {
                "Blade Material": "White/Wood Grain",
                "Blade Material": "ABS",
                "Size": "52 INCH",
                "Rpm": "230",
                "speed": "8 Level",
                "Air Flow": "260Ms/MIN"
            },
            // "Blade": {
            //     "Blade size": "52 inch",
            //     "Blade count": "3",
            //     "Blade material": "ABS"
            // },
            // "Electrical": {
            //     "Voltage": "220-240V",
            //     "Frequency": "50/60Hz",
            //     "Remote control": "Yes"
            // },
            // "Dimensions": {
            //     "Weight": "6.5 kg"
            // },
            // "Warranty": "2 years on the motor, 1 year on other parts."
        },

        match: ["amj-h001-white", "amj-h001-black", "amj-h001-purple"],
        card: ["./images/AMJ-H001-gray.png", "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"]
    },








    /* ---------------------------------------------------------------
     11) amj-sw146-white-black-wood
 --------------------------------------------------------------- */
    {
        slug: "amj-sw146-white-black-wood",
        family: "AMJ-SW1469-White-Black-Wood",
        category: "fans",
        code: "AMJ-9099-white-white-black-wood",
        name: "AMJ-9099-white-white-black-wood",
        type: "Ceiling fan",
        price: 31000,
        // color: { name: "Gray", hex: "#9a9a97" },
        //         desc: `A statement piece crafted for contemporary luxury interiors,
        // this
        // designer fan blends reﬁned aesthetics with precision engineering. Its
        // sleek aerodynamic form, integrated illumination, and smooth
        // performance create a perfect balance of elegance, comfort, and modern
        // sophistication.
        // CRAFTED FOR LUXURY
        // ₹ 31,000/-`,
        catalogue: "",

        images: [
            "./images/amj-sw146-white-wood-black.png",
            "./images/amj-sw146-white.png",
            "./images/amj-sw146-black.png",
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        // inspire: {
        //     title: "Soft gray, steady air",
        //     text: "A neutral colour and a quiet motor. It keeps the air moving and stays out of the way.",
        //     img: "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        // },

        duo: [
            {
                img: "./images/amj-sw146-white-wood-black-down-1.png",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "./images/amj-sw146-white-wood-black-down-2.png",
                cap: "A smooth finish that is easy to wipe clean."
            }
        ],

        specs: {
            "Feature": {
                "Blade Material": "White/black/wood",
                "Blade Material": "ABS",
                "Size": "52 INCH",
                "Rpm": "230",
                "speed": "6 Level",
                "Air Flow": "260Ms/MIN"
            },
            // "Blade": {
            //     "Blade size": "52 inch",
            //     "Blade count": "3",
            //     "Blade material": "ABS"
            // },
            // "Electrical": {
            //     "Voltage": "220-240V",
            //     "Frequency": "50/60Hz",
            //     "Remote control": "Yes"
            // },
            // "Dimensions": {
            //     "Weight": "6.5 kg"
            // },
            // "Warranty": "2 years on the motor, 1 year on other parts."
        },

        match: ["amj-h001-white", "amj-h001-black", "amj-h001-purple"],
        card: ["./images/AMJ-H001-gray.png", "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"]
    },





    /* ---------------------------------------------------------------
     12) amj-sw145-black
 --------------------------------------------------------------- */
    {
        slug: "amj-sw145-black",
        family: "AMJ-SW145-Black",
        category: "fans",
        code: "AMJ-SW145-Black",
        name: "AMJ-SW145-Black",
        type: "Ceiling fan",
        price: 31000,
        // color: { name: "Gray", hex: "#9a9a97" },
        desc: `Crafted for contemporary luxury interiors, this premium designer fan
combines sculpted aesthetics with precision engineering for a reﬁned
living experience. Its sleek aerodynamic proﬁle, integrated ambient
lighting, and smooth silent performance create the perfect balance of
elegance, comfort, and modern sophistication.`,
        catalogue: "",

        images: [
            "./images/amh-sw145-white.png",
            "./images/amj-sw145-black-white-wood.png",
            "./images/amj-sw145-black.png",
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        // inspire: {
        //     title: "Soft gray, steady air",
        //     text: "A neutral colour and a quiet motor. It keeps the air moving and stays out of the way.",
        //     img: "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        // },

        duo: [
            {
                img: "./images/amj-sw145-black-down-1.png",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "./images/amj-sw145-black-down-2.png",
                cap: "A smooth finish that is easy to wipe clean."
            }
        ],

        specs: {
            "Feature": {
                "Blade Material": "White/black/wood",
                "Blade Material": "ABS",
                "Size": "52 INCH",
                "Rpm": "230",
                "speed": "6 Level",
                "Air Flow": "260Ms/MIN"
            },
            // "Blade": {
            //     "Blade size": "52 inch",
            //     "Blade count": "3",
            //     "Blade material": "ABS"
            // },
            // "Electrical": {
            //     "Voltage": "220-240V",
            //     "Frequency": "50/60Hz",
            //     "Remote control": "Yes"
            // },
            // "Dimensions": {
            //     "Weight": "6.5 kg"
            // },
            // "Warranty": "2 years on the motor, 1 year on other parts."
        },

        match: ["amj-h001-white", "amj-h001-black", "amj-h001-purple"],
        card: ["./images/AMJ-H001-gray.png", "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"]
    },




    /* ---------------------------------------------------------------
  13) amh-sw145-white
--------------------------------------------------------------- */
    {
        slug: "amj-sw145-white",
        family: "AMJ-SW145-White",
        category: "fans",
        code: "AMJ-SW145-White",
        name: "AMJ-SW145-White",
        type: "Ceiling fan",
        price: 31000,
        // color: { name: "Gray", hex: "#9a9a97" },
        //         desc: `Crafted for contemporary luxury interiors, this premium designer fan
        // combines sculpted aesthetics with precision engineering for a reﬁned
        // living experience. Its sleek aerodynamic proﬁle, integrated ambient
        // lighting, and smooth silent performance create the perfect balance of
        // elegance, comfort, and modern sophistication.`,
        catalogue: "",

        images: [
            "./images/amh-sw145-white.png",
            "./images/amj-sw145-black.png",
            "./images/amj-sw145-black-white-wood.png",
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        // inspire: {
        //     title: "Soft gray, steady air",
        //     text: "A neutral colour and a quiet motor. It keeps the air moving and stays out of the way.",
        //     img: "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        // },

        duo: [
            {
                img: "./images/amh-sw145-white-down-1.png",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "./images/amh-sw145-white-down-2.png",
                cap: "A smooth finish that is easy to wipe clean."
            }
        ],

        specs: {
            "Feature": {
                "Blade Material": "White/black/wood",
                "Blade Material": "ABS",
                "Size": "52 INCH",
                "Rpm": "230",
                "speed": "6 Level",
                "Air Flow": "260Ms/MIN"
            },
            // "Blade": {
            //     "Blade size": "52 inch",
            //     "Blade count": "3",
            //     "Blade material": "ABS"
            // },
            // "Electrical": {
            //     "Voltage": "220-240V",
            //     "Frequency": "50/60Hz",
            //     "Remote control": "Yes"
            // },
            // "Dimensions": {
            //     "Weight": "6.5 kg"
            // },
            // "Warranty": "2 years on the motor, 1 year on other parts."
        },

        match: ["amj-h001-white", "amj-h001-black", "amj-h001-purple"],
        card: ["./images/AMJ-H001-gray.png", "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"]
    },








    /* ---------------------------------------------------------------
14) amj-sw145-black-white-wood
--------------------------------------------------------------- */
    {
        slug: "amj-sw145-black-white-wood",
        family: "AMJ-SW145-Black-White-Wood",
        category: "fans",
        code: "AMJ-SW145-Black-White-Wood",
        name: "AMJ-SW145-Black-White-Wood",
        type: "Ceiling fan",
        price: 31000,
        // color: { name: "Gray", hex: "#9a9a97" },
        //         desc: `Crafted for contemporary luxury interiors, this premium designer fan
        // combines sculpted aesthetics with precision engineering for a reﬁned
        // living experience. Its sleek aerodynamic proﬁle, integrated ambient
        // lighting, and smooth silent performance create the perfect balance of
        // elegance, comfort, and modern sophistication.`,
        catalogue: "",

        images: [
            "./images/amj-sw145-black-white-wood.png",
            "./images/amj-sw145-black.png",
            "./images/amh-sw145-white.png",
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        // inspire: {
        //     title: "Soft gray, steady air",
        //     text: "A neutral colour and a quiet motor. It keeps the air moving and stays out of the way.",
        //     img: "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        // },

        duo: [
            {
                img: "./images/amj-sw145-black-white-wood-down-1.png",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "./images/amj-sw145-black-white-wood-down-2.png",
                cap: "A smooth finish that is easy to wipe clean."
            }
        ],

        specs: {
            "Feature": {
                "Blade Material": "White/black/wood",
                "Blade Material": "ABS",
                "Size": "52 INCH",
                "Rpm": "230",
                "speed": "6 Level",
                "Air Flow": "260Ms/MIN"
            },
            // "Blade": {
            //     "Blade size": "52 inch",
            //     "Blade count": "3",
            //     "Blade material": "ABS"
            // },
            // "Electrical": {
            //     "Voltage": "220-240V",
            //     "Frequency": "50/60Hz",
            //     "Remote control": "Yes"
            // },
            // "Dimensions": {
            //     "Weight": "6.5 kg"
            // },
            // "Warranty": "2 years on the motor, 1 year on other parts."
        },

        match: ["amj-h001-white", "amj-h001-black", "amj-h001-purple"],
        card: ["./images/AMJ-H001-gray.png", "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"]
    },












    /* ---------------------------------------------------------------
15) amj-sw-128-black
--------------------------------------------------------------- */
    {
        slug: "amj-sw-128-black",
        family: "AMJ-SW-128-Black",
        category: "fans",
        code: "AMJ-SW-128-Black",
        name: "AMJ-SW-128-Black",
        type: "Ceiling fan",
        // price: 31000,
        // color: { name: "Gray", hex: "#9a9a97" },
        //         desc: `Crafted for contemporary luxury interiors, this premium designer fan
        // combines sculpted aesthetics with precision engineering for a reﬁned
        // living experience. Its sleek aerodynamic proﬁle, integrated ambient
        // lighting, and smooth silent performance create the perfect balance of
        // elegance, comfort, and modern sophistication.`,
        catalogue: "",

        images: [
            "./images/amj-sw-128-black.png",
            "./images/amj-sw-128-bronze-wood.png",
            "./images/amh-sw145-white.png",
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        // inspire: {
        //     title: "Soft gray, steady air",
        //     text: "A neutral colour and a quiet motor. It keeps the air moving and stays out of the way.",
        //     img: "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        // },

        duo: [
            {
                img: "./images/amj-sw-128-black-down-1.png",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "./images/amj-sw-128-black-down-2.png",
                cap: "A smooth finish that is easy to wipe clean."
            }
        ],

        specs: {
            "Feature": {
                "Blade Material": "White/black/wood",
                "Blade Material": "ABS",
                "Size": "52 INCH",
                "Rpm": "230",
                "speed": "6 Level",
                "Air Flow": "260Ms/MIN"
            },
            // "Blade": {
            //     "Blade size": "52 inch",
            //     "Blade count": "3",
            //     "Blade material": "ABS"
            // },
            // "Electrical": {
            //     "Voltage": "220-240V",
            //     "Frequency": "50/60Hz",
            //     "Remote control": "Yes"
            // },
            // "Dimensions": {
            //     "Weight": "6.5 kg"
            // },
            // "Warranty": "2 years on the motor, 1 year on other parts."
        },

        match: ["amj-h001-white", "amj-h001-black", "amj-h001-purple"],
        card: ["./images/AMJ-H001-gray.png", "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"]
    },











    /* ---------------------------------------------------------------
16) amj-sw-128-bronze-wood
--------------------------------------------------------------- */
    {
        slug: "amj-sw-128-bronze-wood",
        family: "AMJ-SW-128-bronze-wood",
        category: "fans",
        code: "AMJ-SW-128-bronze-wood",
        name: "AMJ-SW-128-bronze-wood",
        type: "Ceiling fan",
        // price: 31000,
        // color: { name: "Gray", hex: "#9a9a97" },
        //         desc: `Crafted for contemporary luxury interiors, this premium designer fan
        // combines sculpted aesthetics with precision engineering for a reﬁned
        // living experience. Its sleek aerodynamic proﬁle, integrated ambient
        // lighting, and smooth silent performance create the perfect balance of
        // elegance, comfort, and modern sophistication.`,
        catalogue: "",

        images: [
            "./images/amj-sw-128-bronze-wood.png",
            "./images/amj-sw-128-black.png",
            "./images/amh-sw145-white.png",
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        // inspire: {
        //     title: "Soft gray, steady air",
        //     text: "A neutral colour and a quiet motor. It keeps the air moving and stays out of the way.",
        //     img: "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        // },

        duo: [
            {
                img: "./images/amj-sw-128-bronze-wood-down-1.png",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "./images/amj-sw-128-bronze-wood-down-2.png",
                cap: "A smooth finish that is easy to wipe clean."
            }
        ],

        specs: {
            "Feature": {
                "Blade Material": "White/black/wood",
                "Blade Material": "ABS",
                "Size": "52 INCH",
                "Rpm": "230",
                "speed": "6 Level",
                "Air Flow": "260Ms/MIN"
            },
            // "Blade": {
            //     "Blade size": "52 inch",
            //     "Blade count": "3",
            //     "Blade material": "ABS"
            // },
            // "Electrical": {
            //     "Voltage": "220-240V",
            //     "Frequency": "50/60Hz",
            //     "Remote control": "Yes"
            // },
            // "Dimensions": {
            //     "Weight": "6.5 kg"
            // },
            // "Warranty": "2 years on the motor, 1 year on other parts."
        },

        match: ["amj-h001-white", "amj-h001-black", "amj-h001-purple"],
        card: ["./images/AMJ-H001-gray.png", "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"]
    },





    /* ---------------------------------------------------------------
17) amj-sw-128-white
--------------------------------------------------------------- */
    {
        slug: "amj-sw-128-white",
        family: "AMJ-SW-128-White",
        category: "fans",
        code: "AMJ-SW-128-White",
        name: "AMJ-SW-128-White",
        type: "Ceiling fan",
        // price: 31000,
        // color: { name: "Gray", hex: "#9a9a97" },
        //         desc: `Crafted for contemporary luxury interiors, this premium designer fan
        // combines sculpted aesthetics with precision engineering for a reﬁned
        // living experience. Its sleek aerodynamic proﬁle, integrated ambient
        // lighting, and smooth silent performance create the perfect balance of
        // elegance, comfort, and modern sophistication.`,
        catalogue: "",

        images: [
            "./images/amj-sw-128-white.png",
            "./images/amj-sw-128-bronze-wood.png",
            "./images/amj-sw-128-black.png",
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        // inspire: {
        //     title: "Soft gray, steady air",
        //     text: "A neutral colour and a quiet motor. It keeps the air moving and stays out of the way.",
        //     img: "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        // },

        duo: [
            {
                img: "./images/amj-sw-128-white-down-1.png",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "./images/amj-sw-128-white-down-2.png",
                cap: "A smooth finish that is easy to wipe clean."
            }
        ],

        specs: {
            "Feature": {
                "Blade Material": "White/black/wood",
                "Blade Material": "ABS",
                "Size": "52 INCH",
                "Rpm": "230",
                "speed": "6 Level",
                "Air Flow": "260Ms/MIN"
            },
            // "Blade": {
            //     "Blade size": "52 inch",
            //     "Blade count": "3",
            //     "Blade material": "ABS"
            // },
            // "Electrical": {
            //     "Voltage": "220-240V",
            //     "Frequency": "50/60Hz",
            //     "Remote control": "Yes"
            // },
            // "Dimensions": {
            //     "Weight": "6.5 kg"
            // },
            // "Warranty": "2 years on the motor, 1 year on other parts."
        },

        match: ["amj-h001-white", "amj-h001-black", "amj-h001-purple"],
        card: ["./images/AMJ-H001-gray.png", "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"]
    },






    /* ---------------------------------------------------------------
       NEW PRODUCT: add a comma after the block above and paste a new
       full block here. Change slug, images, video, specs, everything.
       --------------------------------------------------------------- */
];