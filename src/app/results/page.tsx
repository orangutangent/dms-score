'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const ResultsPage = () => {
  const searchParams = useSearchParams();
  const [score, setScore] = useState(0);

  useEffect(() => {
    const answers = searchParams.get('answers');
    if (answers) {
      const answersArray = answers.split(',').map(Number);
      const totalScore = answersArray.reduce((acc, answer) => acc + answer, 0);
      setScore(totalScore);
    }
  }, [searchParams]);

  const getResultMessage = () => {
    if (score <= 10) {
      return 'Низкий уровень цифровизации. Рекомендуется внедрение базовых цифровых инструментов.';
    } else if (score <= 30) {
      return 'Средний уровень цифровизации. Есть потенциал для улучшения и автоматизации процессов.';
    } else {
      return 'Высокий уровень цифровизации. Ваша компания эффективно использует цифровые технологии.';
    }
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold my-8">Результаты расчета</h1>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="text-5xl font-bold text-blue-600">{score} / 50</div>
        <p className="text-gray-600 mt-2">{getResultMessage()}</p>
        <div className="mt-8">
          <p className="text-gray-600">Для получения точного расчета, пожалуйста, свяжитесь с нами.</p>
          <button className="mt-4 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Связаться с нами
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
