export default function ShareRail() {
  return (
    <aside className="share-rail">
      <button aria-label="LinkedIn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
        </svg>
      </button>{" "}
      <button aria-label="WhatsApp">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.6 6.32A7.85 7.85 0 0012.05 4a7.94 7.94 0 00-6.88 11.89L4 20l4.2-1.1a7.93 7.93 0 003.85 1h.01a7.95 7.95 0 005.6-13.58z" />
        </svg>
      </button>{" "}
      <button aria-label="X">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </button>{" "}
      <button aria-label="Copy">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      </button>{" "}
      <div className="count">428</div>{" "}
    </aside>
  );
}
