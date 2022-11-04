const plot = document.querySelectorAll(".plot");
const spend = document.querySelectorAll(".spend__amount");
const graphs = document.querySelector(".graphs");

const json = async () => {
  let response = await fetch("./data.json");
  let res = await response.json();
  let maxi;
  let amounts = res.map((res) => res.amount);
  maxi = Math.max(...amounts);

  plot.forEach((pl, i) => {
    console.log(res[i].amount);
    if (res[i].amount === maxi) {
      pl.style.background = "var(--Cyan)";
    }
    pl.style.height = `${res[i].amount}%`;
    console.log((pl.style.height = `${res[i].amount}%`));
  });

  graphs.addEventListener("mouseover", (e) => {
    if (e.target.closest(".plot")) {
      let inPlot = e.target.closest(".plot");
      const spendAmount = e.target.nextElementSibling;
      spendAmount.innerHTML = `$${res[spendAmount.dataset.amount - 1].amount}`;
      spendAmount.style.bottom = `${inPlot.offsetHeight * 2}px`;
      spendAmount.style.padding = "0.2rem 0.4rem";
      spendAmount.style.opacity = 1;
      console.log(`${inPlot.offsetHeight}px`);
    } else {
      plot.forEach((el) => (el.nextElementSibling.style.opacity = 0));
    }
  });
};

json();
