// 麵包超人資料集
const anpanmanData = [
    { front: "images/航海王1.png", back: "images/航海王2.png" },
    { front: "images/航海王1.png", back: "images/航海王3.png" },
    { front: "images/航海王1.png", back: "images/航海王4.png" },
    { front: "images/航海王1.png", back: "images/航海王5.png" },
    { front: "images/航海王1.png", back: "images/航海王6.png" },
    { front: "images/航海王1.png", back: "images/航海王7.png" },
    { front: "images/航海王1.png", back: "images/航海王8.png" },
    { front: "images/航海王1.png", back: "images/航海王9.png" },
];

// 我們這一家資料集
const atashinchiData = [
    { front: "image/我們這一家1.jpg", back: "image/我們這一家2.jpg" },
    { front: "image/我們這一家1.jpg", back: "image/我們這一家3.jpg" },
    { front: "image/我們這一家1.jpg", back: "image/我們這一家1.jpg" },
    { front: "image/我們這一家1.jpg", back: "image/我們這一家5.jpg" },
    { front: "image/我們這一家1.jpg", back: "image/我們這一家6.jpg" },
    { front: "image/我們這一家1.jpg", back: "image/我們這一家7.jpg" },
    { front: "image/我們這一家1.jpg", back: "image/我們這一家8.jpg" },
    { front: "image/我們這一家1.jpg", back: "image/我們這一家9.jpg" },
];

let currentTheme = 'anpanman'; // 預設為麵包超人
let cards = [];
const cardContainer = document.getElementById('cardContainer');

// 洗牌函數
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 生成卡片函數
function generateCards(themeData) {
    // 清空卡片容器
    cardContainer.innerHTML = '';

    // 使用當前主題的資料生成卡片
    cards = [...themeData, ...themeData]; // 複製兩份資料
    cards = shuffleArray(cards); // 洗牌

    cards.forEach(data => {
        const card = document.createElement('div');
        card.classList.add('card');

        const front = document.createElement('div');
        front.classList.add('card-front');
        const frontImg = document.createElement('img');
        frontImg.src = data.front;
        front.appendChild(frontImg);

        const back = document.createElement('div');
        back.classList.add('card-back');
        const backImg = document.createElement('img');
        backImg.src = data.back;
        back.appendChild(backImg);

        card.appendChild(front);
        card.appendChild(back);
        cardContainer.appendChild(card);

        // 卡片點擊事件：翻轉卡片
        card.addEventListener('click', () => {
            if (card.style.transform === 'rotateY(180deg)') {
                card.style.transform = 'rotateY(0deg)';  // 翻回正面
            } else {
                card.style.transform = 'rotateY(180deg)'; // 翻到背面
            }
        });
    });
}

// 初始化遊戲按鈕
document.getElementById('startGameBtn').onclick = () => {
    generateCards(anpanmanData); // 預設顯示麵包超人主題
    document.getElementById('startGameBtn').style.display = 'none';
    document.getElementById('flipFrontBtn').style.display = 'inline';
    document.getElementById('flipBackBtn').style.display = 'inline';
    document.getElementById('switchThemeBtn').style.display = 'inline';

    // 所有卡片顯示背面
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.style.transform = 'rotateY(180deg)';
    });

    // 倒數10秒後翻回正面
    setTimeout(() => {
        allCards.forEach(card => {
            card.style.transform = 'rotateY(0deg)';
        });
    }, 10000);
};

// 切換主題按鈕
document.getElementById('switchThemeBtn').onclick = () => {
    if (currentTheme === 'anpanman') {
        currentTheme = 'atashinchi';
        document.getElementById('switchThemeBtn').textContent = '切換到麵包超人';
        generateCards(atashinchiData); // 切換到我們這一家

        // 先顯示為背面
        const allCards = document.querySelectorAll('.card');
        allCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'rotateY(180deg)'; // 顯示背面
            }, index * 100); // 每張卡片延遲100毫秒
        });

        // 倒數10秒後翻回正面
        setTimeout(() => {
            allCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.transform = 'rotateY(0deg)'; // 翻回正面
                }, index * 100); // 每張卡片延遲100毫秒
            });
        }, 10000); // 10000毫秒 = 10秒
    } else {
        currentTheme = 'anpanman';
        document.getElementById('switchThemeBtn').textContent = '切換到我們這一家';
        generateCards(anpanmanData); // 切換回麵包超人

        // 先顯示為背面
        const allCards = document.querySelectorAll('.card');
        allCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'rotateY(180deg)'; // 顯示背面
            }, index * 100); // 每張卡片延遲100毫秒
        });

        // 倒數10秒後翻回正面
        setTimeout(() => {
            allCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.transform = 'rotateY(0deg)'; // 翻回正面
                }, index * 100); // 每張卡片延遲100毫秒
            });
        }, 10000); // 10000毫秒 = 10秒
    }
};

// 全部翻正面按鈕
document.getElementById('flipFrontBtn').onclick = () => {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'rotateY(0deg)'; // 翻到正面
        }, index * 100); // 每張卡片延遲100毫秒
    });
};

// 全部翻背面按鈕
document.getElementById('flipBackBtn').onclick = () => {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'rotateY(180deg)'; // 翻到背面
        }, index * 100); // 每張卡片延遲100毫秒
    });
};
