export function extractTime(dateString) {
	const date = new Date(dateString);
	const hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());
	return `${hours}:${minutes}`;
}

// Tek haneli sayıları bir önceki sıfır ile doldurmak için yardımcı işlev
function padZero(number) {
	return number.toString().padStart(2, "0");
}
