
const removeRotten = (bagOfFruits) => {
  return Array.isArray(bagOfFruits)? 
  bagOfFruits.map(fruit => fruit.replace(/rotten/g, "")).map(fruit => fruit.toLowerCase()) : []
}

removeRotten(["apple","rottenBanana","Kiwi","Melone","orange"])