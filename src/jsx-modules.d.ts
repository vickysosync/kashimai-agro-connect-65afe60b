// Pages/components are written in plain JSX (project requirement). These
// ambient declarations let the TypeScript route files import them.
declare module "@/views/*" {
  const Component: (props: Record<string, unknown>) => import("react").ReactNode;
  export default Component;
}
declare module "@/context/AppContext" {
  export const AppProvider: (props: { children: import("react").ReactNode }) => import("react").ReactNode;
  export function useApp(): any;
}
