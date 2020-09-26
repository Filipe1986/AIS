module.exports = {
  fieldNotNull: (value, name) => {

    if (typeof value !== "string" || value === 0) {
      console.log(`campo ${name} está nulo!`)
      throw new InvalidArgumentError(`campo ${name} está nulo!`);
    }
  },

  minimalSize: (valor, name, minimo) => {
    if (valor.length < minimo) {
      console.log(`O campo ${name} precisa ter mais que ${minimo} caracteres!`)
      throw new InvalidArgumentError(
        `O campo ${name} precisa ter mais que ${minimo} caracteres!`
      );
    }
  },

  maxSize: (valor, name, maximo) => {
    if (valor.length > maximo) {
      console.log(`O campo ${name} precisa ter menos que ${maximo} caracteres!`)
      throw new InvalidArgumentError(
        `O campo ${name} precisa ter menos que ${maximo} caracteres!`
      );
    }
  },
};
