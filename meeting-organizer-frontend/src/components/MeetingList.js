import React from 'react';

function MeetingList({ meetings, onEdit, onDelete }) {
  return (
    <div>
      <h2>Toplantı Listesi</h2>
      <ul>
        {meetings.map((meeting, index) => (
          <li key={index}>
            <div>
              <strong>Konu:</strong> {meeting.topic}<br />
              <strong>Tarih:</strong> {meeting.date}<br />
              <strong>Başlangıç Saati:</strong> {meeting.start_time}<br />
              <strong>Bitiş Saati:</strong> {meeting.end_time}<br />
              <strong>Katılımcılar:</strong> {meeting.participants}<br />
              <button onClick={() => onEdit(meeting)}>Düzenle</button>
              <button onClick={() => onDelete(meeting.id)}>Sil</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MeetingList;



