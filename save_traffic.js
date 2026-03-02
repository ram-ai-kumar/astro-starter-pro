import fs from "node:fs";

async function saveTraffic() {
  const token = process.env.GRAPH_TOKEN;
  const repo =
    process.env.GITHUB_REPOSITORY || "devgelo-labs/astro-starter-pro";
  const response = await fetch(
    `https://api.github.com/repos/${repo}/traffic/clones`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );

  if (!response.ok) throw new Error(`GitHub API error: ${response.statusText}`);

  const newData = await response.json();
  const filePath = "./data/clones.json";

  if (!fs.existsSync("./data")) fs.mkdirSync("./data");

  fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));
  console.log("Traffic data saved successfully!");
}

saveTraffic().catch((err) => {
  console.error(err);
  process.exit(1);
});
