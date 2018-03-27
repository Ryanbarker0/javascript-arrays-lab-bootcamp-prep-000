var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(myName) {
  kittens.push(myName)
}

function destructivelyPrependKitten(myName) {
  kittens.unshift(myName)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift([1])
}

function appendKitten(myName) {
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.push(myName)
  return kittens
}