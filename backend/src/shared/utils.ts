// this utility function checks for environment variables that are used in the app

export const requireEnvVar = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`No environment variable found with key: ${key}`);
  }
  return value;
};
