# Tuner

**Tuner** is a music application designed to help users discover, manage, and enjoy their favorite songs. The app provides features for adding new songs, viewing a list of all songs, editing song details, and deleting songs. The front end is built with React, and the back end uses Express and SQL for handling CRUD operations and database management.

## Features

- **Add Songs:** Users can add new songs to the list by providing details such as the song's title, artist, album, and genre.
- **View Songs:** Users can view a list of all songs, with details displayed in a clean and organized manner.
- **Edit Songs:** Users can edit the details of existing songs.
- **Delete Songs:** Users can delete songs from the list.

## Technologies Used

### Front End
- **React:** A JavaScript library for building user interfaces.
- **React Router:** A routing library for React applications to handle navigation.
- **Bootstrap:** A CSS framework for building responsive and visually appealing web pages.

### Back End
- **Express:** A web application framework for Node.js, used to create the server and handle API requests for CRUD operations.
- **SQL:** Used for managing the database that stores song information.

## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)
- SQL database (e.g., MySQL, PostgreSQL)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/tuner.git
   cd tuner
2. **Install dependencies:**
    ```bash
    npm install
    npm run dev
3. **Set up the database:**
    - Create a new SQL database
    - Run the provided SQL Script to create the necessary tables.
4. **Configure the database connection:**
    - Update the database connection settings in the `db/dbConfig.js` file
5. **Start the development server:**
    ```bash
    npm start

## Usage
1. **Add Songs:**
    - Navigate to the "Add Song" Page
    - Fill in the song details and submit the form
2. **View Songs:**
    - Naviagte to the songs page to see a list of all songs
3. **Edit Songs:**
    - Click on a song in the list to view its details
    - Click the  "Edit" button to modify the song's details
4. **View Lyrics:**
    - Click on a song in the list to view its details
    - Click the "lyrics" link to view the lyrics of a song if available
5. **Delete Songs:**
    - Click on a song in the list to view its details
    - Click the "Delete" button to remove the song from the list