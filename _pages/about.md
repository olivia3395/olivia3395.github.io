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

Howdy! I’m a Ph.D. candidate in Statistics at Boston University, co-advised by [Prof. Debarghya Mukherjee](https://debarghya-mukherjee.github.io/) and [Prof. Luis Carvalho](https://math.bu.edu/people/lecarval/), and I also collaborate with [Prof. Nabarun Deb](https://nabarund.github.io/). My research sits at the intersection of statistics and machine learning, where I develop theoretically grounded transfer-learning and representation-learning methods—spanning optimal transport, graph mining, multimodal learning for structured, heterogeneous data in low-sample, high-dimensional, and non-IID settings.

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


Along my academic journey, I have been deeply fortunate to study and conduct research under the guidance of inspiring scholars, including [Prof. Liang Zhao](https://www.arch.tsinghua.edu.cn/info/FUrban%20Planning%20and%20Design/1776), [Prof. Zhanxing Zhu](https://zhanxingzhu.github.io/), and [Prof. Yongshun Gong](https://faculty.sdu.edu.cn/gongyongshun/en/), whose work spans urban spatial systems, deep learning theory, and representation learning. Their collective perspectives, from urban systems and infrastructure to machine learning theory and scalable spatio-temporal modeling, have shaped how I study structured, evolving, and heterogeneous systems, guiding my pursuit of principled transfer learning methods.




# 🔥 News
- *2025.09*: 🎉 My first-author paper **"Transfer Learning on Edge Connecting Probability Estimation Under Graphon Model"** is accepted by ([NeurIPS 2025](https://neurips.cc/))!
- *2025.08*: 🎉 My co-authored paper **"Multi-scale based Cross-modal Semantic Alignment Network for Radiology Report Generation"** is accepted by ([IEEE SMC 2025](https://ieeexplore.ieee.org/))!
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
      <div class="badge">Under Review </div>
      <img src='images/tess_workflow.png' alt="tess" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[**From Text to Forecasts: Bridging Modality Gap with Temporal Evolution Semantic Space**](#)<br>
*Boston University; Hong Kong University of Science and Technology; Shandong University*

- **Bridges the text–time-series modality gap:** introduces a **Temporal Evolution Semantic Space (TESS)** that distills free-form text into **interpretable temporal primitives** (mean shift, volatility, shape, lag), instead of directly fusing noisy token embeddings.  
- **LLM-guided yet numerically grounded forecasting:** uses **structured prompting + confidence-aware gating** to inject reliable semantic signals as prefix tokens into a Transformer forecaster, yielding **robust gains under event-driven non-stationarity** (up to **29% error reduction**).

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
      <img src='images/synergy_bpr_workflow.png' alt="synergy-bpr" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[**Inconsistency aware Multi Modal Recommendation**](#)<br>
*Boston University; Shandong University; Tsinghua University*

- **Disentangles synergy vs redundancy in multimodal signals:** explicitly decomposes item information into **unique (text / vision)** and **synergistic** components using **heterogeneous–homogeneity graph transformations**, avoiding naïve feature fusion.  
- **Inconsistency-aware learning with principled negatives:** introduces **cross-modal hard negative sampling** and a **Synergy-BPR objective** that suppresses redundant cues while amplifying truly complementary signals, yielding robust gains under noisy or conflicting modalities.

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

[**Semantic Scientific Graph Pruning for Reliable Agentic Paper Reproduction**](#)<br>
*Boston University; Shandong University*

- **Semantic pruning for controllable agent search:** proposes **Semantic Scientific Graph Pruning (SSGP)** to transform dense scientific graphs into **task-adaptive local subgraphs**, using **rank-based ensemble scoring** to retain only semantically essential neighbors.  
- **Enables reliable agentic reproduction:** couples pruned graphs with **reuse–patch modular execution** and **confidence-weighted aggregation**, dramatically reducing search space while improving **reproducibility, stability, and success rate** of LLM-based scientific agents.

</div>
</div>



<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">IEEE SMC 2025</div>
      <img src='images/mcsanet.png' alt="mcsanet" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[**Multi-scale based Cross-modal Semantic Alignment Network for Radiology Report Generation**](https://ieeexplore.ieee.org/document/11343384)<br>
*IEEE SMC 2025*

- **Multi-scale visual encoding for clinically salient abnormalities:** builds hierarchical image representations that capture both global anatomy and fine-grained lesion cues, improving localization of subtle findings critical for report generation.  
- **Cross-modal semantic alignment with learnable fusion:** enforces tight image–text correspondence via learnable cross-modal interactions (alignment-driven fusion), reducing hallucinated statements and boosting abnormality-focused sentence generation.

</div>
</div>



# 🎖 Honors and Awards
- *2025.09*: Student Travel Grant, Boston University  
- *2025.05*: Ralph B. D’Agostino Endowed Fellowship, Boston University  
- *2025.04*: Outstanding Teaching Fellow Award, Boston University  
- *2019.06*: Outstanding Graduate, Shandong University
- *2018.10*: Hua Loo-Keng Scholarship, Chinese Academy of Sciences
- *2018.09*: First-Class Scholarship, Shandong University  
- *2018.09*: Outstanding Student Leader, Shandong University  

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

- **LLaMA 2 Fine-Tuning (QLoRA)** · [Code](https://github.com/olivia3395/LLaMA2_finetuning) — 4-bit QLoRA (PEFT/bitsandbytes) instruction tuning on consumer GPUs.  
- **LLM 1-bit Quantization (HQQ)** · [Code](https://github.com/olivia3395/HQQ_1-bit_Quantization) — implemented HQQ 1-bit weight quantization on LLaMA 2; speed–accuracy benchmarks.  
- **RLHF (PPO)** · [Code](https://github.com/olivia3395/rlhf_finetuning) — PPO-based RLHF with custom rewards for controllable generation.  
- **Dog Breed Classification (CNN + VGG16/ResNet50)** · [Code](https://github.com/olivia3395/dog_identification_app) · [Demo](https://olivia3395.github.io/dog_identification_app/) — **75.48%** accuracy (Stanford Dogs); Flask deployment.  
- **Credit Risk Prediction (XGBoost + SMOTE)** · [Code](https://github.com/olivia3395/credit-default-risk) — **0.976 AUC**; default-class recall **91%**, F1 **0.95**.  
- **Pedestrian Detection (Fast R-CNN style + Siamese)** · [Code](https://github.com/olivia3395) — 1k+ annotations; few-shot-ready pipeline + pruning/fusion for faster inference.  
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

# 🎨 Interests

🎵 Mandarin R&B loyalist — Leehom Wang, David Tao, Khalil Fong🦋, Dean Ting

🎹 Trained in piano, calligraphy, and ink painting


