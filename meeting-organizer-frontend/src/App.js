import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MeetingForm from './components/MeetingForm';
import MeetingList from './components/MeetingList';

const App = () => {
  const [meetings, setMeetings] = useState([]);
  const [currentMeeting, setCurrentMeeting] = useState(null);

  useEffect(() => {
    fetchMeetings();
  }, []);

  const fetchMeetings = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/meetings/');
      setMeetings(response.data);
    } catch (error) {
      console.error('Toplantıları çekerken hata:', error);
    }
  };

  const handleFormSubmit = (meetingData) => {
    if (currentMeeting) {
      updateMeeting(meetingData, currentMeeting.id);
    } else {
      addMeeting(meetingData);
    }
  };

  const addMeeting = async (meetingData) => {
    try {
      await axios.post('http://localhost:8000/api/meetings/', meetingData);
      fetchMeetings();
    } catch (error) {
      console.error('Toplantı eklerken hata:', error);
    }
  };

  const updateMeeting = async (meetingData, meetingId) => {
    try {
      await axios.put(`http://localhost:8000/api/meetings/${meetingId}/`, meetingData);
      fetchMeetings();
    } catch (error) {
      console.error('Toplantı güncellerken hata:', error);
    }
  };

  const deleteMeeting = async (meetingId) => {
    try {
      await axios.delete(`http://localhost:8000/api/meetings/${meetingId}/`);
      fetchMeetings();
    } catch (error) {
      console.error('Toplantı silerken hata:', error);
    }
  };

  const editMeeting = (meeting) => {
    setCurrentMeeting(meeting);
  };

  return (
    <div>
      <h1>Meeting Organizer</h1>
      <MeetingForm
        onSubmit={handleFormSubmit}
        initialData={currentMeeting || {}}
        editMode={!!currentMeeting}
      />
      <MeetingList
        meetings={meetings}
        onEdit={editMeeting}
        onDelete={deleteMeeting}
      />
    </div>
  );
};

export default App;








