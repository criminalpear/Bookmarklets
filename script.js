// Placeholder bookmarklet data (replace with actual data from the repo)
const bookmarklets = [
    {
        name: "Example Bookmarklet 1",
        description: "This is a sample bookmarklet that does something cool.",
        code: "javascript:alert('Hello, World!');"
    },
    {
        name: "Example Bookmarklet 2",
        description: "Another sample bookmarklet for demonstration.",
        code: "javascript:(function(){console.log('Bookmarklet 2');})();"
    }
    // Add more bookmarklets here based on the repo's content
];

// Populate the dropdown menu
const select = document.getElementById('bookmarklet-select');
bookmarklets.forEach(bookmarklet => {
    const option = document.createElement('option');
    option.value = bookmarklet.name;
    option.textContent = bookmarklet.name;
    select.appendChild(option);
});

// Display description and code when a bookmarklet is selected
select.addEventListener('change', (event) => {
    const selectedName = event.target.value;
    const bookmarklet = bookmarklets.find(b => b.name === selectedName);

    const descriptionDiv = document.getElementById('description');
    const codePre = document.getElementById('bookmarklet-code');

    if (bookmarklet) {
        descriptionDiv.textContent = bookmarklet.description;
        codePre.textContent = bookmarklet.code;
    } else {
        descriptionDiv.textContent = '';
        codePre.textContent = '';
    }
});
