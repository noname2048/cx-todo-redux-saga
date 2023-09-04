import { LevelContext } from "@/context/LevelContext";
import { ReactNode, useContext } from "react";

export default function Section({ children }: { children?: ReactNode }) {
  const level = useContext(LevelContext);
  return (
    <section className="section border rounded-3xl p-5">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
