// Import local images using static require
// Note: require() must have static strings - cannot use variables
const exerciseImages = {
  pushups: require('../../assets/images/hero.png'),
  squats: require('../../assets/images/hero.png'),
  plank: require('../../assets/images/hero.png'),
  lunges: require('../../assets/images/hero.png'),
}

// Exercise list with image keys that map to the exerciseImages object
let exercise = [
  {
    "id": "1",
    "name": "Push Ups",
    "description": "A classic bodyweight exercise that strengthens the chest, shoulders, and triceps.",
    "imageKey": "pushups",
    "image": exerciseImages.pushups
  },
  {
    "id": "2",
    "name": "Squats",
    "description": "A fundamental lower body exercise targeting the quadriceps, hamstrings, and glutes.",
    "imageKey": "squats",
    "image": exerciseImages.squats
  },
  {
    "id": "3",
    "name": "Plank",
    "description": "An isometric core strength exercise that involves maintaining a position similar to a push-up.",
    "imageKey": "plank",
    "image": exerciseImages.plank
  },
  {
    "id": "4",
    "name": "Dumbbell Lunges",
    "description": "A resistance exercise that works your hips, glutes, quads, and hamstrings.",
    "imageKey": "lunges",
    "image": exerciseImages.lunges
  }
]

export default exercise