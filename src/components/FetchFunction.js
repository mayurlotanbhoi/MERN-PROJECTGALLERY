async function fetchProject(url) {
  try {
    // console.log("call");
    const res = await fetch(url, {
      method: "get",
      credentials: "include",
    });
    const Data = await res.json();

    // console.log(Data);
    return Data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchProject;
