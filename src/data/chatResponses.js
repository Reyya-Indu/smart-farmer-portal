export const translations = {
  en: {
    welcome: "Hello! I'm your Smart Farmer AI Assistant. I can help you with crop information, weather forecasts, market prices, government schemes, soil health, irrigation, and pest management. What would you like to know?",
    placeholder: "Ask me anything about farming...",
    send: "Send",
    online: "Online",
    alwaysHere: "Always here to help",
    suggestedTitle: "Suggested questions:",
    features: [
      { icon: '🌾', title: 'Crop Guidance', desc: 'Get crop recommendations and cultivation tips' },
      { icon: '🌤️', title: 'Weather Insights', desc: 'Weather-based farming advisories' },
      { icon: '📊', title: 'Market Intelligence', desc: 'Price trends and selling strategies' },
    ],
    quickTips: [
      "What crops should I grow this Kharif season?",
      "What's the weather forecast for this week?",
      "Show me current market prices for wheat",
      "Tell me about PM-KISAN scheme",
      "How to improve soil health?",
      "Best irrigation practices for rice",
    ],
  },
  te: {
    welcome: "నమస్కారం! నేను మీ స్మార్ట్ ఫార్మర్ AI అసిస్టెంట్. నేను మీకు పంట సమాచారం, వాతావరణ సూచనలు, మార్కెట్ ధరలు, ప్రభుత్వ పథకాలు, నేల ఆరోగ్యం, సారవర్ధం మరియు తెగుళ్ళ నిర్వహణలో సహాయపడతాను. మీరు ఏమి తెలుసుకోవాలనుకుంటున్నారు?",
    placeholder: "వ్యవసాయం గురించి ఏదైనా అడగండి...",
    send: "పంపండి",
    online: "ఆన్లైన్",
    alwaysHere: "ఎల్లప్పుడూ సహాయం కోసం ఇక్కడ ఉన్నాను",
    suggestedTitle: "సూచించిన ప్రశ్నలు:",
    features: [
      { icon: '🌾', title: 'పంట మార్గదర్శకం', desc: 'పంట సిఫార్సులు మరియు సాగు చిట్కాలు' },
      { icon: '🌤️', title: 'వాతావరణ అంతర్దృష్టులు', desc: 'వాతావరణ ఆధారిత వ్యవసాయ సలహాలు' },
      { icon: '📊', title: 'మార్కెట్ ఇంటెలిజెన్స్', desc: 'ధర ధోరణులు మరియు అమ్మకం వ్యూహాలు' },
    ],
    quickTips: [
      "ఈ ఖరీఫ్ సీజన్‌లో ఏ పంటలు పండించాలి?",
      "ఈ వారం వాతావరణ సూచన ఏమిటి?",
      "గోధుమల ప్రస్తుత మార్కెట్ ధరలు చూపండి",
      "PM-KISAN పథకం గురించి చెప్పండి",
      "నేల ఆరోగ్యాన్ని ఎలా మెరుగుపరచాలి?",
      "వరికి ఉత్తమ సారవర్ధం పద్ధతులు",
    ],
  },
}

export const aiResponses = {
  en: {
    greeting: [
      "Hello! I'm your Smart Farmer AI Assistant. How can I help you today?",
      "Welcome! I'm here to help with any farming questions you have.",
      "Namaste! I'm your AI farming companion. What would you like to know?",
    ],
    crops: [
      "For Kharif season, consider crops like Rice, Maize, Cotton, and Soybean. These are well-suited for the monsoon season with proper water management.",
      "Rabi season crops include Wheat, Chickpea, Mustard, and Potato. These grow well in cooler temperatures with moderate irrigation.",
      "For year-round crops, Tomato, Onion, and Chilli are good choices with proper care and market demand.",
    ],
    weather: [
      "Based on current forecasts, expect partly cloudy skies with temperatures around 32°C. Light rain is expected in the next 48 hours.",
      "The weather looks favorable for farming activities this week. Ensure proper drainage if heavy rain is predicted.",
      "Temperature is expected to drop slightly over the next two days. Plan your irrigation accordingly.",
    ],
    prices: [
      "Current market prices show Wheat at ₹2,150/quintal (up 2.3%), Rice at ₹4,500/quintal (up 1.1%), and Maize at ₹1,850/quintal (down 0.8%).",
      "Onion prices are trending upward at ₹2,500/quintal. Consider holding your stock if storage facilities are available.",
      "Tomato prices have dropped by 5.2% this week. Consider processing or storage options to avoid distress sales.",
    ],
    schemes: [
      "PM-KISAN provides ₹6,000/year income support to farmer families. Check your eligibility on the official portal.",
      "PMFBY offers crop insurance with minimal premium. Kharif premium is 2% of sum insured, Rabi is 1.5%.",
      "Kisan Credit Card provides agricultural loans at 4% interest with timely repayment. Apply through your nearest bank.",
    ],
    soil: [
      "For optimal crop growth, maintain soil pH between 6.0-7.0. Use lime for acidic soil and gypsum for alkaline soil.",
      "Organic matter content should be at least 0.5%. Add compost or farmyard manure to improve soil health.",
      "Conduct soil testing every 2-3 years to monitor nutrient levels and apply fertilizers accordingly.",
    ],
    irrigation: [
      "Drip irrigation can save 40-60% water compared to flood irrigation while increasing yield by 20-50%.",
      "Schedule irrigation based on crop growth stage. Critical stages require adequate moisture for optimal yield.",
      "Mulching helps retain soil moisture and reduce irrigation frequency by 30-40%.",
    ],
    pest: [
      "Integrated Pest Management (IPM) combines biological, cultural, and chemical methods for sustainable pest control.",
      "Regular field monitoring is essential. Use pheromone traps and sticky traps for early pest detection.",
      "Neem-based pesticides are effective against many pests and are environmentally friendly.",
    ],
    default: [
      "I'm here to help with farming-related questions! You can ask me about crops, weather, market prices, government schemes, soil health, irrigation, or pest management.",
      "That's an interesting question! For detailed information, please consult your local agricultural extension officer or KVK.",
      "I'd be happy to help! Try asking about crop recommendations, weather forecasts, market prices, or government schemes.",
    ],
  },
  te: {
    greeting: [
      "నమస్కారం! నేను మీ స్మార్ట్ ఫార్మర్ AI అసిస్టెంట్. నేను మీకు ఎలా సహాయపడగలను?",
      "స్వాగతం! మీ వ్యవసాయ ప్రశ్నలకు సహాయం కోసం నేను ఇక్కడ ఉన్నాను.",
      "నమస్తే! నేను మీ AI వ్యవసాయ భాగస్వామి. మీరు ఏమి తెలుసుకోవాలనుకుంటున్నారు?",
    ],
    crops: [
      "ఖరీఫ్ సీజన్ కోసం వరి, మొక్కజొన్న, పత్తి మరియు సోయాబీన్ వంటి పంటలను పరిగణించండి. సరైన నీటి నిర్వహణతో ఇవి వర్షాకాలానికి అనుకూలంగా ఉంటాయి.",
      "రబీ సీజన్ పంటలలో గోధుమలు, శనగ, ఆవాలు మరియు బంగాళదుంప ఉన్నాయి. ఇవి మిశ్రమ సారవర్ధంతో చల్లని ఉష్ణోగ్రతలో బాగా పెరుగుతాయి.",
      "సంవత్సరం మొత్తం పంటలకు టమోటా, ఉల్లిపాయ మరియు మిర్చి మంచి ఎంపికలు.",
    ],
    weather: [
      "ప్రస్తుత సూచనల ఆధారంగా, 32°C ఉష్ణోగ్రతతో పాక్షికంగా మేఘావృతంగా ఉంటుంది. రెండు రోజుల్లో తేలికారక వర్షం ఊహించబడుతోంది.",
      "ఈ వారం వ్యవసాయ కార్యకలాపాలకు వాతావరణం అనుకూలంగా ఉంది. భారీ వర్షం ఊహించబడితే సరైన డ్రైనేజీ నిర్ధారించుకోండి.",
      "రెండు రోజుల్లో ఉష్ణోగ్రత కొంచెం తగ్గుతుంది. మీ సారవర్ధం షెడ్యూల్‌ను తదనుగుణంగా ప్లాన్ చేయండి.",
    ],
    prices: [
      "ప్రస్తుత మార్కెట్ ధరలు: గోధుమలు ₹2,150/క్వింటాల్ (+2.3%), వరి ₹4,500/క్వింటాల్ (+1.1%), మొక్కజొన్న ₹1,850/క్వింటాల్ (-0.8%).",
      "ఉల్లిపాయ ధరలు ₹2,500/క్వింటాల్‌కు పైనే ఉన్నాయి. నిల్వ సౌకర్యాలు అందుబాటులో ఉంటే మీ స్టాక్‌ను పట్టుకోండి.",
      "టమోటా ధరలు ఈ వారం 5.2% తగ్గాయి. విక్రయాలను తప్పించుకోవడానికి ప్రాసెసింగ్ లేదా నిల్వ ఎంపికలను పరిగణించండి.",
    ],
    schemes: [
      "PM-KISAN రైతు కుటుంబాలకు సంవత్సరానికి ₹6,000 ఆదాయ మద్దతును అందిస్తుంది. అధికారిక పోర్టల్‌లో మీ అర్హతను తనిఖీ చేయండి.",
      "PMFBY కనిష్ట పీమియంతో పంట భీమాను అందిస్తుంది. ఖరీఫ్ పీమియం మొత్తం భీమా మొత్తంలో 2%, రబీ 1.5%.",
      "కిసాన్ క్రెడిట్ కార్డ్ సకారాత్మక చెల్లింపుతో 4% వడ్డీతో వ్యవసాయ రుణాలను అందిస్తుంది. మీ సమీప బ్యాంక్ ద్వారా దరఖాస్తు చేయండి.",
    ],
    soil: [
      "సరైన పంట పెరుగుదలకు నేల pH 6.0-7.0 మధ్య ఉంచండి. ఆమ్ల నేలకు సున్నం, క్షారీయ నేలకు జిప్సం వాడండి.",
      "సేంద్రీయ పదార్థం కనీసం 0.5% ఉండాలి. నేల ఆరోగ్యాన్ని మెరుగుపరచడానికి కంపోస్ట్ లేదా ఎరువు జోడించండి.",
      "పోషక స్థాయిలను పర్యవేక్షించడానికి ప్రతి 2-3 సంవత్సరాలకు నేల పరీక్ష చేయించుకోండి.",
    ],
    irrigation: [
      "డ్రిప్ సారవర్ధం వేరు సారవర్ధంతో పోలిస్తే 40-60% నీరు ఆదా చేస్తుంది మరియు దిగుబడిని 20-50% పెంచుతుంది.",
      "పంట పెరుగుదల దశ ఆధారంగా సారవర్ధం షెడ్యూల్ చేయండి. కీలక దశలలో తగిన తేమ అవసరం.",
      "మల్చింగ్ నేల తేమను నిల్వ చేస్తుంది మరియు సారవర్ధం తరచుదనాన్ని 30-40% తగ్గిస్తుంది.",
    ],
    pest: [
      "ఇంటిగ్రేటెడ్ పెస్ట్ మేనేజ్‌మెంట్ (IPM) సస్టైనబుల్ తెగులు నియంత్రణ కోసం జీవిశాస్త్ర, సాంస్కృతిక మరియు రసాయన పద్ధతులను కలుపుతుంది.",
      "క్రమమైన ఫీల్డ్ పర్యవేక్షణ అవసరం. తెగుళ్ళను ముందుగా గుర్తించడానికి ఫెరోమోన్ ట్రాప్‌లు మరియు స్టికీ ట్రాప్‌లను ఉపయోగించండి.",
      "వేప ఆధారిత పెస్టిసైడ్‌లు చాలా తెగుళ్ళకు ప్రభావవంతంగా ఉంటాయి మరియు పర్యావరణానికి అనుకూలంగా ఉంటాయి.",
    ],
    default: [
      "నేను వ్యవసాయ సంబంధిత ప్రశ్నలకు సహాయం చేయడానికి ఇక్కడ ఉన్నాను! మీరు పంటలు, వాతావరణం, మార్కెట్ ధరలు, ప్రభుత్వ పథకాలు, నేల ఆరోగ్యం, సారవర్ధం లేదా తెగులు నిర్వహణ గురించి నన్ను అడగవచ్చు.",
      "అది ఆసక్తికరమైన ప్రశ్న! వివరణాత్మక సమాచారం కోసం దయచేసి మీ స్థానిక వ్యవసాయ విస్తరణ అధికారిని సంప్రదించండి.",
      "నేను సహాయం చేయడానికి సిద్ధంగా ఉన్నాను! పంట సిఫార్సులు, వాతావరణ సూచనలు, మార్కెట్ ధరలు లేదా ప్రభుత్వ పథకాల గురించి అడగడానికి ప్రయత్నించండి.",
    ],
  },
}

export function getAIResponse(message, language = 'en') {
  const lowerMsg = message.toLowerCase()
  const responses = aiResponses[language] || aiResponses.en

  if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('namaste') || lowerMsg.includes('నమస్కారం') || lowerMsg.includes('హలో')) {
    return responses.greeting[Math.floor(Math.random() * responses.greeting.length)]
  }
  if (lowerMsg.includes('crop') || lowerMsg.includes('kharif') || lowerMsg.includes('rabi') || lowerMsg.includes('sow') || lowerMsg.includes('పంట') || lowerMsg.includes('ఖరీఫ్') || lowerMsg.includes('రబీ')) {
    return responses.crops[Math.floor(Math.random() * responses.crops.length)]
  }
  if (lowerMsg.includes('weather') || lowerMsg.includes('rain') || lowerMsg.includes('temperature') || lowerMsg.includes('forecast') || lowerMsg.includes('వాతావరణం') || lowerMsg.includes('వర్షం')) {
    return responses.weather[Math.floor(Math.random() * responses.weather.length)]
  }
  if (lowerMsg.includes('price') || lowerMsg.includes('market') || lowerMsg.includes('mandi') || lowerMsg.includes('rate') || lowerMsg.includes('ధర') || lowerMsg.includes('మార్కెట్')) {
    return responses.prices[Math.floor(Math.random() * responses.prices.length)]
  }
  if (lowerMsg.includes('scheme') || lowerMsg.includes('yojana') || lowerMsg.includes('subsidy') || lowerMsg.includes('pm-') || lowerMsg.includes('పథకం') || lowerMsg.includes('సబ్సిడీ')) {
    return responses.schemes[Math.floor(Math.random() * responses.schemes.length)]
  }
  if (lowerMsg.includes('soil') || lowerMsg.includes('fertilizer') || lowerMsg.includes('nutrient') || lowerMsg.includes('ph') || lowerMsg.includes('నేల') || lowerMsg.includes('ఎరువు')) {
    return responses.soil[Math.floor(Math.random() * responses.soil.length)]
  }
  if (lowerMsg.includes('irrigation') || lowerMsg.includes('water') || lowerMsg.includes('drip') || lowerMsg.includes('సారవర్ధం') || lowerMsg.includes('నీరు')) {
    return responses.irrigation[Math.floor(Math.random() * responses.irrigation.length)]
  }
  if (lowerMsg.includes('pest') || lowerMsg.includes('disease') || lowerMsg.includes('insect') || lowerMsg.includes('తెగులు') || lowerMsg.includes('రోగం')) {
    return responses.pest[Math.floor(Math.random() * responses.pest.length)]
  }

  return responses.default[Math.floor(Math.random() * responses.default.length)]
}
