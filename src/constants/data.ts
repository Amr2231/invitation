import { createElement } from "react";
import { Calendar } from "lucide-react";
import { Clock } from "lucide-react";
import { MapPin } from "lucide-react";

export const COUPLE = {
  name1: "Adham",
  name2: "Nour",
  tagline: "Day One of Forever",
  subtitle: "Are getting engaged",
  thankYouQuote:
    "With hearts full of joy and gratitude, we invite you to share in our most precious moment. Your presence makes this celebration truly complete. Thank you for being a beautiful part of our love story.",
};

export const ENGAGEMENT_DATE = new Date("2026-05-02T14:00:00");

export const HERO_SLIDES = [
  {  mobile: "/hero-mobile.webp" },
];

export const EVENT_DETAILS = [
  {
    icon: createElement(Calendar, { size: 20 }),
    label: "Date",
    value: "Saturday, May 2th, 2026",
    detail: "Mark your calendar",
  },
  {
    icon: createElement(Clock, { size: 20 }),
    label: "Time",
    value: "2:00 PM",
    detail: "Doors open at 2:00 PM",
  },
  {
    icon: createElement(MapPin, { size: 20 }),
    label: "kian ",
    value: "Kian hall",
    detail: "Alexandria, Egypt",
    mapsUrl: "نادي المعلمين أسفل كوبري سيدي جابر قاعة كيان بجوار قاعة قصر المعلمين",
  },
];

export const VENUE = {
  name: "نادي المعلمين أسفل كوبري سيدي جابر قاعة كيان بجوار قاعة قصر المعلمين",
  nameCity: "Kian hall",
  mapsUrl: "https://maps.app.goo.gl/VNvPhdWZ8kavLLLw5",
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3411.620205317234!2d29.943277799999997!3d31.231249999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDEzJzUyLjUiTiAyOcKwNTYnMzUuOCJF!5e0!3m2!1sen!2seg!4v1775678125861!5m2!1sen!2seg",
};

export const SONG_URL =
  "/Esseily & Sabren - We Akhyran (Ramadan 2026) - محمود العسيلي وصابرين - وأخيراً (مسلسل اتنين غيرنا).mp3";
