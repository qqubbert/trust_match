import { useRef, useEffect, useCallback } from 'react';

export const useLongPress = (
  onLongPress: () => void,
  onRelease: () => void,
  delay = 250
) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const targetRef = useRef<HTMLElement | null>(null);
  const movedRef = useRef(false);

  const clear = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const handlePressStart = useCallback(() => {
    clear();
    movedRef.current = false;
    timerRef.current = setTimeout(() => {
      if (!movedRef.current) {
        onLongPress();
      }
    }, delay);
  }, [onLongPress, delay]);

  const handlePressMove = useCallback(() => {
    movedRef.current = true;
    clear();
  }, []);

  const handlePressEnd = useCallback(() => {
    clear();
    onRelease();
  }, [onRelease]);

  const register = useCallback((node: HTMLElement | null) => {
    if (targetRef.current) {
      targetRef.current.removeEventListener('mousedown', handlePressStart);
      targetRef.current.removeEventListener('mouseup', handlePressEnd);
      targetRef.current.removeEventListener('mouseleave', handlePressEnd);
      targetRef.current.removeEventListener('mousemove', handlePressMove);

      targetRef.current.removeEventListener('touchstart', handlePressStart);
      targetRef.current.removeEventListener('touchend', handlePressEnd);
      targetRef.current.removeEventListener('touchcancel', handlePressEnd);
      targetRef.current.removeEventListener('touchmove', handlePressMove);
    }

    if (node) {
      node.addEventListener('mousedown', handlePressStart);
      node.addEventListener('mouseup', handlePressEnd);
      node.addEventListener('mouseleave', handlePressEnd);
      node.addEventListener('mousemove', handlePressMove);

      node.addEventListener('touchstart', handlePressStart);
      node.addEventListener('touchend', handlePressEnd);
      node.addEventListener('touchcancel', handlePressEnd);
      node.addEventListener('touchmove', handlePressMove);
    }

    targetRef.current = node;
  }, [handlePressStart, handlePressEnd, handlePressMove]);

  useEffect(() => () => clear(), []);

  return register;
};
