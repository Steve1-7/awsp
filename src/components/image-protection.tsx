"use client";

import { useEffect } from "react";

export function ImageProtection() {
  useEffect(() => {
    const preventImageContextMenu = (event: MouseEvent) => {
      if (event.target instanceof HTMLImageElement) event.preventDefault();
    };
    const preventImageDrag = (event: DragEvent) => {
      if (event.target instanceof HTMLImageElement) event.preventDefault();
    };

    document.addEventListener("contextmenu", preventImageContextMenu, true);
    document.addEventListener("dragstart", preventImageDrag, true);

    return () => {
      document.removeEventListener("contextmenu", preventImageContextMenu, true);
      document.removeEventListener("dragstart", preventImageDrag, true);
    };
  }, []);

  return null;
}