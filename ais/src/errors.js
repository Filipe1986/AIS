class InvalidArgumentError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'InvalidArgumentError';
  }
}

class InternalServerError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'InternalServerError';
  }
}

class InsufficientFunds extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'InsufficientFunds';
  }
}

module.exports = {
  InvalidArgumentError: InvalidArgumentError,
  InternalServerError: InternalServerError
};
