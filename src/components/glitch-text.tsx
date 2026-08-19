"use client";

type GlitchTextProps = {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "span" | "p";
  subtle?: boolean;
};

export function GlitchText({
  children,
  className = "",
  as: Tag = "span",
  subtle = false,
}: GlitchTextProps) {
  return (
    <Tag
      className={`glitch-text ${subtle ? "glitch-text-subtle" : ""} ${className}`}
      data-text={subtle ? children : undefined}
    >
      {children}
    </Tag>
  );
}
