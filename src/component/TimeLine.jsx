import React from "react";
import "../CSS/timeline.css";
import {
  FaBaby,
  FaStethoscope,
  FaClinicMedical,
  FaWater,
  FaMedal,
  FaSkullCrossbones,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Timeline() {
  const { texts, dir } = useLanguage();
  const events = texts.timeline?.events || [];

  const icons = [
    <FaBaby size={34} />,
    <FaStethoscope size={34} />,
    <FaClinicMedical size={34} />,
    <FaClinicMedical size={34} />,
    <FaWater size={34} />,
    <FaMedal size={34} />,
    <FaSkullCrossbones size={34} />
  ];

  return (
    <div className="page-wrapper" id="timeline" style={{ direction: dir }} dir="rtl">
      <div className="section-timeline-heading">
        <div className="container padding-vertical-xlarge">
          <div className="timeline-main_heading-wrapper">
            <h2 className="margin-bottom-medium">{texts?.timeline?.title}</h2>
          </div>
        </div>
      </div>

      <div className="section-timeline">
        <div className="container">
          <div className="timeline_component">
            <div className="timeline_progress">
              <div className="timeline_progress-bar" />
            </div>

            {events.map((event, index) => (
              <div className="timeline_item" key={index}>
                <div className="timeline_left">
                  <div className="timeline_date-text">{event.date}</div>
                </div>
                <div className="timeline_centre">
                  <div className="timeline_circle glow-circle">{icons[index]}</div>
                </div>
                <div className="timeline_right">
                  <div className="margin-bottom-xlarge">
                    <div className="timeline_title">{event.title}</div>
                    <div className="timeline_text">{event.description}</div>
                  </div>
                </div>
              </div>
            ))}

            <div className="overlay-fade-top" />
            <div className="overlay-fade-bottom" />
          </div>
        </div>
      </div>
    </div>
  );
}
