document.addEventListener('DOMContentLoaded', function () {
    getTips();
});

async function getTips() {
    try {
        const tipsContainer = document.querySelector('.tips');

        // Check if the tipsContainer is found
        if (!tipsContainer) {
            console.error("Element with class 'tips' not found in the document.");
            return;
        }

        let response = await fetch('https://blog.easy0.repl.co/api/blog');
        let data = await response.json();

        // Clear the existing content of the tipsContainer
        tipsContainer.innerHTML = '';

        data.forEach(tip => {
            tipsContainer.innerHTML += `
                <div class="tips-boxes">
                    <img src="${tip.image}" alt="Lorim ipsum">
                    <h2 class="title">${tip.title}</h2>
                    <p class="desc">${tip.content}</p>
                    <button type="button">Read More</button>
                </div>`;
        });
    } catch (error) {
        console.error("Error fetching tips:", error);
    }
}
