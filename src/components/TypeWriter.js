import { useState, useEffect } from "react";

const useTypewriter = (text, speed = 60) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};

const Typewriter = ({ text, speed }) => {
  const displayText = useTypewriter(text, speed);

  return <p className="text-black text-md md:text-3xl">{displayText}</p>;
};

export default Typewriter;
