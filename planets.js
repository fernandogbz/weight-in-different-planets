let user = prompt('How much do you weight?');
let planet = parseInt(
  prompt(
    'Choose the planet.\n 1) Mercury.\n 2) Venus.\n 4) Mars.\n 5) Jupiter.\n 6) Saturn.\n 7) Uranus.\n 8) Neptune',
  ),
);
let weight = parseInt(user);
let gMercury = 3.7;
let gVenus = 8.87;
let gEarth = 9.8;
let gMars = 3.7;
let gJupiter = 24.8;
let gSaturn = 10.44;
let gUranus = 8.87;
let gNeptune = 11.15;
let finalWeight;
if (planet == 1) {
  finalWeight = (weight * gMercury) / gEarth;
  document.write(
    'Your weight in Mercury is <strong>' + finalWeight + ' kg</strong>',
  );
} else if (planet == 2) {
  finalWeight = (weight * gVenus) / gEarth;
  document.write(
    'Your weight in Venus is <strong>' + finalWeight + ' kg</strong>',
  );
} else if (planet == 4) {
  finalWeight = (weight * gMars) / gEarth;
  document.write(
    'Your weight in Mars is <strong>' + finalWeight + ' kg</strong>',
  );
} else if (planet == 5) {
  finalWeight = (weight * gJupiter) / gEarth;
  document.write(
    'Your weight in Jupiter is <strong>' + finalWeight + ' kg</strong>',
  );
} else if (planet == 6) {
  finalWeight = (weight * gSaturn) / gEarth;
  document.write(
    'Your weight in Saturn is <strong>' + finalWeight + ' kg</strong>',
  );
} else if (planet == 7) {
  finalWeight = (weight * gUranus) / gEarth;
  document.write(
    'Your weight in Uranus is <strong>' + finalWeight + ' kg</strong>',
  );
} else if (planet == 8) {
  finalWeight = (weight * gNeptune) / gEarth;
  document.write(
    'Your weight in Neptune is <strong>' + finalWeight + ' kg</strong>',
  );
} else {
  finalWeight = confirm('Put your real weight');
}
finalWeight = parseInt(finalWeight);
// document.write ('Your weight in Mars is <strong>' + finalWeight + ' kg</strong>',);
// alert(finalWeight);