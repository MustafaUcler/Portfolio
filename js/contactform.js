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
                <div class="form-message">
                    <h3 data-translate="form_success_title">✓ Tack för ditt meddelande!</h3>
                    <p data-translate="form_success_text">Jag återkommer så snart som möjligt.</p>
                    <button class="form-message-btn" data-translate="form_ok_btn">Okey</button>
                </div>
            `;

            // Applicera översättningar
            if (typeof applyTranslations === 'function') {
                loadLanguage(localStorage.getItem("lang") || "sv");
            }

            document.querySelector('.form-message-btn').addEventListener('click', () => {
                window.location.href = '#contact';
                window.location.reload();
            });
        } else {
            // Visa fel-meddelande
            form.innerHTML = `
                <div class="form-message">
                    <h3 data-translate="form_error_title">✗ Något gick fel</h3>
                    <p data-translate="form_error_text">Försök igen senare.</p>
                    <button class="form-message-btn" data-translate="form_retry_btn">Försök igen</button>
                </div>
            `;

            // Applicera översättningar
            if (typeof applyTranslations === 'function') {
                loadLanguage(localStorage.getItem("lang") || "sv");
            }

            document.querySelector('.form-message-btn').addEventListener('click', () => {
                window.location.href = '#contact';
                window.location.reload();
            });
        }
    } catch (error) {
        // Visa fel-meddelande vid nätverksfel
        form.innerHTML = `
            <div class="form-message">
                <h3 data-translate="form_error_title">✗ Något gick fel</h3>
                <p data-translate="form_error_text">Försök igen senare.</p>
                <button class="form-message-btn" data-translate="form_retry_btn">Försök igen</button>
            </div>
        `;

        // Applicera översättningar
        if (typeof applyTranslations === 'function') {
            loadLanguage(localStorage.getItem("lang") || "sv");
        }

        document.querySelector('.form-message-btn').addEventListener('click', () => {
            window.location.href = '#contact';
            window.location.reload();
        });
    }
});