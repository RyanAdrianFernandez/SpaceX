const getLaunchBy = async ({ id }) => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/" + id, {});
  const launch = await res.json();
  console.log(launch);
  return launch;
};
const getLatestLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc"
        },
        limit: 12
      }
    })
  });
  const { docs: launches } = await res.json();
  console.log(launches);
  return launches;
};

export { getLatestLaunches as a, getLaunchBy as g };
