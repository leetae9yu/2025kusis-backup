// game.js - 게임 진행 관련 로직

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector(".start-btn");
    const submitButtons = document.querySelectorAll(".submit-btn");

    if (startButton) {
        startButton.addEventListener("click", () => {
            window.location.href = "game_screen1.html";
        });
    }

    submitButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const inputField = event.target.previousElementSibling;
            if (inputField && inputField.value.trim() !== "") {
                saveProgress(inputField.value.trim());
                alert("입력 완료! 다음 단계로 이동합니다.");
                window.location.href = getNextScreen();
            } else {
                alert("정답을 입력해주세요.");
            }
        });
    });
});

function saveProgress(answer) {
    sessionStorage.setItem("game_progress", answer);
}

function getNextScreen() {
    const currentPage = window.location.pathname.split("/").pop();
    switch (currentPage) {
        case "game_screen1.html": return "game_screen2.html";
        case "game_screen2.html": return "game_screen3.html";
        case "game_screen3.html": return "game_screen4.html";
        default: return "ending.html";
    }
}