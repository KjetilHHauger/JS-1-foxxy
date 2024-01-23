const carName = "   B    M    W   ";

// trim()
// Will remove the spaces
// Expected: BMW

const trimmedCarName = carName.trim().replace(/[^a-zA-Z0-9]/g, ``);
console.log("Trimmed: ",trimmedCarName) 