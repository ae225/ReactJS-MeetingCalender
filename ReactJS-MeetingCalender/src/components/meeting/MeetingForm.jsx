import React, { useState } from "react";

const MeetingForm = ({ addMeeting }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    level: "",
    participants: "",
    description: "",
  });

  const [error, setError] = useState("");

  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedDate = new Date(`${formData.date}T${formData.time}:00`);

    if (selectedDate < currentDate) {
      setError("You cannot schedule a meeting in the past.");
      return;
    }

    setError("");
    addMeeting(formData);
    setFormData({
      title: "",
      date: "",
      time: "",
      level: "",
      participants: "",
      description: "",
    });
  };

  return (
    <div className="card shadow p-4">
      <h2 className="text-primary">Schedule a New Meeting</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Meeting Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter meeting title"
            required
          />
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Meeting Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="form-control"
              required
              min={currentDateString}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Meeting Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label className="form-label">Meeting Level</label>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Choose level</option>
            <option value="Team">Team</option>
            <option value="Department">Department</option>
            <option value="Organization">Organization</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Participants</label>
          <input
            type="email"
            name="participants"
            value={formData.participants}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter participant emails"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter meeting description"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          + Create Meeting
        </button>
      </form>
    </div>
  );
};

export default MeetingForm;
