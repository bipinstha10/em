import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Enable CORS for the specified origin and allow cookies/credentials.
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Limit incoming JSON payload size to prevent large or malicious requests
// from overwhelming the server.
app.use(
  express.json({
    limit: "16kb",
  })
);

// Parse URL-encoded data (e.g., form submissions).
// Browsers encode special characters in URLs (e.g., space → %20).
// The `extended` option tells Express how to handle nested objects or simple key-value pairs.
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

app.use(express.static("public"));

app.use(cookieParser());

export { app };
