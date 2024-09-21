'use client';
import clsx from 'clsx';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  phone: string;
  state: string;
  message: string;
  agreement: boolean;
  submitError?: string;
}

const states = [
  { value: '', label: 'Select State' },
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
  { value: 'AS', label: 'American Samoa' },
  { value: 'DC', label: 'District of Columbia' },
  { value: 'FM', label: 'Federated States of Micronesia' },
  { value: 'GU', label: 'Guam' },
  { value: 'MH', label: 'Marshall Islands' },
  { value: 'MP', label: 'Northern Mariana Islands' },
  { value: 'PW', label: 'Palau' },
  { value: 'PR', label: 'Puerto Rico' },
  { value: 'VI', label: 'Virgin Islands' },
  { value: 'AA', label: 'Armed Forces Americas' },
  { value: 'AE', label: 'Armed Forces Europe' },
  { value: 'AP', label: 'Armed Forces Pacific' }
];

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors }
  } = useForm<FormData>({ mode: 'onBlur', reValidateMode: 'onBlur' });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...data })
      });

      console.log(response);

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError('submitError', {
          type: 'manual',
          message: 'Failed to submit review. Please try again later.'
        });
      }
    } catch (error) {
      setError('submitError', {
        type: 'manual',
        message: 'An unexpected error occurred. Please try again later.'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-8 text-[#F3E5DE] lg:px-32 lg:py-20">
      <h2 className="font-portland text-2xl font-bold uppercase">
        We will be happy to hear from you
      </h2>
      {submitted ? (
        <div className="my-5 space-y-4 text-justify text-xl font-medium">
          <p>
            Thank you for reaching out to us! Whether you're sharing thoughts about our products,
            interested in joining our distributor network, or just saying hello, we appreciate your
            message and will get back to you soon. Cheers from the Nanu team!
          </p>
        </div>
      ) : (
        <>
          <div className="my-5 space-y-4 text-justify text-xl font-medium">
            <p>
              Do you have any comments about our products? Would you like to be part of our
              distributor network? Or you just want to say hello Nanu!
            </p>
            <p>
              <strong>Just drop us a message!</strong>
            </p>
          </div>
          <div className="mt-8 space-y-4 lg:mt-16">
            <div className="relative">
              <input
                id="name"
                className={clsx(
                  'h-12 w-full appearance-none border-2 border-[#F3E5DE] bg-transparent px-4 font-portland text-lg font-medium outline-none placeholder:font-bold placeholder:uppercase placeholder:text-[#F3E5DE]/80 lg:w-80',
                  { 'border-[#EA2D23] text-[#EA2D23] placeholder:text-[#EA2D23]': errors.name }
                )}
                placeholder="Your Name"
                {...register('name', {
                  required: 'Name is required',
                  minLength: { value: 2, message: 'Name must be at least 2 characters' }
                })}
              />
              {errors.name && <p className="text-[#EA2D23]">{errors.name.message}</p>}
            </div>
            <div className="relative">
              <input
                id="email"
                className={clsx(
                  'h-12 w-full appearance-none border-2 border-[#F3E5DE] bg-transparent px-4 font-portland text-lg font-medium outline-none placeholder:font-bold placeholder:uppercase placeholder:text-[#F3E5DE]/80 lg:w-80',
                  { 'border-[#EA2D23] text-[#EA2D23] placeholder:text-[#EA2D23]': errors.email }
                )}
                placeholder="Your Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'Email is invalid' }
                })}
              />
              {errors.email && <p className="text-[#EA2D23]">{errors.email.message}</p>}
            </div>
            <div className="relative">
              <input
                id="phone"
                className={clsx(
                  'h-12 w-full appearance-none border-2 border-[#F3E5DE] bg-transparent px-4 font-portland text-lg font-medium outline-none placeholder:font-bold placeholder:uppercase placeholder:text-[#F3E5DE]/80 lg:w-80',
                  { 'border-[#EA2D23] text-[#EA2D23] placeholder:text-[#EA2D23]': errors.phone }
                )}
                placeholder="Phone number"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/,
                    message: 'Phone number is not valid'
                  }
                })}
              />
              {errors.phone && <p className="text-[#EA2D23]">{errors.phone.message}</p>}
            </div>
            <div className="relative">
              {/* <label htmlFor="state">State</label> */}
              <div
                className={clsx('relative h-12 w-full border-2 border-[#F3E5DE] lg:w-80', {
                  'border-[#EA2D23]': errors.state
                })}
              >
                <select
                  id="state"
                  className={clsx(
                    'h-full w-full appearance-none bg-transparent px-4 font-portland text-lg font-medium outline-none placeholder:font-bold placeholder:uppercase',
                    { 'text-[#EA2D23]': errors.state }
                  )}
                  {...register('state', { required: 'State is required' })}
                >
                  {states.map((state) => (
                    <option key={state.value} value={state.value}>
                      {state.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.state && <p className="text-[#EA2D23]">{errors.state.message}</p>}
            </div>
            <div className="relative">
              <textarea
                id="message"
                className={clsx(
                  'h-36 w-full appearance-none border-2 border-[#F3E5DE] bg-transparent px-4 py-2 font-portland text-lg font-medium outline-none placeholder:font-bold placeholder:uppercase placeholder:text-[#F3E5DE]/80 lg:w-[380px]',
                  { 'border-[#EA2D23] text-[#EA2D23] placeholder:text-[#EA2D23]': errors.message }
                )}
                {...register('message', {
                  required: 'Message is required',
                  minLength: { value: 10, message: 'Message must be at least 10 characters' }
                })}
                placeholder="Your message"
              />
              {errors.message && <p className="text-[#EA2D23]">{errors.message.message}</p>}
            </div>

            <div className="cursor-pointerç relative flex space-x-2">
              <input
                id="terms-conditions-agreement"
                type="checkbox"
                className="peer absolute opacity-0"
                {...register('agreement', { required: 'You must agree to the terms' })}
              />
              <span className="mt-[2px] block h-5 w-5 rounded-full border-2 border-[#8FC8E7] peer-checked:bg-[#8FC8E7] peer-checked:ring-[6px] peer-checked:ring-[#42201E]"></span>
              <label htmlFor="terms-conditions-agreement">
                I agree to the terms and conditions
              </label>
              {errors.agreement && <p className="text-[#EA2D23]">{errors.agreement.message}</p>}
            </div>

            <button
              type="submit"
              className="border-2 border-solid border-[#8FC8E7] bg-[#8FC8E7] px-6 py-2 text-center font-portland text-lg font-black uppercase text-[#532826] max-lg:flex-grow lg:min-w-48"
            >
              Send message
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default ContactForm;
