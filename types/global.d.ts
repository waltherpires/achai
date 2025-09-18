
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      params?: { [key: string]: any }
    ) => void;
  }
}

export {};