import React, { useState } from "react";
import MeetingForm from "./MeetingForm";
import MeetingList from "./MeetingList";

const MeetingCalendar = () => {
  const [meetings, setMeetings] = useState([]);

  const addMeeting = (meeting) => {
    setMeetings((prev) => [...prev, meeting]);
  };

  return (
    <div className="container mt-5">
      <MeetingForm addMeeting={addMeeting} />

      {meetings.length > 0 && <MeetingList meetings={meetings} />}
    </div>
  );
};

export default MeetingCalendar;
