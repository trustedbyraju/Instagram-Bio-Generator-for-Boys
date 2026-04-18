/* ============================================================
   Instagram Bio Generator for Boys — script.js
   Author: TrustedByRaju | 2026
   ============================================================ */

/* ── Bio Database (100+ bios, 5 categories × 20+ each) ─────── */
const BIO_DATA = {

  attitude: [
    `😤 {name} | Born to Rule\n🔥 My vibe, my rules\n👑 Kings don't explain themselves\n⚡ Level up or stay behind`,
    `😎 {name} — No Apologies\n🗡️ Silence is my loudest answer\n💀 Last person you want as an enemy\n🔥 Built different, live different`,
    `👊 {name} | Raw & Real\n🚫 Not everyone deserves my time\n🔥 Attitude sharper than your opinion\n⚡ I don't follow crowds — I build them`,
    `😤 {name}\n💪 Made of steel, heart of gold\n🔥 My silence > your noise\n👑 Respect earned, never asked`,
    `⚡ {name} | Unapologetic\n😒 Soft boys stay away\n🔥 Fuel on fire. Zero regrets.\n🦁 Lion mentality. Village dreams.`,
    `🔱 {name} — King Energy Only\n😤 Opinions about me? Keep them.\n💥 I hit different and I know it\n⚡ Powered by ambition & attitude`,
    `😤 {name}\n🚫 Not your type? Good.\n🔥 Average is a disease I refuse\n👑 Crown adjusted. World conquered.`,
    `💀 {name} | Zero Filter\n😎 Selectively ruthless\n🔥 Built from failures, fueled by fire\n⚡ Wake up. Level up. Repeat.`,
    `🦅 {name} — Untamed\n😤 Born to dominate, not to please\n🔥 Cut from a different cloth\n👊 Don't test my patience`,
    `⚡ {name}\n🔱 Empire mindset since day one\n😤 Not bitter — just better\n🔥 Trouble finds me because I'm interesting`,
    `😎 {name} | No BS Zone\n💀 I outgrow people fast\n🔥 Reputation: dangerous\n⚡ Status: unbothered`,
    `👑 {name} — Dangerous Calm\n😤 Quiet until it's time to roar\n🔥 I build different, I live different\n🚫 Entry restricted`,
    `🔥 {name}\n😤 My story ain't finished yet\n💪 Sweat now. Flex later.\n👑 Zero followers needed — I lead`,
    `⚡ {name} | Beast Mode\n😒 Too real for fake people\n🔥 Winning is a habit here\n💀 Don't mistake calm for weakness`,
    `🦁 {name} — Raw Edition\n😤 I don't compete. I dominate.\n🔥 My energy is premium\n👑 Respect or stay away`,
    `💥 {name}\n🚫 Not here to impress anyone\n😤 King without a throne? Still a king\n🔥 Ice in my veins. Fire in my heart.`,
    `😎 {name} | Unbothered\n⚡ Opinions deleted automatically\n🔥 Born rare. Living loud.\n👊 Attitude certified`,
    `🔱 {name} — Self Made\n😤 No handouts. No shortcuts.\n💥 Pressure creates diamonds & me\n🔥 Watch the quiet ones`,
    `⚡ {name}\n😤 Too focused for distractions\n🦅 Eagles don't flock\n👑 Throne taken. Quietly.`,
    `🔥 {name} | No Limits\n😎 My vibe screams what my voice doesn't\n💀 Chaos? I call it Tuesday.\n⚡ Born to stand out`,
  ],

  cute: [
    `🥰 {name} | Life Lover\n🌸 Chasing sunsets & good vibes\n🎵 Music is my therapy\n✨ Just a boy with big dreams`,
    `😊 {name}\n🌻 Positive vibes only here\n🎮 Gamer by night, dreamer by day\n💛 Spreading kindness like confetti`,
    `🤗 {name} | Wholesome Energy\n📖 Bookworm with a wild side\n🌈 Finding magic in ordinary days\n💛 Dog dad material`,
    `😄 {name}\n🍕 Pizza > everything\n🎬 Movie quotes are my love language\n💙 Soft heart, strong mind`,
    `🥰 {name} | Gentle Soul\n🌸 Making memories one day at a time\n🎵 Playlist curator extraordinaire\n✨ Grateful for the small stuff`,
    `😊 {name}\n🌟 Turning dreams into plans\n☕ Coffee first, adulting after\n💛 Heart full, pockets empty, still happy`,
    `🤗 {name} | Simple Joys\n🌻 Lover of late-night conversations\n🎮 Games & good food = perfect day\n💙 Just trying to be someone's favorite`,
    `😄 {name}\n🎵 Singing in the shower > concerts\n🌈 Glass half full, always\n✨ Here to make you smile`,
    `🥰 {name} | Sunshine Mode\n🌸 Homebody with wandering thoughts\n📸 Memories > things\n💛 Pet lover & proud`,
    `😊 {name}\n🌟 Fueled by curiosity & chai\n🎬 Bollywood soul in a Gen Z body\n💙 Making today count`,
    `🤗 {name} | Good Vibes\n☀️ Morning person learning to enjoy nights\n🎵 Life sounds better with music\n✨ Chasing joy, not perfection`,
    `🥰 {name}\n🌻 Best served with laughter\n🍦 Ice cream solves everything\n💛 Your friendly neighborhood good guy`,
    `😄 {name} | Genuine Soul\n🌸 Heart bigger than my Instagram\n🎮 Player 1 in this game of life\n💙 Proud mama's boy`,
    `😊 {name}\n🌟 Adventures > possessions\n☕ Mornings with coffee & no alarm\n✨ Spreading good energy daily`,
    `🤗 {name} | Chill Edition\n🎵 Vibes: soft + cozy\n🌈 Collecting moments, not things\n💛 Will share my fries with you`,
    `🥰 {name}\n🌸 Fluent in sarcasm & kindness\n📖 Story still being written\n💙 Plot twist every chapter`,
    `😄 {name} | Happy Soul\n☀️ Grateful. Growing. Glowing.\n🎮 Multiplayer life unlocked\n✨ Love given freely here`,
    `😊 {name}\n🌻 Certified overthinker & food lover\n🎵 Emotions expressed through playlists\n💛 Forever choosing happiness`,
    `🤗 {name} | Pure Intentions\n🌸 My hugs are free and unlimited\n☕ Caffeine-powered optimist\n✨ Just being me, nothing less`,
    `🥰 {name}\n🌟 Zero drama, 100% genuine\n🎬 Would rather be watching movies\n💙 Soft spoken, deeply felt`,
  ],

  stylish: [
    `💎 {name} | Timeless\n🌐 Global mindset. Local roots.\n✈️ Passport stamped. Lessons learned.\n💫 Crafting a life worth envying`,
    `🖤 {name} — Elevated\n💎 Less noise. More results.\n🎯 Precision over perfection\n✨ Taste is everything`,
    `💫 {name} | Designer Life\n🖤 Style is silent confidence\n💎 Details matter. Always.\n🌐 Creating, not copying`,
    `✨ {name}\n🎯 Goals dressed in Gucci\n💎 Subtle flex, loud impact\n🖤 Not a phase — a standard`,
    `💎 {name} — Premium Edition\n✨ My aesthetic is non-negotiable\n🌐 International taste, local hustle\n🎯 Every day on purpose`,
    `🖤 {name} | Statement\n💫 I don't chase trends — I set them\n💎 Curated life, curated feed\n✨ Less talk, more craft`,
    `💫 {name}\n🎯 Sharp mind. Sharper style.\n🖤 Minimal words. Maximum presence.\n💎 Standards higher than my follower count`,
    `✨ {name} | Polished\n💎 Living well is the best fashion\n🌐 Built my brand from zero\n🎯 Every move is intentional`,
    `💎 {name} — Refined\n🖤 Outfit: on point. Mindset: elite.\n✨ Never loud. Always heard.\n💫 The upgrade was always internal`,
    `🌐 {name}\n💎 Crafting legacy, not just content\n🎯 Focused. Fashionable. Forward.\n✨ Edit your life like your feed`,
    `🖤 {name} | Next Level\n💫 Quiet ambition. Visible results.\n💎 Dressing thoughts as sharply as looks\n✨ Quality over everything`,
    `💎 {name} — Iconic\n🌐 Built for global stages\n🎯 Playing long game in a short-attention world\n🖤 Effortlessly ahead`,
    `✨ {name}\n💎 Self-styled. Self-defined.\n🖤 The vibe was always premium\n💫 Turning vision into reality, daily`,
    `💫 {name} | Signature\n🎯 Attention to detail: obsessive\n💎 The brand is me\n✨ Consistently consistent`,
    `🖤 {name} — Curator\n💎 Life = a gallery. I own every piece.\n🌐 Creating culture, not consuming it\n✨ Stay inspired, stay ahead`,
    `💎 {name}\n🎯 Fashion, focus, future — in that order\n🖤 Reserved for the right crowd\n✨ Excellence is the minimum standard`,
    `💫 {name} | Aesthetic AF\n💎 Mono wardrobe. Colorful mind.\n🌐 Where vision meets execution\n🖤 The details are everything`,
    `✨ {name} — Sharp\n💎 Style communicates what words can't\n🎯 Deliberate in every decision\n💫 Built to be remembered`,
    `🖤 {name}\n💎 Premium taste. Budget? Unlimited.\n🌐 Global citizen with designer dreams\n✨ Styled for the life ahead`,
    `💎 {name} | Elevated Standard\n🎯 Excellence is not optional here\n🖤 Sophisticated silence hits harder\n✨ Signature energy. Unmissable.`,
  ],

  vip: [
    `👑 {name} | The Elite\n💰 Money mindset. Boss moves.\n🌐 Closed doors don't stop me\n⚡ VIP access — by default`,
    `🏆 {name} — CEO Energy\n👑 Building empires, not excuses\n💎 Luxury is a mindset first\n🔱 The throne was always mine`,
    `👑 {name}\n🌐 First class or don't fly\n💰 Hustle until your bank statement smiles\n🏆 Won't stop. Can't stop.`,
    `💰 {name} | No Limits\n👑 Born to lead, not to follow\n🔱 Empire in progress. Watch.\n⚡ My network = my net worth`,
    `🏆 {name} — Big League\n👑 Winners don't wait for chances\n💰 Building in silence. Celebrating in thunder.\n🌐 VIP life wasn't given — built`,
    `👑 {name}\n🔱 I don't dream. I plan.\n💰 Cash flow > followers\n🏆 Boardrooms and rooftops — my habitat`,
    `⚡ {name} | Power Moves\n👑 The name speaks for itself\n💎 Status: Elevated\n🏆 Results on the scoreboard, not the caption`,
    `💰 {name} — The Operator\n🔱 Turning vision into velocity\n👑 Premium people only\n⚡ Doing what others won't — living what others dream`,
    `🏆 {name}\n👑 Legacy builder. Moment maker.\n💰 Expensive taste, exponential grind\n🌐 Not rich yet — but the plan is in motion`,
    `👑 {name} | Exclusive\n⚡ My circle: small, smart, successful\n💰 Money is just the scorecard\n🏆 The real win is who I'm becoming`,
    `🔱 {name} — Sovereign\n👑 Rules? I wrote mine.\n💰 Millionaire mindset in a 20-something body\n⚡ Every sacrifice is a down payment`,
    `💰 {name}\n🏆 Not overnight success — overnight prep\n👑 CEO of my own life since birth\n🌐 Leveling up is non-negotiable`,
    `👑 {name} | Top Tier\n🔱 Playing chess while others play checkers\n💰 Broke is temporary. Boss is forever.\n⚡ Standard: absolutely nothing less`,
    `🏆 {name} — Executive Class\n💎 Excellence: the baseline, not the goal\n👑 Meeting rooms and milestones\n💰 Investing in the man in the mirror first`,
    `⚡ {name}\n🔱 Built by sacrifice. Polished by pain.\n👑 The empire is coming — watch the timeline\n💰 Zero shortcuts. All receipts.`,
    `👑 {name} | Legacy Mode\n🌐 Creating generational wealth and stories\n🏆 The benchmark for my own standard\n💰 Sky? Moved the ceiling higher.`,
    `💰 {name} — Chairman\n👑 Seat at the table? I built the table.\n⚡ Presence felt before entering\n🔱 Premium by design`,
    `🏆 {name}\n👑 My passport does more work than my doubters\n💰 Revenue > Revenue excuses\n🌐 Boardroom body language everywhere`,
    `👑 {name} | Mogul Mentality\n⚡ In a world of followers — I set pace\n💰 Generational thinking in a viral world\n🔱 The vision is always 10 years ahead`,
    `💰 {name} — The Standard\n🏆 Not the loudest in the room — the most capable\n👑 Excellence is the dress code here\n⚡ VIP isn't a tag. It's a truth.`,
  ],

  aesthetic: [
    `🌙 {name}\n☁️ Living in daydreams & lo-fi beats\n🌿 Somewhere between lost and found\n✨ Chasing the version of me I haven't met yet`,
    `🍂 {name} | Soft Hours\n🌙 Overthinking in cinematic quality\n🎞️ My life: a film nobody else can direct\n☁️ Finding poetry in the ordinary`,
    `🌙 {name} — Deep Space\n✨ The universe is inside me\n🌿 Growing slowly. Glowing quietly.\n🍂 Autumn soul in a summer world`,
    `☁️ {name}\n🎞️ Collecting beautiful moments\n🌙 Stars, silence, and self-discovery\n✨ Written in light, not in fear`,
    `🌿 {name} | Still Waters\n🌙 Inner world bigger than the outer\n🍂 Falling apart is just rearranging\n☁️ Creating art from chaos`,
    `🎞️ {name} — Frame by Frame\n🌙 Life as a slow cinema\n✨ Beauty found in ordinary Tuesdays\n🌿 Roots deep. Branches free.`,
    `🌙 {name}\n☁️ Moon energy. Sun ambitions.\n🎞️ Every scar: a plot twist\n✨ The quiet ones carry the loudest stories`,
    `🍂 {name} | Introspection\n🌙 Losing track of time in the right places\n🌿 I bloom when no one's watching\n☁️ Soul made of old songs`,
    `✨ {name} — Wandering\n🎞️ Between pages of a life story\n🌙 Depth that only moonlight understands\n🍂 Feeling everything too deeply`,
    `🌿 {name}\n☁️ Growing in silence\n🌙 Aesthetic of someone who reads at midnight\n✨ Half here. Half in my thoughts.`,
    `🎞️ {name} | Film Grain\n🍂 Found in the fall of things\n🌙 A soul comfortable with impermanence\n✨ Creating from the overflow`,
    `🌙 {name} — Liminal\n☁️ Between who I was and who I'm becoming\n🌿 Soft on the outside. Deep within.\n🎞️ Writing verses no one asked for`,
    `✨ {name}\n🌙 Made of stardust and quiet thoughts\n🍂 Vintage feelings in a digital age\n☁️ Finding home in movement`,
    `🌿 {name} | Fluid\n🎞️ Life filtered through imagination\n🌙 Sleeping late. Dreaming big.\n✨ The world is full of beautiful things`,
    `🍂 {name} — October Soul\n🌙 Autumn arrived and so did I\n☁️ In love with the melancholic beauty\n✨ Every moment worth noticing`,
    `🌙 {name}\n🌿 Grounded but always drifting\n🎞️ Mood: last scene of a good movie\n✨ Creating the feeling I can't explain`,
    `☁️ {name} | Soft Chaos\n🍂 Organized mess of thoughts and dreams\n🌙 Where logic ends, I begin\n🌿 Healing through making things`,
    `✨ {name} — Infinite\n🌙 The in-between is where I live\n🎞️ Making my life a piece of art\n☁️ Quiet intensity, constant curiosity`,
    `🍂 {name}\n🌙 Slow mornings and deep thinking\n✨ Built from books, music, and moonlight\n🌿 Still learning the language of myself`,
    `🌙 {name} | Ethereal\n☁️ Living between the lines\n🎞️ Collecting feelings, not things\n✨ Poetry in every small decision`,
  ],
};

/* ── Utility: Shuffle array ──────────────────────────────────── */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ── Personalize bio with name ──────────────────────────────── */
function personalize(template, name) {
  if (!name.trim()) return template.replace(/\{name\}\s*[|—]\s*/g, '').replace(/\{name\}/g, '');
  return template.replace(/\{name\}/g, name.trim());
}

/* ── DOM References ──────────────────────────────────────────── */
const generateBtn   = document.getElementById('generateBtn');
const regenerateBtn = document.getElementById('regenerateBtn');
const userNameInput = document.getElementById('userName');
const bioStyleSelect= document.getElementById('bioStyle');
const bioGrid       = document.getElementById('bioGrid');
const resultsSection= document.getElementById('results');
const resultsSubtitle = document.getElementById('resultsSubtitle');
const inputError    = document.getElementById('inputError');
const toast         = document.getElementById('toast');
const themeToggle   = document.getElementById('themeToggle');
const themeIcon     = document.getElementById('themeIcon');
const navToggle     = document.getElementById('navToggle');
const navMenu       = document.getElementById('navMenu');
const navbar        = document.getElementById('navbar');

/* ── Current state ───────────────────────────────────────────── */
let currentStyle = 'attitude';
let currentName  = '';
let toastTimer   = null;

/* ── Generate Bios ───────────────────────────────────────────── */
function generateBios() {
  const name  = userNameInput.value.trim();
  const style = bioStyleSelect.value;

  // Clear error
  inputError.textContent = '';
  userNameInput.classList.remove('error');

  if (!name) {
    inputError.textContent = '⚠️ Please enter your name or nickname!';
    userNameInput.classList.add('error');
    userNameInput.focus();
    return;
  }

  currentName  = name;
  currentStyle = style;

  // Show loading
  generateBtn.disabled = true;
  generateBtn.classList.add('loading');

  setTimeout(() => {
    // Pick 5 random unique bios
    const pool   = BIO_DATA[style] || BIO_DATA.attitude;
    const picked = shuffle(pool).slice(0, 5);

    renderBios(picked, name, style);

    // Hide loading
    generateBtn.disabled = false;
    generateBtn.classList.remove('loading');

    // Show results
    resultsSection.style.display = 'block';

    const styleLabel = bioStyleSelect.options[bioStyleSelect.selectedIndex].text;
    resultsSubtitle.textContent = `5 ${styleLabel} bios generated for "${name}" ✨`;

    // Smooth scroll to results
    setTimeout(() => {
      resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

  }, 1100); // Simulate AI generation delay
}

/* ── Render Bio Cards ────────────────────────────────────────── */
function renderBios(bios, name, style) {
  bioGrid.innerHTML = '';

  const styleEmojis = {
    attitude: '😤',
    cute:     '🥰',
    stylish:  '💎',
    vip:      '👑',
    aesthetic:'🌙',
  };
  const emoji = styleEmojis[style] || '✨';

  bios.forEach((bio, i) => {
    const personalizedBio = personalize(bio, name);

    const card = document.createElement('article');
    card.className = 'bio-card';
    card.setAttribute('role', 'listitem');
    card.style.animationDelay = `${i * 0.08}s`;

    card.innerHTML = `
      <div class="bio-number">${emoji} Bio #${i + 1}</div>
      <p class="bio-text">${escapeHTML(personalizedBio)}</p>
      <button class="btn-copy" data-bio="${encodeURIComponent(personalizedBio)}" aria-label="Copy bio #${i + 1}">
        <i class="fas fa-copy" aria-hidden="true"></i> Copy Bio
      </button>
    `;
    bioGrid.appendChild(card);
  });

  // Attach copy listeners
  bioGrid.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', handleCopy);
  });
}

/* ── Copy Handler ────────────────────────────────────────────── */
function handleCopy(e) {
  const btn = e.currentTarget;
  const bio = decodeURIComponent(btn.dataset.bio);

  navigator.clipboard.writeText(bio).then(() => {
    // Update button
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Copied!';
    btn.classList.add('copied');
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = orig;
      btn.classList.remove('copied');
      btn.disabled = false;
    }, 2000);

    showToast();
  }).catch(() => {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = bio;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast();
  });
}

/* ── Toast Notification ──────────────────────────────────────── */
function showToast() {
  clearTimeout(toastTimer);
  toast.classList.remove('hide');
  toast.classList.add('show');
  toastTimer = setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => {
      toast.classList.remove('show', 'hide');
    }, 350);
  }, 2800);
}

/* ── Regenerate ──────────────────────────────────────────────── */
function regenerateBios() {
  if (!currentName) { generateBios(); return; }
  const pool   = BIO_DATA[currentStyle] || BIO_DATA.attitude;
  const picked = shuffle(pool).slice(0, 5);
  renderBios(picked, currentName, currentStyle);
  resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── Theme Toggle ────────────────────────────────────────────── */
function initTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  document.body.dataset.theme = saved;
  updateThemeIcon(saved);
}

function toggleTheme() {
  const current = document.body.dataset.theme;
  const next    = current === 'dark' ? 'light' : 'dark';
  document.body.dataset.theme = next;
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

/* ── Navbar Scroll ───────────────────────────────────────────── */
function handleNavbarScroll() {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

/* ── Mobile Nav ──────────────────────────────────────────────── */
function toggleMobileNav() {
  const open = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open.toString());
}

function closeMobileNav() {
  navMenu.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

/* ── FAQ Accordion ───────────────────────────────────────────── */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item     = btn.closest('.faq-item');
      const isOpen   = item.classList.contains('open');
      const expanded = !isOpen;

      // Close all
      document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Open clicked
      if (expanded) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ── Scroll Animations ───────────────────────────────────────── */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* ── Smooth scroll for nav links ─────────────────────────────── */
function initNavLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        closeMobileNav();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-h') || '68');
        const top    = target.getBoundingClientRect().top + window.scrollY - offset - 8;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ── Escape HTML ─────────────────────────────────────────────── */
function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ── Input: Enter key triggers generate ─────────────────────── */
userNameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') generateBios();
});

/* ── Clear error on input ────────────────────────────────────── */
userNameInput.addEventListener('input', () => {
  inputError.textContent = '';
  userNameInput.classList.remove('error');
});

/* ── Event Listeners ─────────────────────────────────────────── */
generateBtn.addEventListener('click',   generateBios);
regenerateBtn.addEventListener('click', regenerateBios);
themeToggle.addEventListener('click',   toggleTheme);
navToggle.addEventListener('click',     toggleMobileNav);
window.addEventListener('scroll',       handleNavbarScroll, { passive: true });

// Close nav on outside click
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) closeMobileNav();
});

/* ── Init ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initFAQ();
  initScrollAnimations();
  initNavLinks();
  handleNavbarScroll();
});
