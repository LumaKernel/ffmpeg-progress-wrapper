export class FFMpegError extends Error {
  public code: number;
  public signal: string;
  public args: string[];
  public killedByUser: boolean;
}