import rateLimit from "express-rate-limit";

export const rateLimitMiddleware = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    sucess: false,
    massage: "Too many requests, please try again latter.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
