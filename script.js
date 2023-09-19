const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [74, 85, 60, 90, 59, 47],
        borderWidth: 2,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };
  
  const config = {
    type: "bar",
    data: data,
    options: {
      responsive: false,
      plugins: {
        title: {
          text: "Monthly Sales Data",
          display: true,
        },
      },
    },
  };
  const ctx = document.getElementById("myChart").getContext("2d");
  
  const myChart = new Chart(ctx, config);
  