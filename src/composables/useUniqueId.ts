let id = 0;

export const useUniqueId = (prefix = 'id'): string => `${prefix}-${++id}`;
