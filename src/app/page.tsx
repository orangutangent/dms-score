import Link from "next/link";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <main className=" flex items-center justify-center ">
      <div className="w-full max-w-5xl p-4 ">
        <h1 className="text-2xl font-bold ">
          Самотестирование бизнеса для оценки собственной цифровой зрелости
        </h1>
        <p className="mt-6 text-xl ">
          Пройдите тестирование, чтобы получить персональную оценку цифровой
          зрелости вашего бизнеса. По результатам тестирования вы узнаете на
          какой стадии развития находится ваша компания, ее основное «узкое
          место» и получите рекомендации по его устранению и поймете, какие шаги
          действительно приблизят ваш бизнес к следующему уровню эффективности и
          конкурентоспособности.
        </p>
        <div className="opacity-50 mt-2 space-y-2 text-foreground-secondary">
          <p>Время прохождения: ~ 5 минут</p>
          <p>11 вопросов</p>
        </div>
        <div className="mt-12">
          <Link href="/survey">
            <Button>Начать тестирование</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
