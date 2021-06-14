export default function logger(logName: string) {
  const log = console.log.bind(console, logName);
  return log;
}
