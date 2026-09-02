---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400&family=Inter:wght@400;500;600&display=swap');

.page__content {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 0.92rem;
  line-height: 1.55;
  color: #2A2724;
}
.page__content p { margin: 0 0 0.7em; }


.page__content h1 {
  font-family: 'Newsreader', Georgia, serif;
  font-weight: 600;
  font-size: 1.18rem;
  letter-spacing: -0.005em;
  color: #2A2724;
  margin: 2em 0 0.55em;
  padding-bottom: 0.22em;
  border-bottom: 1px solid #EFEBE3;
}
.page__content h1 .e {
  font-size: 0.78em;
  opacity: 0.9;
  margin-right: 0.15em;
  vertical-align: 0.04em;
}
.page__content h2 {
  font-family: 'Newsreader', Georgia, serif;
  font-weight: 600;
  font-size: 1.02rem;
  color: #6B6558;
  margin: 1.1em 0 0.4em;
}


.page__content a {
  color: #1B6B7A;
  text-decoration: none;
  border-bottom: 1px solid rgba(27, 107, 122, 0.22);
  transition: border-color 0.2s ease;
}
.page__content a:hover { border-bottom-color: #1B6B7A; }


.page__content ul { margin: 0.3em 0 0.7em; padding-left: 1.15em; }
.page__content li { margin-bottom: 0.18em; line-height: 1.5; }
.page__content h1 + ul li { margin-bottom: 0.3em; }
.page__content sub { font-size: 0.8rem; line-height: 1.5; color: #857C6F; }
.page__content .compact { line-height: 1.85; margin: 0.2em 0 0.6em; }

.page__content table { border: none; margin: 0.4em 0 0.9em; }
.page__content table tr { border: none; background: none !important; }
.page__content table td { border: none; padding: 0.25em 0.9em 0.75em 0; line-height: 1.5; }
.page__content img[src*="shields.io"] { height: 17px; width: auto; vertical-align: -3px; }


.projgrid {
  column-count: 2;
  column-gap: 2.8rem;
  margin: 0.9em 0 0.4em;
}
.pg {
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  padding-bottom: 1.05em;
}
.pg-cat {
  margin-bottom: 0.28em;
  font-size: 0.78rem;
  line-height: 1.35;
  color: #9A9184;
}
.pg-cat svg {
  width: 13px;
  height: 13px;
  vertical-align: -0.15em;
  margin-right: 0.35em;
  opacity: 0.7;
}
.pg-list {
  border-left: 1px solid #EFEBE3;
  padding-left: 0.95rem;
}
.p { line-height: 1.7; }
.page__content .p a {
  font-family: 'Newsreader', Georgia, serif;
  font-weight: 600;
  font-size: 0.98rem;
  letter-spacing: -0.005em;
  color: #2A2724;
  border-bottom: none;
  transition: color 0.18s ease;
}
.page__content .p a:hover { color: #1B6B7A; border-bottom: none; }
.p i {
  font-style: normal;
  font-size: 0.8rem;
  color: #8A8175;
  margin-left: 0.5em;
}
.page__content .p-more { font-size: 0.8rem; line-height: 1.6; color: #8A8175; }
.page__content .p-more a {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: #8A8175;
  border-bottom: 1px solid rgba(138, 129, 117, 0.3);
}
.page__content .p-more a:hover { color: #1B6B7A; border-bottom-color: #1B6B7A; }

@media (max-width: 700px) {
  .projgrid { column-count: 1; }
}


.pub {
  display: flex;
  align-items: center;
  gap: 1.4rem;
  background: #FBF8F3;
  padding: 1.05rem 1.25rem;
  margin-bottom: 0.85rem;
}
.pub-fig { flex: 0 0 236px; }
.pub-fig img {
  display: block;
  width: 100%;
  height: 128px;
  object-fit: contain;
}
.pub-body { flex: 1; min-width: 0; }
.page__content .pub-title {
  display: block;
  font-family: 'Newsreader', Georgia, serif;
  font-weight: 600;
  font-size: 1.02rem;
  line-height: 1.35;
  letter-spacing: -0.005em;
  color: #2A2724;
  border-bottom: none;
  margin-bottom: 0.3em;
  transition: color .18s ease;
}
.page__content .pub-title:hover { color: #1B6B7A; border-bottom: none; }
.pub-desc {
  font-size: 0.83rem;
  line-height: 1.55;
  color: #7A7266;
  margin-bottom: 0.4em;
}
.pub-meta { font-size: 0.83rem; line-height: 1.5; color: #9A9184; }
.pub-meta b { font-weight: 600; color: #2A2724; }
.page__content .pub-meta a { color: #6B6558; border-bottom: none; }
.page__content .pub-meta a:hover { color: #1B6B7A; }
@media (max-width: 700px) {
  .pub { flex-direction: column; align-items: flex-start; gap: 0.8rem; }
  .pub-fig { flex: none; width: 100%; }
}
  
</style>



{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Howdy! I work on transfer learning and representation learning: optimal transport, graph methods, and multimodal models, with a focus on what holds up when data is scarce, high-dimensional, and non-IID. The question I keep coming back to is **how you reuse what a model already knows when the world won't sit still**. Part of the answer is knowing when transfer provably works, through minimax rates, oracle inequalities, and safe-transfer criteria. The other part is the cases where structure itself is the obstacle: aligning graphs and manifolds without known correspondence, warm-starting policies in environments that keep moving, and specializing pretrained LLMs and VLMs without letting them overfit or drift out of alignment.

I'm a Statistics Ph.D. candidate at Boston University, advised by [Debarghya Mukherjee](https://debarghya-mukherjee.github.io/) and [Luis Carvalho](https://math.bu.edu/people/lecarval/). Before BU: M.A. in Statistics at Columbia, B.S. in Mathematics at Shandong University, and a year at AMSS, Chinese Academy of Sciences. Earlier I worked with [Zhanxing Zhu](https://zhanxingzhu.github.io/) and [Yongshun Gong](https://faculty.sdu.edu.cn/gongyongshun/en/), whose research on spatio-temporal structure still shapes how I think about heterogeneous, evolving data. For anyone who wants a gentler entry point, I've put together beginner-friendly slide decks on my main directions: **[transfer learning](transfer_learning.pdf)** · **[graph learning](graph_learning.pdf)** · **[optimal transport](optimal_transport.pdf)** · **[LLMs for time series](llm_time_series.pdf)**.



<!--

I’m a Ph.D. candidate in Statistics at Boston University, co-advised by [Prof. Debarghya Mukherjee](https://debarghya-mukherjee.github.io/) and [Prof. Luis Carvalho](https://math.bu.edu/people/lecarval/), and I also collaborate with [Prof. Nabarun Deb](https://nabarund.github.io/). Before BU, I earned my M.A. in Statistics from Columbia University and my B.S. in Mathematics from Shandong University, including a year of joint training at the Academy of Mathematics and Systems Science(AMSS), Chinese Academy of Sciences. My research sits at the intersection of statistics and machine learning, where I develop theoretically grounded transfer-learning and representation-learning methods—spanning optimal transport, graph mining, multimodal learning for structured, heterogeneous data in low-sample, high-dimensional, and non-IID settings. 

The question that keeps me up (in a good way):

> **How can we reuse past knowledge when the world—and the data—won’t sit still?**

In statistical learning, this is about transferring geometry or smoothness from a well-understood **source** distribution to a smaller, noisier **target** under shift.  In reinforcement learning, the **source** might be prior trajectories, simulators, or related tasks, while the **target** is the evolving environment, so we need principled rules for **what to keep, what to adapt, and what to forget**. And yes! **LLMs/VLMs** make this even more exciting (and tricky): they already contain a lot of cross-domain knowledge, but the real challenge is **extracting and specializing it safely** for downstream tasks without **overfitting, hallucination, or misalignment**.


## What I build
<table>
  <tr>
    <td width="50%" valign="top">
      <img src="https://img.shields.io/badge/THEORY-0369A1?style=flat-square&labelColor=0369A1" alt="THEORY">&nbsp;<b>Theory that supports practice</b><br>
      Minimax rates · oracle inequalities · regret bounds · safe-transfer criteria under covariate or structural shift.
    </td>
    <td width="50%" valign="top">
      <img src="https://img.shields.io/badge/GRAPHS-7C3AED?style=flat-square&labelColor=7C3AED" alt="GRAPHS">&nbsp;<b>Graph-structured transfer</b><br>
      Aligning and transporting information across graphs and manifolds — robust transfer when correspondence is messy or unknown.
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/RL_%26_BANDITS-DB2777?style=flat-square&labelColor=DB2777" alt="RL & BANDITS">&nbsp;<b>RL &amp; bandits under drift</b><br>
      Warm-started policies with uncertainty-aware adaptation for reliable sequential decision-making in changing environments.
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/LLMs_%26_VLMs-0D9488?style=flat-square&labelColor=0D9488" alt="LLMs & VLMs">&nbsp;<b>Transfer for LLMs / VLMs</b><br>
      Controlled adaptation · domain grounding · structure-preserving fine-tuning — so models adapt <i>without</i> getting sloppy.
    </td>
  </tr>
</table>


Curious about my research? I've put together beginner-friendly slide decks on my main research directions: **[transfer learning](transfer_learning.pdf)**, **[graph learning](graph_learning.pdf)**, **[optimal transport](optimal_transport.pdf)**, and **[LLMs for time series](llm_time_series.pdf)**.

Along my academic journey, I have been deeply fortunate to study and conduct research under the guidance of inspiring scholars, including [Prof. Zhanxing Zhu](https://zhanxingzhu.github.io/), whose influential work includes *Spatio-Temporal Graph Convolutional Networks (STGCN)* for traffic forecasting, and [Prof. Yongshun Gong](https://faculty.sdu.edu.cn/gongyongshun/en/). Their perspectives on deep learning, representation learning, and structured spatio-temporal systems have profoundly shaped how I think about evolving, heterogeneous data, and have guided my pursuit of principled transfer learning methods.


Beyond theory and modeling, I am drawn to building AI applications that reflect how I see people and the world. I have always felt that human beings are more than their outward forms, that something of the spirit, memory, and inner life exceeds the body that temporarily carries it. That is why I am especially fascinated by cinema, atmosphere, and emotionally resonant digital experiences ✨
-->


# 🔥 News
- *2026.05*: 🎉 My co-first-author paper **"From Text to Forecasts: Bridging Modality Gap with Temporal Evolution Semantic Space"** was selected for an **Oral** presentation (**top 0.5%**) at ([ICML 2026](https://icml.cc/))! 
- *2026.05*: 🎉 My co-authored paper **"Network Perturbation Aggregation for Graphon Estimation"** has been accepted by [SLADS](https://slads.scichina.com/)!
- *2026.04*: 🎉 My co-first-author paper **"From Text to Forecasts: Bridging Modality Gap with Temporal Evolution Semantic Space"** is accepted by ([ICML 2026](https://icml.cc/)) and selected as a **Spotlight**!
- *2026.04*: 🚀 I’ll be joining **Amazon** as an **Applied Scientist** this summer, based in the **Bay Area, California**!
- *2026.04*: 🎉 I am honored to receive the **Dean’s Dissertation Fellowship** from the **Graduate School of Arts and Sciences**!
- *2025.09*: 🎉 My first-author paper **"Transfer Learning on Edge Connecting Probability Estimation Under Graphon Model"** is accepted by ([NeurIPS 2025](https://neurips.cc/))!
- *2025.08*: 🎉 My co-authored paper **"Cross-Domain Hyperspectral Image Classification via Mamba-CNN and Knowledge Distillation"** is accepted by ([IEEE TGRS 2025](https://ieeexplore.ieee.org/))!



# 📝 Publications

<h2>First author</h2>
 
<div class="pub">
  <div class="pub-fig"><img src="images/gtrans_workflow.png" alt="GTrans"></div>
  <div class="pub-body">
    <a class="pub-title" href="https://openreview.net/pdf?id=i3sWs5614Y">Transfer Learning on Edge Connecting Probability Estimation Under Graphon Model</a>
    <div class="pub-desc">Graphon-level transfer without node correspondence: aligns graphs via Gromov–Wasserstein, then transfers edge structure nonparametrically, with residual smoothing that unlocks small and sparse targets.</div>
    <div class="pub-meta"><b>NeurIPS 2025</b> / <a href="https://neurips.cc/virtual/2025/poster/116597">Paper</a> / <a href="https://github.com/olivia3395/GTrans/blob/main/neurips_poster.pdf">Poster</a> / <a href="https://github.com/olivia3395/GTrans/blob/main/GTrans.pdf">Slides</a> / <a href="https://github.com/olivia3395/GTRANS">Code</a></div>
  </div>
</div>
 
<div class="pub">
  <div class="pub-fig"><img src="images/tess_workflow.png" alt="TESS"></div>
  <div class="pub-body">
    <a class="pub-title" href="https://arxiv.org/pdf/2603.12664">From Text to Forecasts: Bridging Modality Gap with Temporal Evolution Semantic Space</a>
    <div class="pub-desc">Translates free-form text into interpretable temporal primitives (distribution shift, volatility, shape, lag) and conditions a Transformer forecaster on them, reducing error by up to 29% under event-driven non-stationarity.</div>
    <div class="pub-meta"><b>ICML 2026 (Oral)</b> / <a href="https://arxiv.org/pdf/2603.12664">Paper</a> / <a href="https://github.com/olivia3395/olivia3395.github.io/blob/main/_pages/TESS.pdf">Slides</a> / <a href="https://github.com/olivia3395/TESS">Code</a></div>
  </div>
</div>
 
<div class="pub">
  <div class="pub-fig"><img src="images/phaseshift.png" alt="Phase Transition"></div>
  <div class="pub-body">
    <a class="pub-title" href="https://arxiv.org/abs/2507.00889">Phase Transition in Nonparametric Minimax Rates for Covariate Shifts on Approximate Manifolds</a>
    <div class="pub-desc">Minimax theory for near-manifold covariate shift, exposing a sharp phase transition governed by the support gap, together with a ratio-free estimator that adapts to unknown intrinsic dimension.</div>
    <div class="pub-meta"><b>Under review</b> / <a href="https://arxiv.org/abs/2507.00889">arXiv</a> / <a href="https://github.com/olivia3395/Covariate-Shifts-on-Approximate-Manifolds/blob/main/manifold_poster.pdf">Poster</a> / <a href="https://github.com/olivia3395/Covariate-Shifts-on-Approximate-Manifolds/blob/main/slides_Manifold.pdf">Slides</a> / <a href="https://github.com/olivia3395/Covariate-Shifts-on-Approximate-Manifolds">Code</a></div>
  </div>
</div>
 
<div class="pub">
  <div class="pub-fig"><img src="images/scot_main.png" alt="SCOT"></div>
  <div class="pub-body">
    <a class="pub-title" href="https://arxiv.org/abs/2604.07383">SCOT: Multi-Source Cross-City Transfer with Optimal-Transport Soft-Correspondence Objectives</a>
    <div class="pub-desc">Sinkhorn entropic-OT coupling gives many-to-many region alignment across cities with no node matching, paired with an OT-weighted contrastive objective that resists collapse under multi-source heterogeneity.</div>
    <div class="pub-meta"><b>Under review</b> / <a href="https://arxiv.org/abs/2604.07383">arXiv</a> / <a href="https://github.com/olivia3395/olivia3395.github.io/blob/main/_pages/SCOT.pdf">Slides</a></div>
  </div>
</div>
 
<h2>Co-author</h2>
 
<div class="pub">
  <div class="pub-fig"><img src="images/netpaging.png" alt="Net-Paging"></div>
  <div class="pub-body">
    <a class="pub-title" href="https://www.sciencedirect.com/science/article/pii/S305139012600005X">Network Perturbation Aggregation for Graphon Estimation</a>
    <div class="pub-desc">Generates graphon-preserving networks from a single observed graph and aggregates them to cut estimation variance, with a closed-form bias correction and guarantees that the base estimator's convergence is preserved.</div>
    <div class="pub-meta"><b>SLADS 2026</b> / <a href="https://www.sciencedirect.com/science/article/pii/S305139012600005X">Paper</a> / <a href="https://github.com/wd5457/gmixup">Code</a></div>
  </div>
</div>
 
<div class="pub">
  <div class="pub-fig"><img src="images/mkdnet.png" alt="MKDNet"></div>
  <div class="pub-body">
    <a class="pub-title" href="https://ieeexplore.ieee.org/abstract/document/11133483">Cross-Domain Hyperspectral Image Classification via Mamba-CNN and Knowledge Distillation</a>
    <div class="pub-desc">Pairs a Mamba global spectral encoder with CNN local features, then transfers across domains through teacher–student distillation and OT-guided graph consistency under severe spectral mismatch.</div>
    <div class="pub-meta"><b>IEEE TGRS 2025</b> / <a href="https://ieeexplore.ieee.org/abstract/document/11133483">Paper</a> / <a href="https://github.com/olivia3395/Cross-Domain-Hyperspectral-Image-Classification-/blob/main/IEEE%20TRGS%202025.pptx">Slides</a></div>
  </div>
</div>
 
<div class="pub">
  <div class="pub-fig"><img src="images/ssgp_workflow.png" alt="SSGP"></div>
  <div class="pub-body">
    <a class="pub-title" href="https://arxiv.org/abs/2603.01801">Semantic Scientific Graph Pruning for Reliable Agentic Paper Reproduction</a>
    <div class="pub-desc">Prunes dense scientific graphs into task-adaptive subgraphs by rank-based ensemble scoring, shrinking the search space for LLM agents and raising the success rate of automated paper reproduction.</div>
    <div class="pub-meta"><b>Under review</b> / <a href="https://arxiv.org/abs/2603.01801">arXiv</a></div>
  </div>
</div>



# 🤖 LLM & DS Projects


<div class="projgrid">
 
<div class="pg">
  <div class="pg-cat"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="8" cy="8" r="5.6"/><circle cx="8" cy="8" r="1.9"/></svg>Alignment</div>
  <div class="pg-list">
    <div class="p"><a href="https://github.com/olivia3395/AlignDPO-Preference-Optimization-from-Scratch">AlignDPO</a><i>DPO, IPO, KTO under QLoRA</i></div>
    <div class="p"><a href="https://github.com/olivia3395/RAGAudit">RAGAudit</a><i>NLI, SelfCheckGPT, semantic entropy</i></div>
  </div>
</div>
 
<div class="pg">
  <div class="pg-cat"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><circle cx="7" cy="7" r="4.6"/><line x1="10.4" y1="10.4" x2="13.6" y2="13.6"/></svg>Retrieval</div>
  <div class="pg-list">
    <div class="p"><a href="https://github.com/olivia3395/GraphRAG">GraphRAG</a><i>dense + entity graph + CLIP</i></div>
    <div class="p"><a href="https://github.com/olivia3395/Adaptive_RAG">Adaptive RAG</a><i>difficulty-aware query routing</i></div>
    <div class="p"><a href="https://github.com/olivia3395/DraftVerify">DraftVerify</a><i>speculative decoding, draft-verifier</i></div>
    <div class="p"><a href="https://github.com/olivia3395/HQQ_1-bit_Quantization">HQQ</a><i>1–8 bit quantization, 12.7x</i></div>
  </div>
</div>
 
<div class="pg">
  <div class="pg-cat"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><circle cx="3.4" cy="8" r="1.9"/><circle cx="12.6" cy="8" r="1.9"/><line x1="5.6" y1="8" x2="10.2" y2="8"/><polyline points="8.9,6.6 10.5,8 8.9,9.4"/></svg>Causal inference</div>
  <div class="pg-list">
    <div class="p"><a href="https://github.com/olivia3395/CausalLens">CausalLens</a><i>DoWhy, double ML, causal forests</i></div>
    <div class="p"><a href="https://github.com/olivia3395/Pricing-Impact-Analyzer">Congestion Pricing</a><i>CS-DiD on 12M+ NYC TLC trips</i></div>
    <div class="p"><a href="https://github.com/olivia3395/AB_Test_Ad">A/B Testing</a><i>bootstrap CIs, power analysis</i></div>
  </div>
</div>
 
<div class="pg">
  <div class="pg-cat"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"><path d="M13.4 3.4v6.2H6.2L3.2 12.2V3.4z"/></svg>Language</div>
  <div class="pg-list">
    <div class="p"><a href="https://github.com/olivia3395/finanial-text-analysis">Financial Sentiment</a><i>DistilBERT on financial news</i></div>
    <div class="p"><a href="https://github.com/olivia3395/spam_detection">Spam Detection</a><i>TF-IDF, Naive Bayes</i></div>
  </div>
</div>
 
<div class="pg">
  <div class="pg-cat"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M1.6 8s2.5-4.2 6.4-4.2S14.4 8 14.4 8s-2.5 4.2-6.4 4.2S1.6 8 1.6 8z"/><circle cx="8" cy="8" r="1.8"/></svg>Vision</div>
  <div class="pg-list">
    <div class="p"><a href="https://github.com/olivia3395/dog_identification_app">Dog Breed Classification</a><i>VGG16, ResNet50 transfer</i></div>
    <div class="p"><a href="https://github.com/olivia3395/MaskDetection">Mask Detection</a><i>ResNet50, Grad-CAM</i></div>
  </div>
</div>
 
<div class="pg">
  <div class="pg-cat"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><line x1="2.4" y1="13.2" x2="13.6" y2="13.2"/><line x1="4.6" y1="13.2" x2="4.6" y2="8.8"/><line x1="8" y1="13.2" x2="8" y2="4"/><line x1="11.4" y1="13.2" x2="11.4" y2="10.4"/></svg>Statistics</div>
  <div class="pg-list">
    <div class="p"><a href="https://github.com/olivia3395/Bayesian_Lung_Cancer_Prediction">Bayesian Logistic</a><i>spike-and-slab MCMC, RStan</i></div>
    <div class="p"><a href="https://github.com/olivia3395/GlobalRiskAnalysisUSA">Time Series</a><i>SARIMA, ETS, Prophet</i></div>
    <div class="p"><a href="https://github.com/olivia3395/credit-default-risk">Credit Risk</a><i>XGBoost, SMOTE</i></div>
    <div class="p"><a href="https://github.com/olivia3395/Customer_Segmentation">Segmentation</a><i>K-Means, elbow and silhouette</i></div>
    <div class="p"><a href="https://github.com/olivia3395/Spring2020-Project4-group8">Recommender</a><i>ALS, SVD matrix factorization</i></div>
  </div>
</div>
 
</div>
 
<!--

<table>
<tr>
<td width="50%" valign="top">
<b>LLM Alignment &amp; Evaluation</b><br>
<a href="https://github.com/olivia3395/AlignDPO-Preference-Optimization-from-Scratch"><img src="https://img.shields.io/badge/AlignDPO-D97757?style=flat-square&logo=huggingface&logoColor=F0EEE6" alt="AlignDPO"></a>
<a href="https://github.com/olivia3395/RAGAudit"><img src="https://img.shields.io/badge/RAGAudit-D97757?style=flat-square&logo=huggingface&logoColor=F0EEE6" alt="RAGAudit"></a><br>
<sub>DPO · IPO · KTO · QLoRA — NLI · SelfCheckGPT · semantic entropy</sub>
</td>
<td width="50%" valign="top">
<b>Retrieval &amp; Inference</b><br>
<a href="https://github.com/olivia3395/GraphRAG"><img src="https://img.shields.io/badge/GraphRAG-D97757?style=flat-square&logo=python&logoColor=F0EEE6" alt="GraphRAG"></a>
<a href="https://github.com/olivia3395/Adaptive_RAG"><img src="https://img.shields.io/badge/Adaptive_RAG-D97757?style=flat-square&logo=fastapi&logoColor=F0EEE6" alt="Adaptive RAG"></a>
<a href="https://github.com/olivia3395/DraftVerify"><img src="https://img.shields.io/badge/DraftVerify-D97757?style=flat-square&logo=pytorch&logoColor=F0EEE6" alt="DraftVerify"></a>
<a href="https://github.com/olivia3395/HQQ_1-bit_Quantization"><img src="https://img.shields.io/badge/HQQ-D97757?style=flat-square&logo=pytorch&logoColor=F0EEE6" alt="HQQ"></a><br>
<sub>entity graph + CLIP · query routing — speculative decoding · 1-bit quantization</sub>
</td>
</tr>
<tr>
<td valign="top">
<b>Causal Inference &amp; Experimentation</b><br>
<a href="https://github.com/olivia3395/CausalLens"><img src="https://img.shields.io/badge/CausalLens-D97757?style=flat-square&logo=streamlit&logoColor=F0EEE6" alt="CausalLens"></a>
<a href="https://github.com/olivia3395/Pricing-Impact-Analyzer"><img src="https://img.shields.io/badge/Congestion_Pricing-D97757?style=flat-square&logo=python&logoColor=F0EEE6" alt="Congestion Pricing"></a>
<a href="https://github.com/olivia3395/AB_Test_Ad"><img src="https://img.shields.io/badge/A%2FB_Testing-D97757?style=flat-square&logo=python&logoColor=F0EEE6" alt="A/B Testing"></a><br>
<sub>DoWhy · Double ML · Causal Forest — CS-DiD · Synthetic DiD · 12M+ NYC TLC</sub>
</td>
<td valign="top">
<b>NLP</b><br>
<a href="https://github.com/olivia3395/finanial-text-analysis"><img src="https://img.shields.io/badge/Financial_Sentiment-D97757?style=flat-square&logo=huggingface&logoColor=F0EEE6" alt="Financial Sentiment"></a>
<a href="https://github.com/olivia3395/spam_detection"><img src="https://img.shields.io/badge/Spam_Detection-D97757?style=flat-square&logo=scikitlearn&logoColor=F0EEE6" alt="Spam Detection"></a><br>
<sub>DistilBERT fine-tuning · TF-IDF · Naive Bayes</sub>
</td>
</tr>
<tr>
<td valign="top">
<b>Computer Vision</b><br>
<a href="https://github.com/olivia3395/dog_identification_app"><img src="https://img.shields.io/badge/Dog_Classification-D97757?style=flat-square&logo=keras&logoColor=F0EEE6" alt="Dog Classification"></a>
<a href="https://github.com/olivia3395/MaskDetection"><img src="https://img.shields.io/badge/Mask_Detection-D97757?style=flat-square&logo=opencv&logoColor=F0EEE6" alt="Mask Detection"></a><br>
<sub>VGG16 · ResNet50 · transfer learning · Grad-CAM</sub>
</td>
<td valign="top">
<b>Statistical Modeling</b><br>
<a href="https://github.com/olivia3395/Bayesian_Lung_Cancer_Prediction"><img src="https://img.shields.io/badge/Bayesian_Logistic-D97757?style=flat-square&logo=r&logoColor=F0EEE6" alt="Bayesian Logistic"></a>
<a href="https://github.com/olivia3395/GlobalRiskAnalysisUSA"><img src="https://img.shields.io/badge/Time_Series-D97757?style=flat-square&logo=plotly&logoColor=F0EEE6" alt="Time Series"></a>
<a href="https://github.com/olivia3395/credit-default-risk"><img src="https://img.shields.io/badge/Credit_Risk-D97757?style=flat-square&logo=python&logoColor=F0EEE6" alt="Credit Risk"></a>
<a href="https://github.com/olivia3395/Customer_Segmentation"><img src="https://img.shields.io/badge/Segmentation-D97757?style=flat-square&logo=scikitlearn&logoColor=F0EEE6" alt="Segmentation"></a>
<a href="https://github.com/olivia3395/Spring2020-Project4-group8"><img src="https://img.shields.io/badge/Recommender-D97757?style=flat-square&logo=apachespark&logoColor=F0EEE6" alt="Recommender"></a>
<a href="https://github.com/olivia3395/rshinyapp_airbnb"><img src="https://img.shields.io/badge/Airbnb_Dashboard-D97757?style=flat-square&logo=rstudioide&logoColor=F0EEE6" alt="Airbnb Dashboard"></a><br>
<sub>RStan · Spike-and-Slab MCMC · SARIMA · XGBoost · R Shiny</sub>
</td>
</tr>
</table>




<table>
  <tr>
    <td width="50%" valign="top">
      <img src="https://img.shields.io/badge/ALIGN-DB2777?style=flat-square&labelColor=DB2777" alt="ALIGN"> <b><a href="https://github.com/olivia3395/AlignDPO-Preference-Optimization-from-Scratch">AlignDPO</a></b> <a href="https://github.com/olivia3395/AlignDPO-Preference-Optimization-from-Scratch"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a> <a href="https://github.com/olivia3395/AlignDPO-Preference-Optimization-from-Scratch/blob/main/DPO%20%26%20PPO.pdf"><img src="https://img.shields.io/badge/PDF-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="PDF"></a><br>
      <sub><b>DPO · IPO · KTO</b> · QLoRA · Mistral-7B · HH-RLHF</sub>
    </td>
    <td width="50%" valign="top">
      <img src="https://img.shields.io/badge/RAG-7C3AED?style=flat-square&labelColor=7C3AED" alt="RAG"> <b><a href="https://github.com/olivia3395/RAGAudit">RAGAudit: Hallucination Detection</a></b> <a href="https://github.com/olivia3395/RAGAudit"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a> <a href="https://github.com/olivia3395/RAGAudit/blob/main/RAG%20%26%20Hallucination%20Detection.pdf"><img src="https://img.shields.io/badge/PDF-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="PDF"></a><br>
      <sub>BM25+FAISS · <b>NLI · SelfCheckGPT · sem. entropy</b> · Mistral-7B</sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/CAUSAL-0369A1?style=flat-square&labelColor=0369A1" alt="CAUSAL"> <b><a href="https://github.com/olivia3395/Pricing-Impact-Analyzer">Congestion Pricing Analyzer</a></b> <a href="https://github.com/olivia3395/Pricing-Impact-Analyzer"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a> <a href="https://github.com/olivia3395/Pricing-Impact-Analyzer/blob/main/Congestion%20Pricing%20Impact%20Analyzer.pdf"><img src="https://img.shields.io/badge/PDF-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="PDF"></a><br>
      <sub><b>TWFE · CS-DiD · Synth DiD · Double ML</b> · <b>12M+ NYC TLC</b></sub>
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/AGENT-0D9488?style=flat-square&labelColor=0D9488" alt="AGENT"> <b><a href="https://github.com/olivia3395/CausalLens">CausalLens: LLM-Augmented Causal Pipeline</a></b> <a href="https://github.com/olivia3395/CausalLens"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      <sub>DoWhy · <b>Double ML · Causal Forest</b> · Claude API · Streamlit</sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/RAG-7C3AED?style=flat-square&labelColor=7C3AED" alt="RAG"> <b><a href="https://github.com/olivia3395/GraphRAG">GraphRAG: Multimodal RAG</a></b> <a href="https://github.com/olivia3395/GraphRAG"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      <sub>dense + <b>entity graph</b> + CLIP · FastAPI · ChromaDB</sub>
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/RAG-7C3AED?style=flat-square&labelColor=7C3AED" alt="RAG"> <b><a href="https://github.com/olivia3395/Adaptive_RAG">Adaptive RAG</a></b> <a href="https://github.com/olivia3395/Adaptive_RAG"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      <sub><b>query routing</b> · iterative retrieval · self-check · FastAPI</sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/CORE-EA580C?style=flat-square&labelColor=EA580C" alt="CORE"> <b><a href="https://github.com/olivia3395/DraftVerify">DraftVerify: Speculative Decoding</a></b> <a href="https://github.com/olivia3395/DraftVerify"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      <sub><b>draft + verifier</b> · latency · throughput · acceptance</sub>
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/CORE-EA580C?style=flat-square&labelColor=EA580C" alt="CORE"> <b><a href="https://github.com/olivia3395/HQQ_1-bit_Quantization">HQQ: 1-bit Quantization</a></b> <a href="https://github.com/olivia3395/HQQ_1-bit_Quantization"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      <sub>1–8 bit · proximal opt · <b>W1G64: 12.7× · &gt;4× speedup</b></sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/CAUSAL-0369A1?style=flat-square&labelColor=0369A1" alt="CAUSAL"> <b><a href="https://github.com/olivia3395/Causal-Promotion-Optimization">Causal Promotion Optimization</a></b> <a href="https://github.com/olivia3395/Causal-Promotion-Optimization"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a> <a href="https://github.com/olivia3395/Causal-Promotion-Optimization/blob/main/Causal_Promotion.pdf"><img src="https://img.shields.io/badge/PDF-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="PDF"></a><br>
      <sub><b>AIPW</b> · LightGBM · <b>DRLearner CATE</b> · OR-Tools · FastAPI</sub>
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/ML-16A34A?style=flat-square&labelColor=16A34A" alt="ML"> <b><a href="https://github.com/olivia3395/Retail-Demand-Forecasting">Demand Forecasting</a></b> <a href="https://github.com/olivia3395/Retail-Demand-Forecasting"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a> <a href="https://github.com/olivia3395/Retail-Demand-Forecasting/blob/main/Retail_Demand.pdf"><img src="https://img.shields.io/badge/PDF-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="PDF"></a><br>
      <sub>Seasonal Naive · LightGBM · <b>TFT</b> · <b>M5</b> · 28-day · store-SKU</sub>
    </td>
  </tr>
</table>

-->


# 📖 Educations


<b>Boston University</b> &nbsp;·&nbsp; Ph.D. in Statistics &nbsp;·&nbsp; <i>2021.09 – present</i><br>
<b>Columbia University</b> &nbsp;·&nbsp; M.A. in Statistics, Data Science Track &nbsp;·&nbsp; <i>2019.09 – 2020.05</i><br>
<b>Shandong University</b> &nbsp;·&nbsp; B.S. in Mathematics &nbsp;·&nbsp; <i>2015.09 – 2019.06</i><br>
<b>Chinese Academy of Sciences</b> &nbsp;·&nbsp; Jointly Supervised Talent Program, AMSS &nbsp;·&nbsp; <i>2018.05 – 2019.06</i>


<!--
- *2021.09 – Now*: Ph.D. in Statistics, Boston University

- *2019.09 – 2020.05*: M.A. in Statistics (Data Science Track), Columbia University

- *2018.05 – 2019.06*: B.S. in Mathematics, Chinese Academy of Sciences
  (Jointly Supervised Talent Program)
  
- *2015.09 – 2019.06*: B.S. in Mathematics, Shandong University
-->


# 💻 Internships

<b>Applied Scientist Intern</b> · Amazon · <i>Summer 2026</i><br>
<sub>LangChain agent with LLM-based heuristic learning that turns request-level attribution into ranked traffic-blocking policies; MIMO forecasting on large-scale HTTP logs, benchmarking tabular foundation models against Chronos-2. </sub>

<b>Data Scientist Intern</b> · Plymouth Rock Insurance · <i>Summer 2025</i><br>
<sub>Multimodal property risk scoring with GPT-4o and Street View imagery; XGBoost Tweedie loss model on SageMaker (+4.3% Gini). <a href="HomeInsurance.pdf">Slides</a></sub>

<!--
<img src="images/plymouth_logo.png" alt="Plymouth Rock" width="50" align="left" hspace="15">

<b><font size="4">Data Scientist Intern</font></b> · Plymouth Rock Insurance<br>
<sub>📍 Boston, MA &nbsp;·&nbsp; 🗓️ May 2025 – Aug 2025</sub>

- Architected an end-to-end <b>AWS SageMaker</b> pipeline for property-level loss prediction using an <b>XGBoost Tweedie</b> model on multi-million-policy data, lifting <b>Gini by +4.3%</b> over the production baseline and directly improving underwriting risk segmentation.
  
- Pioneered an <b>LLM-powered visual risk scoring</b> system combining <b>GPT-4o multimodal reasoning</b> with <b>Google Street View</b> imagery to capture previously unobservable property features (roof condition, surroundings, hazards); integrated outputs into downstream <b>actuarial pricing models</b> as a novel signal layer.

- 📎 For a high-level, non-confidential summary of this work, see the <b>[Home Insurance slides](HomeInsurance.pdf)</b>.
<br clear="left">

-->

# 🎖 Honors 

<b>Boston University</b> &nbsp;·&nbsp; Dean's Dissertation Fellowship (2026) · Ralph B. D'Agostino Fellowship (2025) · Outstanding Teaching Award (2025) 
<b>Shandong University</b> &nbsp;·&nbsp; Outstanding Graduate (2019) · First-Class Scholarship (2018) · Outstanding Student Leader (2018)  
<b>National</b> &nbsp;·&nbsp; Hua Loo-Keng Scholarship (2018) · National Gold Award, Internet+ Innovation & Entrepreneurship Competition (2018)


<!--

- *2026*: Dean’s Dissertation Fellowship, Boston University
- *2025*: Student Travel Grant, Boston University  
- *2025*: Ralph B. D’Agostino Endowed Fellowship, Boston University  
- *2025*: Outstanding Teaching Fellow Award, Boston University  

- *2019*: Outstanding Graduate, Shandong University  

- *2018*: Hua Loo-Keng Scholarship, Chinese Academy of Sciences  
- *2018*: National Gold Award, Internet+ Innovation & Entrepreneurship Competition
- *2018*: First-Class Scholarship, Shandong University  
- *2018*: Outstanding Student Leader, Shandong University  

-->




# 📝 Service & Teaching

<b>Presentations</b> &nbsp;·&nbsp; CIKM 2024, NeurIPS 2025, ICML 2026<br>
<b>Reviewer</b> &nbsp;·&nbsp; CIKM 2025, ICME 2026, ICML 2026, KDD 2026, KDD 2027<br>
<b>Instructor</b> @ Boston University &nbsp;·&nbsp; MA 582 <i>Mathematical Statistics</i>, MA 113 <i>Elementary Statistics</i><br>
<b>TA</b> @ Boston University &nbsp;·&nbsp; MA 575 <i>Generalized Linear Models</i>, MA 582, MA 415 <i>Data Science in R</i>, MA 214 <i>Applied Stats</i>



# ✨ My Apps


A quiet collection of cinematic, atmospheric, and emotionally resonant side projects — part digital keepsakes, part memory-keepers. &nbsp;<a href="/myapps/"><b>See all →</b></a>

<table>
  <tr>
    <td align="center" width="20%">
      <a href="/myapps/#wilderness"><img src="images/NationalPark.png" alt="Wilderness" width="100%"></a><br>
      <sub>🌲 <b>Wilderness</b></sub>
    </td>
    <td align="center" width="20%">
      <a href="/myapps/#mbti-vibe"><img src="images/mbti_vibe.png" alt="MBTI Vibe" width="100%"></a><br>
      <sub>✨ <b>MBTI Vibe</b></sub>
    </td>
    <td align="center" width="20%">
      <a href="/myapps/#what-if-cinema"><img src="images/what_if_cinema.png" alt="What If Cinema" width="100%"></a><br>
      <sub>🎬 <b>What If Cinema</b></sub>
    </td>
    <td align="center" width="20%">
      <a href="/myapps/#letters-from-the-screen"><img src="images/letter_from_sceen.png" alt="Letters from the Screen" width="100%"></a><br>
      <sub>✉️ <b>Letters from Screen</b></sub>
    </td>
    <td align="center" width="20%">
      <a href="/myapps/#if-you-disappeared"><img src="images/if_you_disappeared.png" alt="If You Disappeared" width="100%"></a><br>
      <sub>✈️ <b>If You Disappeared</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="20%">
      <a href="/myapps/#souvenirs"><img src="images/souvenir_of_a_life.png" alt="Souvenirs" width="100%"></a><br>
      <sub>🎟️ <b>Souvenirs</b></sub>
    </td>
    <td align="center" width="20%">
      <a href="/myapps/#map-of-me"><img src="images/the_map_of_me.png" alt="The Map of Me" width="100%"></a><br>
      <sub>🗺️ <b>Map of Me</b></sub>
    </td>
    <td align="center" width="20%">
      <a href="/myapps/#macondo"><img src="images/macondo.png" alt="A Room in Macondo" width="100%"></a><br>
      <sub>🦋 <b>A Room in Macondo</b></sub>
    </td>
    <td align="center" width="20%">
      <a href="/myapps/#say-it-like-a-classic"><img src="images/say_it_like_a_classic.png" alt="Say It Like a Classic" width="100%"></a><br>
      <sub>✒️ <b>Say It Like a Classic</b></sub>
    </td>
    <td align="center" width="20%">
      <a href="/myapps/#boston-archive"><img src="images/boston_archive.png" alt="The Boston Archive" width="100%"></a><br>
      <sub>🏛️ <b>Boston Archive</b></sub>
    </td>
  </tr>
</table>











<!--


# 📂 DS Projects

<table>
  <tr>
    <td width="33%" valign="top">
      <img src="https://img.shields.io/badge/CV-7C3AED?style=flat-square&labelColor=7C3AED" alt="CV"> <b>Dog Classification</b> <a href="https://github.com/olivia3395/dog_identification_app"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a> <a href="https://olivia3395.github.io/dog_identification_app/"><img src="https://img.shields.io/badge/Demo-22C55E?style=flat-square&logo=rocket&logoColor=white" alt="Demo"></a><br>
      <sub>VGG16 · ResNet50 · Flask · <b>75.48%</b></sub>
    </td>
    <td width="33%" valign="top">
      <img src="https://img.shields.io/badge/ML-16A34A?style=flat-square&labelColor=16A34A" alt="ML"> <b>Credit Risk</b> <a href="https://github.com/olivia3395/credit-default-risk"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      <sub>XGBoost · SMOTE · <b>AUC 0.976</b></sub>
    </td>
    <td width="33%" valign="top">
      <img src="https://img.shields.io/badge/CV-7C3AED?style=flat-square&labelColor=7C3AED" alt="CV"> <b>Pedestrian Detection</b> <a href="https://github.com/olivia3395"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      <sub>Fast R-CNN · Siamese · few-shot</sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/NLP-DB2777?style=flat-square&labelColor=DB2777" alt="NLP"> <b>Financial Sentiment</b> <a href="https://github.com/olivia3395/finanial-text-analysis"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a> <a href="https://olivia3395.github.io/finanial-text-analysis/"><img src="https://img.shields.io/badge/Demo-22C55E?style=flat-square&logo=rocket&logoColor=white" alt="Demo"></a><br>
      <sub>DistilBERT · <b>85%</b> · <b>30%↑ speed</b></sub>
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/CV-7C3AED?style=flat-square&labelColor=7C3AED" alt="CV"> <b>Mask Detection</b> <a href="https://github.com/olivia3395/MaskDetection"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      <sub>ResNet50 · Grad-CAM · <b>94%</b></sub>
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/NLP-DB2777?style=flat-square&labelColor=DB2777" alt="NLP"> <b>Spam Detection</b> <a href="https://github.com/olivia3395/spam_detection"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      <sub>TF-IDF · NB · <b>P 96 / R 94</b></sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/APP-0369A1?style=flat-square&labelColor=0369A1" alt="APP"> <b>Airbnb Dashboard</b> <a href="https://github.com/olivia3395/rshinyapp_airbnb"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a> <a href="https://yuyaowang.shinyapps.io/airbnb_app/"><img src="https://img.shields.io/badge/Demo-22C55E?style=flat-square&logo=rocket&logoColor=white" alt="Demo"></a><br>
      <sub>R Shiny · maps · filtering</sub>
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/STATS-EA580C?style=flat-square&labelColor=EA580C" alt="STATS"> <b>Bayesian Logistic</b> <a href="https://github.com/olivia3395/Bayesian_Lung_Cancer_Prediction"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a> <a href="https://olivia3395.github.io/Bayesian_Lung_Cancer_Prediction/"><img src="https://img.shields.io/badge/Demo-22C55E?style=flat-square&logo=rocket&logoColor=white" alt="Demo"></a><br>
      <sub>RStan · Spike-and-Slab · MCMC</sub>
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/STATS-EA580C?style=flat-square&labelColor=EA580C" alt="STATS"> <b>A/B Testing</b> <a href="https://github.com/olivia3395/AB_Test_Ad"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      <sub>Bootstrap · power · <b>+15% conv.</b></sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/TS-0D9488?style=flat-square&labelColor=0D9488" alt="TS"> <b>Time Series Forecast</b> <a href="https://github.com/olivia3395/GlobalRiskAnalysisUSA"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a> <a href="https://olivia3395.github.io/GlobalRiskAnalysisUSA/"><img src="https://img.shields.io/badge/Demo-22C55E?style=flat-square&logo=rocket&logoColor=white" alt="Demo"></a><br>
      <sub>SARIMA · ETS · Prophet</sub>
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/ML-16A34A?style=flat-square&labelColor=16A34A" alt="ML"> <b>Movie Recommendation</b> <a href="https://github.com/olivia3395/Spring2020-Project4-group8"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      <sub>ALS · SVD · <b>+15% / −20%</b></sub>
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/ML-16A34A?style=flat-square&labelColor=16A34A" alt="ML"> <b>Customer Segmentation</b> <a href="https://github.com/olivia3395/Customer_Segmentation"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      <sub>K-Means · elbow · silhouette</sub>
    </td>
  </tr>
</table>

-->






# 🎨 Interests

🎵 Mandarin R&B loyalist — Leehom Wang, David Tao, Khalil Fong🦋, Dean Ting

🎹 Trained in piano, calligraphy, and ink painting

🏞️ National park lover · 🫧 lake admirer · 🌅 opacarophile — welcome to my [Gallery](/gallery/)  


