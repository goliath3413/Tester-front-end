document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch and display missiles
    async function fetchAndDisplayMissiles() {
      try {
        // Fetch missiles from the server
        const response = await fetch('http://localhost:7000/missiles');
        const missiles = await response.json();
  
        // Display missiles in the HTML
        const missilesList = document.getElementById('missilesList');
        missilesList.innerHTML = renderMissilesPage(missiles);
      } catch (error) {
        console.error('Error fetching missiles:', error);
      }
    }
    fetchAndDisplayMissiles();
  

  });
  
  function renderMissilesPage(missiles) {
    const missilesList = missiles
        .map(missile => `<li style="list-style-type:none; padding:20px;"><a href="missileDetails.html?name=${missile.name}">${missile.name}</a></li>`)
        .join('');
    return `<ul>${missilesList}</ul>`;
}

  