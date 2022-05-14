const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set, push } = require("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyDY_Gxv0uxODy1rshZO1rR1nIFmLOpdZVw",
  authDomain: "pma-final-project.firebaseapp.com",
  databaseURL: "https://pma-final-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pma-final-project",
  storageBucket: "pma-final-project.appspot.com",
  messagingSenderId: "223875731318",
  appId: "1:223875731318:web:2afd6926031d1b66887457"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const eventCategoriesEndpoint = "eventCategories";
const eventTypesEndpoint = "eventTypes";
// const eventsEndpoint = "events";
// const userDetailsEndpoint = "userDetails";
// const eventAttendeesEndpoint = "eventAttendees";

/* endpoint generált id-val */
function endPointWithId(endpoint, data) {
    const refEndpoint = ref(database, `${endpoint}`);
    const newRefEndpoint = push(refEndpoint);
    return set(newRefEndpoint, data);
}

// sima endpoint generált id nélkül
function endPointWithoutId(endpoint, data) {
    const refEndpoint = ref(database, `${endpoint}`);
    return set(refEndpoint, data);
}

endPointWithoutId(eventCategoriesEndpoint, {
        'business': 'Business and Professional',
        'charity': 'Charity',
        'community': 'Community or Culture',
        'family': 'Family',
        'education': 'Education',
        'fashion': 'Fashion or Beauty',
        'food-or-drink': 'Food or Drink',
        'health': 'Health',
        'music': 'Music',
        'religion': 'Religion',
        'science': 'Science and Technology',
        'holiday': 'Holiday',
        'sports': 'Sports',
        'travel': 'Travel',
        'other': 'Other'
}).then(() => console.log("eventCategories endpoint created"));

endPointWithoutId(eventTypesEndpoint, {
        'trip': 'Trip',
        'workshop': 'Workshop',
        'performance': 'Concer or Performance',
        'conference': 'Conference',
        'dinner': 'Dinner or Gala',
        'festival': 'Festival or Fair',
        'game': 'Game',
        'meeting': 'Meeting',
        'party': 'Party',
        'seminar': 'Seminar or Talk',
        'tournament': 'Tournament',
        'other': 'Other'
}).then(() => console.log("eventTypes endpoint created"));

