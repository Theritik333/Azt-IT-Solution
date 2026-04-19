import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import WhatsAppButton from "./components/common/WhatsAppButton";
import { useThemeStore } from "./store/useThemeStore";

function App() {
  const { darkMode } = useThemeStore();

  // 🔥 Apply theme on HTML (IMPORTANT)
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <AppRoutes />
      <WhatsAppButton />
    </>
  );
}

export default App;