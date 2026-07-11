---
layout: post
title: "Rich content demo: charts, diagrams & notebooks"
date: 2024-06-01 09:00:00+0800
description: A demo post exercising the Chart.js, Plotly, Mermaid, pseudocode, TikZ and Jupyter integrations. Safe to delete.
tags: dataviz demo
categories: demo
chart_js: true
plotly: true
mermaid: true
pseudocode: true
tikzjax: true
---

This post is a scratchpad that exercises each rich-content renderer. It's safe to delete once you've QA'd the features.

## Chart.js

<canvas id="demoChart" style="max-width:100%;"></canvas>
<script>
  window.addEventListener("load", function () {
    new Chart(document.getElementById("demoChart"), {
      type: "bar",
      data: {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [{ label: "Teleconsults", data: [1200, 1850, 2400, 3100] }],
      },
      options: { responsive: true, plugins: { legend: { display: true } } },
    });
  });
</script>

## Plotly

<div id="demoPlotly" style="width:100%;height:380px;"></div>
<script>
  window.addEventListener("load", function () {
    Plotly.newPlot(
      "demoPlotly",
      [{ x: ["Q1", "Q2", "Q3", "Q4"], y: [1200, 1850, 2400, 3100], type: "scatter", mode: "lines+markers", name: "Teleconsults" }],
      { margin: { t: 20 } },
      { responsive: true }
    );
  });
</script>

## Mermaid

<div class="mermaid">
graph LR
  A[Raw sources] --> B[Databricks bronze]
  B --> C[Silver]
  C --> D[Gold tables]
  D --> E[Dashboards]
</div>

## Pseudocode

<pre class="pseudocode">
\begin{algorithm}
\caption{Gradient Descent}
\begin{algorithmic}
\PROCEDURE{GradientDescent}{$f, \theta_0, \eta$}
    \STATE $\theta \gets \theta_0$
    \WHILE{not converged}
        \STATE $\theta \gets \theta - \eta \nabla f(\theta)$
    \ENDWHILE
    \RETURN $\theta$
\ENDPROCEDURE
\end{algorithmic}
\end{algorithm}
</pre>

## TikZ (TikZJax)

<script type="text/tikz">
  \begin{tikzpicture}
    \draw[thick,->] (0,0) -- (3,0) node[right] {$x$};
    \draw[thick,->] (0,0) -- (0,2.2) node[above] {$y$};
    \draw[domain=0:2.8,smooth,variable=\x,blue,thick] plot ({\x},{0.25*\x*\x});
  \end{tikzpicture}
</script>

## Math (MathJax)

Attribution via the integrated gradient: $\phi_i(x) = (x_i - x_i') \int_0^1 \frac{\partial f(x' + \alpha(x-x'))}{\partial x_i}\, d\alpha$.

## Jupyter notebook

{% include jupyter_notebook.html path="/assets/jupyter/demo.html" title="Demo notebook" %}
