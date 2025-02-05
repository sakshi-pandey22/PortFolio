const response = await fetch("https://api.github.com/repos/user-pratik/portfolio/issues", {
    method: "POST",
    headers: {
        "Authorization": "Bearer " + process.env.GH_TOKEN,
        "Accept": "application/vnd.github.v3+json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "New Feedback",
        body: JSON.stringify(data, null, 2),
        labels: ["feedback"]
    })
});