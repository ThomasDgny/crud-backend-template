export function responseMessage(res, statusCode, message, data = null) {
  return res.status(statusCode).send({
    message: message,
    status: statusCode,
    data: data,
  });
}
