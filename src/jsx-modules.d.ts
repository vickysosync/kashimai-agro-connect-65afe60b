// Pages/components are written in plain JSX (project requirement). These
// ambient declarations let the TypeScript route files import them.
declare module "@/views/*" {
  const Component: (props: Record<string, unknown>) => import("react").ReactNode;
  export default Component;
}
declare module "@/context/AppContext" {
  export const AppProvider: (props: { children: import("react").ReactNode }) => import("react").ReactNode;
  export function useApp(): any;
  export function formatContactValue(value: unknown, placeholder?: string): string;
}
declare module "@/data/mockData" {
  export const ADMIN_SESSION_KEY: string;
  export const DEMO_CREDENTIALS: { username: string; password: string };
  export const GALLERY_CATEGORIES: string[];
  export function initialData(): any;
}
