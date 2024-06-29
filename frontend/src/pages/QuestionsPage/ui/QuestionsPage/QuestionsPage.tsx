import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './QuestionsPage.module.scss';
import { Page } from '@/widgets/Page';
import { Breadcrumb } from '@/features/Breadcrumbs';
import { FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';

interface QuestionsPageProps {
   className?: string;
}

export const QuestionsPage = memo((props: QuestionsPageProps) => {
   const { className } = props;

   return (
      <Page className={classNames(cls.QuestionsPage, {}, [className])}>
         <div className={cls.container}>
            <Breadcrumb productName='Вопрос-ответ' />
            <Text
               className={cls.title}
               title={HeaderTagType.H_2}
               fontSize={FontSize.SIZE_36}
               fontWeight={FontWeight.TEXT_700}
            >
               Вопрос-ответ
            </Text>
            <div className={cls.questionsContainer}>
               <Text
                  title={HeaderTagType.H_3}
                  className={cls.subtitle}
                  fontSize={FontSize.SIZE_20}
                  fontWeight={FontWeight.TEXT_600}
               >
                  Общая категория
               </Text>
            </div>
         </div>
      </Page>
   );
});
