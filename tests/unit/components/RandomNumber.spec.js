import RandomNumber from "@/components/RandomNumber";
import { mount } from "@vue/test-utils";

describe("RandomNumber.vue", () => {
  it("Si hacemos click en el boton, debe generar un numero entre 1 y 10", async () => {
    const wrapper = mount(RandomNumber);
    await wrapper.find("button").trigger("click");
    const randomNumber = parseInt(wrapper.find("span").text());
    console.log(randomNumber);
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(10);
  });

  it("Si hacemos click en el boton, debe generar un numero entre 200 y 1000", async () => {
    const wrapper = mount(RandomNumber, {
      props: {
        min: 200,
        max: 1000,
      },
    });
    await wrapper.find("button").trigger("click");
    const randomNumber = parseInt(wrapper.find("span").text());
    console.log(randomNumber);
    expect(randomNumber).toBeGreaterThanOrEqual(200);
    expect(randomNumber).toBeLessThanOrEqual(1000);
  });
});
