export function getUnlockText(date: string) {
  const today = new Date();
  const target = new Date(date);

  const diffDays = Math.ceil(
    (target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffDays === 1) return "Unlocks tomorrow 💝";
  if (diffDays > 1) {
    return `Unlocks on ${target.toLocaleDateString("en-IN", {
      month: "short",
      day: "numeric",
    })}`;
  }

  return "";
}
