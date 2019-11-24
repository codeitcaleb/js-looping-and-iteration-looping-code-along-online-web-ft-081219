// const names = ['Lisa', 'Kaitlin', 'Jan']

function writeCards(names, occasion) {
  let messages = []
  for (let i = 0; i < names.length; i++) {
   messages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
  }
  return messages
}

function countDown(i) {
  while (i > -1) {
    console.log(i)
    i--
  }
}
