import Message from "@/components/Message";
import { mount, shallowMount } from "@vue/test-utils";

describe("Message.vue", () => {
  it("Verificar que el componente se renderiza correctamente", () => {
    const text = "Hola Mundo";
    // const wrapper = shallowMount(Message);
    const wrapper = mount(Message, {
      props: {
        message: text,
      },
    });
    expect(wrapper.text()).toMatch(text);
    expect(wrapper.html()).toMatch(`<div>${text}</div>`);
  });
});
