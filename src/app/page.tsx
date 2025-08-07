import Link from "next/link";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center ">
      <div className="w-full max-w-5xl ">
        <h1 className="text-[1.75rem] font-bold  mb-4">
          Оценка зрелости государственных услуг и цифровой зрелости бизнеса
        </h1>
        <p className="mt-6 text-lg text-gray-600  ">
          Пройдите тестирование, чтобы получить персональную оценку цифровой
          зрелости вашего бизнеса или государства. По результатам тестирования
          вы узнаете на какой стадии развития находится ваша компания, ее
          основное «узкое место» и получите рекомендации по его устранению и
          поймете, какие шаги действительно приблизят ваш бизнес к следующему
          уровню эффективности и конкурентоспособности.
        </p>
        <div className="mt-6 space-y-2 text-gray-500">
          <p>Время прохождения: ~ 5 минут</p>
          <p>~25 вопросов</p>
        </div>
        <div className="mt-12 flex  gap-6">
          <Link href="/digitalmaturity">
            <Button>Начать тестирование для МСП</Button>
          </Link>
          <Link href="/govermentssurvey">
            <Button>Начать тестирование для гос.служащих</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
