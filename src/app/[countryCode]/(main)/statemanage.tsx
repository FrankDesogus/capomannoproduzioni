"use client"

import React from 'react';

export default function PasswordProtectedContent({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === 'asdzxc123') {
      setAuthenticated(true);
    } else {
      alert('Password errata. Riprova.');
    }
    setSubmitted(true);
  };

  if (!authenticated && !submitted) {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Accedi</button>
      </form>
    );
  }

  if (!authenticated && submitted) {
    return <p>Password errata. Riprova.</p>;
  }

  return <>{children}</>; // Renderizza i figli direttamente
}
