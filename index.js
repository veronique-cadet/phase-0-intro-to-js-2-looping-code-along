function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(
      "Thank you, " + names[i] + "," + " for the wonderful " + event + " gift!"
    );
  }
  return messages;
}

function countDown() {
  let countDown = 0;
  while (countDown < 11) {
    console.log(countDown++);
  }
}
