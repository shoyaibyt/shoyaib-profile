export const GeneralSettings = {
  // =====================================================================
  //  WEBSITE BASIC SETTINGS (SEO & GOOGLE)
  //  These settings help Google find your website and control how it looks
  //  when shared on Facebook/WhatsApp.
  // =====================================================================
  metadata: {
    siteName: "Shoyaib YT", // The name of your website
    siteUrl: "https://shoyaib.pages.dev", // Your website's full link
    
    // The title that appears in the browser tab (e.g., "Home | Shoyaib YT")
    titleTemplate: "%s | Shoyaib YT", 
    defaultTitle: "Shoyaib YT - Professional  Gamer",
    
    // A short summary of your site for Google search results
    description: "Official gamer profile for Shoyaib YT. Pc and Mobaile gameplay, live streams, tutorials, and community.",
    
    // Words people might search to find you (separated by commas)
    keywords: ["Shoyaib YT", "All games", "Gamer", "PES Mobile", "Gaming Profile", "Esports"],
    
    // Images used when sharing your link on Social Media (keep these in the /public/img folder)
    ogImage: "/img/og-image.jpg",      // For Facebook/WhatsApp
    twitterImage: "/img/twitter-image.jpg", // For Twitter/X
    
    // Website Icons (Favicon)
    apple: "/img/icon.png", // Icon for iPhones
    icon: "/img/icon.png",  // Icon for Browser Tabs
    
    creator: "Shoyaib YT", // Your name as the content creator
    themeColor: "#0f172a", // The main color of the browser bar (Dark Blue)
    googleAnalyticsId: "G-BQCJ8Y5S11", // Your Google Analytics Tracking ID
  },

  // =====================================================================
  //  YOUR PROFILE HEADER (The Top Section)
  //  This is the main info shown at the very top of your page.
  // =====================================================================
  profile: {
    name: "Shoyaib YT", // Your main display name
    subtitle: "Professional Pc And Mobaile Gamer & Content Creator", // The text under your name
    verified: true, // Set to 'true' to show the Blue Tick, 'false' to hide it
    image: "/profile.png", // Your profile picture (put the file in /public folder)
    
    // The video playing BEHIND your profile picture (Use a direct link or Vimeo/YouTube embed)
    profileBackground: "https://player.vimeo.com/video/1150066871", 
    
    email: "shoyaib.gaming.yt.12@gmail.com", // Your contact email
    address: "Nazipur, Patnitala, Naogaon", // Your location
  },

  // =====================================================================
  //  FULL PAGE BACKGROUND VIDEO
  //  This video plays behind the entire website. Use a direct link or ID ex: 1164309507
  // =====================================================================
  backgroundVideo: {
    vimeo: "1164309507", 
    youtube: "", 
  },

  // =====================================================================
  //  SOCIAL MEDIA LINKS
  //  Add your links here. If you don't have an account, leave it empty "".
  // =====================================================================
  social: {
    youtube: "https://www.youtube.com/@shoyaib.yt132",
    facebook: "https://www.facebook.com/shoyaib.yt.132",
    instagram: "https://www.facebook.com/shoyaibyt",
    twitter: "https://www.facebook.com/ShoyaibGaming",
    twitch: "https://www.facebook.com/shoyaibyt222",
    
  },

  // =====================================================================
  //  GAMER CARD DETAILS
  //  Specific details about your gaming career (shown in the side card).
  // =====================================================================
  gamerDetails: {
    inGameName: "ShoyaibYT", // Your ID inside the game
    startedStreaming: "January 2024", // When you started
    mainPlatform: "PC & Mobile", // What you play on
  },

  // =====================================================================
  //  HOMEPAGE CONTENT SECTIONS
  //  Edit the text for the cards on your homepage here.
  // =====================================================================
  home: {
    // 1. About Me Card
    about: {
      title: "About Me",
      description: "I'm Shoyaib YT, a professional gamer competing across PC and Mobile platforms. From high-stakes PC shooters to strategic mobile battles, share pro tips, and build a community for true gaming fans.",
    },
    
    // 2. My Content / Services Card
    // You can add more items by copying the block { ... },
    contentServices: [
      {
        icon: "fas fa-gamepad", // Icon code from FontAwesome
        title: "All Gameplay",
        description: "High-level ranked matches, friendly challenges, and pure gameplay videos.",
      },
      {
        icon: "fas fa-video",
        title: "Livestreams",
        description: "Join my live sessions for interactive gameplay, Q&A, and community events.",
      },
      {
        icon: "fas fa-bullhorn",
        title: "Tutorials & Tips",
        description: "Learn new skills, tactics, and formations to improve your own game.",
      },
      {
        icon: "fas fa-users",
        title: "Community Building",
        description: "Creating a friendly and supportive space for all games  lovers.",
      },
    ],

    // 3. Gameplay Highlights Card
    highlights: [
      {
        title: "Rank 1 Champion",
        description: "Achieved the top rank in Season 3, competing against the best players in the region.",
      },
      {
        title: "dengar games  Thriller Match",
        description: "A legendary comeback match featured on my tik tok channel with over 50k views.",
      },
    ],

    // 4. Testimonials (What people say)
    testimonials: [
      {
        quote: "Shoyaib's tutorials completely changed how I play games.  Keep up the great content!",
        author: "- A Subscriber",
      },
    ],

    // 5. Skills Card (Maximum 6 items recommended)
    skills: [
      "PC & Mobile Mastery",
      "OBS & Live Production",
      "Video Editing & Growth",
      "Set Piece Mastery",
      "FPS & Ping Fix",
      "Audience Growth",
    ],
  },

  // =====================================================================
  //  FOOTER SECTION
  // =====================================================================
  footer: {
    copyrightStart: "2025", // The year your copyright begins
  },
};
