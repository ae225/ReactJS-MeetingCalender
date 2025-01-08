package se.lexicon.meeting_calender.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import se.lexicon.meeting_calender.model.Meeting;

public interface MeetingRepository extends JpaRepository<Meeting, Long> {
}
