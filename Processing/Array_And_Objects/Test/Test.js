function draw() {
  background(40);

  for(let i = 0; i < passengers.getRowCount(); i++){
    let x = i * 10;

    // Debugging: Print survival and class data
    print(`Passenger ${i}: Survived = ${passengers.getNum(i, 'Survived')}, Class = ${passengers.getNum(i, 'Class')}`);

    // Draw ellipse for survival status
    if(passengers.getNum(i, 'Survived') === 1){
      fill(0, 255, 0); // Green for survived
    } else {
      fill(255, 0, 0); // Red for not survived
    }
    ellipse(x, 100, dimension, dimension);
    
    // Draw ellipse for class
    if(passengers.getNum(i, 'Class') === 1){
      fill(239, 212, 40); // Gold for 1st class
    } else if(passengers.getNum(i, 'Class') === 2){
      fill(18, 198, 253); // Blue for 2nd class
    } else {
      fill(253, 128, 18); // Orange for 3rd class
    }
    ellipse(x, 200, dimension, dimension);
  }
}
