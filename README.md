# Seneca

Seneca is an AI-powered legal documentation assistant. It is our team's (DocuMentors') entry for the Smart India Hackathon, conducted by AICTE. The problem we are addressing is SIH1285, posted by the Ministry of Law and Justice.

## Running locally

- Serve the Next.js frontend using `npm run dev` in the root project directory.
- Serve the Firebase emulators using `npm run emulators` in the root project directory.
- If you want to make changes in the Cloud Functions and have them reflected in the emulators, run `npm run build:watch` in `/functions` directory.

## Continuous Deployment

The current Continuous Deployment strategy is to have a `release` branch. Every time a branch is merged into `release`, a Github workflow, using a Firebase login secret, automatically deploys the codebase to Firebase.
