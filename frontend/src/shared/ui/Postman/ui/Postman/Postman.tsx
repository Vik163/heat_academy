import { ChangeEvent, SyntheticEvent, memo, useRef, useState } from 'react';

import cls from './Postman.module.scss';
import { Modal } from '@/shared/ui/Modal';
import { FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { Button, ButtonVariant } from '@/shared/ui/Button';

export interface PostmanProps {
   closeForm: () => void;
   isOpen: boolean;
   title: string;
   buttonText: string;
   placeholderText: string;
}

export const Postman = memo((props: PostmanProps) => {
   const { closeForm, isOpen, title, buttonText, placeholderText } = props;
   const messageRef = useRef<HTMLTextAreaElement>(null);
   const phoneRef = useRef<HTMLInputElement>(null);
   const [err, setErr] = useState('');
   const [loading, setLoading] = useState(false);

   const [toSend, setToSend] = useState({
      copyemail: '',
      title: 'ОБратный звонок',
      phone: '',
      message: '',
   });

   const checkValid = () => {
      if (phoneRef.current && !phoneRef.current.value) {
         setErr('phone');
         return true;
      }
      // if (messageRef.current && !messageRef.current.value) {
      //    setErr('message');
      //    return true;
      // }
      setErr('');
      return false;
   };
   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { target } = e;
      if (target) setToSend({ ...toSend, [target.name]: target.value });
   };

   const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!checkValid()) {
         const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
         const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
         try {
            if (toSend.copyemail) {
               console.log('spam');
            } else {
               setLoading(true);
               // await emailjs.send(serviceId, templateId, toSend);
               alert('email successfully sent check inbox');
            }
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false);
         }
      }
   };

   return (
      <Modal
         onClose={closeForm}
         isOpen={isOpen}
         buttonCloseHeight={20}
         buttonCloseRight={20}
         buttonCloseTop={20}
         buttonCloseWidth={20}
         className={cls.modal}
      >
         <div>
            <Text
               title={HeaderTagType.H_3}
               className={cls.title}
               fontSize={FontSize.SIZE_22}
               fontWeight={FontWeight.TEXT_700}
            >
               {title}
            </Text>
            <Text className={cls.subtitle} fontSize={FontSize.SIZE_15}>
               Заполните поля ниже, наш менеджер свяжется с Вами и ответит на ваши вопросы
            </Text>
            <form className={cls.form} onSubmit={handleSubmit}>
               <input
                  type='text'
                  name='copyemail'
                  placeholder='Email для копии'
                  value={toSend.copyemail || ''}
               ></input>
               <input
                  id='phone'
                  ref={phoneRef}
                  name='phone'
                  placeholder='Введите Ваш телефон'
                  onChange={handleChange}
                  value={toSend.phone || ''}
               />
               {err === 'phone' && (
                  <span id='phone' className={cls.error}>
                     Введите Ваш номер телефона
                  </span>
               )}
               <textarea
                  className={cls.message}
                  id='message'
                  ref={messageRef}
                  name='message'
                  onChange={handleChange}
                  placeholder={placeholderText}
                  value={toSend.message || ''}
               ></textarea>
               {err === 'message' && (
                  <span id='message' className={cls.error}>
                     Введите Ваш номер телефона
                  </span>
               )}
               <Button
                  className={cls.btn}
                  width={350}
                  height={53}
                  type='submit'
                  variant={ButtonVariant.FILLED}
               >
                  {buttonText}
               </Button>
            </form>
         </div>
      </Modal>
   );
});
