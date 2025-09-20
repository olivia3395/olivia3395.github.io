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

I’m **Yuyao Wang**, a Ph.D. candidate in Statistics at Boston University, co-advised by [Debarghya Mukherjee](https://debarghya-mukherjee.github.io/) and [Luis Carvalho](https://math.bu.edu/people/lecarval/).

My research lies in **transfer learning**, **graph mining**, and **nonparametric statistics**, where I develop **theoretically grounded methods** for structured, heterogeneous data in **low-sample, high-dimensional, and non-IID settings**. Everyone imagines the challenges of theoretical statistics, yet within that struggle lies the quiet beauty of uncovering order in chaos. My work values the elegance of fundamental theory while pursuing its reach across real-world applications, bridging statistics with computer science and beyond. My goal is to blend **statistical theory**, **machine learning**, and **network modeling** to advance estimation, inference, and generalization.  


# 🔥 News
- *2025.09*: 🎉 My first-author paper **"Transfer Learning on Edge Connecting Probability Estimation Under Graphon Model"** is accepted by ([NeurIPS 2025](https://neurips.cc/))!
- *2025.08*: 🎉 My co-authored paper **"Cross-Domain Hyperspectral Image Classification via Mamba-CNN and Knowledge Distillation"** is accepted by ([IEEE TGRS 2025](https://ieeexplore.ieee.org/))!

# 📝 Publications 

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">NeurIPS 2025</div>
      <img src='images/gtrans_workflow.png' alt="gtrans" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**Transfer Learning on Edge Connecting Probability Estimation Under Graphon Model**
**Yuyao Wang**, Yu-Hung Cheng, Debarghya Mukherjee, Huimin Cheng 
[**Code**](https://github.com/olivia3395/GTRANS)  

- We propose **GTRANS**, the first graphon transfer learning method **without node correspondence**, combining **Gromov-Wasserstein optimal transport** and **residual smoothing**.  
- **Theoretical Guarantee**: We prove stability and convergence of the transport-based alignment under nonparametric assumptions.  
- **Applications**: GTRANS improves **link prediction and graph classification**, especially under **small target graphs and sparse settings**.  
- Achieves **state-of-the-art (SOTA)** performance on both synthetic and real-world datasets.

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
**Yuyao Wang**, Nabarun Deb, Debarghya Mukherjee.  

- We establish new **minimax rates** for estimating Hölder-smooth regression functions under covariate shift when the **target distribution lies near, but not on, a source manifold**.  
- Introduces a novel **phase transition phenomenon**: the minimax rate depends sharply on the **proximity between the target and source support**, unifying prior results under a generalized Hölder framework.  
- Addresses settings where **density ratios are ill-defined**, making classical transfer techniques invalid.  
- Our estimator adapts to unknown manifold dimension and achieves near-optimal rates **without prior geometric knowledge**.

</div>
</div>


<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">IEEE TGRS 2025</div>
      <img src='images/mkdnet.png' alt="mkdnet" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[**Cross-Domain Hyperspectral Image Classification via Mamba-CNN and Knowledge Distillation**](https://ieeexplore.ieee.org/abstract/document/11133483)  
Aoyan Du, Guixin Zhao, **Yuyao Wang**, Aimei Dong, Guohua Lv, Yongbiao Gao, Xiangjun Dong

- We propose **MKDnet**, a cross-domain HSI classification framework combining **Mamba-CNN hybrid architecture** with **knowledge distillation** and **graph alignment via optimal transport**.  
- Effectively captures **both global context and local detail** via Mamba + CNN dual-stream encoder.  
- Aligns source–target distributions through **domain-level knowledge distillation** and **graph OT-based subgraph matching**.  
- Achieves **SOTA performance** across multiple public hyperspectral benchmarks under domain shift.

</div>
</div>



# 🎖 Honors and Awards
- *2025.05*: Ralph B. D’Agostino Endowed Fellowship, Boston University  
- *2025.04*: Outstanding Teaching Fellow Award, Boston University  
- *2019.06*: Outstanding Graduate, Shandong University
- *2018.10*: Hua Loo-Keng Scholarship, Chinese Academy of Sciences
- *2018.09*: First-Class Scholarship, Shandong University  
- *2018.09*: Outstanding Student Leader, Shandong University  

# 📖 Educations
- *2021.09 – 2026.05 (expected)*: Ph.D. in Statistics, Boston University

- *2019.09 – 2020.05*: M.A. in Statistics (Data Science Track), Columbia University

- *2015.09 – 2019.06*: B.S. in Mathematics, Shandong University


# 💻 Internships

- *2025.05 – 2025.08*: Data Scientist Intern, Plymouth Rock Insurance (Boston, MA)  
  - Built AWS SageMaker pipeline for property-level loss prediction; boosted Gini +4.3% using XGBoost Tweedie 
  - Developed LLM-powered image risk scoring with GPT-4o + Google Street View; integrated outputs into actuarial models  

# 🎨 Interests

🎵 Mandarin R&B loyalist — Leehom Wang, David Tao, Khalil Fong, Dean Ting

🎹 Trained in piano, calligraphy, and ink painting
