// user.js - 사용자 관리 API 엔드포인트

const express = require("express");
const router = express.Router();

// 사용자 등록 API
router.post("/register", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "사용자 이름과 비밀번호가 필요합니다." });
    }
    res.json({ message: "사용자가 등록되었습니다.", username });
});

// 사용자 로그인 API
router.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "사용자 이름과 비밀번호가 필요합니다." });
    }
    res.json({ message: "로그인이 성공했습니다.", username });
});

// 사용자 프로필 조회 API
router.get("/profile", (req, res) => {
    res.json({ message: "사용자 프로필 정보입니다." });
});

module.exports = router;