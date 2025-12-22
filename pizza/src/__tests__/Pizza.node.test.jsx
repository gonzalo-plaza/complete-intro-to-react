import { render, cleanup } from "@testing-library/react";
import { expect, test } from "vitest";
import Pizza from "../Pizza";
import { afterEach } from "vitest";

afterEach(cleanup);

test("alt test renders on Pizza image", async () => {
  const name = "My Favourite Pizza";
  const src = "https://picsum.photos/200";

  const screen = render(
    <Pizza name={name} description="super cool pizza" image={src} />,
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("to have default image if none is provided", async () => {
  const screen = render(
    <Pizza name="something else" description="super cool pizza" />,
  );

  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
