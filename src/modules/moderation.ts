import type { TransportLike } from "../core/transport";
import type {
  AppealCreateInput,
  AppealResolveInput,
  ReportCreateInput,
  ReportResolveInput,
} from "../types";

export function createModerationApi(transport: TransportLike) {
  return {
    reports: {
      list: <T = unknown>() => transport.get<T>("/api/reports"),
      create: <T = unknown>(input: ReportCreateInput) =>
        transport.post<T>("/api/reports", input),
      resolve: <T = unknown>(reportId: string, input: ReportResolveInput) =>
        transport.patch<T>(
          `/api/reports/${encodeURIComponent(reportId)}`,
          input,
        ),
    },
    appeals: {
      list: <T = unknown>() => transport.get<T>("/api/appeals"),
      create: <T = unknown>(input: AppealCreateInput) =>
        transport.post<T>("/api/appeals", input),
      resolve: <T = unknown>(appealId: string, input: AppealResolveInput) =>
        transport.patch<T>(
          `/api/appeals/${encodeURIComponent(appealId)}`,
          input,
        ),
    },
    admin: {
      disableUser: <T = unknown>(
        userId: string,
        input: Record<string, unknown> = {},
      ) =>
        transport.post<T>(
          `/api/admin/users/${encodeURIComponent(userId)}/disable`,
          input,
        ),
    },
  };
}
