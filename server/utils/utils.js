import bcrypt from 'bcrypt';

function handleInvalidIdError(res) {
  res
    .status(400)
    .json({ status: 'error', code: 400, message: 'invalid id value' });
}

function handleValidationError(res, errorMessage) {
  res.status(400).json({ status: 'error', code: 400, message: errorMessage });
}

function handleDuplicateEmail(res) {
  res.status(409).json({
    status: 'error',
    code: 409,
    message: "You can't use this email. It belongs to another account",
  });
}

function encrypt(text) {
  const salt = bcrypt.genSaltSync(10);
  const encryptedText = bcrypt.hashSync(text, salt);

  return encryptedText;
}

const utils = {
  handleInvalidIdError,
  handleValidationError,
  handleDuplicateEmail,
  encrypt,
};

export default utils;
