import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./QuestionsPage.module.scss";

interface QuestionsPageProps {
  className?: string;
}

export const QuestionsPage = memo((props: QuestionsPageProps) => {
  const { className } = props;

  return <div className={classNames(cls.QuestionsPage, {}, [className])}></div>;
});
