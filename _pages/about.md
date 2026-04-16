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
    <td width="130" valign="top">
      <img src="https://img.shields.io/badge/AGENT-0D9488?style=flat-square&labelColor=0D9488" alt="AGENT">
    </td>
    <td valign="top">
      <b><a href="https://github.com/olivia3395/traffic_bot_detection">Traffic Bot Detection</a></b>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/traffic_bot_detection"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      Three-layer ensemble with an <b>LLM-agent fingerprint scorer</b> (timing regularity, link coverage, API probing).<br>
      <sub>🗂️ CSIC 2010 + hybrid synthetic LLM traffic &nbsp;·&nbsp; 🎯 Isolation Forest + GBM + rule engine</sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/AGENT-0D9488?style=flat-square&labelColor=0D9488" alt="AGENT">
    </td>
    <td valign="top">
      <b><a href="https://github.com/olivia3395/DataPilot_Studio-">DataPilot: AI Data Science Agent</a></b>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/DataPilot_Studio-"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      Streamlit agent with <b>planner–analyst–verifier</b> workflow for autonomous CSV profiling, code generation, visualization, and summaries.<br>
      <sub>⚙️ Baseline ML + XGBoost, feature importance &nbsp;·&nbsp; 📊 Downloadable reports</sub>
    </td>
  </tr>
  <tr>
    <td width="130" valign="top">
      <img src="https://img.shields.io/badge/RAG-7C3AED?style=flat-square&labelColor=7C3AED" alt="RAG">
    </td>
    <td valign="top">
      <b><a href="https://github.com/olivia3395/GraphRAG">GraphRAG: Graph-Enhanced Multimodal RAG</a></b>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/GraphRAG"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      Production-style RAG combining dense retrieval + entity-graph expansion + image-text retrieval.<br>
      <sub>🔧 FastAPI + ChromaDB + sentence-transformers + CLIP &nbsp;·&nbsp; 🖼️ Heterogeneous text/image corpora</sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/RAG-7C3AED?style=flat-square&labelColor=7C3AED" alt="RAG">
    </td>
    <td valign="top">
      <b><a href="https://github.com/olivia3395/Adaptive_RAG">Adaptive RAG with Query Routing &amp; Self-Reflection</a></b>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/Adaptive_RAG"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      Routes queries, iterates retrieval, and self-checks for unsupported answers.<br>
      <sub>🔧 FastAPI + ChromaDB &nbsp;·&nbsp; 🧩 Graph retrieval components</sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/RAG-7C3AED?style=flat-square&labelColor=7C3AED" alt="RAG">
    </td>
    <td valign="top">
      <b><a href="https://github.com/olivia3395/RAGAudit">RAGAudit: RAG with Hallucination Detection</a></b>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/RAGAudit"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/RAGAudit/blob/main/RAG%20%26%20Hallucination%20Detection.pdf"><img src="https://img.shields.io/badge/PDF-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="PDF"></a><br>
      RAG pipeline with <b>BM25+FAISS</b>, <b>RRF</b>, hallucination detection via <b>NLI</b>, <b>SelfCheckGPT</b>, <b>semantic entropy</b>.<br>
      <sub>🗂️ Wikipedia DPR + NQ + HaluEval &nbsp;·&nbsp; 🤖 Mistral-7B &nbsp;·&nbsp; 📈 Recall@5, MRR@5, EM, F1, AUROC</sub>
    </td>
  </tr>

  <tr>
    <td width="130" valign="top">
      <img src="https://img.shields.io/badge/ALIGN-DB2777?style=flat-square&labelColor=DB2777" alt="ALIGN">
    </td>
    <td valign="top">
      <b><a href="https://github.com/olivia3395/TuneShift">TuneShift: Modular Fine-Tuning Framework</a></b>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/TuneShift"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      Modular LLM fine-tuning for <b>domain transfer</b>, supporting instruction tuning, dialogue fine-tuning, <b>LoRA / QLoRA</b>.<br>
      <sub>📈 EM, F1, ROUGE-L across domains</sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/ALIGN-DB2777?style=flat-square&labelColor=DB2777" alt="ALIGN">
    </td>
    <td valign="top">
      <b><a href="https://github.com/olivia3395/AlignDPO-Preference-Optimization-from-Scratch">AlignDPO: Preference Optimization from Scratch</a></b>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/AlignDPO-Preference-Optimization-from-Scratch"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/AlignDPO-Preference-Optimization-from-Scratch/blob/main/DPO%20%26%20PPO.pdf"><img src="https://img.shields.io/badge/PDF-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="PDF"></a><br>
      Preference optimization with <b>DPO, IPO, KTO</b>, using <b>QLoRA</b> to fine-tune Mistral-7B on Anthropic HH-RLHF.<br>
      <sub>📈 Reward accuracy, reward margin, GPT-4-as-judge win rate</sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/ALIGN-DB2777?style=flat-square&labelColor=DB2777" alt="ALIGN">
    </td>
    <td valign="top">
      <b><a href="https://github.com/olivia3395/rlhf_finetuning">RLHF with PPO</a></b>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/rlhf_finetuning"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/PPO-based-RLHF/blob/main/RAG%20System.pdf"><img src="https://img.shields.io/badge/PDF-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="PDF"></a><br>
      PPO RLHF with composite reward and adaptive KL controller.<br>
      <sub>🧠 GPT-2 actor-critic + GAE + clipped PPO &nbsp;·&nbsp; 📊 W&amp;B logging</sub>
    </td>
  </tr>
  <tr>
    <td width="130" valign="top">
      <img src="https://img.shields.io/badge/CORE-EA580C?style=flat-square&labelColor=EA580C" alt="CORE">
    </td>
    <td valign="top">
      <b><a href="https://github.com/olivia3395/mini_pretrain">Mini LLM Pre-Training</a></b>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/mini_pretrain"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/Mini-GPT-Pre-Training/blob/main/LLM.pdf"><img src="https://img.shields.io/badge/PDF-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="PDF"></a><br>
      Pre-trained a <b>10.7M-parameter GPT</b> from scratch in PyTorch on TinyShakespeare.<br>
      <sub>📉 PPL <b>65 → ~4.7</b> after 5k iters</sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/CORE-EA580C?style=flat-square&labelColor=EA580C" alt="CORE">
    </td>
    <td valign="top">
      <b><a href="https://github.com/olivia3395/HQQ_1-bit_Quantization">HQQ: 1-bit LLM Quantization</a></b>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/HQQ_1-bit_Quantization"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      Half-Quadratic Quantization (1–8 bit) via proximal optimization; no calibration data.<br>
      <sub>⚡ <b>W1G64: 12.7× compression, &gt;4× speedup</b></sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/CORE-EA580C?style=flat-square&labelColor=EA580C" alt="CORE">
    </td>
    <td valign="top">
      <b><a href="https://github.com/olivia3395/DraftVerify">DraftVerify: Speculative Decoding</a></b>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/DraftVerify"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a><br>
      Draft + verifier speculative decoding to cut autoregressive decoding cost.<br>
      <sub>📊 Latency / throughput / acceptance vs vanilla decoding</sub>
    </td>
  </tr>
  <tr>
    <td width="130" valign="top">
      <img src="https://img.shields.io/badge/CAUSAL-0369A1?style=flat-square&labelColor=0369A1" alt="CAUSAL">
    </td>
    <td valign="top">
      <b><a href="https://github.com/olivia3395/Causal-Promotion-Optimization">Causal Promotion Optimization</a></b>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/Causal-Promotion-Optimization"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/Causal-Promotion-Optimization/blob/main/Causal_Promotion.pdf"><img src="https://img.shields.io/badge/PDF-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="PDF"></a><br>
      <b>AIPW</b> uplift with <b>LightGBM</b> nuisance + <b>EconML DRLearner</b> CATE; budget-constrained planning via <b>OR-Tools</b>.<br>
      <sub>🛒 Retail panel &nbsp;·&nbsp; 🚀 FastAPI + Streamlit</sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/CAUSAL-0369A1?style=flat-square&labelColor=0369A1" alt="CAUSAL">
    </td>
    <td valign="top">
      <b><a href="https://github.com/olivia3395/Pricing-Impact-Analyzer">Congestion Pricing Impact Analyzer</a></b>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/Pricing-Impact-Analyzer"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/Pricing-Impact-Analyzer/blob/main/Congestion%20Pricing%20Impact%20Analyzer.pdf"><img src="https://img.shields.io/badge/PDF-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="PDF"></a><br>
      <b>TWFE DiD → CS-DiD → Synthetic DiD → Double ML</b> on 12M+ NYC TLC trips; RF-DML θ̂ = −0.124 (p &lt; 0.001).<br>
      <sub>🌳 Zone-level CATE via Causal Forest &nbsp;·&nbsp; 📋 RATE curves, policy trees</sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/ML-16A34A?style=flat-square&labelColor=16A34A" alt="ML">
    </td>
    <td valign="top">
      <b><a href="https://github.com/olivia3395/Retail-Demand-Forecasting">Demand Forecasting with Transformers</a></b>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/Retail-Demand-Forecasting"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/Retail-Demand-Forecasting/blob/main/Retail_Demand.pdf"><img src="https://img.shields.io/badge/PDF-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="PDF"></a><br>
      Store-SKU forecasting on <b>M5</b> with <b>Seasonal Naive</b>, <b>LightGBM</b>, <b>Temporal Fusion Transformer</b>, 28-day horizons.<br>
      <sub>🔄 Automated pipeline &nbsp;·&nbsp; 🕒 Time-based evaluation</sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img src="https://img.shields.io/badge/ML-16A34A?style=flat-square&labelColor=16A34A" alt="ML">
    </td>
    <td valign="top">
      <b><a href="https://github.com/olivia3395/Customer-Churn-Prediction">Churn Prediction with MLflow &amp; FastAPI</a></b>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/Customer-Churn-Prediction"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
      &nbsp;·&nbsp;
      <a href="https://github.com/olivia3395/Customer-Churn-Prediction/blob/main/%20Churn%20Prediction.pdf"><img src="https://img.shields.io/badge/Slides-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="Slides"></a><br>
      GradientBoosting on IBM Telco with <b>sklearn Pipeline</b> + <b>MLflow</b> tracking.<br>
      <sub>🚀 FastAPI + Pydantic v2 &nbsp;·&nbsp; 📡 Evidently AI KS-test drift monitoring</sub>
    </td>
  </tr>
</table>






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


<table>
  <tr>
    <td width="33%" valign="top">
      <b>🐶 Dog Breed Classification</b><br>
      <sub>VGG16 · ResNet50 · Flask · <b>75.48%</b></sub><br>
      <a href="https://github.com/olivia3395/dog_identification_app"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
      <a href="https://olivia3395.github.io/dog_identification_app/"><img src="https://img.shields.io/badge/Demo-22C55E?style=flat-square&logo=rocket&logoColor=white" alt="Demo"></a>
    </td>
    <td width="33%" valign="top">
      <b>💳 Credit Risk</b><br>
      <sub>XGBoost · SMOTE · <b>AUC 0.976</b></sub><br>
      <a href="https://github.com/olivia3395/credit-default-risk"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
    </td>
    <td width="33%" valign="top">
      <b>🚶 Pedestrian Detection</b><br>
      <sub>Fast R-CNN · Siamese · few-shot</sub><br>
      <a href="https://github.com/olivia3395"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <b>😷 Mask Detection</b><br>
      <sub>ResNet50 · Grad-CAM · <b>94%</b></sub><br>
      <a href="https://github.com/olivia3395/MaskDetection"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
    </td>
    <td valign="top">
      <b>📈 Financial Sentiment</b><br>
      <sub>DistilBERT · <b>85%</b> · <b>30%↑ speed</b></sub><br>
      <a href="https://github.com/olivia3395/finanial-text-analysis"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
      <a href="https://olivia3395.github.io/finanial-text-analysis/"><img src="https://img.shields.io/badge/Demo-22C55E?style=flat-square&logo=rocket&logoColor=white" alt="Demo"></a>
    </td>
    <td valign="top">
      <b>✉️ Spam Detection</b><br>
      <sub>TF-IDF · NB · <b>P 96 / R 94</b></sub><br>
      <a href="https://github.com/olivia3395/spam_detection"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <b>🏠 Airbnb Dashboard</b><br>
      <sub>R Shiny · maps · filtering</sub><br>
      <a href="https://github.com/olivia3395/rshinyapp_airbnb"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
      <a href="https://yuyaowang.shinyapps.io/airbnb_app/"><img src="https://img.shields.io/badge/Demo-22C55E?style=flat-square&logo=rocket&logoColor=white" alt="Demo"></a>
    </td>
    <td valign="top">
      <b>🧬 Bayesian Logistic</b><br>
      <sub>RStan · Spike-and-Slab · MCMC</sub><br>
      <a href="https://github.com/olivia3395/Bayesian_Lung_Cancer_Prediction"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
      <a href="https://olivia3395.github.io/Bayesian_Lung_Cancer_Prediction/"><img src="https://img.shields.io/badge/Demo-22C55E?style=flat-square&logo=rocket&logoColor=white" alt="Demo"></a>
    </td>
    <td valign="top">
      <b>🧪 A/B Testing</b><br>
      <sub>Bootstrap · power · <b>+15% conv.</b></sub><br>
      <a href="https://github.com/olivia3395/AB_Test_Ad"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <b>📉 Time Series Forecast</b><br>
      <sub>SARIMA · ETS · Prophet</sub><br>
      <a href="https://github.com/olivia3395/GlobalRiskAnalysisUSA"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
      <a href="https://olivia3395.github.io/GlobalRiskAnalysisUSA/"><img src="https://img.shields.io/badge/Demo-22C55E?style=flat-square&logo=rocket&logoColor=white" alt="Demo"></a>
    </td>
    <td valign="top">
      <b>🎬 Movie Recommendation</b><br>
      <sub>ALS · SVD · <b>+15% / −20%</b></sub><br>
      <a href="https://github.com/olivia3395/Spring2020-Project4-group8"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
    </td>
    <td valign="top">
      <b>👥 Customer Segmentation</b><br>
      <sub>K-Means · elbow · silhouette</sub><br>
      <a href="https://github.com/olivia3395/Customer_Segmentation"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
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


