import type { TransportLike } from '../core/transport';
import type { AuthLoginInput, AuthSignupInput, ForgotPasswordInput, ResetPasswordInput, TotpDisableInput, TotpSetupInput, TotpVerifyInput } from '../types';

export function createAuthApi(transport: TransportLike) {
  return {
    login: <T = unknown>(input: AuthLoginInput) => transport.post<T>('/api/auth/login', input),
    signup: <T = unknown>(input: AuthSignupInput) => transport.post<T>('/api/auth/signup', input),
    logout: <T = unknown>() => transport.post<T>('/api/auth/logout'),
    forgotPassword: <T = unknown>(input: ForgotPasswordInput) => transport.post<T>('/api/auth/forgot-password', input),
    resetPassword: <T = unknown>(input: ResetPasswordInput) => transport.post<T>('/api/auth/reset-password', input),
    verifyEmail: <T = unknown>(input: Record<string, unknown>) => transport.post<T>('/api/auth/verify-email', input),
    totpSetup: <T = unknown>(input: TotpSetupInput) => transport.post<T>('/api/auth/totp/setup', input),
    totpVerify: <T = unknown>(input: TotpVerifyInput) => transport.post<T>('/api/auth/totp/verify', input),
    totpDisable: <T = unknown>(input: TotpDisableInput) => transport.post<T>('/api/auth/totp/disable', input),
    passkeyAuthOptions: <T = unknown>(input: Record<string, unknown>) => transport.post<T>('/api/auth/passkey/auth-options', input),
    passkeyAuthVerify: <T = unknown>(input: Record<string, unknown>) => transport.post<T>('/api/auth/passkey/auth-verify', input),
    passkeyRegisterOptions: <T = unknown>(input: Record<string, unknown>) => transport.post<T>('/api/auth/passkey/register-options', input),
    passkeyRegisterVerify: <T = unknown>(input: Record<string, unknown>) => transport.post<T>('/api/auth/passkey/register-verify', input),
    passkeyList: <T = unknown>() => transport.get<T>('/api/auth/passkey/list'),
    passkeyRemove: <T = unknown>(input: Record<string, unknown>) => transport.post<T>('/api/auth/passkey/remove', input),
  };
}
