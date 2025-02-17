// userController.js - 사용자 관리 컨트롤러

exports.registerUser = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "사용자 이름과 비밀번호가 필요합니다." });
    }
    res.json({ message: "사용자가 등록되었습니다.", username });
};

exports.loginUser = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "사용자 이름과 비밀번호가 필요합니다." });
    }
    res.json({ message: "로그인이 성공했습니다.", username });
};

exports.getUserProfile = (req, res) => {
    res.json({ message: "사용자 프로필 정보입니다." });
};