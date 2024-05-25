import type { WeeklyWeatherRoot } from "@/types";
import { promises as fs } from "fs";

export default async function Week() {
  const fileContents = await fs.readFile(
    `${process.cwd()}/app/_data/week.json`,
    "utf-8"
  );
  const { weeklyWeather } = JSON.parse(fileContents) as WeeklyWeatherRoot;

  return (
    <main>
      <h1 className="...">This week&apos;s weather</h1>
      <div className="...">
        {weeklyWeather.map((day) => (
          <section key={day.dateTime} className="...">
            <h2 className="...">{new Date(day.dateTime).toString()}</h2>
            <div>
              <div className="...">
                <p className="...">{day.conditionIcon}</p>
                <p className="...">{day.condition}</p>
                <p className="...">{day.temperature.celsius}°C</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
