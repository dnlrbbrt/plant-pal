
// --- 1. CONFIGURATION ---

const ENCYCLOPEDIA_SEED_DATA = {
    'monstera_deliciosa': {
        key: 'monstera_deliciosa',
        name: 'Monstera Deliciosa (Swiss Cheese Plant)',
        icon: '🌿',
        frequencyDays: 10,
        mistingFrequencyDays: 4,
        lightPreference: 'bright_indirect',
        soilPreference: 'Well-draining mix (Aroid/Orchid Bark)',
        description: 'Famous for its unique fenestrated leaves. A fast-growing tropical plant that loves bright, indirect light. Allow the top two inches of soil to dry out between waterings.',
        commonProblems: ['Root rot from overwatering', 'Yellowing leaves from lack of light or nutrients']
    },
    'epipremnum_aureum': {
        key: 'epipremnum_aureum',
        name: 'Epipremnum Aureum (Golden Pothos)',
        icon: '🍃',
        frequencyDays: 14,
        lightPreference: 'low_light',
        soilPreference: 'Standard potting mix',
        description: 'An easy-care trailing vine perfect for beginners. Tolerates low light but thrives in medium, indirect light. If leaves start curling, it is very thirsty!',
        commonProblems: ['Brown leaf tips from too much fertilizer', 'Pale leaves in low light']
    },
    'sansevieria_trifasciata': {
        key: 'sansevieria_trifasciata',
        name: 'Sansevieria Trifasciata (Snake Plant)',
        icon: '🐍',
        frequencyDays: 20,
        lightPreference: 'low_light',
        soilPreference: 'Well-draining, slightly sandy mix',
        description: 'Extremely resilient and highly tolerant of neglect. Water sparingly, especially in winter. It can handle dark corners but prefers bright light for best growth.',
        commonProblems: ['Mushy leaves (fatal overwatering)', 'Doesn\'t grow much (too little light)']
    },
    'nephrolepis_exaltata': {
        key: 'nephrolepis_exaltata',
        name: 'Nephrolepis Exaltata (Boston Fern)',
        icon: '🌱',
        frequencyDays: 5,
        mistingFrequencyDays: 2,
        lightPreference: 'low_light',
        soilPreference: 'Moisture-retentive, peaty mix',
        description: 'A classic indoor fern that loves high humidity and consistent moisture. Never let the soil dry out completely, and mist frequently. Keep out of direct sun.',
        commonProblems: ['Dry, crispy fronds (low humidity)', 'Scale insects']
    },
    'ficus_lyrata': {
        key: 'ficus_lyrata',
        name: 'Ficus Lyrata (Fiddle Leaf Fig)',
        icon: '🌳',
        frequencyDays: 12,
        lightPreference: 'bright_indirect',
        soilPreference: 'Rich, fast-draining potting soil',
        description: 'A popular but fussy tree known for its violin-shaped leaves. Needs consistent bright light. Avoid moving it often, as it reacts poorly to changes.',
        commonProblems: ['Brown spots (overwatering)', 'Leaf drop (drafts or movement)']
    },
    'phalaenopsis_orchid': {
        key: 'phalaenopsis_orchid',
        name: 'Phalaenopsis (Moth Orchid)',
        icon: '🌸',
        frequencyDays: 9,
        mistingFrequencyDays: 3,
        lightPreference: 'medium_light',
        soilPreference: 'Orchid bark or sphagnum moss',
        description: 'The most common houseplant orchid. Water by soaking the entire pot when the roots turn silvery-green. Requires high humidity and air circulation.',
        commonProblems: ['Wrinkled leaves (underwatering)', 'Fungal infections from stale water']
    },
    'chlorophytum_comosum': {
        key: 'chlorophytum_comosum',
        name: 'Chlorophytum Comosum (Spider Plant)',
        icon: '🕷️',
        frequencyDays: 7,
        lightPreference: 'medium_light',
        soilPreference: 'Standard potting mix',
        description: 'An easy, adaptable plant famous for producing "spiderettes." Keep the soil slightly moist. The plant is non-toxic and excellent for beginners.',
        commonProblems: ['Brown leaf tips (tap water mineral buildup)', 'Poor growth in deep shade']
    },
    'echeveria_succulent': {
        key: 'echeveria_succulent',
        name: 'Echeveria (Rosette Succulent)',
        icon: '🌵',
        frequencyDays: 21,
        lightPreference: 'direct_sun',
        soilPreference: 'Cactus/Succulent soil (gritty)',
        description: 'A desert plant that stores water in its leaves. Requires maximum light and should be watered thoroughly only when the soil is completely dry. Less water in winter.',
        commonProblems: ['Rotting (overwatering)', 'Stretching/etiolation (too little light)']
    }
};

// Personality-based notification messages
const PERSONALITY_MESSAGES = {
    sweet: {
        thirsty: [
            "Hi friend! 💕 I'm a little thirsty. Could you spare some water when you get a chance? Thank you! 🌸",
            "Excuse me, dear gardener... I hate to bother you, but I could really use a drink! 💧 Pretty please? 🥺",
            "Hello! 🌷 My soil is getting quite dry. Would you mind watering me? I'd be so grateful! ✨"
        ],
        fertilizer: "It's growing season and I'm feeling a bit hungry! 🌱 Could I have some plant food please? You're the best! 💚",
        misting: "My leaves are feeling a tiny bit dry! 💦 A gentle mist would make me so happy! Thank you for taking such good care of me! 🌿",
        light_too_much: "Oh my! It's quite bright here! 🌞 Would it be okay if I moved to a shadier spot? I don't want to get sunburnt! 💕",
        light_too_little: "I'm having trouble seeing the light here... 🥺 Could I please move somewhere brighter? I promise I'll grow big and strong! 🌱"
    },
    sassy: {
        thirsty: [
            "HELLO?! I'm PARCHED over here! 💅 This is a CRISIS! Water me immediately or I'm calling plant protective services! 🚨",
            "Ummm EXCUSE ME?! Did you forget about me?! 😤 I need water like, YESTERDAY! My soil is drier than your humor! 💧",
            "Oh WOW, so we're just gonna let me DIE of thirst?! 🙄 Iconic. Truly iconic. WATER. NOW. 👑"
        ],
        fertilizer: "I'm STARVING and you're out here living your best life?! 😤 Feed me! I didn't sign up to be a STARVING ARTIST! 🍌",
        misting: "My leaves are CRUSTY! This is UNACCEPTABLE! 💦 Mist me RIGHT NOW before I file a complaint! I deserve LUXURY! ✨",
        light_too_much: "Are you TRYING to roast me?! 🔥 It's like the SAHARA DESERT in here! Move me before I turn into a crisp! 😤",
        light_too_little: "It's PITCH BLACK in here! Am I a MUSHROOM?! 🍄 I need LIGHT to do my photosynthesis thing! Get me to a window! 💡"
    },
    chill: {
        thirsty: [
            "Hey dude... no pressure, but like... water would be pretty cool right about now. 🌊 Namaste. ✌️",
            "Yo... not to harsh your vibe or anything, but I'm kinda thirsty, man. 💧 When you get a sec. No rush. 😎",
            "Hey friend... just vibing here... but some H2O would be rad. 🌿 Peace and love. ☮️"
        ],
        fertilizer: "Hey man, I'm feeling a bit low on nutrients, you know? 🌱 Some fertilizer would be totally groovy. No stress though. 🧘",
        misting: "Dude, my leaves are feeling a bit parched. 💦 A little mist would be super chill. Thanks, bro. ✌️",
        light_too_much: "Whoa, it's getting pretty intense here, light-wise. 🌞 Maybe we could find a more mellow spot? All good vibes. 😎",
        light_too_little: "Hey, so like... it's pretty dark here. 🌙 I'm all about that photosynthesis life. Maybe somewhere brighter? Peace. ✌️"
    },
    nerdy: {
        thirsty: [
            "ALERT: Soil moisture levels have reached critical threshold (< 20%). 🔬 H₂O supplementation required to maintain optimal photosynthetic efficiency. 💧",
            "WARNING: Xylem water potential approaching permanent wilting point. 📊 Immediate irrigation recommended to prevent cellular damage. 🌡️",
            "NOTICE: Stomatal conductance decreasing. 🧪 Water deficit detected. Recommend 250ml H₂O application within 24 hours. 💦"
        ],
        fertilizer: "ANALYSIS: Nitrogen, Phosphorus, and Potassium levels suboptimal. 🧬 NPK fertilizer application will enhance vegetative growth and chlorophyll production. 🌱",
        misting: "DATA: Relative humidity below optimal range (40-60%). 💨 Foliar misting will increase transpiration efficiency and prevent desiccation. 💦",
        light_too_much: "CAUTION: Photosynthetically Active Radiation (PAR) exceeds tolerance threshold. ☀️ Chlorophyll degradation imminent. Relocation advised. 🔬",
        light_too_little: "ERROR: Insufficient photon flux density detected. 💡 Current light levels inadequate for Calvin cycle operation. Require 200+ μmol/m²/s. 📈"
    },
    poetic: {
        thirsty: [
            "My leaves doth wilt, my soul grows faint... 🥀 A drink of water, dear gardener, is all I want. Quench my thirst, restore my bloom! 💧",
            "Like a traveler lost in desert sands, I yearn for water's sweet embrace. 🏜️ Grant me but a sip, and watch me dance with grace! 💃",
            "In this pot I sit and dream of rain... 🌧️ Of droplets falling, easing all my pain. Water me, and I shall sing again! 🎵"
        ],
        fertilizer: "The growing season calls to me with whispered song... 🌱 Feed my roots, make me strong! Let nutrients flow, help me grow! 🌿",
        misting: "My leaves, like velvet, cry for morning dew... 💦 A gentle mist, a tender kiss from you. Spray me softly, make me new! ✨",
        light_too_much: "The sun, though bright and warm and fair... ☀️ Burns too fierce for me to bear! To shade, to shade, oh take me there! 🌳",
        light_too_little: "In darkness deep, I cannot see... 🌑 I need the light to set me free! To windows bright, oh carry me! 🪟"
    }
};

const pestDatabase = {
    'spider_mites': { name: 'Spider Mites', treatment: 'Ick! Increase humidity and wipe my leaves with neem oil.' },
    'mealybugs': { name: 'Mealybugs', treatment: 'Gross! Dab them with rubbing alcohol on a cotton swab.' },
    'fungus_gnats': { name: 'Fungus Gnats', treatment: 'Annoying! Let my soil dry out completely and use sticky traps.' },
    'scale': { name: 'Scale Insects', treatment: 'They are stuck to me! Scrape them off and treat with horticultural oil.' }
};

// Supabase Configuration
const supabaseUrl = 'https://hbbwkdaojhjyjbzvwgel.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiYndrZGFvamhqeWpienZ3Z2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNTM3ODgsImV4cCI6MjA4MzkyOTc4OH0.n_Ho4p3KWe5GBuCOpP4qkPl4XgXqGiNqL4_CUQJhzg8';
const supabase = window.supabase ? window.supabase.createClient(supabaseUrl, supabaseKey) : null;

// Global variables for State
let userId;
let userPlants = [];
let publicPlantLibrary = [];
let tempAiPlantData = {};
let currentJournalPlantId = null;
let currentDiagnosisPlantId = null;
let currentPestPlantId = null;
let currentFilter = 'all';
let currentSort = 'name_asc';

// UI Elements
const loadingEl = document.getElementById('loading');
const appContentEl = document.getElementById('app-content');
const plantListEl = document.getElementById('plant-list');
const addPlantForm = document.getElementById('add-plant-form');
const plantTypeSelect = document.getElementById('plant-type');
const plantNicknameInput = document.getElementById('plant-nickname');
const plantPersonalitySelect = document.getElementById('plant-personality');
const plantLocationSelect = document.getElementById('plant-location');
const potSizeSelect = document.getElementById('pot-size');
const potMaterialSelect = document.getElementById('pot-material');
const noPlantsMessage = document.getElementById('no-plants-message');
const userIdDisplay = document.getElementById('user-id-display');

// Environment Inputs
const envHumiditySelect = document.getElementById('env-humidity');
const envTempSelect = document.getElementById('env-temp');

// AI ID UI Elements
const imageUploader = document.getElementById('image-uploader');
const imagePreview = document.getElementById('image-preview');
const aiLoading = document.getElementById('ai-loading');
const aiError = document.getElementById('ai-error');
const aiResultModal = document.getElementById('ai-result-modal');
const aiModalContent = document.getElementById('ai-modal-content');
const aiPlantName = document.getElementById('ai-plant-name');
const aiLightPref = document.getElementById('ai-light-pref');
const aiSoilPref = document.getElementById('ai-soil-pref');
const aiWaterFreq = document.getElementById('ai-water-freq');
const aiPlantNickname = document.getElementById('ai-plant-nickname');
const aiModalCancel = document.getElementById('ai-modal-cancel');
const aiModalAdd = document.getElementById('ai-modal-add');

// Filter/Sort UI
const filterPlantsSelect = document.getElementById('filter-plants');
const sortPlantsSelect = document.getElementById('sort-plants');

// Journal Modal UI
const journalModal = document.getElementById('journal-modal');
const journalModalContent = document.getElementById('journal-modal-content');
const journalModalClose = document.getElementById('journal-modal-close');
const journalPlantName = document.getElementById('journal-plant-name');
const journalNoteInput = document.getElementById('journal-note-input');
const journalAddNote = document.getElementById('journal-add-note');
const journalLogRepot = document.getElementById('journal-log-repot');
const journalLogRotate = document.getElementById('journal-log-rotate');
const journalHistoryList = document.getElementById('journal-history-list');

// Diagnosis Modal UI
const diagnosisModal = document.getElementById('diagnosis-modal');
const diagnosisModalContent = document.getElementById('diagnosis-modal-content');
const diagnosisModalClose = document.getElementById('diagnosis-modal-close');
const diagnosisPlantName = document.getElementById('diagnosis-plant-name');
const diagnosisImageUploader = document.getElementById('diagnosis-image-uploader');
const diagnosisLoading = document.getElementById('diagnosis-loading');
const diagnosisImagePreview = document.getElementById('diagnosis-image-preview');
const diagnosisError = document.getElementById('diagnosis-error');
const diagnosisResult = document.getElementById('diagnosis-result');
const diagnosisProblem = document.getElementById('diagnosis-problem');
const diagnosisRemediation = document.getElementById('diagnosis-remediation');

// Pest Modal UI
const pestModal = document.getElementById('pest-modal');
const pestModalContent = document.getElementById('pest-modal-content');
const pestModalClose = document.getElementById('pest-modal-close');
const pestPlantName = document.getElementById('pest-plant-name');
const pestImageUploader = document.getElementById('pest-image-uploader');
const pestLoading = document.getElementById('pest-loading');
const pestImagePreview = document.getElementById('pest-image-preview');
const pestResult = document.getElementById('pest-result');
const pestNameDisplay = document.getElementById('pest-name');
const pestTreatmentDisplay = document.getElementById('pest-treatment');

// Encyclopedia UI
const viewEncyclopediaBtn = document.getElementById('view-encyclopedia-btn');
const encyclopediaModal = document.getElementById('encyclopedia-modal');
const encyclopediaModalContent = document.getElementById('encyclopedia-modal-content');
const encyclopediaModalClose = document.getElementById('encyclopedia-modal-close');
const encyclopediaList = document.getElementById('encyclopedia-list');
const encyclopediaSearch = document.getElementById('encyclopedia-search');


// --- 2. HELPER FUNCTIONS ---

function formatDate(isoString) {
    if (!isoString) return 'Never';
    return new Date(isoString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}

function formatShortDate(isoString) {
    if (!isoString) return 'Never';
    return new Date(isoString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });
}

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function getRandomPhrase(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function formatLocation(key) {
    if (!key) return 'Unknown';
    key = key.toLowerCase();
    if (key.includes('direct')) return '☀️ Direct Sun';
    if (key.includes('bright_indirect') || key.includes('bright indirect')) return '🌤️ Bright Indirect';
    if (key.includes('medium')) return '⛅ Medium Light';
    if (key.includes('low')) return '☁️ Low Light';
    return key;
}

function formatPotSize(key) {
    switch (key) {
        case 'small': return 'S (2-4" pot)';
        case 'medium': return 'M (5-8" pot)';
        case 'large': return 'L (9"+ pot)';
        default: return 'Unknown';
    }
}
function formatPotMaterial(key) {
    switch (key) {
        case 'terracotta': return '🏺 Terracotta';
        case 'ceramic': return '🧊 Ceramic/Glazed';
        case 'plastic': return ' plastica';
        default: return 'Unknown';
    }
}

function getPersonalityMessage(plant, messageType) {
    const personality = plant.personality || 'sweet';
    const messages = PERSONALITY_MESSAGES[personality];

    if (!messages) return "I need some care! 🌱";

    const message = messages[messageType];

    // If it's an array (like thirsty messages), pick a random one
    if (Array.isArray(message)) {
        return message[Math.floor(Math.random() * message.length)];
    }

    return message || "I need some care! 🌱";
}

function showCareAnimation(buttonElement, emoji, count = 3) {
    const rect = buttonElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const emojiEl = document.createElement('div');
            emojiEl.className = i === 0 ? 'care-emoji' : 'sparkle-emoji';
            emojiEl.textContent = emoji;
            emojiEl.style.left = `${centerX + (Math.random() - 0.5) * 40}px`;
            emojiEl.style.top = `${centerY}px`;
            document.body.appendChild(emojiEl);

            setTimeout(() => emojiEl.remove(), 1000);
        }, i * 100);
    }
}

function isGrowingSeason() {
    const month = new Date().getMonth(); // 0 (Jan) to 11 (Dec)
    // April (3) through September (8)
    return month >= 3 && month <= 8;
}

function calculateWateringFrequency(plant) {
    let days = plant.frequency_days || plant.frequencyDays || 10; // Handle snake_case from DB

    // 1. Pot Modifications
    const potMaterial = plant.pot_material || plant.potMaterial;
    const potSize = plant.pot_size || plant.potSize;

    if (potMaterial === 'terracotta') days -= 2;
    if (potMaterial === 'plastic') days += 2;

    if (potSize === 'large') days += 3;
    if (potSize === 'small') days -= 1;

    // 2. Environment Modifications
    const humidity = plant.environment?.humidity || 'avg';
    const temp = plant.environment?.temp || 'avg';

    if (humidity === 'low') days -= 2;
    if (humidity === 'high') days += 2;

    if (temp === 'warm') days -= 1;
    if (temp === 'cool') days += 2;

    // 3. Season Logic
    if (!isGrowingSeason()) {
        days += 7;
    }

    return Math.max(2, days);
}

function getNextWateringDate(plant) {
    const lastWateredDate = new Date(plant.last_watered || plant.lastWatered);
    const freq = calculateWateringFrequency(plant);
    return addDays(lastWateredDate, freq);
}

function needsFertilizer(plant) {
    if (!isGrowingSeason()) return false;
    const lastFertilizedDate = new Date(plant.last_fertilized || plant.lastFertilized);
    const nextFertilizerDate = addDays(lastFertilizedDate, 30);
    return new Date() > nextFertilizerDate;
}

function needsHealthCheck(plant) {
    const lastHealthCheckDate = new Date(plant.last_health_check || plant.lastHealthCheck);
    const nextHealthCheckDate = addDays(lastHealthCheckDate, 14);
    return new Date() > nextHealthCheckDate;
}

function needsMisting(plant) {
    const mistingFreq = plant.misting_frequency_days || plant.mistingFrequencyDays;
    if (!mistingFreq) return false; // Plant doesn't need misting

    const lastMisted = plant.last_misted || plant.lastMisted;
    if (!lastMisted) return true; // Never misted before

    const lastMistedDate = new Date(lastMisted);
    const nextMistingDate = addDays(lastMistedDate, mistingFreq);
    return new Date() > nextMistingDate;
}

function getNextMistingDate(plant) {
    const mistingFreq = plant.misting_frequency_days || plant.mistingFrequencyDays;
    if (!mistingFreq) return null;

    const lastMisted = plant.last_misted || plant.lastMisted;
    if (!lastMisted) return new Date(); // Needs misting now

    const lastMistedDate = new Date(lastMisted);
    return addDays(lastMistedDate, mistingFreq);
}


// --- 3. CORE APP LOGIC & RENDERING ---

function renderPlants() {
    plantListEl.innerHTML = '';
    let plantsToRender = [...userPlants];

    // 1. FILTERING
    const now = new Date();
    if (currentFilter === 'needs_water') {
        plantsToRender = plantsToRender.filter(p => now > getNextWateringDate(p));
    } else if (currentFilter === 'needs_fertilizer') {
        plantsToRender = plantsToRender.filter(p => needsFertilizer(p));
    } else if (currentFilter === 'needs_health_check') {
        plantsToRender = plantsToRender.filter(p => needsHealthCheck(p));
    }

    // 2. SORTING
    if (currentSort === 'name_asc') {
        plantsToRender.sort((a, b) => a.nickname.localeCompare(b.nickname));
    } else if (currentSort === 'next_watering') {
        plantsToRender.sort((a, b) => getNextWateringDate(a) - getNextWateringDate(b));
    }

    if (plantsToRender.length === 0) {
        noPlantsMessage.classList.remove('hidden');
        noPlantsMessage.textContent = (currentFilter !== 'all')
            ? `🎉 No plants match your filter! 🎉`
            : `🌱 Start by adding your first plant friend above! (Or wait for DB load...)`;
        return;
    }

    noPlantsMessage.classList.add('hidden');

    plantsToRender.forEach(plant => {
        // Normalize snake_case from DB to camelCase for UI if needed or just access snake_case
        const p = {
            id: plant.id,
            nickname: plant.nickname,
            icon: plant.icon,
            lightPreference: plant.light_preference,
            currentLocation: plant.current_location,
            potSize: plant.pot_size,
            potMaterial: plant.pot_material,
            environment: plant.environment,
            lastWatered: plant.last_watered,
            lastFertilized: plant.last_fertilized,
            lastHealthCheck: plant.last_health_check,
            frequencyDays: plant.frequency_days
            // ... others
        };

        const card = document.createElement('div');
        card.className = 'bg-white p-5 rounded-3xl shadow-lg border border-gray-100 transition-all hover:shadow-xl transform hover:-translate-y-1 flex flex-col scale-up';

        const nextWateringDate = getNextWateringDate(plant);
        const freq = calculateWateringFrequency(plant);
        const isThirsty = now > nextWateringDate;

        let statusText = `Next Drink: ${formatDate(nextWateringDate.toISOString())}`;
        let statusColor = 'text-gray-500';
        if (isThirsty) {
            statusText = '🚨 Thirsty! Water me now! 🚨';
            statusColor = 'text-red-500 font-bold animate-pulse';
        }

        const plantIcon = p.icon || '🌿';
        const preferredLight = p.lightPreference;
        const currentLight = p.currentLocation;

        const env = p.environment || { humidity: 'avg', temp: 'avg' };
        const envString = `${env.humidity === 'high' ? '💧' : env.humidity === 'low' ? '🏜️' : '☁️'} / ${env.temp === 'warm' ? '🔥' : env.temp === 'cool' ? '❄️' : '🌡️'}`;

        card.innerHTML = `
            <div>
                <div class="flex justify-between items-start mb-3">
                    <div>
                        <span class="text-3xl mr-2">${plantIcon}</span>
                        <h3 class="text-xl font-bold text-green-700 inline-block">${p.nickname}</h3>
                    </div>
                    <button data-id="${p.id}" class="delete-plant text-gray-300 hover:text-red-500 transition-colors text-2xl font-light" title="Remove Plant">&times;</button>
                </div>
                <p class="text-xs font-semibold text-pink-400 mb-2 uppercase tracking-wide">Care Plan: Every ${freq} Days</p>
                
                <div class="text-xs text-gray-700 space-y-1 mb-4 p-3 bg-blue-50 rounded-2xl border border-blue-200">
                     <div class="grid grid-cols-2 gap-2">
                        <p>💡 Light: <span class="font-semibold text-blue-700">${formatLocation(preferredLight)}</span></p>
                        <p>🏡 Env: <span class="font-semibold text-blue-700">${envString}</span></p>
                        <p>🏺 Pot: <span class="font-semibold text-blue-700">${formatPotSize(p.potSize)}</span></p>
                        <p>🧱 Mat: <span class="font-semibold text-blue-700">${formatPotMaterial(p.potMaterial)}</span></p>
                     </div>
                </div>
           
                
                <div class="space-y-2 mb-5 border-t border-b border-gray-100 py-3">
                    <p class="text-sm text-gray-600">Last Drink: <span class="font-medium">${formatShortDate(p.lastWatered)}</span></p>
                    <p class="text-base ${statusColor} mt-2 font-semibold text-center">${statusText}</p>
                </div>
            </div>
            
            <!-- Button Group -->
            <div class="space-y-2 mt-auto">
                <button data-id="${p.id}" class="water-plant w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-2xl transition duration-300 shadow-md">
                    Poured a drink! 💙
                </button>
                <div class="grid grid-cols-3 gap-1">
                    <button data-id="${p.id}" class="fertilize-plant bg-yellow-100 hover:bg-yellow-200 text-yellow-800 text-xs font-semibold py-2 px-1 rounded-xl transition duration-300">
                        🍌 Feed
                    </button>
                    <button data-id="${p.id}" class="health-check-plant bg-purple-100 hover:bg-purple-200 text-purple-800 text-xs font-semibold py-2 px-1 rounded-xl transition duration-300">
                        🩺 Checkup
                    </button>
                    <button data-id="${p.id}" data-name="${p.nickname}" class="pest-check-plant bg-red-100 hover:bg-red-200 text-red-800 text-xs font-semibold py-2 px-1 rounded-xl transition duration-300">
                        🕷️ Pests?
                    </button>
                </div>
                ${(plant.misting_frequency_days || plant.mistingFrequencyDays) ? `
                <button data-id="${p.id}" class="mist-plant w-full bg-cyan-100 hover:bg-cyan-200 text-cyan-800 text-xs font-semibold py-2 px-3 rounded-2xl transition duration-300">
                    💦 Mist Me!
                </button>
                ` : ''}
                <div class="grid grid-cols-2 gap-2">
                    <button data-id="${p.id}" data-name="${p.nickname}" class="view-journal-btn w-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-semibold py-2 px-3 rounded-2xl transition duration-300">
                        📖 Journal
                    </button>
                    <button data-id="${p.id}" data-name="${p.nickname}" class="get-diagnosis-btn w-full bg-pink-100 hover:bg-pink-200 text-pink-800 text-xs font-semibold py-2 px-3 rounded-2xl transition duration-300">
                        🚑 Diagnose
                    </button>
                </div>
            </div>
        `;

        plantListEl.appendChild(card);
    });

    // Re-Add event listeners
    document.querySelectorAll('.water-plant').forEach(button => {
        button.addEventListener('click', (e) => {
            showCareAnimation(e.target, '💙', 4);
            waterPlant(button.dataset.id);
        });
    });
    document.querySelectorAll('.delete-plant').forEach(button => {
        button.addEventListener('click', () => deletePlant(button.dataset.id));
    });
    document.querySelectorAll('.fertilize-plant').forEach(button => {
        button.addEventListener('click', (e) => {
            showCareAnimation(e.target, '🌟', 5);
            fertilizePlant(button.dataset.id);
        });
    });
    document.querySelectorAll('.health-check-plant').forEach(button => {
        button.addEventListener('click', (e) => {
            showCareAnimation(e.target, '💚', 3);
            checkPlantHealth(button.dataset.id);
        });
    });
    document.querySelectorAll('.view-journal-btn').forEach(button => {
        button.addEventListener('click', () => showJournalModal(button.dataset.id, button.dataset.name));
    });
    document.querySelectorAll('.get-diagnosis-btn').forEach(button => {
        button.addEventListener('click', () => showDiagnosisModal(button.dataset.id, button.dataset.name));
    });
    document.querySelectorAll('.pest-check-plant').forEach(button => {
        button.addEventListener('click', () => showPestModal(button.dataset.id, button.dataset.name));
    });
    document.querySelectorAll('.mist-plant').forEach(button => {
        button.addEventListener('click', (e) => {
            showCareAnimation(e.target, '💦', 4);
            mistPlant(button.dataset.id);
        });
    });
}

function populatePlantOptions() {
    plantTypeSelect.innerHTML = '';
    // Sort by Name
    const sortedLibrary = [...publicPlantLibrary].sort((a, b) => a.name.localeCompare(b.name));

    sortedLibrary.forEach(plant => {
        const option = document.createElement('option');
        option.value = plant.key;
        option.textContent = `${plant.icon} ${plant.name}`;
        plantTypeSelect.appendChild(option);
    });
}

function getPlantDataByKey(key) {
    return publicPlantLibrary.find(p => p.key === key);
}

// --- 4. SUPABASE STORAGE (Replaces LocalStorage) ---

async function fetchPlants() {
    try {
        if (!supabase) {
            console.error("Supabase not initialized");
            userPlants = [];
            renderPlants();
            return;
        }
        const { data, error } = await supabase
            .from('plants')
            .select('*');

        if (error) {
            console.error("Error fetching plants:", error);
            console.log("Continuing with empty plant list...");
            userPlants = [];
        } else {
            userPlants = data || [];
        }
        renderPlants();
    } catch (err) {
        console.error("Fatal error in fetchPlants:", err);
        userPlants = [];
        renderPlants();
    }
}

async function fetchAndSeedPlantLibrary() {
    // Static seed data for now
    publicPlantLibrary = Object.values(ENCYCLOPEDIA_SEED_DATA);
    populatePlantOptions();
}

async function logJournalEntry(plantId, eventType, data = {}) {
    const plant = userPlants.find(p => p.id === plantId);
    if (!plant) return;

    const newEntry = {
        timestamp: new Date().toISOString(),
        event: eventType,
        ...data
    };

    // Update local state first (optimistic UI)
    if (!plant.journal) plant.journal = [];
    plant.journal.push(newEntry);

    // Supabase Update
    // We just update the whole 'journal' column jsonb array
    const { error } = await supabase
        .from('plants')
        .update({ journal: plant.journal })
        .eq('id', plantId);

    if (error) console.error("Error logging journal:", error);
}

async function handleAddPlant(e) {
    e.preventDefault();
    const plantTypeKey = plantTypeSelect.value;
    const nickname = plantNicknameInput.value;
    const personality = plantPersonalitySelect.value;
    // ... (grab other values) ...
    const currentLocation = plantLocationSelect.value;
    const potSize = potSizeSelect.value;
    const potMaterial = potMaterialSelect.value;
    const humidity = envHumiditySelect.value;
    const temp = envTempSelect.value;


    if (!plantTypeKey || !nickname) return;

    const plantInfo = getPlantDataByKey(plantTypeKey);
    if (!plantInfo) return;

    const nowIso = new Date().toISOString();
    const newId = Date.now().toString(); // Use timestamp as text ID for now

    const newPlantPayload = {
        id: newId,
        nickname: nickname,
        personality: personality || 'sweet',
        plant_type_key: plantTypeKey,
        plant_type_name: plantInfo.name,
        frequency_days: plantInfo.frequencyDays, // Column name snake_case
        icon: plantInfo.icon,
        light_preference: plantInfo.lightPreference,
        soil_preference: plantInfo.soilPreference,
        last_watered: nowIso,
        current_location: currentLocation,
        pot_size: potSize,
        pot_material: potMaterial,
        environment: { humidity, temp },
        last_health_check: nowIso,
        last_fertilized: nowIso,
        misting_frequency_days: plantInfo.mistingFrequencyDays || null,
        last_misted: plantInfo.mistingFrequencyDays ? nowIso : null,
        misting_notification_sent: false,
        journal: [{ timestamp: nowIso, event: 'Adopted' }],
        notification_sent: false,
        light_notification_sent: false,
        health_notification_sent: false,
        fertilizer_notification_sent: false
    };

    // Optimistic Update
    userPlants.push(newPlantPayload); // Note: local userPlants now has snake_case keys!
    renderPlants();
    plantNicknameInput.value = '';

    const { error } = await supabase
        .from('plants')
        .insert([newPlantPayload]);

    if (error) {
        console.error("Error adding plant:", error);
        alert("Error saving to cloud!");
    }
}

async function waterPlant(plantId) {
    const plant = userPlants.find(p => p.id === plantId);
    if (!plant) return;

    const nowIso = new Date().toISOString();
    plant.last_watered = nowIso;
    plant.notification_sent = false;

    // Optimistic Render
    renderPlants();

    // Log journal (calls DB update for journal)
    await logJournalEntry(plantId, 'Watered');

    // DB Update for columns
    const { error } = await supabase
        .from('plants')
        .update({
            last_watered: nowIso,
            notification_sent: false
        })
        .eq('id', plantId);

    if (error) console.error("Error watering plant:", error);
}

async function fertilizePlant(plantId) {
    const plant = userPlants.find(p => p.id === plantId);
    if (!plant) return;

    const nowIso = new Date().toISOString();
    plant.last_fertilized = nowIso;
    plant.fertilizer_notification_sent = false;

    renderPlants();
    await logJournalEntry(plantId, 'Fertilized');

    const { error } = await supabase
        .from('plants')
        .update({
            last_fertilized: nowIso,
            fertilizer_notification_sent: false
        })
        .eq('id', plantId);
}

async function checkPlantHealth(plantId) {
    const plant = userPlants.find(p => p.id === plantId);
    if (!plant) return;

    const nowIso = new Date().toISOString();
    plant.last_health_check = nowIso;
    plant.health_notification_sent = false;

    renderPlants();
    await logJournalEntry(plantId, 'Health Check');

    const { error } = await supabase
        .from('plants')
        .update({
            last_health_check: nowIso,
            health_notification_sent: false
        })
        .eq('id', plantId);
}

async function mistPlant(plantId) {
    const plant = userPlants.find(p => p.id === plantId);
    if (!plant) return;

    const nowIso = new Date().toISOString();
    plant.last_misted = nowIso;
    plant.misting_notification_sent = false;

    renderPlants();
    await logJournalEntry(plantId, 'Misted');

    const { error } = await supabase
        .from('plants')
        .update({
            last_misted: nowIso,
            misting_notification_sent: false
        })
        .eq('id', plantId);

    if (error) console.error("Error misting plant:", error);
}

async function deletePlant(plantId) {
    if (!confirm("Are you sure you want to remove this plant?")) return;

    // Optimistic
    userPlants = userPlants.filter(p => p.id !== plantId);
    renderPlants();

    const { error } = await supabase
        .from('plants')
        .delete()
        .eq('id', plantId);

    if (error) console.error("Error deleting plant:", error);
}


// --- 5. AI & MODAL LOGIC (MOCKED) ---

function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    aiError.classList.add('hidden');
    const reader = new FileReader();
    reader.onload = (event) => {
        imagePreview.src = event.target.result;
        imagePreview.classList.remove('hidden');
        resizeAndIdentify(event.target.result, 'identify');
    };
    reader.readAsDataURL(file);
}

async function identifyPlant(base64Data) {
    // MOCK IMPLEMENTATION
    setTimeout(() => {
        const keys = Object.keys(ENCYCLOPEDIA_SEED_DATA);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const mockData = ENCYCLOPEDIA_SEED_DATA[randomKey];

        tempAiPlantData = {
            plantName: mockData.name,
            plantTypeKey: mockData.key,
            frequencyDays: mockData.frequencyDays,
            lightPreference: mockData.lightPreference,
            soilPreference: mockData.soilPreference,
            icon: mockData.icon
        };

        aiLoading.classList.add('hidden');
        imageUploader.value = null;
        showAiResultModal(tempAiPlantData);
    }, 2000);
}

function showAiResultModal(data) {
    aiPlantName.textContent = data.plantName || "Unknown Plant";
    aiLightPref.textContent = formatLocation(data.lightPreference);
    aiSoilPref.textContent = data.soilPreference || "Standard mix";
    aiWaterFreq.textContent = `About every ${data.frequencyDays || 10} days`;
    aiPlantNickname.value = '';
    aiResultModal.classList.remove('hidden');
    setTimeout(() => {
        aiModalContent.classList.remove('scale-95', 'opacity-0');
    }, 10);
}

function hideAiResultModal() {
    aiModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        aiResultModal.classList.add('hidden');
        imagePreview.classList.add('hidden');
        imagePreview.src = '';
    }, 300);
}

async function handleAiPlantAdd() {
    const nickname = aiPlantNickname.value;
    if (!nickname || !tempAiPlantData) {
        aiPlantNickname.classList.add('border-red-500');
        return;
    }
    aiPlantNickname.classList.remove('border-red-500');

    const nowIso = new Date().toISOString();
    const newId = Date.now().toString();

    const newPlantPayload = {
        id: newId,
        nickname: nickname,
        plant_type_key: tempAiPlantData.plantTypeKey,
        plant_type_name: tempAiPlantData.plantName,
        frequency_days: tempAiPlantData.frequencyDays,
        icon: tempAiPlantData.icon,
        light_preference: tempAiPlantData.lightPreference,
        soil_preference: tempAiPlantData.soilPreference,
        last_watered: nowIso,
        current_location: plantLocationSelect.value, // from form default? or AI? Using form default
        pot_size: potSizeSelect.value,
        pot_material: potMaterialSelect.value,
        environment: { humidity: 'avg', temp: 'avg' },
        last_health_check: nowIso,
        last_fertilized: nowIso,
        misting_frequency_days: tempAiPlantData.mistingFrequencyDays || null,
        last_misted: tempAiPlantData.mistingFrequencyDays ? nowIso : null,
        misting_notification_sent: false,
        journal: [{ timestamp: nowIso, event: 'Adopted' }],
        notification_sent: false,
        light_notification_sent: false,
        health_notification_sent: false,
        fertilizer_notification_sent: false
    };

    userPlants.push(newPlantPayload);
    renderPlants();
    hideAiResultModal();
    tempAiPlantData = {};

    const { error } = await supabase
        .from('plants')
        .insert([newPlantPayload]);

    if (error) console.error("Error adding AI plant:", error);
}

// ... (resizeAndIdentify, Modal Logic same as before) ...

function resizeAndIdentify(dataUrl, mode) {
    if (mode === 'identify') {
        aiLoading.classList.remove('hidden');
        identifyPlant(null);
    } else if (mode === 'diagnose') {
        diagnosisLoading.classList.remove('hidden');
        getPlantDiagnosis(null);
    } else if (mode === 'pest') {
        pestLoading.classList.remove('hidden');
        identifyPest(null);
    }
}

function showJournalModal(plantId, plantName) {
    currentJournalPlantId = plantId;
    journalPlantName.textContent = plantName;
    journalNoteInput.value = '';

    const plant = userPlants.find(p => p.id === plantId);
    // Handle snake_case journal
    const journal = plant ? (plant.journal || []) : [];

    if (journal.length === 0) {
        journalHistoryList.innerHTML = '<p class="text-gray-500">No history yet.</p>';
    } else {
        journalHistoryList.innerHTML = [...journal].reverse().map(entry => {
            let entryHTML = `<p class="font-semibold text-gray-700">${entry.event}</p>`;
            if (entry.event === 'Note') {
                entryHTML += `<p class="text-gray-600 text-sm italic pl-2">"${entry.text}"</p>`;
            } else if (entry.event === 'Diagnosis') {
                entryHTML += `<p class="text-gray-600 text-sm italic pl-2">Problem: ${entry.problem}</p>`;
            } else if (entry.event === 'Pest Found') {
                entryHTML += `<p class="text-red-500 text-sm font-bold pl-2">Pest: ${entry.pest}</p>`;
            }
            return `
                <div class="border-b border-gray-200 pb-2">
                    <p class="text-xs text-gray-400 mb-1">${formatDate(entry.timestamp)}</p>
                    ${entryHTML}
                </div>
            `;
        }).join('');
    }

    journalModal.classList.remove('hidden');
    setTimeout(() => journalModalContent.classList.remove('scale-95', 'opacity-0'), 10);
}

function hideJournalModal() {
    journalModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => journalModal.classList.add('hidden'), 300);
}

async function handleAddJournalNote() {
    const text = journalNoteInput.value;
    if (!text || !currentJournalPlantId) return;
    await logJournalEntry(currentJournalPlantId, 'Note', { text: text });
    const plant = userPlants.find(p => p.id === currentJournalPlantId);
    showJournalModal(currentJournalPlantId, plant.nickname);
}

async function handleLogRepot() {
    if (!currentJournalPlantId) return;
    await logJournalEntry(currentJournalPlantId, 'Repotted');
    const plant = userPlants.find(p => p.id === currentJournalPlantId);
    showJournalModal(currentJournalPlantId, plant.nickname);
}

async function handleLogRotate() {
    if (!currentJournalPlantId) return;
    await logJournalEntry(currentJournalPlantId, 'Rotated');
    const plant = userPlants.find(p => p.id === currentJournalPlantId);
    showJournalModal(currentJournalPlantId, plant.nickname);
}


// Diagnosis & Pest Logic (Mocked calls don't need Supabase except Journal Logging)

function showDiagnosisModal(plantId, plantName) {
    currentDiagnosisPlantId = plantId;
    diagnosisPlantName.textContent = plantName;
    diagnosisImagePreview.classList.add('hidden');
    diagnosisImagePreview.src = '';
    diagnosisError.classList.add('hidden');
    diagnosisResult.classList.add('hidden');
    diagnosisImageUploader.value = null;
    diagnosisModal.classList.remove('hidden');
    setTimeout(() => diagnosisModalContent.classList.remove('scale-95', 'opacity-0'), 10);
}
function hideDiagnosisModal() {
    diagnosisModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => diagnosisModal.classList.add('hidden'), 300);
}
function handleDiagnosisUpload(e) { /* same */
    const file = e.target.files[0];
    if (!file) return;
    diagnosisError.classList.add('hidden');
    diagnosisResult.classList.add('hidden');
    const reader = new FileReader();
    reader.onload = (event) => {
        diagnosisImagePreview.src = event.target.result;
        diagnosisImagePreview.classList.remove('hidden');
        resizeAndIdentify(event.target.result, 'diagnose');
    };
    reader.readAsDataURL(file);
}

async function getPlantDiagnosis(base64Data) {
    setTimeout(async () => {
        const diagnosisData = {
            problem: "Mild Dehydration (Mock Diagnosis)",
            remediation: "The leaves look a bit droopy. Try giving it a thorough watering until water runs out the bottom, then let it drain."
        };
        diagnosisProblem.textContent = diagnosisData.problem;
        diagnosisRemediation.textContent = diagnosisData.remediation;
        diagnosisResult.classList.remove('hidden');

        await logJournalEntry(currentDiagnosisPlantId, 'Diagnosis', {
            problem: diagnosisData.problem,
            remediation: diagnosisData.remediation
        });

        diagnosisLoading.classList.add('hidden');
        diagnosisImageUploader.value = null;
    }, 2000);
}


function showPestModal(plantId, plantName) {
    currentPestPlantId = plantId;
    pestPlantName.textContent = plantName;
    pestImagePreview.classList.add('hidden');
    pestImagePreview.src = '';
    pestImageUploader.value = null;
    pestResult.classList.add('hidden');
    pestLoading.classList.add('hidden');
    pestModal.classList.remove('hidden');
    setTimeout(() => pestModalContent.classList.remove('scale-95', 'opacity-0'), 10);
}
function hidePestModal() {
    pestModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => pestModal.classList.add('hidden'), 300);
}
function handlePestUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    pestResult.classList.add('hidden');
    const reader = new FileReader();
    reader.onload = (event) => {
        pestImagePreview.src = event.target.result;
        pestImagePreview.classList.remove('hidden');
        resizeAndIdentify(event.target.result, 'pest');
    };
    reader.readAsDataURL(file);
}
async function identifyPest(base64Data) {
    setTimeout(async () => {
        const keys = Object.keys(pestDatabase);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const pestData = pestDatabase[randomKey];

        pestNameDisplay.textContent = pestData.name;
        pestTreatmentDisplay.textContent = pestData.treatment;

        pestResult.classList.remove('hidden');
        pestLoading.classList.add('hidden');

        await logJournalEntry(currentPestPlantId, 'Pest Found', { pest: pestData.name });
    }, 2000);
}


// --- 8. NOTIFICATION LOGIC ---
// Need to update to use snake_case properties

function sendNotification(plant, title, body) {
    if (Notification.permission !== 'granted') return;
    new Notification(title, {
        body: body,
        icon: plant.icon || '🌿'
    });
}

function requestNotificationPermission() {
    if (!('Notification' in window)) return;
    if (Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

async function checkHealthNeeds() {
    for (const plant of userPlants) {
        const preferredLight = plant.light_preference || plant.lightPreference;
        const currentLight = plant.current_location || plant.currentLocation;

        let lightProblem = null;
        if (preferredLight && currentLight) {
            if (preferredLight.includes('low') && currentLight.includes('direct')) {
                lightProblem = 'light_problem_too_much';
            } else if (preferredLight.includes('direct') && currentLight.includes('low')) {
                lightProblem = 'light_problem_too_little';
            }
        }

        if (lightProblem && !plant.light_notification_sent) {
            const messageType = lightProblem === 'light_problem_too_much' ? 'light_too_much' : 'light_too_little';
            const message = getPersonalityMessage(plant, messageType);
            sendNotification(plant, `${plant.nickname} says:`, message);

            plant.light_notification_sent = true;
            // DB Update
            supabase.from('plants').update({ light_notification_sent: true }).eq('id', plant.id).then();
        }

        if (needsFertilizer(plant) && !plant.fertilizer_notification_sent) {
            const message = getPersonalityMessage(plant, 'fertilizer');
            sendNotification(plant, `${plant.nickname} says:`, message);
            plant.fertilizer_notification_sent = true;
            supabase.from('plants').update({ fertilizer_notification_sent: true }).eq('id', plant.id).then();
        }

        if (needsMisting(plant) && !plant.misting_notification_sent) {
            const message = getPersonalityMessage(plant, 'misting');
            sendNotification(plant, `${plant.nickname} says:`, message);
            plant.misting_notification_sent = true;
            supabase.from('plants').update({ misting_notification_sent: true }).eq('id', plant.id).then();
        }
    }
}

async function checkWateringNeeds() {
    const now = new Date();
    for (const plant of userPlants) {
        const nextWateringDate = getNextWateringDate(plant);
        const isThirsty = now > nextWateringDate;

        if (isThirsty && !plant.notification_sent) {
            const message = getPersonalityMessage(plant, 'thirsty');
            sendNotification(plant, `${plant.nickname} says:`, message);
            plant.notification_sent = true;
            supabase.from('plants').update({ notification_sent: true }).eq('id', plant.id).then();
        }
    }
}

// --- 9. Encyclopedia (Same) ---

function showEncyclopediaModal() {
    renderEncyclopediaList(publicPlantLibrary);
    encyclopediaModal.classList.remove('hidden');
    setTimeout(() => encyclopediaModalContent.classList.remove('scale-95', 'opacity-0'), 10);
}
function hideEncyclopediaModal() {
    encyclopediaModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => encyclopediaModal.classList.add('hidden'), 300);
}

function renderEncyclopediaList(plants) {
    encyclopediaList.innerHTML = '';
    const searchTerm = encyclopediaSearch.value.toLowerCase();

    let filteredPlants = plants.filter(plant =>
        plant.name.toLowerCase().includes(searchTerm) ||
        plant.description.toLowerCase().includes(searchTerm) ||
        plant.soilPreference.toLowerCase().includes(searchTerm)
    ).sort((a, b) => a.name.localeCompare(b.name));

    if (filteredPlants.length === 0) {
        encyclopediaList.innerHTML = '<p class="text-center text-gray-500 p-8">No plants found matching your search. Try "succulent" or "low light".</p>';
        return;
    }

    filteredPlants.forEach(plant => {
        const card = document.createElement('div');
        card.className = 'bg-gray-50 p-4 rounded-2xl shadow-md border-l-4 border-blue-300 hover:bg-gray-100 transition duration-150';
        card.innerHTML = `
            <div class="flex items-center mb-2">
                <span class="text-3xl mr-3">${plant.icon}</span>
                <h3 class="text-xl font-bold text-blue-800">${plant.name}</h3>
            </div>
            <p class="text-sm text-gray-600 mb-3">${plant.description}</p>
            <div class="grid grid-cols-2 text-xs gap-2 border-t border-gray-200 pt-3">
                <p>💡 Light: <span class="font-semibold text-blue-700">${formatLocation(plant.lightPreference)}</span></p>
                <p>💧 Water Freq: <span class="font-semibold text-blue-700">Every ${plant.frequencyDays} days</span></p>
                <p>🪨 Soil: <span class="font-semibold text-blue-700">${plant.soilPreference}</span></p>
                <p>⚠️ Common Problems: <span class="font-semibold text-blue-700">${plant.commonProblems.join(', ')}</span></p>
            </div>
        `;
        encyclopediaList.appendChild(card);
    });
}


// --- 10. INITIALIZATION ---

async function initializeAppLogic() {
    try {
        userId = 'demo-user-supabase';
        userIdDisplay.textContent = userId;

        await fetchAndSeedPlantLibrary();
        await fetchPlants(); // Now calls Supabase

        // Static parts
        requestNotificationPermission();

        // Form listeners
        addPlantForm.addEventListener('submit', handleAddPlant);

        // AI ID Listeners
        imageUploader.addEventListener('change', handleImageUpload);
        aiModalCancel.addEventListener('click', hideAiResultModal);
        aiModalAdd.addEventListener('click', handleAiPlantAdd);

        // Filter/Sort Listeners
        filterPlantsSelect.addEventListener('change', (e) => {
            currentFilter = e.target.value;
            renderPlants();
        });
        sortPlantsSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderPlants();
        });

        // Journal Modal Listeners
        journalModalClose.addEventListener('click', hideJournalModal);
        journalAddNote.addEventListener('click', handleAddJournalNote);
        journalLogRepot.addEventListener('click', handleLogRepot);
        journalLogRotate.addEventListener('click', handleLogRotate);

        // Diagnosis Modal Listeners
        diagnosisModalClose.addEventListener('click', hideDiagnosisModal);
        diagnosisImageUploader.addEventListener('change', handleDiagnosisUpload);

        // Pest Modal Listeners
        pestModalClose.addEventListener('click', hidePestModal);
        pestImageUploader.addEventListener('change', handlePestUpload);

        // Encyclopedia Listeners
        viewEncyclopediaBtn.addEventListener('click', showEncyclopediaModal);
        encyclopediaModalClose.addEventListener('click', hideEncyclopediaModal);
        encyclopediaSearch.addEventListener('input', () => renderEncyclopediaList(publicPlantLibrary));

        // Start background checkers
        setInterval(checkWateringNeeds, 30000);
        setInterval(checkHealthNeeds, 300000);

        console.log('Plant Pal initialized successfully!');
    } catch (err) {
        console.error('Error during initialization:', err);
    } finally {
        // ALWAYS hide loading and show app, even if there were errors
        loadingEl.classList.add('hidden');
        appContentEl.classList.remove('hidden');
    }
}

// Run the app
console.log('App.js loaded, initializing...');
initializeAppLogic();
