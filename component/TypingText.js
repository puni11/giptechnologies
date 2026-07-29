"use client";

import { useEffect, useState } from "react";

export default function TypingText() {
  const text =
    "Don't Rely on Reports Full of Clicks and Impressions, Trust the Increasing Numbers in Your Revenue";

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting) {
      if (displayText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, 50); // Typing speed
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Pause after typing
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length - 1));
        }, 30); // Erasing speed
      } else {
        setIsDeleting(false); // Start typing again
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <p className="text-gray-800 text-md md:text-2xl font-semibold leading-relaxed">
      {displayText}
      <span className="animate-blink">|</span>
    </p>
  );
}