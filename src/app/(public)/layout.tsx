import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return <main className="my-6">{children}</main>;
}
