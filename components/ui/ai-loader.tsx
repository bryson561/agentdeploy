import { cn } from "@/lib/utils";

interface AILoaderProps {
  /** Word shown in the loader. Defaults to "Generating". */
  text?: string;
  className?: string;
}

/**
 * Circular AI loader — a rotating emerald/teal glow ring with animated
 * letters spelling the given word. Matches the AgentDeploy teal palette.
 */
export function AILoader({ text = "Generating", className }: AILoaderProps) {
  return (
    <div className={cn("loader-wrapper", className)}>
      {text.split("").map((letter, i) => (
        <span
          key={`${letter}-${i}`}
          className="loader-letter"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {letter}
        </span>
      ))}
      <div className="loader" />
    </div>
  );
}

export default AILoader;
