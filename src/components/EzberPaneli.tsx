import React from "react";
import { questions } from "../data/questions";

// Her sorunun neden doğru olduğunu açıklayan özgün açıklamalar
type AciklamaTipi = string;
const aciklamalar: AciklamaTipi[] = [
  // 1
  "C#'ta resim ve görsel işlemleri yapmak için kullanılan ana namespace System.Drawing'dır. Diğer namespace'ler dosya veya veri işlemleri içindir.",
  // 2
  "MySQL veritabanına bağlanmak için kullanılan ana nesne ve referans MySQL_Connection'dır. Diğer seçenekler bağlantı için doğrudan kullanılmaz.",
  // 3
  "Metot isimlendirmesi kurallara uygun olmalıdır. Hatalı isimlendirme, kodun okunabilirliğini ve çalışmasını olumsuz etkiler.",
  // 4
  "Bir kontrolden (örneğin TextBox) çıkıldığında tetiklenen olay Leave'dir. Böylece kullanıcı başka bir alana geçtiğinde işlemler kaydedilebilir.",
  // 5
  "C# form uygulamalarında reportViewer nesnesiyle PowerPoint formatında rapor alınamaz, diğer formatlar desteklenir.",
  // 6
  "Arama kutusunda yazı değiştikçe sonuçların güncellenmesi için TextChanged olayı kullanılır.",
  // 7
  "Sorgu, Adet değeri 3 ile 5 arasında olan satırları sayar ve toplamı 5 olarak döndürür.",
  // 8
  "GROUP BY ile her ürün için ortalama adet hesaplanır. Mouse için ortalama 3, HDMI Kablo için 5'tir.",
  // 9
  "Derste Donut grafik türü oluşturulmamıştır, diğer grafik türleri derste yapılmıştır.",
  // 10
  "XML'de sabit terimler yoktur, etiketler geliştirici tarafından belirlenir. HTML'de ise sabit etiketler vardır.",
  // ... (devamı eklenecek)
];

interface EzberPaneliProps {
  open: boolean;
  onClose: () => void;
}

const getAnswerText = (q: any) => {
  if (q.type === "multiple-choice") {
    return q.options[q.correctAnswer];
  }
  if (q.type === "true-false") {
    return q.correctAnswer === true ? "Doğru" : "Yanlış";
  }
  if (q.type === "code-writing") {
    return <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">{q.correctCode}</pre>;
  }
  if (q.type === "multi-true-false") {
    return (
      <ul className="ml-4 list-disc">
        {q.statements.map((s: any, i: number) => (
          <li key={i}>
            <span className="font-semibold">{s.text}</span> → <span className={s.correct ? "text-green-700" : "text-red-700"}>{s.correct ? "Doğru" : "Yanlış"}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (q.type === "code-explanation") {
    return <span className="italic">Açıklama: {q.correctExplanation}</span>;
  }
  return null;
};

const EzberPaneli: React.FC<EzberPaneliProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white max-h-[90vh] w-full max-w-2xl rounded-2xl shadow-2xl p-6 overflow-y-auto relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-lg font-bold text-gray-500 hover:text-red-500">Kapat ✖</button>
        <h2 className="text-2xl font-black mb-4 text-center text-purple-700">Ezber Paneli</h2>
        <div className="space-y-6">
          {questions.map((q, idx) => (
            <div key={q.id} className="border-b pb-3">
              <div className="font-bold text-gray-800 mb-1">
                {idx + 1}. {q.question}
              </div>
              <div className="text-green-700 font-semibold">Cevap: {getAnswerText(q)}</div>
              {q.hint && <div className="text-xs text-yellow-700 mt-1">İpucu: {q.hint}</div>}
              {aciklamalar[idx] && <div className="text-xs text-blue-700 mt-1"><span className="font-bold">Açıklama:</span> {aciklamalar[idx]}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EzberPaneli; 