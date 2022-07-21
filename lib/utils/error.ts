export function isInstanceOfAPIError(object: unknown): object is ApiError {
  return object instanceof ApiError && ("redirectUrl" in object || "notFound" in object);
}

export class ApiError extends Error {
  redirectUrl: string = "";

  notFound: boolean = false;
}

export class NotFoundError extends ApiError {
  name = "NotFoundError";

  message = "찾을 수 없습니다.";

  notFound = true;
}

export class ForbiddenError extends ApiError {
  name = "ForbiddenError";

  message = "인증처리에 실패했습니다.";

  redirectUrl = "/error";
}

export class AuthError extends ApiError {
  name = "AuthError";

  message = "인증되지 않은 사용자입니다.";

  redirectUrl = "/auth";
}
