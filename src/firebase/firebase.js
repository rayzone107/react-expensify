import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.FiREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIRBEASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { database as default, googleAuthProvider };

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });


// database.ref('expenses').push({
//     description: "Water",
//     note: '',
//     amount: 7624,
//     createdAt: 2367632756235
// });

// database.ref('notes/-MVVtqCtedaTZYEZPVGf').remove();

// database.ref('notes').push({
//     title: 'Test 3',
//     body: "Note 3"
// });

// const firebaseNotes = {
//     notes: {
//         djbdahjgadg: {
//             body: "Test 1",
//             title: "Note 1"
//         },
//         hsdgubdgjsdjkg: {
//             body: "Test 2",
//             title: "Note 2"
//         }
//     }
// }

// const notes = [{
//     id: '12',
//     body: "Test 1",
//     title: "Note 1"
// }, {
//     id: '162',
//     body: "Test 2",
//     title: "Note 2"
// }];

// database.ref('notes').set(notes);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log(e);
//     });

// database.ref()
//     .on('value', (snapshot) => {
//         console.log(snapshot.val());
//     });

// database.ref().set({
//     name: "Rachit Goyal",
//     age: 31,
//     stressLevel: 6,
//     job: {
//         title: "Software Engineer",
//         company: "Walmart"
//     },
//     location: {
//         city: "Bengaluru",
//         country: "India"
//     }
// }).then(() => {
//     console.log("Data Saved");
// }).catch((error) => {
//     console.log("Error", error);
// });

// database.ref().update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     'location/city': "Delhi"
// });

// database.ref().remove();
