import CursorsProvider from "./cursors-provider";
import Cursors from "./Cursors";

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Provide the context of a player(cursor)
    <CursorsProvider>
      {/* Show cursor of other players */}
      <Cursors />
      {children}
    </CursorsProvider>
  );
}
