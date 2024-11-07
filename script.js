// 定义一个名为 TreasureMap 的类
class TreasureMap {
    // 静态方法：获取初始线索
    static async getInitialClue() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("在古老的图书馆里找到了第一个线索...");
            }, 1000);
        });
    }

    // 静态方法：解码古代文字
    static async decodeAncientScript(clue) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!clue) {
                    reject("没有线索可以解码!");
                }
                resolve("解码成功!宝藏在一座古老的神庙中...");
            }, 1500);
        });
    }

    // 静态方法：在神庙中搜索
    static async searchTemple(location) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random < 0.5) {
                    reject("糟糕!遇到了神庙守卫!");
                }
                resolve("找到了一个神秘的箱子...");
            }, 2000);
        });
    }

    // 静态方法：打开宝藏箱
    static async openTreasureBox() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("恭喜!你找到了传说中的宝藏!");
            }, 1000);
        });
    }

}

// 定义一个异步函数：寻找宝藏
async function findTreasure() {
    try {
        const clue = await TreasureMap.getInitialClue();
        updateBackground('image2.jpg', clue); // 更新背景图并显示独白

        const location = await TreasureMap.decodeAncientScript(clue);
        updateBackground('image3.jpg', location); // 更新背景图并显示独白

        const box = await TreasureMap.searchTemple(location);
        updateBackground('image5.jpg', box); // 更新背景图并显示独白

        const treasure = await TreasureMap.openTreasureBox();
        updateBackground('gif1.gif', treasure); // 更新背景图并显示独白

        document.getElementById('restart-button').style.display = 'block'; 
    } catch (error) {
        console.error("任务失败:", error);
        updateBackground('image4.jpg', error); // 更新为失败背景图并显示失败信息
        document.getElementById('restart-button').style.display = 'block'; 
    }
}

// 更新背景图和显示独白的函数
function updateBackground(image, message) {
    const background = document.getElementById('background');
    const dialogBox = document.getElementById('dialog-box');
    
    background.style.backgroundImage = `url('${image}')`; // 更新背景图
    dialogBox.style.display = 'block'; // 显示独白框
    dialogBox.textContent = message; // 设置独白内容

    // 动画效果，确保独白框在显示时有一个过渡效果
    setTimeout(() => {
        dialogBox.style.opacity = 1;
    }, 100);
}

// 为开始按钮添加事件监听
document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('start-button').style.display = 'none'; 
    findTreasure();
});

// 为重新寻宝按钮添加事件监听
document.getElementById('restart-button').addEventListener('click', () => {
    document.getElementById('restart-button').style.display = 'none'; 
    document.getElementById('start-button').style.display = 'block'; 
    updateBackground('image1.jpg', "开始游戏..."); // 返回初始背景图并显示欢迎信息
});
