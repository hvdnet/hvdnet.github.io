export default async function () {
  // Replace with your actual API endpoint
  const response = await fetch("https://api.highvaluedata.net/servers");
  if (!response.ok) throw new Error("Failed to fetch servers");
  return await response.json();
}
