  // Obtener el número de visitas desde el almacenamiento local
  let visitCount = localStorage.getItem('visitCount');
  if (visitCount === null) {
      visitCount = 0;
  }
  visitCount++;
  localStorage.setItem('visitCount', visitCount);

  // Mostrar el contador en la página
  document.getElementById('visit-count').textContent = 'Number of visits: ' + visitCount;