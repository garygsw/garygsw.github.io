// Has to be in the head tag, otherwise a flicker effect will occur.

// Theme setting is one of: "light", "dark", "system".
// "system" follows the OS `prefers-color-scheme` and updates live.

let systemPrefersDark = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

let getThemeSetting = () => {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark" || stored === "system") {
    return stored;
  }
  return "system";
};

// Cycle: light -> dark -> system -> light
let toggleTheme = () => {
  const current = getThemeSetting();
  let next;
  if (current === "light") {
    next = "dark";
  } else if (current === "dark") {
    next = "system";
  } else {
    next = "light";
  }
  localStorage.setItem("theme", next);
  applyTheme();
};

let applyTheme = () => {
  transTheme();

  const setting = getThemeSetting();
  const effective = setting === "system" ? (systemPrefersDark() ? "dark" : "light") : setting;

  // Drives the icon shown in the navbar toggle.
  document.documentElement.setAttribute("data-theme-setting", setting);

  // Drives the actual colour palette (light == no attribute).
  if (effective === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }

  // Code Syntax Highlighting
  let syntax_link;
  if (effective === "dark") {
    syntax_link = '<link id="syntax-theme" rel="stylesheet" href="https://gitcdn.link/repo/jwarby/jekyll-pygments-themes/master/monokai.css" />';
  } else {
    syntax_link = '<link id="syntax-theme" rel="stylesheet" href="https://gitcdn.link/repo/jwarby/jekyll-pygments-themes/master/autumn.css" />';
  }
  if (window.jQuery) {
    $("#syntax-theme").remove();
    $("head").append(syntax_link);
  }

  // Updates the background of medium-zoom overlay.
  if (typeof medium_zoom !== "undefined") {
    medium_zoom.update({
      background: getComputedStyle(document.documentElement)
          .getPropertyValue("--global-bg-color") + "ee",  // + 'ee' for transparency.
    });
  }
};

let transTheme = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 500);
};

// Re-apply when the OS theme changes while we're following the system.
if (window.matchMedia) {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (getThemeSetting() === "system") {
      applyTheme();
    }
  });
}

applyTheme();
