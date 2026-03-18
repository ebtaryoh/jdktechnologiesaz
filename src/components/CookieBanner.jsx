import { useEffect, useState } from "react";
import Button from "./Button";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("jdk_cookie_ok");
    if (!saved) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 rounded-2xl border border-gray-800 bg-jdk-dark/90 p-4 shadow-2xl backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-300">
            This website uses cookies to analyze traffic and optimize your experience. By accepting, your data will be aggregated with all other user data.
          </p>
          <Button
            variant="ghost"
            onClick={() => {
              localStorage.setItem("jdk_cookie_ok", "1");
              setShow(false);
            }}
            className="whitespace-nowrap"
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
}