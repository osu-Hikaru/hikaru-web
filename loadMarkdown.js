const FILENAME = location.pathname + "post.md";
const set = (t) => (document.getElementById("content").innerHTML = t);
const pull = fetch(FILENAME, {
  headers: { Accept: "text/markdown" },
}).then((res) => {
  if (!res.ok) throw new Error(`${res.statusText} (${res.status})`);

  return res.text();
});
