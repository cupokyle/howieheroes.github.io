function random_item(greetings) {
  return greetings[Math.floor(Math.random() * greetings.length)];
}

const greetings = [
  "Hello",
  "Hi",
  "Hey there",
  "Sup",
  "What's up",
  "Greetings",
  "Bonjour",
  "Hola",
  "G'day",
  "Aye",
  "Nice to meet you",
];

function getRandomIntegerInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

class Hero {
  constructor(
    name,
    level,
    age,
    walkSpeed,
    proficiencyBonus,
    weapon,
    armorRating,
    warCry,
    strength,
    knowledge,
    durability,
    charisma,
    experienceEarned
  ) {
    this.name = name;
    this.level = level;
    this.age = age;
    this.walkSpeed = walkSpeed;
    this.proficiencyBonus = proficiencyBonus;
    this.weapon = weapon;
    this.armorRating = armorRating;
    this.warCry = warCry;
    this.strength = strength;
    this.knowledge = knowledge;
    this.durability = durability;
    this.charisma = charisma;
    this.experienceEarned = experienceEarned;
  }
  interact() {
    console.log(this.name + " tries to interact with something.");
  }
  introduce(inputName) {
    this.name = inputName;
    console.log(random_item(items) + ", I am " + this.name);
  }
  useStrength() {
    var roll = getRandomIntegerInclusive(1, 10);
    return (
      this.name +
      " uses strength: " +
      (roll + this.strength + this.proficiencyBonus)
    );
  }
  useKnowledge() {
    var roll = getRandomIntegerInclusive(1, 10);
    return (
      this.name +
      " uses knowledge: " +
      (roll + this.knowledge + this.proficiencyBonus)
    );
  }
  useDurability() {
    var roll = getRandomIntegerInclusive(1, 10);
    return (
      this.name +
      " uses durability: " +
      (roll + this.durability + this.proficiencyBonus)
    );
  }
  useCharisma() {
    var roll = getRandomIntegerInclusive(1, 10);
    return (
      this.name +
      " uses charisma: " +
      (roll + this.charisma + this.proficiencyBonus)
    );
  }
  gainXp(gainedXp) {
    this.experienceEarned += gainedXp;
    return this.experienceEarned;
  }
  level2() {
    if (this.experienceEarned >= 200) {
      console.log("Congratulations! You've levelled up to Level 2!");
    } else {
      console.log(
        "You still need " +
          (200 - this.experienceEarned) +
          " experience points to level up."
      );
    }
  }
}

// Creating Barbarian

const barbarian = new Hero(
  "Jasper",
  1,
  40,
  "25 feet",
  0,
  "Claymore",
  10,
  "'BOOM!'",
  9,
  2,
  7,
  3,
  0
);

// Creating Assassin

const assassin = new Hero(
  "Tiana",
  1,
  33,
  "25 feet",
  0,
  "Steel Dagger",
  3,
  "'Slicey Nicey!'",
  5,
  7,
  9,
  7,
  0
);

// Creating Wizard

const wizard = new Hero(
  "Regis",
  1,
  50,
  "25 feet",
  0,
  "Staff",
  4,
  "'Hazam!'",
  2,
  10,
  6,
  9,
  0
);

// Creating Demon

const demon = new Hero(
  "Garboka",
  1,
  22,
  "25 feet",
  0,
  "Devil Horns",
  8,
  "'Muahahaha!'",
  9,
  2,
  10,
  2,
  0
);

const demonContent = `<ul id="demonStats">
          <li>Level: ${demon.level}</li>
          <li>Age: ${demon.age}</li>
          <li>Walk Speed: ${demon.walkSpeed}</li>
          <li>Proficiency Bonus: ${demon.proficiencyBonus}</li>
          <li>Weapon: ${demon.weapon}</li>
          <li>Armor Rating: ${demon.armorRating}</li>
          <li>War Cry: ${demon.warCry}</li>
          <li>Strength: ${demon.strength}</li>
          <li>Knowledge: ${demon.knowledge}</li>
          <li>Durability: ${demon.durability}</li>
          <li>Charisma: ${demon.charisma}</li>
          <li>Experience Earned: ${demon.experienceEarned}</li>
</ul>`;

document.getElementById("demonStats").innerHTML = demonContent;

const barbContent = `<ul id="barbStats">
          <li>Level: ${barbarian.level}</li>
          <li>Age: ${barbarian.age}</li>
          <li>Walk Speed: ${barbarian.walkSpeed}</li>
          <li>Proficiency Bonus: ${barbarian.proficiencyBonus}</li>
          <li>Weapon: ${barbarian.weapon}</li>
          <li>Armor Rating: ${barbarian.armorRating}</li>
          <li>War Cry: ${barbarian.warCry}</li>
          <li>Strength: ${barbarian.strength}</li>
          <li>Knowledge: ${barbarian.knowledge}</li>
          <li>Durability: ${barbarian.durability}</li>
          <li>Charisma: ${barbarian.charisma}</li>
          <li>Experience Earned: ${barbarian.experienceEarned}</li>
</ul>`;

document.getElementById("barbStats").innerHTML = barbContent;

const assContent = `<ul id="assStats">
          <li>Level: ${assassin.level}</li>
          <li>Age: ${assassin.age}</li>
          <li>Walk Speed: ${assassin.walkSpeed}</li>
          <li>Proficiency Bonus: ${assassin.proficiencyBonus}</li>
          <li>Weapon: ${assassin.weapon}</li>
          <li>Armor Rating: ${assassin.armorRating}</li>
          <li>War Cry: ${assassin.warCry}</li>
          <li>Strength: ${assassin.strength}</li>
          <li>Knowledge: ${assassin.knowledge}</li>
          <li>Durability: ${assassin.durability}</li>
          <li>Charisma: ${assassin.charisma}</li>
          <li>Experience Earned: ${assassin.experienceEarned}</li>
</ul>`;

document.getElementById("assStats").innerHTML = assContent;

const wizContent = `<ul id="wizStats">
          <li>Level: ${wizard.level}</li>
          <li>Age: ${wizard.age}</li>
          <li>Walk Speed: ${wizard.walkSpeed}</li>
          <li>Proficiency Bonus: ${wizard.proficiencyBonus}</li>
          <li>Weapon: ${wizard.weapon}</li>
          <li>Armor Rating: ${wizard.armorRating}</li>
          <li>War Cry: ${wizard.warCry}</li>
          <li>Strength: ${wizard.strength}</li>
          <li>Knowledge: ${wizard.knowledge}</li>
          <li>Durability: ${wizard.durability}</li>
          <li>Charisma: ${wizard.charisma}</li>
          <li>Experience Earned: ${wizard.experienceEarned}</li>
</ul>`;

document.getElementById("wizStats").innerHTML = wizContent;
