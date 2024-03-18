const titleCase = (str) => {
  const arr = str.toLowerCase().split(" ")
  return arr.map(e => `${e[0].toUpperCase()}${e.slice(1)}`).join(" ") 
}


