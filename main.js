fetch('src/data/contributors.json')
    .then(response => response.json())
    .then(data => {
        const contributorsDiv = document.getElementById('contributors');
        data.forEach(contributor => {
            const contributorElement = document.createElement('div');
            let linkedinHtml = '';
            if (
                contributor.linkedin &&
                contributor.linkedin !== 'https://linkedin.com/in/yourlinkedin'
            ) {
                linkedinHtml = `<p>LinkedIn: <a href="${contributor.linkedin}" target="_blank">${contributor.linkedin}</a></p>`;
            }
            contributorElement.innerHTML = `
                <h2>${contributor.name}</h2>
                <p>GitHub: <a href="${contributor.github}" target="_blank">${contributor.github}</a></p>
                ${linkedinHtml}
            `;
            contributorsDiv.appendChild(contributorElement);
        });
    })
    .catch(error => console.error('Error fetching contributors:', error));