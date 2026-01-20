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

Yuyao Wang (王宇瑶)

Ph.D. candidate in Statistics at Boston University, co-advised by [Debarghya Mukherjee](https://debarghya-mukherjee.github.io/) and [Luis Carvalho](https://math.bu.edu/people/lecarval/).

Howdy! I work at the intersection of **transfer learning**, **optimal transport**, **graph mining**, **nonparametric statistics**, and **reinforcement learning**—building **theoretically grounded** methods for structured, heterogeneous data in **low-sample, high-dimensional, and non-IID** settings.

The question that keeps me up (in a good way):

> **How can we reuse past knowledge when the world—and the data—won’t sit still?**

In statistical learning, this is about transferring geometry or smoothness from a well-understood **source** distribution to a smaller, noisier **target** under shift.  
In reinforcement learning, the **source** might be prior trajectories, simulators, or related tasks, while the **target** is the evolving environment—so we need principled rules for **what to keep, what to adapt, and what to forget**.

And yes—**LLMs/VLMs** make this even more exciting (and tricky): they already contain a lot of cross-domain knowledge, but the real challenge is **extracting and specializing it safely** for downstream tasks without **overfitting, hallucination, or misalignment**.

## What I build

- **Theory that actually supports practice**  
  Minimax rates, oracle inequalities, regret bounds, and safe-transfer criteria under covariate or structural shift.

- **Graph-structured transfer methods**  
  Aligning and transporting information across graphs/manifolds to make transfer robust when correspondence is messy or unknown.

- **RL/bandits under drift**  
  Warm-started policies with uncertainty-aware adaptation for reliable sequential decision-making in changing environments.

- **Transfer principles for LLMs/VLMs**  
  Controlled adaptation, domain grounding, and structure-preserving fine-tuning—so models adapt *without* getting sloppy.

If any of this resonates—whether you’re thinking about theory, systems, or real-world deployment—I’d love to connect.

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

[**Transfer Learning on Edge Connecting Probability Estimation Under Graphon Model**](https://openreview.net/pdf/9fdf0bec54b67ea8e157e38dff92c95be29345c0.pdf)
· [**NeurIPS 2025**](https://neurips.cc/virtual/2025/poster/116597)
· [**Poster**](https://github.com/olivia3395/GTrans/blob/main/neurips_poster.pdf)
· [**Slides**](https://github.com/olivia3395/GTrans/blob/main/Neurips2025_final1.pptx)
· [**Code**](https://github.com/olivia3395/GTRANS)<br>
**Yuyao Wang**, Yu-Hung Cheng, Debarghya Mukherjee, Huimin Cheng · *Boston University*  

- **First transfer learning framework for graphon-based edge probability estimation without node correspondence.**  
- Combines **Gromov–Wasserstein alignment** and **residual smoothing** with **nonparametric stability & convergence guarantees**.  
- Achieves **SOTA link prediction and graph classification**, especially for **small, sparse, and heterogeneous target graphs**.


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

[**Phase Transition in Nonparametric Minimax Rates for Covariate Shifts on Approximate Manifolds**](https://arxiv.org/abs/2507.00889) · [**Code**](https://github.com/olivia3395/Covariate-Shifts-on-Approximate-Manifolds) · [**Poster**](https://github.com/olivia3395/Covariate-Shifts-on-Approximate-Manifolds/blob/main/manifold_poster.pdf) · [**Presentation**](https://github.com/olivia3395/Covariate-Shifts-on-Approximate-Manifolds/blob/main/slides_Manifold.pdf)<br>
**Yuyao Wang**, Nabarun Deb, Debarghya Mukherjee<br>
*Boston University; The University of Chicago Booth School of Business*

- Establishes **new minimax rates** for Hölder regression under covariate shift when the target lies **near—but not on—the source manifold**.  
- Reveals a sharp **phase transition**: estimation difficulty is governed by the **target–source support gap**, unifying prior geometric-transfer regimes.  
- Develops an estimator that remains **valid without density ratios** and achieves **near-optimal, dimension-adaptive rates** without geometric assumptions.

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

[**Cross-Domain Hyperspectral Image Classification via Mamba-CNN and Knowledge Distillation**](https://ieeexplore.ieee.org/abstract/document/11133483) · [**Presentation**](https://github.com/olivia3395/Cross-Domain-Hyperspectral-Image-Classification-/blob/main/IEEE%20TRGS%202025.pptx)<br>
Aoyan Du, Guixin Zhao, **Yuyao Wang**, Aimei Dong, Guohua Lv, Yongbiao Gao, Xiangjun Dong<br>
*Shandong Computer Science Center; Boston University*

- Proposes **MKDnet**, a cross-domain HSI classifier integrating a **Mamba–CNN hybrid encoder** with **knowledge distillation** and **OT-based graph alignment**.  
- Captures **global context and fine local structure** through dual-stream feature modeling and domain-consistent representation learning.  
- Achieves **state-of-the-art performance** on multiple hyperspectral benchmarks under significant domain shift.

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

- *2015.09 – 2019.06*: B.S. in Mathematics, Shandong University


# 💻 Internships

- *2025.05 – 2025.08*: Data Scientist Intern, Plymouth Rock Insurance (Boston, MA)  
  - Built AWS SageMaker pipeline for property-level loss prediction; boosted Gini +4.3% using XGBoost Tweedie 
  - Developed LLM-powered image risk scoring with GPT-4o + Google Street View; integrated outputs into actuarial models  

# 🎨 Interests

🎵 Mandarin R&B loyalist — Leehom Wang, David Tao, Khalil Fong, Dean Ting

🎹 Trained in piano, calligraphy, and ink painting


