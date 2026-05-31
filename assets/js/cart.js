/* ===== سلة التسوق - localStorage ===== */

(function(){
  const KEY = 'henaya_cart_v1';

  function load(){
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch { return []; }
  }
  function save(items){
    localStorage.setItem(KEY, JSON.stringify(items));
    updateBadge();
    window.dispatchEvent(new CustomEvent('cart:change'));
  }
  function updateBadge(){
    const n = load().reduce((s,i)=>s+i.qty,0);
    document.querySelectorAll('[data-cart-count]').forEach(el=>{
      el.textContent = n;
      el.style.display = n>0 ? '' : 'none';
    });
  }
  function add(productId, qty=1){
    const items = load();
    const found = items.find(i=>i.id===productId);
    if(found) found.qty += qty;
    else items.push({id:productId, qty});
    save(items);
  }
  function update(productId, qty){
    let items = load();
    if(qty<=0) items = items.filter(i=>i.id!==productId);
    else items = items.map(i=>i.id===productId?{...i,qty}:i);
    save(items);
  }
  function remove(productId){
    save(load().filter(i=>i.id!==productId));
  }
  function clear(){ save([]); }
  function items(){ return load(); }
  function detailed(){
    return load().map(i=>{
      const p = window.findProduct ? window.findProduct(i.id) : null;
      return p ? { ...p, qty:i.qty, lineTotal: p.price*i.qty } : null;
    }).filter(Boolean);
  }
  function totals(){
    const d = detailed();
    const subtotal = d.reduce((s,i)=>s+i.lineTotal, 0);
    const shipping = subtotal >= 200 ? 0 : (subtotal>0 ? 20 : 0);
    const tax = +(subtotal*0.15).toFixed(2); /* VAT 15% — informational */
    const total = subtotal + shipping;
    return { subtotal, shipping, tax, total, count: d.reduce((s,i)=>s+i.qty,0) };
  }

  window.Cart = { add, update, remove, clear, items, detailed, totals, updateBadge };

  /* update badge on every page load */
  document.addEventListener('DOMContentLoaded', updateBadge);
})();
