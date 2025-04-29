const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

const API_KEY = 'VOTRE_API_KEY_IÇI'; // Ne jamais envoyer ça côté client

app.use(express.static('public')); // Contient ton index.html

app.get('/api/live-matches', async (req, res) => {
  try {
    const response = await fetch('https://api.football-data.org/v4/matches?status=LIVE', {
      headers: { 'X-Auth-Token': API_KEY }
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
