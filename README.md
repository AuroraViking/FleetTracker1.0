Fleet Tracker MVP
A simple real-time fleet tracking system for tour vehicles, built using Firebase Realtime Database and OpenStreetMap.
Designed to be lightweight, free, and easy to deploy.

Features
Android tablets in each bus send GPS location + bus name to Firebase.

Office dashboard shows live location of all buses on a map.

No paid services needed (Firebase Free Tier + OpenStreetMap).

Easy to expand later (statuses, pickup notifications, more).

Folder Structure

File	Description
index.html	Simple tablet app to send GPS location to Firebase.
dashboard.html	Web dashboard to observe all buses live on a map.
Setup Instructions
Clone this repo

bash
Copy
Edit
git clone https://github.com/yourusername/fleet-tracker.git
Create a Firebase Project

Go to Firebase Console.

Create a new project.

Set up Firebase Realtime Database (not Firestore).

Copy your Firebase config.

Paste Firebase Config

Replace the firebaseConfig object in both index.html and dashboard.html with your real config.

Run Locally

Open index.html on the tablets to start sending locations.

Open dashboard.html on any computer to view the fleet.

Technologies Used
Firebase Realtime Database

HTML / JavaScript

OpenStreetMap + Leaflet.js

Browser Geolocation API

Future Improvements
Add guide assignment and bus statuses.

Display estimated arrival times for pickups.

Let customers track their pickup bus via private link.

Made for Aurora Viking operations.
Built with simplicity, reliability, and Icelandic spirit.
