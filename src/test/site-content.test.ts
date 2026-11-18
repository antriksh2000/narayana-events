import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, it } from "node:test";
import {
  clients,
  enquirySchema,
  eventTypes,
  navigation,
  portfolioCategories,
  portfolioItems,
  services,
} from "../lib/site-content.ts";

const root = resolve(import.meta.dirname, "../..");
const publicFile = (path: string) => existsSync(resolve(root, "public", path));

describe("site content", () => {
  it("presents only the services Narayan publicly offers", () => {
    assert.deepEqual(
      services.map((service) => service.slug),
      [
        "corporate-events",
        "launches",
        "brand-activations",
        "exhibitions",
        "awards",
        "sports-events",
      ],
    );
  });

  it("offers an event type for every service plus an open option", () => {
    assert.equal(eventTypes.length, services.length + 1);
    assert.equal(eventTypes.at(-1), "Other / not sure yet");
  });

  it("has optimised images for every service and portfolio item", () => {
    for (const name of [...services.map((s) => s.image), ...portfolioItems.map((p) => p.image)]) {
      for (const size of ["800", "1600"]) {
        assert.ok(publicFile(`images/${name}-${size}.webp`), `${name}-${size}.webp`);
      }
    }
  });

  it("has a logo file for every client", () => {
    for (const client of clients) {
      assert.ok(publicFile(`images/clients/${client.logo}.webp`), client.logo);
    }
  });

  it("gives every portfolio category at least one item and every image alt text", () => {
    for (const category of portfolioCategories) {
      assert.ok(
        portfolioItems.some((item) => item.category === category),
        category,
      );
    }
    assert.ok(portfolioItems.every((item) => item.alt.length > 20));
  });

  it("validates enquiries", () => {
    const valid = {
      name: "Asha",
      email: "asha@example.com",
      phone: "+91 98100 00000",
      eventType: eventTypes[0],
      preferredDate: "",
      message: "Annual dealer meet for 300 guests.",
    };
    assert.equal(enquirySchema.safeParse(valid).success, true);
    assert.equal(
      enquirySchema.safeParse({ ...valid, email: "nope", eventType: "" }).success,
      false,
    );
  });
});

describe("routing", () => {
  it("has a page for the home page and every navigation link", () => {
    assert.ok(existsSync(resolve(root, "src/app/page.tsx")));
    for (const item of navigation) {
      assert.ok(existsSync(resolve(root, `src/app${item.to}/page.tsx`)), item.to);
    }
  });
});
