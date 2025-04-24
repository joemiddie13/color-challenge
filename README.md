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
