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
    defaultTitle: "Shoyaib YT - Professional E-football Gamer",
    
    // A short summary of your site for Google search results
    description: "Official gamer profile for Shoyaib YT. E-football gameplay, live streams, tutorials, and community.",
    
    // Words people might search to find you (separated by commas)
    keywords: ["Shoyaib YT", "E-football", "Gamer", "PES Mobile", "Gaming Profile", "Esports"],
    
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
    subtitle: "Professional E-football Gamer & Content Creator", // The text under your name
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
    vimeo: "", 
    youtube: "GV1B6wPP0Ow", 
  },

  // =====================================================================
  //  SOCIAL MEDIA LINKS
  //  Add your links here. If you don't have an account, leave it empty "".
  // =====================================================================
  social: {
    youtube: "https://www.youtube.com/@shoyaib.yt132",
    facebook: "https://www.facebook.com/shoyaib.111",
    instagram: "https://www.facebook.com/shoyaib.111",
    twitter: "https://www.facebook.com/shoyaib.111",
    twitch: "https://www.facebook.com/shoyaib.111",
    discord: "https://www.facebook.com/shoyaib.111",
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
      description: "Welcome to my profile! I'm Shoyaib YT, a passionate E-football gamer and content creator. I'm dedicated to mastering the game, sharing my best strategies, and building a strong community of football gaming fans. Join me on my journey!",
    },
    
    // 2. My Content / Services Card
    // You can add more items by copying the block { ... },
    contentServices: [
      {
        icon: "fas fa-gamepad", // Icon code from FontAwesome
        title: "E-football Gameplay",
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
        description: "Creating a friendly and supportive space for all E-football lovers.",
      },
    ],

    // 3. Gameplay Highlights Card
    highlights: [
      {
        title: "Rank 1 Champion",
        description: "Achieved the top rank in Season 3, competing against the best players in the region.",
      },
      {
        title: "10-Goal Thriller Match",
        description: "A legendary comeback match featured on my YouTube channel with over 100k views.",
      },
    ],

    // 4. Testimonials (What people say)
    testimonials: [
      {
        quote: "Shoyaib's tutorials completely changed how I play E-football. His tips on dribbling are game-changing. Keep up the great content!",
        author: "- A Subscriber",
      },
    ],

    // 5. Skills Card (Maximum 6 items recommended)
    skills: [
      "Advanced Dribbling",
      "Tactical Formations",
      "Defensive Strategy",
      "Set Piece Mastery",
      "Team Building",
      "Live Commentary",
    ],
  },

  // =====================================================================
  //  FOOTER SECTION
  // =====================================================================
  footer: {
    copyrightStart: "2025", // The year your copyright begins
  },
};
