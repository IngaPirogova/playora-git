# 🎮 Playora

Playora — адаптивное веб-приложение для поиска игр с использованием внешнего API и системой авторизации пользователей через Supabase. Пользователи могут искать игры, просматривать детали и сохранять их в личную библиотеку.

---

## 🚀 Demo

🔗 Live page:
https://ingapirogova.github.io/playora-git/

💻 Source code:
https://github.com/IngaPirogova/playora-git

---

## ✨ Features

🔍 Поиск игр через API
📄 Просмотр информации об игре
⭐ Добавление игр в избранное
👤 Регистрация и авторизация пользователей (Supabase Auth)
💾 Сохранение данных в localStorage
📱 Адаптивная верстка
🔄 Toggle-переключение в библиотеке (Favorites / Watched) без перезагрузки страницы

---

## 🧱 Project Structure
/src
  /js
    main.js          # логика главной страницы (поиск и отображение игр)
    library.js       # логика библиотеки (favorites / watched toggle)
    /modules         # переиспользуемые модули
  /styles
  /images

index.html           # главная страница
library.html         # страница библиотеки
🛠 Tech Stack
HTML5
SCSS / CSS3
JavaScript (ES6+, модули)
Supabase Auth
REST API

---

## 🔐 Authentication

Проект использует Supabase Auth для:

регистрации пользователей
входа в аккаунт

📌 Избранные игры (favorites) сохраняются в localStorage на данном этапе без использования базы данных.

---

## 💡 Architecture Notes

Проект реализован как Multi-Page Application (MPA):

каждая страница имеет свой JS entry point
логика разделена по зонам ответственности
используется стандартная навигация между HTML-страницами
реализовано переключение (Favorites / Watched) без перезагрузки страниицы библиотеки.

---

## ⚙️ Installation
git clone https://github.com/IngaPirogova/playora-git
cd playora-git

Открой index.html через Live Server или браузер.

---

## 📌 Future Improvements
подключение базы данных для хранения favorites
синхронизация данных между устройствами
расширенные фильтры поиска
улучшение UX библиотеки





