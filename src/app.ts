import express from "express";
import { configuration } from "./configuration";
import { authRoutes, postingRouter } from "./routes";
import { errorHandler, jsonResponseMiddleware, notFound, rateLimitMiddleware } from "./middlewares";

const app = express();

app.use(express.json());
app.use(jsonResponseMiddleware);
app.use(rateLimitMiddleware);

// configuration && MongoDB,
configuration();

// routes
app.use("/api", postingRouter);
app.use("/api", authRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
