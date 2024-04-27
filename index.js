function scuberGreetingForFeet(distance){
  // Write your code here!
  let response;
  if (distance <= 400) {
    response = 'This one is on me!';
  } else if (distance > 400 && distance <= 2000) {
    response = 'That will be twenty bucks.';
  } else if (distance > 2000 && distance <= 2500) {
    response = 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) { 
    response = 'No can do.';
  }

  return response;
}

function ternaryCheckCity(city){
  // Write your code here!
  return (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
  
}

function switchOnCharmFromTip(percent){
  // Write your code here!
  let tipResponse;

  switch(percent) {
    case 'generous':
      tipResponse = 'Thank you so much.';
      break;
    case 'not as generous':
      tipResponse = 'Thank you.';
      break;
    default:
      tipResponse = 'Bye.';
      break;

  }
  return tipResponse;
}