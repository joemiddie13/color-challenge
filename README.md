# Color Challenge 🎨

A color guessing game built with React, where users need to identify the correct color based on its hex value.

## Features

- Three random color swatches displayed as 100px x 100px squares
- A hex value of one of the colors is shown
- When a swatch is clicked:
  - Shows "Correct!" or "Incorrect!" feedback
  - Highlights the correct answer
  - Reveals all color hex values
- Reset/Play Again button to start a new game

## Component Structure & Design Decisions

### Component Architecture

The application follows a simple component structure:

- **App**: The root component that renders the main application container and the ColorChallenge component
- **ColorChallenge**: The primary component responsible for all game functionality including:
  - Random color generation
  - Game state management
  - User interaction handling

### State Management

State is managed using React's built-in useState hooks:

- `colors`: Array of three random hex color values
- `targetColor`: The selected color that the user needs to identify
- `correctIndex`: Tracks which swatch contains the target color
- `result`: Stores the feedback message ("Correct!" or "Incorrect!")
- `isGameOver`: Boolean flag to track the game state

### Design Choices

1. **Color Generation**: 
   - Used `Math.random()` to generate RGB values (0-255)
   - Converted to hex using `toString(16)` with `padStart(2, '0')` to ensure valid hex format
   - Used `toUpperCase()` for consistency in displaying hex values

2. **UI/UX Considerations**:
   - Interactive elements have hover effects for better user feedback
   - Color swatches use transitions for a more polished feel
   - The correct swatch is highlighted with a gold border after guessing
   - All hex values are revealed after a guess for learning purposes
   - Context-appropriate button text changes from "Reset Game" to "Play Again"

3. **Visual Styling**:
   - Used flexbox for responsive layouts
   - Added subtle animations and hover effects
   - Employed consistent spacing and typography
   - Used a gradient background for visual appeal
   - Implemented clear color coding for correct/incorrect feedback

## How to Run

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd color-challenge

# Install dependencies
npm install

# Start the development server
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## AI Reflection

### Prompts Used with AI

1. "Help me build a color guessing game with React that displays random color swatches and asks users to identify them by hex value."
2. "How can I generate random hex colors in JavaScript that are properly formatted?"
3. "What's the best way to highlight the correct answer and show all color values after the user makes a selection?"

### How AI Helped

AI provided guidance on React component structure and helped with the implementation of random color generation, ensuring proper hex formatting with padStart() for consistent color codes.

### What I Figured Out on My Own

I determined how to structure the conditional rendering for the game's different states and created the CSS transitions to make the UI feel more responsive and engaging.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
