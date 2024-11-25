document.addEventListener('DOMContentLoaded', async function() {
  const visitasElemento = document.getElementById('visitas');
  const binUrl = 'https://api.jsonbin.io/v3/b/66e86a9dad19ca34f8a71cd1'; // Bin creado

  // Obtiene el número de visitas
  let response = await fetch(binUrl, {
    method: 'GET',
    headers: {
      'X-Master-Key': '$2a$10$cYXg0yUGh4epl0BDX/M/LeBnGkatzvFFMTJWZw6M7cLnZL8CLSN.q', // API Key 
      'Content-Type': 'application/json'
    }
  });
  let data = await response.json();
  let visitas = data.record.visitas;

  // Si el contador no está definido o es mayor a un valor, reinícialo
  if (typeof visitas !== 'number' || visitas > 100) {
    visitas = 0;
  }

  // Incrementa y muestra el número de visitas
  visitas++;
  visitasElemento.textContent = visitas;

  // Guarda el nuevo número de visitas en JSONBin
  await fetch(binUrl, {
    method: 'PUT',
    headers: {
      'X-Master-Key': '$2a$10$cYXg0yUGh4epl0BDX/M/LeBnGkatzvFFMTJWZw6M7cLnZL8CLSN.q', // API Key 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ visitas: visitas })
  });
});

  
  