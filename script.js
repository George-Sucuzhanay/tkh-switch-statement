let moviePhrase = "You're gonna need a bigger boat";
const favMovie = 'jaws';

switch (favMovie) {
  case 'the shining':
    moviePhrase = "All work and no play makes Jack a dull boy";
    // console.log(moviePhrase);
  // return moviePhrase;
    break;
  case 'star wars':
    moviePhrase = "Do. Or do not. There is no try."
    // console.log(moviePhrase)
    break;
  case 'forrest gump':
    moviePhrase = "Life was like a box of chocolates."
    // console.log(moviePhrase);
    break;
  case 'back to the future':
    moviePhrase = "Where we're going, we don't need roads."
    // console.log(moviePhrase);
    break;
  default:
    console.log(`Great movie choice!`);
};
