import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

import { Tooltip } from "../common/Tooltip";

const ThemeSwitch = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  React.useEffect(() => setMounted(true), []);

  return (
    <Tooltip content={theme === "dark" || resolvedTheme === "dark" ? "Switch To Light Mode" : "Switch To Dark Mode"}>
      <motion.button
        className="ml-1 flex h-11 w-11 items-center justify-center bg-transparent p-0 text-lg sm:ml-4"
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.2 },
        }}
        whileTap={{
          scale: 0.7,
          rotate: 360,
          transition: { duration: 0.2 },
        }}
        aria-label="Toggle Dark Mode"
        type="button"
        onClick={() => setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark")}
      >
        {mounted && (theme === "dark" || resolvedTheme === "dark") ? <FaSun size={20} /> : <FaMoon size={20} />}
      </motion.button>
    </Tooltip>
  );
};

export default ThemeSwitch;
