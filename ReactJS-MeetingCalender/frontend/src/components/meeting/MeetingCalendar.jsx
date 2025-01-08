import { useState, useEffect } from 'react';
import { getAllMeetings } from '../../services/MeetingAPI';
import MeetingForm from './MeetingForm';
import MeetingList from './MeetingList';

const MeetingCalendar = () => {
  const [meetings, setMeetings] = useState([]);
  const [editingMeeting, setEditingMeeting] = useState(null);

  const loadMeetings = async () => {
    try {
      const data = await getAllMeetings();
      setMeetings(data);
    } catch (error) {
      console.error('Error loading meetings:', error);
    }
  };

  useEffect(() => {
    loadMeetings();
  }, []);

  const handleEditMeeting = (meeting) => setEditingMeeting(meeting);

  return (
    <div>
      <MeetingForm 
        onMeetingAdded={loadMeetings} 
        editingMeeting={editingMeeting} 
        onMeetingUpdated={() => {
          loadMeetings();
          setEditingMeeting(null);
        }}
      />
      <MeetingList 
        meetings={meetings} 
        onEditMeeting={handleEditMeeting} 
        onMeetingDeleted={loadMeetings} 
      />
    </div>
  );
};

export default MeetingCalendar;
