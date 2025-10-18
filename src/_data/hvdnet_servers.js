export default async function () {
  try {
    // Replace with your actual API endpoint
    const response = await fetch("https://api.highvaluedata.net/servers", {
      timeout: 5000,
    });
    if (!response.ok) throw new Error("Failed to fetch servers");
    return await response.json();
  } catch (error) {
    console.warn(
      "[11ty] Warning: Could not fetch hvdnet_servers data. Using fallback.",
      error.message
    );
    // Return empty array or fallback data for local builds
    return [];
  }
}
