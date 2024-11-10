import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import fs from 'fs';
import path from 'path';

const { combine, timestamp, printf } = format;

// Ensure archive directory exists
const archiveDir = path.join(__dirname, 'logs/archive');
if (!fs.existsSync(archiveDir)) {
  fs.mkdirSync(archiveDir, { recursive: true });
}

// Define the log format
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

// Create a logger instance
const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    // Transport for today's logs in app.log
    new transports.File({
      filename: 'logs/app.log',
      level: 'info',
    }),

    // DailyRotateFile to move logs to the archive folder with date pattern
    new DailyRotateFile({
      filename: 'logs/archive/application-%DATE%.log', // Archive with date
      datePattern: 'YYYY-MM-DD',
      maxSize: '20m',
      maxFiles: '14d',  // Keep logs for 14 days in the archive
      level: 'info',
    }),

    // Optional: Console logging
    new transports.Console()
  ],
});

// Export the logger to use in other parts of the application
export default logger;
