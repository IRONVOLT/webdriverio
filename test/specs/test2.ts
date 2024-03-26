describe("some info", () => {
  it("test one", async () => {
    await browser.url('google.com')

    await $('//*[text()="Принять все"]').parentElement().click()

    await $('[name="q"]').setValue('666');

    await $('[value="Поиск в Google"]').click()

    await browser.pause(2000)
  });
});
