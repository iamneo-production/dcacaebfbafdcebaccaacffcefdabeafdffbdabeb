const filterOdd = (...args) => {
    return args.filter(num => num % 2 !== 0);
  }
  
  const filterEven = (...args) => {
    return args.filter(num => num % 2 === 0);
  }
  
  const generateRandomList = (n = 7) => {
    return Array(n).fill().map(() => Math.floor(Math.random() * 100) + 1);
  }
  
  export { filterOdd, filterEven, generateRandomList }