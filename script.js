const apps = [
  { name: "Undertale", platform: "iOS / Android", desc: "The legendary RPG where no one has to die.", size: "180 MB", url: "https://undertale.com" },
  { name: "UTM", platform: "iOS", desc: "Run full virtual machines on your iPhone or iPad.", size: "95 MB", url: "https://utm.app" },
  { name: "Roblox", platform: "Android / iOS", desc: "Play and create worlds with millions of users.", size: "210 MB", url: "https://roblox.com" },
  { name: "Deltarune", platform: "iOS / Android", desc: "From the creator of Undertale — a new story in a dark world.", size: "250 MB", url: "https://deltarune.com" },
  { name: "YTPlus", platform: "Android / iOS", desc: "Enhanced YouTube client with background play and more.", size: "75 MB", url: "https://youtube.com" },
];

const appList = document.getElementById('app-list');
const searchInput = document.getElementById('search');
const themeToggle = document.getElementById('theme-toggle');
const settingsBtn = document.getElementById('settings-btn');
const settingsPanel = document.getElementById('settings-panel');

function renderApps(filter = '') {
  appList.innerHTML = '';
  const filtered = apps.filter(a => a.name.toLowerCase().includes(filter.toLowerCase()));
  filtered.forEach(app => {
    const div = document.createElement('div');
    div.className = 'app-card';
    div.innerHTML = `
      <h3>${app.name}</h3>
      <p><em>${app.platform}</em></p>
      <p>${app.desc}</p>
      <small>${app.size}</small><br><br>
      <button onclick=\"window.open('${app.url}', '_blank')\">Install</button>
    `;
    appList.appendChild(div);
  });
}

renderApps();

searchInput.addEventListener('input', e => renderApps(e.target.value));

settingsBtn.addEventListener('click', () => {
  settingsPanel.classList.toggle('hidden');
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});
