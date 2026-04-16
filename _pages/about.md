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

[**SCOT: Multi-Source Cross-City Transfer with Optimal-Transport Soft-Correspondence Objectives**](https://arxiv.org/abs/2604.07383)<br>
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



# 🤖 LLM Engineering Projects

<table>
  <tr>
    <td width="50%" valign="top">
      <img src="https://img.shields.io/badge/AGENT-0D9488?style=flat-square&labelColor=0D9488" alt="AGENT"> <b><a href="https://github.com/olivia3395/traffic_bot_detection">Traffic Bot Detection</a></b> <a href="https://github.com/olivia3395/traffic_bot_detection"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      <sub>Isolation Forest · GBM · <b>LLM fingerprint scorer</b> · CSIC 2010</sub>
    </td>
    <td width="50%" valign="top">
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
      <img src="https://img.shields.io/badge/RAG-7C3AED?style=flat-square&labelColor=7C3AED" alt="RAG"> <b><a href="https://github.com/olivia3395/RAGAudit">RAGAudit: Hallucination Detection</a></b> <a href="https://github.com/olivia3395/RAGAudit"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a> <a href="https://github.com/olivia3395/RAGAudit/blob/main/RAG%20%26%20Hallucination%20Detection.pdf"><img src="https://img.shields.io/badge/PDF-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="PDF"></a><br>
      <sub>BM25+FAISS · <b>NLI · SelfCheckGPT · sem. entropy</b> · Mistral-7B</sub>
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/ALIGN-DB2777?style=flat-square&labelColor=DB2777" alt="ALIGN"> <b><a href="https://github.com/olivia3395/TuneShift">TuneShift: Fine-Tuning</a></b> <a href="https://github.com/olivia3395/TuneShift"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      <sub>instruction · dialogue · <b>LoRA / QLoRA</b> · domain transfer</sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/ALIGN-DB2777?style=flat-square&labelColor=DB2777" alt="ALIGN"> <b><a href="https://github.com/olivia3395/AlignDPO-Preference-Optimization-from-Scratch">AlignDPO</a></b> <a href="https://github.com/olivia3395/AlignDPO-Preference-Optimization-from-Scratch"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a> <a href="https://github.com/olivia3395/AlignDPO-Preference-Optimization-from-Scratch/blob/main/DPO%20%26%20PPO.pdf"><img src="https://img.shields.io/badge/PDF-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="PDF"></a><br>
      <sub><b>DPO · IPO · KTO</b> · QLoRA · Mistral-7B · HH-RLHF</sub>
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/ALIGN-DB2777?style=flat-square&labelColor=DB2777" alt="ALIGN"> <b><a href="https://github.com/olivia3395/rlhf_finetuning">RLHF with PPO</a></b> <a href="https://github.com/olivia3395/rlhf_finetuning"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a> <a href="https://github.com/olivia3395/PPO-based-RLHF/blob/main/RAG%20System.pdf"><img src="https://img.shields.io/badge/PDF-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="PDF"></a><br>
      <sub>GPT-2 · GAE · <b>clipped PPO · adaptive KL</b> · W&amp;B</sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/CORE-EA580C?style=flat-square&labelColor=EA580C" alt="CORE"> <b><a href="https://github.com/olivia3395/mini_pretrain">Mini LLM Pre-Training</a></b> <a href="https://github.com/olivia3395/mini_pretrain"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a> <a href="https://github.com/olivia3395/Mini-GPT-Pre-Training/blob/main/LLM.pdf"><img src="https://img.shields.io/badge/PDF-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="PDF"></a><br>
      <sub><b>10.7M GPT</b> · PyTorch · <b>PPL 65 → 4.7</b> @ 5k iters</sub>
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/CORE-EA580C?style=flat-square&labelColor=EA580C" alt="CORE"> <b><a href="https://github.com/olivia3395/HQQ_1-bit_Quantization">HQQ: 1-bit Quantization</a></b> <a href="https://github.com/olivia3395/HQQ_1-bit_Quantization"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      <sub>1–8 bit · proximal opt · <b>W1G64: 12.7× · &gt;4× speedup</b></sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/CORE-EA580C?style=flat-square&labelColor=EA580C" alt="CORE"> <b><a href="https://github.com/olivia3395/DraftVerify">DraftVerify: Speculative Decoding</a></b> <a href="https://github.com/olivia3395/DraftVerify"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      <sub><b>draft + verifier</b> · latency · throughput · acceptance</sub>
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/CAUSAL-0369A1?style=flat-square&labelColor=0369A1" alt="CAUSAL"> <b><a href="https://github.com/olivia3395/Causal-Promotion-Optimization">Causal Promotion Optimization</a></b> <a href="https://github.com/olivia3395/Causal-Promotion-Optimization"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a> <a href="https://github.com/olivia3395/Causal-Promotion-Optimization/blob/main/Causal_Promotion.pdf"><img src="https://img.shields.io/badge/PDF-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="PDF"></a><br>
      <sub><b>AIPW</b> · LightGBM · <b>DRLearner CATE</b> · OR-Tools · FastAPI</sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/CAUSAL-0369A1?style=flat-square&labelColor=0369A1" alt="CAUSAL"> <b><a href="https://github.com/olivia3395/Pricing-Impact-Analyzer">Congestion Pricing Analyzer</a></b> <a href="https://github.com/olivia3395/Pricing-Impact-Analyzer"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a> <a href="https://github.com/olivia3395/Pricing-Impact-Analyzer/blob/main/Congestion%20Pricing%20Impact%20Analyzer.pdf"><img src="https://img.shields.io/badge/PDF-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="PDF"></a><br>
      <sub><b>TWFE · CS-DiD · Synth DiD · Double ML</b> · <b>12M+ NYC TLC</b></sub>
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/ML-16A34A?style=flat-square&labelColor=16A34A" alt="ML"> <b><a href="https://github.com/olivia3395/Retail-Demand-Forecasting">Demand Forecasting</a></b> <a href="https://github.com/olivia3395/Retail-Demand-Forecasting"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a> <a href="https://github.com/olivia3395/Retail-Demand-Forecasting/blob/main/Retail_Demand.pdf"><img src="https://img.shields.io/badge/PDF-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="PDF"></a><br>
      <sub>Seasonal Naive · LightGBM · <b>TFT</b> · <b>M5</b> · 28-day · store-SKU</sub>
    </td>
  </tr>
</table>






# 📖 Educations
- *2021.09 – Now*: Ph.D. in Statistics, Boston University

- *2019.09 – 2020.05*: M.A. in Statistics (Data Science Track), Columbia University

- *2018.05 – 2019.06*: B.S. in Mathematics, Chinese Academy of Sciences
  (Jointly Supervised Talent Program)
  
- *2015.09 – 2019.06*: B.S. in Mathematics, Shandong University


# 💻 Internships


<table>
  <tr>
    <td width="100" valign="top">
      <img src="images/plymouth_logo.png" alt="Plymouth Rock" width="90">
    </td>
    <td valign="top">
      <b><font size="4">Data Scientist Intern</font></b> · <a href="https://www.plymouthrock.com/">Plymouth Rock Insurance</a><br>
      <sub>📍 Boston, MA &nbsp;·&nbsp; 🗓️ May 2025 – Aug 2025</sub>
      <ul>
        <li>Built <b>AWS SageMaker</b> pipeline for property-level loss prediction; boosted <b>Gini +4.3%</b> via <b>XGBoost Tweedie</b>.</li>
        <li>Developed <b>LLM-powered image risk scoring</b> with <b>GPT-4o + Google Street View</b>; integrated outputs into production actuarial models.</li>
      </ul>
    </td>
  </tr>
</table>




# ✨ My Apps


<table>
  <tr>
    <td width="40%" valign="top">
      <img src="images/mbti_vibe.png" alt="MBTI Vibe" width="100%">
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/%E2%9C%A8_PERSONA-8B5CF6?style=flat-square&labelColor=8B5CF6" alt="PERSONA">&nbsp;<b><font size="4">MBTI Vibe</font></b><br>
      <i>What kind of personality atmosphere does this content radiate?</i>
      <p>A multimodal AI app that reads text and images — captions, poems, screenshots, moodboards, all those tiny digital traces of self-expression — and whispers back the MBTI vibe it gives off. It doesn't claim to tell you who someone <i>really</i> is. It asks a softer, kinder question instead.</p>
      <a href="https://mbti-vibe-ten.vercel.app/"><img src="https://img.shields.io/badge/Try_it-22C55E?style=flat-square&logo=rocket&logoColor=white" alt="Try it"></a>
      <a href="https://github.com/olivia3395/MBTI-Vibe"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
    </td>
  </tr>
</table>

<br>

<table>
  <tr>
    <td width="40%" valign="top">
      <img src="images/what_if_cinema.png" alt="What If Cinema" width="100%">
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/%F0%9F%8E%AC_CINEMA-DC2626?style=flat-square&labelColor=DC2626" alt="CINEMA">&nbsp;<b><font size="4">What If Cinema</font></b><br>
      <i>Rewrite a film's final heartbeat.</i>
      <p>For anyone who has ever left a movie wondering — <i>what if it ended differently?</i> Insert a new scene, change one choice, shift a single moment. It stays close to the emotional soul of the original — preserving its tone, longing, and ache — while imagining endings that feel tender, devastating, hopeful, or quietly healing. Not every ending needs to be undone. But some deserve to be imagined differently.</p>
      <a href="https://what-if-cinema.vercel.app/"><img src="https://img.shields.io/badge/Try_it-22C55E?style=flat-square&logo=rocket&logoColor=white" alt="Try it"></a>
      <a href="https://github.com/olivia3395/What_If_Cinema"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
    </td>
  </tr>
</table>

<br>

<table>
  <tr>
    <td width="40%" valign="top">
      <img src="images/letter_from_sceen.png" alt="Letters from the Screen" width="100%">
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/%E2%9C%89%EF%B8%8F_LETTER-DB2777?style=flat-square&labelColor=DB2777" alt="LETTER">&nbsp;<b><font size="4">Letters from the Screen</font></b><br>
      <i>A healing letter from the character you need most.</i>
      <p>Share what is on your heart, and receive a letter from the movie or TV character who would understand. More love letter than chatbot — intimate, tender, just a little magical. The comfort lies in its emotional closeness: it offers not advice, but presence. The rare feeling that a voice from another story has stepped out of the screen to sit beside you for a while.</p>
      <a href="https://letters-from-the-screen.vercel.app/"><img src="https://img.shields.io/badge/Try_it-22C55E?style=flat-square&logo=rocket&logoColor=white" alt="Try it"></a>
      <a href="https://github.com/olivia3395/Letters_from_the_Screen"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
    </td>
  </tr>
</table>

<br>

<table>
  <tr>
    <td width="40%" valign="top">
      <img src="images/if_you_disappeared.png" alt="If You Disappeared on a Trip" width="100%">
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/%E2%9C%88%EF%B8%8F_ESCAPE-0EA5E9?style=flat-square&labelColor=0EA5E9" alt="ESCAPE">&nbsp;<b><font size="4">If You Disappeared on a Trip</font></b><br>
      <i>A small borrowed life in another city.</i>
      <p>For anyone who has ever wanted to slip away for a day or two. Instead of a typical itinerary, it builds a small borrowed life in another city based on your mood — cinematic, soothing, touched with a bit of humor. Not because it solves anything, but because it gives you a brief imaginative place to rest, wander, and feel held by another version of life. Scenes, snacks, photographs, and the kind of inner weather that only changes when you leave home.</p>
      <a href="https://if-you-disappeared.vercel.app/"><img src="https://img.shields.io/badge/Try_it-22C55E?style=flat-square&logo=rocket&logoColor=white" alt="Try it"></a>
      <a href="https://github.com/olivia3395/if-you-disappeared"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
    </td>
  </tr>
</table>

<br>

<table>
  <tr>
    <td width="40%" valign="top">
      <img src="images/souvenir_of_a_life.png" alt="Souvenirs of a Life Not Yet Lived" width="100%">
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/%F0%9F%8E%9F%EF%B8%8F_KEEPSAKE-C2410C?style=flat-square&labelColor=C2410C" alt="KEEPSAKE">&nbsp;<b><font size="4">Souvenirs of a Life Not Yet Lived</font></b><br>
      <i>A private museum of the lives you almost lived.</i>
      <p>Step into a curated archive of parallel selves. Instead of planning a trip, it generates a small, emotionally resonant keepsake — a ticket, a postcard, a receipt, a note — from a life you've been quietly standing outside of. Cinematic, intimate, collectible. An invitation to imagine not just another city, but another self you might still be growing toward.</p>
      <a href="https://souvenir-of-a-life.vercel.app/"><img src="https://img.shields.io/badge/Try_it-22C55E?style=flat-square&logo=rocket&logoColor=white" alt="Try it"></a>
      <a href="https://github.com/olivia3395/Souvenir_of_a_life"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
    </td>
  </tr>
</table>

<br>

<table>
  <tr>
    <td width="40%" valign="top">
      <img src="images/the_map_of_me.png" alt="The Map of Me" width="100%">
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/%F0%9F%97%BA%EF%B8%8F_ATLAS-0369A1?style=flat-square&labelColor=0369A1" alt="ATLAS">&nbsp;<b><font size="4">The Map of Me</font></b><br>
      <i>Part atlas, part city shelf, part personal collection.</i>
      <p>A map-based cultural discovery app for collecting meaningful places and exploring what lives around them beyond geography alone. After adding a city, you move from the global atlas into a curated layer of screen references, books, and local landmarks — so a place becomes not just somewhere on the map, but a small world of its own. Editorial, archive-inspired, cultural browsing as cartography.</p>
      <a href="https://the-map-of-me.vercel.app/"><img src="https://img.shields.io/badge/Try_it-22C55E?style=flat-square&logo=rocket&logoColor=white" alt="Try it"></a>
      <a href="https://github.com/olivia3395/the-map-of-me"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
    </td>
  </tr>
</table>

<br>

<table>
  <tr>
    <td width="40%" valign="top">
      <img src="images/macondo.png" alt="A Room in Macondo" width="100%">
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/%F0%9F%A6%8B_LITERARY-92400E?style=flat-square&labelColor=92400E" alt="LITERARY">&nbsp;<b><font size="4">A Room in Macondo</font></b><br>
      <i>Step inside the weather of One Hundred Years of Solitude.</i>
      <p>An atmospheric AI literary experience inspired by García Márquez's rain-soaked world of memory, fire, butterflies, and magical realism. Rather than retelling the novel, it invites you into a room, a ritual, and a fate of your own. A small sequence of questions transforms mood into a story fragment that feels less like generated text and more like something recovered from an old archive in Macondo itself. Dark-gold palette, burning-paper visuals, haunted editorial layout.</p>
      <a href="https://a-room-in-macondo.vercel.app/"><img src="https://img.shields.io/badge/Try_it-22C55E?style=flat-square&logo=rocket&logoColor=white" alt="Try it"></a>
      <a href="https://github.com/olivia3395/a-room-in-macondo"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
    </td>
  </tr>
</table>






# 🎖 Honors 
- *2025*: Student Travel Grant, Boston University  
- *2025*: Ralph B. D’Agostino Endowed Fellowship, Boston University  
- *2025*: Outstanding Teaching Fellow Award, Boston University  

- *2019*: Outstanding Graduate, Shandong University  

- *2018*: Hua Loo-Keng Scholarship, Chinese Academy of Sciences  
- *2018*: National Gold Award, Internet+ Innovation & Entrepreneurship Competition
- *2018*: First-Class Scholarship, Shandong University  
- *2018*: Outstanding Student Leader, Shandong University  


# 🗂️ Projects

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



# 📃 Academic Service & Talks

- **Presentations:** CIKM 2024; NeurIPS 2025  
- **Reviewer:** CIKM 2025; ICME 2026; ICML 2026; KDD 2026


# 📝 Teaching Experience

- **Instructor, Boston University:** MA 582 *Mathematical Statistics*; MA 113 *Elementary Statistics*  
- **Teaching Assistant, Boston University:** MA 575 *Generalized Linear Models*; MA 582 *Mathematical Statistics*; MA 415 *Data Science in R*; MA 214 *Applied Statistics*; MA 213 *Statistics and Probability*; MA 113 *Elementary Statistics*
  
# 🎨 Interests

🎵 Mandarin R&B loyalist — Leehom Wang, David Tao, Khalil Fong🦋, Dean Ting

🎹 Trained in piano, calligraphy, and ink painting

🏞️ National park lover · 🫧 lake admirer · 🌅 opacarophile — welcome to my [Gallery](/gallery/)  


