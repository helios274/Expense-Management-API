class ValidationError extends Error {
  constructor(errors) {
    super();
    this.errors_array = [];
    errors.forEach((error) => {
      this.errors_array.push({
        field: error.path,
        message: error.msg,
      });
    });
  }
}

module.exports = { ValidationError };
