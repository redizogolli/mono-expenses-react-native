export const formatDate = (date: Date): string => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const isSameDate = (d1: Date, d2: Date) =>
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();

    if (isSameDate(date, today)) {
        return "Today";
    }

    if (isSameDate(date, yesterday)) {
        return "Yesterday";
    }

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }); // e.g., Jan 16, 2022
}