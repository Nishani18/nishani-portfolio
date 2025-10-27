import React, { useState, useEffect } from "react";

const TerminalAnimation: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [step, setStep] = useState<"whoami" | "intro" | "done">("whoami");

  const whoami = "whoami";
  const intro =
    "I am a Software Engineer with 2+ years of experience building scalable, responsive web applications using React.js, Next.js, and modern CSS frameworks. Skilled in frontend architecture, API integration, and collaborating with cross-functional teams to deliver high-quality, production-ready code from designs.";

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (step === "whoami" && displayedText.length < whoami.length) {
      timeout = setTimeout(() => {
        setDisplayedText(whoami.slice(0, displayedText.length + 1));
      }, 120);
    } else if (step === "whoami" && displayedText.length === whoami.length) {
      timeout = setTimeout(() => {
        setStep("intro");
        setDisplayedText(""); // clear for next typing
      }, 600);
    } else if (step === "intro" && displayedText.length < intro.length) {
      timeout = setTimeout(() => {
        setDisplayedText(intro.slice(0, displayedText.length + 1));
      }, 20); // faster typing for paragraph
    } else if (step === "intro" && displayedText.length === intro.length) {
      setStep("done");
    }

    return () => clearTimeout(timeout);
  }, [displayedText, step]);

  return (
    <div className="relative h-96 w-full rounded-lg bg-gray-900 shadow-xl overflow-hidden flex flex-col justify-between p-4 font-mono text-sm text-green-400">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 pb-2 border-b border-gray-700">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-gray-400">nishani@portfolio: ~$</span>
      </div>

      {/* Terminal Output Area */}
      <div className="flex-1 overflow-auto py-3 text-green-400">
        {/* whoami typing */}
        <p className="flex items-center">
          <span className="text-gray-400 mr-2">nishani@portfolio:~$</span>
          <span>{step === "whoami" ? displayedText : "whoami"}</span>
          {step !== "done" && <span className="animate-pulse">_</span>}
        </p>

        {/* intro typing */}
        {step !== "whoami" && (
          <p className="mt-4 leading-relaxed whitespace-pre-line text-gray-300">
            {displayedText}
            {step !== "done" && <span className="animate-pulse">_</span>}
          </p>
        )}
      </div>
    </div>
  );
};

export default TerminalAnimation;
