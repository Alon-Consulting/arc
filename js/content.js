// Website Content Management
// All website text content is managed here for easy updates

const CONTENT = {
    // Navigation
    nav: {
        whoAmI: "Who I am",
        whatIDo: "What I do", 
        getInTouch: "Get in touch"
    },

    // Hero/Intro Section
    intro: {
        values: "<span>Attribution</span><span> · Partnerships</span><span> · Growth Strategy</span>",
        valuesMobile: "<span>Attribution</span><br><span>Partnerships</span><br><span>Growth Strategy</span>",
        title: "Turn <span class=\"bold\">attribution</span><br>into <span class=\"bold\">your growth <br>advantage</span>."
    },

    // Section 01: Why Are You Here
    whySection: {
        pretitle: "Why Are You Here",
        title: "You've built a powerful engine.<br>Now, let's ensure the ecosystem recognizes your full potential.",
        subtitle: "The difference between technical excellence and market authority is often a matter of strategic access. I help you bridge the gap between your momentum and global recognition, leveraging over a decade of industry-defining experience to elevate your position within the global mobile ecosystem."
    },

    // Section 02: Who Am I
    aboutSection: {
        pretitle: "Who Am I",
        title: "Hi, I'm Alon Alexander Rapoport,<br> a strategic consultant to brands and executives in the marketing and advertising ecosystem.",
        description: "I’ve spent the last decade in the rooms where the rules of mobile attribution were written. As one of the core founding team at Singular, I helped build the frameworks that became the industry standard, later building the partnership infrastructure at AppsFlyer that allows the ecosystem to sync and scale today. My background provides my partners with more than just a blueprint - it offers the executive access and strategic positioning needed to turn technical momentum into Tier-1 market authority and long-term ecosystem leadership. I ensure your infrastructure is bulletproof so that your reputation remains an unshakeable asset, clearing the path for us to open doors to high-level strategic collaborations and high-stakes business opportunities with absolute confidence.",
        additionalDescription: "I partner with those I believe make a difference - those driven by a mission and relentlessly building toward an exceptional vision. They dream big, make bold moves, listen carefully, think deeply, and commit fully to their goals. They excel independently, and thrive when collaborating with the right partners."
    },

    // Section 03: What I Do (Services)
    servicesSection: {
        pretitle: "What I Do",
        title: "These are the strategic ways I typically engage, shaped by where the business is and what it needs to move forward.",
        description: "Different companies face different moments in their journey. Some need to establish clarity, others need momentum, and some are ready to turn progress into compounding advantage. These engagements reflect the most common stages and inflection points I work with - each shaped by what the business needs most in order to move forward with confidence.",
        services: [
            {
                title: "Foundation",
                subtitle: "Architecting Excellence",
                description: "<i>Foundation</i> is the starting point for companies whose attribution is not yet fully aligned with how the business operates. We begin by understanding your product and existing measurement setup, then architect the right attribution flows and integrations so measurement reflects reality and unlocks missed revenue."
            },
            {
                title: "Acceleration", 
                subtitle: "Strategic Positioning",
                description: "<i>Acceleration</i> is for companies ready to turn attribution clarity into momentum. We shape how your product, data, and capabilities are presented so MMPs understand where you fit and why you matter. Conversations become more focused, positioning becomes sharper, and effort starts translating into real progress."
            },
            {
                title: "Growth",
                subtitle: "Compounding Advantage", 
                description: "<i>Growth</i> is for companies with strong attribution and clear positioning. We focus on turning those assets into compounding advantage. When attribution reflects reality and the business is positioned correctly with measurement platforms, growth begins to build on itself - unlocking access to more advanced capabilities, deeper collaboration, and higher-leverage opportunities."
            },
            {
                title: "Catalyst",
                subtitle: "Focused Partnership",
                description: "<i>Catalyst</i> is designed for situations that don't fit a predefined stage. It's a focused partnership built around a specific ambition, challenge, or inflection point. We cut through complexity to create lasting, compounding advantage - clearer revenue impact, stronger positioning, and momentum that continues to build over time."
            }
        ]
    },

    // Who I Work With
    workWith: {
        appsAndBrands: {
            title: "For Apps & Brands",
            description: "You have the vision and the product. I architect your systems to be \"MMP-Native,\" ensuring you are treated like a Top-100 client from day one. We unlock the premium features and VIP support usually reserved for the industry’s largest spenders, ensuring your growth is boundless."
        },
        mediaPartners: {
            title: "For Media Partners", 
            description: "You’ve built a network that delivers results. I help you refine your signal integrity so that every MMP and Advertiser recognizes your value instantly. By harmonizing your infrastructure, we move you from an integrated partner to a <strong>Preferred Strategic Ally</strong> with direct C-suite advocacy."
        }
    },

    // Footer
    footer: {
        pretitle: "Get in touch",
        title: "Let's work together and<br>make something great.",
        description: "I work with a limited number of companies at any given time. If you believe there's a strong fit, the best way to reach me is directly, if we already know each other, or through a mutual connection.",
        linkedinUrl: "https://www.linkedin.com/company/alexanderrapoport",
        copyright: "2026 © Alexander"
    },

    // Brand Partners
    brands: [
        { name: "AppsFlyer", logo: "images/clients/appsflyer.png" },
        { name: "Appodeal", logo: "images/clients/appodeal.png" },
        { name: "Singular", logo: "images/clients/singular.png" },
        { name: "Adjust", logo: "images/clients/adjust.png" },
        { name: "BidMachine", logo: "images/clients/bidmachine.png" },
        { name: "Cash Cow", logo: "images/clients/cashcow.png" }
    ]
};

// Helper function to get content by path
function getContent(path) {
    return path.split('.').reduce((obj, key) => obj?.[key], CONTENT);
}
