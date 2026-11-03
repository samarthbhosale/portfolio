"use client";

export function BackToTop() {
  function handleClick() {
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`,
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-foreground"
    >
      Back to top ↑
    </button>
  );
}
