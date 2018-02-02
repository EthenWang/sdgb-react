export interface Action<T> {
  readonly type: string;
  readonly payload?: T;
}

export function createAction<T>(type: string, payload: T): Action<T> {
  return { type, payload };
}