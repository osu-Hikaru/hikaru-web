// Licensed under GPL v3 - Check Repository Root for full License notice.
// osu!Hikaru, a fully independent osu!Lazer Private Server backend.
// Copyright (C) 2021 Hikaru Team <copyright@hikaru.pw>

const FILENAME = location.pathname + "post.md";
const set = (t) => (document.getElementById("content").innerHTML = t);
const pull = fetch(FILENAME, {
  headers: { Accept: "text/markdown" },
}).then((res) => {
  if (!res.ok) throw new Error(`${res.statusText} (${res.status})`);

  return res.text();
});
