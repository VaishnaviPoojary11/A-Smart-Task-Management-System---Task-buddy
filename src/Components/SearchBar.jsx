import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <span className="search-icon">🔍</span>

      <input
        type="text"
        placeholder="Search your tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <button
          className="clear-search"
          onClick={() => setSearch("")}
          type="button"
        >
          ✕
        </button>
      )}
    </div>
  );
}