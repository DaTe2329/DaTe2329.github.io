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
    nextMatch.classList.remove('selected'); // on enlève l’ancien choix si jamais
  }
}

function resetBracket() {
  const allSlots = document.querySelectorAll('.match-slot');

  allSlots.forEach(slot => {
    // On vide uniquement les slots générés dynamiquement
    if (slot.parentNode.id !== 'round-16') {
      slot.textContent = '';
    }
    slot.classList.remove('selected');
  });
}
