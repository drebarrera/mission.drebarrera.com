import { useEffect, useState } from "react"

export default function SMTypewriterText({ children, className, show=true, triggerNode, timeout, step, onFinish, spaceLatency, onClick }) {
  const [showContent, setShowContent] = useState(false);
  const [charShown, setCharShown] = useState(0);

  useEffect(() => {
    if (!showContent) return;

    const timeouts = [];

    var space_latency = 0;
    for (let i = 0; i < children.length; i++) {
      if (children[i] == ' ') space_latency += spaceLatency || 0;
      const t = setTimeout(() => {
        setCharShown(i + 1);
      }, (i * step) + space_latency + (timeout || 0));
      timeouts.push(t);
    }

    if (onFinish) {
      const finishTimeout = setTimeout(() => {
        onFinish();
      }, ((children.length + 1) * step) + space_latency + (timeout || 0));
      timeouts.push(finishTimeout);
    }
    
    return () => timeouts.forEach(clearTimeout);
  }, [showContent]);

  return show && !showContent ? <p 
    className="text-base md:text-lg font-medium cursor-pointer text-[#bbbbbb] hover:text-[#ffffff] fill-[#bbbbbb] hover:fill-[#ffffff]" 
    onClick={() => setShowContent(true)}
  >
    {triggerNode ?? "✦"}
  </p> : <div className={`${className} overflow-clip`} onClick={onClick && (() => onClick())}>
    {children.substring(0, charShown)}
  </div>
}