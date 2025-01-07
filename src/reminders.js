const reminders = JSON.parse(localStorage.getItem('reminders')) || [];

export function addReminder(reminderText) {
  const reminder = {
    id: new Date().getTime(),
    text: reminderText,
    createdAt: new Date()
  };
  reminders.push(reminder);
  localStorage.setItem('reminders', JSON.stringify(reminders));
  return `Я напомню вам: ${reminderText}`;
}

export function getReminders() {
  return reminders;
}
