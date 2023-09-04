import { ReactNode } from "react";
import { LevelContext } from "@/context/LevelContext";
import { useContext } from "react";

export default function Heading({ children }: { children: ReactNode }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1 className="text-9xl text-cyan-200">{children}</h1>;
    case 2:
      return <h2 className="text-7xl">{children}</h2>;
    case 3:
      return <h3 className="text-5xl">{children}</h3>;
    case 4:
      return <h4 className="text-3xl">{children}</h4>;
    case 5:
      return <h5 className="text-xl">{children}</h5>;
    case 6:
      return <h6 className="text-xs">{children}</h6>;
    default:
      throw Error("Unknown level " + level);
  }
}
