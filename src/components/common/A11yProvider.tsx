import { createContext, useContext, ReactNode } from 'react';

interface A11yContextType {
  announceMessage: (message: string) => void;
}

const A11yContext = createContext<A11yContextType | null>(null);

export function useA11y() {
  const context = useContext(A11yContext);
  if (!context) {
    throw new Error('useA11y must be used within an A11yProvider');
  }
  return context;
}

interface A11yProviderProps {
  children: ReactNode;
}

export function A11yProvider({ children }: A11yProviderProps) {
  const announceMessage = (message: string) => {
    const announcer = document.getElementById('a11y-announcer');
    if (announcer) {
      announcer.textContent = message;
    }
  };

  return (
    <A11yContext.Provider value={{ announceMessage }}>
      {children}
      <div
        id="a11y-announcer"
        role="alert"
        aria-live="polite"
        className="sr-only"
      />
    </A11yContext.Provider>
  );
} 