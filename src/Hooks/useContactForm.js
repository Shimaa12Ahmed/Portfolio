import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function useContactForm() {
  const [loading, setLoading] = useState(false);
  const isSending = useRef(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  async function sendEmail(event) {
    event.preventDefault();
if (isSending.current) return;
const form = event.currentTarget;

    const templateParams = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      subject: form.elements.subject.value.trim(),
      message: form.elements.message.value.trim(),
    };

    // Validate empty fields
    if (
      !templateParams.name ||
      !templateParams.email ||
      !templateParams.subject ||
      !templateParams.message
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(templateParams.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    // Start loading only after validation
  isSending.current = true;
setLoading(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        {
          publicKey: PUBLIC_KEY,
        }
      );

      setStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });

      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message: "Failed to send your message. Please try again.",
      });
    } finally {
  isSending.current = false;
  setLoading(false);
}
  }
function clearStatus() {
  setStatus({
    type: "",
    message: "",
  });
}
  return {
    sendEmail,
    clearStatus,
    loading,
    status,
  };
}

export default useContactForm;
