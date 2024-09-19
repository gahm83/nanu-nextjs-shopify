// src/NewsletterForm.tsx
'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (validateEmail(emailValue)) {
      setEmailValid(true);
      setErrorMessage('');
    } else {
      setEmailValid(false);
      setErrorMessage('Invalid email address');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (emailValid) {
      try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ address: email })
        });

        if (response.ok) {
          setSubmitted(true);
        } else {
          setSubmitted(false);
        }
      } catch (error) {
        setSubmitted(false);
      }
    } else {
      setErrorMessage('Please enter a valid email address');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {submitted ? (
        <h2 className="font-plam-canyon-drive text-5xl font-normal">
          Thanks for joining the familia! <br />
          Exciting things are coming your way!
        </h2>
      ) : (
        <>
          <h2 className="font-plam-canyon-drive text-5xl font-normal">Join our familia!</h2>
          <div className="mt-4 flex w-full items-stretch justify-between border-2 border-[#F6E7E0] lg:max-w-60">
            <input
              id="email"
              type="email"
              value={email}
              placeholder="YOUR EMAIL"
              onChange={handleEmailChange}
              className="h-12 w-full flex-grow bg-transparent pl-4 placeholder:text-[#F6E7E0]"
            />
            <button
              type="submit"
              className="flex aspect-square h-12 w-12 items-center justify-center bg-[#F6E7E0] disabled:[&_svg]:opacity-50"
              disabled={!emailValid}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 80 80"
                className="absolute h-12 w-12 rotate-45"
              >
                <path
                  fill="#532826"
                  d="M46.674 35.68 32.353 50.002 30 47.649l14.321-14.321H31.697V30H50v18.303h-3.328l.002-12.622Z"
                />
              </svg>
            </button>
          </div>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </>
      )}
    </form>
  );
};

export default NewsletterForm;
