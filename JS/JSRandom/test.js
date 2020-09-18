const age = 20;

if (age >= 18 && age <= 25){
  console.log('Je krijgt 50% korting!');
}

else if (age <= 18){
  console.log('Je krijgt geen korting!');
}

const name = 'Alexander';

if (name === 'Sarah' || name === 'Bram'){
  console.log('Je krijgt een gratis biertje!');
}

else if (name !== 'Sarah' || name !== 'Bram'){
  console.log('Je hebt geen gratis biertje gewonnen!');
}

const totalAmount = 40;

if (totalAmount == 25){
  console.log('U krijg een gratis portie (vega)bitterballen');
}

else if(totalAmount == 50){
  console.log('U krijg een gratis portie portie nachos');
}

else if (totalAmount >= 100){
  console.log('U krijg een gratis flesje champagne');
}