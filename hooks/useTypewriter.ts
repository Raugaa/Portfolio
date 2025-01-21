"use client";

import { useState, useEffect } from 'react';

export function useTypewriter(words: string[], typingSpeed = 150, deletingSpeed = 100, delayBetweenWords = 2000) {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      if (displayedText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        timeout = setTimeout(() => {}, delayBetweenWords);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      if (displayedText === currentWord) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return displayedText;
}