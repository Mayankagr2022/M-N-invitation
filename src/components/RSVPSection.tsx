"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  Sparkles,
  CheckCircle2,
  Heart,
  Send,
  Users,
  Calendar,
  ShieldCheck,
  Download,
  QrCode,
  Lock,
} from "lucide-react";
import { RSVP_EVENTS_LIST, GROOM_NAME, BRIDE_NAME, HASHTAG } from "@/lib/wedding-config";

interface RSVPData {
  id: string;
  name: string;
  phone: string;
  email: string;
  guestCount: number;
  attending: "yes" | "no";
  events: string[];
  diet: string;
  message: string;
  createdAt: string;
}

const allEventsList = RSVP_EVENTS_LIST;

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guestCount: 2,
    attending: "yes" as "yes" | "no",
    events: [...allEventsList],
    diet: "Vegetarian",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRSVP, setSubmittedRSVP] = useState<RSVPData | null>(null);
  const [rsvpList, setRsvpList] = useState<RSVPData[]>([]);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminPass, setAdminPass] = useState("");
  const [adminUnlocked, setAdminUnlocked] = useState(false);

  // Load existing RSVPs from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("mayank_nikita_rsvps");
      if (stored) {
        setRsvpList(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Could not load RSVPs", e);
    }
  }, []);

  const handleEventToggle = (eventTitle: string) => {
    setFormData((prev) => {
      const exists = prev.events.includes(eventTitle);
      return {
        ...prev,
        events: exists
          ? prev.events.filter((e) => e !== eventTitle)
          : [...prev.events, eventTitle],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please provide your Name and Contact number.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newRSVP: RSVPData = {
        id: "RSVP-" + Date.now().toString().slice(-6),
        name: formData.name,
        phone: formData.phone,
        email: formData.email || "N/A",
        guestCount: formData.attending === "yes" ? Number(formData.guestCount) : 0,
        attending: formData.attending,
        events: formData.attending === "yes" ? formData.events : [],
        diet: formData.diet,
        message: formData.message,
        createdAt: new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      const updated = [newRSVP, ...rsvpList];
      setRsvpList(updated);
      try {
        localStorage.setItem("mayank_nikita_rsvps", JSON.stringify(updated));
      } catch (err) {
        console.warn("Storage error", err);
      }

      setSubmittedRSVP(newRSVP);
      setIsSubmitting(false);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#C9A46A", "#DFBE85", "#B76E79", "#A8B59A", "#FFFFFF"],
        });
      } catch {}
    }, 900);
  };

  const handleExportCSV = () => {
    if (rsvpList.length === 0) return;
    const headers = [
      "ID",
      "Name",
      "Phone",
      "Email",
      "Guests",
      "Attending",
      "Events",
      "Diet",
      "Message",
      "Date",
    ];
    const rows = rsvpList.map((r) => [
      r.id,
      `"${r.name}"`,
      `"${r.phone}"`,
      `"${r.email}"`,
      r.guestCount,
      r.attending,
      `"${r.events.join("; ")}"`,
      `"${r.diet}"`,
      `"${r.message.replace(/"/g, '""')}"`,
      `"${r.createdAt}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Mayank_Nikita_RSVP_Responses.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="rsvp" className="relative py-20 sm:py-28 px-4 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#C9A46A]/30 shadow-sm mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A46A]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A37E3E] font-poppins font-medium">
            Join The Celebration
          </span>
        </div>
        <h2 className="font-cormorant text-3xl sm:text-5xl text-[#2D2622] font-medium">
          Kindly Respond (RSVP)
        </h2>
        <p className="font-poppins text-xs sm:text-sm text-[#5C524A] mt-2">
          Please let us know if you will be able to share in our special celebrations by 15 January 2027.
        </p>
      </div>

      {/* Confirmation Pass or Form */}
      {submittedRSVP ? (
        <div className="glass-card rounded-3xl p-8 sm:p-12 border-2 border-[#C9A46A] shadow-2xl text-center max-w-xl mx-auto animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-[#DFBE85]/20 border border-[#C9A46A] flex items-center justify-center mx-auto mb-4 text-[#C9A46A]">
            <CheckCircle2 className="w-8 h-8 text-[#C9A46A]" />
          </div>

          <span className="text-xs uppercase tracking-widest font-poppins text-[#A37E3E]">
            RSVP Confirmed • Digital Entry Pass
          </span>
          <h3 className="font-cormorant text-3xl sm:text-4xl text-[#2D2622] font-semibold mt-1">
            Thank You, {submittedRSVP.name}!
          </h3>
          <p className="font-poppins text-xs sm:text-sm text-[#5C524A] mt-2">
            {submittedRSVP.attending === "yes"
              ? "We are beyond thrilled to celebrate our big day with you!"
              : "We will miss your presence, but we hold your warm wishes close to our hearts."}
          </p>

          {/* Digital Pass Card */}
          {submittedRSVP.attending === "yes" && (
            <div className="mt-8 p-6 rounded-2xl bg-[#FCFAF7] border border-[#C9A46A]/40 text-left relative overflow-hidden shadow-inner">
              <div className="flex justify-between items-start mb-4 border-b border-[#C9A46A]/20 pb-4">
                <div>
                  <p className="text-[10px] uppercase font-poppins text-[#A37E3E] tracking-widest">
                    Pass Reference
                  </p>
                  <p className="font-mono text-xs font-semibold text-[#2D2622]">
                    {submittedRSVP.id}
                  </p>
                </div>
                <div className="w-12 h-12 bg-white rounded-lg border border-[#C9A46A]/30 flex items-center justify-center p-1">
                  <QrCode className="w-full h-full text-[#C9A46A]" />
                </div>
              </div>

              <div className="space-y-2 text-xs font-poppins">
                <div className="flex justify-between">
                  <span className="text-[#5C524A]">Attending Guests:</span>
                  <span className="font-semibold text-[#2D2622]">
                    {submittedRSVP.guestCount} Persons
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5C524A]">Meal Preference:</span>
                  <span className="font-semibold text-[#2D2622]">
                    {submittedRSVP.diet}
                  </span>
                </div>
                <div>
                  <span className="text-[#5C524A] block mb-1">Events:</span>
                  <div className="flex flex-wrap gap-1">
                    {submittedRSVP.events.map((ev, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-full bg-white border border-[#C9A46A]/20 text-[10px] text-[#7F8D70]"
                      >
                        {ev}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setSubmittedRSVP(null)}
              className="px-6 py-2.5 rounded-full bg-white hover:bg-[#FCFAF7] border border-[#C9A46A] text-[#2D2622] font-poppins text-xs font-medium"
            >
              Submit Another RSVP
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="glass-card rounded-3xl p-6 sm:p-10 border border-[#C9A46A]/35 shadow-xl space-y-6"
        >
          {/* Attendance Toggle Buttons */}
          <div>
            <label className="block text-xs uppercase tracking-widest font-poppins text-[#A37E3E] font-medium mb-3">
              Will You Be Attending? *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, attending: "yes" })}
                className={`py-3.5 px-4 rounded-2xl border text-xs sm:text-sm font-poppins font-medium transition-all flex items-center justify-center gap-2 ${
                  formData.attending === "yes"
                    ? "bg-[#FCFAF7] border-[#C9A46A] text-[#2D2622] ring-2 ring-[#C9A46A]/30 shadow-md"
                    : "bg-white/60 border-stone-200 text-[#5C524A] hover:bg-white"
                }`}
              >
                <Heart className="w-4 h-4 text-[#B76E79] fill-[#B76E79]" />
                <span>Joyfully Accept with Love</span>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, attending: "no" })}
                className={`py-3.5 px-4 rounded-2xl border text-xs sm:text-sm font-poppins font-medium transition-all flex items-center justify-center gap-2 ${
                  formData.attending === "no"
                    ? "bg-[#FCFAF7] border-[#A8B59A] text-[#2D2622] ring-2 ring-[#A8B59A]/30 shadow-md"
                    : "bg-white/60 border-stone-200 text-[#5C524A] hover:bg-white"
                }`}
              >
                <span>Regretfully Decline from Afar</span>
              </button>
            </div>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="guest-name"
                className="block text-xs uppercase tracking-widest font-poppins text-[#5C524A] font-medium mb-2"
              >
                Your Full Name *
              </label>
              <input
                id="guest-name"
                type="text"
                required
                placeholder="e.g. Siddharth Verma"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-[#C9A46A]/30 focus:border-[#C9A46A] focus:ring-2 focus:ring-[#C9A46A]/20 outline-none font-poppins text-xs sm:text-sm text-[#2D2622] transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="guest-phone"
                className="block text-xs uppercase tracking-widest font-poppins text-[#5C524A] font-medium mb-2"
              >
                WhatsApp / Mobile Number *
              </label>
              <input
                id="guest-phone"
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-[#C9A46A]/30 focus:border-[#C9A46A] focus:ring-2 focus:ring-[#C9A46A]/20 outline-none font-poppins text-xs sm:text-sm text-[#2D2622] transition-all"
              />
            </div>
          </div>

          {/* Guest Count & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="guest-email"
                className="block text-xs uppercase tracking-widest font-poppins text-[#5C524A] font-medium mb-2"
              >
                Email Address (Optional)
              </label>
              <input
                id="guest-email"
                type="email"
                placeholder="siddharth@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-[#C9A46A]/30 focus:border-[#C9A46A] focus:ring-2 focus:ring-[#C9A46A]/20 outline-none font-poppins text-xs sm:text-sm text-[#2D2622] transition-all"
              />
            </div>

            {formData.attending === "yes" && (
              <div>
                <label
                  htmlFor="guest-count"
                  className="block text-xs uppercase tracking-widest font-poppins text-[#5C524A] font-medium mb-2"
                >
                  Number of Guests Attending
                </label>
                <div className="relative">
                  <select
                    id="guest-count"
                    value={formData.guestCount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        guestCount: Number(e.target.value),
                      })
                    }
                    className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-[#C9A46A]/30 focus:border-[#C9A46A] focus:ring-2 focus:ring-[#C9A46A]/20 outline-none font-poppins text-xs sm:text-sm text-[#2D2622] transition-all appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, "7+"].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                  <Users className="w-4 h-4 text-[#C9A46A] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            )}
          </div>

          {/* Events Checkboxes (Only if attending) */}
          {formData.attending === "yes" && (
            <div>
              <label className="block text-xs uppercase tracking-widest font-poppins text-[#5C524A] font-medium mb-3">
                Select Events You Will Attend:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {allEventsList.map((evTitle) => {
                  const checked = formData.events.includes(evTitle);
                  return (
                    <label
                      key={evTitle}
                      className={`flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition-all ${
                        checked
                          ? "bg-[#FCFAF7] border-[#C9A46A] text-[#2D2622]"
                          : "bg-white/60 border-stone-200 text-[#5C524A] hover:bg-white"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => handleEventToggle(evTitle)}
                        className="w-4 h-4 accent-[#C9A46A] rounded cursor-pointer"
                      />
                      <span className="text-xs font-poppins">{evTitle}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* Dietary Preference */}
          {formData.attending === "yes" && (
            <div>
              <label className="block text-xs uppercase tracking-widest font-poppins text-[#5C524A] font-medium mb-2">
                Dietary Preference:
              </label>
              <div className="flex flex-wrap gap-3">
                {["Pure Vegetarian", "Jain Vegetarian", "Non-Vegetarian"].map(
                  (dietOpt) => (
                    <button
                      key={dietOpt}
                      type="button"
                      onClick={() => setFormData({ ...formData, diet: dietOpt })}
                      className={`px-4 py-2 rounded-full text-xs font-poppins border transition-all ${
                        formData.diet === dietOpt
                          ? "bg-[#DFBE85]/20 border-[#C9A46A] text-[#2D2622] font-semibold"
                          : "bg-white/70 border-stone-200 text-[#5C524A] hover:bg-white"
                      }`}
                    >
                      {dietOpt}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {/* Message for Couple */}
          <div>
            <label
              htmlFor="guest-message"
              className="block text-xs uppercase tracking-widest font-poppins text-[#5C524A] font-medium mb-2"
            >
              Warm Wishes &amp; Blessings For Mayank &amp; Nikita
            </label>
            <textarea
              id="guest-message"
              rows={3}
              placeholder="Leave a heartfelt note or memories for the couple..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-[#C9A46A]/30 focus:border-[#C9A46A] focus:ring-2 focus:ring-[#C9A46A]/20 outline-none font-poppins text-xs sm:text-sm text-[#2D2622] transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto min-w-[240px] py-3.5 px-8 rounded-full bg-gradient-to-r from-[#C9A46A] via-[#DFBE85] to-[#B58742] text-[#2D2622] font-poppins text-sm font-semibold tracking-wider shadow-lg hover:shadow-[#C9A46A]/40 transition-all flex items-center justify-center gap-2 mx-auto disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-[#2D2622] border-t-transparent rounded-full animate-spin" />
                  <span>Submitting RSVP...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Confirmation</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}

      {/* Host Admin Link & Modal */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setShowAdminModal(true)}
          className="text-[11px] font-poppins text-[#7F8D70] hover:text-[#C9A46A] transition-colors inline-flex items-center gap-1.5"
        >
          <Lock className="w-3 h-3" />
          <span>Host / Family RSVP Desk ({rsvpList.length} Registered)</span>
        </button>
      </div>

      {/* Admin Review Modal */}
      {showAdminModal && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowAdminModal(false)}
        >
          <div
            className="glass-card rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-[#C9A46A]/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#C9A46A]/20 pb-4 mb-4">
              <div>
                <h3 className="font-cormorant text-2xl text-[#2D2622] font-semibold">
                  Family RSVP Dashboard
                </h3>
                <p className="font-poppins text-xs text-[#5C524A]">
                  Real-time guest responses ({rsvpList.length} total)
                </p>
              </div>

              {adminUnlocked && rsvpList.length > 0 && (
                <button
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FCFAF7] border border-[#C9A46A] text-xs font-poppins text-[#2D2622] hover:bg-white shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-[#C9A46A]" />
                  <span>Export CSV</span>
                </button>
              )}
            </div>

            {!adminUnlocked ? (
              <div className="py-8 text-center space-y-4">
                <p className="text-xs font-poppins text-[#5C524A]">
                  Enter Host PIN to access guest guestbook (Default: <code>2027</code>)
                </p>
                <div className="flex justify-center gap-2 max-w-xs mx-auto">
                  <input
                    type="password"
                    placeholder="PIN"
                    value={adminPass}
                    onChange={(e) => setAdminPass(e.target.value)}
                    className="px-4 py-2 rounded-xl border border-[#C9A46A]/40 text-center font-mono text-sm outline-none"
                  />
                  <button
                    onClick={() => {
                      if (adminPass === "2027" || adminPass === "admin") {
                        setAdminUnlocked(true);
                      } else {
                        alert("Invalid PIN. Use 2027.");
                      }
                    }}
                    className="px-4 py-2 rounded-xl bg-[#C9A46A] text-white text-xs font-poppins font-medium"
                  >
                    Unlock
                  </button>
                </div>
              </div>
            ) : rsvpList.length === 0 ? (
              <p className="text-xs font-poppins text-center py-8 text-[#5C524A]">
                No RSVPs recorded yet. Submissions will appear here instantly!
              </p>
            ) : (
              <div className="space-y-3">
                {rsvpList.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-white/70 border border-[#C9A46A]/20 text-xs font-poppins space-y-1"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sm text-[#2D2622]">
                        {item.name}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-bold ${
                          item.attending === "yes"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {item.attending === "yes" ? "Attending" : "Declined"}
                      </span>
                    </div>
                    <p className="text-[#5C524A]">
                      📞 {item.phone} • ✉️ {item.email}
                    </p>
                    {item.attending === "yes" && (
                      <>
                        <p className="text-[#2D2622]">
                          Guests: <strong>{item.guestCount}</strong> | Diet:{" "}
                          <strong>{item.diet}</strong>
                        </p>
                        <p className="text-[11px] text-[#7F8D70]">
                          Events: {item.events.join(", ")}
                        </p>
                      </>
                    )}
                    {item.message && (
                      <p className="italic text-[#5C524A] bg-[#FCFAF7] p-2 rounded-lg mt-1 border border-[#C9A46A]/10">
                        &ldquo;{item.message}&rdquo;
                      </p>
                    )}
                    <span className="text-[9px] text-[#A8B59A] block pt-1">
                      Submitted: {item.createdAt}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAdminModal(false)}
                className="px-6 py-2 rounded-full bg-[#2D2622] text-white text-xs font-poppins"
              >
                Close Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
