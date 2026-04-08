import type { TransportLike } from "../core/transport";
import type { QueryParams, UserUpdateInput } from "../types";

export function createUsersApi(transport: TransportLike) {
  return {
    list: <T = unknown>(query?: QueryParams) =>
      transport.get<T>("/api/users", { query }),
    follow: <T = unknown>(userId: string) =>
      transport.post<T>(`/api/users/${encodeURIComponent(userId)}/follow`),
    block: <T = unknown>(userId: string) =>
      transport.post<T>(`/api/users/${encodeURIComponent(userId)}/block`),
    following: <T = unknown>(userId: string, query?: QueryParams) =>
      transport.get<T>(`/api/users/${encodeURIComponent(userId)}/following`, {
        query,
      }),
    followRequests: <T = unknown>(userId: string) =>
      transport.get<T>(
        `/api/users/${encodeURIComponent(userId)}/follow-requests`,
      ),
    acceptFollowRequest: <T = unknown>(userId: string, requesterId: string) =>
      transport.post<T>(
        `/api/users/${encodeURIComponent(userId)}/follow-requests/${encodeURIComponent(requesterId)}/accept`,
      ),
    rejectFollowRequest: <T = unknown>(userId: string, requesterId: string) =>
      transport.post<T>(
        `/api/users/${encodeURIComponent(userId)}/follow-requests/${encodeURIComponent(requesterId)}/reject`,
      ),
    me: {
      get: <T = unknown>() => transport.get<T>("/api/me"),
      update: <T = unknown>(input: UserUpdateInput) =>
        transport.patch<T>("/api/me", input),
      delete: <T = unknown>(input: Record<string, unknown>) =>
        transport.post<T>("/api/me/delete", input),
      disable: <T = unknown>() => transport.post<T>("/api/me/disable"),
      export: <T = unknown>() => transport.get<T>("/api/me/export"),
    },
  };
}
