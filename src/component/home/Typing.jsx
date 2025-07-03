// components/IntroTyping.jsx
import React, { useState, useEffect } from 'react';
import GraphemeSplitter from 'grapheme-splitter';

const Typing = ({ text='', speed = 120, className, onComplete }) => {
  const [displayed, setDisplayed] = useState([]);
  const [index, setIndex] = useState(0);
  const [line, setLine] = useState(0); // 줄 번호 추적
  const [isComplete, setIsComplete] = useState(false);

  // 이모지 단위별로 잘림
  const splitter = new GraphemeSplitter();
  const splitText = splitter.splitGraphemes(text);

  useEffect(() => {
    if (index < splitText.length) {
      const timeout = setTimeout(() => {
        const nextChar = splitText[index];
        if (nextChar === '\n') {
          setLine((prev) => prev + 1);
          setDisplayed((prev) => [...prev, <br key={index} />]);
        } else {
          setDisplayed((prev) => [
            ...prev,
            <span key={index} className={`line-color-${line}`} >
              {nextChar}
            </span>,
          ]);
        }
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      if (onComplete) onComplete();
    }
  }, [index, text, speed, line, onComplete]);

  return (
    <div className={className}>
      {displayed}
      {!isComplete && <span className="cursor">|</span>}
    </div>
  );
};

export default Typing;
