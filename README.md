## NETFLIX-CLONE
This is a modern, responsive front-end application built with React and Vite that closely replicates the user experience and key pages of the Netflix streaming platform. It features user authentication (simulated with local storage) and dynamic content display by integrating with The Movie Database (TMDB) API.
Key Features
Simulated Authentication: Users can Sign Up and Log In using local storage to simulate user sessions.
Home Page: Fetches and displays a list of trending movies using the TMDB API.
Interactive Movie Cards: Implements a hover effect on movie posters to play a sample video, mimicking the Netflix preview feature.
Movie Details Page: Clicking on a movie navigates to a dedicated page to display the trailer (embedded from YouTube) and movie overview.
Responsive Layout: Uses reusable Navbar and Footer components that adapt to different routes.


## TECH STACK

Framework  React             Component-based UI library.
Tooling     Vite          Fast development server and build tool.
RoutingReact Router DOM           Handles application navigation (/, /home, /movie/:id).
Styling     CSS                   Custom styling, imported via ../App.css.
API Client  Axios                   Used for making HTTP requests to external APIs.
Content API   The Movie Database (TMDB)         Source for all movie data, posters, and trailer keys.AuthLocal StorageUsed for client-side storage of user credentials (simulated authentication).


## Getting Started

Follow these instructions to set up the project locally.
Prerequisites

Node.js 
npm

## Installation
Clone the repository
cd netflix
Install dependencies
npm install

## Environment Variables

This project requires an API key from The Movie Database (TMDB).
Create a file named .env in the root directory and add your key:
VITE_TMDB_KEY="YOUR_TMDB_API_KEY_HERE"

## Running the Application

Start the development server
npm run dev

## Project Structure
Path                             Description
src/Pages/Home.jsx            Main dashboard displaying trending movies from TMDB.
src/Pages/Login.jsx                  Handles user sign-in via local storage check.
src/Pages/Signup.jsx            Handles user registration, saving credentials to local storage.
src/Pages/MovieDetails.jsx        Fetches and displays a single movie's details and trailer.
src/Components/Navbar.jsx                 Reusable header with sign-out logic.
src/Components/Footer.jsx         Reusable standard Netflix footer.
src/App.css                      All global and component-specific CSS styling.
