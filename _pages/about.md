---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Howdy! I’m a Ph.D. candidate in Statistics at Boston University, co-advised by [Prof. Debarghya Mukherjee](https://debarghya-mukherjee.github.io/) and [Prof. Luis Carvalho](https://math.bu.edu/people/lecarval/), and I also collaborate with [Prof. Nabarun Deb](https://nabarund.github.io/). Before BU, I earned my M.A. in Statistics from Columbia University and my B.S. in Mathematics from Shandong University, including a year of joint training at the Academy of Mathematics and Systems Science(AMSS), Chinese Academy of Sciences. My research sits at the intersection of statistics and machine learning, where I develop theoretically grounded transfer-learning and representation-learning methods—spanning optimal transport, graph mining, multimodal learning for structured, heterogeneous data in low-sample, high-dimensional, and non-IID settings. 

The question that keeps me up (in a good way):

> **How can we reuse past knowledge when the world—and the data—won’t sit still?**

In statistical learning, this is about transferring geometry or smoothness from a well-understood **source** distribution to a smaller, noisier **target** under shift.  In reinforcement learning, the **source** might be prior trajectories, simulators, or related tasks, while the **target** is the evolving environment, so we need principled rules for **what to keep, what to adapt, and what to forget**. And yes! **LLMs/VLMs** make this even more exciting (and tricky): they already contain a lot of cross-domain knowledge, but the real challenge is **extracting and specializing it safely** for downstream tasks without **overfitting, hallucination, or misalignment**.


## What I build

- **Theory that actually supports practice**  
  Minimax rates, oracle inequalities, regret bounds, and safe-transfer criteria under covariate or structural shift.

- **Graph-structured transfer methods**  
  Aligning and transporting information across graphs/manifolds to make transfer robust when correspondence is messy or unknown.

- **RL/bandits under drift**  
  Warm-started policies with uncertainty-aware adaptation for reliable sequential decision-making in changing environments.

- **Transfer principles for LLMs/VLMs**  
  Controlled adaptation, domain grounding, and structure-preserving fine-tuning—so models adapt *without* getting sloppy.


Curious about my research? I put together a friendly, no-jargon **[slide](transfer_learning.pdf)** deck on how I think about transfer learning (and why it matters)


Along my academic journey, I have been deeply fortunate to study and conduct research under the guidance of inspiring scholars, including [Prof. Zhanxing Zhu](https://zhanxingzhu.github.io/), whose influential work includes *Spatio-Temporal Graph Convolutional Networks (STGCN)* for traffic forecasting, and [Prof. Yongshun Gong](https://faculty.sdu.edu.cn/gongyongshun/en/). Their perspectives on deep learning, representation learning, and structured spatio-temporal systems have profoundly shaped how I think about evolving, heterogeneous data, and have guided my pursuit of principled transfer learning methods.


Beyond theory and modeling, I am drawn to building AI applications that reflect how I see people and the world. I have always felt that human beings are more than their outward forms, that something of the spirit, memory, and inner life exceeds the body that temporarily carries it. That is why I am especially fascinated by cinema, atmosphere, and emotionally resonant digital experiences ✨



# 🔥 News
- *2025.09*: 🎉 My first-author paper **"Transfer Learning on Edge Connecting Probability Estimation Under Graphon Model"** is accepted by ([NeurIPS 2025](https://neurips.cc/))!
- *2025.08*: 🎉 My co-authored paper **"Cross-Domain Hyperspectral Image Classification via Mamba-CNN and Knowledge Distillation"** is accepted by ([IEEE TGRS 2025](https://ieeexplore.ieee.org/))!




# 📝 Publications 


<!-- ===================== Leading Author ===================== -->
<h2 class="pub-section-title">Leading Author</h2>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">NeurIPS 2025</div>
      <img src='images/gtrans_workflow.png' alt="gtrans" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[**Transfer Learning on Edge Connecting Probability Estimation Under Graphon Model**](https://openreview.net/pdf?id=i3sWs5614Y)
· [**NeurIPS**](https://neurips.cc/virtual/2025/poster/116597)
· [**Poster**](https://github.com/olivia3395/GTrans/blob/main/neurips_poster.pdf)
· [**Slides**](https://github.com/olivia3395/GTrans/blob/main/Neurips2025_final1.pptx)
· [**Code**](https://github.com/olivia3395/GTRANS)<br>
*NeurIPS 2025*

- **Graphon transfer without node correspondence:** aligns source/target graphs via **Gromov–Wasserstein**, then transfers edge-probability structure in a fully nonparametric way.  
- **Provably stable + practically strong:** **residual smoothing** boosts small/sparse/heterogeneous targets, with **convergence & stability guarantees** and SOTA gains on link prediction / graph classification.

</div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">Under Review @ JASA</div>
      <img src='images/phaseshift.png' alt="phaseshift" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[**Phase Transition in Nonparametric Minimax Rates for Covariate Shifts on Approximate Manifolds**](https://arxiv.org/abs/2507.00889)
· [**Code**](https://github.com/olivia3395/Covariate-Shifts-on-Approximate-Manifolds)
· [**Poster**](https://github.com/olivia3395/Covariate-Shifts-on-Approximate-Manifolds/blob/main/manifold_poster.pdf)
· [**Slides**](https://github.com/olivia3395/Covariate-Shifts-on-Approximate-Manifolds/blob/main/slides_Manifold.pdf)<br>
*Boston University; Chicago Booth*

- **New minimax theory for “near-manifold” shift:** exposes a sharp **phase transition** controlled by the **support gap** between target and source neighborhoods—unifying multiple geometric-transfer regimes.  
- **Ratio-free, adaptive estimator:** achieves **near-optimal, dimension-adaptive rates** **without density ratios** and without assuming knowing the geometry (works under approximate manifold mismatch).

</div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">Under Review </div>
      <img src='images/tess_workflow.png' alt="tess" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[**From Text to Forecasts: Bridging Modality Gap with Temporal Evolution Semantic Space**](https://arxiv.org/abs/2603.12664)<br>
*Boston University; Hong Kong University of Science and Technology; Shandong University*

- **Bridges the text–time-series modality gap:** introduces a **Temporal Evolution Semantic Space (TESS)** that distills free-form text into **interpretable temporal primitives** (mean shift, volatility, shape, lag), instead of directly fusing noisy token embeddings.  
- **LLM-guided yet numerically grounded forecasting:** uses **structured prompting + confidence-aware gating** to inject reliable semantic signals as prefix tokens into a Transformer forecaster, yielding **robust gains under event-driven non-stationarity** (up to **29% error reduction**).

</div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">Under Review</div>
      <img src='images/scot_main.png' alt="scot" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[**SCOT: Multi-Source Cross-City Transfer with Optimal-Transport
Soft-Correspondence Objectives**](#)<br>
*Boston University; Shandong University*

- **Explicit many-to-many correspondence (no node matching):** learns a **Sinkhorn entropic-OT coupling** between unequal region sets and uses it to define **soft aligned pairs** for cross-city transfer.  
- **OT-guided semantic sharpening + stability:** combines **OT-weighted contrastive alignment** with **cycle-style reconstruction**; extends to multi-source with a **target-aware prototype hub** to prevent collapse and handle strong heterogeneity.

</div>
</div>



<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">Under Review</div>
      <img src='images/synergy_bpr_workflow.png' alt="synergy-bpr" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">


[**INCM: INConsistency-aware Multi-modal Recommendation with Cross-Modal Hard Negatives**](#)<br>
*Boston University; Shandong University; Tsinghua University*

* **Inconsistency-aware multimodal ranking:** studies how cross-modal discrepancies in recommendation may provide complementary ranking evidence or degrade fusion quality, and explicitly incorporates these effects into the training objective.
* **Cross-modal hard negatives + synergy-aware ranking loss:** proposes **CHNS** to mine modality-specific hard negatives across branches, and a **Synergy-aware BPR** loss to ensure the fused branch achieves stronger preference margins than unimodal branches.



</div>
</div>



<!-- ===================== Co-author ===================== -->
<h2 class="pub-section-title">Co-author</h2>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">IEEE TGRS 2025</div>
      <img src='images/mkdnet.png' alt="mkdnet" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[**Cross-Domain Hyperspectral Image Classification via Mamba-CNN and Knowledge Distillation**](https://ieeexplore.ieee.org/abstract/document/11133483)
· [**Slides**](https://github.com/olivia3395/Cross-Domain-Hyperspectral-Image-Classification-/blob/main/IEEE%20TRGS%202025.pptx)<br>
*IEEE TGRS 2025*

- **Hybrid spectral–spatial modeling for domain shift:** integrates a **Mamba-based global spectral encoder** with **CNN local feature extraction**, capturing long-range dependencies while preserving fine-grained spatial structure in hyperspectral images.  
- **Dual-level transfer via distillation + graph alignment:** performs **teacher–student knowledge distillation** for distribution alignment and **OT-guided graph consistency** across domains, yielding robust cross-domain generalization under severe spectral mismatch.

</div>
</div>




<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">Under Review</div>
      <img src='images/ssgp_workflow.png' alt="ssgp" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[**Semantic Scientific Graph Pruning for Reliable Agentic Paper Reproduction**](https://arxiv.org/abs/2603.01801)<br>
*Boston University; Shandong University*

- **Semantic pruning for controllable agent search:** proposes **Semantic Scientific Graph Pruning (SSGP)** to transform dense scientific graphs into **task-adaptive local subgraphs**, using **rank-based ensemble scoring** to retain only semantically essential neighbors.  
- **Enables reliable agentic reproduction:** couples pruned graphs with **reuse–patch modular execution** and **confidence-weighted aggregation**, dramatically reducing search space while improving **reproducibility, stability, and success rate** of LLM-based scientific agents.

</div>
</div>



# 🤖 AI / ML Engineering Projects

## 🛠️ AI Agent & Tool Use

<div class='paper-box'>
  <div class='paper-box-text' markdown="1">

**[Traffic Bot Detection](https://github.com/olivia3395/traffic_bot_detection)**
&nbsp;[![Code](https://img.shields.io/badge/GitHub-Code-black?logo=github)](https://github.com/olivia3395/traffic_bot_detection)

Built a three-layer ensemble (statistical rules, Isolation Forest, Gradient Boosting) with a dedicated **LLM-agent fingerprint scorer** detecting timing regularity, systematic link coverage, and API probing patterns.

- Validated on CSIC 2010 with hybrid synthetic LLM traffic
- Achieved **>93% recall** at **<1% FPR** with **<15ms latency**

  </div>
</div>



<div class='paper-box'>
  <div class='paper-box-text' markdown="1">

**[DataPilot: AI Data Science Agent for Autonomous CSV Analysis](https://github.com/olivia3395/DataPilot_Studio-)**
&nbsp;[![Code](https://img.shields.io/badge/GitHub-Code-black?logo=github)](https://github.com/olivia3395/DataPilot_Studio-)

A Streamlit-based AI data science agent powered by a **multi-step planner–analyst–verifier workflow** that profiles CSVs, generates executable Python code, creates visualizations, and produces grounded summaries.

- Integrated baseline ML pipelines (classification & regression) with **XGBoost** support and feature-importance reporting
- Five built-in sample datasets for interactive end-to-end demos; downloadable reports & code

  </div>
</div>



## 🔍 RAG System Engineering

<div class='paper-box'>
  <div class='paper-box-text' markdown="1">

**[GraphRAG: Graph-Enhanced Multimodal Retrieval-Augmented Generation](https://github.com/olivia3395/GraphRAG)**
&nbsp;[![Code](https://img.shields.io/badge/GitHub-Code-black?logo=github)](https://github.com/olivia3395/GraphRAG)

A production-style RAG system combining **dense retrieval, entity-graph expansion, and image-text retrieval** to recover multi-hop evidence beyond vanilla RAG pipelines.

- Modular FastAPI-based framework with **ChromaDB**, sentence-transformers, and **CLIP** for ingestion, indexing, hybrid retrieval, and grounded answer generation
- Supports heterogeneous text and image corpora

  </div>
</div>



<div class='paper-box'>
  <div class='paper-box-text' markdown="1">

**[Adaptive RAG with Query Routing and Self-Reflection](https://github.com/olivia3395/Adaptive_RAG)**
&nbsp;[![Code](https://img.shields.io/badge/GitHub-Code-black?logo=github)](https://github.com/olivia3395/Adaptive_RAG)

An adaptive RAG system that **routes queries, performs iterative retrieval** to fill knowledge gaps, and applies self-reflection to detect unsupported or hallucinated answers.

- Modular Python framework with **FastAPI**, ChromaDB, and graph-based retrieval
- Side-by-side comparison of vanilla RAG, GraphRAG, and Adaptive RAG for grounded QA

  </div>
</div>



## 🧠 LLM Evaluation & Alignment

<div class='paper-box'>
  <div class='paper-box-text' markdown="1">

**[LLaMA 2 Fine-Tuning (QLoRA)](https://github.com/olivia3395/LLaMA2_finetuning)**
&nbsp;[![Code](https://img.shields.io/badge/GitHub-Code-black?logo=github)](https://github.com/olivia3395/LLaMA2_finetuning)

Applied **4-bit NF4 quantization** (bitsandbytes) with LoRA adapters (rank=16) on all attention and MLP projections, trained on Alpaca/ShareGPT with completion-only loss masking and paged AdamW optimizer.

- End-to-end QLoRA pipeline with prompt formatters (Alpaca / ChatML / LLaMA-2), cosine LR schedule, LoRA merge-and-export
- Evaluated via **perplexity, token accuracy, and ROUGE-L**

  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-text' markdown="1">

**[RLHF (PPO)](https://github.com/olivia3395/rlhf_finetuning)**
&nbsp;[![Code](https://img.shields.io/badge/GitHub-Code-black?logo=github)](https://github.com/olivia3395/rlhf_finetuning)

Designed a composite reward (sentiment, toxicity, fluency, length) with an **adaptive KL-penalty controller** auto-tuning β against a frozen reference policy for controllable generation.

- Actor-critic pipeline on **GPT-2** with value head, GAE (λ=0.95), clipped surrogate loss (ε=0.2), mini-batch PPO updates
- Rollout buffer with **W&B** logging

  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-text' markdown="1">

**[Mini LLM Pre-Training](https://github.com/olivia3395/mini_pretrain)**
&nbsp;[![Code](https://img.shields.io/badge/GitHub-Code-black?logo=github)](https://github.com/olivia3395/mini_pretrain)

Pre-trained a **10.7M-parameter GPT from scratch** in pure PyTorch (6-layer decoder, causal multi-head attention, pre-norm residuals, weight tying) on TinyShakespeare; runs under one hour on a single GPU.

- Cosine LR with linear warmup, random block sampling, character-level tokenizer
- Validation PPL drops from **65 (random) → ~4.7** after 5,000 iterations

  </div>
</div>



## ⚡ Efficient Inference

<div class='paper-box'>
  <div class='paper-box-text' markdown="1">

**[LLM 1-bit Quantization (HQQ)](https://github.com/olivia3395/HQQ_1-bit_Quantization)**
&nbsp;[![Code](https://img.shields.io/badge/GitHub-Code-black?logo=github)](https://github.com/olivia3395/HQQ_1-bit_Quantization)

Implemented **Half-Quadratic Quantization** of LLaMA 2 to 1–8-bit via proximal optimization with straight-through estimators and per-group affine scaling — no calibration data required.

- Benchmarked speed, accuracy (WikiText-2 PPL), and memory across W1–W8
- **W1G64** achieves **12.7× compression** vs fp16 with **>4× inference speedup** at minimal PPL degradation

  </div>
</div>



<div class='paper-box'>
  <div class='paper-box-text' markdown="1">

**[DraftVerify: Speculative Decoding for Efficient LLM Inference](https://github.com/olivia3395/DraftVerify)**
&nbsp;[![Code](https://img.shields.io/badge/GitHub-Code-black?logo=github)](https://github.com/olivia3395/DraftVerify)

A **speculative decoding pipeline** with a lightweight draft model and a larger verifier model to reduce autoregressive decoding cost in LLM inference.

- Benchmarked latency, throughput, and token acceptance rates across draft lengths and sampling settings
- Consistent speedups over vanilla decoding with minimal output degradation

  </div>
</div>


# ✨ My Apps 

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <img src='images/mbti_vibe.png' alt="mbti-vibe" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[**MBTI Vibe**](https://mbti-vibe-ten.vercel.app/)
· [**GitHub**](https://github.com/olivia3395/MBTI-Vibe)<br>

**MBTI Vibe** is a multimodal AI app that analyzes text and images to guess the MBTI vibe your content gives off. Think captions, poems, screenshots, moodboards, and all those tiny digital traces of self-expression. It does not claim to tell you who someone “really is.” Instead, it asks a much softer and more fun question: what kind of personality atmosphere does this content radiate? 💫

Come try it out [**here**](https://mbti-vibe-ten.vercel.app/). See the project [**here**](https://github.com/olivia3395/MBTI-Vibe).

  </div>
</div>



<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <img src='images/what_if_cinema.png' alt="what if cinema" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[**What If Cinema**](https://what-if-cinema.vercel.app/)
· [**GitHub**](https://github.com/olivia3395/What_If_Cinema)<br>

**What If Cinema** is an AI storytelling app for anyone who has ever left a movie wondering: what if it ended differently? Users can rewrite a film’s final heartbeat by inserting a new scene, changing a choice, or shifting one moment that changes everything. Rather than generating random fiction, it stays close to the emotional soul of the original story — preserving its tone, longing, and ache while imagining endings that feel tender, devastating, hopeful, or quietly healing. Not every ending needs to be undone. But some deserve to be imagined differently. 🎞️

Come try it out [**here**](https://what-if-cinema.vercel.app/). See the project [**here**](https://github.com/olivia3395/What_If_Cinema).

  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <img src='images/letter_from_sceen.png' alt="Letters from the Screen" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[**Letters from the Screen**](https://letters-from-the-screen.vercel.app/)
· [**GitHub**](https://github.com/olivia3395/Letters_from_the_Screen)<br>

**Letters from the Screen** is a cinematic emotional companion where users share what is on their heart and receive a healing letter from the movie or TV character they need most in that moment. More love letter than chatbot, it feels intimate, tender, and just a little magical. The comfort lies in its emotional closeness: it offers not advice, but presence — the rare feeling that a voice from another story has stepped out of the screen to sit beside you for a while. ✉️

Come try it out [**here**](https://letters-from-the-screen.vercel.app/). See the project [**here**](https://github.com/olivia3395/Letters_from_the_Screen).

  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <img src='images/if_you_disappeared.png' alt="If You Disappeared on a Trip" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[**If You Disappeared on a Trip**](https://if-you-disappeared.vercel.app/)
· [**GitHub**](https://github.com/olivia3395/if-you-disappeared)<br>

**If You Disappeared on a Trip** is an AI travel app for anyone who has ever wanted to slip away for a day or two. Instead of offering a typical itinerary, it creates a small borrowed life in another city based on your mood — cinematic, soothing, and touched with a bit of humor. There is a healing quality to it: not because it solves anything, but because it gives people a brief, imaginative place to rest, wander, and feel held by another version of life. Think scenes, snacks, photographs, and the kind of inner weather that only changes when you leave home. ✈️

Come try it out [**here**](https://if-you-disappeared.vercel.app/). See the project [**here**](https://github.com/olivia3395/if-you-disappeared).

  </div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <img src='images/souvenir_of_a_life.png' alt="Souvenirs of a Life Not Yet Lived" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[**Souvenirs of a Life Not Yet Lived**](https://souvenir-of-a-life.vercel.app/)
· [**GitHub**](https://github.com/olivia3395/Souvenir_of_a_life)<br>

**Souvenirs of a Life Not Yet Lived** is an immersive AI travel app where users step into a private museum of the lives they almost lived. Instead of planning a trip, it generates a small, emotionally resonant keepsake from a parallel life — a ticket, a postcard, a receipt, a note — based on the user’s mood, longing, and the kind of life they have been quietly standing outside of. The experience is cinematic, intimate, and collectible, inviting users not just to imagine another city, but another self they might still be growing toward. ✨

Come try it out [**here**](https://souvenir-of-a-life.vercel.app/). See the project [**here**](https://github.com/olivia3395/Souvenir_of_a_life).

  </div>
</div>



<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <img src='images/the_map_of_me.png' alt="The Map of Me" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[**The Map of Me**](https://the-map-of-me.vercel.app/)
· [**GitHub**](https://github.com/olivia3395/the-map-of-me)<br>

**The Map of Me** is a map-based cultural discovery app that lets users collect meaningful places and explore what lives around them beyond geography alone. After adding a city, users can move from the global atlas into a more curated layer of screen references, books, and local landmarks, so that a place becomes not just somewhere on the map, but a small world of its own. With its editorial layout and archive-inspired interface, the project reimagines mapping as a form of cultural browsing — part atlas, part city shelf, part personal collection. 🗺️

Come try it out [**here**](https://the-map-of-me.vercel.app/). See the project [**here**](https://github.com/olivia3395/the-map-of-me).


  </div>
</div>




<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <img src='images/macondo.png' alt="A Room in Macondo" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[**A Room in Macondo**](https://a-room-in-macondo.vercel.app/)
· [**GitHub**](https://github.com/olivia3395/a-room-in-macondo)<br>

**A Room in Macondo** is an atmospheric AI literary experience inspired by the world of *One Hundred Years of Solitude*. Rather than retelling the novel, it invites users to step inside its weather for a moment — to enter a room, a ritual, and a fate of their own within a rain-soaked world of memory, fire, butterflies, and magical realism. Through a small sequence of questions, the app transforms mood into a story fragment that feels less like generated text and more like something recovered from an old archive in Macondo itself. With its dark-gold palette, burning-paper visuals, and haunted editorial layout, the project reimagines literary interaction as something immersive, cinematic, and quietly uncanny. 🦋

Come try it out [**here**](https://a-room-in-macondo.vercel.app/). See the project [**here**](https://github.com/olivia3395/a-room-in-macondo).

  </div>
</div>


# 🎖 Honors 
- *2025*: Student Travel Grant, Boston University  
- *2025*: Ralph B. D’Agostino Endowed Fellowship, Boston University  
- *2025*: Outstanding Teaching Fellow Award, Boston University  

- *2019*: Outstanding Graduate, Shandong University  

- *2018*: Hua Loo-Keng Scholarship, Chinese Academy of Sciences  
- *2018*: National Gold Award, Internet+ Innovation & Entrepreneurship Competition
- *2018*: First-Class Scholarship, Shandong University  
- *2018*: Outstanding Student Leader, Shandong University  





# 📖 Educations
- *2021.09 – Now*: Ph.D. in Statistics, Boston University

- *2019.09 – 2020.05*: M.A. in Statistics (Data Science Track), Columbia University

- *2018.05 – 2019.06*: B.S. in Mathematics, Chinese Academy of Sciences
  (Jointly Supervised Talent Program)
  
- *2015.09 – 2019.06*: B.S. in Mathematics, Shandong University


# 💻 Internships

- *2025.05 – 2025.08*: Data Scientist Intern, Plymouth Rock Insurance (Boston, MA)  
  - Built AWS SageMaker pipeline for property-level loss prediction; boosted Gini +4.3% using XGBoost Tweedie 
  - Developed LLM-powered image risk scoring with GPT-4o + Google Street View; integrated outputs into actuarial models  

# 🗂️ Projects
- **Mini GPT Pre-Training** · [Code](https://github.com/olivia3395/Mini-GPT-Pre-Training) — Decoder-only GPT built from scratch in PyTorch; character-level LM trained on TinyShakespeare.
- **LLaMA 2 Fine-Tuning (QLoRA)** · [Code](https://github.com/olivia3395/LLaMA2_finetuning) — 4-bit QLoRA (PEFT/bitsandbytes) instruction tuning on consumer GPUs.
- **LLM 1-bit Quantization (HQQ)** · [Code](https://github.com/olivia3395/HQQ_1-bit_Quantization) — HQQ 1-bit weight quantization on LLaMA 2; speed–accuracy benchmarks.
- **RLHF (PPO)** · [Code](https://github.com/olivia3395/rlhf_finetuning) — PPO-based RLHF with custom rewards for controllable generation.
- **Traffic Bot Detection** · [Code](https://github.com/olivia3395/Traffic_Bot_Detection) — Three-layer ensemble (statistical rules + Isolation Forest + Gradient Boosting) with LLM-agent fingerprinting.
- **Dog Breed Classification (CNN + VGG16/ResNet50)** · [Code](https://github.com/olivia3395/dog_identification_app) · [Demo](https://olivia3395.github.io/dog_identification_app/) — **75.48%** accuracy (Stanford Dogs); Flask deployment.  
- **Credit Risk Prediction (XGBoost + SMOTE)** · [Code](https://github.com/olivia3395/credit-default-risk) — **0.976 AUC**; default-class recall **91%**, F1 **0.95**.  
- **Pedestrian Detection (Fast R-CNN style + Siamese)** · [Code](https://github.com/olivia3395) — few-shot-ready pipeline + pruning/fusion for faster inference.  
- **Mask Detection (ResNet50 + Grad-CAM)** · [Code](https://github.com/olivia3395/MaskDetection) — **94%** test accuracy; explainable predictions via Grad-CAM.
- **Financial Sentiment Analysis (DistilBERT)** · [Code](https://github.com/olivia3395/finanial-text-analysis) · [Demo](https://olivia3395.github.io/finanial-text-analysis/) — **85%** accuracy; **30%** faster inference.  
- **Spam Detection (TF-IDF + Naive Bayes)** · [Code](https://github.com/olivia3395/spam_detection) — **96%** precision / **94%** recall; interpretable token analysis.  
- **Interactive Airbnb Booking Dashboard (R Shiny)** · [Code](https://github.com/olivia3395/rshinyapp_airbnb) · [Demo](https://yuyaowang.shinyapps.io/airbnb_app/) — interactive maps + real-time filtering.  
- **Bayesian Logistic Regression (RStan; Spike-and-Slab)** · [Code](https://github.com/olivia3395/Bayesian_Lung_Cancer_Prediction) · [Demo](https://olivia3395.github.io/Bayesian_Lung_Cancer_Prediction/) — sparse selection + full MCMC diagnostics.  
- **A/B Testing for Ad Targeting Optimization** · [Code](https://github.com/olivia3395/AB_Test_Ad) — bootstrap CIs + power analysis; drove **+15%** conversion.  
- **Time Series Forecasting for Financial Exposure (SARIMA/ETS/Prophet)** · [Code](https://github.com/olivia3395/GlobalRiskAnalysisUSA) · [Demo](https://olivia3395.github.io/GlobalRiskAnalysisUSA/) — robust forecasts + residual diagnostics.  
- **Movie Recommendation** · [Code](https://github.com/olivia3395/Spring2020-Project4-group8) — ALS/SVD + kernel ridge refinement; accuracy ↑ **15%**, compute ↓ **20%**.  
- **Customer Segmentation** · [Code](https://github.com/olivia3395/Customer_Segmentation) — elbow/silhouette-driven clustering for targeting.  
- **R&B Lyrical Analysis(LDA + VADER)** · [Code](https://github.com/olivia3395/R-B_Lyrics) — topic discovery + sentiment trends across decades.


# 📃 Academic Service & Presentations

- **Presentations:** CIKM 2024; NeurIPS 2025  
- **Reviewer:** CIKM 2025; ICME 2026; ICML 2026; KDD 2026


# 📝 Teaching Experience

- **Instructor, Boston University:** MA 582 *Mathematical Statistics*; MA 113 *Elementary Statistics*  
- **Teaching Assistant, Boston University:** MA 575 *Generalized Linear Models*; MA 582 *Mathematical Statistics*; MA 415 *Data Science in R*; MA 214 *Applied Statistics*; MA 213 *Statistics and Probability*; MA 113 *Elementary Statistics*
  
# 🎨 Interests

🎵 Mandarin R&B loyalist — Leehom Wang, David Tao, Khalil Fong🦋, Dean Ting

🎹 Trained in piano, calligraphy, and ink painting

🏞️ National park lover · 🫧 lake admirer · 🌅 opacarophile — welcome to my [Gallery](/gallery/)  


