// Function to load JSON data and render cards
function loadProjects() {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById('project-list');
            data.projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');

                projectElement.innerHTML = `
                    <div class="name-project">
                        <div class="wrap-nm-pr">
                            <img src="${project.image}" alt="">
                            <h1>${project.name}</h1>
                        </div>
                        <div class="active-wr">
                            <div class="${project.status}"></div>
                        </div>
                    </div>
                    <div class="list-on-run">
                        ${project.services.map(service => `
                            <div class="${service.type.toLowerCase()}">
                                <div class="${service.class}"></div>
                                <p>${service.type}</p>
                            </div>
                        `).join('')}
                    </div>
                    <div class="wrap-btn-main">
                        <button class="delegate" onclick="${project.popupFunction}()"><a>Details</a></button>
                    </div>
                `;

                projectList.appendChild(projectElement);
            });
        });
}

// Call the loadProjects function on page load
window.onload = loadProjects;