import { Question } from '../types';

export const quizQuestions: Question[] = [
  {
    id: 1,
    questionText: `1. İlk yardım ile ilgili aşağıda verilenlerden hangisi
doğrudur?`,
    options: [
      { id: 'A', text: `A. Hastanede yapılan müdahaledir.` },
      { id: 'B', text: `B. Acil serviste yapılan müdahaledir.` },
      { id: 'C', text: `C. Ambulansta hekim tarafından yapılan ilk müdahaledir.` },
      { id: 'D', text: `D. Olay yerindeki mevcut imkânlarla yapılan  hızlı ve etkili müdahale dir.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 2,
    questionText: `2. “Ani olarak ortaya çıkan hastalık veya yaralanma
durumunda; kişinin hayatını korumak, sağlık
durumunun kötüleşmesini önlemek ve iyileşmesine
destek olmak amacıyla olay yerindeki mevcut
imkânlarla yapılan hızlı ve etkili müdahale” olarak
tanımlanan kavram aşağıdakilerden hangisidir?`,
    options: [
      { id: 'A', text: `A. Acil tedavi` },
      { id: 'B', text: `B. İlk yardım` },
      { id: 'C', text: `C. Acil müdahale` },
      { id: 'D', text: `D. İleri yaşam desteği` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 3,
    questionText: `3. Aşağıdakilerden hangisi ilk yardımcıda bulunması
gereken özelliklerden değildir?`,
    options: [
      { id: 'A', text: `A. Sakin , kendine güvenli ve pratik olmalı` },
      { id: 'B', text: `B. İnsan vücudu ile ilgili temel bilgilere sahip olmalı` },
      { id: 'C', text: `C. Önce etrafındakilerin  can güvenliğini korumalı` },
      { id: 'D', text: `D. İyi bir iletişim becerisine sahip olmalı` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 4,
    questionText: `4. “Sağlık, yaşam, mülk veya çevre için acil risk
oluşturan durumları ifade eden ve çoğu zaman
kötüleşmeyi önlemek için acil müdahale gerektiren
durumlar” olarak tanımı verilen kavram
aşağıdakilerden hangisidir?`,
    options: [
      { id: 'A', text: `A. Acil durum` },
      { id: 'B', text: `B. Acil müdahale` },
      { id: 'C', text: `C. Kurtarma` },
      { id: 'D', text: `D. İlk yardım I.Kişinin hayatını korumak II.İyileşmesine destek olmak III.Sağlık durumunun kötüleşmesini önlemek IV.En yakın sağlık k uruluşuna güvenle ulaşımını sağlanmak` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 5,
    questionText: `5. Yukarıda  verilen lerden hangileri ilk yardımın
amaçlarındandır?`,
    options: [
      { id: 'A', text: `A. III- IV` },
      { id: 'B', text: `B. I- II- III- IV` },
      { id: 'C', text: `C. I- III- IV` },
      { id: 'D', text: `D. I- II- III 6. Aşağıdakilerden hangisi ilk yardımın temel amaçlarından değildir? A. Hayatını korumak B. Hastaya teşhis koymak C. İyileşmesine destek olmak D. Sağlık durumunun kötüleşmesini önlemek` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 7,
    questionText: `7. Aşağıdakilerden hangisi hasta/yaralıda ilk yardım
uygulamasında rıza alınması ile ilgili yanlıştır?`,
    options: [
      { id: 'A', text: `A. 18 yaş altında olan hasta/yaralıda ebeveyninden izin alınır.` },
      { id: 'B', text: `B. Bilinci yerinde olan hasta/yaralıda rıza sözlü veya baş hareketi şeklinde alını r.` },
      { id: 'C', text: `C. Bilin ci yerinde olan hasta/yaralı yardımı reddetse bile ilk yardım yapılır.` },
      { id: 'D', text: `D. Bilinci yerinde olmayan hasta/yaralıda rıza alınmış kabul edilir.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 8,
    questionText: `8. Acil durum ile başa çıkabilmenin ilk şartı
aşağıdakilerden hangisidir?`,
    options: [
      { id: 'A', text: `A. Ortamda olanları anlamaya çalışmadan izlemek` },
      { id: 'B', text: `B. Acil durumun ne olduğunu fark etmek ve anlamak` },
      { id: 'C', text: `C. Olayı görme zden gelmek` },
      { id: 'D', text: `D. Yardım edip etmeme kararını vermek` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 9,
    questionText: `9. Aşağıdak ilerden hangisi acil durum olarak
değerlendirilmez?`,
    options: [
      { id: 'A', text: `A. Normal davranışlar gösteren kişilerin varlığı` },
      { id: 'B', text: `B. Devrilen ya da çok sayıda aracın dâhil olduğu trafik kazaları` },
      { id: 'C', text: `C. Olay yerindeki kanlı manzaralar` },
      { id: 'D', text: `D. Normal dışı sesler` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 10,
    questionText: `10. Olay yerinin güvenli hale getirilmesinde ilk
yardımcının aşağıdakilerden hangisini yapması
doğru değildir?`,
    options: [
      { id: 'A', text: `A. Olayın ne olduğunu anlamaya çalışır.` },
      { id: 'B', text: `B. Olay yerinde tehlikeli bir durum varsa uzaklaşır.` },
      { id: 'C', text: `C. Gerekli güvenlik önlemlerini alır.` },
      { id: 'D', text: `D. Olay yeri güvensiz de olsa ilk yardıma başlar. T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 3` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 11,
    questionText: `11. Aşağıdakilerden hangisi olay yerinin güvenli hale
getirilmesinde yapılacak doğru bir uygulamadır?`,
    options: [
      { id: 'A', text: `A. İlk yardımcının can güvenliği her zaman önceliklidir.` },
      { id: 'B', text: `B. Olay yeri  trafik, yangın, elektrik kabloları yönünden değerlendirilmez.` },
      { id: 'C', text: `C. İlk olarak hasta/yaralı ve olay yerindeki insanları korumak için önlemler alı nır.` },
      { id: 'D', text: `D. Hasta/yaralı nın eşyalarının kaybolması ve hırsızlık açısından önlem al ınmaz.` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 12,
    questionText: `12. İlk yardımcı trafik kazasına müdahale edi yorsa
olay yeri güvenliği açıs ından aşağıdakilerden
hangisini  yapması doğru değildir?`,
    options: [
      { id: 'A', text: `A. Tüm müdahaleler i trafik kurallarına uyarak yapa r.` },
      { id: 'B', text: `B. Trafikteki sürücü ve yayalar ı uyar ır.` },
      { id: 'C', text: `C. Şehir içi 150 metre me safeye uyarı işareti yerleştir ir.` },
      { id: 'D', text: `D. Araçların motorları nı kapatır ve el frenleri ni çeke r.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 13,
    questionText: `13. Aşağıdakilerden hangisi hasta/yaralı nın
durumunun değerlendirilmesinde uygulanacak
adımlardan değildir?`,
    options: [
      { id: 'A', text: `A. Birincil kontrolün gerçekleştirilmesi` },
      { id: 'B', text: `B. Tüm vücudun baştan sona yeniden değerlendirilmesi` },
      { id: 'C', text: `C. Hasta/yaralının hikâyesinin alınması` },
      { id: 'D', text: `D. Hiçbir şey yapmadan olay yerinde beklenilmesi` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 14,
    questionText: `14. Aşağıdakilerden hangisi hasta/yaralı  birincil
kontrolünün gerçekleştirilmesi aşamalarından
değildir?`,
    options: [
      { id: 'A', text: `A. Birincil kontrol ilk izlenim ile başlar.` },
      { id: 'B', text: `B. Kişinin hasta mı yaralı mı olduğuna bakılır.` },
      { id: 'C', text: `C. Kişinin yanıt verme durumu değerlendirilir.` },
      { id: 'D', text: `D. Kişinin tansiyon değerlendirilmesi yapılır.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 15,
    questionText: `15. Aşağıdakilerden hangisi yanıt veren
hasta/yaralıda acil durum kabul edilerek hemen
112’nin aranması gereken bir durum değildir?`,
    options: [
      { id: 'A', text: `A. Hava yolu tıkanıklığı` },
      { id: 'B', text: `B. Kalp krizi` },
      { id: 'C', text: `C. Normal solunum` },
      { id: 'D', text: `D. Ciddi kanama` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 16,
    questionText: `16. Aşağıdakilerden hangisi yanıt veren
hasta/yaralıda ilk yardımcının izlemesi gereken
adımlardan değildir?`,
    options: [
      { id: 'A', text: `A. İlk yardımcı öncelikle kendini tanıtır.` },
      { id: 'B', text: `B. İlk yardım eğitimi aldığını söyler.` },
      { id: 'C', text: `C. Ne yapacağını açıklar.` },
      { id: 'D', text: `D. Göz teması kurmaktan kaçınır.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 17,
    questionText: `17. Aşağıdakilerden hangisi y anıt vermeyen
hasta/yaralıda ilk yardımcının yapması gereken
uygulamalar dan değildir?`,
    options: [
      { id: 'A', text: `A. 112 acil yardım numarası nı ara r.` },
      { id: 'B', text: `B. Hasta/yaralı yı düz bir yüzeye yatırı r.` },
      { id: 'C', text: `C. Solunum unu değerlendirirken göğüs hareketlerine baka r.` },
      { id: 'D', text: `D. Hasta/yaralı nefes al mıyorsa derlenme pozisyonu verir.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 18,
    questionText: `18. Tüm vücudun baştan sona yeniden
değerlendirilmesinde aşağıdakilerden hangisi
yaralanmanın ciddi olduğunu düşündüren
durumlardan değildir?`,
    options: [
      { id: 'A', text: `A. Kişinin boyunun üç katından daha yüksekten düşmesi` },
      { id: 'B', text: `B. Bilinç değişikl iğine neden olan baş yaralanmas ı` },
      { id: 'C', text: `C. Küçük yanık yarası` },
      { id: 'D', text: `D. Aracın yayalara çarp ması` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 19,
    questionText: `19. Hasta/yaralının hikâyesinin alınm asında
aşağıdakilerden hangisi nin yapılması  doğru
değildir?`,
    options: [
      { id: 'A', text: `A. Yaralanmanın nedeni belirlenir.` },
      { id: 'B', text: `B. Hasta/yaralıdan neler olduğunu a yrıntılı olarak açıklaması isten ir.` },
      { id: 'C', text: `C. Hasta/yaralı ya “Sorun nedir?”, “Size ne oldu?” gibi sorular sorulu r.` },
      { id: 'D', text: `D. Hasta/yaralıya teşhis koyulur.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 20,
    questionText: `20. Olay yerindeki ilk yardımcı  hasta/yaralının en
yakın sağlık kuruluşuna sevkini sağlamak için
aşağıdaki telefon numaralarından hangisini
aramalıdır?`,
    options: [
      { id: 'A', text: `A. 112` },
      { id: 'B', text: `B. 114` },
      { id: 'C', text: `C. 118` },
      { id: 'D', text: `D. 184 T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 4` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 21,
    questionText: `21. 112 Acil Çağrı Merkezini arayan kişinin
aşağıdakilerden hangisini yapması yanlıştır?`,
    options: [
      { id: 'A', text: `A. Sakin olması` },
      { id: 'B', text: `B. Kendisini tanıtması` },
      { id: 'C', text: `C. Sorulan sorulara net cevap vermesi` },
      { id: 'D', text: `D. Adres vermeden telefonu kapat ması` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 22,
    questionText: `22. 112 Acil Çağrı Merkezi nin aranması sırasında
aşağıdakilerden hangisinin yapılması yanlıştır?`,
    options: [
      { id: 'A', text: `A. Yaralı sayısının bildirilmesi` },
      { id: 'B', text: `B. Arayan kişinin kendini tanıtması` },
      { id: 'C', text: `C. Yaralıların durumuyla ilgili bilgi verilmesi` },
      { id: 'D', text: `D. Olay yerindeki herkesin isminin tek tek söylenmesi` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 23,
    questionText: `23. Aşağıdakilerden hangisi 112 acil yardım
numarası aranırken dikkat edilmesi gereken
hususlardan  biri değildir?`,
    options: [
      { id: 'A', text: `A. İlk yardımcı öncelikle kendini tanıtır.` },
      { id: 'B', text: `B. Hasta/yaralı sayısı nı tam olarak söyle r.` },
      { id: 'C', text: `C. Adres  bilgisi ni açıkça belirtir.` },
      { id: 'D', text: `D. Karşı tarafı dinlemeden telefonu kapatır.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 24,
    questionText: `24. İlk yardımcının hasta/yaralıya müdahale ederken
aşağıdakilerden hangisini yapması doğru olmaz?`,
    options: [
      { id: 'A', text: `A. Soğuktan ve aşırı sıcaktan koru ması` },
      { id: 'B', text: `B. Hareket ettirmeden müdahale etmesi` },
      { id: 'C', text: `C. Bulantısı varsa tuzlu yiyecek vermesi` },
      { id: 'D', text: `D. Korku ve endişelerini gidermesi` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 25,
    questionText: `25. Aşağıdakilerden hangisi 112 acil yardım
numarasının aranmasının sağladığı avantajlardan
değildir?`,
    options: [
      { id: 'A', text: `A. Hast a/yaralıya sağlık görevlilerinin müdahale etmesi  sağla nır.` },
      { id: 'B', text: `B. Hasta/yaralı hastaneye özel araçla daha hızlı götürülür.` },
      { id: 'C', text: `C. İlk yardımda kullanılacak temel bilgileri verir.` },
      { id: 'D', text: `D. Sağlık personelinin müdahalesi hasta/yaralının hayatta kalma şansını artırır. I.Durum yaşamı tehdit ediyor mu? II.Durum daha da kötüleşebilir mi? III.Hasta/yaralının hareket ettirilmesi daha fazla yaralanmaya neden olur mu? IV.Kişi hastaneye gitmek istiyor mu?` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 26,
    questionText: `26. Yukarıda verilen  sorulardan hangisinin yanıtı
“evet” ise veya cevap şüph eliyse 112 a cil yardım
numarası  aranmalıdır?`,
    options: [
      { id: 'A', text: `A. Yalnız I` },
      { id: 'B', text: `B. I- II` },
      { id: 'C', text: `C. II- III- IV` },
      { id: 'D', text: `D. I- II- III- IV` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 27,
    questionText: `27. Hasta/yaralıya ilk yardım uygularken
aşağıdakilerden hangisinin yapılması doğru
değildir?`,
    options: [
      { id: 'A', text: `A. İsmi ile hitap edilir.` },
      { id: 'B', text: `B. Açıklama yapmadan ilk yardım yapılır.` },
      { id: 'C', text: `C. Endişeli ise korkmasının normal olduğu söylenir.` },
      { id: 'D', text: `D. Soğuktan ve aşırı sıcaktan korunur.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 28,
    questionText: `28. Derlenme pozisyonu verilmeden önce aşağıdaki
uygulamalardan  hangisi nin yapıl ması doğru
değildir ?`,
    options: [
      { id: 'A', text: `A. Bilinç kontrol edilir.` },
      { id: 'B', text: `B. Solunum kontrol edilir.` },
      { id: 'C', text: `C. Gözlükleri varsa çıkarılır.` },
      { id: 'D', text: `D. Su içirilir .` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 29,
    questionText: `29. Aşağıdakilerden hangisi hasta/yaralıya derlenme
pozisyonu verilme amaçlarından değildir?`,
    options: [
      { id: 'A', text: `A. Hava yolunu açık tutmak` },
      { id: 'B', text: `B. Solunumun devamını sağlamak` },
      { id: 'C', text: `C. Beyne giden kan akımını artırmak` },
      { id: 'D', text: `D. Kusmaya bağlı boğulma riskini önlemek` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 30,
    questionText: `30. Aşağıdakilerden hangisi hasta/yaralıya derlenme
pozisyonu verilme basamaklarından değildir?`,
    options: [
      { id: 'A', text: `A. Hasta/yaralının çevrilmek istenilen tarafına diz çökülür.` },
      { id: 'B', text: `B. Yakındaki kolu vücuduna dik açı ile yerleştirilip diğer el in arkası diz çökülen  taraftaki yanakta olacak şekilde yerleştirilir.` },
      { id: 'C', text: `C. Bacağı dizden bükülerek kaldırılır ve kendine doğru çekip hasta/yaralı döndürülür.` },
      { id: 'D', text: `D. Hava yolunu açık tutmak için hasta/yaralının yüzü yukarıya bakacak şekilde yerleştirilir. T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 5` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 31,
    questionText: `31. Bilinç kaybı olan kişilerde hangi organ geri
kaçarak solunum yolunu tıkayabilir?`,
    options: [
      { id: 'A', text: `A. Burun` },
      { id: 'B', text: `B. Dil` },
      { id: 'C', text: `C. Dudak` },
      { id: 'D', text: `D. Yutak VÜCUT SİSTEMLERİ` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 32,
    questionText: `32. Aşağıdakilerden hangisi insan vücudunu
oluşturan sistemlerden değildir?`,
    options: [
      { id: 'A', text: `A. Böbrek` },
      { id: 'B', text: `B. Hareket` },
      { id: 'C', text: `C. Dolaşım` },
      { id: 'D', text: `D. Solunum` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 33,
    questionText: `33. Aşağıdakilerden hangisi dolaşım sistemini
oluşturan organlardandır?`,
    options: [
      { id: 'A', text: `A. Böbrek` },
      { id: 'B', text: `B. Kalp` },
      { id: 'C', text: `C. Mide` },
      { id: 'D', text: `D. Kas` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 34,
    questionText: `34. Aşağıdakilerden hangisi solunum sistemini
oluşturan organlardandır?`,
    options: [
      { id: 'A', text: `A. Kalp` },
      { id: 'B', text: `B. Beyin` },
      { id: 'C', text: `C. Akciğer` },
      { id: 'D', text: `D. Kemik` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 35,
    questionText: `35. Tüm organ ve dokular ı oluşturan hücrelerin
yaşaması için gerekl i olan oksijeni havadan alma yı
ve hücreler de oluşan karbo ndioksiti dışarı atmayı
sağlayan sistem hangisidir?`,
    options: [
      { id: 'A', text: `A. Sinir` },
      { id: 'B', text: `B. Hareket` },
      { id: 'C', text: `C. Solunum` },
      { id: 'D', text: `D. Sindirim` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 36,
    questionText: `36. Ana organların beyin ve omurilik olduğu,
vücudun tüm sistemlerinin çalışmasını kontrol
eden sinir hücrelerinden oluşan sistem
aşağıdakilerden hangisidir?`,
    options: [
      { id: 'A', text: `A. Sinir` },
      { id: 'B', text: `B. Sindirim` },
      { id: 'C', text: `C. Hareket` },
      { id: 'D', text: `D. Solunum T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 6 I.Ana organları beyin ve omuriliktir. II.Vücudun tüm sistemlerinin çalışmasını kontrol eder. III.Sinir hücreleri kendilerini yenileyebilir. IV.Beyin oksijensizliğe en fazla 4 -6 dakika dayanabilir.` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 37,
    questionText: `37. Sinir sistemi ile ilgili verilenlerden hangileri
doğrudur?`,
    options: [
      { id: 'A', text: `A. II- III` },
      { id: 'B', text: `B. III- IV` },
      { id: 'C', text: `C. I- II- IV` },
      { id: 'D', text: `D. II- III- IV` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 38,
    questionText: `38. Aşağıdakilerden hangisi cildin görevlerinden
değildir?`,
    options: [
      { id: 'A', text: `A. Vücudu mikroplardan korur.` },
      { id: 'B', text: `B. Isı kaybını önlemez.` },
      { id: 'C', text: `C. Terleme ile sıvı dengesinin korunmasına sağlar.` },
      { id: 'D', text: `D. Atık maddelerin vücuttan uzaklaştırılmasını sağlar . ACİL TAŞIMA TEKNİKLERİ` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 39,
    questionText: `39. Olay yerinde tehlike söz konusuysa her türlü
riske rağmen hasta/yaralıya aşağıdakilerden
hangisinin  yapılması zorunludur?`,
    options: [
      { id: 'A', text: `A. Ekip çalışması` },
      { id: 'B', text: `B. Güvenli bir alan` },
      { id: 'C', text: `C. Acil taşıma` },
      { id: 'D', text: `D. Yaralı sayısını belirlemek` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 40,
    questionText: `40. Aşağıdakilerden hangisi taşıma teknikleri
uygulanırken uyulması gereken kurallardan
değildir?`,
    options: [
      { id: 'A', text: `A. Kuvvetli ve uzun kas grupları kullanılır.` },
      { id: 'B', text: `B. Yavaş ve düzgün adımlarla yürünür.` },
      { id: 'C', text: `C. Kalkarken ağırlık kalça kaslarına verilir.` },
      { id: 'D', text: `D. Hasta/yaralıya uzak mesafede durulur.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 41,
    questionText: `41. Aşağıdakilerden hangisi h asta/yaralının
taşınmasında uyulması g ereken temel kurallardan
değildir ?`,
    options: [
      { id: 'A', text: `A. Ani dönme ve bükülmelerden kaçınılır.` },
      { id: 'B', text: `B. Hızlı ve koşar adımlarla yürünür.` },
      { id: 'C', text: `C. Baş her zaman düz tutulmalıdır.` },
      { id: 'D', text: `D. Hasta/yaralıya yakın mesafede durulur.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 42,
    questionText: `42. Aşağıdakilerden hangisi hasta/yaralının nakli
sırasında uyulması gereken temel kurallardan
değildir?`,
    options: [
      { id: 'A', text: `A. Gerekmedikçe hasta/yaralı hareket ettirilmemelidir.` },
      { id: 'B', text: `B. Hasta/yaralının baş -boyun -gövde ekseni korunmalıdır.` },
      { id: 'C', text: `C. Nakil sırasında hasta/yaralının genel durumu takip edilmelidir.` },
      { id: 'D', text: `D. Sorumlu kişi hasta/yaralının ayak kısmını tutan kişi olmalıdır.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 43,
    questionText: `43. Aşağıdakilerden hangisi rentek  manevrası
uygulaması için doğru değildir?`,
    options: [
      { id: 'A', text: `A. Araç içindeki hasta/yaralının omuriliğine zarar vermeden çıkarmada kullanılır.` },
      { id: 'B', text: `B. Solunum durması yangın veya patlama riski varlığında uygulanır.` },
      { id: 'C', text: `C. Hastanın birinci l değerlendirilmesi yapıldıktan sonra uygulanır.` },
      { id: 'D', text: `D. Hastanın bilinci açıksa ve hayati risk yoksa uygulanır. T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 7` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 44,
    questionText: `44. Araç içerisindeki hasta/yaralının taşınmasında
kullanılan manevra aşağıdakilerden hangisidir?`,
    options: [
      { id: 'A', text: `A. Rentek` },
      { id: 'B', text: `B. Altın beşik` },
      { id: 'C', text: `C. Denk kayışı` },
      { id: 'D', text: `D. Kütük yuvarlama` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 45,
    questionText: `45. Aşağıdakilerden hangisi rentek manevrasının
uygulama basamaklarından değildir?`,
    options: [
      { id: 'A', text: `A. Olay yeri güvenli hale getirilir.` },
      { id: 'B', text: `B. Aracın kontağı kapatılır, el freni çekilir.` },
      { id: 'C', text: `C. Hasta/yaralının bilinci değerlendirilir.` },
      { id: 'D', text: `D. Solunum değerlendirilmeden çıkarılır. I.Solunumunun kontrol edilmesi II.Emniyet kemeri takılıysa çıkarılması III.Ayaklarının pedala sıkışmış olup olmadığının kontrol edilmesi IV.Omuzlarına hafifçe dokunarak “İyi misin?” diye sorarak bilinç değerlendirmesi yapılması V.112 aranması` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 46,
    questionText: `46. Rentek manevrasıyla hasta/yaralının araç
içinden çıkarılmasında uygulamalar hangi sıralama
ile yapılmalıdır?`,
    options: [
      { id: 'A', text: `A. IV- V- I- III- II` },
      { id: 'B', text: `B. II- IV- V- I- V- III` },
      { id: 'C', text: `C. III- II- IV- I- V` },
      { id: 'D', text: `D. I- IV- V- II- III` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 47,
    questionText: `47. Aşağıdakilerden hangisi hasta/yaralının dar,
basık ve geçiş güçlüğü olan yerden çıkarılmasın da
seçil ecek yöntemlerden biridir?`,
    options: [
      { id: 'A', text: `A. Sürükleme` },
      { id: 'B', text: `B. Omuzda` },
      { id: 'C', text: `C. Sırtta` },
      { id: 'D', text: `D. Yan koltuk desteği` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 48,
    questionText: `48. Tek ilk yar dımcı ile bilinci açık çocuk ve ya zayıf
yetişkinleri taşımak için kullanılan yöntem
aşağıdakilerden hangisidir?`,
    options: [
      { id: 'A', text: `A. Kucakta taşıma` },
      { id: 'B', text: `B. Kaşık tekniği` },
      { id: 'C', text: `C. Köprü tekniği` },
      { id: 'D', text: `D. Teskereci yöntemi` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 49,
    questionText: `49. Aşağıd akilerden hangisi hasta/yaralın ın sedye
üzerine yerleştir ilmesi için kullanılan  tekniklerden
değildir?`,
    options: [
      { id: 'A', text: `A. Kaşık tekniği` },
      { id: 'B', text: `B. Köprü tekniği` },
      { id: 'C', text: `C. Karşılıklı durarak kaldırma` },
      { id: 'D', text: `D. Kucakta taşıma` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 50,
    questionText: `50. Hasta/yaralının sedyeye aktarı lması için
aşağıdaki teknikler den hangisi kullanılamaz?`,
    options: [
      { id: 'A', text: `A. Kütük yuvarlama` },
      { id: 'B', text: `B. Karş ılıklı durarak kaldırma` },
      { id: 'C', text: `C. Köprü` },
      { id: 'D', text: `D. Önde beşik` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 51,
    questionText: `51. Aşağıdakilerden hangisi hasta/yaralıyı tek ilk
yardımcı ile taşıma tekniğidir?`,
    options: [
      { id: 'A', text: `A. Sırtta taşıma` },
      { id: 'B', text: `B. Sandalye ile taşıma` },
      { id: 'C', text: `C. Teskereci yöntemi` },
      { id: 'D', text: `D. Altın beşik  yöntemi` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 52,
    questionText: `52. Yürüyemeyen ya da bilinci kapalı hasta/yaralının
taşınmasında kullanılan yöntem aşağıdakilerden
hangisidir?`,
    options: [
      { id: 'A', text: `A. İtfaiyeci yöntemi` },
      { id: 'B', text: `B. Sırtta taşıma` },
      { id: 'C', text: `C. Önde beşik yöntemi` },
      { id: 'D', text: `D. Altın beşik yöntemi` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 53,
    questionText: `53. “Hasta/yaralının iki ilk yardımcı ile ellerin
üzerinde taşınması” olarak tanımlanan teknik
aşağıdakilerden hangisidir?`,
    options: [
      { id: 'A', text: `A. Altın beşik` },
      { id: 'B', text: `B. İtfaiyeci` },
      { id: 'C', text: `C. Köprü` },
      { id: 'D', text: `D. Kaşık` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 54,
    questionText: `54. Aşağıdaki hasta/yaralı taşıma tekniklerinden
hangisi en az iki kişiyle uygulanır?`,
    options: [
      { id: 'A', text: `A. Omuzda taşıma` },
      { id: 'B', text: `B. Sırtta taşıma` },
      { id: 'C', text: `C. Sandalye ile taşıma` },
      { id: 'D', text: `D. Kucakta taşıma T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 8` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 55,
    questionText: `55. Aşağıda verilen taşıma tekniklerinden hangisi
birden  fazla ilk yardımcı ile uygulanır ?`,
    options: [
      { id: 'A', text: `A. İtfaiyeci` },
      { id: 'B', text: `B. Kaşık` },
      { id: 'C', text: `C. Önde beşik` },
      { id: 'D', text: `D. Denk kayışı` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 56,
    questionText: `56. Baş-boyun ya da omurga yaralanmasından
şüphelenilen hasta/yaralının  sedyeye aktarılması
için uygulanan  yöntem aşağıdakilerden hangisidir?`,
    options: [
      { id: 'A', text: `A. Kütük yuvarlama tekniği` },
      { id: 'B', text: `B. Altın beşik yöntemi` },
      { id: 'C', text: `C. Denk kayış yöntem` },
      { id: 'D', text: `D. Önde beşik yöntemi` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 57,
    questionText: `57. Aşağıdakilerden hangisi taşıma sırasında
hasta/ya ralının sedyeden düşmemesi için  uyulması
gereken kurallardan değildir?`,
    options: [
      { id: 'A', text: `A. Hasta/yaralı  sedyeye sabitlenmeli` },
      { id: 'B', text: `B. Sorumlu olan ilk yardımcı k omut vermeli` },
      { id: 'C', text: `C. Güçlü olan  ilk yardımcı hasta/yaralının ayak kısmında konumlanmalı` },
      { id: 'D', text: `D. Önce h asta/yaralı battaniye , çarşaf  gibi bir malzeme ile sarılmalı` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 58,
    questionText: `58. Aşağıdakilerden hangisi sedyenin dört ilk
yardımcı ile taşınması sırasında uyulacak
kurallardan değildir?`,
    options: [
      { id: 'A', text: `A. Hasta/yaralının durumu ağır ya da yol uzun, zor ve engelli ise kullanılmalı` },
      { id: 'B', text: `B. Sedyenin sol tarafından tutanlar sağ, sağ tarafından tutanlar ise sol adımlarıyla yürümeye başlamalı` },
      { id: 'C', text: `C. Dar bölgeden yürürken ilk yardımcılar sırtlarını sedyenin iç kısmına vererek yerleşmeli` },
      { id: 'D', text: `D. Merdiven veya yokuş inip çıkarken, sedye mümkün olabilecek en yatay pozisyonda tutulmalı OTOMATİK EKSTERNAL DEFİBRİLATÖR (OED)` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 59,
    questionText: `59. Otomatik Eksternal Defibrilatör (OED) /Şok cihazı
ile ilgili aşağı verilen ifadelerden hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Kalbe şok verilmesini sağlayan cihazdır.` },
      { id: 'B', text: `B. Kullanımı zor karmaşık bir cihazdır.` },
      { id: 'C', text: `C. Hafif ve taşınabilir bir cihazdır.` },
      { id: 'D', text: `D. Eğitim almış herkes kullanabilir.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 60,
    questionText: `60. Aşağıdakilerden hangisi OED/Şok cihazı
uygulaması için doğrudur?`,
    options: [
      { id: 'A', text: `A. OED; kalp ritim  analizi yaparken hasta/yaralıya dokunulmalıdır.` },
      { id: 'B', text: `B. OED hasta/yaralının solunumunu değerlendirmez.` },
      { id: 'C', text: `C. OED kalp pili olan kişilerde kullanılmaz.` },
      { id: 'D', text: `D. OED uygulaması sonrası yaşam belirtisi gösteren hastalarda cihaz kapatılmalıdır.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 61,
    questionText: `61. OED/Şok cihazı ile ilgili aşağı verilen ifadelerden
hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Hastanın kalp ritmini değerlendirir.` },
      { id: 'B', text: `B. Şok verirken hasta/yaralıya dokunulmamalıdır.` },
      { id: 'C', text: `C. Hasta kendine gelirse cihaz kapatılır.` },
      { id: 'D', text: `D. İlk beş dakikada uygulanırsa sağ kalım oranını artırır.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 62,
    questionText: `62. OED/Şok cihazı ile ilgili aşağı verilen ifadelerden
hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Pedlerin yapışacağı bölgenin kuru olması gerekir.` },
      { id: 'B', text: `B. Gebelerde kullanımı güvenlidir.` },
      { id: 'C', text: `C. Kalp pili olduğu bilinen hastalarda ped kalp pilinden 2,5 cm uzağına yapıştırılmalıdır.` },
      { id: 'D', text: `D. Göğüs bölgesinde yapıştırılm ış ilaç bantları varsa kalmalıdır .` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 63,
    questionText: `63. Aşağıdakilerden hangisi OED/Şok cihazının
kullanımı için uygundur?`,
    options: [
      { id: 'A', text: `A. Pedlerin yapışacağı bölge kuru olduğunda` },
      { id: 'B', text: `B. Yağmur altında` },
      { id: 'C', text: `C. Islak ve metal zeminde` },
      { id: 'D', text: `D. Yanıcı gazların bulunduğu ortamda T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 9` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 64,
    questionText: `64. Hasta/yaralıya OED/Şok cihazı bağlandıktan
sonra cihaz “Şok gerekli değil” komutu verirse
aşağıdaki uygulamalardan hangisinin yapılması
doğru değildir?`,
    options: [
      { id: 'A', text: `A. Cihazın sesli/görsel yönlendirmeleri takip edilir.` },
      { id: 'B', text: `B. Temel yaşam desteğine başlanır.` },
      { id: 'C', text: `C. Yaşam belirtisi görülürse derlenme pozisyonu verilir.` },
      { id: 'D', text: `D. Derlenme pozisyonu verilince cihaz kapatılıp pedler çıkarılır.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 65,
    questionText: `65. OED/Şok cihazı pedlerinin yerleşim yeri
hangisinde yanlış  verilmiştir?`,
    options: [
      { id: 'A', text: `A. Köprücük kemiğinin hemen altına ve sağ meme başının üstüne, diğeri göğsün sol tarafına, meme başının soluna ve alt kaburga sınırının üzerine` },
      { id: 'B', text: `B. Çocuklarda çocuk pedleri köprücük kemiğinin hemen altına ve sağ meme başının üstüne, diğeri göğsün sol tarafına, meme başının soluna ve alt kaburga sınırının üzerine` },
      { id: 'C', text: `C. Çocuk 8 yaşın altında v e pedler çok büyükse biri kürek kemikleri arasına ve diğer ped ise göğsün ön kısmına` },
      { id: 'D', text: `D. Bebeklerde köprücük kemiğinin hemen altına ve sol meme başının üstüne, diğeri göğsün sağ tarafına, meme başının soluna ve alt kaburga sınırının üzerine TEMEL YAŞAM DESTEĞİ` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 66,
    questionText: `66. Aşağıdakilerden hangisi hayat kurtarma
zincirinin birinci halkasıdır?`,
    options: [
      { id: 'A', text: `A. 112 Acil Çağrı Merkezinin aranması` },
      { id: 'B', text: `B. Kaliteli  temel yaşam desteği` },
      { id: 'C', text: `C. Defibrilasyon` },
      { id: 'D', text: `D. İleri yaşam desteği` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 67,
    questionText: `67. Aşağıdakilerden hangisi hayat kurtarma
zincirinin halkalarından değildir?`,
    options: [
      { id: 'A', text: `A. Emniyet ekiplerine haber verme` },
      { id: 'B', text: `B. Kaliteli temel yaşam desteği` },
      { id: 'C', text: `C. Defibrilasyon` },
      { id: 'D', text: `D. İleri yaşam desteği` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 68,
    questionText: `68. Aşağıdakilerden hangisinde temel yaşam desteği
uygulamasına karar vermeden önce yapılacak
işlem basamakları doğru verilmiştir?`,
    options: [
      { id: 'A', text: `A. Güvenlik – Yanıtı n Değerlendirilmesi – 112 Ara – Ağız İçi Kontrolü – Hava Yolu Açıklığı Sağlanması – Solunum Kontrolü` },
      { id: 'B', text: `B. Güvenlik – Yanıtın Değerlendirilmesi – 112 Ara – Hava Yolu Açıklığı Sağlanması – Ağız İçi Kontrolü - Solunum Kontrolü` },
      { id: 'C', text: `C. Güvenlik – 112 Ara – Yanıtın Değerlendirilmesi – Hava  Yolu Açıklığı Sağlanması – Ağız İçi Kontrolü – Solunum  Kontrolü` },
      { id: 'D', text: `D. Güvenlik – Yanıtın Değerlendirilmesi – 112 Ara – Hava  Yolu Açıklığı Sağlanması – Solunum  Kontrolü – Ağız İçi Kontrolü` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 69,
    questionText: `69. Aşağıda  yanıtı n değerlendirilmesi ile ilgili verilen
bilgilerden hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Bebekte omuzlara hafifçe dokunup yüksek sesle seslenerek yanıt kontrol edilir.` },
      { id: 'B', text: `B. Çocukta omuzlara hafifçe dokunup yüksek sesle “İyi misiniz?” diye sorarak yanıt kontrol edilir.` },
      { id: 'C', text: `C. Çocukta gözleri açık, konuşabiliyorsa yanıtlı kabul edilir.` },
      { id: 'D', text: `D. Bebekte gözleri açık, agulama yapabiliyorsa yanıtlı kabul edilir.` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 70,
    questionText: `70. Solunumun olmadığı erişkin bir hastada
yapılacak ilk yardıma hangi uygulama ile
başlanmalıdır?`,
    options: [
      { id: 'A', text: `A. 30 göğüs basısı` },
      { id: 'B', text: `B. 2 solunum desteği` },
      { id: 'C', text: `C. 5 solunum desteği` },
      { id: 'D', text: `D. Derlenme pozisyonu T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 10` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 71,
    questionText: `71. Temel Yaşam Desteği uygulamasında göğüs basısı
yerinin tespiti aşamalarından hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Her iki elin işaret parmakları ile iman tahtasının alt ve üst ucu tespit edilir.` },
      { id: 'B', text: `B. İşaret parmakları kaldırılmadan başparmaklar ile iman tahtası iki eşit parçaya bölünür.` },
      { id: 'C', text: `C. Altta kalacak olan elin topuğu iman tahtasının alt yarısına yerleştirilir.` },
      { id: 'D', text: `D. Alt yarıya yerleştirilen elin avuç içi göğüs kafesi ile temas ettirilir.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 72,
    questionText: `72. Tek ilk yardımcının olduğu olay yerinde TYD
uygulanması ile ilgili aşağıdakilerden hangisi doğru
değildir?`,
    options: [
      { id: 'A', text: `A. 30 göğüs basısı, 2 solunum desteği olacak şekilde uygulama yapılır.` },
      { id: 'B', text: `B. Uygulama 5 kez tekrarlandıktan sonra hasta/yaralı kontrol edilir.` },
      { id: 'C', text: `C. OED cihazı gelince göğüs basısına ara vermeden 5 kez uyguladıktan sonra OED cihazı açılır.` },
      { id: 'D', text: `D. OED cihazının sesli ve/veya görsel talimatlarına uyulur.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 73,
    questionText: `73. Temel yaşam desteği ile ilgili verilen bilgilerden
hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Hasta/yaralı düzelinceye, ilk yardımcı yoruluncaya veya sağlık ekibi gelinceye kadar devam edilir.` },
      { id: 'B', text: `B. Hasta/yaralı kendine geldiğinde temel yaşam desteği sonlandırılır ve derlenme pozisyonu verilir.` },
      { id: 'C', text: `C. İki ilk yardımcı varsa biri göğüs basısı uygularken diğeri tarafından solunum desteği verilir.` },
      { id: 'D', text: `D. Yalnızca solunum desteği şeklinde uygulanır.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 74,
    questionText: `74. Hava yolu açıklığının sağlanmasında
aşağıdakilerden hangisinin yapılması yanlıştır?`,
    options: [
      { id: 'A', text: `A. Hasta/yaralının ağız içi kontrol edilir.` },
      { id: 'B', text: `B. Görünen katı bir cisim varsa çıkarılabilecek durumunda ise çıkarılır.` },
      { id: 'C', text: `C. Cisim her durumda çıkarılır.` },
      { id: 'D', text: `D. Ağız içi kontrolünden sonra baş çene pozisyonu verilir.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 75,
    questionText: `75. Tek ilk yardımcı tarafından erişkin bir hastaya
temel yaşam desteği uygulanırken yapılması
gereken solunum desteği ve göğüs basısı sayısı ne
olmalıdır?`,
    options: [
      { id: 'A', text: `A. 10 göğüs basısı -5 solunum desteği` },
      { id: 'B', text: `B. 30 göğüs basısı -2 solunum desteği` },
      { id: 'C', text: `C. 10 göğüs basısı -1 solunum desteği` },
      { id: 'D', text: `D. 15 göğüs basısı -2 solunum desteği  76.  Solunum desteği uygulamasında ağızdan ağıza soluk verme yöntemi için aşağıdakilerden hangisi yanlıştır? A. Baş geri -çene yukarı pozisyonu verilir. B. Alın üzerine konu lan elin baş ve işaret parmağı kullan ılarak hasta/yaralının burnu kapatılır. C. Normal bir soluk alınır, göğüs kafesi yeterince kalkıncaya kadar bir saniye içerisinde üflenir. D. Nefesin boşalmasın ı beklemeden 2. solunum desteği  uygulanır.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 77,
    questionText: `77. Ağızdan buruna soluk verme yönteminde hangisi
yanlıştır?`,
    options: [
      { id: 'A', text: `A. Hasta/yaralının çenesi desteklenerek ağzı açık tutu lur.` },
      { id: 'B', text: `B. Normal bir soluk alınır, hasta/yaralının burnuna ağız yerleştirilir.` },
      { id: 'C', text: `C. Göğüs kafesi yeterince kalkıncaya kadar bir saniye içerisinde üflenir.` },
      { id: 'D', text: `D. Nefesin boşalması beklen ip 2. solunum desteği uygulanır.` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 78,
    questionText: `78. İki ilk yardımcı ile erişkinde temel yaşam desteği
uygulanırken solunum desteği ve göğüs basısı
döngüsü nasıl olmalıdır?`,
    options: [
      { id: 'A', text: `A. 15:5 ve 2  döngü olacak şekilde iki dakikada bir değiştirilir.` },
      { id: 'B', text: `B. 15:2 ve 5  döngü olacak şekilde iki dakikada bir değiştirilir.` },
      { id: 'C', text: `C. 30:2 ve 5 döngü olacak şekilde iki dakikada bir değiştirilir.` },
      { id: 'D', text: `D. 30:2 ve 10 döngü olacak şekilde iki dakikada bir değiştirilir.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 79,
    questionText: `79. Aşağıdaki durum lardan hangisinde temel yaşam
desteğine devam edilmelidir?`,
    options: [
      { id: 'A', text: `A. Hasta/yaralı normal nefes alma ya başlarsa` },
      { id: 'B', text: `B. 112 gelirse` },
      { id: 'C', text: `C. Hasta/yaralıda iç çekme şeklinde düzensiz nefes alma (gasping) varsa` },
      { id: 'D', text: `D. Olay yeri güvensiz hale gelirse` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 80,
    questionText: `80. Aşağıdaki durumlardan hangisinde t emel yaşam
desteğine son verilir?`,
    options: [
      { id: 'A', text: `A. 30 dakika yapıldıktan sonra` },
      { id: 'B', text: `B. 10 dakika yapıldıktan sonra` },
      { id: 'C', text: `C. 112 gelince` },
      { id: 'D', text: `D. Polis gelince T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 11` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 81,
    questionText: `81. Temel yaşam desteği uygulanan hasta/yaralı
uyanırsa, hareket ederse, gözlerini açarsa veya
normal nefes almaya başlarsa aşağıdakilerden
hangisi yapılmaz ?`,
    options: [
      { id: 'A', text: `A. Temel Yaş am Desteğine devam edilmez .` },
      { id: 'B', text: `B. Gerekir se derlenme pozisyonu veril ir.` },
      { id: 'C', text: `C. Hast a/yaralı yalnız bırakılmaz .` },
      { id: 'D', text: `D. OED kullanıldıysa cihaz kapatılır. I.Güvenlik önlemleri alınır. II.10 saniyeyi aşmayan solunum kontrolü yapılır. III.Yanıtın (bilincin) değerlendirilmesi yapılır. IV.112 aranır veya aratılır. V.Solunum yoksa göğüs basısına başlanır.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 82,
    questionText: `82. Çocuklarda temel yaşam desteği uygulama
sıralaması  hangi seçenekte doğru verilmiştir?`,
    options: [
      { id: 'A', text: `A. I- III- IV- II- V` },
      { id: 'B', text: `B. I- III- IV- V- II` },
      { id: 'C', text: `C. I- II- IV- III- V` },
      { id: 'D', text: `D. I- II- III- IV- V I.Baş geri -çene yukarı pozisyonu verilir. II.2 dakikanın sonunda hasta/yaralı tekrar değerlendirilir. III.Göğüs kafesi yeterince kalkıncaya kadar nefes verilir. IV.Göğüs basısı yapılır.` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 83,
    questionText: `83. Solunum u olmayan çocukta ve bebekte temel
yaşam desteği uygulanırken uyulması gereken
işlem basamakları  hangi seçenekte doğru
verilmiştir ?`,
    options: [
      { id: 'A', text: `A. IV- I- II- III` },
      { id: 'B', text: `B. IV- I- III- II` },
      { id: 'C', text: `C. I- III- IV- II` },
      { id: 'D', text: `D. I- IV- III- II` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 84,
    questionText: `84. Çocuklarda temel yaşam desteği  ile ilgili verilen
bilgilerden  hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Hasta/yaralı 2 dakikada bir değerlendirilir.` },
      { id: 'B', text: `B. Göğüs basısı dakikada 100 -120 bası olacak şekilde uygulanır.` },
      { id: 'C', text: `C. Tek ilk yardımcı varlığında 30 göğüs basısı, 2 solunum olacak şekilde uygulama yapılır .` },
      { id: 'D', text: `D. İki veya daha fazla ilk yardımcı varlığında 3 0 göğüs basısı, 2  solunum olacak şekilde uygulama yapılır.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 85,
    questionText: `85. Çocuklarda temel yaşam desteği  ile ilgili verilen
bilgilerden  hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Elin topuğu iman tahtasının alt yarısına yerleştirilir.` },
      { id: 'B', text: `B. Dakikada 100 - 120 göğüs basısı olacak şekilde bir ritim sağlanır.` },
      { id: 'C', text: `C. Kollar dirseklerden bükülerek basılır.` },
      { id: 'D', text: `D. İman tahtası 5 cm çökecek şekilde basılır.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 86,
    questionText: `86. Bebeklerde temel yaşam desteği  ile ilgili verilen
bilgilerden  hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. İman tahtası 4 cm çökecek şekilde basılır.` },
      { id: 'B', text: `B. Göğüs basısı “Hızlı bastır, güçlü bastır ” prensibi ile yapılır.` },
      { id: 'C', text: `C. İki başparmak veya iki parmak tekniği kullanılır.` },
      { id: 'D', text: `D. İki parmakla 45 derece  açı ile iman tahtasına basılır.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 87,
    questionText: `87. Bebeklerde temel yaşam desteği  ile ilgili verilen
bilgilerden  hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Solunum desteği verilemiyorsa yalnızca göğüs basısı yapılır.` },
      { id: 'B', text: `B. Tek ilk yardımcı solunum desteği ve göğüs basısı nı birlikte yapıyorsa göğüs basısında başparmak tekniği kullan ır.` },
      { id: 'C', text: `C. İki veya daha fazla ilk yardımcı varsa göğüs basısı ve solunum desteği 15:2 şeklinde uygulanır.` },
      { id: 'D', text: `D. Tek ilk yardımcı varsa göğüs basısı ve solunum desteği 30:2 şeklin de uygulanır.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 88,
    questionText: `88. Çocuklarda temel yaşam desteği uygulaması ile
ilgili verilen  bilgilerden hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Tek ilk yardımcı ile 30 göğüs basısı 2 solunum desteği şeklinde  uygulanır.` },
      { id: 'B', text: `B. Birden fazla ilk yardımcı ile 15 göğüs basısı 2 solunum  desteği şeklinde  uygulanır.` },
      { id: 'C', text: `C. İlk yardımcı göğüs basısına devam ederken ikinci ilk yardımcı aynı anda solunum verir.` },
      { id: 'D', text: `D. İlk yardımcı göğüs basısına devam ederken ikinci ilk yardımcı varsa OED cihazını bağlar.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 89,
    questionText: `89. Aşağıda solunum desteği uygulaması ile ilgili
verilen  bilgilerden hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Solunum desteği göğüs kafesi yeterince kalkıncaya kadar verilir.` },
      { id: 'B', text: `B. Solunum desteği 10 saniye sürecek  şekilde uygulanır .` },
      { id: 'C', text: `C. Erişkin ve ç ocuklarda ağızdan ağıza solunum verilir.` },
      { id: 'D', text: `D. Bebeklerde ağızdan ağız ve buruna solunum verilir. T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 12` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 90,
    questionText: `90. Temel yaşam desteğinde göğüs basısı uygulaması
ile ilgili verilen  bilgilerden hangisi doğrudur?
Erişkinde   Ergende    Çocukta    Bebekte`,
    options: [
      { id: 'A', text: `A. Çift elle  Çift elle      Tek elle              İki parmakla` },
      { id: 'B', text: `B. Çift elle  Tek elle     İki parmakla     İki parmakla` },
      { id: 'C', text: `C. Çift elle  Tek elle      Çift parmakla   Tek parmakla` },
      { id: 'D', text: `D. Çift elle  Tek elle      Tek elle    Tek parmakla` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 91,
    questionText: `91. Temel yaşam desteğinde göğüs kafesi nin
çöktürülmesi ile ilgili verilen bilgilerden hangisi
doğrudur?
Erişkinde  Ergende     Çocukta    Bebekte`,
    options: [
      { id: 'A', text: `A. 5-6 cm  5-6 cm   5 cm   4 cm` },
      { id: 'B', text: `B. 5-6 cm  5 cm   4 cm  4 cm` },
      { id: 'C', text: `C. 5-6 cm  5 cm   4 cm  3 cm` },
      { id: 'D', text: `D. 5 cm  5 cm   4 cm   3 cm` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 92,
    questionText: `92. Çocuklarda temel yaşam desteği uygulaması ile
ilgili verilen  bilgilerden hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Göğüs kafesi 3 -4 cm çökecek şekilde göğüs basısı uygulanır.` },
      { id: 'B', text: `B. Çocuklarda tek ilk yardımcı  varsa  30 göğüs basısı 2 solunum desteği şeklinde uygulanır.` },
      { id: 'C', text: `C. Dakikada 100-120 göğüs basısı olacak şekilde iki dakika uygulanır.` },
      { id: 'D', text: `D. İki dakika /5 döngü  sonunda çocuk kontrol edilir.` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 93,
    questionText: `93. Bebeklerde temel yaşam desteği uygulaması ile
ilgili verilen bilgilerden  hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Bebeklerde ilk yardımcı tek ise 30 göğüs basısı 2 solunum desteği şeklinde uygulamalıdır.` },
      { id: 'B', text: `B. Dakikada 100 -120 göğüs basısı olacak şekilde iki dakika uygulanır.` },
      { id: 'C', text: `C. Göğüs kafesi 5 cm çökecek şekilde göğüs basısı uygulanır.` },
      { id: 'D', text: `D. İki dakika sonunda bebek kontrol edilir.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 94,
    questionText: `94. Bebekte/çocukta temel yaşam desteğinin
sonlandırılması ile ilgili verilen bilgilerden  hangisi
yanlıştır?`,
    options: [
      { id: 'A', text: `A. Hasta  düzelinceye kadar devam edilir.` },
      { id: 'B', text: `B. Solunum gelinceye kadar devam edilir.` },
      { id: 'C', text: `C. 10 dakika  devam edilip bırakılır.` },
      { id: 'D', text: `D. 112 olay yerine gelinceye kadar devam edilir.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 95,
    questionText: `95. Çocuklarda temel yaşam desteği uygulaması ile
ilgili verilen bilgilerden  hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Solunum kontrolü 10 saniye yapılır.` },
      { id: 'B', text: `B. Solunum yoksa temel yaşam desteğine başlanır.` },
      { id: 'C', text: `C. Göğüs basısı ile başlanır.` },
      { id: 'D', text: `D. Solunum gelince yüzüstü yatırılır. T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 13 HAVA YOLU TIKANIKLIĞI` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 96,
    questionText: `96. Solunum yolu kısmi olarak tıkanmış bir kişide
aşağıdaki belirtilerden hangisi görülmez?`,
    options: [
      { id: 'A', text: `A. Öksürür.` },
      { id: 'B', text: `B. Nefes alır.` },
      { id: 'C', text: `C. Konuşabilir.` },
      { id: 'D', text: `D. Rengi morarır. I.Bilinç düzeyindeki azalma II.İlaç ve/veya alkol kullanımı III.Yutma ve öksürük reflekslerini etkileyen nörolojik bozukluklar IV.Solunum sistemini etkileyen hastalıklar V.Yaşlılık` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 97,
    questionText: `97. Yetişkinlerde hava yolu tıkanıkl ığı için
yukarıdakilerden hangiler i risk oluşturur?`,
    options: [
      { id: 'A', text: `A. I- II- III- IV- V` },
      { id: 'B', text: `B. I- II- V` },
      { id: 'C', text: `C. II- III- IV- V` },
      { id: 'D', text: `D. III- IV- V` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 98,
    questionText: `98. Hava yolu tam olarak tıkanmış bir kişide
aşağıdaki  belirti lerden hangisi görülür?`,
    options: [
      { id: 'A', text: `A. Öksürebilir .` },
      { id: 'B', text: `B. Nefes alamaz .` },
      { id: 'C', text: `C. Konuşabilir .` },
      { id: 'D', text: `D. Ciltte renk değişikliği görülme z.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 99,
    questionText: `99. Hava yolu kısmi tıkanıklığı olan kişide ilk yardım
uygulaması nasıl olmalıdır?`,
    options: [
      { id: 'A', text: `A. Öksürmeye teşvik edilir.` },
      { id: 'B', text: `B. Karına bası uygulanır.` },
      { id: 'C', text: `C. Sırt vurusu yapılır.` },
      { id: 'D', text: `D. Karına bası ve sırt vurusu birlikte uygulanır.` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 100,
    questionText: `100. Hava yolu kısmi tıkanıklığı olan kişide
öksürmede yetersizlik ve yorulma görülürse ilk
yardım uygulaması nasıl olmalıdır?`,
    options: [
      { id: 'A', text: `A. Karına bası uygulanır.` },
      { id: 'B', text: `B. Sırt vurusu yapılır.` },
      { id: 'C', text: `C. Hastaya dokunulmaz.` },
      { id: 'D', text: `D. Öksürmeye teşvik edilir.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 101,
    questionText: `101. Hava yolu tam tıkanıklığı olan  yetişkin de ilk
yardım uygulaması na nasıl  başlanır ?`,
    options: [
      { id: 'A', text: `A. Karına bası uygulanır.` },
      { id: 'B', text: `B. Kalp masajı yapılır.` },
      { id: 'C', text: `C. Solunum desteğine başlanır.` },
      { id: 'D', text: `D. Öksürmeye teşvik edilir.  102.  Hava yolu tam tıkanıklığında ilk yardım uygulaması ile ilgili aşağıdakilerden hangisi yanlıştır? A. Kilolu yetişkinlerde göğüs basısı ile başlanır. B. Hamilelerde  göğüs basısı ile başlanır. C. Bebeklerde sırt vurusu ile başlanır. D. Yetişkin ve ç ocuklarda göğüs basısı ile başlanır.` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 103,
    questionText: `103. Hava yolu tam tıkanıklığında Heimlich
manevrası  uygulama yeri neresi olmalıdır ?`,
    options: [
      { id: 'A', text: `A. Göğüs kemiğinin ortasına` },
      { id: 'B', text: `B. Göğüs kemiğinin alt ucuna` },
      { id: 'C', text: `C. Göğüs kemiğinin alt ucu ile göbek deliği arasına` },
      { id: 'D', text: `D. Göbeğin üç parmak altına` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 104,
    questionText: `104. Yetişkin ve çocukta hava yolu tam tıkanıklığında
ilk yardım uygulamaları ile ilgili aşağıdakilerden
hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Bilinçliyse kişiye “Boğuluyor musun?” diye sorulur.` },
      { id: 'B', text: `B. İlk olarak k arın basısı içeri ve yukarı doğru çekilerek uygulanır.` },
      { id: 'C', text: `C. Tıkanıklık hala devam ediyorsa 5 karın basısı  5 sırt vurusu dönüşümlü devam edilir.` },
      { id: 'D', text: `D. Yetişkin veya çocuk  bilincini kaybederse uygulamaya devam edilir.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 105,
    questionText: `105. Bebekte kısmi hava yolu tıkanıklığında aşağıdaki
belirti lerden hangisi görülmez?`,
    options: [
      { id: 'A', text: `A. Ağlama` },
      { id: 'B', text: `B. Öğürme` },
      { id: 'C', text: `C. Çırpınma` },
      { id: 'D', text: `D. Morarma` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 106,
    questionText: `106. Bebeklerde hava yolu tam tıkanıklığında ilk
yardım uygulamaları ile ilgili aşağıdakilerden
hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Kürek kemikleri arasına aşağı ileri yöne doğru 5 defa sert sırt vurusu yapılır.` },
      { id: 'B', text: `B. Sırt vurusu başarısız olursa, 5 defa olacak şekilde göğüs basısı yapılır.` },
      { id: 'C', text: `C. Göğüs basısı içeri ve yukarı doğru iterek uygulanır.` },
      { id: 'D', text: `D. Bebek bilincini kaybederse uygulamaya devam edilir. T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 14 BİLİNÇ  BOZUKLUKLARI VE CİDDİ HASTALIK DURUMLARINDA İLK YARDIM` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 107,
    questionText: `107. “Bilincin hafif uyku halinden hiçbir uyarana
yanıt vermediği derin uyku haline kadar ola n
değişimler ini kapsayan durum” ne olarak
tanımlanır?`,
    options: [
      { id: 'A', text: `A. Bilinç bozukluğu` },
      { id: 'B', text: `B. Bilinç açıklığı` },
      { id: 'C', text: `C. Bayılma` },
      { id: 'D', text: `D. Bayılayazma` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 108,
    questionText: `108. Aşağıdakilerden hangisi bilinç bozukluğunun
değerlendirilmesinde cevap aranacak sorulardan
biri değildir?`,
    options: [
      { id: 'A', text: `A. Sesli uyaranlara gözlerini açıyor mu?` },
      { id: 'B', text: `B. Basit sorulara net yanıt veriyor mu?` },
      { id: 'C', text: `C. Basit komutları yerine getiriyor mu?` },
      { id: 'D', text: `D. Nefes alıp verebiliyor mu?` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 109,
    questionText: `109. Aşağıda verilenlerden hangisi bilinç durumu
değerlendirilmesi için kullanılan AVPU kriterleri
ile ilgili yanlıştır?`,
    options: [
      { id: 'A', text: `A. Alert - Uyanık` },
      { id: 'B', text: `B. Verbal - Sesli uyarana yanıt` },
      { id: 'C', text: `C. Pain - Ağrılı uyarana yanıt` },
      { id: 'D', text: `D. Unresponsive - Yanıtlı` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 110,
    questionText: `110. Aşağıda AVPU kriterleri ile ilgili verilenlerden
hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Bilinç durumu değerlendirilmesi için AVPU kriterleri kullanılır.` },
      { id: 'B', text: `B. Alert/Uyanıksa kişi sizinle normal şekilde konuşur.` },
      { id: 'C', text: `C. Yeri ve zamanı bilme açısından cevapları kontrol edilir.` },
      { id: 'D', text: `D. Pain/Ağrılı uyarana yanıt varsa bilinci tamamen kapalıdır .` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 111,
    questionText: `111. Aşağıdakilerden hangisi AVPU kriterlerine göre
bilinç kontrolü yapılırken ağrılı uyaran
verilebilecek yerlerden değildir?`,
    options: [
      { id: 'A', text: `A. Yüzüne tokat atmak` },
      { id: 'B', text: `B. İki kaşın orta  noktası na bastırmak` },
      { id: 'C', text: `C. İman tahtası üzerine bastırmak` },
      { id: 'D', text: `D. Omuzlara kaba çimdik atmak` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 112,
    questionText: `112. Aşağıdakilerden hangisi kişinin iç ve dış
uyaranlardan haberdar olmadığı, gözlerinin kapalı
olduğu ve uykuya benzeyen ancak uyandırmanın
mümkün olmadığı durumu nu tanımlamaktadır?`,
    options: [
      { id: 'A', text: `A. Şok` },
      { id: 'B', text: `B. Bayılma` },
      { id: 'C', text: `C. Koma` },
      { id: 'D', text: `D. Havale` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 113,
    questionText: `113. Solunumu olan ve bilinci  tamamen kapalı
hasta/yaralıya yaralanma şüphesi yoksa aşağıdaki
pozisyonlardan hangisi veril ir?`,
    options: [
      { id: 'A', text: `A. Derlenme pozisyonu` },
      { id: 'B', text: `B. Şok pozisyonu` },
      { id: 'C', text: `C. Yarı oturur pozisyon` },
      { id: 'D', text: `D. Sırt üstü yatış pozisyonu` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 114,
    questionText: `114. Bilinç bozukluğu durumunda aşağıdakilerden
hangisi yapılmaz?`,
    options: [
      { id: 'A', text: `A. Bayılma varsa sırt üstü yatırılır, ayakları 30 -60 cm kaldırılır.` },
      { id: 'B', text: `B. Bilinci kapalı ve solunumu varsa derlenme pozisyonu verilir.` },
      { id: 'C', text: `C. Hava yolu açıklığı kontrol edilir.` },
      { id: 'D', text: `D. Kusma varsa sırt üstü pozisyonda tutulur.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 115,
    questionText: `115. Bilinç bozuklukları ile ilgili bilgilerden hangisi
yanlıştır?`,
    options: [
      { id: 'A', text: `A. Ateş nedeniyle oluşan nöbett e hasta ıslak havlu ya da çarşafa sarılır.` },
      { id: 'B', text: `B. İnmeden şüphelenilen hasta ya rahat pozisyon verilir.` },
      { id: 'C', text: `C. Kan şeker i düş en bilinçli hastaya ağızdan kesinlikle bir şey verilmez.` },
      { id: 'D', text: `D. Bayılma öncesi durumda fiziksel karş ı basınç manevraları  uygulanır.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 116,
    questionText: `116. “Beyne giden kan akışının azalması ile gelişen
kısmi veya tam bir bilinç kaybı” olarak tanımlanan
kavram aşağıdakilerden hangisidir?`,
    options: [
      { id: 'A', text: `A. Koma` },
      { id: 'B', text: `B. Bayılma` },
      { id: 'C', text: `C. Sıcak çarpması` },
      { id: 'D', text: `D. Kalp spazmı T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 15 I.Korku II.Kapalı ortam III.Aniden ayağa kalkma IV.Kan şekerinin düşmesi V.Şiddetli enfeksiyonlar VI.Kan basıncının düşmesi` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 117,
    questionText: `117. Yukarıda verilenlerden hangileri bayılma
nedenlerindendir?`,
    options: [
      { id: 'A', text: `A. I- II- III- IV- V- VI` },
      { id: 'B', text: `B. I- II- III- VI` },
      { id: 'C', text: `C. III- IV- V- VI` },
      { id: 'D', text: `D. I- III- IV- V- VI` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 118,
    questionText: `118. Aşağıdakilerden hangi si bayılma belirtilerinden
değildir?`,
    options: [
      { id: 'A', text: `A. Baş dönmesi` },
      { id: 'B', text: `B. Terleme` },
      { id: 'C', text: `C. Bulanık görme` },
      { id: 'D', text: `D. Solunum durması` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 119,
    questionText: `119. Bayılan bir kişiye ilk yardım uygulaması olarak
aşağıdakilerden hangisi yapılmalıdır?`,
    options: [
      { id: 'A', text: `A. Yüzüne su serpilir.` },
      { id: 'B', text: `B. Yatırılıp ayakları 30 -60 cm kaldırılır.` },
      { id: 'C', text: `C. Şakakları ovulur.` },
      { id: 'D', text: `D. Yanağına tokat atılır.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 120,
    questionText: `120. Aşağıdakilerden hangisi bayılan bir kişiye
yapılan ilk yardım uygulamalarından değildir?`,
    options: [
      { id: 'A', text: `A. Hamileliğin geç dönemlerinde ise sol tarafına yatırılır.` },
      { id: 'B', text: `B. Sırt üstü yatırılır  ayakları 30 -60 cm kaldırılır.` },
      { id: 'C', text: `C. Sıkan kıyafetleri gevşetilir.` },
      { id: 'D', text: `D. Kusm a varsa sırtüstü  pozisyon verilir.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 121,
    questionText: `121. Aşağıdakilerden hangisi b ayılma durumund a
dikkat edilmesi gereken hususlardan değildir?`,
    options: [
      { id: 'A', text: `A. Kişi sandalye ye oturtulmaz .` },
      { id: 'B', text: `B. Tokat atılmaz.` },
      { id: 'C', text: `C. Kolonya ile bilekleri ovulur.` },
      { id: 'D', text: `D. Üstüne su dökülmez.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 122,
    questionText: `122. Aşağıdakilerden hangisi bayılma öncesi
uygulanan fiziksel karşı basınç manevraları ndan
değildir ?`,
    options: [
      { id: 'A', text: `A. Çömelme pozisyonu alınır.` },
      { id: 'B', text: `B. Boyun öne doğru eğilir ve çene göğse değdirilmeye çalışılır.` },
      { id: 'C', text: `C. Eller yumruk yapılarak  var gücüyle sıkılır.` },
      { id: 'D', text: `D. Eller başın üzerine konulup beklenir.  123. Aşağıdakilerden hangisi beyindeki bir damarın aniden tıkanması ya da kanamasına bağlı olarak ortaya çıkan durumu tanımlar? A. Havale B. Sara krizi C. İnme D. Kan şekeri düşüklüğü` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 124,
    questionText: `124. Aşağıdakilerden hangisi inme/felç
belirti lerinden  değildir?`,
    options: [
      { id: 'A', text: `A. Vücut bölgelerinde başlayan ani uyuşma` },
      { id: 'B', text: `B. Görmede bulanıklık` },
      { id: 'C', text: `C. Ağızda çürük elma kokusu` },
      { id: 'D', text: `D. Konuşmada zorlanma` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 125,
    questionText: `125. İnme geçirdiğinden şüphe edilen kişide
kullanılan FAST inme ölçeği ile ilgili verilenlerden
hangisi doğru değildir?`,
    options: [
      { id: 'A', text: `A. Face - Yüz` },
      { id: 'B', text: `B. Arm - Kol` },
      { id: 'C', text: `C. Speech - Konuşma` },
      { id: 'D', text: `D. Translate  - Çeviri` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 126,
    questionText: `126. İnme geçirdiğinden şüphe edilen kişide
kullanılan FAST inme ölçeği ile ilgili verilenlerden
hangisi doğru değildir?`,
    options: [
      { id: 'A', text: `A. Komut 1 : Gülümsemesi ya  da dişlerini göstermesi istendiğinde iki taraf eşit hareket ediyorsa` },
      { id: 'B', text: `B. Komut 2 : Kollarını öne doğru tutması istendiğinde kollardan biri hareket etmez ya da inerse` },
      { id: 'C', text: `C. Komut 3 : Kelimeleri söylerken sorun yaşıyor veya hiç konuşamıyorsa` },
      { id: 'D', text: `D. Komut 4 : 112 acil yardım numarası aranarak sağlık kuruluşuna nakledilmesi` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 127,
    questionText: `127. Aşağıdakilerden hangisi inme geçiren kişide
yapılması gereken ilk yardım uygulamalarından
değildir?`,
    options: [
      { id: 'A', text: `A. 112 acil yardım numarası aran ır.` },
      { id: 'B', text: `B. Yaşam bulguları takip edilir.` },
      { id: 'C', text: `C. Yiyecek ya da içecek veril ir.` },
      { id: 'D', text: `D. Oturamıyorsa derlenme pozisyonuna getirilir.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 128,
    questionText: `128. Aşağıdakilerden hangisi sara krizi nde doğru i lk
yardım uygulamasıdır?`,
    options: [
      { id: 'A', text: `A. Kriz kendi haline bırakılır.` },
      { id: 'B', text: `B. Soğan koklatılır.` },
      { id: 'C', text: `C. Kilitlenmiş çene açıl ır.` },
      { id: 'D', text: `D. Dişlerin  arasına cisim yerleştirilir. T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 16` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 129,
    questionText: `129. Aşağıdakilerden hangisi s ara krizi geçiren kişide
ilk yardım uygulamalarından  değildir?`,
    options: [
      { id: 'A', text: `A. Kriz kendi sürecini tamamlamaya bırakılır.` },
      { id: 'B', text: `B. Hastanın çırpınması engellenir.` },
      { id: 'C', text: `C. Giysiler gevşetilir.` },
      { id: 'D', text: `D. Yaralanması engellenir.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 130,
    questionText: `130. Sara krizi i le ilgili  verilen bilgilerden hangisi
yanlıştır?`,
    options: [
      { id: 'A', text: `A. Hasta kriz geçirirken kendini koruyarak yere kontrollü düşer .` },
      { id: 'B', text: `B. Uzun süreli açlık, uykusuzluk, aşırı yorgunluk sara krizinin ortaya çıkmasına neden olabilir.` },
      { id: 'C', text: `C. Hastada normalde olmayan kokuları alma gibi ön belirtiler görülebilir.` },
      { id: 'D', text: `D. Herhangi bir nedenle beyin zedelenmesi oluşan kişilerde geliş ebilir.` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 131,
    questionText: `131. Aşağıdakilerden hangisi  sara krizinde nöbet
sonrası yapılması gereken ilk yardım uygulaması
değildir?`,
    options: [
      { id: 'A', text: `A. Gerekliyse 112 acil yardım numarası aranır.` },
      { id: 'B', text: `B. Yaşamsal bulguları takip edilir.` },
      { id: 'C', text: `C. Uyanık hale gelinceye kadar yanında kalınır.` },
      { id: 'D', text: `D. Kişi şok pozisyonuna getirilir.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 132,
    questionText: `132. Çocukta ateşe bağlı nöbette ilk yardım ile ilgili
aşağıdakilerden hangisinin yapılması doğrudur?`,
    options: [
      { id: 'A', text: `A. Hemen su içirilmelidir.` },
      { id: 'B', text: `B. Oda sıcaklığında ki su ile ateş düşürül melidir .` },
      { id: 'C', text: `C. Üzerinde bulunan giysileri çıkarıl mamalıd ır.` },
      { id: 'D', text: `D. Nöbeti durdurulmaya çalışılmalıdır.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 133,
    questionText: `133. Çocukluk çağı ateşe bağlı nöbeti olan hastada
aşağıdaki ilk yardım uygulamalarından hangisi
yanlıştır?`,
    options: [
      { id: 'A', text: `A. Çocuk hemen buzlu suya sokulur.` },
      { id: 'B', text: `B. Yiyecek ya da içecek verilmemelidir.` },
      { id: 'C', text: `C. 112 acil yardım istenir.` },
      { id: 'D', text: `D. Oda sıcaklığında olan su kullanılır.` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 134,
    questionText: `134. Kan şekerinin düştüğünden şüphelenilen kişiye
yapılacak ilk yardım uygulaması nasıl olmalıdır?`,
    options: [
      { id: 'A', text: `A. Kesinlikle müdahale edilmez.` },
      { id: 'B', text: `B. Şekerli içecek ile düzeliyorsa şeker verilmeye devam edilmez.` },
      { id: 'C', text: `C. Bilinci kapalıysa hastaya kolonya koklatılır.` },
      { id: 'D', text: `D. Bilinci açıksa ve kusmuyorsa ağızdan şekerli içecekler verilir.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 135,
    questionText: `135. Aşağıdakilerden hangisi kan şekerinin aşırı
yükseldiğini gösteren belirtilerden biridir?`,
    options: [
      { id: 'A', text: `A. Nefeste çürük elma (aseton) kokusu` },
      { id: 'B', text: `B. Nabızda yavaşlama` },
      { id: 'C', text: `C. Solunumun yavaşlaması` },
      { id: 'D', text: `D. Ciltte morarma` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 136,
    questionText: `136. Aşağıdakilerden hangisi bilinci açık ve kan
şekeri aşırı yükselen kişide yapıla cak ilk yardım
uygulamalarından değildir?`,
    options: [
      { id: 'A', text: `A. Reçeteli ilaç alıp almadığı sorulur.` },
      { id: 'B', text: `B. Su içmeye teşvik edilir.` },
      { id: 'C', text: `C. Yaşamsal bulguları takip edilir.` },
      { id: 'D', text: `D. Bilinci kapanırsa yarı oturu r pozisyon verilir.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 137,
    questionText: `137. Aşağıdakilerden hangisi k an şekeri
düşüklüğünden şüphelenilen kişide dikkat
edilecek hususlardan değildir?`,
    options: [
      { id: 'A', text: `A. İnsülin yapılmamalı` },
      { id: 'B', text: `B. Yaşamsal bulguları kontrol edilmeli` },
      { id: 'C', text: `C. 112 acil yardım numarası aranmalı` },
      { id: 'D', text: `D. Düşüklüğü veya yüksekliği ayırt edilemiyorsa şeker verilmemeli` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 138,
    questionText: `138. Aşağıdakilerden hangisi dil veya boğazda şişme
sonrası hava yolunda dara lma ve nefes almayı
zorlaştıran durumu  ifade eder?`,
    options: [
      { id: 'A', text: `A. Havale` },
      { id: 'B', text: `B. İnme` },
      { id: 'C', text: `C. Anafilaksi` },
      { id: 'D', text: `D. Koma` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 139,
    questionText: `139. Aşağıdakilerden hang isi şiddetli
alerji/anafilaksi  belirtilerden değildir?`,
    options: [
      { id: 'A', text: `A. Yüz, dudaklar, göz kapakları ve dilde şişme` },
      { id: 'B', text: `B. Hırıltılı solunum ya da sürekli öksürük` },
      { id: 'C', text: `C. Vücutta yaygın kızarıklık ve döküntüler` },
      { id: 'D', text: `D. Kulak ta uğultu ve çınlama` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 140,
    questionText: `140. Aşağıdakilerden hangisi şiddetli
alerji/anafilaksi durumunda yapılması gereken
uygulamalar dan değildir?`,
    options: [
      { id: 'A', text: `A. Kişinin rahat nefes alıp verebileceği pozisyonu almasına yardım edilir.` },
      { id: 'B', text: `B. Kişinin varsa ilacı (otomatik enjektör) kendisinin uygulamasına yardım edilir.` },
      { id: 'C', text: `C. 112 acil yardım ekibi gelinceye kadar kişinin yanında  kalınır.` },
      { id: 'D', text: `D. Kişinin kendiliğinden iyileşmesi beklenir . T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 17` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 141,
    questionText: `141. Aşağıdaki  otomatik enjektör uygulaması ile
ilgili verilenlerden  hangisi  yanlış tır?`,
    options: [
      { id: 'A', text: `A. İlacın  uygulanması  üzerindeki talimatlara göre yapılır.` },
      { id: 'B', text: `B. Kişinin giysisi üzerinden üst bacağın  dış yan kısmına iğne yapılır.` },
      { id: 'C', text: `C. Tetik mekanizmasına basılır ve 10 ’a kadar sayıldıktan sonra  çekilir.` },
      { id: 'D', text: `D. İlacın uygulanması mutlaka hasta/yaralı tarafından yapılmalıdır.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 142,
    questionText: `142. Aşağıdakilerden hangisi astım atağı
belirtilerinden değildir?`,
    options: [
      { id: 'A', text: `A. Nefes almakta zorlanma` },
      { id: 'B', text: `B. Fışkırır tarzda kusma` },
      { id: 'C', text: `C. Nefes verirken ıslık sesi duyulması` },
      { id: 'D', text: `D. Göğüste sıkışma veya ağrı hissi` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 143,
    questionText: `143. Aşağıdakilerden hangisi astım atağında kişinin
durumunun kötüleştiğini gösteren belirti lerden
değildir?`,
    options: [
      { id: 'A', text: `A. Normal konuşmanın bozulması (cümle kuramama)` },
      { id: 'B', text: `B. İlaçlarını (inhaler) kullanmasına rağmen belirtilerin artması` },
      { id: 'C', text: `C. Dudakların ve tırnak yataklarının gri -mavi ton alması` },
      { id: 'D', text: `D. Bulantı olmadan kusması` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 144,
    questionText: `144. Aşağıdakilerden hangisi astım atağında doğru
ilk yardım uygulamalarından biridir?`,
    options: [
      { id: 'A', text: `A. Hasta mutlaka yere yatırılmalıdır.` },
      { id: 'B', text: `B. Hasta yürütülerek sağlık kuruluşuna ulaştırılmalıdır.` },
      { id: 'C', text: `C. Hastanın kendisine ait ilaçları nı almasına yardım edilmelidir.` },
      { id: 'D', text: `D. Ortamdaki kapı ve pencereler kapatılmalıdır.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 145,
    questionText: `145. Aşağıdakilerden hangisi astım atağında doğru
ilk yardım uygulamalarından değildir?`,
    options: [
      { id: 'A', text: `A. Hastanın en rahat old uğu pozisyonu alması sağlan ır.` },
      { id: 'B', text: `B. Hasta bilincini ka ybederse şok pozisyonu veril ir.` },
      { id: 'C', text: `C. Hastanın kendisine ait ilaçları ve mümkünse oksijen almasına yardım edil ir.` },
      { id: 'D', text: `D. İlaçları aldıktan sonra 5  dakika içinde düzelme olmazsa 11 2 acil yardım numarası aran ır.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 146,
    questionText: `146. Kron ik Obstrüktif Akciğer Hastalığı (KOAH) ile
ilgili  aşağıda verilen bilgilerden hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Sıklıkla gençlerde görülen bir hastalıktır.` },
      { id: 'B', text: `B. Genellikle sigara kullanımına bağlı görülür.` },
      { id: 'C', text: `C. Nefes almayı zorlaştıran hava yolu tıkanıklığıdır.` },
      { id: 'D', text: `D. Oturur pozisyonda daha rahat nefes alırlar.` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 147,
    questionText: `147. Aşağıdakilerden hangisi KOAH atağı sırasında
yapılması gereken ilk yardım uygulamalarından
değildir?`,
    options: [
      { id: 'A', text: `A. Hastanın kendisine ait ilaçları nı almasına yardım edilir.` },
      { id: 'B', text: `B. Varsa oksijen almasına yardım edilir.` },
      { id: 'C', text: `C. Salgılarını atabilmesi i çin öksürmeye teşvik edilir .` },
      { id: 'D', text: `D. Hasta sırtüstü düz yatırıl ır.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 148,
    questionText: `148. Çok hızlı nefes alıp verme (hiperventilasyon) ile
ilgili verilen bilgilerden hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Duygusal sıkıntılar ve stres sonucu ortaya çıkabilir.` },
      { id: 'B', text: `B. Eller, ayaklar ve ağız çevresinde karıncalanma ve uyuşma görülebilir.` },
      { id: 'C', text: `C. Karın kasları kullanılarak solunum egzersizleri yaptırılır.` },
      { id: 'D', text: `D. Kişinin yürütülerek hareket etmesi sağlanır. T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 18 KANAMALAR` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 149,
    questionText: `149. Kalp atımları ile uyumlu olarak fışkırır tarzda,
çok kısa sürede büyük miktarda kan kaybına neden
olabilen en ciddi kanama hangi damar
yaralanmasında ortaya çıkar?`,
    options: [
      { id: 'A', text: `A. Atardamar` },
      { id: 'B', text: `B. Toplardamar` },
      { id: 'C', text: `C. Kılcal damar` },
      { id: 'D', text: `D. Lenf damarı` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 150,
    questionText: `150. Aşağıdakilerden hangisi dış kanamalarda ilk
yardım uygulamalarından değildir?`,
    options: [
      { id: 'A', text: `A. Kanama yerine doğrudan bası uygulanması` },
      { id: 'B', text: `B. Lokal soğuk uygulama yapılması` },
      { id: 'C', text: `C. Kanama durdurucu örtü  kullanılması` },
      { id: 'D', text: `D. Kanayan yere masaj yapılması` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 151,
    questionText: `151. Aşağıdakilerden hangisi dış kanamalarda ilk
yardım uygulamalarından değildir?`,
    options: [
      { id: 'A', text: `A. Yara üzerine en az 5 dak ika boyunca sabit, kesintisiz  tam bası uygulanmalı` },
      { id: 'B', text: `B. Kanama üzerindeki ilk bez ıslanırsa, ilk bezi kaldırmadan üzerine başka bez koyarak basıya devam edilmeli` },
      { id: 'C', text: `C. Doğrudan basıda kullandığımız bezi sabit tutmak için basınçlı bandaj uygulanmalı` },
      { id: 'D', text: `D. Basınçlı bandaj dolaşımı engelleyecek kadar sıkılmalı` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 152,
    questionText: `152. Aşağıdakilerden hangisi dış kanamalarda
turnike uygulama basamaklarından değildir?`,
    options: [
      { id: 'A', text: `A. Kol ve uyluk gibi tek kemikli bölgelere uygulanır.` },
      { id: 'B', text: `B. Kanamaya en yakın ve deri bütünlüğünün bozulmamış olduğu bölgeye uygulanır.` },
      { id: 'C', text: `C. Kanama durduktan sonra sıkmaya devam edilir.` },
      { id: 'D', text: `D. Hasta/yaralının üzerine görülecek şekilde “Turnike” yazılır.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 153,
    questionText: `153. Aşağıdakilerden hangisi dış kanamalarda
turnike uygulama basamaklarından değildir?`,
    options: [
      { id: 'A', text: `A. İp ve tel gibi malzemeler kullanılır.` },
      { id: 'B', text: `B. Turnike bölgesi görülecek şekilde hasta/yaralının üzeri örtülür.` },
      { id: 'C', text: `C. Turnike üzerine uygulamanın yapıldığı saati yazılır.` },
      { id: 'D', text: `D. 112 gelinceye kadar turnikeye gevşetme/açma yapılmaz.` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 154,
    questionText: `154. Aşağıdaki durumlardan hangisinde turnike
uygulanmalıdır?`,
    options: [
      { id: 'A', text: `A. Künt karın yaralanması` },
      { id: 'B', text: `B. Ezici yaralanmalar` },
      { id: 'C', text: `C. Penetran göğüs yaralanması` },
      { id: 'D', text: `D. Uzuv kopmaları` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 155,
    questionText: `155. Kanama durdurucu yara ö rtüleri hangi
durumda kullanılmaz ?`,
    options: [
      { id: 'A', text: `A. Doğrudan basının etkili olmadığı  şiddetli kanamalarda` },
      { id: 'B', text: `B. Karın yaralanması na bağlı kanamalarda` },
      { id: 'C', text: `C. Göğüs yaralanması na bağlı kanamalarda` },
      { id: 'D', text: `D. Turnike uygulanabilen u zuv kopması kanamalarında` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 156,
    questionText: `156. Aşağıdakilerden hangisi kanama durdurucu
yara örtüleri kullanılırken dikkat edilmesi gereken
hususlardan değildir?`,
    options: [
      { id: 'A', text: `A. Tüm kanama yüzeyleri kaplanır.` },
      { id: 'B', text: `B. Yara örtüsünün ilk katmanı kan ı emerek ıslanmışsa tek katman olarak  bırakılır.` },
      { id: 'C', text: `C. Yara derinse  kanama durdurucu yara örtülerinin üzerine hacimli bir örtü yerleştirilir.` },
      { id: 'D', text: `D. Hasta/yaralıya yiyecek veya içecek verilmez.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 157,
    questionText: `157. Aşağıdakilerden hangisi hasta/yaralıya şok
pozisyonu uygulamasını tarif eder?`,
    options: [
      { id: 'A', text: `A. Düz olarak sırt üstü yatırılıp  ayaklarının 30 -60 derece kaldırılması` },
      { id: 'B', text: `B. Düz olarak sırt üstü ve dizlerinin bükülerek yatırılması` },
      { id: 'C', text: `C. Altta kalan kolu başının altında olacak şekilde yan pozisyonda yatırılması` },
      { id: 'D', text: `D. Yüzükoyun düz  yatırılması` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 158,
    questionText: `158. Aşağ ıdakilerden hangisi iç kanama
belirtiler inden değildir?`,
    options: [
      { id: 'A', text: `A. Ağız, burun, kulaktan kan gelmesi` },
      { id: 'B', text: `B. Solunum sayısın ın artması` },
      { id: 'C', text: `C. Sıcak , kırmızı , kuru  cilt` },
      { id: 'D', text: `D. Bilinç değişikliği` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 159,
    questionText: `159. Aşağıdakilerden h angisi i ç kanama da ilk yardım
uygulama basamaklarından değildir?`,
    options: [
      { id: 'A', text: `A. Solunumu ve dolaşımı değerlendirilir.` },
      { id: 'B', text: `B. Mümkün olduğunca hareket ettir ilmez.` },
      { id: 'C', text: `C. Üzeri örtülür, ancak aşırı ısıtılmaz.` },
      { id: 'D', text: `D. Ağızdan yiyecek içecek verilir. T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 19` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 160,
    questionText: `160. Hangisi uzuv kopmasında ilk yardım uygulama
basamaklar ından değildir?`,
    options: [
      { id: 'A', text: `A. Kopan uzuv parçası su ile yıkanır.` },
      { id: 'B', text: `B. Uzuv su geçirmez ve ağzı kapalı bir plastik torbaya yerleştirilir.` },
      { id: 'C', text: `C. Uzvun konduğu plastik torba içerisinde bir ölçek suya iki ölçek buz konulmuş ikinci bir torbaya koyulur.` },
      { id: 'D', text: `D. Üzerine yaralı ad ve soyadı yazıl ıp en geç 6 saat içinde yaralı ile birlikte sağlık kuruluşuna ulaştırılır.` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 161,
    questionText: `161. Yabancı cisim batmasında ilk yardımda
aşağıdakilerden hangi yapılmalıdır?`,
    options: [
      { id: 'A', text: `A. Cisim çıkarılmadan etrafına gazlı bez yerleştirilerek sabitlenir.` },
      { id: 'B', text: `B. Cisim çıkartılarak en yakın sağlık kuruluşuna götürülür.` },
      { id: 'C', text: `C. Cisim çıkartılarak yara üzerine sargı bezi, temiz bir bez yerleştirilir.` },
      { id: 'D', text: `D. Cisim hareket ettirilir, çıkmıyorsa etrafı gazlı bez ile sarılır.` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 162,
    questionText: `162. Aşağıdakilerd en hangisi burun kanamasında
yapılan ilk yardım uygulaması değildir?`,
    options: [
      { id: 'A', text: `A. Sakinleştirilir ve oturtulur.` },
      { id: 'B', text: `B. Boyun yaralanması yoksa baş ı öne eğ ilir.` },
      { id: 'C', text: `C. Burun kanatları 10 -15 dakika sıkılır.` },
      { id: 'D', text: `D. Burundan nefes alması söylenir.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 163,
    questionText: `163. Aşağıdakilerden  hangisi  kulak kanamasında
yapılan ilk yardım uygulamasıdır?`,
    options: [
      { id: 'A', text: `A. Kanama ciddiyse kulağı  tıkamadan temiz bezle kapatılır.` },
      { id: 'B', text: `B. Kanama hafifse kulak temiz bezle tıkanır.` },
      { id: 'C', text: `C. Bilinci açıksa derlenme pozisyonu verilir.` },
      { id: 'D', text: `D. Bilinci kapalıysa sırtüstü pozisyonu verilir.` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 164,
    questionText: `164. Aşağıdakilerden hangisi kanaması olan
hasta/yaralıda dikkat edilecek hususlardan
değildir?`,
    options: [
      { id: 'A', text: `A. Çıplak elle hasta/yaralının kanıyla temas etmemeli` },
      { id: 'B', text: `B. Genel durumu iyi ise kendisinin yaraya doğrudan bası uygulaması sağlanmalı` },
      { id: 'C', text: `C. Yiyecek ya da içecek verilmemeli` },
      { id: 'D', text: `D. Kanama olan bölgeye ilk olarak  turnike uygulanmalı ŞOK VE GÖĞÜS AĞRISI` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 165,
    questionText: `165. Dokuların ihtiyacı olan oksijen ve diğer temel
gereksinimlerin dolaşım bozukluğu n edeniyle
sağlanamaması durumu ne olarak tanımlanır?`,
    options: [
      { id: 'A', text: `A. Şok` },
      { id: 'B', text: `B. Koma` },
      { id: 'C', text: `C. Anafilaksi` },
      { id: 'D', text: `D. İnme` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 166,
    questionText: `166. Aşağıdakil erden hangisi şok çeşitlerinden
değildir?`,
    options: [
      { id: 'A', text: `A. Kan kaybına bağlı gelişen şok` },
      { id: 'B', text: `B. Kalp rahatsızlıklarına bağlı gelişen şok` },
      { id: 'C', text: `C. Akciğere pıhtı atmasına bağlı gelişen şok` },
      { id: 'D', text: `D. Vücutta s ıvının dengeli olmasına bağlı gelişen şok` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 167,
    questionText: `167. Aşağıdakilerden hangisi kalp krizi veya kalpte
yaralanma gibi sebeplerden dolayı kalbin kan
pompalama işlevinin bozulduğu durumlarda
meydana gelir?`,
    options: [
      { id: 'A', text: `A. Kardiyojenik Şok` },
      { id: 'B', text: `B. Obstruktif Şok` },
      { id: 'C', text: `C. Dağılımsal Şok` },
      { id: 'D', text: `D. Hipovolemik Şok` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 168,
    questionText: `168. Aşağıdakilerden hangisi şok açısından risk
altında olan hasta/yaralılardan değildir?`,
    options: [
      { id: 'A', text: `A. Şiddetli dış kanaması olanlar` },
      { id: 'B', text: `B. Ciddi enfeksiyon u olanlar` },
      { id: 'C', text: `C. Ciddi alerjik reaksiyonu olanlar` },
      { id: 'D', text: `D. Eklem burkulması olanlar` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 169,
    questionText: `169. Hangisi şok belirtilerinden değildir?`,
    options: [
      { id: 'A', text: `A. Baş dönmesi ve sersemlik` },
      { id: 'B', text: `B. Dudak çevresinde solukluk ya da morarma` },
      { id: 'C', text: `C. Ciltte soğukluk, solukluk ve nemlilik` },
      { id: 'D', text: `D. Kan basıncında artma` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 170,
    questionText: `170. Aşağıdakilerden hangisi şokta hasta/yaralıya
yapılan ilk yardım uygulaması değildir?`,
    options: [
      { id: 'A', text: `A. Bilinci kontrol edilir.` },
      { id: 'B', text: `B. Kusuyorsa sırt üstü yatırılır.` },
      { id: 'C', text: `C. Temiz hava soluması sağlanır.` },
      { id: 'D', text: `D. Psikolojik destek sağlanır. T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 20` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 171,
    questionText: `171. Aşağıdakilerden hangisi şoktaki hasta/yaralıda
dikkat edilecek hususlardan dır?`,
    options: [
      { id: 'A', text: `A. Kalça ve  bacak yaralanmalarında ayaklar  yukarı kaldırılır.` },
      { id: 'B', text: `B. Delici göğüs yaralanması varsa sırt üstü düz yatırılır.` },
      { id: 'C', text: `C. Kafa yaralanması yoksa bacaklar kaldırılır.` },
      { id: 'D', text: `D. Felç geçiriyorsa bacaklar kaldırılır.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 172,
    questionText: `172. Aşağıdakilerden hangisi kalp krizinde ağrının
hissedildiği yer  değildir?`,
    options: [
      { id: 'A', text: `A. Kollara yayılan ağrı` },
      { id: 'B', text: `B. Göğüs ortasında sıkıştırıcı ağrı` },
      { id: 'C', text: `C. Ayağa kadar inen kasık ağrısı` },
      { id: 'D', text: `D. Mideye yayılan ağrı` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 173,
    questionText: `173. Aşağıdakilerden hangisi göğüs ağrısı olan
hasta/yaralıda yapılacak ilk yardım uygulaması
değildir ?`,
    options: [
      { id: 'A', text: `A. Yürüterek hastaneye götürülür.` },
      { id: 'B', text: `B. Kıyafetleri sıkıysa gevşetilir.` },
      { id: 'C', text: `C. Güven verilir ve sakinleştirilir.` },
      { id: 'D', text: `D. Aspirini varsa alması sağlanır.` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 174,
    questionText: `174. Aşağıdakilerden hangisi göğüs ağrısı olan
hasta/yaralıda dikkat edileceklerden değildir?`,
    options: [
      { id: 'A', text: `A. Göğüs ağrısında ö ncelikle kalp krizi düşünülü r.` },
      { id: 'B', text: `B. İlacını almasın a rağmen ağrıda azalma olmuyorsa kalp krizi  kabul edil ir.` },
      { id: 'C', text: `C. Göğüs ağrısı olan yetişkinler e erken dönem de aspirin verilmesi öneril ir.` },
      { id: 'D', text: `D. Hastanın hareket etmesi  sağlan ır. YARALANMALAR I.Yer ve zaman algısında bozulma II.Hafıza kaybı III.Öksürük IV.Göz bebeklerinde eşitsizlik V.Yüzde yara, şişlik VI.Üreme organından kan gelmesi VII.Kafatasında şekil bozukluğu` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 175,
    questionText: `175. Yukarıdakil erden hangileri baş yaralanmas ı
belirtilerindendir?`,
    options: [
      { id: 'A', text: `A. I- II- IV- V- VII` },
      { id: 'B', text: `B. VII- III- IV- II- I` },
      { id: 'C', text: `C. II- III- IV- VI- VII` },
      { id: 'D', text: `D. VII- VI- V- IV- III` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 176,
    questionText: `176. Bilinci açık, boyun ve omurga yaralanması olan
hasta/yaralıda ilk yardım olarak aşağıdakilerden
hangisinin yapılması yanlıştır?`,
    options: [
      { id: 'A', text: `A. Hareket etmemesi söylenir.` },
      { id: 'B', text: `B. Boyunluk takılır.` },
      { id: 'C', text: `C. Kıyafetleri sıkıysa gevşetilir.` },
      { id: 'D', text: `D. Baş ve boyun sabit tutulur.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 177,
    questionText: `177. Bilinci kapalı, boyun ve omurga yaralanması
olan hasta/yaralıda ilk yardım olarak
aşağıdakilerden hangisinin yapılması doğrudur?`,
    options: [
      { id: 'A', text: `A. Baş-boyun ve omurga aynı hizada tutularak derlenme pozisyonuna getirilir.` },
      { id: 'B', text: `B. Boyunluk takılır.` },
      { id: 'C', text: `C. Kırık bölgesin e bası uygulanır.` },
      { id: 'D', text: `D. Saplanmış bir nesne varsa çıkarılır.` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 178,
    questionText: `178. Aşağıdakilerden hangisi göğüs yaralanması
belirtilerinden değildir?`,
    options: [
      { id: 'A', text: `A. Nefes darlığı` },
      { id: 'B', text: `B. Nefes alıp verirken ağrı` },
      { id: 'C', text: `C. Ezici yaralanmalarda çıtırtı sesi` },
      { id: 'D', text: `D. Yara yerinde kaşıntı hissi` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 179,
    questionText: `179. Aşağıdakilerden hangisi açık göğüs yaralanması
olan hasta/yaralıda yapılması gereken  ilk yardım
uygulaması değildir?`,
    options: [
      { id: 'A', text: `A. Bilinci kontrol edilir.` },
      { id: 'B', text: `B. 112 acil yardım numarası  aranır.` },
      { id: 'C', text: `C. Yaşamsal bulguları kontrol edilir.` },
      { id: 'D', text: `D. Sırt üstü pozisyona  getirilir. T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 21` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 180,
    questionText: `180. Aşağıdakilerden hangisi açık göğüs yaralanması
olan hasta/yaralıda yapılması gereken  ilk yardım
uygulaması değildir?`,
    options: [
      { id: 'A', text: `A. Bilinci  kontrol edilir.` },
      { id: 'B', text: `B. Göğse saplanmış cisim varsa çıkarılır.` },
      { id: 'C', text: `C. Yarı oturur pozisyon a getirilip yarasının olduğu tarafa doğru eğilir.` },
      { id: 'D', text: `D. Yarala nma yerinde kanama varsa kanama  bası ile kontrol edilir.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 181,
    questionText: `181. Aşağıdakilerden hangisi ezici (künt) karın
yaralanması belirtilerinden değildir?`,
    options: [
      { id: 'A', text: `A. Karında ağrı, hassasiyet` },
      { id: 'B', text: `B. Fışkırır tarzda kanama` },
      { id: 'C', text: `C. Bulantı, kusma` },
      { id: 'D', text: `D. Karında ezikler` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 182,
    questionText: `182. Aşağıdakilerden hangisi karın tahta gibi sert
olduğunda düşünülebilecek yaralanmalardandır?`,
    options: [
      { id: 'A', text: `A. Delici yaralanma lar` },
      { id: 'B', text: `B. Omurga yaralanmaları` },
      { id: 'C', text: `C. Göğüs yaralanmaları` },
      { id: 'D', text: `D. Baş yaralanmaları` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 183,
    questionText: `183. Aşağıdakilerden hangisi ezici (künt) karın
yaralanması nda yapılması gereken  ilk yardım
uygulaması değildir?`,
    options: [
      { id: 'A', text: `A. Yaşamsal bulguları kontrol edilir.` },
      { id: 'B', text: `B. İç kanama ve buna bağlı şok bulguları izlenir.` },
      { id: 'C', text: `C. Bilinci kapalı  nefes alan yaralıda yara üstte kalacak şekilde derlenme pozisyonu verilir.` },
      { id: 'D', text: `D. Solunumu durursa temel yaşam desteğine başlanır.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 184,
    questionText: `184. Aşağıdakilerden hangisi delici (penetran) karın
yaralanması belirtilerinden değildir?`,
    options: [
      { id: 'A', text: `A. Cilt bütünlüğünün bozulmamış olması` },
      { id: 'B', text: `B. Karında saplanmış bir cisim  olması` },
      { id: 'C', text: `C. Delici aletin giriş veya çıkış izleri nin bulunması` },
      { id: 'D', text: `D. Ciltten dışarı çıkan iç organlar ın olması` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 185,
    questionText: `185. Aşağıdakilerden hangisi delici (penetra n) karın
yaralanmalarında yapılması gereken ilk yardım
uygulaması değildir?`,
    options: [
      { id: 'A', text: `A. Dışarı çıkan organlar yerleştirilmeli` },
      { id: 'B', text: `B. Saplanmış cisim çıkarılmamalı` },
      { id: 'C', text: `C. Yiyecek veya içecek verilmemeli` },
      { id: 'D', text: `D. Yaşamsal bulgular  izlenmeli` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 186,
    questionText: `186. Aşağıdakilerden hangisi uzun sü reli sıkışma ve
hareketsizlik durumunda kaslarda zararlı maddeler
birikerek aşırı doku hasarı ve böbrek yetmezliği
başta olmak üzere organ yetmezliklerine neden
olabilen yaralanma türüdür?`,
    options: [
      { id: 'A', text: `A. Ezilme Yaralanmaları` },
      { id: 'B', text: `B. Kesici Yaralanmalar` },
      { id: 'C', text: `C. Delici Yaralanmalar` },
      { id: 'D', text: `D. Göğüs Yaralanmalar ı I.Vücutta ve uzuvlarda ezilme şeklinde yaralar II.Uykuya meyil III.Bilinç değişiklikleri IV.İdrar miktarında azalma V.İç kanama bulguları` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 187,
    questionText: `187. Yukarıda verilen belirtiler hangi durumda
görülür?`,
    options: [
      { id: 'A', text: `A. Delici göğüs yaralanması` },
      { id: 'B', text: `B. Delici karın yaralanması` },
      { id: 'C', text: `C. Ezilme yaralanması` },
      { id: 'D', text: `D. Omurga yaralanması` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 188,
    questionText: `188. Aşağıdakilerden hangisi ezilme yaralanmasında
yapılması gereken ilk yardım uygulaması değildir?`,
    options: [
      { id: 'A', text: `A. Hasta/yaralı kesinlikle ezilmeyi oluşturan kuvvetten uzaklaştırılmamalı` },
      { id: 'B', text: `B. Dış kanama  varsa doğrudan bası ile durduru lmalı` },
      { id: 'C', text: `C. Yaralanan uzuvlar  hareket ettirme meli` },
      { id: 'D', text: `D. Hasta/y aralı  sıcak tutu lmalı` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 189,
    questionText: `189. Aşağıdakilerden hangisi diş kopmalarında
uygulanacak ilk yardım yöntemidir?`,
    options: [
      { id: 'A', text: `A. Kopan diş yerine yerleştirilmeye çalışılır.` },
      { id: 'B', text: `B. Kopan diş sabunlu su ile yıkanır.` },
      { id: 'C', text: `C. Kopan diş kişinin kendi tükürüğü içinde sağlık kuruluşuna götürülür.` },
      { id: 'D', text: `D. Yaralı mümkün olduğunca hareket ettir ilmeden bekletilir. T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 22 BOĞULMA` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 190,
    questionText: `190. Boğulma ile ilgili  aşağıdakilerden hangisi
yanlıştır?`,
    options: [
      { id: 'A', text: `A. Boğulma, su/sıvıya dalma ya da batma nedeniyle solunum bozukluğu yaşanması veya sürecin ölüm ile sonlanmasıdır.` },
      { id: 'B', text: `B. Boğulmanın meydana gelebilmesi için kişinin yüzü (ağız ve burun) su/sıvıya batmalı veya su/sıvıyla örtülmelidir.` },
      { id: 'C', text: `C. Boğulma süreçleri; sudan kurtulmuş, ölümcül olmayan boğulma ve ölümcül boğulma şeklinde sonlanabilir.` },
      { id: 'D', text: `D. Hasta herhangi bir zamanda kurtarılırsa boğulma süreci durur ve buna “ölümcül boğulma” denir.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 191,
    questionText: `191. Aşağıdakilerden hangisi boğulma için bir risk
faktörüdür?`,
    options: [
      { id: 'A', text: `A. 14 yaşından büyük olma` },
      { id: 'B', text: `B. Erkek cinsiyet` },
      { id: 'C', text: `C. Riskli davranışlardan uzak durma` },
      { id: 'D', text: `D. Yüksek sosyoekonomik düzey` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 192,
    questionText: `192. Boğulmanın vücutta oluşturduğu etkiler  ile ilgili
aşağıdakilerden hangisi yanlıştır ?`,
    options: [
      { id: 'A', text: `A. Boğulma esnasında soluk borusunun üst kısmı kasılarak fazla miktarda su/sıvının akciğerlere girişini önler.` },
      { id: 'B', text: `B. Boğulma esnasında  alveollere  sıvı dolması nedeniyle solunum işlevi bozularak vücut  için gerekli oksijenin dokulara iletilmesi gerçekleş mez.` },
      { id: 'C', text: `C. Beyin hücreleri oksijensizliğe 25  dakika kadar dayanabilir.` },
      { id: 'D', text: `D. Kalp hücreleri oksijensizliğe 30 dakika kadar dayanabilir. I.Gürültülü, hızlı ve derin nefes alıp verme II.Sıcak ve pembe cilt III.Ağız ve burundan köpük gelmesi IV.Soluk alıp vermede güçlük V.Bilinç durumunda değişiklik VI.Nabzın hızlanması` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 193,
    questionText: `193. Yukarıdakilerden hangileri boğulma belirtisidir?`,
    options: [
      { id: 'A', text: `A. I- III- IV- V` },
      { id: 'B', text: `B. I- II- III- VI` },
      { id: 'C', text: `C. II- III- V- VI` },
      { id: 'D', text: `D. I- IV- V- VI` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 194,
    questionText: `194. Aşağıdakilerden hangisi boğulma
belirtilerinden değildir?`,
    options: [
      { id: 'A', text: `A. Ağız ve burundan köpük gelmesi` },
      { id: 'B', text: `B. Bilinç durumunda değişiklik` },
      { id: 'C', text: `C. Soluk alıp vermede güçlük` },
      { id: 'D', text: `D. Sorulan sorulara sesli yanıt verme` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 195,
    questionText: `195. Boğulan kişinin sudan çıkarılması sırasında
aşağıdakilerden hangisinin yapılması doğru
değildir?`,
    options: [
      { id: 'A', text: `A. Kişi sudan hızl ı ve güvenli bir şekilde çıkarılır .` },
      { id: 'B', text: `B. Kurtarma işlemi  mutlaka suya gir ilerek yapı lır.` },
      { id: 'C', text: `C. Suya girilir se baş asla suya batırılmaz .` },
      { id: 'D', text: `D. Yaralanma vars a omur ga korunur .` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 196,
    questionText: `196. Boğulan kişiye  sudan çıkarıldıktan sonra
yapılacak  ilk yardım uygulaması ile ilgili aşağıda
verilenlerden hangisi doğru değildir ?`,
    options: [
      { id: 'A', text: `A. Boğulma nedenleri ortadan kaldırılır.` },
      { id: 'B', text: `B. Kişiyi sıcak tutmak için üzeri örtülür.` },
      { id: 'C', text: `C. Kişinin bilinci kapalı, nefes alıyorsa yarı oturur pozisyon verilir.` },
      { id: 'D', text: `D. Kişi nefes almıyorsa temel yaşam desteğine başlanır. T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 23 KIRIK , ÇIKIK , ZORLANMA VE BURKULMA` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 197,
    questionText: `197. Aşağıdakilerden hangisi “kemik bütünlüğünün
bozulması” olarak tanımlanır?`,
    options: [
      { id: 'A', text: `A. Çıkık` },
      { id: 'B', text: `B. Kırık` },
      { id: 'C', text: `C. Zorlanma` },
      { id: 'D', text: `D. Burkulma` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 198,
    questionText: `198. Hasar görmüş kemiklerin düzgün bir biçimde
sabitlenmesi için kullanılan malzeme
aşağıdakilerden hangisidir?`,
    options: [
      { id: 'A', text: `A. Sargı Bezi` },
      { id: 'B', text: `B. Elastik Bandaj` },
      { id: 'C', text: `C. Atel` },
      { id: 'D', text: `D. Üçgen Askı` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 199,
    questionText: `199. Aşağıdakilerden hangisi kırık nedenler inden
değildir?`,
    options: [
      { id: 'A', text: `A. Şiddetli öksürük` },
      { id: 'B', text: `B. Şiddetli kanama` },
      { id: 'C', text: `C. Yüksek bir yerden atlama` },
      { id: 'D', text: `D. Darbe alma` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 200,
    questionText: `200. Kırık tipleri aşağıdakilerden hangisinde doğru
olarak verilmiştir?`,
    options: [
      { id: 'A', text: `A. Uzun kırık -Kısa kırık` },
      { id: 'B', text: `B. Kapalı kırık - Açık kırık` },
      { id: 'C', text: `C. Kalın kırık - İnce kırık` },
      { id: 'D', text: `D. Kirli kırık - Temiz kırık` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 201,
    questionText: `201. Kırık kemik uçlarının cilt yüzeyinden gözle
görülebildiği kırık çeşidi aşağıdakilerden
hangisidir?`,
    options: [
      { id: 'A', text: `A. Açık kırık` },
      { id: 'B', text: `B. Kapalı kırık` },
      { id: 'C', text: `C. Basit kırık` },
      { id: 'D', text: `D. Karmaşık kırık` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 202,
    questionText: `202. Kırılan kemiğin birden fazla parçaya ayrıldığı
ve/veya eklem yaralanmasının eşlik ettiği kırık
çeşidi hangisidir?`,
    options: [
      { id: 'A', text: `A. Açık kırık` },
      { id: 'B', text: `B. Kapalı kırık` },
      { id: 'C', text: `C. Karmaşık kırık` },
      { id: 'D', text: `D. Basit kırık` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 203,
    questionText: `203. Açık kırıkta aşağıdakilerden hangisi görülmez?`,
    options: [
      { id: 'A', text: `A. Cilt bütünlüğü` },
      { id: 'B', text: `B. Kanama` },
      { id: 'C', text: `C. Açık yara` },
      { id: 'D', text: `D. Kırık kemik uçları I.Hareket ile artan ağrı II.Şekil bozukluğu III.Hareket kaybı IV.Ödem` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 204,
    questionText: `204. Verilen  belirtiler aşağıdaki durumlardan
hangisinde ortaya çıkabilir?`,
    options: [
      { id: 'A', text: `A. Kırıklarda` },
      { id: 'B', text: `B. Kanamalarda` },
      { id: 'C', text: `C. Sıcak çarpmalarında` },
      { id: 'D', text: `D. Epilepsi krizlerinde` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 205,
    questionText: `205. Aşağıdakilerden hangisi kırık belirtilerinden
değildir?`,
    options: [
      { id: 'A', text: `A. Kırık yerinde doğal hareketler` },
      { id: 'B', text: `B. Kırık yerinde hassasiyet` },
      { id: 'C', text: `C. Dokunma ile ortaya çıkan ağrı` },
      { id: 'D', text: `D. Kırık yerinde şekil bozukluğu` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 206,
    questionText: `206. Kırıklarda uygulanan ilk yardımla ilgili
aşağıdakilerden hangisi doğrudur?`,
    options: [
      { id: 'A', text: `A. Kırık bölgesinde bir şekil bozukluğu varsa kemik düzeltilmelidir.` },
      { id: 'B', text: `B. Kemiğin kırılıp kırılmadığından şüphe ediliyorsa kırık kabul edilmelidir.` },
      { id: 'C', text: `C. Kırık olan bölgeye sıcak uygulama yapılmalıdır.` },
      { id: 'D', text: `D. Kırık bölgesine masaj yapılmalıdır.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 207,
    questionText: `207. Kırıklarda ilk yardım ile ilgili aşağıdakilerden
hangisinin yapılması yanlıştır?`,
    options: [
      { id: 'A', text: `A. Yaralanma yerinde hareket önlenmeli` },
      { id: 'B', text: `B. Su içirilmeli` },
      { id: 'C', text: `C. Kanama üzerine baskı uygulanmalı` },
      { id: 'D', text: `D. Atel ile har eketsiz hale getirilmeli` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 208,
    questionText: `208. Kırıklarda ilk yardım uygulaması ile ilgili
aşağıdakilerden hangisinin yapılması yanlıştır?`,
    options: [
      { id: 'A', text: `A. 112 acil yardım ekibi gelinceye k adar yaralı sürekli gözlemlenmeli` },
      { id: 'B', text: `B. Yaralıya yiy ecek veya içecek verilmemeli` },
      { id: 'C', text: `C. Şiddetli bir kanama var sa kanamanın üzerine bastırılmalı` },
      { id: 'D', text: `D. Kırık olan bölge sabitlenmeden önce yaralı hareket ettirilerek yeri değiştirilmeli T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 24` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 209,
    questionText: `209. Kırık bölgenin tespitinde dikkat edilmesi
gereken hususlarla ilgili aşağıdakilerden hangisi
doğrudur?`,
    options: [
      { id: 'A', text: `A. Kırık bölgenin düzeltilmesi` },
      { id: 'B', text: `B. Açık kırık vars a yaranın temiz suyla yıkanması` },
      { id: 'C', text: `C. Kırık bölgenin sabit tutulması` },
      { id: 'D', text: `D. Yaralının  kırılan bölgesine tespit yapılmadan hastaneye götürülmesi` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 210,
    questionText: `210. Eklemi oluşturan kemiklerin yer değiştirmesi
nedeni ile eklem yüzeylerinin artık birbirleri ile
temas etmeyecek şekilde tamamen bozulmasına
ne den ir?`,
    options: [
      { id: 'A', text: `A. Kırık` },
      { id: 'B', text: `B. Çıkık` },
      { id: 'C', text: `C. Burkulma` },
      { id: 'D', text: `D. Çatlama` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 211,
    questionText: `211. Aşağıdaki bölgelerin hangisinde çıkık
görülmez ?`,
    options: [
      { id: 'A', text: `A. Omuzda` },
      { id: 'B', text: `B. Dirsekte` },
      { id: 'C', text: `C. Kalçada` },
      { id: 'D', text: `D. Göğüs kemiğinde` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 212,
    questionText: `212. Aşağıdakilerden hangisi çıkık belirtilerinden
değildir?`,
    options: [
      { id: 'A', text: `A. Şişlik` },
      { id: 'B', text: `B. Ağrı` },
      { id: 'C', text: `C. Hareket ettirmede zorluk` },
      { id: 'D', text: `D. Eklem şeklinin düzgün olması` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 213,
    questionText: `213. Çıkık  olan hasta/yaralıda ilk yardım olarak
aşağıdakilerden hangisinin yapılması doğru
değildir?`,
    options: [
      { id: 'A', text: `A. Eklem sabit pozisyonda tutulu r.` },
      { id: 'B', text: `B. Buz uygulaması yapılı r.` },
      { id: 'C', text: `C. Eklem yerine oturtulur.` },
      { id: 'D', text: `D. 112 acil yardım numarası  aranır.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 214,
    questionText: `214. Aşağıdakilerden hangisi çıkıkta buz uygulaması
yapılırken dikkat edilecek hususlardan değildir?`,
    options: [
      { id: 'A', text: `A. Buz doğrudan yarala nma bölgesine uygula nır.` },
      { id: 'B', text: `B. Buz yoksa soğuk su kullanı lır.` },
      { id: 'C', text: `C. Soğuk  kompres yapılır .` },
      { id: 'D', text: `D. Buz uygulamaya  20 dakikadan fazla devam edilmez .` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 215,
    questionText: `215. Kemikler arasında işlevsel bağlantıyı sağlayan
birleşme yerine ne ad verilir?`,
    options: [
      { id: 'A', text: `A. Kemik` },
      { id: 'B', text: `B. Eklem` },
      { id: 'C', text: `C. Kas` },
      { id: 'D', text: `D. Kıkırdak` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 216,
    questionText: `216. Aşırı gerginlik ya da kullanımdan kaynaklanan
kas liflerindeki yaralanmalara ne ad verilir?`,
    options: [
      { id: 'A', text: `A. Zorlanma` },
      { id: 'B', text: `B. Burkulma` },
      { id: 'C', text: `C. Çıkık` },
      { id: 'D', text: `D. Kırık` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 217,
    questionText: `217. Bir eklemin bağları veya eklemi çevreleyen
dokularında meydana gelen yaralanmalara ne ad
verilir?`,
    options: [
      { id: 'A', text: `A. Zorlanma` },
      { id: 'B', text: `B. Burkulma` },
      { id: 'C', text: `C. Çıkık` },
      { id: 'D', text: `D. Kırık` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 218,
    questionText: `218. Aşağıdakilerden hangisi burkulma
belirtilerinden değildir?`,
    options: [
      { id: 'A', text: `A. Morarma` },
      { id: 'B', text: `B. Şişme` },
      { id: 'C', text: `C. Eklemi kullanabilme` },
      { id: 'D', text: `D. Hassasiyet` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 219,
    questionText: `219. Zorlanma ve burkulmalarda ilk yardım
uygulaması ile ilgili aşağıdakilerden hangisi
yanlıştır?`,
    options: [
      { id: 'A', text: `A. Buz uygulaması yapılı r.` },
      { id: 'B', text: `B. Turnike  uygulaması yapılır.` },
      { id: 'C', text: `C. Buz uygulama ya 20 dakikadan fazla devam edilmez.` },
      { id: 'D', text: `D. Yaralanma yerine masaj yapılmaz.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 220,
    questionText: `220. Zorlanma ve burkulmalarda yapılan  buz
uygulamasında aşağıdakilerden hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Buz yoksa soğuk kompres yapılır .` },
      { id: 'B', text: `B. Buz doğrudan cilt üzerine konulur.` },
      { id: 'C', text: `C. Buz uygulaması en fazla 20 dakika devam edilir.` },
      { id: 'D', text: `D. Buz yoksa soğuk su kullanılır. T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 25` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 221,
    questionText: `221. Köprücük kemiği yaralanmalarında
aşağıdakilerden hangisinin yapılması yanlıştır?`,
    options: [
      { id: 'A', text: `A. Etkilenen taraftaki kol bir kol askısı ile desteklenir.` },
      { id: 'B', text: `B. Yaralanma bölgesinin üzerine gelecek  şekilde düğüm atılır.` },
      { id: 'C', text: `C. Göğüs ve yapılan kol askı etrafına geniş katlanmış bir bandaj bağlanır.` },
      { id: 'D', text: `D. Etkilenen taraftaki kol göğse sabitlenir.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 222,
    questionText: `222. Dirsek yaralanmalarında aşağıdakilerden
hangisinin yapılması doğru değildir?`,
    options: [
      { id: 'A', text: `A. Yaralı kolunu bükemiyorsa oturmasına yardım edilmeli` },
      { id: 'B', text: `B. Destek için havlu vb. yaralı dirsek çevresine yerleştirilmeli` },
      { id: 'C', text: `C. Bandaj düğümleri  kırık bölgesinde olacak şekilde bağlanmalı` },
      { id: 'D', text: `D. Solukluk, soğukluk, morarma ve uyuşma olursa bandajlar hafifçe gevşetilmeli` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 223,
    questionText: `223. Aşağıdakilerden hangisi kalça ve uyluk
yaralanmalarında yapılacak ilk yardım
uygulamalarından değildir?`,
    options: [
      { id: 'A', text: `A. Tespit işlemi sağlam olan taraftan yapılır.` },
      { id: 'B', text: `B. Yaralı tamamen hareketsiz hale getirildikten sonra sedyeyle taşınır.` },
      { id: 'C', text: `C. Kırık bölge ye bandaj uygula nmaz.` },
      { id: 'D', text: `D. Yaralının bacaklarının arasına  havlu gibi yumuşak dolgu malzemesi yerleştirilir.` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 224,
    questionText: `224. Ayak bileği yaralanmasında aşağıdakilerden
hangisinin yapılması doğru değildir?`,
    options: [
      { id: 'A', text: `A. Şişmeden önce  varsa ayaktaki takının çıkarıl ması` },
      { id: 'B', text: `B. Buz uygulamasına en az 30 dakika devam edilmesi` },
      { id: 'C', text: `C. Bandajın üzerinden soğuk kompres uygulanması` },
      { id: 'D', text: `D. Ayakların yumuşak malzemeyle desteklenerek yukarıda tutulması BÖCEK SOKMA LARI VE HAYVAN ISIRIKLARI` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 225,
    questionText: `225. Kedi köpek ısırıkları aşağıdaki durumlardan
hangi sine neden olmaz?`,
    options: [
      { id: 'A', text: `A. Tetanos` },
      { id: 'B', text: `B. Kanama` },
      { id: 'C', text: `C. Kuduz` },
      { id: 'D', text: `D. Kırım Kongo Kanamalı Ateş` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 226,
    questionText: `226. Hayvan ısırıkları ile ilgili aşağıdaki ilk  yardım
uygulamalarından hangisi yanlıştır?`,
    options: [
      { id: 'A', text: `A. Isırılan bölgeyi nemli bezle kapatmak` },
      { id: 'B', text: `B. Isırılan bölgeyi 10 -15 dakika sabun ve su ile yıkamak` },
      { id: 'C', text: `C. Isırılan bölgeye t urnike uygulamak` },
      { id: 'D', text: `D. Isırılan kişi yi kuduz ve tetanos aşıları için yönlendirmek` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 227,
    questionText: `227. Aşağıdakilerden hangisi hayvan ısırıklarında
dikkat edilmesi gerekenlerden değildir?`,
    options: [
      { id: 'A', text: `A. Isıran hayvana dok unurken eldiven kullanılmalı` },
      { id: 'B', text: `B. Isırılan bölgeye zeytinyağı sürülmeli` },
      { id: 'C', text: `C. Kuduz aşısı yapılmamış  hayvan 10 g ün gözetim altında tutulmalı` },
      { id: 'D', text: `D. Hasta/yaralı sağlık ku ruluşuna mutlaka götürülmeli` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 228,
    questionText: `228. Yılan sokmas ında ilk  yardım  olarak
aşağıdakilerden hangisinin yapıl ması doğru
değildir ?`,
    options: [
      { id: 'A', text: `A. Isırılan bölge  temiz pamuklu bez le örtülür.` },
      { id: 'B', text: `B. Isırılan bölge ye bandaj uygulanır.` },
      { id: 'C', text: `C. Isırılan bölgede n takılar çıkarıl ır.` },
      { id: 'D', text: `D. Isırılan kişiye hareket etmesi söylenir.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 229,
    questionText: `229. Aşağıdakile rden hangisi denizanası sokmas ında
görülen belirtilerden değildir?`,
    options: [
      { id: 'A', text: `A. Ağrı` },
      { id: 'B', text: `B. Cilt döküntüleri` },
      { id: 'C', text: `C. Kaşıntı` },
      { id: 'D', text: `D. Öksürük` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 230,
    questionText: `230. Denizanası sokmalarında aşağıdaki ilk  yardım
uygulamalarından hangisi nin yapılması doğru
değildir?`,
    options: [
      { id: 'A', text: `A. Bölgeye ısı uygulaması yapılır.` },
      { id: 'B', text: `B. Bölgeye tatlı su uygulaması yapılır.` },
      { id: 'C', text: `C. Denizanası dokunaçları çıkartılır.` },
      { id: 'D', text: `D. Bölge ovulmaz. T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 26` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 231,
    questionText: `231. Böcek vücuttaki hangi bölge den
soktuğunda/ısırdığında daha tehlikeli olup kişide
hayati risk  oluşturur ?`,
    options: [
      { id: 'A', text: `A. Ağız` },
      { id: 'B', text: `B. Kol` },
      { id: 'C', text: `C. Bacaklar` },
      { id: 'D', text: `D. Göğüs` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 232,
    questionText: `232. Cilde tutunmuş halde görülen ve Kırım Kongo
Kanamalı Ateş hastalığını bulaştırma riski taşıyan
böcek hangisidir?`,
    options: [
      { id: 'A', text: `A. Yılan` },
      { id: 'B', text: `B. Akrep` },
      { id: 'C', text: `C. Kene` },
      { id: 'D', text: `D. Örümcek` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 233,
    questionText: `233. Kene ısırığında aşağıdakilerden hangisinin
yapılması doğru  değildir?`,
    options: [
      { id: 'A', text: `A. Kene cımbız y ardımı ile ciltten ayrılmalı` },
      { id: 'B', text: `B. Kenenin ba ş ve ağız kısmı çıkartılmalı` },
      { id: 'C', text: `C. Kenenin ısırdığı bölg eye sıcak uygulama yapılmalı` },
      { id: 'D', text: `D. Kene cilde en  yakın kısımdan çıkartılmalı` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 234,
    questionText: `234. Aşağıdakilerden hangisi örümcek sokmasında
uygulanmaz?`,
    options: [
      { id: 'A', text: `A. Su ve sabunla yıkanır.` },
      { id: 'B', text: `B. Soğuk uygulama yapılır.` },
      { id: 'C', text: `C. Ovarak masaj  yapılır.` },
      { id: 'D', text: `D. Bandaj uygulanır.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 235,
    questionText: `235. Aşağıdakilerden hangisi akrep sokmasında
etkilenen bölgeye yapılan ilk  yardım
uygulamalarından değildir?`,
    options: [
      { id: 'A', text: `A. Sabunlu su ile yıkanır .` },
      { id: 'B', text: `B. Kesilip emilir.` },
      { id: 'C', text: `C. Soğuk uygulama yapılır.` },
      { id: 'D', text: `D. Bandaj uygulanır.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 236,
    questionText: `236. Arı sokması ile ilgili verilenlerden  hangisi
yanlıştır?`,
    options: [
      { id: 'A', text: `A. İğne  en kısa zamanda çıkarılmalı` },
      { id: 'B', text: `B. İğneyi çıkarmak için kre di kartı, cetvel kullanılmalı` },
      { id: 'C', text: `C. Bölge sabunlu suyla yıkanmalı` },
      { id: 'D', text: `D. Sıcak uygulama yapılmalı ZEHİRLENMELER` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 237,
    questionText: `237. Aşağıdakilerden hangisi zehirlenmelerden
korunmak için alınması gereken güvenlik
önlemlerinden değildir?`,
    options: [
      { id: 'A', text: `A. Zehirli maddeler etraftayken yiyecek ve içecek tüketilebilir.` },
      { id: 'B', text: `B. Kullanılmayan ilaçlar yetkili mercilere teslim edilmelidir.` },
      { id: 'C', text: `C. Zehirlenmeye neden olabilecek maddelerin listesi yapılmalıdır.` },
      { id: 'D', text: `D. Zehirlenmeye neden olabilecek maddeler çocukların erişemeyeceği yerde muhafaza edilir.` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 238,
    questionText: `238. Aşağıdakilerden hangisi solunum yoluyla
zehirlenmeye neden olan etkenlerden değildir?`,
    options: [
      { id: 'A', text: `A. Soba ve tüp kaçakları` },
      { id: 'B', text: `B. Zehirli mantarlar` },
      { id: 'C', text: `C. Boyalar ve yapıştırıcılar` },
      { id: 'D', text: `D. Ev temizleyicileri ve klor` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 239,
    questionText: `239. Aşağıdakilerden hangisi sindirim yoluyla
zehirlenme belirtilerindendir?`,
    options: [
      { id: 'A', text: `A. Nefes darlığı` },
      { id: 'B', text: `B. Gri, mavi cilt` },
      { id: 'C', text: `C. Bulantı, kusma` },
      { id: 'D', text: `D. Kiraz kırmızısı tırna klar` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 240,
    questionText: `240. Aşağıdakilerden hangisi solunum yoluyla
zehirlenme belirtilerinden biridir?`,
    options: [
      { id: 'A', text: `A. Karın ağrısı` },
      { id: 'B', text: `B. Döküntü` },
      { id: 'C', text: `C. Gri, mavi cilt` },
      { id: 'D', text: `D. Kaşıntı` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 241,
    questionText: `241. Aşağıda zehirlenmeler ile ilgili verilen genel
bilgilerden hangisi  doğru  değildir?`,
    options: [
      { id: 'A', text: `A. Sindirim yolu ile oluşan zehirlenmede bulantı ve kusma, karın ağrısı görülebilir.` },
      { id: 'B', text: `B. Solunum yolu ile oluşan zehirlenmede nefes darlığı, morarma, solunum durması görülebilir.` },
      { id: 'C', text: `C. Cilt emilimi ile oluşan zehirlenmede ciltte yanıklar, ağrı, şişme, döküntü, kızarıklık görülebilir.` },
      { id: 'D', text: `D. Zehirlenme belirtileri zehirli maddenin türüne ve miktarına göre değişmez. T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 27` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 242,
    questionText: `242. Aşağıdakilerden hangisi zehirlenmelerde ilk
yardımcının alması gereken güvenlik
önlemlerinden değildir?`,
    options: [
      { id: 'A', text: `A. Eldiven, maske gibi güvenlik ekipmanları kullanılır.` },
      { id: 'B', text: `B. İlk yardımcı ve zehirlenen kişiler ortamda uzun süre kalmamalıdır.` },
      { id: 'C', text: `C. İlk yardımcı zehirle temas etmiş eşya ve vücut salgılarından kendini ve çevredekileri korur.` },
      { id: 'D', text: `D. Zehirlenmiş hastaya müdahale edildikten sonra güvenlik önlemleri alınır.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 243,
    questionText: `243. Aşağıdakilerden hangisi zehirlenmiş
hasta/yaralıda yapılan ilk yardım uygulamaları
arasında yer alır?`,
    options: [
      { id: 'A', text: `A. Ağız yoluyla meydana gelen zehirlenmelerde ayran içirilmelidir.` },
      { id: 'B', text: `B. Solunum yoluyla meydana gelen zehirlenmelerde kişi yüzüstü pozisyon a alınmalıdır.` },
      { id: 'C', text: `C. Cilt emilimi ile meydana gelen zehirlenmelerde bulaşmış giysiler çıkarılarak 20 dakika soğuk su ile yıkanmalıdır.` },
      { id: 'D', text: `D. Göze sıçrayan madde ile zehirlenme gerçekleştiyse göz yıkanmamalıdır.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 244,
    questionText: `244. Aşağıdakilerden hangisi zehirlenmelerde
tedaviyi yönlendirebilecek bilgilerden değildir?`,
    options: [
      { id: 'A', text: `A. Zehirli maddenin türü` },
      { id: 'B', text: `B. Zehirli maddenin hangi yolla alındığı` },
      { id: 'C', text: `C. Hastanın herhangi bir ilaç, uyuşturucu madde veya alkol alıp almadığı` },
      { id: 'D', text: `D. Zehirli maddeden kaç kişinin etkilendiği` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 245,
    questionText: `245. Aşağıda verilen zehirlenmiş hasta/yaralıda
yapılan ilk yardım uygulamalarından hangisi  doğru
değildir?`,
    options: [
      { id: 'A', text: `A. Zehirlenmeye neden olan madde hastadan uzaklaştırılır.` },
      { id: 'B', text: `B. Zehirlenen kişi kusturulur.` },
      { id: 'C', text: `C. Hasta temiz havaya çıkarılır.` },
      { id: 'D', text: `D. Hastanın bilinci kontrol edilir.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 246,
    questionText: `246. Aşağıda verilenlerden hangisi zehirlenmelerde
yapılan ilk yardım uygulamaları arasında yer
almaz?`,
    options: [
      { id: 'A', text: `A. Zehirlenme enjeksiyon yolu ile meydana gelmişse mümkünse iğne çıkarılır.` },
      { id: 'B', text: `B. Zehirlenme göze sıçrayan bir madde ile gerçekleştiyse  göz 10 dakika boyunca yıkanır.` },
      { id: 'C', text: `C. Zehirlenme sindirim yolu ile meydana gelmişse alınan i lacın bilinmesinin önemi yoktur.` },
      { id: 'D', text: `D. Zehirlenme cilt emilimi yolu ile meydana gelmişse bulaşmış giysileri çıkarılır.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 247,
    questionText: `247. Aşağıda verilenlerden hang isi ilaç
zehirlenmelerinde yapılan ilk yardım uygulamaları
arasında yer almaz?`,
    options: [
      { id: 'A', text: `A. Hastanın bilinci değerlendirilir.` },
      { id: 'B', text: `B. Hastaya b ol miktarda su içirilir.` },
      { id: 'C', text: `C. Hastanın a ldığı ilacın ne olduğu öğrenilir.` },
      { id: 'D', text: `D. Ulusal Zehir Danışma Merkezi (114 UZEM) aranır.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 248,
    questionText: `248. Aşağıdakilerden hangisi mantar zehirlenmesi
olan hasta/yaralıda yapılan ilk yardım
uygulamalarından değildir?`,
    options: [
      { id: 'A', text: `A. Bilinci değerlendirilir.` },
      { id: 'B', text: `B. Kesinlikle kustur ulmamalıdır.` },
      { id: 'C', text: `C. Yoğurt yedirilir.` },
      { id: 'D', text: `D. Rahat pozisyon verilir.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 249,
    questionText: `249. Aşağıdakilerden hangisi alkol zehirlenmesinde
görülen belirtilerden değildir?`,
    options: [
      { id: 'A', text: `A. Kızarık ve nemli yüz` },
      { id: 'B', text: `B. Vücutta ısı kaybı` },
      { id: 'C', text: `C. Derin ve gürültülü solunum` },
      { id: 'D', text: `D. Grip belirtileri` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 250,
    questionText: `250. Aşağıdakilerden hangisi alkol zehirlenmesinde
yapılan ilk yardım uygulamaları arasında yer
almaz ?`,
    options: [
      { id: 'A', text: `A. Kusma veya bilinç kaybı gibi durumlar varsa derlenme pozisyonu verilir.` },
      { id: 'B', text: `B. Hastanın üzerindeki kıyafetleri inceltilir.` },
      { id: 'C', text: `C. Yaşamsal bulguları takip edilir.` },
      { id: 'D', text: `D. Yaralanma açısından değerlendirilir. T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 28 I.Zehirli maddenin türü II.Zehirli maddenin hangi yolla alındığı III.Hastanın herhangi bir ilaç, uyuşturucu madde veya alkol alıp almadığı IV.Mantar, deli bal, bitki vb. maddelerin tüketilip tüketilmediği V.Ortamda zehirlenmeye sebep olacak bir maddenin olup olmadığı` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 251,
    questionText: `251. Zehirlenmiş olan hastanın tedavisini
yönlendirmek için hasta veya yakınlarından
alınması gereken bilgiler aşağıdakilerden
hangisinde doğru verilmiştir?`,
    options: [
      { id: 'A', text: `A. I- III- IV- V` },
      { id: 'B', text: `B. I- II- IV- V` },
      { id: 'C', text: `C. I- II- III- IV` },
      { id: 'D', text: `D. I- II- III- IV- V` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 252,
    questionText: `252. Aşırı yorgunluk, baş ağrısı, grip belirtileri, baş
dönmesi, karıncalanma, cilt ve tırnaklarda kısa
süreli kiraz kırmızısı renk değişimi gibi belirtilerin
yaşandığı zehirlenme aşağıdakilerden hangisidir?`,
    options: [
      { id: 'A', text: `A. Şofben` },
      { id: 'B', text: `B. Karbondioksit` },
      { id: 'C', text: `C. Karbonmonoksit` },
      { id: 'D', text: `D. Hidrokarbon I.Karbonmonoksit zehirlenmesinde grip belirtileri, baş ağrısı ve aşırı yorgunluk görülür. II.Hasta ortamdan uzaklaştırılır ve temiz bir alana götürülür. III.Hastanın üzerindeki kıyafetler gevşetilerek rahat nefes alması sağlanır. IV.Kapalı alana girmeden önce güvenlik önlemleri alınır. V.Karbonmonoksit genellikle  derin çukurlarda bulunur.` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 253,
    questionText: `253. Karbonmonoksit zehirlenmesi ile ilgili verilen
bilgilerden hangileri doğrudur?`,
    options: [
      { id: 'A', text: `A. I ve II` },
      { id: 'B', text: `B. III, IV, V` },
      { id: 'C', text: `C. I, II, III, IV , V` },
      { id: 'D', text: `D. I, IV, V YAN IK SOĞUK SICAK ACİLLERİNDE İLK YARDIM I.Derinlik II.Yaygınlık III.Enfeksiyon riski IV.Yaş V.Solunum yoluyla görülen zarar` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 254,
    questionText: `254. Yanığın ciddiyetini belirleyen faktörler
hangisinde doğru verilmiştir?`,
    options: [
      { id: 'A', text: `A. I- II- III- IV- V` },
      { id: 'B', text: `B. I- II- III- IV` },
      { id: 'C', text: `C. II- III- IV- V` },
      { id: 'D', text: `D. III- IV- V- I` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 255,
    questionText: `255. Aşağıdakilerden hangisi termal yanıklar da
ciddiyeti belirleyen faktörlerden değildir?`,
    options: [
      { id: 'A', text: `A. Küçük alanda oluşması` },
      { id: 'B', text: `B. Enfeksiyon riski olması` },
      { id: 'C', text: `C. Solunum yolunun zarar görmesi` },
      { id: 'D', text: `D. Önceden var olan hastalıklar` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 256,
    questionText: `256. Birinci derece yanıklarda de rinin hangi tabakası
etkilenir?`,
    options: [
      { id: 'A', text: `A. Orta` },
      { id: 'B', text: `B. En üst` },
      { id: 'C', text: `C. En alt ve orta` },
      { id: 'D', text: `D. En üst ve orta` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 257,
    questionText: `257. Aşağıdakilerden hangisi 1. derece yanıklarda
görülen belirtilerden değildir?`,
    options: [
      { id: 'A', text: `A. Deride içi su dolu kabarcıklar` },
      { id: 'B', text: `B. Yanık bölgede ödem` },
      { id: 'C', text: `C. Deride kızarıklık` },
      { id: 'D', text: `D. Ağrı` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 258,
    questionText: `258. 3. derece yanıklar  ile ilgili aşağıdakilerden
hangisi doğru değildir?`,
    options: [
      { id: 'A', text: `A. Derinin  sadece  en üst tabakası etkilenir.` },
      { id: 'B', text: `B. Kas, sinirler ve damarlar üzerinde etkisi görülür.` },
      { id: 'C', text: `C. Ciltte b eyaz dan siyaha kadar renk değişimi görülebilir.` },
      { id: 'D', text: `D. Sinirler zarar gördüğü için ağrı yoktur. T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 29` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 259,
    questionText: `259. Termal yanıklarda hasta/yaralıya aşağıdaki ilk
yardım uygulamalarından hangisinin yapılması
doğru değildir?`,
    options: [
      { id: 'A', text: `A. Su toplamış olan yerlerin  patlatılması` },
      { id: 'B', text: `B. Takıları n çıkartılması` },
      { id: 'C', text: `C. Yanık olan bölge nin soğuk su ile ıslatılan  temiz bezle örtülmesi` },
      { id: 'D', text: `D. Yaşam belirtilerinin değerlendirilmesi` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 260,
    questionText: `260. Termal yanıklarda hasta/yaralıya aşağıdaki ilk
yardım uygulamalarından hangisi yapılmalıdır?`,
    options: [
      { id: 'A', text: `A. Yanan b ölgey e yanık merhemi sürülmeli` },
      { id: 'B', text: `B. Yanık bölgesi 20 dakika  boyunca  soğuk su altında tutulmalı` },
      { id: 'C', text: `C. Su toplamış yerler varsa patlatılmalı` },
      { id: 'D', text: `D. Giysi çıkarma işlemi soğutma öncesinde yapılmalı` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 261,
    questionText: `261. Aşağıdakilerden hangisi kimyasal yanıkta
yapılan ilk yardım uygulamaların dan değildir?`,
    options: [
      { id: 'A', text: `A. Kimyasal madde ile temas edilmediğin den emin olunmalı` },
      { id: 'B', text: `B. Yanık t oz kimyasal ile oluşmuşsa fırçalayarak temizlenmeli` },
      { id: 'C', text: `C. Kimyas al madde bulaşmış olan giysiler veya takılar çıkar ılmalı` },
      { id: 'D', text: `D. Etkilenen alan basınçlı bandajla sıkı ca sarılmalı` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 262,
    questionText: `262. Elektrik yanığı oluşan hasta/yaralıya aşağıdaki
ilk yardım uygulamalarından hangisi yapılmalıdır?`,
    options: [
      { id: 'A', text: `A. Hareket etmesi sağlanmalı` },
      { id: 'B', text: `B. Hasar gören bölgenin üzeri açık bırakılmalı` },
      { id: 'C', text: `C. Yaralıya dokunmadan önce elektrik akımı kesilmeli` },
      { id: 'D', text: `D. Su toplamış yerler patlatılmalı` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 263,
    questionText: `263. Aşağıdakilerden hangisi donmanın başlangıç
döneminde görülen belirtileri arasında yer almaz?`,
    options: [
      { id: 'A', text: `A. Etkilenen bölgede iğnelenme, zonklama veya ağrı` },
      { id: 'B', text: `B. Ciltte soğukluk, solukluk, uyuşma ve beyazlaşma` },
      { id: 'C', text: `C. Karıncalanma hissi` },
      { id: 'D', text: `D. Ciltte içi su dolu kabarcıklar` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 264,
    questionText: `264. Aşağıdakilerden hangisi donmalarda yapılacak
ilk yardım uygulamaları arasında yer al maz ?`,
    options: [
      { id: 'A', text: `A. Kişi daha sıcak ve kapalı ortama alınır.` },
      { id: 'B', text: `B. Bilinci açıksa sıcak içecekler verilir.` },
      { id: 'C', text: `C. Eldiven, yüzük ve çizme yavaşça çıkarılır.` },
      { id: 'D', text: `D. Etkilenen bölge  ovulur.` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 265,
    questionText: `265. Aşağıdakilerden ha ngisi hipotermi
belirtilerinden değildir?`,
    options: [
      { id: 'A', text: `A. Titreme` },
      { id: 'B', text: `B. Hızlı nabız` },
      { id: 'C', text: `C. Uykuya meyil` },
      { id: 'D', text: `D. Uyuşukluk` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 266,
    questionText: `266. Aşağıdakilerden hangisi hipotermi gelişen
hasta/yaralıda yapılması gereken ilk yardım
uygulaması değildir?`,
    options: [
      { id: 'A', text: `A. Islak giysileri yavaşça çıkarılır.` },
      { id: 'B', text: `B. Doğrudan ısı uygulanır.` },
      { id: 'C', text: `C. Soğuk zemin ile olan teması kesilir.` },
      { id: 'D', text: `D. Yavaşça ılık ve tatlı içecekler verilir.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 267,
    questionText: `267. Kişinin y üksek sıcaklıklara uzun süre maruz
kalması , yetersiz veya dengesiz sıvı almasına  bağlı
olarak ortaya çıkabilen hafif seyirli duruma ne
denir?`,
    options: [
      { id: 'A', text: `A. Sıcak yorgunluğu` },
      { id: 'B', text: `B. Sıcak çarpması` },
      { id: 'C', text: `C. Hipotermi` },
      { id: 'D', text: `D. Yanık` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 268,
    questionText: `268. Aşağıdakilerden hangisi sıcak yorgunluğunda
görülen belirtilerden değildir?`,
    options: [
      { id: 'A', text: `A. Baş dönmesi` },
      { id: 'B', text: `B. İdrar miktarında art ma` },
      { id: 'C', text: `C. Yorgunluk` },
      { id: 'D', text: `D. Mide krampları` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 269,
    questionText: `269. Aşağıdakilerden hangisi sıcak çarpmasında
görülen belirtilerden değildir?`,
    options: [
      { id: 'A', text: `A. Görme bozukluğu` },
      { id: 'B', text: `B. Nöbet` },
      { id: 'C', text: `C. Koma` },
      { id: 'D', text: `D. Yutma güçlüğü` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 270,
    questionText: `270. Sıcak çarpmasından korunmak için alınması
gereken önlemler  ile ilgili aşağıdakilerden hangisi
doğru  değildir?`,
    options: [
      { id: 'A', text: `A. Şapka kullanılmalı` },
      { id: 'B', text: `B. Koyu renkli ve kalın giysiler giyilmeli` },
      { id: 'C', text: `C. Bol miktarda sıvı tüketilmeli` },
      { id: 'D', text: `D. Gereksiz ilaç kullanılmamalı T.C. MİLLÎ EĞİTİM BAKANLIĞI İLK YARDIM SORU KİTABI 30` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 271,
    questionText: `271. Sıcak çarpmalarında bilinci açık olan
hasta/yaralıya aşağıdaki ilk yardım
uygulamalarından hangisinin yapılması doğru
değildir?`,
    options: [
      { id: 'A', text: `A. Bilincin kontrol edilmesi` },
      { id: 'B', text: `B. Giysilerin  çıkarılması` },
      { id: 'C', text: `C. Serin ve havadar bir yere alınması` },
      { id: 'D', text: `D. Derlenme pozisyonu verilmesi` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 272,
    questionText: `272. Sıcak çarpmalarında bilinci açık olan sporcu
hasta/yaralıya aşağıdaki ilk yardım
uygulamalarından hangisinin yapılması doğru
değildir?`,
    options: [
      { id: 'A', text: `A. Sahada soğutulmalı` },
      { id: 'B', text: `B. Buzlu su olan küvete daldırılmalı` },
      { id: 'C', text: `C. Buzlu suyun sıcaklığı 0-1◦ C olmalı` },
      { id: 'D', text: `D. Solunumu, kalp hızı, bilinç durumu sürekli izlenmeli GÖZ, KULAK VE BURUNA YABANCI CİSİM KAÇMASINDA İLKYARDIM` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 273,
    questionText: `273. Aşağıdakilerden hangisi göze yabancı cisim
kaçm asında ortaya çıkan belirtiler den değildir?`,
    options: [
      { id: 'A', text: `A. Gözdeki ağrı veya rahatsızlık hissi` },
      { id: 'B', text: `B. Gözde sulanma` },
      { id: 'C', text: `C. Net görme` },
      { id: 'D', text: `D. Kızarıklık` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 274,
    questionText: `274. Aşağıdakilerden hangisi göze yabancı cisim
kaçmasınd a yapılacak ilk yardım uygulamalarından
değildir?`,
    options: [
      { id: 'A', text: `A. Ellerin temiz olduğundan emin olunur.` },
      { id: 'B', text: `B. Kişiye ayakta müdahale edilir.` },
      { id: 'C', text: `C. Kişi gözlerini ovalamaması konusunda uyarı lır.` },
      { id: 'D', text: `D. Göz oda sıcaklığında temiz su ile yıkanır.` }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 275,
    questionText: `275. Kulağa yabancı bir cisim kaçtığında çıkarmak
için aşağıdaki ilk yardım uygulamalarından
hangisinin yapılması doğrudur?`,
    options: [
      { id: 'A', text: `A. Görünmese de cismin çıkarılması` },
      { id: 'B', text: `B. Sivri bir cisim kullanılması` },
      { id: 'C', text: `C. Kişinin sakin leştirilmesi` },
      { id: 'D', text: `D. Düğme şeklinde pil varsa su dökülmesi` }
    ],
    correctAnswerId: 'C'
  },
  {
    id: 276,
    questionText: `276. Kulağa yabancı bir  cisim kaçtığında çıkarmak
için aşağıdaki ilk yardım uygulamalarından
hangisinin yapılması doğru değildir?`,
    options: [
      { id: 'A', text: `A. Görünüyorsa  cismin çıkarılması` },
      { id: 'B', text: `B. Düğme şeklinde pil varsa çıkarılmas ı` },
      { id: 'C', text: `C. Böcek varsa  ılık su dökülmesi` },
      { id: 'D', text: `D. Cismin daha derine ilerletilmesi` }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 277,
    questionText: `277. Buruna yabancı bir cisim kaçtığında çıkarmak
için aşağıdaki ilk yardım uygulamalarından
hangisinin yapılması doğrudur?`,
    options: [
      { id: 'A', text: `A. Solunum sıkıntısı varsa ağızdan sakin bir şekilde nefes alması  söylenir.` },
      { id: 'B', text: `B. Yabancı cisim çıkarılmaya çalışılır.` },
      { id: 'C', text: `C. Cismin çıkarılmasında cımbız kullanılır.` },
      { id: 'D', text: `D. Cismin çıkarılmasında şiş ve ya tığ kullanılır.` }
    ],
    correctAnswerId: 'A'
  },
  {
    id: 278,
    questionText: `278. Yabancı cisim  yutulmasında ilk yardım
uygulamalarından hangisinin yapılması doğrudur?`,
    options: [
      { id: 'A', text: `A. Ne yuttuğu öğrenilir.` },
      { id: 'B', text: `B. Kusmasına izin ver ilir.` },
      { id: 'C', text: `C. Düğme şeklinde pil yutulmuşsa doğal yolla çıkması beklenir.` },
      { id: 'D', text: `D. Ağrılı dışkılama varsa geçmesi  bekle nir.` }
    ],
    correctAnswerId: 'A'
  }
];
