funcA = () => {
  let a = 1;

  function funcB() {
    let b = 2;

    function funcC() {
      let c = 3;
      console.log(`func C| ${a} ${b} ${c}`);
    }

    funcC();
    console.log(`func B| ${a} ${b}`);
  }

  funcB();
  console.log(`func A| ${a}`);
};

funcA();
