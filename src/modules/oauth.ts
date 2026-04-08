import type { TransportLike } from '../core/transport';
import type { OAuthApplicationInput, OAuthAuthorizeInput, OAuthTokenInput } from '../types';

export function createOAuthApi(transport: TransportLike) {
  return {
    token: <T = unknown>(input: OAuthTokenInput) => transport.post<T>('/api/oauth/token', input),
    revoke: <T = unknown>(input: Record<string, unknown>) => transport.post<T>('/api/oauth/revoke', input),
    me: <T = unknown>(accessToken?: string) => transport.get<T>('/api/oauth/me', { token: accessToken }),
    buildAuthorizeUrl: (input: OAuthAuthorizeInput) => transport.buildUrl('/api/oauth/authorize', input),
    applications: {
      list: <T = unknown>() => transport.get<T>('/api/oauth/applications'),
      create: <T = unknown>(input: OAuthApplicationInput) => transport.post<T>('/api/oauth/applications', input),
      update: <T = unknown>(clientId: string, input: OAuthApplicationInput) => transport.put<T>(`/api/oauth/applications/${encodeURIComponent(clientId)}`, input),
      delete: <T = unknown>(clientId: string) => transport.delete<T>(`/api/oauth/applications/${encodeURIComponent(clientId)}`),
    },
  };
}
