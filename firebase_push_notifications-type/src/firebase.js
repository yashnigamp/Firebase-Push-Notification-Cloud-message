import { initializeApp } from "firebase/app";
import { getMessaging, onMessage, getToken } from "firebase/messaging";

// Replace this firebaseConfig object with the congurations for the project you created on your firebase console.

const firebaseConfig = {
  apiKey: "AIzaSyD3t7ciIbRq6FqxDclLmuI-uC-pSQSmUQY",
  authDomain: "vz-inf.firebaseapp.com",
  projectId: "vz-inf",
  storageBucket: "vz-inf.appspot.com",
  messagingSenderId: "1015325201213",
  appId: "1:1015325201213:web:5dd40aa72d705a27c12b54",
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BAVda2it64to8l7D5jM6CdKVhgBJNiXTVVVm2LvDGHvdGwqRzM0UKyCf79EWBWQN-_mnCTdYs4_bP7Bu42QQN20",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });
