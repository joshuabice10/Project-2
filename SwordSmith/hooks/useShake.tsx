import { Accelerometer } from "expo-sensors";
import { useEffect, useRef } from "react";

export function useShake(onShake: () => void) {
  const lastTime = useRef(0);

  useEffect(() => {
    Accelerometer.setUpdateInterval(100);

    const subscription = Accelerometer.addListener(({ x, y, z }) => {
      const magnitude = Math.sqrt(x * x + y * y + z * z);
      const now = Date.now();

      if (magnitude > 1.4 && now - lastTime.current > 150) {
        lastTime.current = now;
        onShake();
      }
    });

    // Stop listening when component unmounts
    return () => subscription.remove();
  }, [onShake]);
}
