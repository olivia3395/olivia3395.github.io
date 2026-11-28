---
layout: single
permalink: /projects/
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


# 🤖 LLM & DS Projects


<p style="margin:8px 0 22px 0;">
  <a href="/" style="display:inline-block;padding:7px 14px;border:1px solid rgba(0,0,0,0.12);border-radius:999px;text-decoration:none;">
    ← Back to Home
  </a>
</p>

Side projects in LLM systems and applied causal inference. Each one comes with a small overview figure of how it works, and the code is linked.


<style>
.proj-wrap{ margin: 40px auto 72px; max-width: 960px; display:flex; flex-direction:column; }
.proj-intro{ max-width:960px; margin:0 auto; }
.proj-card{
  display:grid; grid-template-columns: 1fr 1fr;
  background: rgba(255,255,255,0.95); border-radius: 24px;
  border: 1px solid rgba(0,0,0,0.08); box-shadow: 0 14px 36px rgba(0,0,0,0.06);
  overflow:hidden; position:relative; transition: transform 300ms ease, box-shadow 300ms ease;
}
.proj-card:hover{ transform: translateY(-4px); box-shadow: 0 24px 50px rgba(0,0,0,0.1); }
.proj-card.reverse .proj-hero{ order:2; }
.proj-card.reverse .proj-body{ order:1; }
.proj-hero{
  background: linear-gradient(180deg, #fbfaf6 0%, #f2efe7 100%);
  padding: 46px 22px 24px; display:flex; align-items:center; justify-content:center; position:relative;
}
.proj-hero img{ width:100%; max-width:520px; height:auto; display:block; border-radius:12px; box-shadow: 0 10px 28px rgba(0,0,0,0.08); transition: transform 400ms ease; }
.proj-card:hover .proj-hero img{ transform: scale(1.02); }
.proj-num{ position:absolute; top:22px; left:24px; font-family: Georgia, 'Cochin', serif; font-size:0.8rem; font-weight:700; letter-spacing:3px; color: rgba(75,85,99,0.38); }
.proj-cat{ position:absolute; top:18px; right:20px; font-size:0.7rem; font-weight:700; letter-spacing:0.6px; padding:5px 12px; border-radius:999px; color:#fff; box-shadow: 0 2px 8px rgba(0,0,0,0.15); }
.proj-card.reverse .proj-num{ left:auto; right:24px; }
.proj-card.reverse .proj-cat{ right:auto; left:20px; }
.c-align{ background: rgba(76,127,208,0.95); }
.c-retr{ background: rgba(138,107,201,0.95); }
.c-inf{ background: rgba(229,154,58,0.95); }
.c-causal{ background: rgba(78,156,95,0.95); }
.proj-body{ padding: 36px 36px 34px; display:flex; flex-direction:column; justify-content:center; }
.proj-sub{ margin:0 0 4px; color:#9ca3af; font-size:0.76rem; font-weight:600; letter-spacing:0.8px; text-transform:uppercase; }
.proj-title{ margin:0; font-weight:800; font-size:1.5rem; letter-spacing:-0.4px; color:#111827; line-height:1.25; }
.proj-tagline{ margin:12px 0 0; font-style:italic; color:#6b7280; font-size:1rem; line-height:1.55; }
.proj-desc{ margin:12px 0 0; color:#374151; font-size:0.9rem; line-height:1.7; }
.proj-tags{ margin-top:16px; display:flex; flex-wrap:wrap; gap:6px; }
.proj-tags span{ font-size:0.74rem; color:#4b5563; background:rgba(17,24,39,0.04); border:1px solid rgba(17,24,39,0.08); border-radius:999px; padding:3px 10px; }
.proj-actions{ margin-top:22px; }
.proj-btn{ display:inline-flex; align-items:center; gap:6px; padding:9px 18px; border-radius:999px; text-decoration:none !important; font-size:0.88rem; font-weight:600; background: rgba(17,24,39,0.04); color:#111827 !important; border:1px solid rgba(17,24,39,0.1); transition: all 180ms ease; }
.proj-btn:hover{ background: rgba(17,24,39,0.08); }
.card-divider{ text-align:center; padding:46px 0; color: rgba(75,85,99,0.28); font-size:1.05rem; font-family: Georgia, 'Cochin', serif; letter-spacing:14px; user-select:none; }
@media (max-width: 760px){
  .proj-card, .proj-card.reverse{ grid-template-columns: 1fr; }
  .proj-card.reverse .proj-hero, .proj-card.reverse .proj-body{ order:0; }
  .proj-card.reverse .proj-num{ left:24px; right:auto; }
  .proj-card.reverse .proj-cat{ right:20px; left:auto; }
  .proj-hero{ padding: 46px 18px 22px; }
  .proj-body{ padding: 30px 26px 32px; }
  .proj-title{ font-size:1.32rem; }
  .card-divider{ padding:34px 0; }
}
</style>


<div class="proj-wrap">

  <div class="proj-card" id="aligndpo">
    <div class="proj-hero">
      <span class="proj-num">№ 01</span>
      <span class="proj-cat c-align">ALIGNMENT</span>
      <img src="/images/projects/aligndpo.png?v=3" alt="AlignDPO overview">
    </div>
    <div class="proj-body">
      <p class="proj-sub">LLM alignment</p>
      <p class="proj-title">AlignDPO</p>
      <p class="proj-tagline">Preference fine-tuning of Mistral-7B with three swappable losses.</p>
      <p class="proj-desc">Fine-tunes Mistral-7B-Instruct on Anthropic HH-RLHF (or UltraFeedback) with QLoRA: a 4-bit NF4 base, trainable LoRA adapters and a frozen reference model. DPO, IPO and KTO are written from scratch and switched by one config flag, so a controlled ablation compares them under identical hyperparameters, tracked by reward accuracy, reward margin and GPT-4 win-rate.</p>
      <div class="proj-tags"><span>DPO</span><span>IPO</span><span>KTO</span><span>QLoRA</span><span>Mistral-7B</span><span>W&amp;B</span></div>
      <div class="proj-actions"><a class="proj-btn" href="https://github.com/olivia3395/llm-projects/tree/main/AlignDPO">&lt;/&gt; Code</a>
    </div>
    </div>
  </div>

  <div class="card-divider">❦</div>

  <div class="proj-card reverse" id="ragaudit">
    <div class="proj-hero">
      <span class="proj-num">№ 02</span>
      <span class="proj-cat c-align">EVALUATION</span>
      <img src="/images/projects/ragaudit.png?v=3" alt="RAGAudit overview">
    </div>
    <div class="proj-body">
      <p class="proj-sub">Hallucination detection</p>
      <p class="proj-title">RAGAudit</p>
      <p class="proj-tagline">Open-domain QA that audits every answer before trusting it.</p>
      <p class="proj-desc">Hybrid BM25 + FAISS retrieval, fused by reciprocal rank, feeds a 4-bit Mistral-7B. Each answer then passes three detectors: sentence-level NLI entailment (DeBERTa), SelfCheckGPT consistency across sampled answers, and semantic entropy over meaning clusters. Their scores are combined with weights calibrated on HaluEval, and the pipeline is benchmarked on Natural Questions.</p>
      <div class="proj-tags"><span>BM25</span><span>FAISS</span><span>RRF</span><span>NLI</span><span>SelfCheckGPT</span><span>semantic entropy</span></div>
      <div class="proj-actions"><a class="proj-btn" href="https://github.com/olivia3395/llm-projects/tree/main/RAGAudit">&lt;/&gt; Code</a>
    </div>
    </div>
  </div>

  <div class="card-divider">❦</div>

  <div class="proj-card" id="graphrag">
    <div class="proj-hero">
      <span class="proj-num">№ 03</span>
      <span class="proj-cat c-retr">RETRIEVAL</span>
      <img src="/images/projects/graphrag.png?v=3" alt="GraphRAG overview">
    </div>
    <div class="proj-body">
      <p class="proj-sub">Multimodal retrieval</p>
      <p class="proj-title">GraphRAG</p>
      <p class="proj-tagline">Retrieval that follows the graph one hop further.</p>
      <p class="proj-desc">Combines dense text retrieval (sentence-transformers + ChromaDB), CLIP image–text search and entity-graph expansion in one FastAPI service. The graph route pulls in second-hop context that flat chunk retrieval misses. Answers are synthesized by an LLM when a key is configured, with an extractive fallback that runs fully offline.</p>
      <div class="proj-tags"><span>entity graph</span><span>CLIP</span><span>ChromaDB</span><span>FastAPI</span></div>
      <div class="proj-actions"><a class="proj-btn" href="https://github.com/olivia3395/llm-projects/tree/main/GraphRAG">&lt;/&gt; Code</a>
    </div>
    </div>
  </div>

  <div class="card-divider">❦</div>

  <div class="proj-card reverse" id="adaptive-rag">
    <div class="proj-hero">
      <span class="proj-num">№ 04</span>
      <span class="proj-cat c-retr">RETRIEVAL</span>
      <img src="/images/projects/adaptive_rag.png?v=3" alt="Adaptive RAG overview">
    </div>
    <div class="proj-body">
      <p class="proj-sub">Query routing</p>
      <p class="proj-title">Adaptive RAG</p>
      <p class="proj-tagline">Decides when to retrieve, how often, and whether to trust the answer.</p>
      <p class="proj-desc">A classifier answers simple factual questions directly and sends complex or time-sensitive ones through two retrieval passes, with a follow-up query written from the first draft. A self-reflection step labels the final answer as grounded, partially grounded or hallucinated. It runs offline by default with TF-IDF retrieval; dense embeddings and an OpenAI model are optional.</p>
      <div class="proj-tags"><span>query routing</span><span>iterative retrieval</span><span>self-reflection</span><span>FastAPI</span></div>
      <div class="proj-actions"><a class="proj-btn" href="https://github.com/olivia3395/llm-projects/tree/main/Adaptive-RAG">&lt;/&gt; Code</a>
    </div>
    </div>
  </div>

  <div class="card-divider">❦</div>

  <div class="proj-card" id="draftverify">
    <div class="proj-hero">
      <span class="proj-num">№ 05</span>
      <span class="proj-cat c-inf">INFERENCE</span>
      <img src="/images/projects/draftverify.png?v=3" alt="DraftVerify overview">
    </div>
    <div class="proj-body">
      <p class="proj-sub">Speculative decoding</p>
      <p class="proj-title">DraftVerify</p>
      <p class="proj-tagline">A small model drafts, a large model verifies.</p>
      <p class="proj-desc">A speculative-decoding engine with a benchmark harness. The draft model proposes k tokens, the target model checks them in one forward pass, the matching prefix is accepted and the first mismatch is replaced by the target's token. Sweeps over the draft length measure latency, throughput and acceptance rate against plain autoregressive decoding.</p>
      <div class="proj-tags"><span>draft–verify</span><span>acceptance rate</span><span>latency</span><span>FastAPI</span></div>
      <div class="proj-actions"><a class="proj-btn" href="https://github.com/olivia3395/llm-projects/tree/main/DraftVerify">&lt;/&gt; Code</a>
    </div>
    </div>
  </div>

  <div class="card-divider">❦</div>

  <div class="proj-card reverse" id="hqq">
    <div class="proj-hero">
      <span class="proj-num">№ 06</span>
      <span class="proj-cat c-inf">INFERENCE</span>
      <img src="/images/projects/hqq.png?v=3" alt="HQQ overview">
    </div>
    <div class="proj-body">
      <p class="proj-sub">Low-bit quantization</p>
      <p class="proj-title">HQQ</p>
      <p class="proj-tagline">Calibration-free 1–8 bit quantization of LLaMA-2, from scratch.</p>
      <p class="proj-desc">Implements Half-Quadratic Quantization: grouped weights get a per-group scale and zero point, refined by a proximal solver that alternates a sparse error update with a closed-form zero-point step, with no calibration data. HQQLinear drops in for nn.Linear, and benchmarks cover perplexity, decoding speed and memory; 1-bit weights take 12.7× less memory than fp16.</p>
      <div class="proj-tags"><span>HQQ</span><span>W1–W8</span><span>proximal optimization</span><span>LLaMA-2</span></div>
      <div class="proj-actions"><a class="proj-btn" href="https://github.com/olivia3395/llm-projects/tree/main/HQQ-Quantization">&lt;/&gt; Code</a>
    </div>
    </div>
  </div>

  <div class="card-divider">❦</div>

  <div class="proj-card" id="congestion-pricing">
    <div class="proj-hero">
      <span class="proj-num">№ 07</span>
      <span class="proj-cat c-causal">CAUSAL</span>
      <img src="/images/projects/congestion.png?v=3" alt="Congestion Pricing overview">
    </div>
    <div class="proj-body">
      <p class="proj-sub">Policy evaluation</p>
      <p class="proj-title">Congestion Pricing</p>
      <p class="proj-tagline">What New York's congestion toll did to demand, fares and trip geography.</p>
      <p class="proj-desc">Builds a zone × day panel from 12M+ NYC TLC Yellow, Green and HVFHV trips (July 2024 – June 2025) around the toll that started on 5 January 2025. The estimates climb a six-step ladder, from TWFE and Callaway–Sant'Anna event studies to continuous-dose DiD, synthetic DiD, double ML and causal forests for zone-level effects, with placebo, anticipation and leave-one-out robustness checks.</p>
      <div class="proj-tags"><span>CS-DiD</span><span>synthetic DiD</span><span>double ML</span><span>causal forest</span><span>DuckDB</span></div>
      <div class="proj-actions"><a class="proj-btn" href="https://github.com/olivia3395/data-science-portfolio/tree/main/causal-inference/Congestion-Pricing">&lt;/&gt; Code</a>
    </div>
    </div>
  </div>

  <div class="card-divider">❦</div>

  <div class="proj-card reverse" id="causallens">
    <div class="proj-hero">
      <span class="proj-num">№ 08</span>
      <span class="proj-cat c-causal">CAUSAL</span>
      <img src="/images/projects/causallens.png?v=3" alt="CausalLens overview">
    </div>
    <div class="proj-body">
      <p class="proj-sub">LLM-augmented causal inference</p>
      <p class="proj-title">CausalLens</p>
      <p class="proj-tagline">Causal estimates with a plain-English report attached.</p>
      <p class="proj-desc">Takes a tabular dataset through a DoWhy causal DAG, four ATE estimators (propensity matching, IPW, double ML, causal forest) and refutation tests, then uses the Claude API to explain the graph and write a business report. It is validated on Lalonde, where the observational estimates can be checked against the experimental benchmark, and applied to IBM HR attrition.</p>
      <div class="proj-tags"><span>DoWhy</span><span>EconML</span><span>refutation</span><span>Claude API</span><span>Streamlit</span></div>
      <div class="proj-actions"><a class="proj-btn" href="https://github.com/olivia3395/data-science-portfolio/tree/main/causal-inference/CausalLens">&lt;/&gt; Code</a>
    </div>
    </div>
  </div>

</div>
