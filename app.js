function decide(action) {
  const msg = document.getElementById('decision-msg');
  const colors = {
    shortlist: { bg: '#c6f6d5', color: '#22543d', text: '✓ Candidate has been shortlisted for interview.' },
    review: { bg: '#fefcbf', color: '#744210', text: '↩ Candidate moved to manual review queue.' },
    reject: { bg: '#fed7d7', color: '#742a2a', text: '✗ Candidate has been rejected.' }
  };
  const c = colors[action];
  msg.style.display = 'block';
  msg.style.background = c.bg;
  msg.style.color = c.color;
  msg.textContent = c.text;
}
