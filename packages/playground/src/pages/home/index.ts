import { defineComponent } from "@vue-mini/core";
import { test } from "three-part-package";

defineComponent(() => {
  const { count } = test()
  function add() {
    count.value++
    console.log(count.value)
  }

  return {
    count,
    add
  }
});
