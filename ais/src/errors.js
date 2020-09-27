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

class BadRequest extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = 'BadRequest';
  }
}


module.exports = {
  InvalidArgumentError: InvalidArgumentError,
  InternalServerError: InternalServerError,
  BadRequest: BadRequest,
};
