window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
      nav.style.background = '#000';
      nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    } else {
      nav.style.background = '#222';
      nav.style.boxShadow = 'none';
    }
  });
  