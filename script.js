// Sakura
const canvas = document.createElement('canvas');
canvas.className = 'sakura';
document.getElementById('sakura-container').appendChild(canvas);
const script = document.createElement('script');
script.src = 'https://lovechang.cn/wp-content/themes/lolimeow/assets/js/lib/sakura.js';
script.onload = () => new Sakura(canvas);
document.body.appendChild(script);

// Font Awesome
const fontAwesome = document.createElement('script');
fontAwesome.src = 'https://kit.fontawesome.com/a076d05399.js';
fontAwesome.crossOrigin = 'anonymous';
document.body.appendChild(fontAwesome);

// Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('✅ Service Worker đăng ký:', reg.scope))
      .catch(err => console.error('❌ Lỗi Service Worker:', err));
  });
}
