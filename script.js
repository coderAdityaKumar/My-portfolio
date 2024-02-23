document.addEventListener('DOMContentLoaded', function () {
    const badgesRow = document.getElementById('badges');
    const certificatesRow = document.getElementById('certificates');
    const achievementsRow = document.getElementById('achievements');

    // Sample data for badges, certificates, and achievements
    const badges = [
        { image: 'badge1.jpg', name: 'Java Master', description: 'Earned for mastering Java programming language.' },
        { image: 'badge2.jpg', name: 'HTML Ninja', description: 'Awarded for exceptional skills in HTML.' }
    ];

    const certificates = [
        { image: 'certificate1.jpg', name: 'Java Certification', description: 'Certified in Java programming language.' },
        { image: 'certificate2.jpg', name: 'Web Development Certification', description: 'Certified in web development technologies.' }
    ];

    const achievements = [
        { image: 'achievement1.jpg', name: 'Top Coder', description: 'Achieved the top rank in a coding competition.' },
        { image: 'achievement2.jpg', name: 'Project Showcase Winner', description: 'Winner of the project showcase event.' }
    ];

    function createItem(item) {
        const column = document.createElement('div');
        column.classList.add('column');

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.name;

        const name = document.createElement('h2');
        name.textContent = item.name;

        const description = document.createElement('p');
        description.textContent = item.description;

        column.appendChild(image);
        column.appendChild(name);
        column.appendChild(description);

        return column;
    }

    function populateRow(row, items) {
        items.forEach(item => {
            const column = createItem(item);
            row.appendChild(column);
        });
    }

    populateRow(badgesRow, badges);
    populateRow(certificatesRow, certificates);
    populateRow(achievementsRow, achievements);
});
