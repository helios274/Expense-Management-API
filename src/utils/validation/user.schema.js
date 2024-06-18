exports.CreateUserSchema = {
  email: {
    notEmpty: {
      errorMessage: "Email is required",
    },
    isEmail: {
      errorMessage: "Not a valid email",
    },
    trim: true,
    escape: true,
  },
  password: {
    notEmpty: {
      errorMessage: "Password is required",
    },
    isLength: {
      options: {
        min: 6,
        max: 32,
      },
      errorMessage: "Password must be 6 to 32 characters long",
    },
    matches: {
      options:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      errorMessage:
        "Password must contain at least 1 lowercase, 1 uppercase, 1 digit, and 1 special character",
    },
  },
  firstName: {
    notEmpty: {
      errorMessage: "First name is required",
    },
    isString: {
      errorMessage: "First name must be a string",
    },
    isLength: {
      options: {
        min: 2,
        max: 60,
      },
      errorMessage: "First name should be 2 to 60 characters",
    },
    trim: true,
    escape: true,
  },
  lastName: {
    optional: true,
    isString: {
      errorMessage: "Last name must be a string",
    },
    isLength: {
      options: {
        min: 2,
        max: 60,
      },
      errorMessage: "Last name should be 2 to 60 characters",
    },
    trim: true,
    escape: true,
  },
};

exports.LoginUserSchema = {
  email: {
    notEmpty: {
      errorMessage: "Email is required",
    },
    isEmail: {
      errorMessage: "Not a valid email",
    },
    trim: true,
    escape: true,
  },
  password: {
    notEmpty: {
      errorMessage: "Password is required",
    },
    trim: true,
    escape: true,
  },
};

exports.UpdateProfileSchema = {
  firstName: {
    optional: true,
    isString: {
      errorMessage: "First name must be a string",
    },
    isLength: {
      options: {
        min: 2,
        max: 60,
      },
      errorMessage: "First name should be 2 to 60 characters",
    },
    trim: true,
    escape: true,
  },
  lastName: {
    optional: true,
    isString: {
      errorMessage: "Last name must be a string",
    },
    isLength: {
      options: {
        min: 2,
        max: 60,
      },
      errorMessage: "Last name should be 2 to 60 characters",
    },
    trim: true,
    escape: true,
  },
};
