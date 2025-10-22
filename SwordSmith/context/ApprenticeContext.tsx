import React, { createContext, useContext, useEffect, useState } from "react";
import { STORAGE_KEYS } from "../storage/keys";
import { loadJSON, saveJSON } from "../storage/storage";

type ApprenticeContextType = {
  level: number;
  upgradeCost: number;
  autoGold: number;
  upgradeApprentice: () => void;
  resetApprentice: () => void;
  increaseAutoGold: () => void;
};

const ApprenticeContext = createContext<ApprenticeContextType | undefined>(
  undefined
);

export const ApprenticeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [level, setLevel] = useState(1);
  const [upgradeCost, setUpgradeCost] = useState(100);
  const [autoGold, setAutoGold] = useState(2);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const saved = await loadJSON<{
        level: number;
        upgradeCost: number;
        autoGold: number;
      }>(STORAGE_KEYS.APPRENTICE);

      if (saved) {
        setLevel(saved.level);
        setUpgradeCost(saved.upgradeCost);
        setAutoGold(saved.autoGold);
      }
      setReady(true);
    })();
  }, []);

  useEffect(() => {
    if (!ready) return;
    saveJSON(STORAGE_KEYS.APPRENTICE, { level, upgradeCost, autoGold });
  }, [level, upgradeCost, autoGold, ready]);

  const upgradeApprentice = () => {
    setLevel((prev) => prev + 1);
    setUpgradeCost((prev) => Math.floor(prev * 2));
  };

  const increaseAutoGold = () => setAutoGold((prev) => prev * 2);

  const resetApprentice = () => {
    setLevel(1);
    setUpgradeCost(100);
    setAutoGold(1);
  };

  if (!ready) return null;

  return (
    <ApprenticeContext.Provider
      value={{
        level,
        upgradeCost,
        autoGold,
        upgradeApprentice,
        increaseAutoGold,
        resetApprentice,
      }}
    >
      {children}
    </ApprenticeContext.Provider>
  );
};

export const useApprentice = () => {
  const context = useContext(ApprenticeContext);
  if (!context)
    throw new Error("useApprentice must be used within an ApprenticeProvider");
  return context;
};
