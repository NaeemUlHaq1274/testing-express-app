import express from "express";
import { jsonResponseMiddleware } from "./middlewares/json-response";
import postingRouter from "./routes/postingRoutes";
import authRoutes from "./routes/authRoutes";
import { configuration } from "./configuration";
import { errorHandler, notFound, rateLimitMiddleware } from "./middlewares";

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
