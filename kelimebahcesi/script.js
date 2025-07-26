document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elementleri ---
    const isimGirisAlani = document.getElementById('isim-giris-alani');
    const cocukAdiInput = document.getElementById('cocuk-adi');
    const isimKaydetBtn = document.getElementById('isim-kaydet-btn');
    const oyunAlani = document.getElementById('oyun-alani');
    const oyuncuAdiGoster = document.getElementById('oyuncu-adi-goster');
    const oyunBasligi = document.getElementById('oyun-basligi');

    const puanGosterge = document.getElementById('puan');
    const kelimeSayaciGosterge = document.getElementById('kelime-sayaci');
    const toplamKelimeSayisiGosterge = document.getElementById('toplam-kelime-sayisi');
    
    const cicekGorseli = document.getElementById('cicek-gorseli');
    const hakSayisiGosterge = document.getElementById('hak-sayisi');
    const kelimeGostergeAlani = document.getElementById('kelime-gosterge-alani');
    const ipucuAlani = document.getElementById('ipucu-alani');
    const mesajAlani = document.getElementById('mesaj-alani');
    const klavyeAlani = document.getElementById('klavye-alani');
    const yaziAlani = document.getElementById('yazi-alani');
    const yazilanKelimeInput = document.getElementById('yazilan-kelime');
    const kelimeGonderBtn = document.getElementById('kelime-gonder-btn');
    const harfSecBtn = document.getElementById('harf-sec-btn');
    const kelimeYazBtn = document.getElementById('kelime-yaz-btn');
    const sonrakiKelimeBtn = document.getElementById('sonraki-kelime-btn');

    const oyunSonuMesajiAlani = document.getElementById('oyun-sonu-mesaji');
    const sonSkorMesaji = document.getElementById('son-skor-mesaji');
    const tekrarOynaBtn = document.getElementById('tekrar-oyna-btn');
    const yildizlarKonteyner = document.querySelector('.yildizlar-konteyner');
    
    // Sonraki kelime banner'ları
    const sonrakiKelimeBanner = document.getElementById('sonraki-kelime-banner');
    const sonrakiKelimeBannerBtn = document.getElementById('sonraki-kelime-banner-btn');
    
    // Kelimeyi bilemedi banner'ı
    const kelimeBilemediBanner = document.getElementById('kelime-bilemedi-banner');
    const kelimeBilemediBannerBtn = document.getElementById('kelime-bilemedi-banner-btn');
    const dogruKelimeGoster = document.getElementById('dogru-kelime-goster');

    // Ses efektleri
    const dogruSes = document.getElementById('dogru-ses');
    const yanlisSes = document.getElementById('yanlis-ses');
    const tamamlandiSes = document.getElementById('tamamlandi-ses');

    // --- Oyun Değişkenleri ---
    // Gerçek oyunda 1500 kelimelik bir liste olacak. Burada sınırlı sayıda örnek var.
    const tumKelimeler = [
        // 1. sınıf çocukları için uygun kelime ve ipuçları (100 kelime örneği)
        { kelime: "ELMA", ipucu: "Kırmızı ya da yeşil renkte olabilen, ağaçta yetişen bir meyve." },
        { kelime: "KEDİ", ipucu: "Miyav diyen, pofuduk, dört ayaklı sevimli bir hayvan." },
        { kelime: "OKUL", ipucu: "Öğrencilerin ders gördüğü, öğretmenlerin olduğu yer." },
        { kelime: "ANNE", ipucu: "Bizi dünyaya getiren, bakan ve seven kadın." },
        { kelime: "BABA", ipucu: "Babalarımızın günü Haziran ayında kutlanır. Ailenin erkek büyüğü." },
        { kelime: "ÇİÇEK", ipucu: "Bahçede yetişen, güzel kokan renkli bitki." },
        { kelime: "KİTAP", ipucu: "İçinde hikayeler olan, okuduğumuz sayfalardan oluşan şey." },
        { kelime: "KALEM", ipucu: "Yazı yazmak için kullandığımız araç." },
        { kelime: "ARABA", ipucu: "Dört tekerleği olan, yollarda giden taşıt." },
        { kelime: "TOP", ipucu: "Yuvarlak şeklinde, oyun oynadığımız bir oyuncak." },
        { kelime: "GÜNEŞ", ipucu: "Gökyüzünde parlayan, gündüz görünen sarı, sıcak yıldız." },
        { kelime: "AY", ipucu: "Geceleri gökyüzünde parlayan, bazen yuvarlak bazen yarım görünen ışık." },
        { kelime: "YILDIZ", ipucu: "Geceleri gökyüzünde parlayan küçük ışıklar." },
        { kelime: "DENİZ", ipucu: "İçinde balıkların yaşadığı, çok büyük mavi su." },
        { kelime: "AĞAÇ", ipucu: "Yaprakları ve dalları olan, topraktan gökyüzüne uzanan bitki." },
        { kelime: "SU", ipucu: "İçtiğimiz, hayat için önemli olan berrak sıvı." },
        { kelime: "EKMEK", ipucu: "Kahvaltıda yediğimiz, undan yapılan temel yiyecek." },
        { kelime: "SÜT", ipucu: "Beyaz renkli, sağlıklı, ineklerden elde edilen içecek." },
        { kelime: "BALIK", ipucu: "Suda yaşayan, pullu ve solungaçlı hayvan." },
        { kelime: "KUŞ", ipucu: "Kanatları olan, uçabilen, gagalı hayvan." },
        { kelime: "MASA", ipucu: "Üzerinde yemek yediğimiz, ders çalıştığımız mobilya." },
        { kelime: "EV", ipucu: "İçinde yaşadığımız, uyuduğumuz, ailemizle olduğumuz yer." },
        { kelime: "KAPI", ipucu: "Evlere, odalara girip çıktığımız açılıp kapanan şey." },
        { kelime: "CAM", ipucu: "Penceredeki saydam, kırılgan malzeme." },
        { kelime: "RENK", ipucu: "Kırmızı, mavi, yeşil gibi gözümüzle gördüğümüz çeşitler." },
        { kelime: "MAVİ", ipucu: "Gökyüzünün ve denizin rengi." },
        { kelime: "SARI", ipucu: "Güneşin ve muzun rengi." },
        { kelime: "YOL", ipucu: "Arabaların gittiği, bir yerden başka yere giden uzun şerit." },
        { kelime: "PARK", ipucu: "Çocukların salıncakta oynadığı, ağaçların olduğu yer." },
        { kelime: "BEBEK", ipucu: "Yeni doğmuş küçük insan." },
        { kelime: "DEDE", ipucu: "Babamızın ya da annemizin babası." },
        { kelime: "NİNE", ipucu: "Babamızın ya da annemizin annesi." },
        { kelime: "OYUN", ipucu: "Eğlenmek için yaptığımız aktivite." },
        { kelime: "DİŞ", ipucu: "Ağzımızda yemekleri çiğnediğimiz sert parçalar." },
        { kelime: "SAÇ", ipucu: "Başımızda büyüyen, kesilen, taranan şey." },
        { kelime: "GÖZ", ipucu: "Çevremizi görmemizi sağlayan, yüzümüzde bulunan organ." },
        { kelime: "EL", ipucu: "Parmaklarımızın bulunduğu, tutmaya yarayan uzuvumuz." },
        { kelime: "AYAK", ipucu: "Vücudumuzun en alt kısmında, yürümemizi sağlayan uzuv." },
        { kelime: "BURUN", ipucu: "Yüzümüzün ortasında, koku almaya yarayan organ." },
        { kelime: "KULAK", ipucu: "Sesleri duymamızı sağlayan, başımızın iki yanındaki organ." },
        { kelime: "AĞIZ", ipucu: "Konuştuğumuz, yemek yediğimiz, yüzümüzdeki açıklık." },
        { kelime: "BAŞ", ipucu: "Vücudumuzun en üst kısmı, beynimizin bulunduğu yer." },
        { kelime: "KOL", ipucu: "Omuzdan ele kadar uzanan uzuv." },
        { kelime: "BACAK", ipucu: "Kalçadan ayağa kadar uzanan uzuv." },
        { kelime: "PARMAK", ipucu: "Ellerimizde ve ayaklarımızda bulunan uzantılar." },
        { kelime: "TARAK", ipucu: "Saçları düzeltmek için kullandığımız dişli araç." },
        { kelime: "SABUN", ipucu: "Ellerimizi yıkarken kullandığımız temizlik ürünü." },
        { kelime: "GÜL", ipucu: "Güzel kokan, dikenleri olan çiçek." },
        { kelime: "ÇİM", ipucu: "Yeşil renkli, parklarda yetişen kısa bitki." },
        { kelime: "KUM", ipucu: "Plajlarda oyun oynadığımız küçük tanecikler." },
        { kelime: "TAŞ", ipucu: "Sert, ağır, yerde bulduğumuz mineral parçası." },
        { kelime: "HAVA", ipucu: "Nefes aldığımız, etrafımızı saran görünmez gaz." },
        { kelime: "BULUT", ipucu: "Gökyüzünde beyaz veya gri renkte dolaşan şey." },
        { kelime: "YAĞMUR", ipucu: "Bulutlardan yere düşen su damlaları." },
        { kelime: "KAR", ipucu: "Kışın yağan, beyaz ve soğuk yağış." },
        { kelime: "RÜZGAR", ipucu: "Esen, saçlarımızı savuran hava hareketi." },
        { kelime: "YEMEK", ipucu: "Acıktığımızda yediğimiz şey." },
        { kelime: "ÇATAL", ipucu: "Yemek yerken kullandığımız, dişleri olan araç." },
        { kelime: "KAŞIK", ipucu: "Çorba içerken kullandığımız araç." },
        { kelime: "TABAK", ipucu: "Yemeğimizi koyduğumuz, düz, derin olmayan kap." },
        { kelime: "BARDAK", ipucu: "Su, süt gibi içecekleri içtiğimiz kap." },
        { kelime: "ÇAY", ipucu: "Sıcak içilen, demlenmiş yapraklardan yapılan içecek." },
        { kelime: "ŞEKER", ipucu: "Tatlı olan, çaya eklediğimiz küçük parçalar." },
        { kelime: "TUZ", ipucu: "Yemeklere lezzet vermek için koyduğumuz beyaz tane." },
        { kelime: "YUMURTA", ipucu: "Tavukların yaptığı, kabuğu olan yiyecek." },
        { kelime: "PEYNİR", ipucu: "Kahvaltıda yediğimiz, sütten yapılan beyaz yiyecek." },
        { kelime: "BAL", ipucu: "Arıların yaptığı tatlı, sarı yiyecek." },
        { kelime: "MEYVE", ipucu: "Elma, armut, muz gibi tatlı, ağaçta yetişen yiyecekler." },
        { kelime: "SEBZE", ipucu: "Domates, biber, havuç gibi bahçede yetişen yiyecekler." },
        { kelime: "HAVUÇ", ipucu: "Uzun, turuncu renkli, tavşanların sevdiği sebze." },
        { kelime: "DOMATES", ipucu: "Kırmızı renkli, salatalarda kullanılan sebze." },
        { kelime: "SALATA", ipucu: "Yeşilliklerden yapılan, sağlıklı yiyecek." },
        { kelime: "ARMUT", ipucu: "Aşağı doğru inen, yeşil veya sarı renkli meyve." },
        { kelime: "PORTAKAL", ipucu: "Turuncu renkli, sulu, C vitamini olan meyve." },
        { kelime: "MUZ", ipucu: "Sarı renkli, kabuğu soyulan, uzun şekilli meyve." },
        { kelime: "ÇİLEK", ipucu: "Kırmızı renkli, üzerinde küçük taneler olan meyve." },
        { kelime: "KİRAZ", ipucu: "Kırmızı renkli, saplı, küçük ve yuvarlak meyve." },
        { kelime: "ÜZÜM", ipucu: "Salkım halinde, küçük taneli, yeşil veya mor meyve." },
        { kelime: "KARPUZ", ipucu: "Yazın yediğimiz, büyük, içi kırmızı ve sulu meyve." },
        { kelime: "KAVUN", ipucu: "Sarı renkli, ağı olan, sulu ve tatlı meyve." }
    ];
    let kullanilabilirKelimeler = [];

    const MAX_KELIME_PER_OYUN = 20;
    const MAX_YANLIS_HAK = 6;

    let oyuncuAdi = "";
    let secilenKelime = "";
    let secilenKelimeIpucu = "";
    let dogruBilinenHarfler = [];
    let yanlisTahminSayisi = 0;
    let puan = 0;
    let mevcutKelimeIndex = 0;
    let girisModu = "harf"; // "harf" veya "kelime"

    // Çiçek büyüme aşamaları (Emoji)
    const cicekAsamalari = ["🌱", "🌿", "🪴", "🌷", "🌸", "🌻", "🌟🌻🌟"];

    // --- Arka Plan Efektleri ---
    function arkaplanEfektleriOlustur() {
        // Daha fazla balon oluştur
        const balonlar = document.querySelector('.balonlar');
        const balonEmojileri = ['🎈', '🎈', '🎈', '🎁', '✨', '🎀', '🌈', '⭐', '🦋'];
        
        for (let i = 0; i < 15; i++) { // Biraz daha fazla emoji
            const span = document.createElement('span');
            const randomEmoji = balonEmojileri[Math.floor(Math.random() * balonEmojileri.length)];
            span.textContent = randomEmoji;
            span.style.left = `${Math.random() * 100}%`;
            span.style.animationDelay = `${Math.random() * 15}s`;
            span.style.fontSize = `${Math.random() * 20 + 15}px`;
            balonlar.appendChild(span);
        }
    }

    // --- Fonksiyonlar ---
    function oyunuBaslat() {
        // Rastgele karıştırılmış kelimelerden 20 tanesini seç
        kullanilabilirKelimeler = [...shuffleArray(tumKelimeler).slice(0, MAX_KELIME_PER_OYUN)];
        if (kullanilabilirKelimeler.length === 0) {
            alert("Kelime listesi boş!");
            return;
        }
        
        puan = 0;
        mevcutKelimeIndex = 0;
        
        isimGirisAlani.classList.add('gizli');
        oyunAlani.classList.remove('gizli');
        oyunSonuMesajiAlani.classList.add('gizli');
        oyunBasligi.textContent = `${oyuncuAdi}'nın Kelime Bahçesi`;
        oyuncuAdiGoster.textContent = oyuncuAdi;
        
        puanGosterge.textContent = puan;
        toplamKelimeSayisiGosterge.textContent = kullanilabilirKelimeler.length;
        
        // Arka plan efektlerini oluştur
        arkaplanEfektleriOlustur();
        
        // Klavye oluştur
        klavyeOlustur();
        
        // Giriş modunu ayarla
        girisModu = "harf";
        harfSecBtn.classList.add('aktif');
        kelimeYazBtn.classList.remove('aktif');
        klavyeAlani.classList.add('aktif');
        yaziAlani.classList.add('gizli');
        
        // İlk kelimeyi yükle
        yeniKelimeYukle();
    }

    function yeniKelimeYukle() {
        if (mevcutKelimeIndex >= kullanilabilirKelimeler.length) {
            oyunuBitir();
            return;
        }

        const secilenKelimeObjesi = kullanilabilirKelimeler[mevcutKelimeIndex];
        secilenKelime = secilenKelimeObjesi.kelime;
        secilenKelimeIpucu = secilenKelimeObjesi.ipucu;
        dogruBilinenHarfler = [];
        yanlisTahminSayisi = 0;

        kelimeGostergeAlani.innerHTML = ""; // Önceki kelimeyi temizle
        
        // Harf kutuları oluştur
        secilenKelime.split('').forEach(() => {
            const harfKutusu = document.createElement('span');
            harfKutusu.textContent = '_';
            kelimeGostergeAlani.appendChild(harfKutusu);
        });
        
        kelimeSayaciGosterge.textContent = mevcutKelimeIndex + 1;
        hakSayisiGosterge.textContent = MAX_YANLIS_HAK;
        cicekGorseli.textContent = cicekAsamalari[0];
        cicekGorseli.style.transform = 'scale(1)';
        cicekGorseli.style.filter = '';
        
        // Çiçek büyüme animasyonu
        cicekGorseli.classList.add('buyume-efekti');
        setTimeout(() => {
            cicekGorseli.classList.remove('buyume-efekti');
        }, 1000);
        
        // İpucunu göster (artık ayrı bir alanda olacak)
        ipucuAlani.textContent = `İpucu: ${secilenKelimeIpucu}`;
        mesajAlani.textContent = "";
        mesajAlani.className = '';
        sonrakiKelimeBtn.classList.add('gizli');

        // Klavyedeki tüm tuşları etkinleştir ve stillerini sıfırla
        document.querySelectorAll('#klavye-alani button').forEach(button => {
            button.disabled = false;
            button.className = ''; // Önceki sınıfları temizle
        });
        
        // Yazılı giriş alanını temizle
        yazilanKelimeInput.value = '';

        kelimeyiGoster();
    }

    function kelimeyiGoster() {
        const kelimeHarfleri = kelimeGostergeAlani.children;
        let hepsiBilindi = true;
        
        secilenKelime.split('').forEach((harf, index) => {
            if (dogruBilinenHarfler.includes(harf)) {
                kelimeHarfleri[index].textContent = harf;
            } else {
                kelimeHarfleri[index].textContent = '_';
                hepsiBilindi = false;
            }
        });
        
        return hepsiBilindi;
    }

    function harfTahminEt(harf) {
        const tiklananButon = document.querySelector(`#klavye-alani button[data-harf='${harf}']`);
        if (!secilenKelime || (tiklananButon && tiklananButon.disabled)) return;

        if (tiklananButon) {
            tiklananButon.disabled = true;
        }

        if (secilenKelime.includes(harf)) {
            dogruBilinenHarfler.push(harf);
            puanArttir(2); // Her doğru harf için puan, animasyonlu
            
            mesajAlani.textContent = "Harika! Doğru harf!";
            mesajAlani.className = 'mesaj-alani dogru';
            
            if (tiklananButon) {
                tiklananButon.classList.add('dogru-harf');
            }
            
            // Ses efekti - doğru harf için
            dogruSes.currentTime = 0;
            dogruSes.play().catch(e => console.log("Ses çalma hatası:", e));

            // Çiçek büyütme
            const dogruBenzersizHarfSayisi = new Set(secilenKelime.split('').filter(h => dogruBilinenHarfler.includes(h))).size;
            const cicekIndex = Math.min(dogruBenzersizHarfSayisi, cicekAsamalari.length - 1);
            cicekGorseli.textContent = cicekAsamalari[cicekIndex];
            cicekGorseli.style.transform = `scale(${1 + dogruBenzersizHarfSayisi * 0.1})`;
            cicekGorseli.style.filter = `brightness(${100 + dogruBenzersizHarfSayisi * 10}%) drop-shadow(0 0 ${5 + dogruBenzersizHarfSayisi * 2}px rgba(0,255,0,0.${3 + dogruBenzersizHarfSayisi}))`;

        } else {
            yanlisTahminSayisi++;
            hakSayisiGosterge.textContent = MAX_YANLIS_HAK - yanlisTahminSayisi;
            
            mesajAlani.textContent = `"${harf}" harfi yokmuş, dikkatli ol!`;
            mesajAlani.className = 'mesaj-alani yanlis';
            
            if (tiklananButon) {
                tiklananButon.classList.add('yanlis-harf');
            }
            
            // Ses efekti
            yanlisSes.currentTime = 0;
            yanlisSes.play().catch(e => console.log("Ses çalma hatası:", e));

            // Çiçek solması efekti
            cicekGorseli.style.transform = `scale(${1 - yanlisTahminSayisi * 0.05})`;
            cicekGorseli.style.filter = `brightness(${100 - yanlisTahminSayisi * 5}%) grayscale(${yanlisTahminSayisi * 10}%)`;
        }
        
        const kelimeTamamlandi = kelimeyiGoster();
        kelimeDurumunuKontrolEt(kelimeTamamlandi);
    }
    
    function kelimeTahminEt(tahminEdilenKelime) {
        if (!secilenKelime) return;
        
        // Boş tahminleri reddet
        if (!tahminEdilenKelime.trim()) {
            mesajAlani.textContent = "Lütfen bir kelime yaz!";
            mesajAlani.className = 'mesaj-alani yanlis';
            return;
        }
        
        // Tahmini büyük harfe çevir (Türkçe karakter sorunlarını önlemek için)
        tahminEdilenKelime = tahminEdilenKelime.toLocaleUpperCase('tr-TR');
        
        if (tahminEdilenKelime === secilenKelime) {
            // Tüm harfleri doğru bilinenler listesine ekle
            dogruBilinenHarfler = [...new Set([...dogruBilinenHarfler, ...secilenKelime.split('')])];
            
            puanArttir(10); // Kelimeyi doğrudan bilme bonusu, animasyonlu
            
            mesajAlani.textContent = "Tebrikler! Kelimeyi bildin!";
            mesajAlani.className = 'mesaj-alani dogru';
            
            // Ses efekti - kısa tamamlandı sesi
            tamamlandiSes.currentTime = 0;
            tamamlandiSes.play().catch(e => console.log("Ses çalma hatası:", e));
            
            // Tüm klavye tuşlarını devre dışı bırak
            document.querySelectorAll('#klavye-alani button').forEach(button => button.disabled = true);
            
            // Çiçeği tam açmış göster
            cicekGorseli.textContent = cicekAsamalari[cicekAsamalari.length-1];
            cicekGorseli.style.transform = 'scale(1.5)';
            cicekGorseli.style.filter = 'brightness(120%) drop-shadow(0 0 15px rgba(0,255,0,0.7))';
            
            kelimeyiGoster();
            
            // Banner'ı göster
            sonrakiKelimeBanner.classList.add('gorunur');
            
        } else {
            yanlisTahminSayisi++;
            hakSayisiGosterge.textContent = MAX_YANLIS_HAK - yanlisTahminSayisi;
            
            mesajAlani.textContent = `"${tahminEdilenKelime}" doğru kelime değil. Tekrar dene!`;
            mesajAlani.className = 'mesaj-alani yanlis';
            
            // Ses efekti
            yanlisSes.currentTime = 0;
            yanlisSes.play().catch(e => console.log("Ses çalma hatası:", e));
            
            // Çiçek solması efekti
            cicekGorseli.style.transform = `scale(${1 - yanlisTahminSayisi * 0.05})`;
            cicekGorseli.style.filter = `brightness(${100 - yanlisTahminSayisi * 5}%) grayscale(${yanlisTahminSayisi * 10}%)`;
            
            if (yanlisTahminSayisi >= MAX_YANLIS_HAK) {
                kelimeDurumunuKontrolEt(false);
            }
        }
        
        // Yazı alanını temizle
        yazilanKelimeInput.value = '';
    }
    
    // Puan animasyonu için yeni fonksiyon
    function puanArttir(miktar) {
        puan += miktar;
        puanGosterge.textContent = puan;
        
        // Puan artışı animasyonu
        puanGosterge.classList.add('puan-artti');
        setTimeout(() => {
            puanGosterge.classList.remove('puan-artti');
        }, 500);
    }
    
    function kelimeDurumunuKontrolEt(kelimeTamamlandi) {
        if (kelimeTamamlandi) {
            // Kelime tamamlandı, bonus puan ver
            puanArttir(10); // Kelimeyi tamamlama bonusu, animasyonlu
            
            mesajAlani.textContent = `Tebrikler! Kelime: ${secilenKelime}`;
            mesajAlani.className = 'mesaj-alani dogru';
            
            // Tam açmış çiçek göster ve ses çal
            cicekGorseli.textContent = cicekAsamalari[cicekAsamalari.length-1]; 
            cicekGorseli.style.transform = 'scale(1.5)'; 
            cicekGorseli.style.filter = 'brightness(120%) drop-shadow(0 0 15px rgba(0,255,0,0.7))';
            
            // Kısa tamamlandı sesi çal
            tamamlandiSes.currentTime = 0;
            tamamlandiSes.play().catch(e => console.log("Ses çalma hatası:", e));
            
            // Banner'ı göster
            sonrakiKelimeBanner.classList.add('gorunur');
            
            // Tüm klavye tuşlarını devre dışı bırak
            document.querySelectorAll('#klavye-alani button').forEach(button => button.disabled = true);
            
        } else if (yanlisTahminSayisi >= MAX_YANLIS_HAK) {
            // Haklar bitti, kelimeyi göster ve bilemedi banner'ı göster
            mesajAlani.textContent = `Maalesef tüm hakların bitti! Kelime: ${secilenKelime}`;
            mesajAlani.className = 'mesaj-alani yanlis';
            
            cicekGorseli.textContent = "🥀"; // Solmuş çiçek
            cicekGorseli.style.transform = 'scale(0.9)';
            cicekGorseli.style.filter = 'grayscale(100%) brightness(70%)';
            
            dogruKelimeGoster.textContent = secilenKelime;
            kelimeBilemediBanner.classList.add('gorunur');
            
            // Sonraki kelime butonunu gizle (banner kullanacağız artık)
            sonrakiKelimeBtn.classList.add('gizli');
            
            // Tüm klavye tuşlarını devre dışı bırak
            document.querySelectorAll('#klavye-alani button').forEach(button => button.disabled = true);
            
            // Doğru kelimeyi göster
            dogruBilinenHarfler = secilenKelime.split('');
            kelimeyiGoster();
        }
    }

    function klavyeOlustur() {
        klavyeAlani.innerHTML = ""; // Önceki klavyeyi temizle
        const harfler = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ";
        harfler.split('').forEach(harf => {
            const buton = document.createElement('button');
            buton.textContent = harf;
            buton.dataset.harf = harf; // Harfi data attribute olarak sakla
            buton.addEventListener('click', () => harfTahminEt(harf));
            klavyeAlani.appendChild(buton);
        });
    }

    function oyunuBitir() {
        oyunAlani.classList.add('gizli');
        oyunSonuMesajiAlani.classList.remove('gizli');
        sonSkorMesaji.textContent = `${oyuncuAdi}, oyun bitti! Toplam puanın: ${puan}`;
        
        // Yıldız sayısını puana göre belirle
        yildizlarKonteyner.innerHTML = '';
        let yildizSayisi = Math.min(5, Math.max(1, Math.floor(puan / 100) + 1));
        
        for (let i = 0; i < yildizSayisi; i++) {
            const yildiz = document.createElement('span');
            yildiz.className = 'yildiz';
            yildiz.textContent = '⭐';
            yildiz.style.animationDelay = `${i * 0.3}s`;
            yildizlarKonteyner.appendChild(yildiz);
        }
    }

    // Fisher-Yates shuffle algoritması - kelime listesini karıştırmak için
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // --- Event Listeners ---
    isimKaydetBtn.addEventListener('click', () => {
        oyuncuAdi = cocukAdiInput.value.trim();
        if (oyuncuAdi) {
            oyunuBaslat();
        } else {
            alert("Lütfen adını gir.");
        }
    });
    
    // Enter tuşuyla isim girişi
    cocukAdiInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            isimKaydetBtn.click();
        }
    });

    sonrakiKelimeBtn.addEventListener('click', () => {
        mevcutKelimeIndex++;
        yeniKelimeYukle();
    });

    tekrarOynaBtn.addEventListener('click', () => {
        isimGirisAlani.classList.remove('gizli');
        oyunSonuMesajiAlani.classList.add('gizli');
        cocukAdiInput.value = ""; // İsim alanını temizle
        oyunBasligi.textContent = "Kelime Bahçesi"; // Başlığı sıfırla
    });
    
    // Giriş modu değiştirme butonları
    harfSecBtn.addEventListener('click', () => {
        if (girisModu !== "harf") {
            girisModu = "harf";
            harfSecBtn.classList.add('aktif');
            kelimeYazBtn.classList.remove('aktif');
            klavyeAlani.classList.add('aktif');
            yaziAlani.classList.add('gizli');
        }
    });
    
    kelimeYazBtn.addEventListener('click', () => {
        if (girisModu !== "kelime") {
            girisModu = "kelime";
            kelimeYazBtn.classList.add('aktif');
            harfSecBtn.classList.remove('aktif');
            klavyeAlani.classList.remove('aktif');
            yaziAlani.classList.remove('gizli');
            yazilanKelimeInput.focus();
        }
    });
    
    // Kelime gönderme butonu
    kelimeGonderBtn.addEventListener('click', () => {
        kelimeTahminEt(yazilanKelimeInput.value);
    });
    
    // Enter tuşuyla kelime tahmini
    yazilanKelimeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            kelimeGonderBtn.click();
        }
    });

    // Banner butonları için event listener'lar
    sonrakiKelimeBannerBtn.addEventListener('click', () => {
        sonrakiKelimeBanner.classList.remove('gorunur');
        mevcutKelimeIndex++;
        yeniKelimeYukle();
    });
    
    kelimeBilemediBannerBtn.addEventListener('click', () => {
        kelimeBilemediBanner.classList.remove('gorunur');
        mevcutKelimeIndex++;
        yeniKelimeYukle();
    });
});