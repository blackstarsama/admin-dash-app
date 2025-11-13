# 🧭 Admin Dashboard – React.js

Un tableau de bord moderne, fluide et responsive développé avec **React.js**, inspiré des interfaces professionnelles d’administration.  
Il intègre un **mode sombre**, des **graphiques interactifs**, et une **gestion dynamique des données** (ex : commandes récentes).

---

## 🚀 Aperçu

### 🌞 Mode clair

![Dashboard Light](./public/images/screenshot-light.png)

### 🌙 Mode sombre

![Dashboard Dark](./public/images/screenshot-dark.png)

---

## ✨ Fonctionnalités principales

✅ **Interface Responsive** – compatible desktop, tablette et mobile  
✅ **Mode Sombre / Mode Clair** – basculement fluide du thème via le bouton `🌙 / ☀️`  
✅ **Composants dynamiques React** – Sidebar, Header, Cards, Tables, Analytics…  
✅ **Design moderne & soigné** – typographie élégante, couleurs harmonieuses  
✅ **Animations et transitions fluides** – via CSS et variables personnalisées  
✅ **Gestion des données** – liste d’ordres importée depuis un fichier JSON/JS  
✅ **Icônes Material Design** – intégration via `@mui/icons-material` ou CDN Google Fonts

---

## 🛠️ Technologies utilisées

| Frontend                    | Description                                |
| --------------------------- | ------------------------------------------ |
| ⚛️ **React.js**             | Librairie principale pour construire l’UI  |
| 💅 **CSS3 / Variables CSS** | Pour les thèmes clair & sombre             |
| 📦 **JavaScript (ES6)**     | Gestion des interactions et des composants |
| 🧩 **Material Icons**       | Icônes du tableau de bord                  |
| 📊 **Recharts / Chart.js ** | Pour les graphiques et statistiques        |

---

## 🧰 Installation & Exécution

### 1️⃣ Cloner le dépôt

```bash
git clone https://github.com/blackstarsama/admin-dash-app.git
cd admin-dash-app
```

### 2️⃣ Installer les dépendances

```bash
npm install
```

### 3️⃣ Lancer le projet

```bash
npm start
```

Le projet sera disponible sur :
👉 http://localhost:3000


#### 🧱 Structure du projet

```bash
📁 src/
 ┣ 📂 components/
 ┃ ┣ 📜 Sidebar.jsx
 ┃ ┣ 📜 Header.jsx
 ┃ ┣ 📜 Insights.jsx
 ┃ ┣ 📜 RecentOrders.jsx
 ┃ ┗ 📜 SalesAnalytics.jsx
 ┣ 📜 Orders.js
 ┣ 📜 App.js
 ┣ 📜 index.js
 ┗ 📜 style.css
```

### 🎨 Thèmes & Personnalisation

Le thème est basé sur des variables CSS dynamiques.
Tu peux modifier les couleurs globales dans le fichier :

```bash
:root {
  --color-primary: #7380ec;
  --color-success: #41f1b6;
  --color-warning: #ffbb55;
  --color-dark: #363949;
  --color-light: rgba(132, 139, 200, 0.18);
}

.dark-theme-variables {
  --color-background: #181a1e;
  --color-white: #202528;
  --color-dark: #edeffd;
}
```

## 🪪 Licence

Ce projet est sous licence MIT — tu peux l’utiliser, le modifier et le partager librement à des fins éducatives ou personnelles.

⭐ Si ce projet t’a plu, pense à lui mettre une ⭐ sur GitHub et à le partager !
Cela m’aide énormément 💙
