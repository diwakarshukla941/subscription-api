import aj from "../config/arcjet.js";

// const WHITELIST = new Set([
//   '127.0.0.1',           // localhost dev
//   '::1',                 // ipv6 localhost
//   '203.0.113.5'          // your public dev IP (example)
// ]);

const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 });
    //  const ip = req.ip || req.connection.remoteAddress;
    //  if (WHITELIST.has(ip)) return next();
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({ Message: "Rate Limit Exceeded" });
      }
      if (decision.reason.isBot()) {
        return res.status(403).json({ error: "Bot detected" });
      }

      return res.status(403).json({ error: "Access denied" });
    }

    next();
  } catch (error) {
    console.log(`Arcjet Middleware ${error}`);
    next(error);
  }
};

export default arcjetMiddleware;
