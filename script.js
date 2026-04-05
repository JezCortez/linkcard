const profile = {
  name: "Your Name",
  handle: "@yourhandle",
  bio: "Developer, creator, and lifelong learner. Connect with me on these platforms.",
  avatarText: "YN",
  links: [
    { label: "Portfolio", url: "https://yourwebsite.com", accent: "#0e9f8b" },
    { label: "GitHub", url: "https://github.com/yourusername", accent: "#2563eb" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourusername", accent: "#f97316" },
    { label: "X / Twitter", url: "https://x.com/yourusername", accent: "#0284c7" },
    { label: "Instagram", url: "https://instagram.com/yourusername", accent: "#dc2626" }
  ]
};

const nameEl = document.querySelector("#name");
const handleEl = document.querySelector("#handle");
const bioEl = document.querySelector("#bio");
const avatarEl = document.querySelector("#avatar");
const listEl = document.querySelector("#link-list");

nameEl.textContent = profile.name;
handleEl.textContent = profile.handle;
bioEl.textContent = profile.bio;
avatarEl.textContent = profile.avatarText;

profile.links.forEach((item, index) => {
  const li = document.createElement("li");
  li.className = "link-item";
  li.style.setProperty("--i", index.toString());

  const link = document.createElement("a");
  link.className = "link";
  link.href = item.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.style.setProperty("--accent-color", item.accent || "#2563eb");

  const textWrap = document.createElement("div");
  textWrap.className = "link-text";

  const title = document.createElement("p");
  title.className = "link-title";
  title.textContent = item.label;

  const url = document.createElement("p");
  url.className = "link-url";
  url.textContent = item.url.replace(/^https?:\/\//, "");

  const arrow = document.createElement("span");
  arrow.className = "link-arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "->";

  textWrap.append(title, url);
  link.append(textWrap, arrow);
  li.append(link);
  listEl.append(li);
});
