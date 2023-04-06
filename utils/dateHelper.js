const todaysDate = new Date();

const today = todaysDate
    .toLocaleString("sv-SE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    })
    .replace(/-/g, "-");

const oneMonthAgoUnformatted = new Date(
    todaysDate.getFullYear(),
    todaysDate.getMonth() - 1,
    todaysDate.getDate()
);

const oneMonthAgo = oneMonthAgoUnformatted
    .toLocaleString("sv-SE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    })
    .replace(/-/g, "-");
export default { today, oneMonthAgo };
