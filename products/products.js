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
        desc: "A quiet ceiling fan with a slim body and smooth airflow. Easy to clean and made to run every day.",
        catalogue: "",                                   // e.g. "../files/amj-h001.pdf"

        images: [
            "./images/AMJ-H001-White.png",
            "./images/AMJ-H001-black.png",
            "./images/AMJ-H001-White.png",
            "./images/AMJ-H001-black.png",
            "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&fit=crop"
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        inspire: {
            title: "Air that moves quietly",
            text: "AMJ-H001 keeps a room fresh without the noise. The slim blades and steady motor give a calm, even breeze all day.",
            img: "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        },

        duo: [
            {
                img: "https://images.pexels.com/photos/7601104/pexels-photo-7601104.jpeg?auto=compress&cs=tinysrgb&w=900&h=1125&fit=crop",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=900&h=1125&fit=crop",
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
       2) AMJ-H001 BLACK
       --------------------------------------------------------------- */
    {
        slug: "amj-h001-black",
        family: "AMJ-H001",
        category: "fans",
        code: "AMJ-H001-black",
        name: "AMJ-H001",
        type: "Ceiling fan",
        price: 250,
        color: { name: "Black", hex: "#1a1a1a" },
        desc: "The same quiet fan in a deep black finish. Slim body, smooth airflow, made to run every day.",
        catalogue: "",

        images: [
            "./images/AMJ-H001-black.png",
            "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&fit=crop",
            "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&fit=crop"
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        inspire: {
            title: "Calm, in black",
            text: "A dark finish that disappears into the ceiling, with a steady motor that keeps the room fresh without the noise.",
            img: "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        },

        duo: [
            {
                img: "https://images.pexels.com/photos/7601104/pexels-photo-7601104.jpeg?auto=compress&cs=tinysrgb&w=900&h=1125&fit=crop",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=900&h=1125&fit=crop",
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
       3) AMJ-H001 GRAY
       --------------------------------------------------------------- */
    {
        slug: "amj-h001-gray",
        family: "AMJ-H001",
        category: "fans",
        code: "AMJ-H001-gray",
        name: "AMJ-H001",
        type: "Ceiling fan",
        price: 250,
        color: { name: "Gray", hex: "#9a9a97" },
        desc: "The same quiet fan in a soft gray finish that fits almost any room.",
        catalogue: "",

        images: [
            "./images/AMJ-H001-gray.png",
            "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&fit=crop",
            "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&fit=crop"
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        inspire: {
            title: "Soft gray, steady air",
            text: "A neutral colour and a quiet motor. It keeps the air moving and stays out of the way.",
            img: "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        },

        duo: [
            {
                img: "https://images.pexels.com/photos/7601104/pexels-photo-7601104.jpeg?auto=compress&cs=tinysrgb&w=900&h=1125&fit=crop",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=900&h=1125&fit=crop",
                cap: "A smooth finish that is easy to wipe clean."
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

        match: ["amj-h001-white", "amj-h001-black", "amj-h001-purple"],
        card: ["./images/AMJ-H001-gray.png", "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"]
    },

    /* ---------------------------------------------------------------
       4) AMJ-H001 PURPLE   (has an extra spec group + extra row)
       --------------------------------------------------------------- */
    {
        slug: "amj-h001-purple",
        family: "AMJ-H001",
        category: "fans",
        code: "AMJ-H001-purple",
        name: "AMJ-H001",
        type: "Ceiling fan",
        price: 260,
        color: { name: "Purple", hex: "#7a5ca8" },
        desc: "The same quiet fan in a bold purple finish, with an upgraded motor.",
        catalogue: "",

        images: [
            "./images/AMJ-H001-purple.png",
            "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&fit=crop",
            "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&fit=crop",
            "https://images.pexels.com/photos/7601104/pexels-photo-7601104.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1500&fit=crop"
        ],

        video: "../img/home-video.mp4",
        poster: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",

        inspire: {
            title: "A little colour overhead",
            text: "Pick a colour that stands out. The upgraded motor keeps the same calm, quiet airflow.",
            img: "https://images.pexels.com/photos/3958953/pexels-photo-3958953.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        },

        duo: [
            {
                img: "https://images.pexels.com/photos/7601104/pexels-photo-7601104.jpeg?auto=compress&cs=tinysrgb&w=900&h=1125&fit=crop",
                cap: "A strong, quiet motor built to last."
            },
            {
                img: "https://images.pexels.com/photos/3935353/pexels-photo-3935353.jpeg?auto=compress&cs=tinysrgb&w=900&h=1125&fit=crop",
                cap: "A smooth finish that is easy to wipe clean."
            }
        ],

        specs: {
            "Motor": {
                "Motor size": "40W",
                "Motor type": "DC motor",
                "Speed levels": "6",
                "Motor warranty": "5 years"
            },
            "Special motor part": {
                "Bearing": "Double ball bearing",
                "Winding": "100% copper",
                "Cooling": "Heat-sink housing"
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
                "Weight": "6.8 kg"
            },
            "Warranty": "2 years on the motor, 1 year on other parts."
        },

        match: ["amj-h001-white", "amj-h001-black", "amj-h001-gray"],
        card: ["./images/AMJ-H001-purple.png", "https://images.pexels.com/photos/3958956/pexels-photo-3958956.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"]
    }

    /* ---------------------------------------------------------------
       NEW PRODUCT: add a comma after the block above and paste a new
       full block here. Change slug, images, video, specs, everything.
       --------------------------------------------------------------- */
];