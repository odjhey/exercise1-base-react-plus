import { app } from "./base-cra-on-steroids"

describe("app", () => {
  test("it should be ok", () => {
    expect(app.ok).toBe(true)
  })
})
