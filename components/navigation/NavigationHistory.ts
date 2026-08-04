"use client";

let history: string[] = [];

export function pushScreen(screen: string) {
  const last = history[history.length - 1];

  if (last !== screen) {
    history.push(screen);
  }
}

export function popScreen() {
  if (history.length <= 1) {
    return null;
  }

  history.pop();

  return history[history.length - 1];
}

export function currentScreen() {
  return history[history.length - 1] ?? "home";
}

export function clearHistory() {
  history = [];
}