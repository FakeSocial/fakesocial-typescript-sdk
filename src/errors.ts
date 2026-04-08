import type { ApiErrorPayload } from "./types";

export class FakeMediaApiError extends Error {
  readonly status: number;
  readonly payload?: ApiErrorPayload;
  readonly url?: string;
  readonly method?: string;

  constructor(
    message: string,
    status: number,
    options?: { payload?: ApiErrorPayload; url?: string; method?: string },
  ) {
    super(message);
    this.name = "FakeMediaApiError";
    this.status = status;
    this.payload = options?.payload;
    this.url = options?.url;
    this.method = options?.method;
  }
}

export function isFakeMediaApiError(
  error: unknown,
): error is FakeMediaApiError {
  return error instanceof Error && error.name === "FakeMediaApiError";
}
