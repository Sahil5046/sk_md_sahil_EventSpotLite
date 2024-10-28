# EventSpot Lite

EventSpot Lite is a responsive single-page web application where users can explore local events happening around them. This project focuses on creating an intuitive and visually appealing interface with smooth animations, ensuring responsiveness across devices.

## Features

- **Event Listing Page**: Displays a list of events with essential details like name, date, and location, populated through mock data.
- **Event Details Modal**: Opens on clicking an event, showing more details and an image with smooth fade-in/out animations.
- **Responsive Design**: The application adapts to desktop, tablet, and mobile screens.
- **Smooth Animations**: Includes hover effects on cards, modal transitions, and feedback for interactions.
- **Loading Indicator**: Displays a spinner to simulate data fetching.
- **Optimized Performance**: Images and assets are optimized for fast loading.

## Technology Stack

- **Frontend Framework**: [React](https://reactjs.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Animate.css](https://animate.style/)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Sahil5046/EventSpotLite.git
    cd EventSpotLite
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

### Project Structure

```plaintext
src/
├── components/         # Contains reusable components like EventCard, EventModal
├── pages/              # Main pages of the application
├── data/               # Mock data for events
├── App.jsx             # Main application component
├── main.jsx            # Vite entry point
└── index.html          # HTML template
