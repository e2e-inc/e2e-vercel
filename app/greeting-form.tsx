'use client';

import { useState, type FormEvent } from 'react';

export function GreetingForm() {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [greeted, setGreeted] = useState<string | null>(null);

  function greet(event: FormEvent) {
    event.preventDefault();
    const value = name.trim();
    if (value === '') {
      setError(true);
      setGreeted(null);
      return;
    }
    setError(false);
    setGreeted(value);
    setName('');
  }

  return (
    <form className="form" onSubmit={greet}>
      <button className="button" type="submit">
        greet
      </button>
      {error ? (
        <p className="error" role="alert">
          enter a name first.
        </p>
      ) : null}
      {greeted !== null ? (
        <p className="status" role="status">
          hello, {greeted}!
        </p>
      ) : null}
    </form>
  );
}
