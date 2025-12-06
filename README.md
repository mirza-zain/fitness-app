# TitanRep - Fitness Workout Tracker 💪

A modern mobile fitness app built with Expo and React Native. Track your daily workouts, mark exercises as complete, and stay consistent with your training goals.

## Features

- 📅 **Weekly Workout Schedule** - Organize exercises by day (Mon-Sun)
- ✅ **Exercise Tracking** - Mark exercises as complete/incomplete
- 📱 **Real-time Status Updates** - Changes sync across all screens
- 🖼️ **Exercise Details** - View detailed information with images
- 💬 **Motivational Quotes** - Daily quotes on the home screen
- 📊 **Continue Training** - See pending exercises on home screen
- ℹ️ **About Section** - Learn more about the app

## Tech Stack

- **Framework**: Expo with React Native
- **Routing**: Expo Router (file-based)
- **State Management**: Redux Toolkit
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Language**: TypeScript

## Get Started

### Prerequisites
- Node.js & npm installed

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/mirza-zain/fitness-app.git
   cd fitness-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```

4. Open on device/simulator:
   - Press `w` for web
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app

## Project Structure

```
fitness-app/
├── app/
│   ├── (dashboard)/          # Dashboard tab layout
│   │   ├── _layout.tsx       # Tab navigation + header
│   │   ├── home.tsx          # Home screen with pending exercises
│   │   ├── exercise.tsx      # Exercise list/detail router
│   │   └── about.tsx         # About screen
│   ├── Components/
│   │   ├── Days.tsx          # Workout schedule component
│   │   ├── ExerciseDetail.tsx # Exercise detail view
│   │   ├── DaysList.tsx      # Static exercise data
│   │   └── ...
│   ├── slice/
│   │   └── ExerciseSlice.tsx # Redux slice for exercises
│   ├── store/
│   │   └── ExerciseStore.tsx # Redux store configuration
│   ├── _layout.tsx           # Root layout
│   └── index.tsx             # Entry point
├── assets/                   # Images and fonts
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## How to Use

1. **View Schedule**: Select a day to see exercises for that day
2. **Add Exercise**: Click the `+` button to add new exercises
3. **Mark Complete**: Tap an exercise to view details and mark as complete
4. **Track Progress**: Home screen shows pending exercises
5. **Learn More**: Click the info icon (ℹ️) for the About section

## Key Features

### Redux State Management
- Centralized exercise state
- Real-time updates across all screens
- Persistent data during session

### Navigation
- Tab-based navigation (Home, Exercise)
- Modal for adding new exercises
- Deep linking to exercise details

### Responsive Design
- Mobile-first approach
- Adapts to different screen sizes
- Safe area handling for notches

## Development Build

To create a production build:

```bash
# Android
eas build --platform android

# iOS
eas build --platform ios

# Both
eas build
```

## Available Scripts

```bash
# Start development server
npm start

# Build for production (EAS)
eas build

# Preview build
eas build --preview
```

## Download APK

To grab the latest Android APK, check the GitHub **Releases** page for this repo. Each release contains the built APK you can install on your device.

## Contributing

Feel free to fork this project and submit pull requests for improvements!

## License

MIT License - feel free to use this project as a reference or starting point.

## Author

**Mirza Zain** - [GitHub](https://github.com/mirza-zain)

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [NativeWind](https://www.nativewind.dev/)
