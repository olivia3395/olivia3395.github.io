---
layout: single
permalink: /myapps/
title: " "
author_profile: false
header:
  show_overlay_excerpt: false
  teaser: ""
  image: ""
breadcrumbs: false
toc: false
classes: wide
---


# ✨ My Apps (Yuyao's Atelier)


<p style="margin:6px 0 12px 0;">
  <a href="/" style="display:inline-block;padding:6px 10px;border:1px solid rgba(0,0,0,0.12);border-radius:999px;text-decoration:none;">
    ← Back to Home
  </a>
</p>

🎬 Cinema dweller · 📖 Literature wanderer · 🦋 Small-world builder

✨ A quiet atelier of cinematic, atmospheric, and emotionally resonant little worlds — part side projects, part memory-keepers, part invitations to wander.

🌙 Some of these apps don't really *solve* anything. They just offer somewhere softer to be, for a little while.


<style>
/* ---------- layout ---------- */
.apps-wrap{
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

/* ---------- app card ---------- */
.app-card{
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 18px;
  background: rgba(255,255,255,0.92);
  box-shadow: 0 10px 24px rgba(0,0,0,0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.app-card:hover{
  transform: translateY(-3px);
  box-shadow: 0 18px 36px rgba(0,0,0,0.09);
}

/* ---------- hero ---------- */
.app-hero{
  position: relative;
  background: #f3f4f6;
  overflow: hidden;
  aspect-ratio: 16 / 10;
}

.app-hero img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 320ms ease, filter 320ms ease;
}

.app-card:hover .app-hero img{
  transform: scale(1.03);
  filter: saturate(1.05);
}

.app-category{
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.6px;
  padding: 5px 11px;
  border-radius: 999px;
  color: #fff;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  box-shadow: 0 2px 6px rgba(0,0,0,0.12);
}

/* category colors — echoing your original shield palette */
.cat-wilderness { background: rgba(107, 112, 92, 0.92); }
.cat-persona    { background: rgba(139, 92, 246, 0.92); }
.cat-cinema     { background: rgba(220, 38, 38, 0.92); }
.cat-letter     { background: rgba(219, 39, 119, 0.92); }
.cat-escape     { background: rgba(14, 165, 233, 0.92); }
.cat-keepsake   { background: rgba(194, 65, 12, 0.92); }
.cat-atlas      { background: rgba(3, 105, 161, 0.92); }
.cat-literary   { background: rgba(146, 64, 14, 0.92); }
.cat-voice      { background: rgba(75, 85, 99, 0.92); }
.cat-archive    { background: rgba(185, 28, 28, 0.92); }

/* ---------- body ---------- */
.app-body{
  padding: 18px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.app-sub{
  margin: 0;
  color: #9ca3af;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

.app-title{
  margin: 2px 0 0 0;
  font-weight: 800;
  font-size: 1.18rem;
  letter-spacing: -0.3px;
  color: #111827;
  line-height: 1.25;
}

.app-tagline{
  margin: 6px 0 0 0;
  font-style: italic;
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.45;
}

.app-desc{
  margin: 4px 0 0 0;
  color: #374151;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* ---------- actions ---------- */
.app-actions{
  margin-top: auto;
  padding-top: 14px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.app-btn{
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 999px;
  text-decoration: none !important;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid transparent;
  transition: all 180ms ease;
  white-space: nowrap;
}

.app-btn-try{
  background: #16a34a;
  color: #fff !important;
  box-shadow: 0 2px 6px rgba(22, 163, 74, 0.25);
}
.app-btn-try:hover{
  background: #15803d;
  transform: translateY(-1px);
}

.app-btn-code{
  background: rgba(17, 24, 39, 0.04);
  color: #111827 !important;
  border: 1px solid rgba(17, 24, 39, 0.1);
}
.app-btn-code:hover{
  background: rgba(17, 24, 39, 0.08);
}

/* ---------- responsive ---------- */
@media (max-width: 900px){
  .apps-wrap{ grid-template-columns: 1fr; gap: 18px; }
}
</style>


<div class="apps-wrap">

  <!-- Wilderness -->
  <div class="app-card" id="wilderness">
    <div class="app-hero">
      <img src="/images/NationalPark.png" alt="Wilderness">
      <span class="app-category cat-wilderness">🌲 WILDERNESS</span>
    </div>
    <div class="app-body">
      <p class="app-sub">National Park Explorer</p>
      <p class="app-title">Wilderness</p>
      <p class="app-tagline">A refined digital companion for discovering America's national parks.</p>
      <p class="app-desc">A calm web app for exploring the U.S. National Parks through park discovery, trail maps, ranger tips, preservation resources, and a digital passport-inspired experience. Part field guide, part archive, part invitation to wander — spacious, earth-toned, and gently immersive.</p>
      <div class="app-actions">
        <a class="app-btn app-btn-try" href="https://us-national-parks-explorer-three.vercel.app/">↗ Try it</a>
        <a class="app-btn app-btn-code" href="https://github.com/olivia3395/US-National-Parks-Explorer">&lt;/&gt; Code</a>
      </div>
    </div>
  </div>

  <!-- MBTI Vibe -->
  <div class="app-card" id="mbti-vibe">
    <div class="app-hero">
      <img src="/images/mbti_vibe.png" alt="MBTI Vibe">
      <span class="app-category cat-persona">✨ PERSONA</span>
    </div>
    <div class="app-body">
      <p class="app-sub">Multimodal Vibe Reader</p>
      <p class="app-title">MBTI Vibe</p>
      <p class="app-tagline">What kind of personality atmosphere does this content radiate?</p>
      <p class="app-desc">A multimodal AI app that reads text and images — captions, poems, screenshots, moodboards, all those tiny digital traces of self-expression — and whispers back the MBTI vibe it gives off. It doesn't claim to tell you who someone <i>really</i> is. It asks a softer, kinder question instead.</p>
      <div class="app-actions">
        <a class="app-btn app-btn-try" href="https://mbti-vibe-ten.vercel.app/">↗ Try it</a>
        <a class="app-btn app-btn-code" href="https://github.com/olivia3395/MBTI-Vibe">&lt;/&gt; Code</a>
      </div>
    </div>
  </div>

  <!-- What If Cinema -->
  <div class="app-card" id="what-if-cinema">
    <div class="app-hero">
      <img src="/images/what_if_cinema.png" alt="What If Cinema">
      <span class="app-category cat-cinema">🎬 CINEMA</span>
    </div>
    <div class="app-body">
      <p class="app-sub">Rewrite a Film's Ending</p>
      <p class="app-title">What If Cinema</p>
      <p class="app-tagline">Rewrite a film's final heartbeat.</p>
      <p class="app-desc">For anyone who has ever left a movie wondering — <i>what if it ended differently?</i> Insert a new scene, change one choice, shift a single moment. It stays close to the emotional soul of the original — preserving its tone, longing, and ache — while imagining endings that feel tender, devastating, hopeful, or quietly healing.</p>
      <div class="app-actions">
        <a class="app-btn app-btn-try" href="https://what-if-cinema.vercel.app/">↗ Try it</a>
        <a class="app-btn app-btn-code" href="https://github.com/olivia3395/What_If_Cinema">&lt;/&gt; Code</a>
      </div>
    </div>
  </div>

  <!-- Letters from the Screen -->
  <div class="app-card" id="letters-from-the-screen">
    <div class="app-hero">
      <img src="/images/letter_from_sceen.png" alt="Letters from the Screen">
      <span class="app-category cat-letter">✉️ LETTER</span>
    </div>
    <div class="app-body">
      <p class="app-sub">A Letter from a Character</p>
      <p class="app-title">Letters from the Screen</p>
      <p class="app-tagline">A healing letter from the character you need most.</p>
      <p class="app-desc">Share what is on your heart, and receive a letter from the movie or TV character who would understand. More love letter than chatbot — intimate, tender, just a little magical. The rare feeling that a voice from another story has stepped out of the screen to sit beside you for a while.</p>
      <div class="app-actions">
        <a class="app-btn app-btn-try" href="https://letters-from-the-screen.vercel.app/">↗ Try it</a>
        <a class="app-btn app-btn-code" href="https://github.com/olivia3395/Letters_from_the_Screen">&lt;/&gt; Code</a>
      </div>
    </div>
  </div>

  <!-- If You Disappeared on a Trip -->
  <div class="app-card" id="if-you-disappeared">
    <div class="app-hero">
      <img src="/images/if_you_disappeared.png" alt="If You Disappeared on a Trip">
      <span class="app-category cat-escape">✈️ ESCAPE</span>
    </div>
    <div class="app-body">
      <p class="app-sub">A Borrowed Life</p>
      <p class="app-title">If You Disappeared on a Trip</p>
      <p class="app-tagline">A small borrowed life in another city.</p>
      <p class="app-desc">For anyone who has ever wanted to slip away for a day or two. Instead of a typical itinerary, it builds a small borrowed life in another city based on your mood — cinematic, soothing, touched with humor. A brief imaginative place to rest, wander, and feel held by another version of life.</p>
      <div class="app-actions">
        <a class="app-btn app-btn-try" href="https://if-you-disappeared.vercel.app/">↗ Try it</a>
        <a class="app-btn app-btn-code" href="https://github.com/olivia3395/if-you-disappeared">&lt;/&gt; Code</a>
      </div>
    </div>
  </div>

  <!-- Souvenirs of a Life Not Yet Lived -->
  <div class="app-card" id="souvenirs">
    <div class="app-hero">
      <img src="/images/souvenir_of_a_life.png" alt="Souvenirs of a Life Not Yet Lived">
      <span class="app-category cat-keepsake">🎟️ KEEPSAKE</span>
    </div>
    <div class="app-body">
      <p class="app-sub">Parallel Self Archive</p>
      <p class="app-title">Souvenirs of a Life Not Yet Lived</p>
      <p class="app-tagline">A private museum of the lives you almost lived.</p>
      <p class="app-desc">Step into a curated archive of parallel selves. Instead of planning a trip, it generates a small, emotionally resonant keepsake — a ticket, a postcard, a receipt, a note — from a life you've been quietly standing outside of. An invitation to imagine not just another city, but another self you might still be growing toward.</p>
      <div class="app-actions">
        <a class="app-btn app-btn-try" href="https://souvenir-of-a-life.vercel.app/">↗ Try it</a>
        <a class="app-btn app-btn-code" href="https://github.com/olivia3395/Souvenir_of_a_life">&lt;/&gt; Code</a>
      </div>
    </div>
  </div>

  <!-- The Map of Me -->
  <div class="app-card" id="map-of-me">
    <div class="app-hero">
      <img src="/images/the_map_of_me.png" alt="The Map of Me">
      <span class="app-category cat-atlas">🗺️ ATLAS</span>
    </div>
    <div class="app-body">
      <p class="app-sub">Cultural Cartography</p>
      <p class="app-title">The Map of Me</p>
      <p class="app-tagline">Part atlas, part city shelf, part personal collection.</p>
      <p class="app-desc">A map-based cultural discovery app for collecting meaningful places and exploring what lives around them beyond geography alone. After adding a city, you move from the global atlas into a curated layer of screen references, books, and local landmarks — a place becomes a small world of its own.</p>
      <div class="app-actions">
        <a class="app-btn app-btn-try" href="https://the-map-of-me.vercel.app/">↗ Try it</a>
        <a class="app-btn app-btn-code" href="https://github.com/olivia3395/the-map-of-me">&lt;/&gt; Code</a>
      </div>
    </div>
  </div>

  <!-- A Room in Macondo -->
  <div class="app-card" id="macondo">
    <div class="app-hero">
      <img src="/images/macondo.png" alt="A Room in Macondo">
      <span class="app-category cat-literary">🦋 LITERARY</span>
    </div>
    <div class="app-body">
      <p class="app-sub">A García Márquez World</p>
      <p class="app-title">A Room in Macondo</p>
      <p class="app-tagline">Step inside the weather of One Hundred Years of Solitude.</p>
      <p class="app-desc">An atmospheric AI literary experience inspired by García Márquez's rain-soaked world of memory, fire, butterflies, and magical realism. Rather than retelling the novel, it invites you into a room, a ritual, and a fate of your own — a story fragment that feels less like generated text and more like something recovered from an old archive in Macondo itself.</p>
      <div class="app-actions">
        <a class="app-btn app-btn-try" href="https://a-room-in-macondo.vercel.app/">↗ Try it</a>
        <a class="app-btn app-btn-code" href="https://github.com/olivia3395/a-room-in-macondo">&lt;/&gt; Code</a>
      </div>
    </div>
  </div>

  <!-- Say It Like a Classic -->
  <div class="app-card" id="say-it-like-a-classic">
    <div class="app-hero">
      <img src="/images/say_it_like_a_classic.png" alt="Say It Like a Classic">
      <span class="app-category cat-voice">✒️ VOICE</span>
    </div>
    <div class="app-body">
      <p class="app-sub">Borrowed Literary Voices</p>
      <p class="app-title">Say It Like a Classic</p>
      <p class="app-tagline">What if your thoughts belonged to another literary mind?</p>
      <p class="app-desc">A playful app that lets you type an ordinary sentence and watch it return as though it had passed through the mind of Kafka, Austen, Woolf, Borges, Lu Xun, Eileen Chang, and other unmistakable writers. A small experiment in tone, temperament, and literary transformation — where the same feeling can come back colder, funnier, sharper, softer, or beautifully devastating.</p>
      <div class="app-actions">
        <a class="app-btn app-btn-try" href="https://borrow-a-better-sentence.vercel.app/">↗ Try it</a>
        <a class="app-btn app-btn-code" href="https://github.com/olivia3395/Borrow-a-Better-Sentence">&lt;/&gt; Code</a>
      </div>
    </div>
  </div>

  <!-- The Boston Archive -->
  <div class="app-card" id="boston-archive">
    <div class="app-hero">
      <img src="/images/boston_archive.png" alt="The Boston Archive">
      <span class="app-category cat-archive">🏛️ ARCHIVE</span>
    </div>
    <div class="app-body">
      <p class="app-sub">A City as Memory</p>
      <p class="app-title">The Boston Archive</p>
      <p class="app-tagline">A cinematic, atmospheric archive of Boston as memory, weather, and myth.</p>
      <p class="app-desc">An immersive editorial city experience that reimagines Boston through mood, sound, and visual storytelling. Part memory object, part city journal, part sensory installation. Written before leaving Boston — a small love letter to the city, and to the chapter of life it quietly held.</p>
      <div class="app-actions">
        <a class="app-btn app-btn-try" href="https://boston-kappa.vercel.app/">↗ Try it</a>
        <a class="app-btn app-btn-code" href="https://github.com/olivia3395/boston">&lt;/&gt; Code</a>
      </div>
    </div>
  </div>

</div>
