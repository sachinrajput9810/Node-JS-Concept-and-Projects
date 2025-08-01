const loadsh = require('loadsh')

const name = ["sachin", "rahul", "virat", "rohit", "hardik"] 

const capitalized = loadsh.map(name , loadsh.capitalize)
console.log(capitalized)