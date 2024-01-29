import pino from "pino";

const pinoConfig = {
  // level: process.env.LOG_LEVEL,だと「default level:debug; must be included in custom levels」エラー
  level: "debug",
  formatters: {
    level: (label: string) => {
      return {
        level: label,
      };
    },
  },
  timestamp: () =>
    `,"timestamp":"${new Date(Date.now()).toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
    })}"`,
  browser: {
    asObject: true,
  },
};

export const logger = pino(pinoConfig);
