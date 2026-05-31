/* ===== UI shared: header + footer + toast + image fallback ===== */

(function(){
  const headerHTML = (active) => `
  <header class="site-header">
    <div class="container bar">
      <a class="logo" href="index.html" aria-label="حناية الرئيسية">
        <img src="assets/img/logo.svg" alt="حناية" />
      </a>
      <button class="icon-btn menu-toggle" aria-label="القائمة" onclick="document.querySelector('.nav').classList.toggle('open')">
        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      <nav class="nav" aria-label="القائمة الرئيسية">
        <a href="index.html"   class="${active==='home'?'active':''}">الرئيسية</a>
        <a href="products.html" class="${active==='products'?'active':''}">المنتجات</a>
        <a href="products.html?cat=henna" class="${active==='henna'?'active':''}">الحناء</a>
        <a href="products.html?cat=sidr" class="${active==='sidr'?'active':''}">السدر</a>
        <a href="products.html?cat=kohl" class="${active==='kohl'?'active':''}">الإثمد</a>
        <a href="about.html"    class="${active==='about'?'active':''}">قصتنا</a>
        <a href="contact.html"  class="${active==='contact'?'active':''}">تواصل</a>
      </nav>
      <a class="icon-btn" href="cart.html" aria-label="السلة">
        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M3 3h2l2.4 12.3a2 2 0 0 0 2 1.7h8.2a2 2 0 0 0 2-1.6L21 8H6"/>
          <circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/>
        </svg>
        <span class="cart-badge" data-cart-count>0</span>
      </a>
    </div>
  </header>`;

  const footerHTML = () => `
  <footer>
    <div class="container">
      <div class="grid">
        <div>
          <img src="assets/img/logo.svg" alt="حناية" style="height:54px;filter:brightness(0) invert(1) sepia(.3) saturate(2) hue-rotate(50deg);"/>
          <p style="margin-top:.8rem;max-width:340px;color:#C8C0A8">
            متجر حناية متخصص في الحناء والسدر وكحل الإثمد والأعشاب الطبيعية. أصالة موروثة وجودة موثوقة لكل سيدة تحب الطبيعة.
          </p>
          <div class="social" aria-label="حساباتنا">
            <a href="#" aria-label="Instagram"><svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
            <a href="#" aria-label="TikTok"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 8a6 6 0 0 1-4-1.5V16a5 5 0 1 1-5-5v3a2 2 0 1 0 2 2V2h3a4 4 0 0 0 4 4z"/></svg></a>
            <a href="#" aria-label="WhatsApp"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4a10 10 0 0 0-16 12L2 22l6-2A10 10 0 1 0 20 4Zm-3.2 13.2c-.3.8-1.6 1.6-2.3 1.6-.6 0-1.4.3-4.6-1.3a11.7 11.7 0 0 1-4.5-4.5c-1.6-3.2-1.3-4-1.3-4.6 0-.7.8-2 1.6-2.3.4-.2 1.4-.4 1.7.3l.8 2c.1.3 0 .5-.2.7l-.7.7c-.2.2-.3.4-.1.7a8 8 0 0 0 1.4 1.7c.6.5 1.1 1 1.7 1.4.3.2.5 0 .7-.1l.7-.7c.2-.2.4-.3.7-.2l2 .8c.7.3.5 1.3.3 1.7Z"/></svg></a>
            <a href="#" aria-label="Snapchat"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c3.5 0 5 2.5 5 5.5v2c1 .3 1.5.7 2 1.2l-1 .8c.6 1.4 2 2.6 3.5 3-.4 1-1.8 1.2-3 1.2 0 .5.3 1 .5 1.3-1.7 1-3.3.5-4.2.3-.5 1-1.5 2.2-3.8 2.2s-3.3-1.2-3.8-2.2c-.9.2-2.5.7-4.2-.3.2-.3.5-.8.5-1.3-1.2 0-2.6-.2-3-1.2 1.5-.4 2.9-1.6 3.5-3l-1-.8c.5-.5 1-.9 2-1.2v-2C7 4.5 8.5 2 12 2z"/></svg></a>
          </div>
        </div>
        <div>
          <h4>روابط سريعة</h4>
          <a href="index.html">الرئيسية</a>
          <a href="products.html">جميع المنتجات</a>
          <a href="about.html">قصتنا</a>
          <a href="contact.html">تواصل معنا</a>
        </div>
        <div>
          <h4>التصنيفات</h4>
          <a href="products.html?cat=henna">الحناء</a>
          <a href="products.html?cat=sidr">السدر</a>
          <a href="products.html?cat=kohl">كحل الإثمد</a>
          <a href="products.html?cat=oils">الزيوت</a>
          <a href="products.html?cat=herbs">الأعشاب</a>
        </div>
        <div>
          <h4>المساعدة</h4>
          <a href="#">سياسة الشحن</a>
          <a href="#">سياسة الإرجاع</a>
          <a href="#">الأسئلة الشائعة</a>
          <a href="#">طرق الدفع</a>
          <a href="contact.html">دعم العملاء</a>
        </div>
      </div>
      <div class="copy">© ${new Date().getFullYear()} حنايـة · جميع الحقوق محفوظة · صُنع بحب للجمال الطبيعي</div>
    </div>
  </footer>`;

  function injectChrome(active){
    document.body.insertAdjacentHTML('afterbegin', headerHTML(active));
    document.body.insertAdjacentHTML('beforeend', footerHTML());
    document.body.insertAdjacentHTML('beforeend', '<div class="toast" id="toast"></div>');
  }

  function toast(msg){
    const t = document.getElementById('toast');
    if(!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._h);
    t._h = setTimeout(()=>t.classList.remove('show'), 2200);
  }

  function fmtSAR(n){
    return new Intl.NumberFormat('ar-SA', {minimumFractionDigits:0, maximumFractionDigits:2}).format(n);
  }

  /* Image fallback: if Unsplash fails, render a styled brand placeholder */
  function imgWithFallback(src, alt){
    const safeAlt = (alt||'').replace(/"/g,'&quot;');
    return `<img src="${src}" alt="${safeAlt}" loading="lazy"
      onerror="this.outerHTML='<div class=&quot;img-fallback&quot;>${safeAlt}</div>'">`;
  }

  /* Expose globals */
  window.Henaya = { injectChrome, toast, fmtSAR, imgWithFallback };
})();
