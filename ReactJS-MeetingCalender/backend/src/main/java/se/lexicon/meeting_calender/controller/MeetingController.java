package se.lexicon.meeting_calender.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.lexicon.meeting_calender.model.Meeting;
import se.lexicon.meeting_calender.service.MeetingService;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:5173/")

@RestController
@RequestMapping("/api/meetings")
public class MeetingController {

    private final MeetingService meetingService;

    public MeetingController(MeetingService meetingService) {
        this.meetingService = meetingService;
    }

    @GetMapping
    public List<Meeting> getAllMeetings() {
        return meetingService.getAllMeetings();
    }

    @PostMapping
    public Meeting createMeeting(@RequestBody Meeting meeting) {
        return meetingService.saveMeeting(meeting);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Meeting> updateMeeting(@PathVariable Long id, @RequestBody Meeting updatedMeeting) {
        return meetingService.getMeetingById(id)
                .map(meeting -> {
                    meeting.setTitle(updatedMeeting.getTitle());
                    meeting.setDateTime(updatedMeeting.getDateTime());
                    meeting.setLevel(updatedMeeting.getLevel());
                    meeting.setParticipants(updatedMeeting.getParticipants());
                    meeting.setDescription(updatedMeeting.getDescription());
                    return ResponseEntity.ok(meetingService.saveMeeting(meeting));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMeeting(@PathVariable Long id) {
        if (meetingService.getMeetingById(id).isPresent()) {
            meetingService.deleteMeeting(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}