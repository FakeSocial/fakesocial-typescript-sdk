import { createTransport } from "./core/transport";
import { createAuthApi } from "./modules/auth";
import { createContentApi } from "./modules/content";
import { createModerationApi } from "./modules/moderation";
import { createOAuthApi } from "./modules/oauth";
import { createUsersApi } from "./modules/users";
import type { ClientOptions, QueryParams } from "./types";

export class FakeMediaClient {
  readonly auth;
  readonly oauth;
  readonly users;
  readonly me;
  readonly posts;
  readonly conversations;
  readonly notifications;
  readonly achievements;
  readonly reports;
  readonly appeals;
  readonly admin;
  readonly platform;

  private readonly transport;
  private readonly options: ClientOptions;

  constructor(options: ClientOptions = {}) {
    this.options = options;
    this.transport = createTransport(options);

    this.auth = createAuthApi(this.transport);
    this.oauth = createOAuthApi(this.transport);

    const usersApi = createUsersApi(this.transport);
    this.users = usersApi;
    this.me = usersApi.me;

    const contentApi = createContentApi(this.transport);
    this.posts = contentApi.posts;
    this.conversations = contentApi.conversations;
    this.notifications = contentApi.notifications;
    this.achievements = contentApi.achievements;
    this.platform = contentApi.platform;

    const moderationApi = createModerationApi(this.transport);
    this.reports = moderationApi.reports;
    this.appeals = moderationApi.appeals;
    this.admin = moderationApi.admin;
  }

  withToken(token: string | undefined): FakeMediaClient {
    return new FakeMediaClient({
      ...this.options,
      token,
    });
  }

  setToken(token: string | undefined): this {
    this.transport.setToken(token);
    return this;
  }

  buildUrl(path: string, query?: QueryParams): string {
    return this.transport.buildUrl(path, query);
  }

  request<T = unknown>(
    method: Parameters<typeof this.transport.request>[0],
    path: string,
    options?: Parameters<typeof this.transport.request>[2],
  ) {
    return this.transport.request<T>(method, path, options);
  }

  get<T = unknown>(
    path: string,
    options?: Parameters<typeof this.transport.get>[1],
  ) {
    return this.transport.get<T>(path, options);
  }

  post<T = unknown>(
    path: string,
    body?: unknown,
    options?: Parameters<typeof this.transport.post>[2],
  ) {
    return this.transport.post<T>(path, body, options);
  }

  put<T = unknown>(
    path: string,
    body?: unknown,
    options?: Parameters<typeof this.transport.put>[2],
  ) {
    return this.transport.put<T>(path, body, options);
  }

  patch<T = unknown>(
    path: string,
    body?: unknown,
    options?: Parameters<typeof this.transport.patch>[2],
  ) {
    return this.transport.patch<T>(path, body, options);
  }

  delete<T = unknown>(
    path: string,
    options?: Parameters<typeof this.transport.delete>[1],
  ) {
    return this.transport.delete<T>(path, options);
  }
}

export function createFakeMediaClient(
  options: ClientOptions = {},
): FakeMediaClient {
  return new FakeMediaClient(options);
}
