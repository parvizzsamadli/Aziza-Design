function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
  }



  let language = {
    az: {
      welcome: "Haqqımızda"
    },
    en: {
      welcome: "About"
    },
    ru: {
      welcome: "О нас"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      About.textContent =
        language.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      About.textContent =
        language.ru.welcome;
    }
  }

  let language1 = {
    az: {
      welcome: "Bütün xidmətlər"
    },
    en: {
      welcome: "All services"
    },
    ru: {
      welcome: "Все услуги"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      allServices.textContent =
        language1.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      allServices.textContent =
        language1.ru.welcome;
    }
  }

  let language2 = {
    az: {
      welcome: "Komandamız"
    },
    en: {
      welcome: "Our team"
    },
    ru: {
      welcome: "Наша команда"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      ourTeam.textContent =
        language2.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      ourTeam.textContent =
        language2.ru.welcome;
    }
  }

  let language3 = {
    az: {
      welcome: "Showroom"
    },
    en: {
      welcome: "Showroom"
    },
    ru: {
      welcome: "Шоурум"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      Showroom.textContent =
        language3.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      Showroom.textContent =
        language3.ru.welcome;
    }
  }

  let language4 = {
    az: {
      welcome: "Əlaqə"
    },
    en: {
      welcome: "Contact"
    },
    ru: {
      welcome: "Контакты"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      Contact.textContent =
        language4.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      Contact.textContent =
        language4.ru.welcome;
    }
  }

 let language0 = {
    az: {
      welcome: "Haqqımızda"
    },
    en: {
      welcome: "About"
    },
    ru: {
      welcome: "О нас"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      About1.textContent =
        language0.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      About1.textContent =
        language0.ru.welcome;
    }
  }

  let language11 = {
    az: {
      welcome: "Bütün xidmətlər"
    },
    en: {
      welcome: "All services"
    },
    ru: {
      welcome: "Все услуги"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      allServices1.textContent =
        language11.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      allServices1.textContent =
        language11.ru.welcome;
    }
  }

  let language22 = {
    az: {
      welcome: "Komandamız"
    },
    en: {
      welcome: "Our team"
    },
    ru: {
      welcome: "Наша команда"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      ourTeam1.textContent =
        language22.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      ourTeam1.textContent =
        language22.ru.welcome;
    }
  }

  let language33 = {
    az: {
      welcome: "Showroom"
    },
    en: {
      welcome: "Showroom"
    },
    ru: {
      welcome: "Шоурум"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      Showroom1.textContent =
        language33.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      Showroom1.textContent =
        language33.ru.welcome;
    }
  }

  let language44 = {
    az: {
      welcome: "Əlaqə"
    },
    en: {
      welcome: "Contact"
    },
    ru: {
      welcome: "Контакты"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      Contact1.textContent =
        language44.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      Contact1.textContent =
        language44.ru.welcome;
    }
  }


  let language5 = {
    az: {
      welcome: "Gecə rejiminə keç"
    },
    en: {
      welcome: "switch to night mode"
    },
    ru: {
      welcome: "переключиться на ночной режим"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      nightMood.textContent =
        language5.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      nightMood.textContent =
        language5.ru.welcome;
    }
  }

  let language6 = {
    az: {
      welcome: "Gündüz rejiminə keç"
    },
    en: {
      welcome: "Switch to daytime mode"
    },
    ru: {
      welcome: "Переключиться на дневной режим"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      dayMood.textContent =
        language6.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      dayMood.textContent =
        language6.ru.welcome;
    }
  }

  
  let language7 = {
    az: {
      welcome: "Təmir-tikinti"
    },
    en: {
      welcome: "Repair and construction"
    },
    ru: {
      welcome: "Ремонт и строительство"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      construction.textContent =
        language7.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      construction.textContent =
        language7.ru.welcome;
    }
  }

  let language8 = {
    az: {
      welcome: "Dizayn xidmətləri"
    },
    en: {
      welcome: "Design services"
    },
    ru: {
      welcome: "Дизайнерские услуги"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      designService.textContent =
        language8.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      designService.textContent =
        language8.ru.welcome;
    }
  }

  let language9 = {
    az: {
      welcome: "Mebel"
    },
    en: {
      welcome: "Furniture"
    },
    ru: {
      welcome: "Мебель"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      Furniture.textContent =
        language9.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      Furniture.textContent =
        language9.ru.welcome;
    }
  }

  let language10 = {
    az: {
      welcome: "Qiymət təklifi al"
    },
    en: {
      welcome: "Get a price"
    },
    ru: {
      welcome: "Узнать цену"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      myBtn.textContent =
        language10.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      myBtn.textContent =
        language10.ru.welcome;
    }
  }

  let language12 = {
    az: {
      welcome: "Dizayndan quraşdırmaya qədər <br> təhlükəsiz və səmərəli xidmətin təmin edilməsi"
    },
    en: {
      welcome: "Providing a safe and efficient service from design to installation"
    },
    ru: {
      welcome: "Предоставление безопасных и эффективных услуг от проектирования до установки"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      text1.textContent =
        language12.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      text1.textContent =
        language12.ru.welcome;
    }
  }

  let language13 = {
    az: {
      welcome: "Səmərəli xidmət"
    },
    en: {
      welcome: "Efficient servicen"
    },
    ru: {
      welcome: "Эффективный сервис"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      text11.textContent =
        language13.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      text11.textContent =
        language13.ru.welcome;
    }
  }

  let language14 = {
    az: {
      welcome: "Yüksək keyfiyyətli mərtəbə planları və ev vizualizasiyaları"
    },
    en: {
      welcome: "High quality floor plans and home visualizations"
    },
    ru: {
      welcome: "Высококачественные планы этажей и визуализации дома"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      text2.textContent =
        language14.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      text2.textContent =
        language14.ru.welcome;
    }
  }

  let language15 = {
    az: {
      welcome: "Planlamanın təşkili"
    },
    en: {
      welcome: "Organization of planning"
    },
    ru: {
      welcome: "Организация планирования"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      text22.textContent =
        language15.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      text22.textContent =
        language15.ru.welcome;
    }
  }

  let language16 = {
    az: {
      welcome: "Elm və incəliklə dizayn edilmiş modul mətbəxlər"
    },
    en: {
      welcome: "Modular kitchens designed with science and sophistication"
    },
    ru: {
      welcome: "Модульные кухни, разработанные с наукой и изысканностью"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      text3.textContent =
        language16.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      text3.textContent =
        language16.ru.welcome;
    }
  }

  let language17 = {
    az: {
      welcome: "Modul mətbəxlər"
    },
    en: {
      welcome: "Modular kitchens"
    },
    ru: {
      welcome: "Модульные кухни"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      text33.textContent =
        language17.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      text33.textContent =
        language17.ru.welcome;
    }
  }

  let language18 = {
    az: {
      welcome: "Bina və ya yenidənqurma layihəniz üçün dizayn məsləhətlərini kəşf edin"
    },
    en: {
      welcome: "Discover design tips for your building or remodeling project"
    },
    ru: {
      welcome: "Откройте для себя советы по дизайну для вашего проекта строительства или реконструкции"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      text4.textContent =
        language18.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      text4.textContent =
        language18.ru.welcome;
    }
  }

  let language19 = {
    az: {
      welcome: "Dizayn məsləhətləri"
    },
    en: {
      welcome: "Design tips"
    },
    ru: {
      welcome: "Советы по дизайну"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      text44.textContent =
        language19.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      text44.textContent =
        language19.ru.welcome;
    }
  }

  let language20 = {
    az: {
      welcome: "Uyğun qiymətli və üstün keyfiyyətli materiallarla ev interyerləri"
    },
    en: {
      welcome: "Home interiors with reasonably priced and superior quality materials"
    },
    ru: {
      welcome: "Домашние интерьеры с разумными ценами и материалами высшего качества"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      text5.textContent =
        language20.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      text5.textContent =
        language20.ru.welcome;
    }
  }

  let language21 = {
    az: {
      welcome: "Keyfiyyətli material"
    },
    en: {
      welcome: "Quality material"
    },
    ru: {
      welcome: "Качественный материал"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      text55.textContent =
        language21.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      text55.textContent =
        language21.ru.welcome;
    }
  }

  let language23 = {
    az: {
      welcome: "Sevdiyiniz məkanı dizaynı üçün ilhamınızı,məqsədlərinizi və  büdcənizi bizimlə bölüşün"
    },
    en: {
      welcome: "Share with us your inspiration, goals and budget for designing your favorite space"
    },
    ru: {
      welcome: "Поделитесь с нами своим вдохновением, целями и бюджетом для создания вашего любимого пространства"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      text6.textContent =
        language23.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      text6.textContent =
        language23.ru.welcome;
    }
  }

  let language24 = {
    az: {
      welcome: "Dizaynların hazırlanması"
    },
    en: {
      welcome: "Preparation of designs"
    },
    ru: {
      welcome: "Подготовка дизайнов"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      text66.textContent =
        language24.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      text66.textContent =
        language24.ru.welcome;
    }
  }

  let language25 = {
    az: {
      welcome: "Ən yaxşı interyer idealarını və  planlaşdırma proqramını əldə edin"
    },
    en: {
      welcome: "Get the best interior design ideas and planning software"
    },
    ru: {
      welcome: "Получите лучшие идеи дизайна интерьера и программное обеспечение для планирования"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      text7.textContent =
        language25.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      text7.textContent =
        language25.ru.welcome;
    }
  }

  let language26 = {
    az: {
      welcome: "İnteryer ideaları"
    },
    en: {
      welcome: "Interior ideas"
    },
    ru: {
      welcome: "Идеи интерьера"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      text77.textContent =
        language26.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      text77.textContent =
        language26.ru.welcome;
    }
  }

  let language27 = {
    az: {
      welcome: "Qonaq otağını qonaqpərvər  etmək üçün ideyalarla evinizin tonunu təyin edin"
    },
    en: {
      welcome: "Set the tone for your home with ideas to make the living room invitinge"
    },
    ru: {
      welcome: "Задайте тон своему дому с помощью идей, как сделать гостиную уютной"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      text8.textContent =
        language27.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      text8.textContent =
        language27.ru.welcome;
    }
  }

  let language28 = {
    az: {
      welcome: "İnteryer ideaları"
    },
    en: {
      welcome: "Interior ideas"
    },
    ru: {
      welcome: "Идеи интерьера"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      text88.textContent =
        language28.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      text88.textContent =
        language28.ru.welcome;
    }
  }

  let language29 = {
    az: {
      welcome: "316-dan çox"
    },
    en: {
      welcome: "More than 316"
    },
    ru: {
      welcome: "Более 316"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      advantage1.textContent =
        language29.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      advantage1.textContent =
        language29.ru.welcome;
    }
  }

  let language30 = {
    az: {
      welcome: "11 illik"
    },
    en: {
      welcome: "11 years old"
    },
    ru: {
      welcome: "11-летний"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      advantage2.textContent =
        language30.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      advantage2.textContent =
        language30.ru.welcome;
    }
  }

  let language31 = {
    az: {
      welcome: "15-dən çox"
    },
    en: {
      welcome: "More than 15"
    },
    ru: {
      welcome: "Более 15"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      advantage3.textContent =
        language31.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      advantage3.textContent =
        language31.ru.welcome;
    }
  }


  let language32 = {
    az: {
      welcome: "1000-dən çox"
    },
    en: {
      welcome: "More than 1000"
    },
    ru: {
      welcome: "Более 1000"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      advantage4.textContent =
        language32.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      advantage4.textContent =
        language32.ru.welcome;
    }
  }


  let language34 = {
    az: {
      welcome: "Layihə"
    },
    en: {
      welcome: "Project"
    },
    ru: {
      welcome: "Проект"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      advantageBox1.textContent =
        language34.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      advantageBox1.textContent =
        language34.ru.welcome;
    }
  }


  let language35 = {
    az: {
      welcome: "Təcrübə"
    },
    en: {
      welcome: "Experience"
    },
    ru: {
      welcome: "Опыт"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      advantageBox2.textContent =
        language35.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      advantageBox2.textContent =
        language35.ru.welcome;
    }
  }

  
  let language36 = {
    az: {
      welcome: "Xidmət"
    },
    en: {
      welcome: "Service"
    },
    ru: {
      welcome: "Обслуживание"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      advantageBox3.textContent =
        language36.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      advantageBox3.textContent =
        language36.ru.welcome;
    }
  }

  let language37 = {
    az: {
      welcome: "Məmnun müştəri"
    },
    en: {
      welcome: "Satisfied customer"
    },
    ru: {
      welcome: "Довольный клиент"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      advantageBox4.textContent =
        language37.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      advantageBox4.textContent =
        language37.ru.welcome;
    }
  }

  let language38 = {
    az: {
      welcome: "İnteryer dizayn xidmətlərimiz"
    },
    en: {
      welcome: "Our interior design services"
    },
    ru: {
      welcome: "Наши услуги по дизайну интерьера"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      title.textContent =
        language38.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      title.textContent =
        language38.ru.welcome;
    }
  }

  let language39 = {
    az: {
      welcome: "Eyvan"
    },
    en: {
      welcome: "Balcony"
    },
    ru: {
      welcome: "Балкон"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      balcony.textContent =
        language39.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      balcony.textContent =
        language39.ru.welcome;
    }
  }

  let language40 = {
    az: {
      welcome: "Loft"
    },
    en: {
      welcome: "Loft"
    },
    ru: {
      welcome: "Чердак"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      loft.textContent =
        language40.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      loft.textContent =
        language40.ru.welcome;
    }
  }

  let language41 = {
    az: {
      welcome: "Art-Decor"
    },
    en: {
      welcome: "Art-Decor"
    },
    ru: {
      welcome: "Арт-Декор"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      artDecor.textContent =
        language41.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      artDecor.textContent =
        language41.ru.welcome;
    }
  }

  let language42 = {
    az: {
      welcome: "Modern"
    },
    en: {
      welcome: "Modern"
    },
    ru: {
      welcome: "Современный"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      modern.textContent =
        language42.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      modern.textContent =
        language42.ru.welcome;
    }
  }

  let language43 = {
    az: {
      welcome: "Lux modern"
    },
    en: {
      welcome: "Lux modern"
    },
    ru: {
      welcome: "Люкс современный"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      luxModern.textContent =
        language43.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      luxModern.textContent =
        language43.ru.welcome;
    }
  }

  let language45 = {
    az: {
      welcome: "Neoklassika"
    },
    en: {
      welcome: "Neoclassical"
    },
    ru: {
      welcome: "Неоклассический"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      neoklassika.textContent =
      language45.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      neoklassika.textContent =
      language45.ru.welcome;
    }
  }

  let language46 = {
    az: {
      welcome: "Klassika"
    },
    en: {
      welcome: "Classic"
    },
    ru: {
      welcome: "Классически"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      classik.textContent =
      language46.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      classik.textContent =
      language46.ru.welcome;
    }
  }

  let language47 = {
    az: {
      welcome: "Avanqard"
    },
    en: {
      welcome: "Vanguard"
    },
    ru: {
      welcome: "Авангард"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      avangard.textContent =
      language47.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      avangard.textContent =
      language47.ru.welcome;
    }
  }

  let language48 = {
    az: {
      welcome: "Qarderob"
    },
    en: {
      welcome: "Wardrobe"
    },
    ru: {
      welcome: "Гардероб"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      qarderob.textContent =
      language48.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      qarderob.textContent =
      language48.ru.welcome;
    }
  }

  let language49 = {
    az: {
      welcome: "Digər xidmətlərimiz"
    },
    en: {
      welcome: "Our other services"
    },
    ru: {
      welcome: "Наши другие услуги"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      otherService.textContent =
      language49.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      otherService.textContent =
      language49.ru.welcome;
    }
  }

  let language50 = {
    az: {
      welcome: "Xidmətə bax"
    },
    en: {
      welcome: "See the service"
    },
    ru: {
      welcome: "Посмотреть сервис"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      lookServices.textContent =
      language50.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      lookServices.textContent =
      language50.ru.welcome;
    }
  }

  let language51 = {
    az: {
      welcome: "Xidmətə bax"
    },
    en: {
      welcome: "See the service"
    },
    ru: {
      welcome: "Посмотреть сервис"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      lookService.textContent =
      language51.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      lookService.textContent =
      language51.ru.welcome;
    }
  }

  let language52 = {
    az: {
      welcome: "Xidmətə bax"
    },
    en: {
      welcome: "See the service"
    },
    ru: {
      welcome: "Посмотреть сервис"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      lookServices3.textContent =
      language52.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      lookServices3.textContent =
      language52.ru.welcome;
    }
  }

  let language53 = {
    az: {
      welcome: "Xidmətə bax"
    },
    en: {
      welcome: "See the service"
    },
    ru: {
      welcome: "Посмотреть сервис"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      lookServices3.textContent =
      language53.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      lookServices3.textContent =
      language53.ru.welcome;
    }
  }

  let language54 = {
    az: {
      welcome: "Xidmətə bax"
    },
    en: {
      welcome: "See the service"
    },
    ru: {
      welcome: "Посмотреть сервис"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      lookServices4.textContent =
      language54.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      lookServices4.textContent =
      language54.ru.welcome;
    }
  }

  let language55 = {
    az: {
      welcome: "Xidmətə bax"
    },
    en: {
      welcome: "See the service"
    },
    ru: {
      welcome: "Посмотреть сервис"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      lookServices5.textContent =
      language55.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      lookServices5.textContent =
      language55.ru.welcome;
    }
  }

  let language56 = {
    az: {
      welcome: "Xidmətə bax"
    },
    en: {
      welcome: "See the service"
    },
    ru: {
      welcome: "Посмотреть сервис"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      lookServices6.textContent =
      language56.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      lookServices6.textContent =
      language56.ru.welcome;
    }
  }

  let language57 = {
    az: {
      welcome: "Xidmətə bax"
    },
    en: {
      welcome: "See the service"
    },
    ru: {
      welcome: "Посмотреть сервис"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      lookServices7.textContent =
      language57.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      lookServices7.textContent =
      language57.ru.welcome;
    }
  }

  let language58 = {
    az: {
      welcome: "Xidmətə bax"
    },
    en: {
      welcome: "See the service"
    },
    ru: {
      welcome: "Посмотреть сервис"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      lookServ.textContent =
      language58.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      lookServ.textContent =
      language58.ru.welcome;
    }
  }
  let language59 = {
    az: {
      welcome: "Xidmətə bax"
    },
    en: {
      welcome: "See the service"
    },
    ru: {
      welcome: "Посмотреть сервис"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      lookService20.textContent =
      language59.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      lookService20.textContent =
      language59.ru.welcome;
    }
  }

  let language60 = {
    az: {
      welcome: "Xidmətə bax"
    },
    en: {
      welcome: "See the service"
    },
    ru: {
      welcome: "Посмотреть сервис"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      lookService21.textContent =
      language60.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      lookService21.textContent =
      language60.ru.welcome;
    }
  }

  let language61 = {
    az: {
      welcome: "Xidmətə bax"
    },
    en: {
      welcome: "See the service"
    },
    ru: {
      welcome: "Посмотреть сервис"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      lookService22.textContent =
      language61.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      lookService22.textContent =
      language61.ru.welcome;
    }
  }

  
  let language62 = {
    az: {
      welcome: "Eksteryer"
    },
    en: {
      welcome: "Exterior"
    },
    ru: {
      welcome: "Внешний вид"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      eksteryer2.textContent =
      language62.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      eksteryer2.textContent =
      language62.ru.welcome;
    }
  }

  let language63 = {
    az: {
      welcome: "Təmir-tikinti"
    },
    en: {
      welcome: "Repair and construction"
    },
    ru: {
      welcome: "Ремонт и строительство"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      construction2.textContent =
      language63.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      construction2.textContent =
      language63.ru.welcome;
    }
  }

  let language64 = {
    az: {
      welcome: "Mebel"
    },
    en: {
      welcome: "Furniture"
    },
    ru: {
      welcome: "Мебель"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      furniture2.textContent =
      language64.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      furniture2.textContent =
      language64.ru.welcome;
    }
  }

  let language65 = {
    az: {
      welcome: "Haqqımızda"
    },
    en: {
      welcome: "About"
    },
    ru: {
      welcome: "О нас"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      About2.textContent =
      language65.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      About2.textContent =
      language65.ru.welcome;
    }
  }

  let language66 = {
    az: {
      welcome: "Biz “Azizadesign” şirkəti olaraq 2013-cü ildən bu günədək çoxsaylı yüksək səviyyəli şirkətlərə və fərdi insanlara xidmətlərimizi təklif edərək həyatlarına və tərzlərinə uyğun fərdiləşdirilmiş evləri dizayn edir, avtomatlaşdırma sistemləri və yaradıcı smart məhsullarından istifadə edirik."
    },
    en: {
      welcome: "As 'Azizadesign' company, we have been offering our services to many high-level companies and individuals since 2013, designing personalized houses according to their lives and styles, using automation systems and creative smart products."
    },
    ru: {
      welcome: "Как компания «Азизадизайн», мы предлагаем свои услуги многим компаниям и частным лицам высокого уровня с 2013 года, проектируя индивидуальные дома в соответствии с их жизнью и стилем, используя системы автоматизации и креативные умные продукты."
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      paragraph.textContent =
      language66.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      paragraph.textContent =
      language66.ru.welcome;
    }
  }

  let language67 = {
    az: {
      welcome: "Ətraflı"
    },
    en: {
      welcome: "More"
    },
    ru: {
      welcome: "Более"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      more.textContent =
      language67.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      more.textContent =
      language67.ru.welcome;
    }
  }

  let language68 = {
    az: {
      welcome: "AZİZA DİZAYN"
    },
    en: {
      welcome: "AZIZA DESIGN"
    },
    ru: {
      welcome: "АЗИЗА ДИЗАЙН"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      aziza.textContent =
      language68.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      aziza.textContent =
      language68.ru.welcome;
    }
  }

  let language69 = {
    az: {
      welcome: "Zövqün ünvanı"
    },
    en: {
      welcome: "The address of pleasure"
    },
    ru: {
      welcome: "Адрес удовольствия"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      adress.textContent =
      language69.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      adress.textContent =
      language69.ru.welcome;
    }
  }

  let language70 = {
    az: {
      welcome: "Məhsullarımıza baxın "
    },
    en: {
      welcome: "See our products"
    },
    ru: {
      welcome: "Посмотреть наши продукты"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      seeProduct.textContent =
      language70.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      seeProduct.textContent =
      language70.ru.welcome;
    }
  }

  
  let language71 = {
    az: {
      welcome: "Məhsullarımıza baxın "
    },
    en: {
      welcome: "See our products"
    },
    ru: {
      welcome: "Посмотреть наши продукты"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      seeProduct.textContent =
      language71.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      seeProduct.textContent =
      language71.ru.welcome;
    }
  }

  let language72 = {
    az: {
      welcome: "Bizə etibar edirlər"
    },
    en: {
      welcome: "Trust us"
    },
    ru: {
      welcome: "Доверяйте нам"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      trustUs.textContent =
      language72.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      trustUs.textContent =
      language72.ru.welcome;
    }
  }

  let language73 = {
    az: {
      welcome: "Bizə etibar edirlər"
    },
    en: {
      welcome: "Trust us"
    },
    ru: {
      welcome: "Доверяйте нам"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      trustUs.textContent =
      language73.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      trustUs.textContent =
      language73.ru.welcome;
    }
  }

  let language74 = {
    az: {
      welcome: "Sizin üçün buradayıq! Sual verin, cavablandıraq"
    },
    en: {
      welcome: "We are here for you! Ask a question, let's answer"
    },
    ru: {
      welcome: "Мы здесь ради вас! Спрашивайте, мы ответим"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      askQuestion.textContent =
      language74.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      askQuestion.textContent =
      language74.ru.welcome;
    }
  }

  let language75 = {
    az: {
      welcome: "Whatsapp-a yazın"
    },
    en: {
      welcome: "Write to Whatsapp"
    },
    ru: {
      welcome: "Пишите на ватсап"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      whatsup.textContent =
      language75.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      whatsup.textContent =
      language75.ru.welcome;
    }
  }

  let language76 = {
    az: {
      welcome: "Biz sizə zəng edək"
    },
    en: {
      welcome: "Let us call you"
    },
    ru: {
      welcome: "Позвольте нам позвонить вам"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      call.textContent =
      language76.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      call.textContent =
      language76.ru.welcome;
    }
  }

  let language77 = {
    az: {
      welcome: "Xidmətlər"
    },
    en: {
      welcome: "Services"
    },
    ru: {
      welcome: "Услуги"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      services3.textContent =
      language77.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      services3.textContent =
      language77.ru.welcome;
    }
  }

  let language78 = {
    az: {
      welcome: "Təmir-tikinti"
    },
    en: {
      welcome: "Repair and construction"
    },
    ru: {
      welcome: "Ремонт и строительство"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      construction3.textContent =
      language78.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      construction3.textContent =
      language78.ru.welcome;
    }
  }

  let language79 = {
    az: {
      welcome: "Dizayn xidmətləri"
    },
    en: {
      welcome: "Design services"
    },
    ru: {
      welcome: "Дизайнерские услуги"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      design3.textContent =
      language79.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      design3.textContent =
      language79.ru.welcome;
    }
  }

  let language80 = {
    az: {
      welcome: "Mebel"
    },
    en: {
      welcome: "Furniture"
    },
    ru: {
      welcome: "Мебель"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      furniture3.textContent =
      language80.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      furniture3.textContent =
      language80.ru.welcome;
    }
  }


  let language81 = {
    az: {
      welcome: "Layihələr"
    },
    en: {
      welcome: "Projects"
    },
    ru: {
      welcome: "Проекты"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      project2.textContent =
      language81.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      project2.textContent =
      language81.ru.welcome;
    }
  }

  
  let language82 = {
    az: {
      welcome: "Əlaqə məlumatları"
    },
    en: {
      welcome: "Contact information"
    },
    ru: {
      welcome: "Контакты"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      contact3.textContent =
      language82.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      contact3.textContent =
      language82.ru.welcome;
    }
  }
  

  let language83 = {
    az: {
      welcome: "Azure Biznes Mərkəzi, 13-cü mərtəbə"
    },
    en: {
      welcome: "Azure Business Center, 13th floor"
    },
    ru: {
      welcome: "Бизнес-центр Azure, 13 этаж"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      adress4.textContent =
      language83.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      adress4.textContent =
      language83.ru.welcome;
    }
  }

  let language84 = {
    az: {
      welcome: "İş rejimi: 09:00 - 18:00 (həftə içi), 09:00 - 17:00 (şənbə günü) "
    },
    en: {
      welcome: "Working hours: 09:00 - 18:00 (weekdays), 09:00 - 17:00 (Saturdays)"
    },
    ru: {
      welcome: "Время работы: 09:00 - 18:00 (будни), 09:00 - 17:00 (суббота)"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      time.textContent =
      language84.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      time.textContent =
      language84.ru.welcome;
    }
  }
  

  let language85 = {
    az: {
      welcome: "Dili dəyiş"
    },
    en: {
      welcome: "Change the language"
    },
    ru: {
      welcome: "Изменить язык"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      changeLang.textContent =
      language85.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      changeLang.textContent =
      language85.ru.welcome;
    }
  }
  
  let language86 = {
    az: {
      welcome: "Dili dəyiş"
    },
    en: {
      welcome: "Change the language"
    },
    ru: {
      welcome: "Изменить язык"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      changeLang.textContent =
      language86.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      changeLang.textContent =
      language86.ru.welcome;
    }
  }

  let language87 = {
    az: {
      welcome: "Ana səhifə"
    },
    en: {
      welcome: "Home page"
    },
    ru: {
      welcome: "Главная страница"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      home.textContent =
      language87.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      home.textContent =
      language87.ru.welcome;
    }
  }

  let language88 = {
    az: {
      welcome: "Haqqımızda"
    },
    en: {
      welcome: "About"
    },
    ru: {
      welcome: "О нас"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      about4.textContent =
      language88.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      about4.textContent =
      language88.ru.welcome;
    }
  }

  let language89 = {
    az: {
      welcome: "Bütün xidmətlər"
    },
    en: {
      welcome: "All services"
    },
    ru: {
      welcome: "Все услуги"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      service5.textContent =
      language89.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      service5.textContent =
      language89.ru.welcome;
    }
  }


  let language90 = {
    az: {
      welcome: "Komandamız"
    },
    en: {
      welcome: "Our team"
    },
    ru: {
      welcome: "Наша команда"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      team2.textContent =
      language90.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      team2.textContent =
      language90.ru.welcome;
    }
  }


  let language91 = {
    az: {
      welcome: "Showroom"
    },
    en: {
      welcome: "Showroom"
    },
    ru: {
      welcome: "Шоурум"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      showroom2.textContent =
      language91.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      showroom2.textContent =
      language91.ru.welcome;
    }
  }
  
  
  let language92 = {
    az: {
      welcome: "Əlaqə"
    },
    en: {
      welcome: "Contact"
    },
    ru: {
      welcome: "Контакты"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      contact5.textContent =
      language92.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      contact5.textContent =
      language92.ru.welcome;
    }
  }
  
  let language93 = {
    az: {
      welcome: "© Copyright 2022. Bütün hüquqları qorunur"
    },
    en: {
      welcome: "© Copyright 2022. All rights reserved"
    },
    ru: {
      welcome: "© Copyright 2022. Все права защищены."
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      copyright.textContent =
      language93.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      copyright.textContent =
      language93.ru.welcome;
    }
  }
  
  let language94 = {
    az: {
      welcome: "Saytın hazırlanması:"
    },
    en: {
      welcome: "Website development:"
    },
    ru: {
      welcome: "Разработка сайта:"
    }
  };

  if (window.location.hash) {

    if (window.location.hash == "#en") {
      site.textContent =
      language94.en.welcome;
    }
    else if (window.location.hash == "#ru") {
      site.textContent =
      language94.ru.welcome;
    }
  }
 