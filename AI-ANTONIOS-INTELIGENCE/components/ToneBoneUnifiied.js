import { useEffect, useRef, useState } from 'react';

const identities = ['Ray', 'Yarbough', 'Race Gang'];

const RaceGangBadge = () => (
  <div style={{
    backgroundColor: '#000',
    color: '#fff',
    padding: '12px',
    borderRadius: '10px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '20px',
    boxShadow: '0 0 10px #ff0000'
  }}>
    🏁 You’ve entered Race Gang Cipher Mode
  </div>
);

export default function ToneBoneUnified() {
  const rayRef = useRef(null);
  const yarboughRef = useRef(null);
  const [selectedIdentity, setSelectedIdentity] = useState('');

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
      if (rayRef.current) rayRef.current.srcObject = stream;
      if (yarboughRef.current) yarboughRef.current.srcObject = stream;
    });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Antonio Roschelle Yarbough’s Rhyming Family Tree</h1>
      <p>Powered by Antonio Roschelle Ray Sr's ToneBone AI.</p>
      <img src="/logo.png" alt="ToneBone Logo" style={{ width: '200px' }} />

      <h2>🎤 Tone Bone's Cipher Classroom</h2>
      <p>📹 Feed 1 — Ray</p>
      <video ref={rayRef} autoPlay style={{ width: '300px', marginRight: '1rem' }} />
      <p>📹 Feed 2 — Yarbough</p>
      <video ref={yarboughRef} autoPlay style={{ width: '300px' }} />
      <p>✨ Choose your identity. ✨ Enter Cipher Mode. ✨ Graduate in rhyme.</p>

      <select
        value={selectedIdentity}
        onChange={(e) => setSelectedIdentity(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', marginTop: '20px' }}
      >
        <option value="">Select Identity</option>
        {identities.map((id) => (
          <option key={id} value={id}>{id}</option>
        ))}
      </select>

      {selectedIdentity === 'Race Gang' && <RaceGangBadge />}

      <h2>🧠 ToneBone A.I. MODEL</h2>
      <p>This is A.I.'s V.R.—Where honesty is our security, and respect fuels every rhythm.</p>
      <p><strong>ToneBone Prime Idol</strong></p>
      <button>Enter the V.R.</button>
    </div>
  );
}