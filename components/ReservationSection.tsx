"use client";

import { useState, type FormEvent } from "react";

const PHONE = "33758763121";

const timeSlots = ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];
const partySizes = [1, 2, 3, 4, 5, 6, 7, 8];

export default function ReservationSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const text = [
      `Bonjour The 416, je souhaite réserver une table.`,
      ``,
      `Nom : ${form.name}`,
      `Email : ${form.email}`,
      `Date : ${form.date}`,
      `Heure : ${form.time}`,
      `Nombre de convives : ${form.guests}`,
      form.message ? `Message : ${form.message}` : "",
    ]
      .filter((line) => line !== undefined)
      .join("\n");

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="reservation" className="reservation">
      <div className="reservation__blob reservation__blob--tl" />
      <div className="reservation__blob reservation__blob--br" />

      <div className="reservation__inner">
        <div className="reservation__header">
          <p className="reservation__overline">Rejoignez-nous</p>
          <h2 className="reservation__heading">Réservation</h2>
          <div className="reservation__divider" />
          <p className="reservation__desc">
            Réservez votre table pour une soirée d'exception. Notre équipe vous accueillera
            avec le plus grand soin.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="reservation__form">
          <div className="reservation__grid-2">
            <div className="reservation__field">
              <label className="reservation__label">Nom complet</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Ali SAIDI "
                className="reservation__input"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="reservation__field">
              <label className="reservation__label">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="ali@exemple.com"
                className="reservation__input"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="reservation__grid-3">
            <div className="reservation__field">
              <label className="reservation__label">Date</label>
              <input
                type="date"
                name="date"
                required
                className="reservation__input"
                value={form.date}
                onChange={handleChange}
              />
            </div>
            <div className="reservation__field">
              <label className="reservation__label">Heure</label>
              <select
                name="time"
                required
                className="reservation__select"
                value={form.time}
                onChange={handleChange}
              >
                <option value="">Choisir</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="reservation__field">
              <label className="reservation__label">Convives</label>
              <select
                name="guests"
                required
                className="reservation__select"
                value={form.guests}
                onChange={handleChange}
              >
                <option value="">Nombre</option>
                {partySizes.map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "personne" : "personnes"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="reservation__field">
            <label className="reservation__label">Message (optionnel)</label>
            <textarea
              name="message"
              rows={3}
              placeholder="Allergies, occasions spéciales..."
              className="reservation__textarea"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <div className="reservation__submit-wrap">
            <button type="submit" className="reservation__submit">
              Réserver via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
