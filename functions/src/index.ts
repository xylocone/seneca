import { onCall } from "firebase-functions/v2/https";

export const helloWorld = onCall((_data) => {
  return "Hello from Firebase Cloud Functions!";
});
