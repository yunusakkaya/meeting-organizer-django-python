import React, { useState, useEffect } from 'react';

const MeetingForm = ({ onSubmit, initialData = {}, editMode = false }) => {
  const [meeting, setMeeting] = useState(initialData);

  useEffect(() => {
    if (editMode) {
      setMeeting(initialData);
    } else {
      setMeeting({
        topic: '',
        date: '',
        start_time: '',
        end_time: '',
        participants: ''
      });
    }
  }, [initialData, editMode]);

  const handleChange = (e) => {
    setMeeting({ ...meeting, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(meeting);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Toplantı Konusu:</label>
        <input
          type="text"
          name="topic"
          value={meeting.topic}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Tarih:</label>
        <input
          type="date"
          name="date"
          value={meeting.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Başlangıç Saati:</label>
        <input
          type="time"
          name="start_time"
          value={meeting.start_time}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Bitiş Saati:</label>
        <input
          type="time"
          name="end_time"
          value={meeting.end_time}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Katılımcılar:</label>
        <input
          type="text"
          name="participants"
          value={meeting.participants}
          onChange={handleChange}
        />
      </div>
      <button type="submit">{editMode ? 'Güncelle' : 'Ekle'}</button>
    </form>
  );
};

export default MeetingForm;



