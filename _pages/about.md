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



# 🔥 News
- *2026.04*: 🚀 I’ll be joining **Amazon** as an **Applied Scientist** this summer, based in the **Bay Area, California**!
- *2026.04*: 🎉 I am honored to receive the **Dean’s Dissertation Fellowship** from the **Graduate School of Arts and Sciences**!
- *2025.09*: 🎉 My first-author paper **"Transfer Learning on Edge Connecting Probability Estimation Under Graphon Model"** is accepted by ([NeurIPS 2025](https://neurips.cc/))!
- *2025.08*: 🎉 My co-authored paper **"Cross-Domain Hyperspectral Image Classification via Mamba-CNN and Knowledge Distillation"** is accepted by ([IEEE TGRS 2025](https://ieeexplore.ieee.org/))!







# 📝 Publications

<h2>Leading Author</h2>

<table>
  <tr>
    <td width="40%" valign="top">
      <img src="images/gtrans_workflow.png" alt="GTrans" width="100%">
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/NeurIPS_2025-6366F1?style=flat-square&labelColor=6366F1" alt="NeurIPS 2025">&nbsp;<b><font size="3"><a href="https://openreview.net/pdf?id=i3sWs5614Y">Transfer Learning on Edge Connecting Probability Estimation Under Graphon Model</a></font></b>&nbsp;&nbsp;<a href="https://neurips.cc/virtual/2025/poster/116597"><img src="https://img.shields.io/badge/Paper-DC2626?style=flat-square&logo=adobeacrobatreader&logoColor=white" alt="Paper"></a> <a href="https://github.com/olivia3395/GTrans/blob/main/neurips_poster.pdf"><img src="https://img.shields.io/badge/Poster-0369A1?style=flat-square" alt="Poster"></a> <a href="https://github.com/olivia3395/GTrans/blob/main/GTrans.pdf"><img src="https://img.shields.io/badge/Slides-EA580C?style=flat-square" alt="Slides"></a> <a href="https://github.com/olivia3395/GTRANS"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
      <ul>
        <li>First <b>graphon-level transfer</b> without node correspondence — aligns graphs via <b>Gromov–Wasserstein</b> and transfers edge structure nonparametrically.</li>
        <li><b>Residual smoothing</b> unlocks small/sparse targets with <b>convergence & stability guarantees</b>; SOTA on link prediction and graph classification.</li>
      </ul>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="40%" valign="top">
      <img src="images/phaseshift.png" alt="Phase Transition" width="100%">
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/Under_Review-94A3B8?style=flat-square&labelColor=94A3B8" alt="Under Review">&nbsp;<b><font size="3"><a href="https://arxiv.org/abs/2507.00889">Phase Transition in Nonparametric Minimax Rates for Covariate Shifts on Approximate Manifolds</a></font></b>&nbsp;&nbsp;<a href="https://arxiv.org/abs/2507.00889"><img src="https://img.shields.io/badge/arXiv-B31B1B?style=flat-square&logo=arxiv&logoColor=white" alt="arXiv"></a> <a href="https://github.com/olivia3395/Covariate-Shifts-on-Approximate-Manifolds/blob/main/manifold_poster.pdf"><img src="https://img.shields.io/badge/Poster-0369A1?style=flat-square" alt="Poster"></a> <a href="https://github.com/olivia3395/Covariate-Shifts-on-Approximate-Manifolds/blob/main/slides_Manifold.pdf"><img src="https://img.shields.io/badge/Slides-EA580C?style=flat-square" alt="Slides"></a> <a href="https://github.com/olivia3395/Covariate-Shifts-on-Approximate-Manifolds"><img src="https://img.shields.io/badge/Code-181717?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
      <ul>
        <li><b>New minimax theory for "near-manifold" shift:</b> exposes a sharp <b>phase transition</b> controlled by the <b>support gap</b> between target and source neighborhoods — unifying multiple geometric-transfer regimes.</li>
        <li><b>Ratio-free, adaptive estimator:</b> achieves <b>near-optimal, dimension-adaptive rates</b> <b>without density ratios</b> and without assuming known geometry (works under approximate manifold mismatch).</li>
      </ul>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="40%" valign="top">
      <img src="images/tess_workflow.png" alt="TESS" width="100%">
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/Under_Review-94A3B8?style=flat-square&labelColor=94A3B8" alt="Under Review">&nbsp;<b><font size="3"><a href="https://arxiv.org/abs/2603.12664">From Text to Forecasts: Bridging Modality Gap with Temporal Evolution Semantic Space</a></font></b>&nbsp;&nbsp;<a href="https://arxiv.org/abs/2603.12664"><img src="https://img.shields.io/badge/arXiv-B31B1B?style=flat-square&logo=arxiv&logoColor=white" alt="arXiv"></a> <a href="https://github.com/olivia3395/olivia3395.github.io/blob/main/_pages/TESS.pdf"><img src="https://img.shields.io/badge/Slides-EA580C?style=flat-square" alt="Slides"></a>
      <ul>
        <li><b>Bridges the text–time-series modality gap:</b> introduces a <b>Temporal Evolution Semantic Space (TESS)</b> that distills free-form text into <b>interpretable temporal primitives</b> (mean shift, volatility, shape, lag), instead of directly fusing noisy token embeddings.</li>
        <li><b>LLM-guided yet numerically grounded forecasting:</b> uses <b>structured prompting + confidence-aware gating</b> to inject reliable semantic signals as prefix tokens into a Transformer forecaster, yielding <b>robust gains under event-driven non-stationarity</b> (up to <b>29% error reduction</b>).</li>
      </ul>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="40%" valign="top">
      <img src="images/scot_main.png" alt="SCOT" width="100%">
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/Under_Review-94A3B8?style=flat-square&labelColor=94A3B8" alt="Under Review">&nbsp;<b><font size="3"><a href="https://arxiv.org/abs/2604.07383">SCOT: Multi-Source Cross-City Transfer with Optimal-Transport Soft-Correspondence Objectives</a></font></b>&nbsp;&nbsp;<a href="https://arxiv.org/abs/2604.07383"><img src="https://img.shields.io/badge/arXiv-B31B1B?style=flat-square&logo=arxiv&logoColor=white" alt="arXiv"></a> <a href="https://github.com/olivia3395/olivia3395.github.io/blob/main/_pages/SCOT.pdf"><img src="https://img.shields.io/badge/Slides-EA580C?style=flat-square" alt="Slides"></a>
      <ul>
        <li><b>Sinkhorn entropic-OT coupling</b> enables many-to-many region alignment across cities — no node matching required.</li>
        <li><b>OT-weighted contrastive loss + target-aware prototype hub</b> prevents collapse and scales cleanly to multi-source heterogeneity.</li>
      </ul>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="40%" valign="top">
      <img src="images/synergy_bpr_workflow.png" alt="INCM" width="100%">
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/Under_Review-94A3B8?style=flat-square&labelColor=94A3B8" alt="Under Review">&nbsp;<b><font size="3">INCM: INConsistency-aware Multi-modal Recommendation with Cross-Modal Hard Negatives</font></b>
      <ul>
        <li><b>Inconsistency-aware multimodal ranking:</b> studies how cross-modal discrepancies may provide complementary ranking evidence or degrade fusion quality — explicitly modeled in training.</li>
        <li><b>Cross-modal hard negatives + synergy-aware ranking loss:</b> proposes <b>CHNS</b> to mine modality-specific hard negatives across branches, and a <b>Synergy-aware BPR</b> loss to ensure the fused branch achieves stronger preference margins than unimodal branches.</li>
      </ul>
    </td>
  </tr>
</table>

<h2>Co-author</h2>

<table>
  <tr>
    <td width="40%" valign="top">
      <img src="images/mkdnet.png" alt="MKDNet" width="100%">
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/IEEE_TGRS_2025-0891B2?style=flat-square&labelColor=0891B2" alt="IEEE TGRS 2025">&nbsp;<b><font size="3"><a href="https://ieeexplore.ieee.org/abstract/document/11133483">Cross-Domain Hyperspectral Image Classification via Mamba-CNN and Knowledge Distillation</a></font></b>&nbsp;&nbsp;<a href="https://ieeexplore.ieee.org/abstract/document/11133483"><img src="https://img.shields.io/badge/IEEE-00629B?style=flat-square&logo=ieee&logoColor=white" alt="IEEE"></a> <a href="https://github.com/olivia3395/Cross-Domain-Hyperspectral-Image-Classification-/blob/main/IEEE%20TRGS%202025.pptx"><img src="https://img.shields.io/badge/Slides-EA580C?style=flat-square" alt="Slides"></a>
      <ul>
        <li><b>Hybrid spectral–spatial modeling for domain shift:</b> integrates a <b>Mamba-based global spectral encoder</b> with <b>CNN local feature extraction</b>, capturing long-range dependencies while preserving fine-grained spatial structure.</li>
        <li><b>Dual-level transfer via distillation + graph alignment:</b> performs <b>teacher–student knowledge distillation</b> for distribution alignment and <b>OT-guided graph consistency</b> across domains, yielding robust cross-domain generalization under severe spectral mismatch.</li>
      </ul>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td width="40%" valign="top">
      <img src="images/ssgp_workflow.png" alt="SSGP" width="100%">
    </td>
    <td valign="top">
      <img src="https://img.shields.io/badge/Under_Review-94A3B8?style=flat-square&labelColor=94A3B8" alt="Under Review">&nbsp;<b><font size="3"><a href="https://arxiv.org/abs/2603.01801">Semantic Scientific Graph Pruning for Reliable Agentic Paper Reproduction</a></font></b>&nbsp;&nbsp;<a href="https://arxiv.org/abs/2603.01801"><img src="https://img.shields.io/badge/arXiv-B31B1B?style=flat-square&logo=arxiv&logoColor=white" alt="arXiv"></a>
      <ul>
        <li><b>SSGP</b> prunes dense scientific graphs into <b>task-adaptive subgraphs</b> via rank-based ensemble scoring — drastically shrinks agent search space.</li>
        <li><b>Reuse–patch execution + confidence-weighted aggregation</b> boosts reproducibility, stability, and success rate of LLM scientific agents.</li>
      </ul>
    </td>
  </tr>
</table>





# 🤖 LLM Engineering Projects

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



# 📖 Educations
- *2021.09 – Now*: Ph.D. in Statistics, Boston University

- *2019.09 – 2020.05*: M.A. in Statistics (Data Science Track), Columbia University

- *2018.05 – 2019.06*: B.S. in Mathematics, Chinese Academy of Sciences
  (Jointly Supervised Talent Program)
  
- *2015.09 – 2019.06*: B.S. in Mathematics, Shandong University



# 💻 Internships


<img src="images/plymouth_logo.png" alt="Plymouth Rock" width="50" align="left" hspace="15">

<b><font size="4">Data Scientist Intern</font></b> · Plymouth Rock Insurance<br>
<sub>📍 Boston, MA &nbsp;·&nbsp; 🗓️ May 2025 – Aug 2025</sub>

- Architected an end-to-end <b>AWS SageMaker</b> pipeline for property-level loss prediction using an <b>XGBoost Tweedie</b> model on multi-million-policy data, lifting <b>Gini by +4.3%</b> over the production baseline and directly improving underwriting risk segmentation.
  
- Pioneered an <b>LLM-powered visual risk scoring</b> system combining <b>GPT-4o multimodal reasoning</b> with <b>Google Street View</b> imagery to capture previously unobservable property features (roof condition, surroundings, hazards); integrated outputs into downstream <b>actuarial pricing models</b> as a novel signal layer.

- 📎 For a high-level, non-confidential summary of this work, see the <b>[Home Insurance slides](HomeInsurance.pdf)</b>.
<br clear="left">


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





# 🎖 Honors 
- *2026*: Dean’s Dissertation Fellowship, Boston University
- *2025*: Student Travel Grant, Boston University  
- *2025*: Ralph B. D’Agostino Endowed Fellowship, Boston University  
- *2025*: Outstanding Teaching Fellow Award, Boston University  

- *2019*: Outstanding Graduate, Shandong University  

- *2018*: Hua Loo-Keng Scholarship, Chinese Academy of Sciences  
- *2018*: National Gold Award, Internet+ Innovation & Entrepreneurship Competition
- *2018*: First-Class Scholarship, Shandong University  
- *2018*: Outstanding Student Leader, Shandong University  




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



# 📝 Service & Teaching

<b>Presentations</b> &nbsp;·&nbsp; CIKM 2024, NeurIPS 2025<br>
<b>Reviewer</b> &nbsp;·&nbsp; CIKM 2025, ICME 2026, ICML 2026, KDD 2026<br>
<b>Instructor</b> @ Boston University &nbsp;·&nbsp; MA 582 <i>Mathematical Statistics</i>, MA 113 <i>Elementary Statistics</i><br>
<b>TA</b> @ Boston University &nbsp;·&nbsp; MA 575 <i>Generalized Linear Models</i>, MA 582, MA 415 <i>Data Science in R</i>, MA 214 <i>Applied Stats</i>




# 🎨 Interests

🎵 Mandarin R&B loyalist — Leehom Wang, David Tao, Khalil Fong🦋, Dean Ting

🎹 Trained in piano, calligraphy, and ink painting

🏞️ National park lover · 🫧 lake admirer · 🌅 opacarophile — welcome to my [Gallery](/gallery/)  


