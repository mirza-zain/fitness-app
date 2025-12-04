// Import local images using static require
// Note: require() must have static strings - cannot use variables
const exerciseImages = {
  pushups: require('../../assets/images/hero.png'),
  squats: require('../../assets/images/hero.png'),
  plank: require('../../assets/images/hero.png'),
  lunges: require('../../assets/images/hero.png'),
}

// Exercise list with resolved image references
let exercise = [
  {
    "id": "1",
    "name": "Push Ups",
    "description": "A classic bodyweight exercise that strengthens the chest, shoulders, and triceps.",
    "image": exerciseImages.pushups
  },
  {
    "id": "2",
    "name": "Squats",
    "description": "A fundamental lower body exercise targeting the quadriceps, hamstrings, and glutes.",
    "image": exerciseImages.squats
  },
  {
    "id": "3",
    "name": "Plank",
    "description": "An isometric core strength exercise that involves maintaining a position similar to a push-up.",
    "image": exerciseImages.plank
  },
  {
    "id": "4",
    "name": "Dumbbell Lunges",
    "description": "A resistance exercise that works your hips, glutes, quads, and hamstrings.",
    "image": exerciseImages.lunges
  }
]

export default exercise