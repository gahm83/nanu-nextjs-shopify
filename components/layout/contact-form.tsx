'use client';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  phone: string;
  state: string;
  message: string;
  agreement: boolean;
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
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-32 py-20 text-[#F3E5DE]">
      <h2 className="font-portland text-2xl font-bold uppercase">
        We will be happy to hear from you
      </h2>
      <div className="space-y-5 text-justify text-xl font-medium">
        <p>
          Do you have any comments about our products? Would you like to be part of our distributor
          network? Or you just want to say hello Nanu!
        </p>
        <p>
          <strong>Just drop us a message!</strong>
        </p>
      </div>
      <div className="space-y5">
        <div className="relative">
          <input
            id="name"
            className="box-content h-12 w-full appearance-none border-2 border-[#F3E5DE] bg-transparent px-4 font-portland text-xl font-medium uppercase outline-none placeholder:text-[#F3E5DE]/80 lg:w-80"
            placeholder="Your Name"
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' }
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="relative">
          <input
            id="email"
            className="box-content h-12 w-full appearance-none border-2 border-[#F3E5DE] bg-transparent px-4 font-portland text-xl font-medium uppercase outline-none placeholder:text-[#F3E5DE]/80 lg:w-80"
            placeholder="Your Email"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'Email is invalid' }
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="relative">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/,
                message: 'Phone number is not valid'
              }
            })}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div className="relative">
          <label htmlFor="state">State</label>
          <select id="state" {...register('state', { required: 'State is required' })}>
            {states.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
          {errors.state && <p>{errors.state.message}</p>}
        </div>
        <div className="relative">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            {...register('message', {
              required: 'Message is required',
              minLength: { value: 10, message: 'Message must be at least 10 characters' }
            })}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </div>

        <div className="relative">
          <label>
            <input
              type="checkbox"
              {...register('agreement', { required: 'You must agree to the terms' })}
            />
            I agree to the terms and conditions
          </label>
          {errors.agreement && <p>{errors.agreement.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
