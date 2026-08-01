import "winston-daily-rotate-file";
import winston from "winston";
import path from "node:path";
import fs from "node:fs";

const __dirname = path.dirname(import.meta.filename);
const logDir = path.join(__dirname, "..", "..", "logs");

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const appTransport = new winston.transports.DailyRotateFile({
  filename: path.join(logDir, "%DATE%-app"),
  extension: ".json",
  datePattern: "YYYY-MM-DD",
  maxSize: "10m",
  maxFiles: "62d",
  auditFile: path.join(logDir, ".app-audit.json"),
});

const errTransport = new winston.transports.DailyRotateFile({
    filename: path.join(logDir, "%DATE%-error"),
    extension: ".json",
    datePattern: "YYYY-MM-DD",
    maxSize: "10m",
    maxFiles: "62d",
    auditFile: path.join(logDir, ".error-audit.json"),
    level: "error"
})

// define config
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
  ),
  transports: [appTransport, errTransport],
});

export { logger }