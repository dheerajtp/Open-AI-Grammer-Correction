exports.sendSuccessResponse = async (res, data) => {
  res.status(200).json({ status: true, data });
};

exports.sendErrorResponse = async (res, error) => {
  res.status(422).json({ status: false, error });
};
