import {type Doc, type ApiSpaceXResponse} from "../types/api.ts"

export const getLaunchBy = async ({id}: {id: string})=>{
  const res = await fetch( `https://api.spacexdata.com/v5/launches/${id}`)
  const launch = (await res.json()) as Doc
  return launch
}


export const getLatestLaunches = async ()=>{
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers:{
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
  })
  const {docs: launches} = await res.json() as ApiSpaceXResponse
  console.log(launches)
  return launches
}

