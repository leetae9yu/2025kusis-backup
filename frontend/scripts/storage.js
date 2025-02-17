// storage.js - 사용자 데이터 관리 (sessionStorage 이용)

const storageKey = "game_data";

function saveData(key, value) {
    let data = loadData();
    data[key] = value;
    sessionStorage.setItem(storageKey, JSON.stringify(data));
}

function loadData() {
    let data = sessionStorage.getItem(storageKey);
    return data ? JSON.parse(data) : {};
}

function getData(key) {
    let data = loadData();
    return data[key] || null;
}

function clearData() {
    sessionStorage.removeItem(storageKey);
}

// 예제 사용법
// saveData("username", "Player1");
// console.log(getData("username"));