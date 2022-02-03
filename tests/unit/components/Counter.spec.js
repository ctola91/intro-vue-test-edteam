import Counter from "@/components/Counter";
import { mount } from "@vue/test-utils";

describe("Counter.vue", () => {
  it("Se puede hacer click al boton", async () => {
    const wrapper = mount(Counter);
    await wrapper.find("button").trigger("click");
    expect(wrapper.find("span").text()).toBe("Contador: 1");
  });
});
