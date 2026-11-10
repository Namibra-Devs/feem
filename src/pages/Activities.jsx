import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Activities() {
  const schedule = [
    {
      day: 'Monday',
      activity: 'Academic Support & Literacy Clinic',
      time: '3:30 PM – 5:30 PM',
      target: 'Basic & JHS Students',
      description:
        'Guided homework assistance, reading circles, and peer tutoring sessions focused on STEM and English language competency.'
    },
    {
      day: 'Tuesday',
      activity: 'Life Skills & Mentorship Circles',
      time: '4:00 PM – 5:30 PM',
      target: 'Adolescent Girls (Ages 12–18)',
      description:
        'Structured small-group mentorship exploring self-esteem, boundary setting, conflict resolution, and personal goal mapping.'
    },
    {
      day: 'Wednesday',
      activity: 'Vocational Crafting: Soap & Detergent Making',
      time: '3:30 PM – 5:30 PM',
      target: 'Young Women & Out-of-school Youth',
      description:
        'Hands-on formulation, safety protocols, packaging, and micro-sales training for liquid hand soap and multipurpose detergents.'
    },
    {
      day: 'Thursday',
      activity: 'Sexual & Reproductive Health Education (SRHR)',
      time: '4:00 PM – 5:30 PM',
      target: 'Youth & Young Mothers',
      description:
        'Facilitated dialogues on menstrual hygiene, biological facts, family planning, and gender-based violence prevention.'
    },
    {
      day: 'Friday',
      activity: 'Creative Arts & Bead Craftsmanship',
      time: '3:30 PM – 5:30 PM',
      target: 'Girls Club Members',
      description:
        'Traditional and modern bead jewelry crafting, design aesthetics, marketing techniques, and team showcases.'
    },
    {
      day: 'Saturday (Bi-weekly)',
      activity: 'Community Outreach & Family Dialogue',
      time: '9:00 AM – 1:00 PM',
      target: 'Parents, Elders, & General Community',
      description:
        'Community town halls in target rural districts addressing child protection, school retention, and ending early child marriages.'
    }
  ];

  return (
    <>
      <SEO
        title="FEEM | PROPOSED ACTIVITIES"
        description="Weekly timetable and proposed activities of FEEM: mentorship circles, vocational training, SRHR education, and community outreach."
        canonicalPath="/pages/activities.html"
      />

      <main id="main-content">
        <section className="page-header-banner text-center">
          <div className="container">
            <span className="section-badge mb-2">Weekly Routine</span>
            <h1 className="mb-3">Our Proposed Weekly Activities</h1>
            <p>
              Engaging young women through structured, reliable, and uplifting weekly sessions.
            </p>
          </div>
        </section>

        <section className="py-5 bg-white border-bottom" style={{ borderColor: 'var(--feem-border)' }}>
          <div className="container">
            <div className="text-center mb-5">
              <span className="section-badge">Calendar</span>
              <h2>Proposed Weekly Schedule</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: '640px' }}>
                Our weekly calendar blends educational reinforcement with hands-on livelihood
                skills and psychological mentorship.
              </p>
            </div>

            <div className="row g-4">
              {schedule.map((slot) => (
                <div key={slot.day} className="col-md-6 col-lg-4">
                  <div className="feem-card h-100 p-4 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-primary text-white">{slot.day}</span>
                      <small className="text-muted">{slot.time}</small>
                    </div>
                    <h3 className="h5 mb-2">{slot.activity}</h3>
                    <p className="small text-accent fw-bold mb-2">
                      <i className="bi bi-people-fill me-1"></i> {slot.target}
                    </p>
                    <p className="text-muted small m-0 flex-grow-1">
                      {slot.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <Link to="/get-involved" className="btn btn-feem-primary me-3">
                Volunteer For An Activity
              </Link>
              <Link to="/programs" className="btn btn-feem-outline">
                Back to Key Programs
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

