import React, { createContext, useContext, useEffect, useState } from "react";
import { STORAGE_KEYS } from "../storage/keys";
import { loadJSON, saveJSON } from "../storage/storage";

type GoldContextType = {
  gold: number;
  addGold: (amount: number) => void;
  spendGold: (amount: number) => void;
  resetGold: () => void;
  autoGoldRate: number;
  increaseAutoGoldRate: (amount: number) => void;
};

const GoldContext = createContext<GoldContextType | undefined>(undefined);

export const GoldProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [gold, setGold] = useState(0);
  const [autoGoldRate, setAutoGoldRate] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const saved = await loadJSON<{ gold: number; autoGoldRate: number }>(
        STORAGE_KEYS.GOLD
      );
      if (saved) {
        setGold(saved.gold);
        setAutoGoldRate(saved.autoGoldRate);
      }
      setReady(true);
    })();
  }, []);

  useEffect(() => {
    if (!ready) return;
    saveJSON(STORAGE_KEYS.GOLD, { gold, autoGoldRate });
  }, [gold, autoGoldRate, ready]);

  const addGold = (amount: number) => setGold((prev) => prev + amount);
  const spendGold = (amount: number) =>
    setGold((prev) => Math.max(prev - amount, 0));
  const resetGold = () => setGold(0);
  const increaseAutoGoldRate = (amount: number) =>
    setAutoGoldRate((prev) => prev + amount);

  useEffect(() => {
    if (autoGoldRate <= 0) return;
    const interval = setInterval(() => {
      setGold((prev) => prev + autoGoldRate);
    }, 1000);
    return () => clearInterval(interval);
  }, [autoGoldRate]);

  if (!ready) return null;

  return (
    <GoldContext.Provider
      value={{
        gold,
        addGold,
        spendGold,
        resetGold,
        autoGoldRate,
        increaseAutoGoldRate,
      }}
    >
      {children}
    </GoldContext.Provider>
  );
};

export const useGold = () => {
  const context = useContext(GoldContext);
  if (!context) throw new Error("useGold must be used within a GoldProvider");
  return context;
};
