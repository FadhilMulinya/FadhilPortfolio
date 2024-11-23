"use client";

import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      setIsSubmitting(true);
      setSuccessMessage(null);
      setErrorMessage(null);

      emailjs
        .sendForm(
          "contact_service", // Replace with your EmailJS Service ID
          "contact_form", // Replace with your EmailJS Template ID
          formRef.current, // Form reference
          "jbaVN6yxMU5yvrzyz" // Replace with your EmailJS Public Key
        )
        .then(
          () => {
            setSuccessMessage("Message sent successfully!");
            formRef.current?.reset(); // Reset the form
          },
          (error) => {
            console.error("Failed to send message:", error);
            setErrorMessage("Failed to send message. Please try again.");
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Contact Me ?</h2>
      {successMessage && (
        <p className="text-green-500 font-medium mb-4">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="text-red-500 font-medium mb-4">{errorMessage}</p>
      )}
      <form className="form" onSubmit={handleSubmit} ref={formRef}>
        <div className="flex flex-col md:flex-row justify-between gap-5 mb-4">
          <div className="w-full">
            <label className="block mb-2 font-medium text-gray-700" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-4 py-2 rounded-md text-sm text-neutral-700 w-full"
              required
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 font-medium text-gray-700" htmlFor="email">
              Your Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-4 py-2 rounded-md text-sm text-neutral-700 w-full"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows={5}
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-4 py-2 rounded-md text-sm text-neutral-700 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full px-4 py-2 mt-4 bg-blue-500 text-white rounded-md font-bold ${
            isSubmitting ? "opacity-50" : "hover:bg-blue-600"
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
