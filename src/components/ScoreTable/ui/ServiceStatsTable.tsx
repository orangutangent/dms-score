import React from "react";

interface ServiceStat {
  code: string;
  label: string;
  average: number;
  count: number;
}

interface ServiceStatsTableProps {
  serviceStats: ServiceStat[];
  showColors?: boolean;
  customColors?: string[];
}

const ServiceStatsTable: React.FC<ServiceStatsTableProps> = ({
  serviceStats,
  showColors = true,
  customColors,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Статистика по видам услуг</h3>
      <div>
        <div
          className="grid grid-cols-3 gap-4 text-sm border-b pb-2"
          style={{ color: "#727F88" }}
        >
          <div>Вид услуги</div>
          <div className="text-center">Средняя оценка</div>
          <div className="text-center">Количество</div>
        </div>
        <div className="mt-4 space-y-4">
          {serviceStats.map((service, index) => {
            // Определяем цвет для отображения
            let displayColor = "#3B82F6"; // цвет по умолчанию
            if (customColors && customColors[index]) {
              displayColor = customColors[index];
            }

            return (
              <div
                key={service.code}
                className="grid grid-cols-3 gap-4 items-center"
              >
                <div className="flex items-center">
                  {showColors && (
                    <span
                      className="w-3 h-3 rounded-full mr-3 flex-shrink-0"
                      style={{ backgroundColor: displayColor }}
                    ></span>
                  )}
                  <span>{service.label}</span>
                </div>
                <div className="text-center font-semibold">
                  {service.average.toFixed(1)}
                </div>
                <div className="text-center text-gray-500">{service.count}</div>
              </div>
            );
          })}
          {/* Overall Average Row */}
          {serviceStats.length > 0 && (
            <div className="grid grid-cols-3 gap-4 items-center font-bold border-t pt-4 mt-4">
              <div>Среднее значение</div>
              <div className="text-center">
                {(
                  serviceStats.reduce((sum, s) => sum + s.average, 0) /
                  serviceStats.length
                ).toFixed(1)}
              </div>
              <div className="text-center">
                {serviceStats.reduce((sum, s) => sum + s.count, 0)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceStatsTable;
