for(let rep = 1; rep <= 10; rep++) {
    // console.log(`Lifting weights repitition ${rep}`);
}
for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    // console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

let exercise = 1;
while(exercise <= 3) {
    // console.log(`*** Starting Excercise ${exercise}`);

    let reps = 1;
    while(reps <= 5) {
        // console.log(`Excercise ${exercise}: Lifting weights repitition ${reps}.`);
        reps++;
    }

    exercise++;

}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}