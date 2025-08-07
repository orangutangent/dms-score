import React from 'react';

interface AdviceBlockProps {
  averageScore: number;
}

const getAdvice = (score: number) => {
  if (score < 1.5) {
    return 'В первую очередь рекомендуется то и то, потому-то потому и вообще рекомендуем рекомендовать нас, иначе сами вас не порекомендуем и чего делать будете тогда?';
  }
  if (score < 3) {
    return 'Ваш уровень - Развивающийся. Автоматизируйте рутинные задачи, организуйте онлайн-продажи и улучшите внутренние коммуникации с помощью корпоративного мессенджера.';
  }
  if (score < 4.5) {
    return 'Ваш уровень - Продвинутый. Используйте аналитику данных для принятия решений, внедряйте сквозную аналитику и усиливайте кибербезопасность.';
  }
  return 'Ваш уровень - Лидер. Внедряйте ИИ для персонализации, исследуйте инновационные технологии и создавайте цифровую экосистему для ваших клиентов.';
};

const AdviceBlock: React.FC<AdviceBlockProps> = ({ averageScore }) => {
  const advice = getAdvice(averageScore);

  return (
    <div>
      <h2 className="text-sm text-gray-500">Совет</h2>
      <hr className="my-2 border-gray-200" />
      <p className="text-lg text-gray-800">
        {advice}
      </p>
    </div>
  );
};

export default AdviceBlock;