function selectWinner(element, nextId) {
  // Récupère le nom de l’équipe sélectionnée
  const teamName = element.textContent;

  // Retire la classe "selected" de tous les frères (matchs du même tour)
  const siblings = element.parentNode.querySelectorAll('.match-slot');
  siblings.forEach(el => el.classList.remove('selected'));

  // Ajoute la classe "selected" à l’élément cliqué
  element.classList.add('selected');

  // Trouve la prochaine case (quart, demi, finale, etc.)
  const nextMatch = document.getElementById(nextId);

  // Si la case suivante existe, on y place le nom de l’équipe
  if (nextMatch) {
    nextMatch.textContent = teamName;
    nextMatch.classList.remove('selected');
  }

  // Sauvegarder le tableau
  saveBracket();
}

function resetBracket() {
  const allSlots = document.querySelectorAll('.match-slot');

  allSlots.forEach(slot => {
    if (slot.parentNode.id !== 'round-16') {
      slot.textContent = '';
    }
    slot.classList.remove('selected');
  });

  // Supprimer la sauvegarde
  localStorage.removeItem('bracketData');
}

function saveBracket() {
  const slots = document.querySelectorAll('.match-slot');
  const bracketData = {};

  slots.forEach(slot => {
    if (slot.id) {
      bracketData[slot.id] = slot.textContent;
    }
  });

  localStorage.setItem('bracketData', JSON.stringify(bracketData));
}

function loadBracket() {
  const savedData = JSON.parse(localStorage.getItem('bracketData'));

  if (savedData) {
    for (const id in savedData) {
      const slot = document.getElementById(id);
      if (slot) {
        slot.textContent = savedData[id];
      }
    }
  }
}

// Charger les données sauvegardées au chargement de la page
loadBracket();
