// 等待 DOM 載入完成
document.addEventListener('DOMContentLoaded', () => {
    
    const navbar = document.querySelector('.navbar');

    // 監聽滾動事件
    window.addEventListener('scroll', () => {
        // 如果滾動超過 50px，導覽列加入陰影與背景加深
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
            navbar.style.background = '#0b0e14';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'rgba(11, 14, 20, 0.95)';
        }
    });

    // 簡單的點擊回饋效果 (未來可擴充)
    console.log("Welcome to my digital space!");
});