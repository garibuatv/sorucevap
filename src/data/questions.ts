import { Question } from '../types/quiz';

export const questions: Question[] = [
  // Çoktan Seçmeli Sorular (1-43)
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proje klasörüne kayıtlı ilgili resim, dosya vb. etkileşimli bir şekilde projede kullanılabilmesi için aşağıdaki isim alanlarından (namespace) hangisi projeye eklenmelidir?',
    options: [
      'using System.Data.OleDb;',
      'using System.IO;',
      'using System.Drawing;',
      'using System.Picture;'
    ],
    correctAnswer: 2,
    hint: 'Görsel işlemler için en çok kullanılan namespace.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Projesinde MySQL veritabanına bağlanmak isteyen bir öğrenci aşağıdaki referanslardan hangisini (Solution Gezgini üzerinden) eklemelidir?',
    options: [
      'MySQL_DataTable',
      'MySQL_Database',
      'MySQL_Connection',
      'MySQL_DataSet'
    ],
    correctAnswer: 2,
    hint: 'Bağlantı kurmak için kullanılan nesne.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Aşağıda görme kısmı örnek metotlarla ilgili olarak yazılı ifadelerden hangisi kesinlikle doğrudur?',
    options: [
      'İsimlendirmesi hatalıdır',
      'Geriye daima sayı döndürür',
      'Geriye yalnızca metin döndürür',
      'Matematiksel işlem yapmaktadır'
    ],
    correctAnswer: 0,
    hint: 'Kodda isimlendirme kuralları önemlidir.'
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'TextBox1\'deki işlemi tamamlayıp TextBox2\'ye geçildiğinde yapılan işlemin kaydedilmesi için hangi olaya kod yazılmalıdır?',
    options: [
      'Click',
      'TextChanged',
      'Leave',
      'Enter'
    ],
    correctAnswer: 2,
    hint: 'Bir kontrolden çıkınca tetiklenen olay.'
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Aşağıdakilerden hangisi C# form uygulamasındaki raporlama (reportViewer) nesnesi sayesinde elde edilebilecek imkanlardan değildir?',
    options: [
      'Ekran raporu',
      'Word formatında rapor',
      'Excel formatında rapor',
      'Power Point formatında rapor'
    ],
    correctAnswer: 3,
    hint: 'PowerPoint desteği yoktur.'
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Kayıt otomasyonunda arama kutucuğuna yazma ve silme işlemine duyarlı olarak arama sonuçlarının güncellenmesi için hangi olaya kod yazılması gerekir?',
    options: [
      'TextBox-Click',
      'Button-Click',
      'TextBox-TextChanged',
      'Button-Enter'
    ],
    correctAnswer: 2,
    hint: 'Yazı değiştikçe tetiklenen olay.'
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Görseldeki tabloya göre, aşağıdaki sorgunun dönüşü aşağıdakilerden hangisi olur?\nSELECT COUNT(*) AS Sayı FROM Musteriler WHERE Adet < 5 AND Adet > 3;',
    options: [
      'Sayı 5',
      'Adet 11',
      'Sayı 7',
      'Sayı 46'
    ],
    correctAnswer: 0,
    hint: 'Adet değeri 3 ile 5 arasında olan satırları say.'
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Görseldeki tabloya göre, aşağıdaki sorgunun dönüşü aşağıdakilerden hangisidir?\nSELECT Urun, AVG(Adet) AS Miktar FROM Musteriler GROUP BY Urun;',
    options: [
      'Mouse 4, HDMI Kablo 3',
      'Mouse 3,4, HDMI Kablo 5',
      'Mouse 3, HDMI Kablo 5',
      'Webcam 5'
    ],
    correctAnswer: 2,
    hint: 'Her ürün için ortalama adet bulunur.'
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'Derste yapılan uygulamada, veritabanında bulunan kayıtlar çeşitli türlerde grafikle gösterilmiştir. Aşağıdakilerden hangisi derste oluşturulan grafik türlerinden biri değildir?',
    options: [
      'Dikey sütun',
      'Yatay bar',
      'Çizgi grafik',
      'Pasta grafik',
      'Donut grafik'
    ],
    correctAnswer: 4,
    hint: 'Donut grafik derste yoktu.'
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'XML teknolojisi ile ilgili aşağıda yer alan ifadelerden yanlış olanı işaretleyiniz.',
    options: [
      'Text tipi veri kaydetmede kullanılır',
      'Veri paylaşımda kullanılır',
      'Kodlaması HTML gibi sabit terimler içerir',
      'Kodlama sistemi HTML gibi hiyerarşiktir',
      'Farklı yazılımlar arası veri akışı sağlayabilir'
    ],
    correctAnswer: 2,
    hint: 'XML\'de sabit terimler yoktur, esnektir.'
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: '(Data Source="+Appdomain.Currentdomain.Basedirectory+"/../../Stok.mdb") yanındaki parantez içindeki kodda yer alan "Appdomain.Currentdomain.Basedirectory" hangi özel klasörü işaret etmektedir?',
    options: [
      'bin klasörü',
      'Database klasörü',
      'Proje ismini taşıyan klasörü',
      'Properties klasörü',
      'Debug klasörü'
    ],
    correctAnswer: 4,
    hint: 'Uygulamanın çalıştığı klasör.'
  },
  {
    id: 12,
    type: 'multiple-choice',
    question: 'Aşağıdakilerden hangisi Visual Studio\'nun veritabanı işlemleri kullandığı teknolojilerden değildir?',
    options: [
      'DAO',
      'ADO',
      'RDO',
      'VDO',
      'ODBC'
    ],
    correctAnswer: 3,
    hint: 'VDO adında bir veritabanı teknolojisi yoktur, diğerleri gerçektir.'
  },
  {
    id: 13,
    type: 'multiple-choice',
    question: 'Metotlarla ilgili işlem yapmak isteyen bir yazılımcı aşağıdaki işlemlerden hangisini yapamaz?',
    options: [
      '/// <param>...</param> ifadesi ile metodun herhangi bir parametresinin amacını açıklayabilir',
      'Metodun ürettiği değeri tekrar olduğu gibi metoda gönderebilir',
      'Metodun dışında global olarak tanımlanmış bir değişkenin değerini metot içinde kullanabilir',
      'void ile başlayan bir metoda /// <returns>...</returns> ifadesi ile geri döndürülecek veri oluşturabilir',
      '/// <returns>...</returns> ifadesi ile metodun vereceği cevabı tanıtabilir'
    ],
    correctAnswer: 3,
    hint: 'void metotlar veri döndürmez, <returns> etiketiyle veri tanımlanamaz.'
  },
  {
    id: 14,
    type: 'multiple-choice',
    question: 'ADO.NET\'e ait özelliklerden yanlış olanı işaretleyiniz.',
    options: [
      'Özellikle büyük veri uygulamaları için tercih edilir',
      'Anlık veri kullanan uygulamalarda problem olabilir',
      'İşlem sırasında DataSet, DataTable, DataRow, DataColumn gibi sınıflar kullanılır',
      'Access veritabanına uygulanabilir',
      'Ekle, Güncelle, Sil gibi işlemler Update() çalıştırılarak gerçek veritabanına uygulanabilir'
    ],
    correctAnswer: 0,
    hint: 'ADO.NET büyük veri için değil, daha çok orta ölçekli ve bağlantısız veri işlemleri için uygundur.'
  },
  {
    id: 15,
    type: 'multiple-choice',
    question: 'Tanımlanacak olan metotta kaç tane parametre kullanılacağı belli değilse parametreler ... ifadesi kullanılarak tanımlanır.',
    options: [
      'Nums',
      'Params',
      'Items',
      'Count',
      'Var',
      'Public'
    ],
    correctAnswer: 1,
    hint: 'C#\'ta değişken sayıda parametre için params anahtar kelimesi kullanılır.'
  },
  {
    id: 16,
    type: 'multiple-choice',
    question: 'Sıradan bir metotta aşağıdaki bölümlerden hangisi yer almayabilir?',
    options: [
      'Geri döndürülecek veri tipi ile ilgili terim',
      'Parametre parantezi',
      'Metoda erişim türü',
      'Metodu çağırırken kullanılacak isim',
      'Varsa parametre(lerin) veritürü'
    ],
    correctAnswer: 4,
    hint: 'Bir metotta parametre olmak zorunda değildir.'
  },
  {
    id: 17,
    type: 'multiple-choice',
    question: 'Metotlar ile ilgili aşağıdaki ifadelerden hangisi söylenemez?',
    options: [
      'Metot içinde bir başka metot çağrılabilir',
      'Metot içinde tanımlanan değişken metot dışında kullanılamaz',
      'Metot dışında oluşturulan bir değişkene metot içinden erişilemez',
      'Visual Studio\'da önceden tanımlanmış metotlar vardır',
      'Geliştirici tarafından bir işlemi gerçekleştirmesi için metot yazılabilir'
    ],
    correctAnswer: 2,
    hint: 'Global değişkenlere metot içinden erişilebilir.'
  },
  {
    id: 18,
    type: 'multiple-choice',
    question: 'Seçeneklerde verilenlerden hangisi TextBox nesnesinin bir özelliğidir?',
    options: [
      'Format',
      'ShortcutsEnabled',
      'Value',
      'Mask',
      'Items'
    ],
    correctAnswer: 1,
    hint: 'TextBox nesnesinin kısayol tuşlarını etkinleştiren özelliği.'
  },
  {
    id: 19,
    type: 'multiple-choice',
    question: 'Oluşturulacak bir *.txt dosyasına veri kaydedip okuma işlemleri ile ilgili aşağıdaki ifadelerden hangisi geçersizdir?',
    options: [
      'İsmi belirtilen bir klasörün belirtilen bir konumda bulunup bulunmadığı File.Exists() metoduyla kontrol edilebilir',
      'Veri kaydedilen bir dosyayı bulunduğu yerden kesip başka bir klasöre yapıştırmak için Move() metodu kullanılır',
      'FileStream sınıfı kullanılarak veri.txt adında bir dosya, istenilen klasörde oluşturulabilir',
      'Dosyada var olan bir metne ek olarak yeni metin yazmak için AppendText() metodu kullanılabilir',
      'Dosya işlemlerini gerçekleştirebilmek için using System.IO; satırının yazılmış olması gerekir'
    ],
    correctAnswer: 0,
    hint: 'File.Exists() metodu dosya için kullanılır, klasör için Directory.Exists() kullanılmalıdır.'
  },
  {
    id: 20,
    type: 'multiple-choice',
    question: 'Aşağıda Visual Studio\'da kullanılan metotlarla ilgili temel bilgiler yer almaktadır. Doğru olan seçeneği işaretleyiniz.',
    options: [
      'Bir programda aynı isme ve parametrelere sahip iki metot yazılamaz',
      'Metottaki parametre sayısı önceden bellidir, sınırsız parametresi olan metot olmaz',
      'Tanımlanmış bir metot peş peşe iki kez çağrılıp çalıştırılamaz',
      'Kullanıcı çağrılan metodun açıklamasını görebilir',
      'Programın kodları arasındaki uygun bölümler metoda çevrilir ve çok sayıda metot ortaya çıkarsa programın çalışması yavaşlar'
    ],
    correctAnswer: 3,
    hint: 'Metotlar için XML açıklama satırları yazılırsa, kullanıcı bu açıklamaları görebilir.'
  },
  {
    id: 21,
    type: 'multiple-choice',
    question: 'Seçeneklerde verilenlerden hangisi listBox nesnesinin bir özelliği değildir?',
    options: [
      'DataSource',
      'MultiColumn',
      'Text',
      'Items',
      'Sorted'
    ],
    correctAnswer: 2,
    hint: 'ListBox nesnesinde Text özelliği yoktur, diğerleri mevcuttur.'
  },
  {
    id: 22,
    type: 'multiple-choice',
    question: 'DataGridView nesnesinde, kayıt verisinin (metnin) direkt üstüne tıklayınca tetiklenen olay hangisidir?',
    options: [
      'CellValidated',
      'CellMouseClick',
      'CellClick',
      'CellTextClick',
      'CellContentClick'
    ],
    correctAnswer: 2,
    hint: 'Hücreye tıklama olayı.'
  },
  {
    id: 23,
    type: 'multiple-choice',
    question: 'XML dosyalarının özellikleri ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?',
    options: [
      'Çocuk elementi bir veya birden fazla olabilir',
      'Kayıtları birbirinden ayrıştırıcı veriler düğüm elementinin bir özelliği olarak saklanabilir',
      'Dokümanda veri varsa en az bir tane düğüm elementi vardır',
      'Bir XML dokümanında bir tane kök elementi bulunabilir',
      'Kök elementi veri işlemlerinde veritabanını temsil eder'
    ],
    correctAnswer: 4,
    hint: 'Kök element veritabanını temsil etmez, XML\'de sadece yapının en üst düğümüdür.'
  },
  {
    id: 24,
    type: 'multiple-choice',
    question: 'Aşağıda yer alan ifadelerden doğru olanı işaretleyiniz.',
    options: [
      'Bir XML dosyasında birden fazla Root elementi yer alabilir',
      'XML dosyaları yalnızca web ortamında veri paylaşımı için kullanılır',
      'Dosyaya veri yazma işlemi StreamWriter sınıfı ile yapılabilir',
      'Bir dosyayı bir klasörden kesip başka bir klasöre yapıştırmak için Cut metodu kullanılır',
      'Klasör silme işlemi için File sınıfının metotları kullanılır'
    ],
    correctAnswer: 2,
    hint: 'StreamWriter sınıfı ile dosyaya veri yazılabilir.'
  },
  {
    id: 25,
    type: 'multiple-choice',
    question: 'Seçeneklerde verilenlerden hangisi comboBox nesnesinin bir özelliği değildir?',
    options: [
      'Value',
      'Enabled',
      'Text',
      'Items',
      'AutoCompleteMode'
    ],
    correctAnswer: 0,
    hint: 'ComboBox nesnesinde Value özelliği yoktur, diğerleri mevcuttur.'
  },
  {
    id: 26,
    type: 'multiple-choice',
    question: 'XML dosyaları ile ilgili yanlış seçeneği işaretleyiniz.',
    options: [
      'Child elementi tablo sütunları gibi çalışır',
      'Node elementi tablonun satırlarına karşılık gelir',
      'Root elementi veritabanına karşılık gelir',
      'Temel olarak veri kaydedilebilir fakat bir veritabanı özelliği taşımaz',
      'Açılan elementler kapatılmalıdır'
    ],
    correctAnswer: 2,
    hint: 'Root elementi veritabanına karşılık gelmez, sadece XML\'in en üst düğümüdür.'
  },
  {
    id: 27,
    type: 'multiple-choice',
    question: 'Programcıya metodun amacını açıklamak için ... etiketi kullanılır.',
    options: [
      'Params',
      'Description',
      'Comment',
      'Void',
      'Summary'
    ],
    correctAnswer: 4,
    hint: 'C#\'ta metodun amacını açıklamak için <summary> etiketi kullanılır.'
  },
  {
    id: 28,
    type: 'multiple-choice',
    question: 'Veritabanından DataAdapter nesnesi ile çekilen veriler DataTable sınıfından türetilen sanal tabloya DataAdapter nesnesinin hangi metodu kullanılarak aktarılır?',
    options: [
      'Focus',
      'AutoComplete',
      'ExecuteNonQuery',
      'Fill',
      'DataSource'
    ],
    correctAnswer: 3,
    hint: 'DataAdapter.Fill(DataTable) ile veriler tabloya aktarılır.'
  },
  {
    id: 29,
    type: 'multiple-choice',
    question: 'Görsel Programlama ile ilgili ifadelerden hangisi uygun değildir?',
    options: [
      'Görselliği artırmak için forma mümkün olduğunca çok nesne eklenmelidir.',
      'Aynı amaca hizmet eden nesneler gruplanabilir.',
      'Okunması kolay yazıtipleri tercih edilmelidir.',
      'Tasarımda tamamlayıcı renkler tercih edilmelidir.',
      'Önemli nesneler formun üst kısımlarına eklenmelidir.'
    ],
    correctAnswer: 0,
    hint: 'Fazla nesne eklemek karmaşa yaratır, sade ve işlevsel tasarım en iyisidir.'
  },
  {
    id: 30,
    type: 'multiple-choice',
    question: 'Veritabanında değişiklik meydana getirecek olan SQL kodları ... nesnesi ile çalıştırılabilir.',
    options: [
      'DataSet',
      'OleDbConnection',
      'SqlCommand',
      'SqlDataAdapter',
      'DataTable'
    ],
    correctAnswer: 2,
    hint: 'SQL komutlarını çalıştıran nesne.'
  },
  {
    id: 31,
    type: 'multiple-choice',
    question: 'Seçeneklerde verilenlerden hangisi DatetimePicker nesnesinin bir özelliğidir?',
    options: [
      'Value',
      'DateSource',
      'AutoCompleteMode',
      'Date',
      'Text'
    ],
    correctAnswer: 0,
    hint: 'Tarih değerini tutan özellik.'
  },
  {
    id: 32,
    type: 'multiple-choice',
    question: 'Aşağıda yer alan olaylardan hangisi buton nesnesine ait değildir?',
    options: [
      'MouseLeave',
      'BackColorChanged',
      'TabIndexChanged',
      'TextChanged',
      'ValueChanged'
    ],
    correctAnswer: 4,
    hint: 'Button nesnesinde ValueChanged olayı yoktur.'
  },
  {
    id: 33,
    type: 'multiple-choice',
    question: 'TextBox1\'de işlem yapıp TextBox2\'ye geçildiği anda bir işlem yapılmasını isteyen bir yazılımcı TextBox1\'in hangi olayına kod yazmalıdır?',
    options: [
      'Leave',
      'Click',
      'TextChanged',
      'Exit',
      'Enter'
    ],
    correctAnswer: 0,
    hint: 'Kontrolden çıkış olayı.'
  },
  {
    id: 34,
    type: 'multiple-choice',
    question: 'Derste C# - Access arasında yapılan yerel veritabanı uygulamasında, Command nesnesini çalıştırmak en çok kullanılan metot aşağıdakilerden hangisidir?',
    options: [
      'ExecuteDataReader()',
      'ExecuteReader()',
      'ExecuteScalar()',
      'ExecuteXMLReader()',
      'ExecuteNonQuery()'
    ],
    correctAnswer: 4,
    hint: 'Veri döndürmeyen SQL komutları için kullanılan metot.'
  },
  {
    id: 35,
    type: 'multiple-choice',
    question: 'Aşağıdaki sorgu çalıştırılacak olursa nasıl bir sonuç ortaya çıkması beklenir?\nSELECT Urun_Turu AS [İstanbul Stok] FROM Urunler WHERE Magaza LIKE \'istanbul\' AND Stok_Adedi<100;',
    options: [
      'İstanbul mağazalarında stoğu en az 100 olan ürünler',
      'Ortalama stok sayısı 100\'ün altında olan ürünleri listeler',
      '"istanbul" başlığında stok sayısı 100 olan ürünler',
      'İstanbul mağazalarındaki stok sayısı 100\'den az',
      'Bu şartlara uygun bir sonuç bulunamaz'
    ],
    correctAnswer: 3,
    hint: 'WHERE koşullarını dikkatlice incele.'
  },
  {
    id: 36,
    type: 'multiple-choice',
    question: 'Metotlarla ilgili yanlış olan seçeneği işaretleyiniz.',
    options: [
      'Programdaki tekrarı olan bölümler tespit edilip metot haline getirilebilir.',
      'Kullanıcı çağrılan metodun açıklamasını göremez.',
      'Metotta varsayılan değere sahip olan parametreler bulunamaz.',
      'Tanımlanmış bir metot peş peşe iki kez çağrılıp çalıştırılamaz.',
      'Bazı programlama dillerinde metotlar için (Fonksiyonlar) farklı anahtar kelimeler kullanılabilir.'
    ],
    correctAnswer: 2,
    hint: 'Metotlarda varsayılan değere sahip parametreler bulunabilir.'
  },
  {
    id: 37,
    type: 'multiple-choice',
    question: '(Cb1.SelectedItem = dGV1.CurrentRow.Cells[1].Value.ToString();) Parantez içinde belirtilen kod ile ne yapılmak istenmiş olabilir?',
    options: [
      'dGV1\'nin seçili satırının 1 nolu hücresindeki veri Cb1\'e aktarılır.',
      'dGV1\'nin 1. satırının string türündeki verisi seçilerek Cb1\'e aktarılır.',
      'Cb1 isimli nesneden seçilen veri dGV1 adlı tabloya aktarılır.',
      'Cb1 isimli nesneden seçilen veri stringe dönüştürülür.',
      'dGV1\'nin seçili satırının 1 nolu hücresindeki veri Cb1\'e aktarılır.'
    ],
    correctAnswer: 0,
    hint: 'DataGridView\'den ComboBox\'a veri aktarımı.'
  },
  {
    id: 38,
    type: 'multiple-choice',
    question: 'Aşağıdaki işlemlerden hangisi için veritabanının açılıp kapatılmasına gerek yoktur?',
    options: [
      'Tablo Oluşturma İşlemi',
      'Veri Güncelleme İşlemi',
      'Veri Arama İşlemi',
      'Veri Silme İşlemi',
      'Yeni Kayıt Ekleme İşlemi'
    ],
    correctAnswer: 2,
    hint: 'Bağlantısız mimaride DataAdapter.Fill ile çekilen veriler üzerinde arama yapılabilir.'
  },
  {
    id: 39,
    type: 'multiple-choice',
    question: 'Aşağıda yer alan olaylardan hangisi Form nesnesinde yer almaz?',
    options: [
      'Click',
      'TextChanged',
      'ValueChanged',
      'Leave',
      'MouseLeave'
    ],
    correctAnswer: 2,
    hint: 'Form nesnesinde ValueChanged olayı yoktur.'
  },
  {
    id: 40,
    type: 'multiple-choice',
    question: 'Aşağıda yer alan ifadelerden hangisi ADO veya ADO.NET için geçerli değildir?',
    options: [
      'İkisi de veri kaynağı ile Connected formatta çalışabilirler.',
      'System.Data içinde tanımlanmış sınıflara sahiptirler.',
      'C# veri uygulamalarında kullanılan teknolojilerdir.',
      'Windows formu ve web formlarında kullanılabilirler.',
      'Açık kaynak olarak kullanılan teknolojilerdir.'
    ],
    correctAnswer: 4,
    hint: 'ADO.NET, Microsoft tarafından geliştirilen tescilli bir teknolojidir.'
  },
  {
    id: 41,
    type: 'multiple-choice',
    question: 'Bir metodun hangi işlemleri yapacağını ve kullanım amacını açıklamak için ... etiketi kullanılır.',
    options: [
      'Returns',
      'Summary',
      'Void',
      'Params',
      'Comment'
    ],
    correctAnswer: 1,
    hint: 'XML dokümantasyon etiketi.'
  },
  {
    id: 42,
    type: 'multiple-choice',
    question: 'Kayda resim eklenmesi işlemini kodlayan bir yazılımcı kopyalanacak olan kaynak dosyayı OpenFileDialog nesnesinin hangi özelliği ile ifade edebilir?',
    options: [
      'SafeFileName',
      'SourceFileName',
      'DestFileName',
      'Filter',
      'FileName'
    ],
    correctAnswer: 4,
    hint: 'Seçilen dosyanın tam yolunu veren özellik.'
  },
  {
    id: 43,
    type: 'multiple-choice',
    question: 'Veritabanı üzerinde yapılacak aşağıdaki işlemlerden hangisi için veritabanı bağlantısını açmaya gerek yoktur?',
    options: [
      'Veri arama işlemi',
      'Veri silme işlemi',
      'Yeni veri ekleme işlemi',
      'Tablo oluşturma işlemi',
      'Veri güncelleme işlemi'
    ],
    correctAnswer: 0,
    hint: 'Veritabanı bağlantısız mimaride, veri zaten belleğe yüklenmişse arama için tekrar bağlantıya gerek yoktur.'
  },

  // Kod Yazma Sorusu (44)
  {
    id: 44,
    type: 'code-writing',
    question: 'Kullanıcının tamsayı olarak gönderdiği 3 adet sınav puanını sırasıyla 0.2 – 0.3 – 0.5 katsayıları ile çarpıktan sonra oluşan değerlerin toplamı ile ortalamayı elde ederek sonucu döndüren OrtalamaHesapla adlı metodu ve çağırma satırını yazınız.',
    correctCode: `double OrtalamaHesapla(int not1, int not2, int not3) {
    return not1 * 0.2 + not2 * 0.3 + not3 * 0.5;
}

// Çağırma satırı:
double sonuc = OrtalamaHesapla(80, 70, 60);`,
    language: 'csharp',
    hint: 'Her bir notu ilgili katsayı ile çarp, topla ve sonucu döndür.'
  },

  // Çoklu Doğru/Yanlış Sorusu (45)
  {
    id: 45,
    type: 'multi-true-false',
    question: 'Görsel Programlama ile ilgili aşağıda yazılı ifadelerden doğru olanlara (D), yanlış olanlara (Y) harfi koyunuz.',
    statements: [
      {
        text: 'SQL sorgusunda WHERE ya da HAVING ifadelerinden sadece birisi yer alabilir.',
        correct: false
      },
      {
        text: 'Geriye değer döndüren bir metodun açıklama satırları arasında returns açıklaması bulunur.',
        correct: true
      },
      {
        text: 'Bir metot yalnızca 1 adet parametre alabilir, birden fazla parametre içeremez.',
        correct: false
      },
      {
        text: 'Projelerimizin ileride başka meslektaşlar ile kolayca geliştirilebilmesi için açıklama satırları eklenmelidir.',
        correct: true
      },
      {
        text: 'MySQL ile ilgili nesneleri kullandığımızda raporu gösterebilmek için arayüz olarak .rdl uzantılı bir dosya oluşur.',
        correct: false
      },
      {
        text: 'MySQL ile veritabanı bağlantısı için MySql.Data.MySqlClient uzantısı üstüne eklenmelidir.',
        correct: true
      },
      {
        text: 'C# form uygulamalarında en basit statik bağlantı sistemi şapada değerli STDEV ifadesi ile bulunabilir.',
        correct: false
      },
      {
        text: 'XML dosyası uygulamasında MySQL bağlantısı yapmak için MySQL Connector eklentisi kurulmalıdır.',
        correct: false
      },
      {
        text: 'XML dosyalarında veri erişimi için ilişkisel veritabanı diyagramları hazırlanmalıdır.',
        correct: false
      },
      {
        text: 'ADO ve ADO.NET teknolojilerinin her biri Connected ve Disconnected formatta çalışabilir.',
        correct: true
      }
    ],
    hint: 'Her maddeyi dikkatlice oku, bazıları kavramsal tuzak içeriyor.'
  },

  // Açıklamalı Kod Sorusu (46)
  {
    id: 46,
    type: 'code-explanation',
    question: 'Aşağıdaki kodların amacını ve button1\'e tıklanınca ne olacağını kısaca belirtiniz.',
    code: `Color Islem(int i){
    Color[] renk = { Color.Green, Color.Red, Color.Black, Color.Blue, Color.White, Color.Gray, Color.Yellow, Color.Brown };
    return renk[i];
}
Random rs = new Random();
private void button1_Click(object sender, EventArgs e)
{
    int[] sayi = { 1, 2, 3, 4, 5, 6, 7 };
    this.BackColor = Islem(sayi[2]);
    button3.ForeColor = Islem(sayi[rs.Next(0,7)]);
}`,
    language: 'csharp',
    correctExplanation: 'button1\'e tıklanınca formun arka plan rengi siyah olur (sayi[2]=3, renk[3]=Black). button3\'ün yazı rengi ise rastgele bir renge (Green, Red, Black, Blue, White, Gray, Yellow) ayarlanır.',
    hint: 'Kodun ne yaptığını adım adım incele.'
  }
];