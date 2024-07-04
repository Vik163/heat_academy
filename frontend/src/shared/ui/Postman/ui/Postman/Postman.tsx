import { ChangeEvent, SyntheticEvent, memo, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import cls from './Postman.module.scss';
import { Modal } from '@/shared/ui/Modal';
import { FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { Button, ButtonVariant } from '@/shared/ui/Button';
import { usePhoneValidator } from '@/shared/lib/hooks/usePhoneValidator';
import { PageLoader } from '@/widgets/PageLoader';

export interface PostmanProps {
   closeForm: () => void;
   isOpen: boolean;
   title: string;
   buttonText: string;
   commentText?: string;
}

export const Postman = memo((props: PostmanProps) => {
   const { closeForm, isOpen, title, buttonText, commentText } = props;
   const messageRef = useRef<HTMLTextAreaElement>(null);
   const phoneRef = useRef<HTMLInputElement>(null);
   const [err, setErr] = useState('');
   const [confirmSend, setConfirmSend] = useState(false);
   const [loading, setLoading] = useState(false);
   const { phoneValidator } = usePhoneValidator();

   const [toSend, setToSend] = useState({
      copyemail: '',
      title,
      phone: '',
      message: '',
   });

   const checkValid = () => {
      if (phoneRef.current) {
         if (!phoneRef.current.value || phoneRef.current.value.length < 18) {
            setErr('phone');
            return true;
         }
         setErr('');
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
      if (err) checkValid();
      if (target) {
         if (target.type === 'tel' && target.value) {
            setToSend({ ...toSend, [target.name]: phoneValidator(target.value) });
         } else {
            setToSend({ ...toSend, [target.name]: target.value });
         }
      }
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
               await emailjs.send(serviceId, templateId, toSend);
               setConfirmSend(true);
            }
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false);
         }
      }
   };

   const form = (
      <div className={cls.continer}>
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
               defaultValue={toSend.copyemail}
            ></input>
            <input
               id='phone'
               ref={phoneRef}
               name='phone'
               type='tel'
               placeholder='Введите Ваш телефон'
               onChange={handleChange}
               value={toSend.phone}
            />
            {err === 'phone' && (
               <span id='phone' className={cls.error}>
                  Введите Ваш номер телефона
               </span>
            )}
            {commentText && (
               <textarea
                  className={cls.message}
                  id='message'
                  ref={messageRef}
                  name='message'
                  onChange={handleChange}
                  placeholder={commentText}
                  value={toSend.message}
               ></textarea>
            )}
            {commentText && err === 'message' && (
               <span id='message' className={cls.error}>
                  Введите Ваш номер телефона
               </span>
            )}
            <Button className={cls.btn} width={350} height={53} type='submit' variant={ButtonVariant.FILLED}>
               {buttonText}
            </Button>
         </form>
      </div>
   );

   const answerPopup = (
      <div className={cls.continer}>
         <Text title={HeaderTagType.H_3} fontSize={FontSize.SIZE_24} fontWeight={FontWeight.TEXT_700}>
            Спасибо за заявку!
         </Text>
         <Text fontSize={FontSize.SIZE_15} fontWeight={FontWeight.TEXT_600} className={cls.textPopup}>
            Наш менеджер перезвонит <br /> Вам в ближайшее время
         </Text>
      </div>
   );

   if (loading) return <PageLoader screenFull />;

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
         {!confirmSend ? form : answerPopup}
      </Modal>
   );
});
