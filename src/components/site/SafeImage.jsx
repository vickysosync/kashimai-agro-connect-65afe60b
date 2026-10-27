import { useEffect, useState } from "react";
import { LeafIcon } from "./Icons";

/** Image with a graceful agricultural fallback when the URL is empty or fails. */
export default function SafeImage({ src, alt = "", className = "", ...rest }) {
  const [failed, setFailed] = useState(!src);
  useEffect(() => setFailed(!src), [src]);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt || "Image unavailable"}
        className={`flex flex-col items-center justify-center gap-2 bg-secondary text-secondary-foreground ${className}`}
      >
        <LeafIcon className="h-8 w-8 opacity-60" />
        <span className="px-3 text-center text-xs text-muted-foreground">Image unavailable</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
      {...rest}
    />
  );
}
