const BASE_URL = 'http://localhost:8080/api';
const MEETINGS_URL = `${BASE_URL}/meetings`;

export const getAllMeetings = async () => {
  const response = await fetch(MEETINGS_URL);
  if (!response.ok) throw new Error('Failed to fetch meetings');
  return response.json();
};

export const deleteMeeting = async (id) => {
  const response = await fetch(`${MEETINGS_URL}/${id}`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Failed to delete meeting');
  return { success: true };
};
