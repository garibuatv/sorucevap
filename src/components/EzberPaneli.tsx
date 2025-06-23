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
  // 11
  "Appdomain.Currentdomain.Basedirectory, uygulamanın çalıştığı klasörü işaret eder. Bu sayede veritabanı dosyasının yolu dinamik olarak belirlenir.",
  // 12
  "VDO adında bir veritabanı teknolojisi yoktur. Diğerleri Visual Studio'da veri işlemlerinde kullanılabilir.",
  // 13
  "void ile başlayan metotlar değer döndürmez, bu yüzden <returns> etiketiyle veri tanımlanamaz.",
  // 14
  "ADO.NET büyük veri için değil, daha çok orta ölçekli ve bağlantısız veri işlemleri için uygundur.",
  // 15
  "C#'ta değişken sayıda parametre için params anahtar kelimesi kullanılır.",
  // 16
  "Bir metotta parametre olmak zorunda değildir. Parametre bölümü olmayabilir.",
  // 17
  "Global değişkenlere metot içinden erişilebilir. Diğer tüm ifadeler doğrudur.",
  // 18
  "TextBox nesnesinin kısayol tuşlarını etkinleştiren özelliği ShortcutsEnabled'dir.",
  // 19
  "File.Exists() metodu dosya için kullanılır, klasör için Directory.Exists() kullanılmalıdır.",
  // 20
  "Metotlar için XML açıklama satırları yazılırsa, kullanıcı bu açıklamaları görebilir.",
  // 21
  "ListBox nesnesinde Text özelliği yoktur, diğerleri mevcuttur.",
  // 22
  "DataGridView'de bir hücreye tıklanınca CellClick olayı tetiklenir.",
  // 23
  "Kök element veritabanını temsil etmez, XML'de sadece yapının en üst düğümüdür.",
  // 24
  "StreamWriter sınıfı ile dosyaya veri yazılabilir. Diğer seçenekler yanlıştır.",
  // 25
  "ComboBox nesnesinde Value özelliği yoktur, diğerleri mevcuttur.",
  // 26
  "Root elementi veritabanına karşılık gelmez, sadece XML'in en üst düğümüdür.",
  // 27
  "C#'ta metodun amacını açıklamak için <summary> etiketi kullanılır.",
  // 28
  "DataAdapter.Fill(DataTable) ile veriler tabloya aktarılır.",
  // 29
  "Fazla nesne eklemek karmaşa yaratır, sade ve işlevsel tasarım en iyisidir.",
  // 30
  "SQL komutlarını çalıştıran nesne SqlCommand'dır.",
  // 31
  "DatetimePicker'ın tarih değerini tutan özelliği Value'dur.",
  // 32
  "Button nesnesinde ValueChanged olayı yoktur.",
  // 33
  "Kontrolden çıkış olayı Leave'dir.",
  // 34
  "Veri döndürmeyen SQL komutları için ExecuteNonQuery() kullanılır.",
  // 35
  "WHERE koşullarına uyan, İstanbul mağazalarında stok sayısı 100'den az olan ürünler listelenir.",
  // 36
  "Metotlarda varsayılan değere sahip parametreler bulunabilir.",
  // 37
  "DataGridView'den ComboBox'a veri aktarımı yapılır.",
  // 38
  "Bağlantısız mimaride DataAdapter.Fill ile çekilen veriler üzerinde arama yapılabilir, bağlantı gerekmez.",
  // 39
  "Form nesnesinde ValueChanged olayı yoktur.",
  // 40
  "ADO.NET, Microsoft tarafından geliştirilen tescilli bir teknolojidir, açık kaynak değildir.",
  // 41
  "XML dokümantasyonunda metot açıklaması için <summary> etiketi kullanılır.",
  // 42
  "OpenFileDialog'da seçilen dosyanın tam yolunu FileName özelliği verir.",
  // 43
  "Veritabanı bağlantısız mimaride, veri zaten belleğe yüklenmişse arama için tekrar bağlantıya gerek yoktur.",
  // 44
  "Her bir notu ilgili katsayı ile çarpıp toplarsak ağırlıklı ortalamayı bulmuş oluruz.",
  // 45
  "Çoklu doğru-yanlış sorusunda, her maddeyi tek tek analiz ederek doğru veya yanlış olduğunu işaretlemeliyiz. SQL'de WHERE ve HAVING birlikte kullanılabilir, metotlarda <returns> etiketi sadece değer döndürenlerde olur, açıklama satırları kodun başkaları tarafından anlaşılmasını kolaylaştırır, MySQL ile rapor için .rdl dosyası oluşmaz, bağlantı için MySql.Data.MySqlClient eklenir, STDEV istatistiksel bir fonksiyondur ve form uygulamalarında doğrudan bağlantı için kullanılmaz.",
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