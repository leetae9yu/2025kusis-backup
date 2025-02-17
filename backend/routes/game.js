// game.js - 게임 관련 API 엔드포인트

const express = require("express");
const router = express.Router();

// 게임 시작 API
router.get("/start", (req, res) => {
    res.json({ message: "게임이 시작되었습니다!" });
});

// 게임 진행 데이터 저장 API
router.post("/progress", (req, res) => {
    const { progress } = req.body;
    if (!progress) {
        return res.status(400).json({ error: "진행 상태가 필요합니다." });
    }
    res.json({ message: "게임 진행 상태가 저장되었습니다.", progress });
});

// 게임 상태 조회 API
router.get("/status", (req, res) => {
    res.json({ message: "현재 게임 상태입니다." });
});

module.exports = router;