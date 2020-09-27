module.exports = {
  fieldNotNull: (value, name) => {

    if (typeof value !== "string" || value === 0) {
      console.log(`campo ${name} está nulo!`)
      throw new InvalidArgumentError(`campo ${name} está nulo!`);
    }
  },

   isInt : (value) =>{
    var x;
    if (isNaN(value)) {
      return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
  }

};
