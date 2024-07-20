function handleInvalidIdError(res) {
  res
    .status(400)
    .json({ status: "error", code: 400, message: "invalid id value" });
}

function handleValidationError(res, errorMessage) {
  res.status(400).json({ status: "error", code: 400, message: errorMessage });
}

const utils = {
  handleInvalidIdError,
  handleValidationError,
};

export default utils;
