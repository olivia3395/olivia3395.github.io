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

My research lies in **transfer learning**, **graph mining**, and **nonparametric statistics**, where I develop **theoretically grounded methods** for structured, heterogeneous data in **low-sample, high-dimensional, and non-IID settings**. I blend **statistical theory**, **machine learning**, and **network modeling** to advance estimation, inference, and generalization.  


# 🔥 News
- *2025.09*: 🎉 My first-author paper **"Transfer Learning on Edge Connecting Probability Estimation"** is accepted by ([NeurIPS 2025](https://neurips.cc/))!
- *2025.08*: 🎉 My co-authored paper **"Cross-Domain Hyperspectral Image Classification"** is accepted by ([IEEE TGRS 2025](https://ieeexplore.ieee.org/))!

# 📝 Publications 

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">NeurIPS 2025</div>
      <img src='images/gtrans.png' alt="gtrans" width="100%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

**Transfer Learning on Edge Connecting Probability Estimation**
**Yuyao Wang**, Yu-Hung Cheng, Debarghya Mukherjee, Huimin Cheng 
[**Code / Project**](https://github.com/olivia3395/GTRANS)  

- We propose **GTRANS**, the first graphon transfer learning method **without node correspondence**, combining **Gromov-Wasserstein optimal transport** and **residual smoothing**.  
- **Theoretical Guarantee**: We prove stability and convergence of the transport-based alignment under nonparametric assumptions.  
- **Applications**: GTRANS improves **link prediction and graph classification**, especially under **small target graphs and sparse settings**.  
- Achieves **state-of-the-art (SOTA)** performance on both synthetic and real-world datasets.

</div>
</div>





# 🎖 Honors and Awards
- *2025.05*: Ralph B. D’Agostino Endowed Fellowship, Boston University  
- *2025.04*: Outstanding Teaching Fellow Award, Boston University  
- *2019.06*: Outstanding Graduate, Shandong University  
- *2018.10*: Hua Loo-Keng Scholarship, Chinese Academy of Sciences  

# 📖 Educations
- *2021.09 – 2026.05 (expected)*: Ph.D. in Statistics, Boston University

- *2019.09 – 2020.05*: M.A. in Statistics (Data Science Track), Columbia University

- *2015.09 – 2019.06*: B.S. in Mathematics, Shandong University


# 💻 Internships

- *2025.05 – 2025.08*: Data Scientist Intern, Plymouth Rock Insurance (Boston, MA)  
  - Built AWS SageMaker pipeline for property-level loss prediction; boosted Gini +4.3% using XGBoost Tweedie 
  - Developed LLM-powered image risk scoring with GPT-4o + Google Street View; integrated outputs into actuarial models  

