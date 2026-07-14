const validate = (schema) => {
  return (req, res, next) => {
    const validationResult = schema.safeParse(req.body);

    if (!validationResult.success) {
      return res.status(400).json({
        errors: validationResult.error.issues,
      });
    }

    req.body = validationResult.data;

    next();
  };
};

export default validate;