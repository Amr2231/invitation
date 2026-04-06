import { Calendar, Clock, MapPin } from "lucide-react";
import { createElement } from "react";

// data for couple
export const COUPLE = {
  name1: "Adham",
  name2: "Nour",
  tagline: "Day One of Forever",
  subtitle: "Are getting engaged",
  thankYouQuote:
    "With hearts full of joy and gratitude, we invite you to share in our most precious moment. Your presence makes this celebration truly complete. Thank you for being a beautiful part of our love story.",
};

// event details
export const ENGAGEMENT_DATE = new Date("2025-04-19T19:00:00");

// hero section
export const HERO_SLIDES = [
  { desktop: "/hero.jpeg", mobile: "/hero-mobile.jpeg" },
  { desktop: "/hero2.jpeg", mobile: "/hero2-mobile.jpeg" },
];

// timeline events
export const EVENT_DETAILS = [
  {
    icon: createElement(Calendar, { size: 20 }),
    label: "Date",
    value: "Saturday, April 19th, 2025",
    detail: "Mark your calendar",
  },
  {
    icon: createElement(Clock, { size: 20 }),
    label: "Time",
    value: "7:00 PM",
    detail: "Doors open at 6:30 PM",
  },
  {
    icon: createElement(MapPin, { size: 20 }),
    label: "Venue",
    value: "The Grand Crystal Hall",
    detail: "Cairo, Egypt",
  },
];

// venue details
export const VENUE = {
  name: "The Grand Crystal Hall",
  city: "Cairo, Egypt",
  mapsUrl: "https://maps.google.com/?q=Cairo+Opera+House",
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.99!2d31.1852!3d30.0663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458412d18b42c2f%3A0x79b10c4ddddbf3bb!2sCairo+Opera+House!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg",
};

// song details
export const SONG_URL =
  "/Esseily & Sabren - We Akhyran (Ramadan 2026) - محمود العسيلي وصابرين - وأخيراً (مسلسل اتنين غيرنا).mp4";
