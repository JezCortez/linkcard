const profile = {
  name: "Jez Cortez",
  handle: "@jezcortez",
  bio: "Developer, Creator, and Gamer. Connect with me on these platforms.",
  avatarImage: "assets/Jezzy pfp (3).png",
  avatarText: "YN",
  links: [
    { label: "Portfolio", url: "https://jezcortez.dev", accent: "#0e9f8b" },
    { label: "GitHub", url: "https://github.com/jezcortez", accent: "#2563eb" },
    { label: "LinkedIn", url: "www.linkedin.com/in/jez-kendrick-cortez-8b7580338", accent: "#f97316" },
    { label: "X / Twitter", url: "https://x.com/Jezzy_31", accent: "#0284c7" },
    { label: "YouTube", url: "https://www.youtube.com/@jezzy4491", accent: "#dc2626" }
  ]
};

function normalizeUrl(rawUrl) {
  if (!rawUrl) return "#";
  return /^https?:\/\//i.test(rawUrl) ? rawUrl : `https://${rawUrl}`;
}

const nameEl = document.querySelector("#name");
const handleEl = document.querySelector("#handle");
const bioEl = document.querySelector("#bio");
const avatarEl = document.querySelector("#avatar");
const listEl = document.querySelector("#link-list");

nameEl.textContent = profile.name;
handleEl.textContent = profile.handle;
bioEl.textContent = profile.bio;

if (profile.avatarImage) {
  avatarEl.classList.add("has-image");
  avatarEl.style.backgroundImage = `url("${profile.avatarImage}")`;
  avatarEl.removeAttribute("aria-hidden");
  avatarEl.setAttribute("role", "img");
  avatarEl.setAttribute("aria-label", `${profile.name} profile photo`);
  avatarEl.textContent = "";
} else {
  avatarEl.removeAttribute("role");
  avatarEl.setAttribute("aria-hidden", "true");
  avatarEl.removeAttribute("aria-label");
  avatarEl.textContent = profile.avatarText;
}

profile.links.forEach((item, index) => {
  const li = document.createElement("li");
  li.className = "link-item";
  li.style.setProperty("--i", index.toString());

  const link = document.createElement("a");
  link.className = "link";
  link.href = normalizeUrl(item.url);
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
  url.textContent = normalizeUrl(item.url).replace(/^https?:\/\//i, "");

  const arrow = document.createElement("span");
  arrow.className = "link-arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "->";

  textWrap.append(title, url);
  link.append(textWrap, arrow);
  li.append(link);
  listEl.append(li);
});
