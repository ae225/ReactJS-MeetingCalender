import React, { useState, useRef, useEffect } from 'react';
import { deleteMeeting } from '../../services/MeetingAPI';

const MeetingList = ({ meetings, onMeetingDeleted, onEditMeeting }) => {
  const [confirmDelete, setConfirmDelete] = useState(null);
  const confirmRowRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (confirmRowRef.current && !confirmRowRef.current.contains(event.target)) {
        setConfirmDelete(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDelete = async (id) => {
    try {
      const result = await deleteMeeting(id);
      if (result.success) {
        onMeetingDeleted();
        setConfirmDelete(null);
      } else {
        alert('Failed to delete meeting: ' + result.error);
      }
    } catch (error) {
      alert('Error deleting meeting: ' + error.message);
    }
  };

  return (
    <table>
      {/* Map through meetings */}
      {meetings.map((meeting) => (
        <React.Fragment key={meeting.id}>
          <tr>
            <td>{meeting.title}</td>
            <td>
              <button onClick={() => onEditMeeting(meeting)}>Edit</button>
              <button onClick={() => setConfirmDelete(meeting.id)}>Delete</button>
            </td>
          </tr>
          {confirmDelete === meeting.id && (
            <tr ref={confirmRowRef}>
              <td>Are you sure?</td>
              <td>
                <button onClick={() => handleDelete(meeting.id)}>Yes</button>
                <button onClick={() => setConfirmDelete(null)}>No</button>
              </td>
            </tr>
          )}
        </React.Fragment>
      ))}
    </table>
  );
};

export default MeetingList;
