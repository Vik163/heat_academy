import { ChangeEvent, SyntheticEvent, memo, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import cls from './Postman.module.scss';

export interface PostmanProps {
   className?: string;
}

export const Postman = memo((props: PostmanProps) => {
   const { className } = props;
   const emailRef = useRef<HTMLInputElement>(null);
   const nameRef = useRef<HTMLInputElement>(null);
   const [loading, setLoading] = useState(false);

   const [toSend, setToSend] = useState({
      name: '',
      email: '',
   });
   console.log(toSend);

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      if (target) setToSend({ ...toSend, [target.name]: target.value });
   };

   // Add these
   const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
      console.log('i');

      e.preventDefault();

      const serviceId = 'service_2sqkcje';
      const templateId = 'template_bsg6fta';
      try {
         setLoading(true);
         await emailjs.send(serviceId, templateId, toSend);
         alert('email successfully sent check inbox');
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   return (
      <form className={cls.for} onSubmit={handleSubmit}>
         <div className={cls.form_group}>
            <label htmlFor='name'>name</label>
            <input
               id='name'
               ref={nameRef}
               name='name'
               placeholder='enter your name'
               onChange={handleChange}
               value={toSend.name || ''}
            />
         </div>
         <div className={cls.form_group}>
            <label htmlFor='email'>email</label>
            <input
               id='email'
               ref={emailRef}
               name='email'
               type='email'
               onChange={handleChange}
               placeholder='enter your email'
               value={toSend.email || ''}
            />
         </div>
         <button type='submit' className={cls.btn}>
            subscribe
         </button>
      </form>
   );
});
