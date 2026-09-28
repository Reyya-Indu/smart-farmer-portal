import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

const translations = {
  en: {
    // Navigation
    home: 'Home',
    crops: 'Crops',
    weather: 'Weather',
    marketPrices: 'Market Prices',
    schemes: 'Government Schemes',
    knowledge: 'Farming Knowledge',
    aiAssistant: 'AI Assistant',
    login: 'Login',
    register: 'Register',
    dashboard: 'Dashboard',
    profile: 'Profile',
    logout: 'Logout',
    adminLogin: 'Admin Login',

    // Home
    heroTitle: 'Smart Information for Better Farming',
    heroSubtitle: 'All the essential agricultural information farmers need, available in one simple platform.',
    exploreCrops: 'Explore Crops',
    askAI: 'Ask AI Assistant',
    everythingFarmerNeeds: 'Everything a Farmer Needs',
    cropInfo: 'Crop Information',
    cropInfoDesc: 'Detailed information about various crops, cultivation methods, and best practices.',
    weatherUpdates: 'Weather Updates',
    weatherUpdatesDesc: 'Accurate weather forecasts and farming weather advice for your region.',
    diseaseDetection: 'Disease Detection',
    diseaseDetectionDesc: 'AI-powered crop disease detection from leaf photos.',
    marketPricesCard: 'Market Prices',
    marketPricesCardDesc: 'Current market prices for crops in your area.',
    fertilizerGuidance: 'Fertilizer Guidance',
    fertilizerGuidanceDesc: 'Guidance on fertilizer selection and application for your crops.',
    govSchemes: 'Government Schemes',
    govSchemesDesc: 'Information about government schemes and benefits for farmers.',
    aiFarmerAssistant: 'AI Farmer Assistant',
    aiFarmerAssistantDesc: 'Get instant answers to your farming questions with AI.',
    farmingKnowledge: 'Farming Knowledge',
    farmingKnowledgeDesc: 'Educational articles and tips for modern farming.',
    howItWorks: 'How It Works',
    step1: 'Register',
    step1Desc: 'Create your free account in minutes',
    step2: 'Select your crop',
    step2Desc: 'Choose the crops you grow',
    step3: 'Get useful information',
    step3Desc: 'Access crop guides, weather, and market data',
    step4: 'Ask questions',
    step4Desc: 'Get AI-powered answers to your farming questions',
    step5: 'Make informed decisions',
    step5Desc: 'Use insights to improve your farming',
    todaysFarmingTips: "Today's Farming Tips",
    startJourney: 'Start Your Smart Farming Journey',
    startJourneyDesc: 'Join thousands of farmers using smart technology for better farming.',
    getStarted: 'Get Started Free',

    // Auth
    welcomeBack: 'Welcome Back',
    loginToAccount: 'Login to your Smart Farmer account',
    mobileOrEmail: 'Mobile Number / Email',
    password: 'Password',
    forgotPassword: 'Forgot Password?',
    noAccount: "Don't have an account?",
    createAccount: 'Create Account',
    demoFarmer: 'Continue as Demo Farmer',
    createAccountTitle: 'Create Your Account',
    registerSubtitle: 'Join the Smart Farmer community',
    fullName: 'Full Name',
    mobileNumber: 'Mobile Number',
    email: 'Email',
    confirmPassword: 'Confirm Password',
    district: 'District',
    state: 'State',
    preferredLanguage: 'Preferred Language',
    mainCrop: 'Main Crop',
    alreadyHaveAccount: 'Already have an account?',

    // Dashboard
    welcomeFarmer: 'Welcome, Farmer',
    myCrops: 'My Crops',
    quickActions: 'Quick Actions',
    checkWeather: 'Check Weather',
    detectDisease: 'Detect Disease',
    viewMarketPrices: 'View Market Prices',
    askAI: 'Ask AI',
    cropInformation: 'Crop Information',
    importantAlerts: 'Important Alerts',
    temperature: 'Temperature',
    rainProbability: 'Rain Probability',
    humidity: 'Humidity',
    windSpeed: 'Wind Speed',

    // Crops
    searchCrop: 'Search for a crop...',
    cropType: 'Crop Type',
    season: 'Season',
    soilType: 'Soil Type',
    allTypes: 'All Types',
    allSeasons: 'All Seasons',
    allSoils: 'All Soils',
    viewDetails: 'View Details',
    noCropsFound: 'No crops found',

    // Crop Details
    cropOverview: 'Crop Overview',
    suitableClimate: 'Suitable Climate',
    suitableSoil: 'Suitable Soil',
    growingSeason: 'Growing Season',
    duration: 'Duration',
    seedSelection: 'Seed Selection',
    landPreparation: 'Land Preparation',
    sowing: 'Sowing',
    irrigation: 'Irrigation',
    nutrientManagement: 'Nutrient Management',
    commonDiseases: 'Common Diseases',
    commonPests: 'Common Pests',
    weedManagement: 'Weed Management',
    harvesting: 'Harvesting',
    storage: 'Storage',
    relatedDiseases: 'Related Diseases',
    askAIAboutCrop: 'Ask AI about this crop',

    // Disease Detection
    diseaseDetectionTitle: 'Crop Disease Detection',
    diseaseDetectionDesc: 'Upload a clear photo of a crop leaf to get possible disease information.',
    uploadImage: 'Upload Image',
    dragDrop: 'Drag and drop an image here, or click to browse',
    analyzeImage: 'Analyze Image',
    analyzing: 'Analyzing your crop image...',
    possibleResult: 'Possible Result',
    confidenceLevel: 'Confidence Level',
    symptoms: 'Symptoms',
    management: 'Management',
    preventionTips: 'Prevention Tips',
    viewCropInfo: 'View Crop Information',
    analyzeAnother: 'Analyze Another Image',
    diseaseDisclaimer: 'This tool provides preliminary information and should not replace advice from qualified agricultural experts or official recommendations.',

    // Weather
    weatherTitle: 'Weather Information',
    selectState: 'Select State',
    selectDistrict: 'Select District',
    currentWeather: 'Current Weather',
    weatherCondition: 'Weather Condition',
    sunrise: 'Sunrise',
    sunset: 'Sunset',
    fiveDayForecast: '5-Day Forecast',
    farmingWeatherAdvice: 'Farming Weather Advice',
    weatherDisclaimer: 'Weather data shown in demo mode. Connect a real weather API for live data.',

    // Market Prices
    marketTitle: 'Market Prices',
    marketDisclaimer: 'Market data shown in demo mode. Connect an approved/current data source for live prices.',
    crop: 'Crop',
    market: 'Market',
    price: 'Price',
    unit: 'Unit',
    date: 'Date',
    searchMarket: 'Search crops or markets...',
    sortBy: 'Sort By',
    priceTrend: 'Price Trend',

    // Fertilizer
    fertilizerTitle: 'Fertilizer Guide',
    fertilizerSubtitle: 'Get guidance on fertilizer selection and application',
    selectCrop: 'Select Crop',
    growthStage: 'Growth Stage',
    irrigationType: 'Irrigation Type',
    getGuidance: 'Get Guidance',
    nutrientRequirements: 'Nutrient Requirements',
    fertilizerCategories: 'Fertilizer Categories',
    applicationTiming: 'Application Timing',
    soilHealthTips: 'Soil Health Tips',
    precautions: 'Important Precautions',
    fertilizerDisclaimer: 'For exact application rates, follow soil-test results and locally approved agricultural recommendations.',

    // Schemes
    schemesTitle: 'Government Schemes',
    schemesSubtitle: 'Explore government schemes and benefits for farmers',
    eligibility: 'Eligibility',
    benefits: 'Benefits',
    requiredDocuments: 'Required Documents',
    howToApply: 'How to Apply',
    officialWebsite: 'Official Website',
    schemesDisclaimer: 'Scheme information shown is for demonstration. Verify details from official government sources.',

    // Knowledge
    knowledgeTitle: 'Farming Knowledge Center',
    knowledgeSubtitle: 'Educational articles and tips for modern farming',
    readMore: 'Read More',
    categories: 'Categories',

    // AI Assistant
    aiTitle: 'Ask Your Farming Assistant',
    aiSubtitle: 'Get instant answers to your farming questions',
    typeMessage: 'Type your question here...',
    send: 'Send',
    clearChat: 'Clear Chat',
    suggestedQuestions: 'Suggested Questions',
    aiDisclaimer: 'The AI assistant provides general informational guidance. For serious crop problems, please consult agricultural experts.',

    // Notifications
    notificationsTitle: 'Notifications',
    notificationsSubtitle: 'Stay updated with important alerts and announcements',
    weatherAlert: 'Weather Alert',
    cropAlert: 'Crop Alert',
    schemeUpdate: 'Scheme Update',
    marketUpdate: 'Market Update',
    announcement: 'Important Announcement',
    markAllRead: 'Mark All as Read',
    noNotifications: 'No notifications',

    // Profile
    editProfile: 'Edit Profile',
    saveChanges: 'Save Changes',
    myCropsSection: 'My Crops',
    savedArticles: 'Saved Articles',
    recentDiseaseChecks: 'Recent Disease Checks',
    recentAIQuestions: 'Recent AI Questions',

    // About
    aboutTitle: 'About Smart Farmer',
    aboutDesc: 'Smart Farmer Information Portal is a farmer-friendly digital platform that provides agriculture-related information in one place.',

    // Contact
    contactTitle: 'Contact Us',
    contactSubtitle: 'We are here to help you',
    name: 'Name',
    subject: 'Subject',
    message: 'Message',
    sendMessage: 'Send Message',
    contactInfo: 'Contact Information',

    // Common
    loading: 'Loading...',
    error: 'Error',
    retry: 'Retry',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    search: 'Search',
    filter: 'Filter',
    close: 'Close',
    back: 'Back',
    next: 'Next',
    submit: 'Submit',
    success: 'Success',
    warning: 'Warning',
    info: 'Info',
  },
  te: {
    // Navigation
    home: 'హోమ్',
    crops: 'పంటలు',
    weather: 'వాతావరణం',
    marketPrices: 'మార్కెట్ ధరలు',
    schemes: 'ప్రభుత్వ పథకాలు',
    knowledge: 'వ్యవసాయ జ్ఞానం',
    aiAssistant: 'AI సహాయకుడు',
    login: 'లాగిన్',
    register: 'నమోదు',
    dashboard: 'డ్యాష్‌బోర్డ్',
    profile: 'ప్రొఫైల్',
    logout: 'లాగ్ అవుట్',
    adminLogin: 'అడ్మిన్ లాగిన్',

    // Home
    heroTitle: 'మెరుగైన వ్యవసాయం కోసం స్మార్ట్ సమాచారం',
    heroSubtitle: 'రైతులకు అవసరమైన అన్ని వ్యవసాయ సమాచారం ఒకే ప్లాట్‌ఫారమ్‌లో.',
    exploreCrops: 'పంటలను చూడండి',
    askAI: 'AI సహాయకుడిని అడగండి',
    everythingFarmerNeeds: 'రైతుకు అవసరమైన అన్నీ',
    cropInfo: 'పంట సమాచారం',
    cropInfoDesc: 'వివిధ పంటల గురించి వివరణాత్మక సమాచారం, సాగు పద్ధతులు.',
    weatherUpdates: 'వాతావరణ నవీకరణలు',
    weatherUpdatesDesc: 'మీ ప్రాంతానికి సరైన వాతావరణ సూచనలు.',
    diseaseDetection: 'వ్యాధి గుర్తింపు',
    diseaseDetectionDesc: 'ఆకు ఫోటోల నుండి AI ఆధారిత పంట వ్యాధి గుర్తింపు.',
    marketPricesCard: 'మార్కెట్ ధరలు',
    marketPricesCardDesc: 'మీ ప్రాంతంలో పంటల ప్రస్తుత మార్కెట్ ధరలు.',
    fertilizerGuidance: 'ఎరువు మార్గదర్శకత్వం',
    fertilizerGuidanceDesc: 'మీ పంటలకు ఎరువుల ఎంపిక మరియు వాడకం గురించి మార్గదర్శకత్వం.',
    govSchemes: 'ప్రభుత్వ పథకాలు',
    govSchemesDesc: 'రైతులకు ప్రభుత్వ పథకాలు మరియు ప్రయోజనాల గురించి సమాచారం.',
    aiFarmerAssistant: 'AI రైతు సహాయకుడు',
    aiFarmerAssistantDesc: 'AI తో మీ వ్యవసాయ ప్రశ్నలకు తక్షణ సమాధానాలు.',
    farmingKnowledge: 'వ్యవసాయ జ్ఞానం',
    farmingKnowledgeDesc: 'ఆధునిక వ్యవసాయం కోసం విద్యాపరమైన వ్యాసాలు మరియు చిట్కాలు.',
    howItWorks: 'ఇది ఎలా పనిచేస్తుంది',
    step1: 'నమోదు',
    step1Desc: 'నిమిషాల్లో మీ ఉచిత ఖాతాను సృష్టించండి',
    step2: 'మీ పంటను ఎంచుకోండి',
    step2Desc: 'మీరు పండించే పంటలను ఎంచుకోండి',
    step3: 'ఉపయోగకరమైన సమాచారం పొందండి',
    step3Desc: 'పంట గైడ్‌లు, వాతావరణం, మార్కెట్ డేటా పొందండి',
    step4: 'ప్రశ్నలు అడగండి',
    step4Desc: 'AI ఆధారిత సమాధానాలు పొందండి',
    step5: 'సమాచారం ఆధారిత నిర్ణయాలు తీసుకోండి',
    step5Desc: 'మీ వ్యవసాయాన్ని మెరుగుపరచడానికి ఉపయోగించండి',
    todaysFarmingTips: 'నేటి వ్యవసాయ సూచనలు',
    startJourney: 'మీ స్మార్ట్ వ్యవసాయ ప్రయాణాన్ని ప్రారంభించండి',
    startJourneyDesc: 'వేలాది మంది రైతులు స్మార్ట్ టెక్నాలజీని ఉపయోగిస్తున్నారు.',
    getStarted: 'ఉచితంగా ప్రారంభించండి',

    // Auth
    welcomeBack: 'తిరిగి స్వాగతం',
    loginToAccount: 'మీ స్మార్ట్ ఫార్మర్ ఖాతాకు లాగిన్ అవ్వండి',
    mobileOrEmail: 'మొబైల్ నంబర్ / ఇమెయిల్',
    password: 'పాస్‌వర్డ్',
    forgotPassword: 'పాస్‌వర్డ్ మర్చిపోయారా?',
    noAccount: 'ఖాతా లేదా?',
    createAccount: 'ఖాతా సృష్టించండి',
    demoFarmer: 'డెమో రైతుగా కొనసాగండి',
    createAccountTitle: 'మీ ఖాతాను సృష్టించండి',
    registerSubtitle: 'స్మార్ట్ ఫార్మర్ కమ్యూనిటీలో చేరండి',
    fullName: 'పూర్తి పేరు',
    mobileNumber: 'మొబైల్ నంబర్',
    email: 'ఇమెయిల్',
    confirmPassword: 'పాస్‌వర్డ్ నిర్ధారించండి',
    district: 'జిల్లా',
    state: 'రాష్ట్రం',
    preferredLanguage: 'ప్రాధాన్య భాష',
    mainCrop: 'ప్రధాన పంట',
    alreadyHaveAccount: 'ఇప్పటికే ఖాతా ఉందా?',

    // Dashboard
    welcomeFarmer: 'స్వాగతం, రైతుగారు',
    myCrops: 'నా పంటలు',
    quickActions: 'త్వరిత చర్యలు',
    checkWeather: 'వాతావరణం చూడండి',
    detectDisease: 'వ్యాధి గుర్తించండి',
    viewMarketPrices: 'మార్కెట్ ధరలు చూడండి',
    askAI: 'AI ని అడగండి',
    cropInformation: 'పంట సమాచారం',
    importantAlerts: 'ముఖ్యమైన హెచ్చరికలు',
    temperature: 'ఉష్ణోగ్రత',
    rainProbability: 'వర్షం సంభావ్యత',
    humidity: 'తేమ',
    windSpeed: 'గాలి వేగం',

    // Crops
    searchCrop: 'పంట వెతకండి...',
    cropType: 'పంట రకం',
    season: 'సీజన్',
    soilType: 'నేల రకం',
    allTypes: 'అన్నీ',
    allSeasons: 'అన్నీ',
    allSoils: 'అన్నీ',
    viewDetails: 'వివరాలు చూడండి',
    noCropsFound: 'పంటలు కనుగొనబడలేదు',

    // Crop Details
    cropOverview: 'పంట అవలోకనం',
    suitableClimate: 'అనుకూల వాతావరణం',
    suitableSoil: 'అనుకూల నేల',
    growingSeason: 'పండుగా సీజన్',
    duration: 'వ్యవధి',
    seedSelection: 'విత్తన ఎంపిక',
    landPreparation: 'భూమి తయారీ',
    sowing: 'విత్తనం',
    irrigation: 'సారీపోసణ',
    nutrientManagement: 'పోషక నిర్వహణ',
    commonDiseases: 'సాధారణ వ్యాధులు',
    commonPests: 'సాధారణ పురుగులు',
    weedManagement: 'కలప నిర్వహణ',
    harvesting: 'కొత్తిమీకరణ',
    storage: 'నిల్వ',
    relatedDiseases: 'సంబంధిత వ్యాధులు',
    askAIAboutCrop: 'ఈ పంట గురించి AI ని అడగండి',

    // Disease Detection
    diseaseDetectionTitle: 'పంట వ్యాధి గుర్తింపు',
    diseaseDetectionDesc: 'పంట ఆకు ఫోటోను అప్‌లోడ్ చేయండి.',
    uploadImage: 'చిత్రాన్ని అప్‌లోడ్ చేయండి',
    dragDrop: 'చిత్రాన్ని ఇక్కడ డ్రాగ్ చేసి డ్రాప్ చేయండి',
    analyzeImage: 'చిత్రాన్ని విశ్లేషించండి',
    analyzing: 'మీ పంట చిత్రాన్ని విశ్లేషిస్తోంది...',
    possibleResult: 'సంభావ్య ఫలితం',
    confidenceLevel: 'విశ్వాస స్థాయి',
    symptoms: 'లక్షణాలు',
    management: 'నిర్వహణ',
    preventionTips: 'నివారణ చిట్కాలు',
    viewCropInfo: 'పంట సమాచారం చూడండి',
    analyzeAnother: 'మరో చిత్రాన్ని విశ్లేషించండి',
    diseaseDisclaimer: 'ఈ సాధనం ప్రారంభిక సమాచారాన్ని అందిస్తుంది.',

    // Weather
    weatherTitle: 'వాతావరణ సమాచారం',
    selectState: 'రాష్ట్రం ఎంచుకోండి',
    selectDistrict: 'జిల్లా ఎంచుకోండి',
    currentWeather: 'ప్రస్తుత వాతావరణం',
    weatherCondition: 'వాతావరణ పరిస్థితి',
    sunrise: 'సూర్యోదయం',
    sunset: 'సూర్యాస్తమయం',
    fiveDayForecast: '5-రోజుల సూచన',
    farmingWeatherAdvice: 'వ్యవసాయ వాతావరణ సలహా',
    weatherDisclaimer: 'వాతావరణ డేటా డెమో మోడ్‌లో చూపించబడింది.',

    // Market Prices
    marketTitle: 'మార్కెట్ ధరలు',
    marketDisclaimer: 'మార్కెట్ డేటా డెమో మోడ్‌లో చూపించబడింది.',
    crop: 'పంట',
    market: 'మార్కెట్',
    price: 'ధర',
    unit: 'యూనిట్',
    date: 'తేదీ',
    searchMarket: 'పంటలు లేదా మార్కెట్‌లు వెతకండి...',
    sortBy: 'క్రమబద్ధీకరించు',
    priceTrend: 'ధర ధోరణి',

    // Fertilizer
    fertilizerTitle: 'ఎరువు మార్గదర్శకత్వం',
    fertilizerSubtitle: 'ఎరువు ఎంపిక మరియు వాడకం గురించి మార్గదర్శకత్వం',
    selectCrop: 'పంట ఎంచుకోండి',
    growthStage: 'వృద్ధి దశ',
    irrigationType: 'సారీపోసణ రకం',
    getGuidance: 'మార్గదర్శకత్వం పొందండి',
    nutrientRequirements: 'పోషక అవసరాలు',
    fertilizerCategories: 'ఎరువు వర్గాలు',
    applicationTiming: 'వాడక సమయం',
    soilHealthTips: 'నేల ఆరోగ్య చిట్కాలు',
    precautions: 'ముఖ్యమైన జాగ్రత్తలు',
    fertilizerDisclaimer: 'ఖచ్చితమైన వాడక రేట్లకు నేల పరీక్ష ఫలితాలను అనుసరించండి.',

    // Schemes
    schemesTitle: 'ప్రభుత్వ పథకాలు',
    schemesSubtitle: 'రైతులకు ప్రభుత్వ పథకాలు మరియు ప్రయోజనాలు',
    eligibility: 'అర్హత',
    benefits: 'ప్రయోజనాలు',
    requiredDocuments: 'అవసరమైన పత్రాలు',
    howToApply: 'ఎలా దరఖాస్తు చేయాలి',
    officialWebsite: 'అధికారిక వెబ్‌సైట్',
    schemesDisclaimer: 'పథకాల సమాచారం ప్రదర్శన కోసం.',

    // Knowledge
    knowledgeTitle: 'వ్యవసాయ జ్ఞాన కేంద్రం',
    knowledgeSubtitle: 'ఆధునిక వ్యవసాయం కోసం వ్యాసాలు మరియు చిట్కాలు',
    readMore: 'ఇంకా చదవండి',
    categories: 'వర్గాలు',

    // AI Assistant
    aiTitle: 'మీ వ్యవసాయ సహాయకుడిని అడగండి',
    aiSubtitle: 'మీ వ్యవసాయ ప్రశ్నలకు తక్షణ సమాధానాలు',
    typeMessage: 'మీ ప్రశ్నను ఇక్కడ టైప్ చేయండి...',
    send: 'పంపండి',
    clearChat: 'చాట్ క్లియర్ చేయండి',
    suggestedQuestions: 'సూచిత ప్రశ్నలు',
    aiDisclaimer: 'AI సహాయకుడు సాధారణ సమాచారాన్ని అందిస్తాడు.',

    // Notifications
    notificationsTitle: 'నోటిఫికేషన్‌లు',
    notificationsSubtitle: 'ముఖ్యమైన హెచ్చరికలు మరియు ప్రకటనలతో తాజాగా ఉండండి',
    weatherAlert: 'వాతావరణ హెచ్చరిక',
    cropAlert: 'పంట హెచ్చరిక',
    schemeUpdate: 'పథకం నవీకరణ',
    marketUpdate: 'మార్కెట్ నవీకరణ',
    announcement: 'ముఖ్యమైన ప్రకటన',
    markAllRead: 'అన్నీ చదివినట్లుగా గుర్తించండి',
    noNotifications: 'నోటిఫికేషన్‌లు లేవు',

    // Profile
    editProfile: 'ప్రొఫైల్ సవరించండి',
    saveChanges: 'మార్పులు సేవ్ చేయండి',
    myCropsSection: 'నా పంటలు',
    savedArticles: 'సేవ్ చేసిన వ్యాసాలు',
    recentDiseaseChecks: 'ఇటీవలి వ్యాధి తనిఖీలు',
    recentAIQuestions: 'ఇటీవలి AI ప్రశ్నలు',

    // About
    aboutTitle: 'స్మార్ట్ ఫార్మర్ గురించి',
    aboutDesc: 'స్మార్ట్ ఫార్మర్ సమాచార పోర్టల్ రైతులకు అనుకూలమైన డిజిటల్ ప్లాట్‌ఫారమ్.',

    // Contact
    contactTitle: 'మమ్మల్ని సంప్రదించండి',
    contactSubtitle: 'మేము మీకు సహాయం చేయడానికి ఇక్కడ ఉన్నాము',
    name: 'పేరు',
    subject: 'విషయం',
    message: 'సందేశం',
    sendMessage: 'సందేశం పంపండి',
    contactInfo: 'సంప్రదింపు సమాచారం',

    // Common
    loading: 'లోడ్ అవుతోంది...',
    error: 'లోపం',
    retry: 'మళ్లీ ప్రయత్నించండి',
    save: 'సేవ్ చేయండి',
    cancel: 'రద్దు చేయండి',
    delete: 'తొలగించండి',
    edit: 'సవరించండి',
    add: 'జోడించండి',
    search: 'వెతకండి',
    filter: 'ఫిల్టర్',
    close: 'మూసివేయండి',
    back: 'వెనుకకు',
    next: 'తదుపరి',
    submit: 'సమర్పించండి',
    success: 'విజయం',
    warning: 'హెచ్చరిక',
    info: 'సమాచారం',
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('sf_language') || 'en'
  })

  useEffect(() => {
    localStorage.setItem('sf_language', language)
  }, [language])

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  const switchLanguage = (lang) => {
    setLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
