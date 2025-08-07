import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setStatus('✅ Arigato masaimas!');
        setEmail('');
        setMessage('');
      } else {
        setStatus('❌ Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('❌ Error sending message.');
    }
  };

  return (
    <section id="contact" className="bg-[#0f0f1a] text-white min-h-screen p-6 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-[#1a1a2e] p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center neon-text">Contact Me</h2>

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded bg-[#2e2e3a] text-white focus:outline-none"
        />

        <textarea
          placeholder="Your Message"
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 rounded bg-[#2e2e3a] text-white focus:outline-none"
          rows={6}
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 transition p-3 rounded font-semibold"
        >
          Send Message
        </button>

        {status && <p className="text-center mt-2">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
