const errorMiddleware = (err, req, res, next) => {
  // If response is already sent, delegate to default handler
  if (res.headersSent) {
    return next(err);
  }

  let error = { ...err, message: err.message };

  console.error("Error:", err);

  // Mongoose bad ObjectId
  if (err.name === "CastError") {
    error = new Error("Resource Not Found");
    error.statusCode = 404;
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    error = new Error("Duplicate Field Value Entered");
    error.statusCode = 400;
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map(val => val.message);
    error = new Error(message.join(", "));
    error.statusCode = 400;
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error"
  });
};

export default errorMiddleware;
