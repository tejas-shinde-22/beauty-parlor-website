import { useEffect } from "react";

export const usePageMeta = (title, description) => {
  useEffect(() => {
    document.title = `${title} — Unique Beauty Parlour`;
    const tag = document.querySelector('meta[name="description"]');
    if (tag && description) tag.setAttribute("content", description);
  }, [title, description]);
};
