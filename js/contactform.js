const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Visa success-meddelande
            form.innerHTML = `
                <div style="text-align: center; padding: 3rem; color: var(--text-secondary);">
                    <h3>✓ Tack för ditt meddelande!</h3>
                    <p>Jag återkommer så snart som möjligt.</p>
                    <button class="ok-btn" style="margin-top: 2rem; padding: 1rem 3rem; font-size: 1.6rem; color: var(--bg-primary); background-color: var(--text-secondary); border-radius: 4rem; cursor: pointer; font-weight: 600; transition: 0.3s ease; border: none;">OK</button>
                </div>
            `;

            document.querySelector('.ok-btn').addEventListener('click', () => {
                window.location.href = '#contact';
                window.location.reload();
            });
        } else {
            // Visa fel-meddelande
            form.innerHTML = `
                <div style="text-align: center; padding: 3rem; color: var(--text-secondary);">
                    <h3>✗ Något gick fel</h3>
                    <p>Försök igen senare.</p>
                    <button class="ok-btn" style="margin-top: 2rem; padding: 1rem 3rem; font-size: 1.6rem; color: var(--bg-primary); background-color: var(--text-secondary); border-radius: 4rem; cursor: pointer; font-weight: 600; transition: 0.3s ease; border: none;">Försök igen</button>
                </div>
            `;

            document.querySelector('.ok-btn').addEventListener('click', () => {
                window.location.href = '#contact';
                window.location.reload();
            });
        }
    } catch (error) {
        // Visa fel-meddelande vid nätverksfel
        form.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-secondary);">
                <h3>✗ Något gick fel</h3>
                <p>Försök igen senare.</p>
                <button class="ok-btn" style="margin-top: 2rem; padding: 1rem 3rem; font-size: 1.6rem; color: var(--bg-primary); background-color: var(--text-secondary); border-radius: 4rem; cursor: pointer; font-weight: 600; transition: 0.3s ease; border: none;">Försök igen</button>
            </div>
        `;

        document.querySelector('.ok-btn').addEventListener('click', () => {
            window.location.href = '#contact';
            window.location.reload();
        });
    }
});

