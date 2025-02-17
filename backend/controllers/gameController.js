// gameController.js - 게임 로직 컨트롤러

exports.startGame = (req, res) => {
    res.json({ message: "게임이 시작되었습니다!" });
};

exports.saveProgress = (req, res) => {
    const { progress } = req.body;
    if (!progress) {
        return res.status(400).json({ error: "진행 상태가 필요합니다." });
    }
    res.json({ message: "게임 진행 상태가 저장되었습니다.", progress });
};

exports.getGameStatus = (req, res) => {
    res.json({ message: "현재 게임 상태입니다." });
};