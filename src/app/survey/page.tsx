'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Question from '../../components/Question';

const surveyQuestions = [
  {
    question: '1. Интернет в офисе: Как работает интернет в вашем офисе для онлайн-работы?',
    options: [0, 1, 2, 3, 4, 5],
    description: ['очень медленный и нестабильный', 'очень быстрый и надёжный, есть резервный канал']
  },
  {
    question: '2. Связь между отделами: Как отделы компании (продажи, склад, финансы и др.) обмениваются данными?',
    options: [0, 1, 2, 3, 4, 5],
    description: ['каждый отдел ведёт свои Excel-файлы', 'единая система для всех, данные видят все']
  },
  {
    question: '3. Онлайн-заказы: Какую долю заказов вы получаете через интернет (сайт, соцсети и т.д.)?',
    options: [0, 1, 2, 3, 4, 5],
    description: ['0–20%', '80–100%']
  },
  {
    question: '4. Заказ и поддержка 24/7: Могут ли клиенты оформить заказ или получить помощь без звонка (чат-бот, онлайн-форма) в любое время?',
    options: [0, 1, 2, 3, 4, 5],
    description: ['только по телефону в рабочее время', 'полное самообслуживание 24/7']
  },
  {
    question: '5. Данные о бизнесе: Как легко получить актуальные данные о продажах, расходах и прибыли?',
    options: [0, 1, 2, 3, 4, 5],
    description: ['надо всё собирать вручную', 'есть живая панель, данные обновляются сами']
  },
  {
    question: '6. Использование данных о клиентах: Используете ли вы данные о клиентах для персональных предложений или улучшения продукта?',
    options: [0, 1, 2, 3, 4, 5],
    description: ['не используем', 'персонализация на основе ИИ']
  },
  {
    question: '7. Защита данных и устройств: Есть ли антивирус и автоматическое резервное копирование данных?',
    options: [0, 1, 2, 3, 4, 5],
    description: ['ничего нет', 'централизованная и надёжная защита']
  },
  {
    question: '8. Автоматизация рутинных задач: Сколько задач (счета, уведомления, учёт запасов) выполняет система без человека?',
    options: [0, 1, 2, 3, 4, 5],
    description: ['всё вручную', 'автоматизировано более 80%']
  },
  {
    question: '9. Обучение сотрудников: Какой процент сотрудников прошёл обучение цифровым навыкам за последний год?',
    options: [0, 1, 2, 3, 4, 5],
    description: ['0–20%', '80–100%']
  },
  {
    question: '10. Отношение к новым технологиям: Как сотрудники относятся к новым цифровым инструментам?',
    options: [0, 1, 2, 3, 4, 5],
    description: ['сопротивляются изменениям', 'сами предлагают и внедряют новшества']
  },
];

const SurveyPage = () => {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (answer: number) => {
    const newAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < surveyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const answersQuery = Object.values(newAnswers).join(',');
      router.push(`/results?answers=${answersQuery}`);
    }
  };

  const progress = ((currentQuestion + 1) / surveyQuestions.length) * 100;

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md mt-8">
        <Question
          question={surveyQuestions[currentQuestion].question}
          options={surveyQuestions[currentQuestion].options}
          description={surveyQuestions[currentQuestion].description}
          onAnswer={handleAnswer}
          progress={progress}
        />
      </div>
    </div>
  );
};

export default SurveyPage;