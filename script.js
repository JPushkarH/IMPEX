/* ============================================================
   SHARVED IMPEX — SPA Script
   ============================================================ */

/* ============================================================
   CONFIG
   ============================================================ */
const SHEET_CONFIG = {
  API_KEY: "AIzaSyCNofCVCsiraj1AA0W7Tj3dlUz7kuchUrI",
  SPREADSHEET_ID: "16IldVlEwAsgoQSCj4DLPrXwjnFbfABpZLjzIBxTr2Wg",
  CONTENT_TAB: "Content",
  PRODUCTS_TAB: "Products",
  TEAM_TAB: "Team",
  BLOG_TAB: "Blog",
  PARTNERS_TAB: "Partners"
};

const ADMIN_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbykrC6Z-UqJwP9NSZkHQJ29SqkHQ4bTO_jWC1M85tiwhnhlVQHLdVqxn9ohW46v3xYl/exec";
const CLIENT_ID = "sharved";
const DATA_SPREADSHEET_ID = "16IldVlEwAsgoQSCj4DLPrXwjnFbfABpZLjzIBxTr2Wg";
const QUOTATIONS_FOLDER_ID = "1Ms6dg3_ltr41lTEtWN4aOn7L_ved0C_f";

const SHEETS_URL = (tab) => `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_CONFIG.SPREADSHEET_ID}/values/${encodeURIComponent(tab)}?key=${SHEET_CONFIG.API_KEY}`;

// const PALETTES = ['auto', 'festive', 'sunset', 'forest', 'mono', 'pastel'];
const PALETTES = ['auto', 'midnight', 'festive', 'sunset', 'forest', 'mono', 'pastel'];

const PALETTE_KEY = 'sharved-palette';

/* ============================================================
   FALLBACK CONTENT (used if Sheet fails or while loading)
   ============================================================ */
const FALLBACK = {
  site: {
    company: "SHARVED IMPEX",
    tagline: "Export · Digital · Automation",
    email: "consult@sharvedimpex.com",
    phoneDisplay: "Swati Hemant · +91 84599 77048",
    phone: "+918459977048",
    whatsapp: "918459977048",
    waMessage: "Hi, I'd like to know more about your export consulting services."
  },
  nav: {
    link1: "Home", link1Href: "#home",
    link2: "Services", link2Href: "#services",
    link3: "Catalogue", link3Href: "#catalogue",
    link4: "About", link4Href: "#about",
    link5: "Blog", link5Href: "#blog"
  },
  hero: {
    sub: "Celebrate the festival of new beginnings with us — a special offer to launch your export journey."
  },
  marquee: {
    items: "Export Business Setup || Registration & Certification Guidance || Website & Digital Identity || Branding & Marketing || Enquiry & Payment Solutions || Business Automation || Digital-First Approach || Personalized Consulting"
  },
  guided: {
    mark: "OM", label: "Guided By", before: "With ",
    name: "Dr. Omkar Hari Mali Sir",
    mid: "'s guidance, we're turning the",
    after: " roadmap into reality."
  },
  pain: {
    eyebrow: "The Real Challenge",
    title: "Your Export Journey Deserves More Than Just Registration",
    tagline: "Build a business that is ready for the global market.",
    desc: "Many aspiring exporters have a great product but struggle with the next steps.",
    q1: "What should I register first?",
    q2: "Which certifications are relevant to my product?",
    q3: "How do I build a professional brand?",
    q4: "How do I reach international buyers?",
    q5: "How can I manage enquiries & listings efficiently?",
    noteTitle: "You don't have to figure it all out alone.",
    note: "SHARVED IMPEX transforms your business idea into a structured, professional and digitally connected export business.",
    noteTag: "One Vision. One Partner. A Smarter Way to Start."
  },
  services: {
    eyebrow: "Our Services & Packages",
    title: "Everything You Need to Build Your Export Business",
    desc: "From business setup to digital transformation — personalized consulting and implementation support designed around your business needs."
  },
  service1: {
    num: "01", label: "Setup & Registration",
    title: "Export Business Setup & Registration",
    tag: "Start Right. Build with Confidence.",
    desc: "We help you understand and navigate the essential steps involved in establishing your import-export business.",
    items: "Import Export Code (IEC) guidance || Business registration — Shop Act, Udyam Aadhaar, GST, RCMC, FSSAI, APEDA || Relevant certification consulting || Trademark consulting & registration guidance || Export documentation support",
    note: "Your business foundation matters. Let's build it right.",
    priceOld: "15,000", priceNew: "11,850", priceSave: "Save ₹3,150 · 21% OFF"
  },
  service2: {
    num: "02", label: "Website & Digital",
    title: "Website & Digital Business Setup",
    tag: "Your Business Deserves a Professional Digital Identity.",
    desc: "Your website is more than a digital address — it's your first impression, product showcase and a gateway to customers.",
    items: "Domain name registration || Hosting setup || Professional business website || Business email setup || WhatsApp integration || Social media setup — LinkedIn, Instagram || Creative logo design",
    note: "From brand name to online presence — a business that looks ready for the world.",
    priceOld: "25,000", priceNew: "19,750", priceSave: "Save ₹5,250 · 21% OFF"
  },
  service3: {
    num: "03", label: "Branding & Marketing",
    title: "Branding & Marketing Solutions",
    tag: "Be Seen. Be Remembered. Be Trusted.",
    desc: "A good product needs a strong identity and the right communication.",
    items: "Creative logo design || Website content writing || Product descriptions || Brochures & company profiles || Visiting cards & marketing materials || Social media creatives || Digital marketing support",
    note: "Your product may be excellent. Let's make sure your brand gets noticed.",
    priceOld: "18,000", priceNew: "14,220", priceSave: "Save ₹3,780 · 21% OFF"
  },
  service4: {
    num: "04", label: "Enquiry & Payments",
    title: "Enquiry & Payment Solutions",
    tag: "Turn Your Website Into a Business Enquiry Hub.",
    desc: "Make it easier for potential customers to connect with your business.",
    items: "Website enquiry forms || WhatsApp enquiry integration || Customer enquiry tracking || Payment gateway integration || Basic enquiry management workflows",
    note: "Make it easier for customers to discover, enquire and connect with your business.",
    priceOld: "12,000", priceNew: "9,480", priceSave: "Save ₹2,520 · 21% OFF"
  },
  service5: {
    num: "05", label: "Business Automation", wide: "yes",
    title: "Business Automation Solutions",
    tag: "Spend Less Time Managing Repetitive Tasks. More Time Growing Your Business.",
    desc: "As your business grows, managing products, enquiries and website updates manually can become time-consuming.",
    items: "Product sourcing information management || Product catalogue preparation || Product listing on your website || Website content updates || Enquiry tracking || Customer follow-up workflows || Business operation automation || Ongoing support & iteration",
    note: "From Product Sourcing to Product Listing — Let's Make Your Business More Efficient.",
    priceOld: "20,000", priceNew: "15,800", priceSave: "Save ₹4,200 · 21% OFF"
  },
  pricing: {
    ganeshaBadge: "All in One · Flat 21% OFF",
    ganeshaName: "Ganesha Package",
    ganeshaTagline: "The complete all-in-one package — everything you need to launch, brand and grow your export business, under one roof.",
    ganeshaItems: "Export Business Setup & Registration || Website & Digital Business Setup || Branding & Marketing Solutions || Enquiry & Payment Solutions || Business Automation Solutions || Priority Consulting & Support",
    ganeshaPriceLabel: "Festive Offer Price",
    ganeshaOld: "51,000",
    ganeshaNew: "40,290",
    ganeshaSave: "You Save ₹10,710 (21% OFF)",
    ganeshaNote: "All 5 individual packages included · Limited time offer"
  },
  why: {
    eyebrow: "Why Choose SHARVED IMPEX?",
    title: "Personalized Guidance. Practical Solutions. One Business Partner.",
    desc: "We believe every business is different. Instead of offering the same solution to everyone, we understand your business idea, product category, target market and priorities.",
    approachLabel: "Our Approach",
    approachSteps: "Understand || Advise || Plan || Implement || Support"
  },
  why1: { num: "01", title: "Personalized Business Consulting", desc: "We provide our own professional opinion and practical suggestions based on your business needs." },
  why2: { num: "02", title: "End-to-End Business Setup Support", desc: "Bring your registration, branding, website and digital requirements together in one place." },
  why3: { num: "03", title: "Solutions Designed Around You", desc: "Your business size, budget and goals guide our recommendations — no generic packages." },
  why4: { num: "04", title: "Digital-First Business Approach", desc: "We help you establish the digital tools needed to present and manage your business professionally." },
  why5: { num: "05", title: "Long-Term Growth Mindset", desc: "Our focus is not only on starting your business, but on building a stronger foundation for future growth." },
  process: {
    eyebrow: "How We Work",
    title: "Your Business Journey, Simplified.",
    desc: "Five clear steps — from your first conversation to a professional online presence."
  },
  process1: { num: "01", label: "Step One", title: "Understand Your Business", desc: "We discuss your business idea, products, target market and requirements to understand what success looks like for you." },
  process2: { num: "02", label: "Step Two", title: "Personalized Consultation", desc: "We share our professional opinion and recommend suitable options based on your specific needs and budget." },
  process3: { num: "03", label: "Step Three", title: "Business Setup Plan", desc: "We help you identify the relevant registrations, certifications, branding and digital requirements." },
  process4: { num: "04", label: "Step Four", title: "Build Your Digital Presence", desc: "We support your website, domain, hosting, email, branding and enquiry system setup." },
  process5: { num: "05", label: "Step Five", title: "Launch & Improve", desc: "We help you move toward a professional online presence and explore ways to streamline your business operations." },
  who: {
    eyebrow: "Who We Help",
    title: "From First Step to Empowering New Businesses to Global Success — We're With You.",
    desc: "Our services are designed for:",
    items: "Aspiring exporters || New import-export businesses || Small and growing businesses || Product manufacturers || Traders and suppliers || Businesses building a digital presence || Entrepreneurs seeking automation || First-time export entrepreneurs || Businesses ready to go global",
    foot: "Whether you are starting from an idea or already have a business, we help you identify the next practical step.",
    footAccent: "Your Business. Your Vision. Our Expertise."
  },
  faq: { eyebrow: "Frequently Asked Questions", title: "Questions, Answered.", desc: "Everything you might want to know before we begin." },
  faq1: { q: "Do you help new exporters who are just starting?", a: "Yes. We provide consulting and setup support for aspiring exporters and new import-export businesses — from your very first step." },
  faq2: { q: "Do you provide all services under one roof?", a: "We provide consulting and support across business setup, certifications, trademark process guidance, website development, branding, marketing and automation." },
  faq3: { q: "Can you help me decide which registrations and certifications I need?", a: "Yes. We can discuss your product, business model and target market, then provide personalized guidance on relevant requirements." },
  faq4: { q: "Do you build websites for export businesses?", a: "Yes. We provide support for domain name, hosting, business website, email, enquiry systems and other digital business requirements." },
  faq5: { q: "Can you automate my business operations?", a: "We can help you identify repetitive business tasks and explore suitable automation solutions." },
  faq6: { q: "How do I get started?", a: "Add a package to your cart, fill in your details, and send it via WhatsApp or email. We'll get back within 24 hours." },
  final: {
    eyebrow: "Ready to Start Your Export Journey?",
    title: "Your Export Business Starts With One Right Decision.",
    sub: "Start with a Cart. Build with Confidence. Grow with Purpose.",
    body: "You bring the ambition. We bring personalized guidance, practical solutions and digital business support.",
    cta2: "Contact Us",
    contact1Label: "Book Consultation — Email",
    contact2Label: "Contact Us",
    note: "SHARVED IMPEX — Export Business Setup · Digital Solutions · Business Automation"
  }
};

/* ============================================================
   STATE
   ============================================================ */
let CONTENT = JSON.parse(JSON.stringify(FALLBACK));
let PACKAGES = [];
let PRODUCTS = [];
let CART = JSON.parse(localStorage.getItem('sharved-cart') || '{}');
let ACTIVE_CAT = 'All';
let ALL_POSTS = [];
let ACTIVE_TOPIC = 'All';
let LIGHTBOX_IMAGES = [];
let LIGHTBOX_INDEX = 0;
let LAST_FOCUS = null;

/* ============================================================
   HELPERS
   ============================================================ */
const $ = (id) => document.getElementById(id);
const qsa = (sel, root = document) => root.querySelectorAll(sel);
const escapeHtml = (str) => { const d = document.createElement('div'); d.textContent = str || ''; return d.innerHTML; };
const fmtINR = (n) => '₹' + Number(n || 0).toLocaleString('en-IN');
const getC = (c, path) => { const [s, k] = path.split('.'); return (c[s] && c[s][k]) ? c[s][k] : ''; };
const splitList = (str) => (str || '').split('||').map(s => s.trim()).filter(Boolean);
function toDirectImageUrl(url){
  if(!url) return url;
  const m = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if(m) return `https://lh3.googleusercontent.com/d/${m[1]}`;
  const p = url.match(/drive\.google\.com\/(?:open|uc)\?.*[?&]id=([^&]+)/);
  if(p) return `https://lh3.googleusercontent.com/d/${p[1]}`;
  return url;
}

/* ============================================================
   ROUTER
   ============================================================ */
const ROUTES = ['home', 'services', 'catalogue', 'about', 'blog', 'blogpost'];

function getRoute(){
  const hash = (location.hash || '#home').replace('#', '');
  if(hash.startsWith('blog/')) return { name: 'blogpost', slug: hash.slice(5) };
  if(ROUTES.includes(hash)) return { name: hash, slug: null };
  return { name: 'home', slug: null };
}

function navigateTo(route, slug){
  location.hash = slug ? `${route}/${encodeURIComponent(slug)}` : route;
}

function applyRoute(){
  const { name, slug } = getRoute();

  // Toggle pages
  qsa('.page').forEach(p => p.classList.remove('active'));
  const page = $(`page-${name}`);
  if(page) page.classList.add('active');

  // Toggle mode on <html>
  const mode = name === 'home' ? 'festive' : 'pro';
  document.documentElement.setAttribute('data-mode', mode);
  document.body.setAttribute('data-route', name);

  // Nav state
  updateNavForRoute(name);

  // Explorer only on home
  const explorer = $('explorer');
  if(explorer){
    if(name !== 'home'){
      explorer.classList.add('hidden');
      explorer.classList.remove('visible');
      closeExplorer();
    } else {
      explorer.classList.remove('hidden');
    }
  }

  // Update title
  const titles = {
    home: 'SHARVED IMPEX — Ganesh Chaturthi Special',
    services: 'Services & Pricing — SHARVED IMPEX',
    catalogue: 'Product Catalogue — SHARVED IMPEX',
    about: 'About Us — SHARVED IMPEX',
    blog: 'Blog — SHARVED IMPEX',
    blogpost: 'Loading… — SHARVED IMPEX'
  };
  document.title = titles[name] || 'SHARVED IMPEX';

  // Route-specific initialization
  if(name === 'blogpost' && slug){
    loadPost(slug);
    document.querySelector('.back-link')?.setAttribute('href', '#blog');
  } else if(name === 'blog'){
    if(!ALL_POSTS.length) loadPosts();
    else renderBlog();
  } else if(name === 'catalogue'){
    if(!PRODUCTS.length) loadProducts();
    else renderProducts();
  } else if(name === 'about'){
    loadTeam();
    loadPartnersBand();
    loadVisitInfo();
  }

  // Scroll top
  window.scrollTo({ top: 0, behavior: 'instant' });
  // Re-init reveal
  initReveal();
  updateProcess();
}

function updateNavForRoute(route){
  const nav = $('nav');
  if(!nav) return;
  nav.classList.remove('transparent', 'solid', 'visible');
  if(route === 'home'){
    nav.classList.add('transparent');
    // Transparent only while at top of hero
    if(window.scrollY > 60){
      nav.classList.remove('transparent');
      nav.classList.add('solid');
    }
  } else {
    nav.classList.add('solid');
  }

  // Mark active link
  qsa('.nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    a.classList.toggle('active', href === '#' + route);
  });
}

/* ============================================================
   NAV RENDERING
   ============================================================ */
function renderNav(){
  const links = [];
  for(let i = 1; i <= 6; i++){
    const label = getC(CONTENT, `nav.link${i}`);
    const href = getC(CONTENT, `nav.link${i}Href`) || '#';
    if(label) links.push({ label, href });
  }
  const html = links.map(l => `<a href="${escapeHtml(l.href)}">${escapeHtml(l.label)}</a>`).join('');
  const navLinks = $('navLinks');
  if(navLinks) navLinks.innerHTML = html;
  const mobileMenu = $('mobileMenu');
  if(mobileMenu){
    mobileMenu.innerHTML = links.map(l => `<a href="${escapeHtml(l.href)}">${escapeHtml(l.label)}</a>`).join('') +
      `<a href="#catalogue" style="margin-top:16px;color:var(--accent-3)">View Catalogue →</a>`;
  }
  // Festive nav
  const festiveNav = $('festiveNavLinks');
  if(festiveNav){
    festiveNav.innerHTML = links.filter(l => l.href !== '#home').map(l => `<a href="${escapeHtml(l.href)}">${escapeHtml(l.label)}</a>`).join('');
  }
}

/* ============================================================
   STATIC TEXT RENDER
   ============================================================ */
function renderStatic(){
  qsa('[data-t]').forEach(el => {
    const v = getC(CONTENT, el.dataset.t);
    if(v) el.textContent = v;
  });
}

/* ============================================================
   HOME — Festive Sections
   ============================================================ */
function renderMarquee(){
  const el = $('marquee');
  if(!el) return;
  const items = splitList(getC(CONTENT, 'marquee.items'));
  el.innerHTML = items.map(i => `<span class="marquee-item">${escapeHtml(i)}</span>`).join('');
  el.innerHTML += el.innerHTML;
}

function renderPainQuestions(targetId){
  const wrap = $(targetId);
  if(!wrap) return;
  let html = '';
  for(let i = 1; i <= 8; i++){
    const q = getC(CONTENT, `pain.q${i}`);
    if(!q) break;
    html += `<div class="pq reveal" style="--d:${i * 0.06}s"><span class="num">${String(i).padStart(2, '0')}</span>${escapeHtml(q)}</div>`;
  }
  wrap.innerHTML = html;
}

function renderServicesPricing(targetId){
  const grid = $(targetId);
  if(!grid) return;
  let html = '';
  for(let i = 1; i <= 8; i++){
    const s = CONTENT['service' + i];
    if(!s) break;
    const wide = s.wide === 'yes' ? ' wide' : '';
    const items = splitList(s.items).map(x => `<li>${escapeHtml(x)}</li>`).join('');
    const pkgId = 'p' + i;
    html += `
      <article class="service-price-card${wide} reveal" data-pkg-id="${pkgId}" style="--d:${(i % 2) * 0.06}s">
        <div class="sp-head">
          <span class="sp-num">${escapeHtml(s.num || '')}</span>
          <span class="sp-label">${escapeHtml(s.label || '')}</span>
        </div>
        <h3 class="sp-title">${escapeHtml(s.title || '')}</h3>
        <p class="sp-tag">${escapeHtml(s.tag || '')}</p>
        <p class="sp-desc">${escapeHtml(s.desc || '')}</p>
        <ul class="sp-list">${items}</ul>
        <p class="sp-note">${escapeHtml(s.note || '')}</p>
        <div class="sp-price-row">
          <span class="sp-price-old">₹${escapeHtml(s.priceOld || '')}</span>
          <span class="sp-price-new">₹${escapeHtml(s.priceNew || '')}<small>/-</small></span>
        </div>
        <div class="sp-price-save">${escapeHtml(s.priceSave || '')}</div>
        <button type="button" class="sp-cta" data-pkg-id="${pkgId}" onclick="addPackageToCart('${pkgId}')">
          Add to Cart <span class="arrow">→</span>
        </button>
      </article>`;
  }
  grid.innerHTML = html;
}

function renderApproach(targetId){
  const el = $(targetId);
  if(!el) return;
  const steps = splitList(getC(CONTENT, 'why.approachSteps'));
  el.innerHTML = steps.map((s, i) => `<span>${escapeHtml(s)}</span>` + (i < steps.length - 1 ? '<i>→</i>' : '')).join('');
}

function renderWhyCards(targetId){
  const wrap = $(targetId);
  if(!wrap) return;
  let html = '';
  for(let i = 1; i <= 8; i++){
    const w = CONTENT['why' + i];
    if(!w) break;
    html += `
      <div class="why-card reveal-right" style="--d:${(i - 1) * 0.07}s">
        <span class="n">${escapeHtml(w.num || String(i).padStart(2, '0'))}</span>
        <div><h3>${escapeHtml(w.title || '')}</h3><p>${escapeHtml(w.desc || '')}</p></div>
      </div>`;
  }
  wrap.innerHTML = html;
}

function renderSteps(targetId, lineId){
  const wrap = $(targetId);
  if(!wrap) return;
  let html = '';
  for(let i = 1; i <= 8; i++){
    const s = CONTENT['process' + i];
    if(!s) break;
    html += `
      <div class="step reveal" style="--d:${(i - 1) * 0.05}s">
        <span class="step-num">${escapeHtml(s.num || String(i).padStart(2, '0'))}</span>
        <div class="step-content">
          <div class="step-label">${escapeHtml(s.label || '')}</div>
          <h3>${escapeHtml(s.title || '')}</h3>
          <p>${escapeHtml(s.desc || '')}</p>
        </div>
      </div>`;
  }
  wrap.innerHTML = html;
}

function renderWho(){
  const grid = $('whoGrid');
  if(!grid) return;
  const items = splitList(getC(CONTENT, 'who.items'));
  grid.innerHTML = items.map((item, i) =>
    `<div class="who-card reveal" style="--d:${i * 0.04}s"><span class="dot"></span><span>${escapeHtml(item)}</span></div>`
  ).join('');
}

function renderFaq(targetId){
  const wrap = $(targetId);
  if(!wrap) return;
  let html = '';
  for(let i = 1; i <= 12; i++){
    const f = CONTENT['faq' + i];
    if(!f) break;
    html += `
      <details class="faq-item reveal" style="--d:${(i - 1) * 0.04}s">
        <summary>${escapeHtml(f.q || '')}<span class="faq-icon"></span></summary>
        <div class="faq-body">${escapeHtml(f.a || '')}</div>
      </details>`;
  }
  wrap.innerHTML = html;
  qsa('.faq-item', wrap).forEach(item => {
    item.addEventListener('toggle', () => {
      if(item.open){ qsa('.faq-item', wrap).forEach(o => { if(o !== item) o.open = false; }); }
    });
  });
}

function renderGaneshaItems(){
  const el = $('ganeshaItems');
  if(!el) return;
  const items = splitList(getC(CONTENT, 'pricing.ganeshaItems'));
  el.innerHTML = items.map(i => `<li>${escapeHtml(i)}</li>`).join('');
}

/* ============================================================
   COUNTDOWN
   ============================================================ */
function initCountdown(){
  const target = new Date('September 26, 2026 23:59:59').getTime();
  const dateEl = $('countdown-date');
  if(dateEl) dateEl.textContent = new Date(target).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

  function tick(){
    const dist = target - Date.now();
    const set = (id, v) => { const e = $(id); if(e) e.textContent = String(v).padStart(2, '0'); };
    if(dist < 0){
      ['cd-days', 'cd-hours', 'cd-mins', 'cd-secs'].forEach(id => set(id, 0));
      return;
    }
    set('cd-days', Math.floor(dist / 86400000));
    set('cd-hours', Math.floor((dist % 86400000) / 3600000));
    set('cd-mins', Math.floor((dist % 3600000) / 60000));
    set('cd-secs', Math.floor((dist % 60000) / 1000));
  }
  tick();
  setInterval(tick, 1000);
}

/* ============================================================
   PACKAGES + CART
   ============================================================ */
function buildPackages(){
  PACKAGES = [
    {
      id: 'ganesha',
      name: getC(CONTENT, 'pricing.ganeshaName') || 'Ganesha Package',
      sub: getC(CONTENT, 'pricing.ganeshaTagline') || '',
      price: parseInt(String(getC(CONTENT, 'pricing.ganeshaNew')).replace(/[^0-9]/g, '')) || 40290,
      mrp: parseInt(String(getC(CONTENT, 'pricing.ganeshaOld')).replace(/[^0-9]/g, '')) || 51000,
      pack: 'All-in-one bundle'
    }
  ];
  for(let i = 1; i <= 5; i++){
    const s = CONTENT['service' + i];
    if(!s) break;
    PACKAGES.push({
      id: 'p' + i,
      name: s.title || ('Package ' + i),
      sub: s.sub || '',
      price: parseInt(String(s.priceNew || '0').replace(/[^0-9]/g, '')) || 0,
      mrp: parseInt(String(s.priceOld || '0').replace(/[^0-9]/g, '')) || 0,
      pack: 'Service package'
    });
  }
  PACKAGES.push({
    id: 'consultancy',
    name: 'Consultancy Call',
    sub: '1-on-1 expert advice',
    price: 1,
    mrp: 1,
    pack: '15-minute call'
  });
}

function packageById(id){ return PACKAGES.find(p => p.id === id); }

function isProductItem(item){ return item && item.type === 'product'; }
function isPackageItem(item){ return item && item.type === 'package'; }

function addPackageToCart(id){
  const pkg = packageById(id);
  if(!pkg){ showToast('Package not found', true); return; }
  const key = 'pkg:' + id;
  if(!CART[key]) CART[key] = { type: 'package', id, qty: 1 };
  else CART[key].qty += 1;
  persistCart();
  updateCartCount();
  updateCardStates();
  updateCartDrawer();
  showToast(`${pkg.name} added to cart`);
}

function addProductToCart(productId){
  const p = PRODUCTS.find(pr => (pr.sku || pr.name) === productId);
  if(!p) return;
  const key = 'prd:' + productId;
  if(!CART[key]) CART[key] = { type: 'product', id: productId, qty: 1 };
  else CART[key].qty += 1;
  persistCart();
  updateCartCount();
  updateCardStates();
  updateCartDrawer();
  showToast(`${p.name} added to cart`);
}

function changeCartQty(key, delta){
  if(!CART[key]) return;
  CART[key].qty += delta;
  if(CART[key].qty <= 0) delete CART[key];
  persistCart();
  updateCartCount();
  updateCardStates();
  updateCartDrawer();
  if(getRoute().name === 'catalogue') renderProducts();
}

function removeCartItem(key){
  delete CART[key];
  persistCart();
  updateCartCount();
  updateCardStates();
  updateCartDrawer();
  if(getRoute().name === 'catalogue') renderProducts();
}

function persistCart(){ try{ localStorage.setItem('sharved-cart', JSON.stringify(CART)); }catch(e){} }

function cartItemCount(){ return Object.values(CART).reduce((s, c) => s + c.qty, 0); }

function updateCartCount(){
  const c = cartItemCount();
  const el = $('navCartCount');
  if(el) el.textContent = c;
}

function updateCardStates(){
  // Ganesha card
  const gCard = $('ganeshaCard');
  const gCta = $('ganeshaCta');
  if(gCard && gCta){
    const inCart = !!CART['pkg:ganesha'];
    gCard.classList.toggle('selected', inCart);
    const lbl = gCta.querySelector('.btn-label');
    if(lbl) lbl.textContent = inCart ? `✓ Ganesha Package Added (${CART['pkg:ganesha'].qty})` : 'Add Ganesha Package to Cart';
    gCta.classList.toggle('added', inCart);
  }
  // Service cards
  qsa('.sp-cta').forEach(btn => {
    const pkgId = btn.dataset.pkgId;
    if(!pkgId) return;
    const key = 'pkg:' + pkgId;
    const inCart = !!CART[key];
    const card = btn.closest('.service-price-card');
    if(card) card.classList.toggle('selected', inCart);
    if(inCart){
      btn.classList.add('added');
      btn.innerHTML = `✓ Added (${CART[key].qty}) <span class="arrow">→</span>`;
    } else {
      btn.classList.remove('added');
      btn.innerHTML = `Add to Cart <span class="arrow">→</span>`;
    }
  });
  // Product cards
  qsa('.product-add').forEach(btn => {
    const pid = btn.dataset.pid;
    if(!pid) return;
    const key = 'prd:' + pid;
    const inCart = !!CART[key];
    if(inCart){
      btn.classList.add('added');
      btn.textContent = `✓ Added (${CART[key].qty})`;
    } else {
      btn.classList.remove('added');
      btn.textContent = '+ Add';
    }
  });
}

function computeTotals(){
  let subtotal = 0;
  let final = 0;
  Object.entries(CART).forEach(([key, item]) => {
    if(item.type === 'package'){
      const pkg = packageById(item.id);
      if(pkg){
        subtotal += (pkg.mrp || 0) * item.qty;
        final += (pkg.price || 0) * item.qty;
      }
    } else if(item.type === 'product'){
      const p = PRODUCTS.find(pr => (pr.sku || pr.name) === item.id);
      if(p){
        const price = parseFloat(p.price) || 0;
        subtotal += price * item.qty;
        final += price * item.qty;
      }
    }
  });
  return { subtotal, final, discount: subtotal - final };
}

/* ============================================================
   CART DRAWER
   ============================================================ */
function openCartDrawer(){
  LAST_FOCUS = document.activeElement;
  $('cartDrawer').classList.add('open');
  $('cartOverlay').classList.add('open');
  document.body.classList.add('modal-open');
  updateCartDrawer();
}
function closeCartDrawer(){
  $('cartDrawer').classList.remove('open');
  $('cartOverlay').classList.remove('open');
  document.body.classList.remove('modal-open');
  if(LAST_FOCUS && LAST_FOCUS.focus) try{ LAST_FOCUS.focus(); }catch(e){}
}

function updateCartDrawer(){
  const body = $('cartDrawerBody');
  const foot = $('cartDrawerFoot');
  const keys = Object.keys(CART);

  if(!keys.length){
    body.innerHTML = `<div class="cart-empty">Your cart is empty.<br>Add a package or product to get started.</div>`;
    foot.style.display = 'none';
    return;
  }

  let html = '';
  let subtotal = 0;
  let final = 0;

  keys.forEach(key => {
    const item = CART[key];
    if(item.type === 'package'){
      const pkg = packageById(item.id);
      if(!pkg) return;
      subtotal += pkg.mrp * item.qty;
      final += pkg.price * item.qty;
      html += `
        <div class="cart-item">
          <div class="cart-thumb">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/></svg>
          </div>
          <div class="cart-info">
            <h4>${escapeHtml(pkg.name)}</h4>
            <div class="meta">${escapeHtml(pkg.pack || '')}</div>
            <div class="price-line">${fmtINR(pkg.price)} <span style="color:var(--text-3);text-decoration:line-through;font-weight:500;margin-left:6px;">${fmtINR(pkg.mrp)}</span></div>
            <div class="cart-qty">
              <button onclick="changeCartQty('${key}',-1)">−</button>
              <span>${item.qty}</span>
              <button onclick="changeCartQty('${key}',1)">+</button>
            </div>
          </div>
          <button class="cart-remove" onclick="removeCartItem('${key}')">Remove</button>
        </div>`;
    } else if(item.type === 'product'){
      const p = PRODUCTS.find(pr => (pr.sku || pr.name) === item.id);
      if(!p) return;
      const price = parseFloat(p.price) || 0;
      subtotal += price * item.qty;
      final += price * item.qty;
      const thumb = p.image ? `<img src="${escapeHtml(p.image)}" alt="">` : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>';
      html += `
        <div class="cart-item">
          <div class="cart-thumb">${thumb}</div>
          <div class="cart-info">
            <h4>${escapeHtml(p.name)}</h4>
            <div class="meta">${escapeHtml(p.pack || '')} ${p.sku ? '· ' + escapeHtml(p.sku) : ''}</div>
            <div class="price-line">${fmtINR(price)} × ${item.qty} = ${fmtINR(price * item.qty)}</div>
            <div class="cart-qty">
              <button onclick="changeCartQty('${key}',-1)">−</button>
              <span>${item.qty}</span>
              <button onclick="changeCartQty('${key}',1)">+</button>
            </div>
          </div>
          <button class="cart-remove" onclick="removeCartItem('${key}')">Remove</button>
        </div>`;
    }
  });

  body.innerHTML = html;
  foot.style.display = 'block';

  $('qSubtotal').textContent = fmtINR(subtotal);
  const disc = subtotal - final;
  $('qSaveAmt').textContent = disc > 0 ? '− ' + fmtINR(disc) : '₹0';
  $('qFinal').textContent = fmtINR(final);

  // Subtitle depends on mode
  const subtitle = $('cartSubtitle');
  if(subtitle){
    subtitle.textContent = getRoute().name === 'home' ? 'Ganesh Chaturthi · 21% OFF Applied' : 'Your items · Ready to send';
  }
}

/* ============================================================
   SEND QUOTE
   ============================================================ */
function buildQuoteMessage(){
  const name = $('qName').value.trim();
  const phone = $('qPhone').value.trim();
  const email = $('qEmail').value.trim();
  const company = $('qCompany').value.trim();
  const notes = $('qNotes').value.trim();
  const ref = 'SI-Q-' + Math.floor(1000 + Math.random() * 9000);
  const totals = computeTotals();

  const lines = [];
  lines.push(`Cart Request — SHARVED IMPEX`);
  lines.push(`Ref: ${ref}`);
  lines.push('');
  lines.push(`Name: ${name}`);
  lines.push(`Phone: ${phone}`);
  if(email) lines.push(`Email: ${email}`);
  if(company) lines.push(`Company: ${company}`);
  lines.push('');
  lines.push('Items:');
  Object.entries(CART).forEach(([key, item]) => {
    if(item.type === 'package'){
      const pkg = packageById(item.id);
      if(pkg) lines.push(`- ${pkg.name} x ${item.qty} — ${fmtINR(pkg.price * item.qty)} (MRP ${fmtINR(pkg.mrp * item.qty)})`);
    } else if(item.type === 'product'){
      const p = PRODUCTS.find(pr => (pr.sku || pr.name) === item.id);
      if(p) lines.push(`- ${p.name} (${p.pack || ''}) x ${item.qty} — ${fmtINR((parseFloat(p.price) || 0) * item.qty)}`);
    }
  });
  lines.push('');
  lines.push(`Subtotal (MRP): ${fmtINR(totals.subtotal)}`);
  if(totals.discount > 0) lines.push(`Discount: −${fmtINR(totals.discount)}`);
  lines.push(`Final Total: ${fmtINR(totals.final)}`);
  if(notes){ lines.push(''); lines.push(`Notes: ${notes}`); }
  lines.push('');
  lines.push('— Sent via sharvedimpex.com');

  return { text: lines.join('\n'), ref };
}

function logEnquiryToSheet(channel){
  if(!ADMIN_SCRIPT_URL || ADMIN_SCRIPT_URL.indexOf('PASTE_') === 0) return;
  const keys = Object.keys(CART);
  if(!keys.length) return;

  const totals = computeTotals();
  const itemsPayload = keys.map(key => {
    const item = CART[key];
    if(item.type === 'package'){
      const pkg = packageById(item.id);
      return pkg ? { name: pkg.name, sku: pkg.id, pack: pkg.pack || '', qty: item.qty, price: pkg.price, currency: 'INR', lineTotal: (pkg.price * item.qty).toFixed(0) } : null;
    }
    const p = PRODUCTS.find(pr => (pr.sku || pr.name) === item.id);
    return p ? { name: p.name, sku: p.sku || '', pack: p.pack || '', qty: item.qty, price: p.price, currency: p.currency || 'INR', lineTotal: ((parseFloat(p.price) || 0) * item.qty).toFixed(0) } : null;
  }).filter(Boolean);

  const payload = {
    action: 'logEnquiry',
    clientId: CLIENT_ID,
    dataSheetId: DATA_SPREADSHEET_ID,
    folderId: QUOTATIONS_FOLDER_ID,
    name: $('qName').value.trim(),
    phone: $('qPhone').value.trim(),
    email: $('qEmail').value.trim(),
    company: $('qCompany').value.trim(),
    notes: $('qNotes').value.trim(),
    channel,
    items: itemsPayload,
    subtotal: totals.subtotal.toFixed(0),
    discountPercent: totals.subtotal > 0 ? ((totals.discount / totals.subtotal) * 100).toFixed(1) : 0,
    discountAmount: totals.discount.toFixed(0),
    grandTotal: totals.final.toFixed(0),
    currency: 'INR',
    messageText: buildQuoteMessage().text
  };

  fetch(ADMIN_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(payload)
  }).catch(() => {});
}

function sendQuote(channel){
  const errEl = $('qErrorMsg');
  errEl.textContent = '';
  const name = $('qName').value.trim();
  const phone = $('qPhone').value.trim();
  if(!name){ errEl.textContent = 'Please enter your name.'; return; }
  if(!phone){ errEl.textContent = 'Please enter your phone number.'; return; }
  if(!Object.keys(CART).length){ errEl.textContent = 'Add at least one item first.'; return; }

  logEnquiryToSheet(channel);
  const { text } = buildQuoteMessage();

  if(channel === 'WhatsApp'){
    const waNum = getC(CONTENT, 'site.whatsapp') || '918459977048';
    window.open(`https://wa.me/${waNum}?text=${encodeURIComponent(text)}`, '_blank');
  } else {
    const emailTo = getC(CONTENT, 'site.email') || 'consult@sharvedimpex.com';
    window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent('Cart Request — SHARVED IMPEX')}&body=${encodeURIComponent(text)}`;
  }
  showToast(`Cart ready to send via ${channel}`);
}

/* ============================================================
   TOAST
   ============================================================ */
let toastTimer;
function showToast(msg, isError){
  const el = $('qToast');
  if(!el) return;
  el.textContent = msg;
  el.style.background = isError ? '#c0392b' : 'var(--bg-dark)';
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

/* ============================================================
   EXPLORER
   ============================================================ */
function toggleExplorer(force){
  const menu = $('explorerMenu');
  const trig = $('explorerTrigger');
  const open = typeof force === 'boolean' ? force : !menu.classList.contains('open');
  menu.classList.toggle('open', open);
  trig.setAttribute('aria-expanded', open ? 'true' : 'false');
}
function closeExplorer(){ toggleExplorer(false); }

/* ============================================================
   PRODUCTS / CATALOGUE
   ============================================================ */
function loadProducts(){
  const status = $('statusMsg');
  if(status) status.innerHTML = '<span class="status-spinner"></span>Loading products…';
  fetch(SHEETS_URL(SHEET_CONFIG.PRODUCTS_TAB))
    .then(r => r.ok ? r.json() : Promise.reject(new Error(r.status)))
    .then(data => {
      const rows = data.values || [];
      if(rows.length < 2) throw new Error('No products');
      const header = rows[0].map(h => (h || '').trim().toLowerCase().replace(/[\s_]+/g, ''));
      const idx = {
        name: header.findIndex(h => h.includes('productname') || (h.includes('name') && !h.includes('site'))),
        category: header.findIndex(h => h.includes('category') && !h.includes('sub')),
        subcategory: header.findIndex(h => h.includes('subcategory')),
        shortdesc: header.findIndex(h => h.includes('shortdesc')),
        fulldesc: header.findIndex(h => h.includes('fulldesc')),
        specs: header.findIndex(h => h.includes('keyspec') || h.includes('spec')),
        mrp: header.findIndex(h => h === 'mrp'),
        price: header.findIndex(h => h.includes('sellingprice')),
        discount: header.findIndex(h => h.includes('discount')),
        currency: header.findIndex(h => h.includes('currency')),
        status: header.findIndex(h => h.includes('availability') || h.includes('status')),
        image: header.findIndex(h => h.includes('imageurl') || h.includes('image')),
        sku: header.findIndex(h => h.includes('sku') || h.includes('code'))
      };
      const grouped = {};
      const order = [];
      rows.slice(1).forEach(r => {
        const sku = idx.sku >= 0 ? (r[idx.sku] || '').trim() : '';
        const name = idx.name >= 0 ? (r[idx.name] || '').trim() : '';
        const gk = sku || name;
        if(!gk) return;
        if(!grouped[gk]){ grouped[gk] = []; order.push(gk); }
        grouped[gk].push(r);
      });
      PRODUCTS = order.map(gk => {
        const rws = grouped[gk];
        const main = rws.find(r => idx.shortdesc >= 0 && (r[idx.shortdesc] || '').trim()) || rws[0];
        const images = rws.map(r => idx.image >= 0 ? (r[idx.image] || '').trim() : '').filter(Boolean).filter((v, i, a) => a.indexOf(v) === i);
        return {
          name: idx.name >= 0 ? main[idx.name] : 'Unnamed',
          category: idx.category >= 0 ? main[idx.category] : 'Other',
          subcategory: idx.subcategory >= 0 ? main[idx.subcategory] : '',
          pack: idx.specs >= 0 ? main[idx.specs] : '',
          image: images[0] || '',
          images,
          sku: idx.sku >= 0 ? main[idx.sku] : '',
          desc: idx.shortdesc >= 0 ? main[idx.shortdesc] : (idx.fulldesc >= 0 ? main[idx.fulldesc] : ''),
          fulldesc: idx.fulldesc >= 0 ? main[idx.fulldesc] : '',
          specs: idx.specs >= 0 ? main[idx.specs] : '',
          mrp: idx.mrp >= 0 ? main[idx.mrp] : '',
          price: idx.price >= 0 ? main[idx.price] : '',
          discount: idx.discount >= 0 ? main[idx.discount] : '',
          currency: idx.currency >= 0 ? (main[idx.currency] || 'INR') : 'INR',
          status: idx.status >= 0 ? main[idx.status] : ''
        };
      }).filter(p => p.name && p.name.trim());
      renderCategories();
      renderProducts();
      if(status) status.textContent = `${PRODUCTS.length} products loaded.`;
    })
    .catch(err => {
      PRODUCTS = [];
      if(status) status.innerHTML = '⚠️ Could not load products. Please try again later.';
    });
}

function renderCategories(){
  const cats = ['All', ...new Set(PRODUCTS.map(p => p.category || 'Other'))];
  const bar = $('filterBar');
  if(!bar) return;
  bar.innerHTML = cats.map(c => `<button class="filter-pill ${c === ACTIVE_CAT ? 'active' : ''}" data-cat="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('');
  qsa('.filter-pill', bar).forEach(el => {
    el.addEventListener('click', () => { ACTIVE_CAT = el.dataset.cat; renderCategories(); renderProducts(); });
  });
}

function renderProducts(){
  const grid = $('storeGrid');
  if(!grid) return;
  const q = ($('searchInput')?.value || '').toLowerCase();
  let list = PRODUCTS;
  if(ACTIVE_CAT !== 'All') list = list.filter(p => (p.category || 'Other') === ACTIVE_CAT);
  if(q) list = list.filter(p => (p.name + p.desc + p.sku).toLowerCase().includes(q));

  if(!list.length){
    grid.innerHTML = `<div class="blog-empty">No products found. Try a different search or category.</div>`;
    return;
  }

  grid.innerHTML = list.map(p => {
    const key = p.sku || p.name;
    const itemKey = 'prd:' + key;
    const qty = CART[itemKey]?.qty || 0;
    const sym = p.currency === 'USD' ? '$' : p.currency === 'EUR' ? '€' : '₹';
    const thumb = p.image ? `<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}">` : '<svg viewBox="0 0 64 64" fill="#8B93A3" style="width:60px;height:60px"><rect x="16" y="16" width="32" height="32" rx="6"/></svg>';
    const priceRow = (p.price || p.mrp) ? `
      <div class="product-price">
        ${p.price ? `<span class="sp">${sym}${escapeHtml(p.price)}</span>` : ''}
        ${p.mrp && p.mrp !== p.price ? `<span class="mrp">${sym}${escapeHtml(p.mrp)}</span>` : ''}
      </div>` : '';
    return `
      <div class="product-card" onclick="openProductModal('${escapeHtml(key).replace(/'/g, "\\'")}')">
        <div class="product-thumb">${thumb}</div>
        <div class="product-cat">${escapeHtml(p.category || 'Other')}</div>
        <h3>${escapeHtml(p.name)}</h3>
        <div class="product-pack">${escapeHtml(p.pack || '')} ${p.sku ? '· ' + escapeHtml(p.sku) : ''}</div>
        ${priceRow}
        <div class="product-foot" onclick="event.stopPropagation()">
          <span></span>
          <button class="product-add ${qty > 0 ? 'added' : ''}" data-pid="${escapeHtml(key)}" onclick="addProductToCart('${escapeHtml(key).replace(/'/g, "\\'")}')">
            ${qty > 0 ? `✓ Added (${qty})` : '+ Add'}
          </button>
        </div>
      </div>`;
  }).join('');
}

/* ============================================================
   PRODUCT MODAL
   ============================================================ */
function openProductModal(key){
  const p = PRODUCTS.find(pr => (pr.sku || pr.name) === key);
  if(!p) return;
  const sym = p.currency === 'USD' ? '$' : p.currency === 'EUR' ? '€' : '₹';
  const itemKey = 'prd:' + key;
  const qty = CART[itemKey]?.qty || 0;
  LIGHTBOX_IMAGES = p.images && p.images.length ? p.images : (p.image ? [p.image] : []);
  LIGHTBOX_INDEX = 0;

  const thumb = p.image ? `<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}">` : '';
  const longDesc = p.fulldesc || p.desc;

  $('modalBox').innerHTML = `
    <button class="modal-close" onclick="closeModal()">×</button>
    <div class="modal-thumb" onclick="openLightbox()">${thumb}</div>
    <div class="modal-body">
      <div class="product-cat">${escapeHtml(p.category || '')}${p.subcategory ? ' · ' + escapeHtml(p.subcategory) : ''}</div>
      <h2>${escapeHtml(p.name)}</h2>
      <div class="product-pack">${p.sku ? 'SKU: ' + escapeHtml(p.sku) : ''}</div>
      <div class="product-price">
        ${p.price ? `<span class="sp">${sym}${escapeHtml(p.price)}</span>` : ''}
        ${p.mrp && p.mrp !== p.price ? `<span class="mrp">${sym}${escapeHtml(p.mrp)}</span>` : ''}
      </div>
      ${longDesc ? `<div class="modal-desc">${escapeHtml(longDesc)}</div>` : ''}
      ${p.specs ? `<div class="modal-specs"><strong>Key Specs</strong>${escapeHtml(p.specs)}</div>` : ''}
      <div class="modal-foot">
        <div class="modal-qty">
          ${qty > 0 ? `<button onclick="changeCartQty('${itemKey}',-1);openProductModal('${escapeHtml(key).replace(/'/g, "\\'")}')">−</button><span>${qty}</span><button onclick="changeCartQty('${itemKey}',1);openProductModal('${escapeHtml(key).replace(/'/g, "\\'")}')">+</button>` : ''}
        </div>
        <button class="modal-add ${qty > 0 ? 'added' : ''}" onclick="addProductToCart('${escapeHtml(key).replace(/'/g, "\\'")}');openProductModal('${escapeHtml(key).replace(/'/g, "\\'")}')">
          ${qty > 0 ? '✓ Added to Cart' : '+ Add to Cart'}
        </button>
      </div>
    </div>`;
  $('modalOverlay').classList.add('open');
}

function closeModal(){ $('modalOverlay').classList.remove('open'); }
function openLightbox(){
  if(!LIGHTBOX_IMAGES.length) return;
  $('lightboxImg').src = LIGHTBOX_IMAGES[LIGHTBOX_INDEX];
  $('lightbox').classList.add('open');
  const showNav = LIGHTBOX_IMAGES.length > 1;
  $('lbPrev').style.display = showNav ? 'block' : 'none';
  $('lbNext').style.display = showNav ? 'block' : 'none';
}
function closeLightbox(){ $('lightbox').classList.remove('open'); }
function lightboxNav(delta){
  LIGHTBOX_INDEX = (LIGHTBOX_INDEX + delta + LIGHTBOX_IMAGES.length) % LIGHTBOX_IMAGES.length;
  $('lightboxImg').src = LIGHTBOX_IMAGES[LIGHTBOX_INDEX];
}

/* ============================================================
   TEAM / PARTNERS / VISIT
   ============================================================ */
function loadTeam(){
  const grid = $('teamGrid');
  if(!grid || grid.dataset.loaded) return;
  fetch(SHEETS_URL(SHEET_CONFIG.TEAM_TAB))
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(data => {
      const rows = data.values || [];
      if(rows.length < 2){ grid.innerHTML = '<div class="team-empty">Team info coming soon.</div>'; return; }
      const header = rows[0].map(h => (h || '').trim().toLowerCase());
      const idx = { name: header.indexOf('name'), role: header.indexOf('role'), photo: header.indexOf('photo'), bio: header.indexOf('bio') };
      const members = rows.slice(1).map(r => ({
        name: idx.name >= 0 ? (r[idx.name] || '').trim() : '',
        role: idx.role >= 0 ? (r[idx.role] || '').trim() : '',
        photo: idx.photo >= 0 ? (r[idx.photo] || '').trim() : '',
        bio: idx.bio >= 0 ? (r[idx.bio] || '').trim() : ''
      })).filter(m => m.name);
      if(!members.length){ grid.innerHTML = '<div class="team-empty">Team info coming soon.</div>'; return; }
      grid.innerHTML = members.map(m => `
        <div class="team-member">
          <div class="team-photo">${m.photo ? `<img src="${escapeHtml(toDirectImageUrl(m.photo))}" alt="${escapeHtml(m.name)}">` : ''}</div>
          <div class="team-name">${escapeHtml(m.name)}</div>
          ${m.role ? `<div class="team-role">${escapeHtml(m.role)}</div>` : ''}
        </div>`).join('');
      grid.dataset.loaded = '1';
    })
    .catch(() => { grid.innerHTML = '<div class="team-empty">Could not load team.</div>'; });
}

function loadPartnersBand(){
  const band = $('partnersBand');
  if(!band || band.dataset.loaded) return;
  fetch(SHEETS_URL(SHEET_CONFIG.PARTNERS_TAB))
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(data => {
      const rows = data.values || [];
      if(rows.length < 2){ band.innerHTML = '<span class="partner-empty">Partners coming soon.</span>'; return; }
      const header = rows[0].map(h => (h || '').trim().toLowerCase());
      const idx = { name: header.indexOf('name'), logo: header.indexOf('logo') };
      const partners = rows.slice(1).map(r => ({
        name: idx.name >= 0 ? (r[idx.name] || '').trim() : '',
        logo: idx.logo >= 0 ? (r[idx.logo] || '').trim() : ''
      })).filter(p => p.name);
      band.innerHTML = partners.map(p => p.logo ? `<img src="${escapeHtml(toDirectImageUrl(p.logo))}" alt="${escapeHtml(p.name)}">` : `<span class="partner-empty">${escapeHtml(p.name)}</span>`).join('');
      band.dataset.loaded = '1';
      // Footer partners list
      const fp = $('footerPartnerList');
      if(fp) fp.innerHTML = partners.slice(0, 5).map(p => `<a href="#" onclick="return false">${escapeHtml(p.name)}</a>`).join('');
    })
    .catch(() => { band.innerHTML = '<span class="partner-empty">Could not load partners.</span>'; });
}

function loadVisitInfo(){
  const addr = $('visitAddress');
  const map = $('visitMap');
  if(addr) addr.textContent = getC(CONTENT, 'site.address') || 'Address on request — reach out via WhatsApp or email.';
  if(map) map.style.display = 'none';
}

/* ============================================================
   BLOG
   ============================================================ */
function slugify(s){ return (s || '').toString().toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }

function loadPosts(){
  fetch(SHEETS_URL(SHEET_CONFIG.BLOG_TAB))
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(data => {
      const rows = data.values || [];
      if(rows.length < 2){ ALL_POSTS = []; renderBlog(); return; }
      const header = rows[0].map(h => (h || '').trim().toLowerCase());
      const idx = {
        title: header.indexOf('title'),
        slug: header.indexOf('slug'),
        date: header.indexOf('date'),
        topic: header.indexOf('topic'),
        excerpt: header.indexOf('excerpt'),
        cover: header.indexOf('cover image') >= 0 ? header.indexOf('cover image') : header.indexOf('cover')
      };
      ALL_POSTS = rows.slice(1).map(r => ({
        title: idx.title >= 0 ? (r[idx.title] || '').trim() : '',
        slug: idx.slug >= 0 ? (r[idx.slug] || '').trim() : '',
        date: idx.date >= 0 ? (r[idx.date] || '').trim() : '',
        topic: idx.topic >= 0 ? (r[idx.topic] || '').trim() : 'General',
        excerpt: idx.excerpt >= 0 ? (r[idx.excerpt] || '').trim() : '',
        cover: idx.cover >= 0 ? (r[idx.cover] || '').trim() : ''
      })).filter(p => p.title).map(p => ({ ...p, slug: p.slug || slugify(p.title) }));
      renderTopicPills();
      renderBlog();
    })
    .catch(() => { $('postsGrid').innerHTML = '<div class="blog-empty">Could not load posts.</div>'; });
}

function renderTopicPills(){
  const wrap = $('topicPills');
  if(!wrap) return;
  const topics = ['All', ...new Set(ALL_POSTS.map(p => p.topic).filter(Boolean))];
  wrap.innerHTML = topics.map(t => `<button class="topic-pill ${t === ACTIVE_TOPIC ? 'active' : ''}" data-topic="${escapeHtml(t)}">${escapeHtml(t)}</button>`).join('');
  qsa('.topic-pill', wrap).forEach(el => {
    el.addEventListener('click', () => { ACTIVE_TOPIC = el.dataset.topic; renderTopicPills(); renderBlog(); });
  });
}

function renderBlog(){
  const q = ($('blogSearch')?.value || '').toLowerCase().trim();
  let posts = ALL_POSTS.filter(p => ACTIVE_TOPIC === 'All' || p.topic === ACTIVE_TOPIC);
  if(q) posts = posts.filter(p => (p.title + ' ' + p.excerpt).toLowerCase().includes(q));

  const featuredWrap = $('featuredWrap');
  const grid = $('postsGrid');

  if(!posts.length){
    featuredWrap.innerHTML = '';
    grid.innerHTML = `<div class="blog-empty">No posts yet. Check back soon.</div>`;
    return;
  }

  const showFeatured = !q && ACTIVE_TOPIC === 'All' && posts.length > 1;
  const featured = showFeatured ? posts[0] : null;
  const rest = showFeatured ? posts.slice(1) : posts;

  featuredWrap.innerHTML = featured ? `
    <a class="featured-post" href="#blog/${encodeURIComponent(featured.slug)}">
      <div>
        <span class="featured-tag">${escapeHtml(featured.topic)}</span>
        <h2>${escapeHtml(featured.title)}</h2>
        ${featured.excerpt ? `<div class="post-excerpt">${escapeHtml(featured.excerpt)}</div>` : ''}
        ${featured.date ? `<div class="post-date">${escapeHtml(featured.date)}</div>` : ''}
      </div>
      <div class="featured-cover">${featured.cover ? `<img src="${escapeHtml(toDirectImageUrl(featured.cover))}" alt="${escapeHtml(featured.title)}">` : ''}</div>
    </a>` : '';

  grid.innerHTML = rest.map(p => `
    <a class="post-card" href="#blog/${encodeURIComponent(p.slug)}">
      <div class="post-cover">${p.cover ? `<img src="${escapeHtml(toDirectImageUrl(p.cover))}" alt="${escapeHtml(p.title)}">` : ''}</div>
      <div class="post-topic">${escapeHtml(p.topic)}</div>
      <div class="post-title">${escapeHtml(p.title)}</div>
      ${p.excerpt ? `<div class="post-excerpt">${escapeHtml(p.excerpt)}</div>` : ''}
      ${p.date ? `<div class="post-date">${escapeHtml(p.date)}</div>` : ''}
    </a>`).join('');
}

function loadPost(slug){
  const wrap = $('postContent');
  if(!wrap) return;
  wrap.innerHTML = 'Loading…';
  fetch(SHEETS_URL(SHEET_CONFIG.BLOG_TAB))
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(data => {
      const rows = data.values || [];
      if(rows.length < 2) throw new Error('empty');
      const header = rows[0].map(h => (h || '').trim().toLowerCase());
      const idx = {
        title: header.indexOf('title'),
        slug: header.indexOf('slug'),
        date: header.indexOf('date'),
        topic: header.indexOf('topic'),
        excerpt: header.indexOf('excerpt'),
        cover: header.indexOf('cover image') >= 0 ? header.indexOf('cover image') : header.indexOf('cover'),
        content: header.indexOf('content')
      };
      const posts = rows.slice(1).map(r => ({
        title: idx.title >= 0 ? (r[idx.title] || '').trim() : '',
        slug: idx.slug >= 0 ? (r[idx.slug] || '').trim() : '',
        date: idx.date >= 0 ? (r[idx.date] || '').trim() : '',
        topic: idx.topic >= 0 ? (r[idx.topic] || '').trim() : 'General',
        excerpt: idx.excerpt >= 0 ? (r[idx.excerpt] || '').trim() : '',
        cover: idx.cover >= 0 ? (r[idx.cover] || '').trim() : '',
        content: idx.content >= 0 ? (r[idx.content] || '').trim() : ''
      })).filter(p => p.title).map(p => ({ ...p, slug: p.slug || slugify(p.title) }));
      const post = posts.find(p => p.slug === slug);
      if(!post){
        wrap.innerHTML = '<div class="not-found">Post not found. <a href="#blog">← Back to blog</a></div>';
        return;
      }
      document.title = post.title + ' — SHARVED IMPEX';
      const paragraphs = (post.content || post.excerpt || '').split(/\n\s*\n/).filter(Boolean);
      wrap.innerHTML = `
        <span class="post-hero-tag">${escapeHtml(post.topic)}</span>
        <h1 class="post-h1">${escapeHtml(post.title)}</h1>
        ${post.date ? `<div class="post-meta">${escapeHtml(post.date)}</div>` : ''}
        ${post.cover ? `<div class="post-cover-full"><img src="${escapeHtml(toDirectImageUrl(post.cover))}" alt="${escapeHtml(post.title)}"></div>` : ''}
        <div class="post-body">${paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join('') || '<p>Content coming soon.</p>'}</div>`;
    })
    .catch(() => { wrap.innerHTML = '<div class="not-found">Could not load post. <a href="#blog">← Back to blog</a></div>'; });
}

/* ============================================================
   REVEAL
   ============================================================ */
let revealObserver;
function initReveal(){
  if(revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  qsa('.reveal, .reveal-left, .reveal-right').forEach(el => revealObserver.observe(el));
}

/* ============================================================
   PROCESS LINE
   ============================================================ */
function updateProcess(){
  const wrap = document.querySelector('.page.active .process-wrap');
  const fill = wrap ? wrap.querySelector('.process-line-fill') : null;
  if(!wrap || !fill) return;
  const rect = wrap.getBoundingClientRect();
  const total = rect.height;
  const scrolled = Math.min(Math.max(window.innerHeight * 0.5 - rect.top, 0), total);
  fill.style.height = (scrolled / total) * 100 + '%';
  qsa('.step', wrap).forEach(step => {
    const r = step.getBoundingClientRect();
    step.classList.toggle('active', r.top < window.innerHeight * 0.65 && r.bottom > window.innerHeight * 0.3);
  });
}

/* ============================================================
   THEME HELPERS (festive vs pro is route-driven)
   ============================================================ */
// data-mode is set on <html> by applyRoute — no manual switcher

/* ============================================================
   PALETTE SWITCHER
   ============================================================ */
function applyPalette(name){
  if(!PALETTES.includes(name)) name = 'midnight';
  document.documentElement.setAttribute('data-palette', name);
  qsa('.theme-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.paletteSet === name);
  });
  try{ localStorage.setItem(PALETTE_KEY, name); }catch(e){}
}

function setPalette(name){
  applyPalette(name);

  const labels = {
    auto:     'Auto — follows page',
    midnight: 'Midnight — Navy & Gold',
    festive:  'Festive — Copper',
    sunset:   'Sunset — Coral',
    forest:   'Forest — Green',
    mono:     'Mono — Black & Neon',
    pastel:   'Pastel — Lavender'
  };
  showToast(labels[name] || 'Theme updated');
}

function togglePaletteList(force){
  const list = $('themeList');
  const fab = $('themeFab');
  if(!list || !fab) return;
  const open = typeof force === 'boolean' ? force : !list.classList.contains('open');
  list.classList.toggle('open', open);
  fab.classList.toggle('open', open);
  fab.setAttribute('aria-expanded', open ? 'true' : 'false');
}

function wirePaletteDock(){
  const fab = $('themeFab');
  const list = $('themeList');
  if(!fab || !list) return;

  // Restore saved palette on boot
  let saved = 'midnight';
  try{ saved = localStorage.getItem(PALETTE_KEY) || 'midnight'; }catch(e){}
  applyPalette(saved);

  // FAB toggles the list
  fab.addEventListener('click', e => {
    e.stopPropagation();
    togglePaletteList();
  });

  // Each swatch selects a palette and closes the list
  list.addEventListener('click', e => {
    e.stopPropagation();
    const btn = e.target.closest('.theme-item');
    if(!btn) return;
    const name = btn.dataset.paletteSet;
    setPalette(name);
    setTimeout(() => togglePaletteList(false), 300);
  });

  // Click outside closes
  document.addEventListener('click', e => {
    if(!e.target.closest('#themeDock')) togglePaletteList(false);
  });

  // Escape closes
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape') togglePaletteList(false);
  });
}

/* ============================================================
   SCROLL HANDLER
   ============================================================ */
function onScroll(){
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const bar = $('scrollProgress');
  if(bar) bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';

  const route = getRoute().name;
  const nav = $('nav');
  const explorer = $('explorer');

  if(route === 'home'){
    const hero = document.querySelector('.festive-hero');
    const heroBottom = hero ? hero.offsetHeight - 100 : 500;
    // Nav solid after scrolling past hero top
    if(window.scrollY > 60){
      nav.classList.remove('transparent');
      nav.classList.add('solid');
    } else {
      nav.classList.add('transparent');
      nav.classList.remove('solid');
    }
    // Explorer appears after hero
    if(explorer){
      if(window.scrollY > heroBottom - 200){
        explorer.classList.add('visible');
      } else {
        explorer.classList.remove('visible');
        closeExplorer();
      }
    }
  }

  updateProcess();
}

/* ============================================================
   CONFIG LOAD (via Apps Script)
   ============================================================ */
function loadConfig(){
  if(!ADMIN_SCRIPT_URL || ADMIN_SCRIPT_URL.indexOf('PASTE_') === 0) return Promise.resolve();
  const url = `${ADMIN_SCRIPT_URL}?action=getConfig&clientId=${encodeURIComponent(CLIENT_ID)}`;
  return fetch(url)
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(res => {
      if(!res || !res.success || !res.config) return;
      Object.keys(res.config).forEach(k => {
        const key = k.trim().toUpperCase();
        const val = (res.config[k] || '').toString().trim();
        if(!val) return;
        if(key === 'WA_NUMBER') CONTENT.site.whatsapp = val.replace(/\D/g, '');
        if(key === 'EMAIL') CONTENT.site.email = val;
        if(key === 'PHONE_DISPLAY') CONTENT.site.phoneDisplay = val;
        if(key === 'ADDRESS') CONTENT.site.address = val;
        if(key === 'COMPANY_NAME') CONTENT.site.company = val;
      });
      applyDynamicLinks();
    })
    .catch(() => {});
}

function applyDynamicLinks(){
  const email = getC(CONTENT, 'site.email');
  const phone = getC(CONTENT, 'site.phone');
  const wa = getC(CONTENT, 'site.whatsapp');
  const waMsg = encodeURIComponent(getC(CONTENT, 'site.waMessage') || 'Hi, I want to know more.');
  ['finalContact1'].forEach(id => { const el = $(id); if(el) el.href = `mailto:${email}`; });
  const fc = $('finalContactEmail'); if(fc) fc.href = `mailto:${email}`;
  const fp = $('finalContactPhone'); if(fp) fp.href = `tel:${phone}`;
  const fce = $('footerContactEmail'); if(fce) fce.href = `mailto:${email}`;
  const fcp = $('footerContactPhone'); if(fcp) fcp.href = `tel:${phone}`;
  const fcwa = $('footerContactWa'); if(fcwa) fcwa.href = `https://wa.me/${wa}?text=${waMsg}`;
  const waFloat = $('waFloat'); if(waFloat) waFloat.href = `https://wa.me/${wa}?text=${waMsg}`;
}

/* ============================================================
   FOOTER CONTACT
   ============================================================ */
function wireContactForm(){
  const form = $('contactForm');
  if(!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = $('cfSubmitBtn');
    const msg = $('cfMsg');
    btn.disabled = true; btn.textContent = 'Sending…';
    msg.textContent = ''; msg.className = 'contact-msg';
    const payload = {
      action: 'logEnquiry',
      clientId: CLIENT_ID,
      dataSheetId: DATA_SPREADSHEET_ID,
      channel: 'contact-form',
      name: $('cfName').value.trim(),
      email: $('cfEmail').value.trim(),
      phone: $('cfPhone').value.trim(),
      notes: $('cfMessage').value.trim(),
      messageText: $('cfMessage').value.trim(),
      items: []
    };
    fetch(ADMIN_SCRIPT_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(payload) })
      .then(r => r.json())
      .then(res => {
        if(res && res.success){
          msg.textContent = "Message sent — we'll be in touch soon.";
          msg.className = 'contact-msg success';
          form.reset();
        } else {
          msg.textContent = 'Something went wrong. Try WhatsApp instead.';
          msg.className = 'contact-msg error';
        }
      })
      .catch(() => {
        msg.textContent = 'Network error. Try WhatsApp instead.';
        msg.className = 'contact-msg error';
      })
      .finally(() => { btn.disabled = false; btn.textContent = 'Send message'; });
  });
}

/* ============================================================
   BOOT
   ============================================================ */
function renderAll(){
  renderStatic();
  renderNav();
  renderMarquee();
  renderPainQuestions('painQuestions');
  renderPainQuestions('proPainQuestions');
  renderServicesPricing('servicesPricingGrid');
  renderServicesPricing('proServicesGrid');
  renderApproach('approachFlow');
  renderApproach('proApproachFlow');
  renderWhyCards('whyCards');
  renderWhyCards('proWhyCards');
  renderSteps('stepsWrap');
  renderSteps('proStepsWrap');
  renderWho();
  renderFaq('faqList');
  renderFaq('proFaqList');
  renderGaneshaItems();
  buildPackages();
  applyDynamicLinks();
  initCountdown();
  initReveal();
  updateProcess();
  updateCartCount();
  updateCardStates();
  updateCartDrawer();
}

function wireEvents(){
  // Nav
  $('navCartBtn')?.addEventListener('click', openCartDrawer);
  const burger = $('burger');
  const mobile = $('mobileMenu');
  burger?.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    mobile.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobile?.addEventListener('click', e => {
    if(e.target.tagName === 'A'){
      burger.classList.remove('open');
      mobile.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Explorer
  $('explorerTrigger')?.addEventListener('click', (e) => { e.stopPropagation(); toggleExplorer(); });
  $('explorerClose')?.addEventListener('click', (e) => { e.stopPropagation(); closeExplorer(); });
  $('explorerMenu')?.addEventListener('click', e => {
    e.stopPropagation();
    if(e.target.tagName === 'A') closeExplorer();
  });
  document.addEventListener('click', e => {
    if(!e.target.closest('#explorer')) closeExplorer();
  });

  // Cart drawer
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape'){ closeCartDrawer(); closeModal(); closeLightbox(); closeExplorer(); }
    if(e.key === 'ArrowRight' && $('lightbox').classList.contains('open')) lightboxNav(1);
    if(e.key === 'ArrowLeft' && $('lightbox').classList.contains('open')) lightboxNav(-1);
  });
  $('lbPrev')?.addEventListener('click', e => { e.stopPropagation(); lightboxNav(-1); });
  $('lbNext')?.addEventListener('click', e => { e.stopPropagation(); lightboxNav(1); });

  // Search inputs
  $('searchInput')?.addEventListener('input', renderProducts);
  $('blogSearch')?.addEventListener('input', renderBlog);

  // Contact form
  wireContactForm();

  // Scroll
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateProcess);

  // Route
  window.addEventListener('hashchange', applyRoute);
}

function boot(){
  document.documentElement.setAttribute('data-mode', 'festive');
  document.documentElement.setAttribute('data-palette', 'midnight');
  document.body.setAttribute('data-route', 'home');
  const year = $('year'); if(year) year.textContent = new Date().getFullYear();

  renderAll();
  wireEvents(); 
  wirePaletteDock();   
  applyRoute();
  onScroll();

  // Fetch content from sheet
  fetch(SHEETS_URL(SHEET_CONFIG.CONTENT_TAB))
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(data => {
      const rows = data.values || [];
      if(rows.length < 2) return;
      const content = JSON.parse(JSON.stringify(FALLBACK));
      rows.slice(1).forEach(row => {
        const section = (row[0] || '').trim();
        const key = (row[1] || '').trim();
        const value = row[2] !== undefined ? row[2] : '';
        if(!section || !key) return;
        if(!content[section]) content[section] = {};
        if(value !== '') content[section][key] = value;
      });
      CONTENT = content;
      renderAll();
      applyRoute();
    })
    .catch(err => console.warn('Using fallback content:', err.message));

  // Load config in parallel
  loadConfig();
}

if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();