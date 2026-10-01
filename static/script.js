function openGift(gift) {

    const gifts = document.querySelectorAll(".gift");
    const selectedGift = gifts[gift - 1];
    const result = document.getElementById("result");

    gifts.forEach(item => {
        item.disabled = true;
    });

    selectedGift.classList.add("opening");

    setTimeout(() => {

        selectedGift.style.display = "none";

        gifts.forEach((item, index) => {
            if (index !== gift - 1) {
                item.style.opacity = "0.35";
            }
        });

        if (gift === 1) {

            result.innerHTML = `
                <div class="result-card">
                    <div class="result-icon">💌</div>

                    <h2>A little letter for you</h2>

                    <p>
                        Looking back, it's hard to believe it was a only little almost three years.
                        In such a short amount of time, we managed to fit an entire lifetime's worth
                        of memories, laughter, and quiet moments that I'll cherish forever. It went by
                        so fast, but every second was worth it because I got to spend it with you. Somehow,
                        even with that short amount of time, it felt like I've known and loved you for a lifetime.
                        Thank you for making those years so deeply meaningful and for being the most wonderful part of my life. 
                        I love you more than words can express, and I can't wait to see what the future holds for us.
                    </p>

                    <p>
                        I hope this makes you smile,
                        even just a little bit.
                    </p>

                    <p class="signature">
                        — Your favorite person ♡
                    </p>

                    <button class="another-gift" onclick="resetGifts()">
                        Choose another gift ♡
                    </button>
                </div>
            `;

        } else if (gift === 2) {

            result.innerHTML = `
                <div class="result-card">
                    <div class="result-icon">📸</div>

                    <h2>A little memory</h2>

                    <div class="polaroid">
                        <img src="/static/images/memory.jpg" alt="Our memory">

                        <p>
                            One of my favorite memories with you. ❤️
                        </p>
                    </div>

                    <p>
                        I hope we make a lot more memories like this. ♡
                    </p>

                    <button class="another-gift" onclick="resetGifts()">
                        Choose another gift ♡
                    </button>
                </div>
            `;

        } else if (gift === 3) {

            result.innerHTML = `
                <div class="result-card">
                    <div class="result-icon">🎟️</div>

                    <h2>You got a special surprise!</h2>

                    <p>
                        Congratulations. You won...
                    </p>

                    <h3>❤️ ONE VERY CLINGY BOYFRIEND FOR LIFE ❤️</h3>

                    <button class="another-gift" onclick="resetGifts()">
                        Choose another gift ♡
                    </button>
                </div>
            `;
        }

        result.classList.add("show");

        createHearts();

    }, 700);
}

function createHearts() {

    for (let i = 0; i < 12; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "♡";

        heart.classList.add("heart");

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDelay = Math.random() * 0.8 + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

function resetGifts() {

    const gifts = document.querySelectorAll(".gift");
    const result = document.getElementById("result");

    gifts.forEach(gift => {
        gift.style.display = "";
        gift.style.opacity = "1";
        gift.disabled = false;
        gift.classList.remove("opening");
    });

    result.innerHTML = "";
    result.classList.remove("show");
}